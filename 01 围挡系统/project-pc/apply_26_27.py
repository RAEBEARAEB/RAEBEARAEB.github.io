# encoding: utf-8
"""Tasks 26 + 27: History timeline cards + claim modal text"""
with open('index_v4_project.html', 'r', encoding='utf-8') as f:
    c = f.read()
print(f'Start: {len(c)} bytes')

# === 26a: Replace history modal HTML ===
old_hist_modal = '''<!-- 管护历史弹窗 -->
<div class="modal-overlay" id="historyModal">
  <div class="modal modal-sm">
    <div class="modal-header"><span class="modal-title">管护历史</span><button class="modal-close" onclick="document.getElementById('historyModal').classList.remove('visible')">&times;</button></div>
    <div class="modal-body" id="historyModalBody"></div>
    <div class="modal-footer"><button class="btn btn-ghost btn-sm" onclick="document.getElementById('historyModal').classList.remove('visible')">关闭</button></div>
  </div>
</div>'''
new_hist_modal = '''<!-- 管护历史弹窗 -->
<div class="modal-overlay" id="historyModal">
  <div class="modal" style="width:560px">
    <div class="modal-header"><span class="modal-title">管护记录</span><button class="modal-close" onclick="document.getElementById('historyModal').classList.remove('visible')">&times;</button></div>
    <div class="modal-body" id="historyModalBody" style="padding:var(--space-5) var(--space-6)"></div>
    <div class="modal-footer"><button class="btn btn-ghost btn-sm" onclick="document.getElementById('historyModal').classList.remove('visible')">关闭</button></div>
  </div>
</div>'''
assert old_hist_modal in c, 'old historyModal not found'
c = c.replace(old_hist_modal, new_hist_modal)
print('26a: history modal replaced')

# === 26b: Replace history button in renderFenceCards ===
# Old: always shows clock icon button
old_btn = "        '<button class=\"fcard-act history-icon\" title=\"管护历史\" onclick=\"event.stopPropagation();openHistory(\\x27'+b.blockId+'\\x27)\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg></button>'+"
# New: conditional, shows "X条管护记录" only when changeRecords exist
new_btn = "        (b._recCount?'<span class=\"act-sep\">|</span><button class=\"fcard-act\" onclick=\"event.stopPropagation();openHistory(\\x27'+b.blockId+'\\x27)\">'+b._recCount+'条管护记录</button>':'')+"
assert old_btn in c, 'old history button not found'
c = c.replace(old_btn, new_btn)
print('26b: history button conditional')

# === 26c: Add _recCount in buildFenceBlocks ===
old_bfb = "      projectConstructUnit:h._projectConstructUnit,"
new_bfb = "      projectConstructUnit:h._projectConstructUnit,\n      _recCount:(h.changeRecords||[]).length,"
assert old_bfb in c, 'old buildFenceBlocks not found'
c = c.replace(old_bfb, new_bfb)
print('26c: _recCount added')

# === 26d: Replace openHistory function ===
old_openHist = '''function openHistory(blockId){
  var b=MOCK_FENCE_BLOCKS.find(function(d){return d.blockId===blockId;});
  if(!b)return;
  var h=MOCK_DATA.getHoardings();
  var fence=h.find(function(x){return x.id===blockId;});
  var historyHtml='';
  if(b.fenceStatus==='待认领'){
    historyHtml+='<div style="padding:8px 12px;background:#FEF3CD;border:1px solid #FCD34D;border-radius:4px;margin-bottom:12px;font-size:12px;color:#B45309;font-weight:600">当前状态：待认领</div>';
  }
  if(fence&&fence.changeRecords&&fence.changeRecords.length){
    fence.changeRecords.forEach(function(cr){
      historyHtml+='<div style="position:relative;padding:10px 14px 10px 28px;margin-bottom:6px;border-left:2px solid var(--color-primary-500);border-radius:0 4px 4px 0;background:var(--color-primary-50);font-size:13px">'+
        '<div style="font-weight:600;margin-bottom:3px">'+cr.content+'</div>'+
        '<div style="font-size:11px;color:var(--text-tertiary)">'+cr.changer+' | '+cr.unit+' | '+cr.date+'</div>'+
      '</div>';
    });
  } else {
    historyHtml+='<div style="text-align:center;padding:20px;color:var(--text-tertiary)">暂无管护历史记录</div>';
  }
  document.getElementById('historyModalBody').innerHTML=historyHtml;
  document.getElementById('historyModal').classList.add('visible');
}'''

