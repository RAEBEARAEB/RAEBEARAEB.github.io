# -*- coding: utf-8 -*-
import sys
path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\YZY\index.html"
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# === 1. Add CSS before </style> ===
css = """
.yzzy-tabs{display:flex;gap:0;padding:0 6px;margin:8px 10px 0;background:var(--gray-50);border-radius:var(--radius-lg)}
.yzzy-tab{flex:1;text-align:center;padding:8px 0;font-size:12px;font-weight:500;color:var(--text-secondary);border:none;background:transparent;cursor:pointer;border-radius:var(--radius-lg);transition:all .15s;font-family:var(--font-family)}
.yzzy-tab.active{background:var(--blue);color:#fff;font-weight:600;box-shadow:0 1px 3px rgba(24,98,212,.3)}
"""
c = c.replace('</style>', css + '</style>')

# === 2. Add JS tab and detail logic ===
# Add YZY active tab variable at the top of JS
c = c.replace(
    "var issues = MOCK_DATA.getStreetIssues();",
    """var _yzzyTab='all';
var YZYZ_STREET='粤海街道';
var issues = MOCK_DATA.getStreetIssues();"""
)

# Tab switching
js_tab = """
function switchYZYTab(tab){
  _yzzyTab=tab;
  document.querySelectorAll('.yzzy-tab').forEach(function(b){b.classList.toggle('active',b.dataset.tab===tab)});
  renderList();
}
// Filter by tab
if(_yzzyTab==='street') issues=issues.filter(function(i){return i.source==='街道上报'&&i.type!=='应建未建围挡';});
if(_yzzyTab==='supervise') issues=issues.filter(function(i){return i.type==='应建未建围挡'&&(i.street||'')===YZYZ_STREET;});"""
c = c.replace("if (kw) issues = issues.filter", js_tab + "\nif (kw) issues = issues.filter")

# === 3. Update card click — open detail for all, but with rectification mode for 应建未建 ===
old_card = """h += '<div class="issue-card'+cardCls+'"><div class="issue-card-body">'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-start">'+
      '<span class="iss-type">'+esc(i.type)+'</span>'+
      '<span class="tag tag-'+stCls+'">'+esc(i.status)+'</span></div>'+
      '<div class="iss-proj">'+esc(i._projectName||i.projectName||'--')+' / '+esc(i.engineerName||'--')+'</div>'+
      '<div class="iss-desc">'+esc(i.details||'')+'</div>'+
      '<div class="iss-meta"><span>'+esc(i.source||'')+'</span><span>'+esc(i.reportTime||'')+'</span></div>'+
      '</div></div>';"""
new_card = """h += '<div class="issue-card'+cardCls+'" onclick="onYZYIssueClick(\x27'+i.id+'\x27)"><div class="issue-card-body">'+
      '<div style="display:flex;justify-content:space-between;align-items:flex-start">'+
      '<span class="iss-type">'+esc(i.type)+'</span>'+
      '<span class="tag tag-'+stCls+'">'+esc(i.status)+'</span></div>'+
      '<div class="iss-proj">'+esc(i._projectName||i.projectName||'--')+' / '+esc(i.engineerName||'--')+'</div>'+
      '<div class="iss-desc">'+esc(i.details||'')+'</div>'+
      '<div class="iss-meta"><span>'+esc(i.source||'')+'</span><span>'+esc(i.reportTime||'')+'</span></div>'+
      '</div></div>';"""
c = c.replace(old_card, new_card)

