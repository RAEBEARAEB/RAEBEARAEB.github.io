"""Fix supervisor-pc supervisor-issue-report.html and project-pc fence-issue-report.html:
1. Move problem type to top of sec-issue
2. Add "应建未建围挡" logic: hide sec-project fields, show "项目工程是否已报建"+所属街道
"""
import re

def fix_report_file(path, source_default):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # === Part 1: Add "项目工程是否已报建" field row after 问题类型 in sec-issue ===
    new_fields = '''
          <div id="isReportedRow" style="display:none"><div class="form-item full"><label class="form-label"><span class="required">*</span> 项目工程是否已报建</label>
            <div style="display:flex;gap:16px;padding-top:4px">
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="是" onchange="onIsReportedChange()"> 是</label>
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="否" onchange="onIsReportedChange()"> 否</label>
            </div></div>
            <div class="form-item full" id="rptStreetRow" style="display:none"><label class="form-label"><span class="required">*</span> 所属街道</label><select class="form-select" id="rptStreet"><option value="">请选择所属街道</option></select></div>
          </div>'''

    # Insert after 问题类型 grid div
    c = c.replace(
        '<div class="form-item full"><label class="form-label"><span class="required">*</span> 问题类型</label><div class="type-grid" id="typeGrid"></div></div>',
        '<div class="form-item full"><label class="form-label"><span class="required">*</span> 问题类型</label><div class="type-grid" id="typeGrid"></div></div>' + new_fields
    )

    # === Part 2: Update selectType to handle 应建未建 ===
    old_select = "function selectType(t){_issueType=t;renderTypeGrid();onEngineerChange();}"
    new_select = """function selectType(t){
  _issueType=t;renderTypeGrid();
  var isNotBuilt=t==='应建未建围挡';
  document.getElementById('sec-project').style.display=isNotBuilt?'none':'';
  document.getElementById('isReportedRow').style.display=isNotBuilt?'':'none';
  if(!isNotBuilt){
    document.querySelector('input[name="rptIsReported"]:checked')&&(document.querySelector('input[name="rptIsReported"]:checked').checked=false);
    document.getElementById('rptStreetRow').style.display='none';
    onEngineerChange();
  }
}"""
    c = c.replace(old_select, new_select)

    # === Part 3: Add onIsReportedChange ===
    old_engineer = """function onEngineerChange(){var pn=document.getElementById('rptProject').value,en=document.getElementById('rptEngineer').value;"""
    new_engineer = """function onIsReportedChange(){
  var v=document.querySelector('input[name="rptIsReported"]:checked');
  var isYes=v&&v.value==='是';
  document.getElementById('sec-project').style.display=isYes?'':'none';
  document.getElementById('rptStreetRow').style.display=isYes?'none':'';
  if(isYes){onProjectChange();}
}
function onEngineerChange(){var pn=document.getElementById('rptProject').value,en=document.getElementById('rptEngineer').value;"""
    c = c.replace(old_engineer, new_engineer)

    # === Part 4: Fix submitReport to handle 应建未建 ===
    old_submit = "function submitReport(){if(!_issueType){showToast('请选择问题类型');return;}"
    new_submit = """function submitReport(){
  if(!_issueType){showToast('请选择问题类型');return;}
  var isNotBuilt=_issueType==='应建未建围挡';
  if(isNotBuilt){
    var isReported=document.querySelector('input[name="rptIsReported"]:checked');
    if(!isReported){showToast('请选择项目工程是否已报建');return;}
    if(isReported.value==='是'){
      // Normal flow - need project data
    }else{
      var street=document.getElementById('rptStreet').value;
      if(!street){showToast('请选择所属街道');return;}
      var detail=document.getElementById('rptDetail').value.trim();
      if(!detail){showToast('请填写问题详情');return;}
      if(_photos.length===0){showToast('请至少上传一张照片');return;}
      if(!_location.picked){showToast('请选择问题位置');return;}
      MOCK_DATA.addStreetIssue({type:_issueType,fenceId:'',fenceAddr:street,details:detail,photos:_photos.slice(),location:{lat:_location.lat,lng:_location.lng,addr:_location.addr},projectName:'',engineerName:'',responsibleUnit:'',source:"""
    new_submit += "'" + source_default + "'"
    new_submit += """,street:street});
      showToast('问题已上报成功');setTimeout(function(){window.location.href='"""
    new_submit += ('fence-issue-list.html' if 'project-pc' in path else 'supervisor-issue-list.html')
    new_submit += """';},1200);return;}}"""
    c = c.replace(old_submit, new_submit)

    # === Part 5: Add street options init ===
    old_init = "renderTypeGrid();initProjectSelect();"
    new_init = """renderTypeGrid();initProjectSelect();
(function initStreets(){
  var sel=document.getElementById('rptStreet');if(!sel)return;
  var streets=['桂园街道','黄贝街道','东门街道','南湖街道','笋岗街道','清水河街道','翠竹街道','东湖街道','莲塘街道','粤海街道','南头街道','沙河街道','西丽街道','桃源街道','福田街道','香蜜湖街道','民治街道','龙华街道','新安街道','西乡街道'];
  sel.innerHTML='<option value="">请选择所属街道</option>';
  streets.forEach(function(s){var o=document.createElement('option');o.value=s;o.textContent=s;sel.appendChild(o);});
})();"""
    c = c.replace(old_init, new_init)

    # === Part 6: Add 'street' to submitReport's addStreetIssue call for normal flow ===
    old_add = ".addStreetIssue({type:_issueType,fenceId:"
    new_add = ".addStreetIssue({street:(fence?fence.projectStreet:''),type:_issueType,fenceId:"
    c = c.replace(old_add, new_add)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'Fixed: {path}')

# Apply to both files
fix_report_file(
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\supervisor-issue-report.html",
    '监管巡查'
)
fix_report_file(
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-report.html",
    '项目巡检'
)