new_openHist = '''function buildHistoryCard(cr, b, fence, idx){
  var isTransfer=cr.type==='移交操作';
  var isRemoved=cr.type==='拆除操作';
  var isPendingClaim=isTransfer && b.fenceStatus==='待认领' && idx===0;
  // Card wrapper
  var card='<div class="tl-card'+(isTransfer?' tl-transfer':'')+(isRemoved?' tl-removed':'')+(isPendingClaim?' tl-pending':'')+'">';
  // Top: type badge + date
  var badgeTxt=isTransfer?'移交':(isRemoved?'拆除':'管护');
  var badgeCls=isTransfer?'tl-badge-transfer':(isRemoved?'tl-badge-danger':'tl-badge-normal');
  card+='<div class="tl-card-head">';
  card+='<span class="tl-badge '+badgeCls+'">'+badgeTxt+'</span>';
  card+='<span class="tl-date">'+cr.date+'</span>';
  card+='</div>';
  // Body - info rows
  card+='<div class="tl-card-body">';
  // Determine which engineering to show
  var engName=isTransfer?cr.after:b.engineerName;
  var engStatus=b.engStatus||'在建';
  if(isTransfer) engStatus='在建';
  card+='<div class="tl-row"><span class="tl-lbl">关联工程</span><span class="tl-val">'+engName+'（'+engStatus+'）</span></div>';
  // Unit
  var unit=b.unitName||fence.constructUnit||'—';
  if(isTransfer){
    var projs=MOCK_DATA.getProjects();
    var found=projs.find(function(p){return p.name===b.projectName;});
    if(found) unit=found.constructUnit||'—';
  }
  card+='<div class="tl-row"><span class="tl-lbl">责任单位</span><span class="tl-val">'+unit+'</span></div>';
  // Contact
  var contact=(fence?fence.fenceResponsible:'—')||'—';
  var phone=(fence?fence.fenceResponsiblePhone:'')||'';
  if(phone) contact+='（'+phone+'）';
  if(isPendingClaim) contact='—';
  card+='<div class="tl-row"><span class="tl-lbl">责任人</span><span class="tl-val">'+contact+'</span></div>';
  // Period / dates
  if(isTransfer){
    if(isPendingClaim){
      card+='<div class="tl-row"><span class="tl-lbl">当前状态</span><span class="tl-val" style="color:#B45309;font-weight:500">待认领</span></div>';
    } else {
      var cStart=fence?fence.custodyStart:'';
      var cEnd=fence?fence.custodyEnd:'';
      var period=(cStart&&cEnd)?(cStart+' ~ '+cEnd):'—';
      card+='<div class="tl-row"><span class="tl-lbl">管护期限</span><span class="tl-val">'+period+'</span></div>';
      card+='<div class="tl-row"><span class="tl-lbl">认领时间</span><span class="tl-val">'+cr.date+'</span></div>';
      var isActive=b.fenceStatus!=='已拆除';
      card+='<div class="tl-row"><span class="tl-lbl">当前状态</span><span class="tl-val">'+(isActive?'<span class="tl-status-active">管护中</span>':'<span class="tl-status-ended">结束管护</span>')+'</span></div>';
    }
  } else {
    var sDate=fence?fence.setupDate:'';
    var cStart=fence?fence.custodyStart:'';
    var cEnd=fence?fence.custodyEnd:'';
    var period=(cStart&&cEnd)?(cStart+' ~ '+cEnd):'—';
    card+='<div class="tl-row"><span class="tl-lbl">管护期限</span><span class="tl-val">'+period+'</span></div>';
    if(isRemoved){
      card+='<div class="tl-row"><span class="tl-lbl">新建时间</span><span class="tl-val">'+(sDate||'—')+'</span></div>';
      card+='<div class="tl-row"><span class="tl-lbl">结束时间</span><span class="tl-val">'+cr.date+'</span></div>';
      card+='<div class="tl-row"><span class="tl-lbl">当前状态</span><span class="tl-val"><span class="tl-status-ended">结束管护</span></span></div>';
    } else {
      card+='<div class="tl-row"><span class="tl-lbl">新建时间</span><span class="tl-val">'+(sDate||cr.date)+'</span></div>';
      var isActive=b.fenceStatus!=='已拆除';
      card+='<div class="tl-row"><span class="tl-lbl">当前状态</span><span class="tl-val">'+(isActive?'<span class="tl-status-active">管护中</span>':'<span class="tl-status-ended">结束管护</span>')+'</span></div>';
    }
  }
  // Operator info
  card+='<div class="tl-row" style="margin-top:8px;padding-top:8px;border-top:1px solid var(--color-gray-100)"><span class="tl-lbl">操作人</span><span class="tl-val" style="font-size:11px;color:var(--text-tertiary)">'+cr.changer+' | '+cr.unit+'</span></div>';
  card+='</div></div>';
  return card;
}

function openHistory(blockId){
  var b=MOCK_FENCE_BLOCKS.find(function(d){return d.blockId===blockId;});
  if(!b)return;
  var h=MOCK_DATA.getHoardings();
  var fence=h.find(function(x){return x.id===blockId;});
  if(!fence||!fence.changeRecords||!fence.changeRecords.length){return;}
  var num=blocks.indexOf(b)+1;
  var html='<div class="tl-header">围挡'+num+'# · '+b.engineerName+'</div>';
  html+='<div class="tl-timeline">';
  fence.changeRecords.forEach(function(cr, idx){
    html+=buildHistoryCard(cr, b, fence, idx);
  });
  html+='</div>';
  document.getElementById('historyModalBody').innerHTML=html;
  document.getElementById('historyModal').classList.add('visible');
}'''

