# -*- coding: utf-8 -*-
path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\YZY\index.html"
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# === CSS ===
css = """
.yzzy-tabs{display:flex;gap:0;padding:0 6px;margin:8px 10px 0;background:var(--gray-50);border-radius:var(--radius-lg)}
.yzzy-tab{flex:1;text-align:center;padding:8px 0;font-size:12px;font-weight:500;color:var(--text-secondary);border:none;background:transparent;cursor:pointer;border-radius:var(--radius-lg);transition:all .15s;font-family:var(--font-family)}
.yzzy-tab.active{background:var(--blue);color:#fff;font-weight:600;box-shadow:0 1px 3px rgba(24,98,212,.3)}
"""
c = c.replace('</style>', css + '</style>')

# === JS: tab state before renderList ===
c = c.replace(
    'var issues = MOCK_DATA.getStreetIssues();',
    'var _yzzyTab="all";var YZYZ_STREET="粤海街道";var issues = MOCK_DATA.getStreetIssues();'
)

# === JS: tab filter after type filter ===
old_filter = "if (kw) issues = issues.filter(function(i){ return (i.type||'').toLowerCase().indexOf(kw)>-1 || (i.details||'').toLowerCase().indexOf(kw)>-1 || (i.engineerName||'').toLowerCase().indexOf(kw)>-1 || (i.responsibleUnit||'').toLowerCase().indexOf(kw)>-1; });"
new_filter = """function switchYZYTab(tab){
  _yzzyTab=tab;
  document.querySelectorAll('.yzzy-tab').forEach(function(b){b.classList.toggle('active',b.dataset.tab===tab)});
  renderList();
}
if(_yzzyTab==='street') issues=issues.filter(function(i){return(i.source||'')==='街道上报'&&i.type!=='应建未建围挡';});
if(_yzzyTab==='supervise') issues=issues.filter(function(i){return i.type==='应建未建围挡'&&(i.street||'')===YZYZ_STREET;});"""
c = c.replace(old_filter, new_filter + '\n' + old_filter)

# === JS: add onclick to card div ===
old_card = "h += '<div class=\"issue-card'+cardCls+'\"><div class=\"issue-card-body\">'+"
new_card = "h += '<div class=\"issue-card'+cardCls+'\" onclick=\"onYZYIssueClick(\\x27'+i.id+'\\x27)\"><div class=\"issue-card-body\">'+"
c = c.replace(old_card, new_card)

# === JS: add handler functions before "// Populate filter" ===
handler = """
var _yzyIssueModal=null;
function onYZYIssueClick(id){
  var all=MOCK_DATA.getStreetIssues();var issue=null;
  all.forEach(function(i){if(i.id===id)issue=i;});
  if(!issue)return;
  var isNotBuilt=issue.type==='应建未建围挡';
  var canRectify=isNotBuilt&&(issue.status==='待整改'||issue.status==='待审核'||issue.status==='整改逾期');
  if(canRectify) openRectifySheet(issue); else openIssueDetail(issue);
}
function openRectifySheet(issue){
  if(_yzyIssueModal){_yzyIssueModal.remove();}
  var ov=document.createElement('div');
  ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;display:flex;flex-direction:column';
  ov.onclick=function(e){if(e.target===ov)ov.remove();};
  var h='<div style="flex:1;min-height:0"></div><div style="background:#fff;border-radius:16px 16px 0 0;max-height:82vh;overflow-y:auto;padding:16px">';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="font-size:18px;font-weight:700">提交整改</span><span onclick="var p=this.parentNode.parentNode.parentNode;p.remove()" style="font-size:24px;cursor:pointer;color:#999">&times;</span></div>';
  h+='<div style="background:#FFF5F5;border-radius:8px;padding:12px;margin-bottom:16px"><div style="font-size:13px;color:#D13B2F;font-weight:600">'+esc(issue.type)+'</div><div style="font-size:12px;color:#666;margin-top:4px">'+esc(issue.details||'')+'</div></div>';
  h+='<div style="font-size:13px;color:#666;margin-bottom:12px">所属街道：'+esc(issue.street||'--')+'</div>';
  h+='<div class="rect-form-grp"><div class="rect-form-lbl">整改情况</div><textarea class="rect-form-textarea" id="yzyRectDesc" placeholder="请描述整改措施和完成情况"></textarea></div>';
  h+='<button style="width:100%;margin-top:16px;padding:12px;border:none;border-radius:8px;background:var(--blue);color:#fff;font-size:15px;font-weight:600" onclick="saveYZYRectification(\\x27'+issue.id+'\\x27)">提交整改</button>';
  h+='</div>';
  ov.innerHTML=h;document.body.appendChild(ov);_yzyIssueModal=ov;
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
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="font-size:18px;font-weight:700">问题详情</span><span onclick="var p=this.parentNode.parentNode.parentNode;p.remove()" style="font-size:24px;cursor:pointer;color:#999">&times;</span></div>';
  h+='<div style="margin-bottom:12px"><span style="font-size:14px;font-weight:600">'+esc(issue.type)+'</span><span class="tag" style="margin-left:8px;background:var(--blue-50);color:var(--blue);padding:2px 8px;border-radius:10px;font-size:11px">'+esc(issue.status)+'</span></div>';
  h+='<div style="font-size:12px;color:#999;margin-bottom:4px">上报时间</div><div style="font-size:13px;color:#333;margin-bottom:12px">'+esc(issue.reportTime||'')+'</div>';
  if(issue.responsibleUnit) h+='<div style="font-size:12px;color:#999;margin-bottom:4px">责任单位</div><div style="font-size:13px;color:#333;margin-bottom:12px">'+esc(issue.responsibleUnit)+'</div>';
  if(issue.street) h+='<div style="font-size:12px;color:#999;margin-bottom:4px">所属街道</div><div style="font-size:13px;color:#333;margin-bottom:12px">'+esc(issue.street)+'</div>';
  h+='<div style="font-size:12px;color:#999;margin-bottom:4px">问题描述</div><div style="font-size:13px;color:#333;line-height:1.6;margin-bottom:12px">'+esc(issue.details||'')+'</div>';
  h+='<div style="font-size:12px;color:#999;margin-bottom:4px">问题来源</div><div style="font-size:13px;color:#333;margin-bottom:12px">'+esc(issue.source||'')+'</div>';
  h+='</div>';
  ov.innerHTML=h;document.body.appendChild(ov);_yzyIssueModal=ov;
}
"""
c = c.replace('// Populate filter dropdown from mock dictionary', handler + '\n// Populate filter dropdown from mock dictionary')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
print('YZY patch done')
