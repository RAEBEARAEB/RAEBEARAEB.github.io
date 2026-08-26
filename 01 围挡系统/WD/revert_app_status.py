"""Revert APP status display: remove status bar, restore infoRowHtml-based rendering."""
path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-app\app_prototype_v2.html"
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Remove status bar CSS
c = c.replace("""
.detail-status-bar{display:flex;align-items:center;gap:8px;padding:8px 16px;background:var(--panel);border-bottom:1px solid var(--gray-100);flex-shrink:0;overflow-x:auto}
.detail-status-bar .tag{font-size:11px;flex-shrink:0}""", "")

# 2. Remove status bar HTML
old_bar = """      <div id="detailStatusBar" class="detail-status-bar" style="display:none">
        <span class="tag tag-blue" id="appFenceStatusTag">—</span>
        <span class="tag tag-green" id="appIssueStatusTag">—</span>
        <span class="tag tag-yellow" id="appNeedVerifyTag">—</span>
      </div>
"""
c = c.replace(old_bar, "")

# 3. Restore infoRowHtml rendering in renderDetail
new_app_items = """  // Populate status bar
  document.getElementById('detailStatusBar').style.display='flex';
  var fsTagMap={'设置中':'<span class="tag tag-blue">设置中</span>','即将到期':'<span class="tag tag-yellow">即将到期</span>','已到期':'<span class="tag tag-gray">已到期</span>'};
  var isTagMap={'正常':'<span class="tag tag-green">正常</span>','待整改':'<span class="tag tag-red">待整改</span>','整改逾期':'<span class="tag tag-red">整改逾期</span>'};
  document.getElementById('appFenceStatusTag').innerHTML=fsTagMap[f.fenceStatus]||f.fenceStatus||'—';
  document.getElementById('appIssueStatusTag').innerHTML=isTagMap[f.issueStatus]||f.issueStatus||'—';
  var nv=f.needVerify||'';
  document.getElementById('appNeedVerifyTag').innerHTML=nv==='是'?'<span class="tag tag-yellow">待校核</span>':(nv==='否'?'<span class="tag tag-gray">无需校核</span>':'—');"""

old_app_items = """  // 围挡状态 / 问题状态 / 是否待校核
  var fsTagMap={'设置中':'<span class="tag tag-blue">设置中</span>','即将到期':'<span class="tag tag-yellow">即将到期</span>','已到期':'<span class="tag tag-gray">已到期</span>'};
  var isTagMap={'正常':'<span class="tag tag-green">正常</span>','待整改':'<span class="tag tag-red">待整改</span>','整改逾期':'<span class="tag tag-red">整改逾期</span>'};
  var nv=f.needVerify||'';
  var nvHtml=nv==='是'?'<span class="tag tag-yellow">待校核</span>':(nv==='否'?'<span class="tag tag-gray">无需校核</span>':'—');
  html+=infoRowHtml('围挡状态',fsTagMap[f.fenceStatus]||f.fenceStatus||'—');
  html+=infoRowHtml('问题状态',isTagMap[f.issueStatus]||f.issueStatus||'—');
  html+=infoRowHtml('是否待校核',nvHtml);"""

c = c.replace(new_app_items, old_app_items)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
print('APP reverted to infoRow style')