assert old_openHist in c, 'old openHistory not found'
c = c.replace(old_openHist, new_openHist)
print('26d: openHistory replaced with timeline cards')

# === 26e: Add timeline CSS ===
css_marker = '.fcard-act svg{width:11px;height:11px;flex-shrink:0}'
tl_css = '''/* 管护历史时间轴 */
.tl-header{font-size:var(--font-size-md);font-weight:var(--font-weight-bold);color:var(--text-title);margin-bottom:var(--space-5);padding-bottom:var(--space-3);border-bottom:1px solid var(--color-gray-100)}
.tl-timeline{position:relative;padding-left:20px}
.tl-timeline::before{content:'';position:absolute;left:7px;top:4px;bottom:4px;width:2px;background:var(--color-gray-200);border-radius:1px}
.tl-card{position:relative;margin-bottom:var(--space-4);background:var(--color-gray-50);border:1px solid var(--color-gray-100);border-radius:var(--border-radius-lg);overflow:hidden}
.tl-card::before{content:'';position:absolute;left:-17px;top:16px;width:8px;height:8px;border-radius:50%;background:var(--color-primary-500);border:2px solid #fff;box-shadow:0 0 0 2px var(--color-primary-500)}
.tl-card.tl-transfer::before{background:var(--color-warning);box-shadow:0 0 0 2px var(--color-warning)}
.tl-card.tl-removed::before{background:var(--color-gray-400);box-shadow:0 0 0 2px var(--color-gray-400)}
.tl-card.tl-pending::before{background:#F59E0B;box-shadow:0 0 0 2px #F59E0B;animation:tl-pulse 2s infinite}
@keyframes tl-pulse{0%,100%{box-shadow:0 0 0 2px #F59E0B}50%{box-shadow:0 0 0 6px rgba(245,158,11,0.2)}}
.tl-card-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 6px}
.tl-badge{display:inline-flex;align-items:center;padding:2px 8px;border-radius:var(--border-radius-tag);font-size:11px;font-weight:var(--font-weight-medium)}
.tl-badge-normal{background:var(--color-primary-50);color:var(--color-primary-500)}
.tl-badge-transfer{background:#FEF3CD;color:#B45309}
.tl-badge-danger{background:var(--color-danger-light);color:var(--color-danger)}
.tl-date{font-size:11px;color:var(--text-tertiary)}
.tl-card-body{padding:4px 14px 12px}
.tl-row{display:flex;align-items:center;padding:3px 0;font-size:12px}
.tl-lbl{color:var(--text-tertiary);width:52px;flex-shrink:0;font-size:11px}
.tl-val{color:var(--text-primary)}
.tl-status-active{display:inline-flex;align-items:center;padding:1px 8px;border-radius:10px;font-size:11px;background:#E6F4EA;color:#1A9042;font-weight:var(--font-weight-medium)}
.tl-status-ended{display:inline-flex;align-items:center;padding:1px 8px;border-radius:10px;font-size:11px;background:var(--color-gray-100);color:var(--text-tertiary);font-weight:var(--font-weight-medium)}
'''

c = c.replace(css_marker, css_marker + '\n' + tl_css)
print('26e: timeline CSS added')

# === 27: Update claim modal subtitle ===
old_sub = '认领后请完善以下信息：'
new_sub = '确认则需完善以下信息：'
assert old_sub in c, 'old claim subtitle not found'
c = c.replace(old_sub, new_sub)
print('27a: claim subtitle updated')

# === 27b: Update claimFence title to match new wording ===
old_title_js = "document.getElementById('claimModalTitle').innerHTML='是否确认认领围挡'+num+'<b>#</b>？';"
new_title_js = "document.getElementById('claimModalTitle').innerHTML='是否确认认领 <b style=\"color:var(--color-primary-500);font-size:110%\">围挡'+num+'#</b> ？';"
assert old_title_js in c, 'old claim title JS not found'
c = c.replace(old_title_js, new_title_js)
print('27b: claim title JS updated')

# === Verify ===
with open('index_v4_project.html', 'w', encoding='utf-8') as f:
    f.write(c)
print(f'Saved: {len(c)} bytes')