# === 4. Add click handler function ===
handler = """
// YZY issue click — redirect to detail with rectification for 应建未建
var _yzyIssueModal=null;
function onYZYIssueClick(id){
  var all=MOCK_DATA.getStreetIssues();
  var issue=all.find(function(i){return i.id===id;});
  if(!issue)return;
  var isNotBuilt=issue.type==='应建未建围挡';
  var canRectify=isNotBuilt&&(issue.status==='待整改'||issue.status==='待审核'||issue.status==='整改逾期')&&(issue.street||'')===YZYZ_STREET;
  if(canRectify){
    openRectifySheet(issue);
  }else{
    openIssueDetail(issue);
  }
}
function openRectifySheet(issue){
  if(_yzyIssueModal){_yzyIssueModal.remove();}
  var ov=document.createElement('div');
  ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;display:flex;flex-direction:column';
  ov.onclick=function(e){if(e.target===ov)ov.remove();};
  var h='<div style="flex:1;min-height:0"></div><div style="background:#fff;border-radius:16px 16px 0 0;max-height:82vh;overflow-y:auto;padding:16px">';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="font-size:18px;font-weight:700">提交整改</span><span onclick="this.closest(\\x27div\\x27).parentNode.parentNode.remove()" style="font-size:24px;cursor:pointer;color:#999">&times;</span></div>';
  h+='<div style="background:#FFF5F5;border-radius:8px;padding:12px;margin-bottom:16px"><div style="font-size:13px;color:#D13B2F;font-weight:600">'+esc(issue.type)+'</div><div style="font-size:12px;color:#666;margin-top:4px">'+esc(issue.details||'')+'</div></div>';
  h+='<div class="rect-form-grp"><div class="rect-form-lbl">整改情况</div><textarea class="rect-form-textarea" id="yzyRectDesc" placeholder="请描述整改措施和完成情况"></textarea></div>';
  h+='<div class="rect-form-grp"><div class="rect-form-lbl">整改照片</div><div style="display:flex;gap:8px"><div style="width:64px;height:64px;border:1px dashed #d9d9d9;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer" onclick="document.getElementById(\\x27yzyRectFile\\x27).click()"><span style="font-size:24px;color:#bfbfbf">+</span></div><input type="file" id="yzyRectFile" accept="image/*" style="display:none" multiple></div></div>';
  h+='<button style="width:100%;margin-top:16px;padding:12px;border:none;border-radius:8px;background:var(--blue);color:#fff;font-size:15px;font-weight:600" onclick="saveYZYRectification(\\x27'+issue.id+'\\x27)">提交整改</button>';
  h+='</div>';
  ov.innerHTML=h;
  document.body.appendChild(ov);
  _yzyIssueModal=ov;
}
function saveYZYRectification(id){
  var desc=document.getElementById('yzyRectDesc').value.trim();
  if(!desc){toast('请填写整改情况');return;}
  MOCK_DATA.submitRectification(id,{rectifier:'街道巡查员',rectifierUnit:YZYZ_STREET,rectTime:new Date().toISOString().slice(0,16).replace('T',' '),desc:desc,photos:[]});
  toast('整改已提交');if(_yzyIssueModal)_yzyIssueModal.remove();
  setTimeout(function(){renderList();},500);
}
function openIssueDetail(issue){
  if(_yzyIssueModal){_yzyIssueModal.remove();}
  var ov=document.createElement('div');
  ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;display:flex;flex-direction:column';
  ov.onclick=function(e){if(e.target===ov)ov.remove();};
  var h='<div style="flex:1;min-height:0"></div><div style="background:#fff;border-radius:16px 16px 0 0;max-height:82vh;overflow-y:auto;padding:16px">';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="font-size:18px;font-weight:700">问题详情</span><span onclick="this.closest(\\x27div\\x27).parentNode.parentNode.remove()" style="font-size:24px;cursor:pointer;color:#999">&times;</span></div>';
  h+='<div style="margin-bottom:12px"><span style="font-size:14px;font-weight:600;color:'+(issue.type==='应建未建围挡'?'#D13B2F':'var(--text-primary)')+'">'+esc(issue.type)+'</span><span class="tag" style="margin-left:8px;background:var(--blue-50);color:var(--blue);padding:2px 8px;border-radius:10px;font-size:11px">'+esc(issue.status)+'</span></div>';
  h+='<div style="font-size:12px;color:#999;margin-bottom:4px">上报时间</div><div style="font-size:13px;color:#333;margin-bottom:12px">'+esc(issue.reportTime||'')+'</div>';
  if(issue._projectName) h+='<div style="font-size:12px;color:#999;margin-bottom:4px">关联项目</div><div style="font-size:13px;color:#333;margin-bottom:12px">'+esc(issue._projectName)+' / '+esc(issue.engineerName||'--')+'</div>';
  if(issue.street) h+='<div style="font-size:12px;color:#999;margin-bottom:4px">所属街道</div><div style="font-size:13px;color:#333;margin-bottom:12px">'+esc(issue.street)+'</div>';
  h+='<div style="font-size:12px;color:#999;margin-bottom:4px">问题详情</div><div style="font-size:13px;color:#333;line-height:1.6;margin-bottom:12px">'+esc(issue.details||'')+'</div>';
  h+='<div style="font-size:12px;color:#999;margin-bottom:4px">问题来源</div><div style="font-size:13px;color:#333;margin-bottom:12px">'+esc(issue.source||'')+'</div>';
  h+='</div>';
  ov.innerHTML=h;
  document.body.appendChild(ov);
  _yzyIssueModal=ov;
}
function esc(s){var d=document.createElement('div');d.textContent=s||'';return d.innerHTML}
"""
c = c.replace("// Populate filter dropdown from mock dictionary", handler + "// Populate filter dropdown from mock dictionary")

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
print('YZY patch done')
