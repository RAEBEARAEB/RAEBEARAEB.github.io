# -*- coding: utf-8 -*-
"""Move 围挡状态/问题状态/是否待校核 from detail card body to page header."""
import re

# === PC pages: project-pc + supervisor-pc ===
# Add detail-status-tags div between page-title and page-header-actions,
# remove the three detail-items from the card,
# update JS to populate header tags.

projects = [
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\detail_info_v2_project.html",
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\detail_info_v2.html",
]

for path in projects:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # === 1. Insert status tags between title and actions ===
    old_header = '<h1 class="page-title"><span class="page-title-accent"></span>围挡记录详情</h1>\n        <div class="page-header-actions">'
    new_header = '<h1 class="page-title"><span class="page-title-accent"></span>围挡记录详情</h1>\n        <div class="detail-status-tags" id="detailStatusTags">\n          <span class="detail-status-item" id="detailFenceStatusTag">—</span>\n          <span class="detail-status-item" id="detailIssueStatusTag">—</span>\n          <span class="detail-status-item" id="detailNeedVerifyTag">—</span>\n        </div>\n        <div class="page-header-actions">'
    c = c.replace(old_header, new_header)

    # === 2. Remove the three detail-items from the card body ===
    # Remove: <div class="detail-item"><span class="detail-label">围挡状态</span>... (plus next two items)
    old_items = """                <div class="detail-item"><span class="detail-label">围挡状态</span><span class="detail-value" id="detailFenceStatus">—</span></div>
                <div class="detail-item"><span class="detail-label">问题状态</span><span class="detail-value" id="detailIssueStatus">—</span></div>
                <div class="detail-item"><span class="detail-label">是否待校核</span><span class="detail-value" id="detailNeedVerify">—</span></div>
"""
    c = c.replace(old_items, '')

    # === 3. Update JS: populate header tags instead of card detail items ===
    old_js = """  var fsTag={'设置中':'<span class="tag tag-setting">设置中</span>','即将到期':'<span class="tag tag-soon">即将到期</span>','已到期':'<span class="tag tag-expired">已到期</span>'};
  document.getElementById('detailFenceStatus').innerHTML=fsTag[h.fenceStatus]||h.fenceStatus||'—';
  var isTag={'正常':'<span class="tag tag-ok">正常</span>','待整改':'<span class="tag tag-warn">待整改</span>','整改逾期':'<span class="tag tag-error">整改逾期</span>'};
  document.getElementById('detailIssueStatus').innerHTML=isTag[h.issueStatus]||h.issueStatus||'—';
  var nv=h.needVerify||'';
  document.getElementById('detailNeedVerify').innerHTML=nv==='是'?'<span class="tag tag-need-verify">待校核</span>':(nv==='否'?'<span class="tag tag-no-verify">无需校核</span>':'—');"""

    new_js = """  var fsTag={'设置中':'<span class="tag tag-setting">设置中</span>','即将到期':'<span class="tag tag-soon">即将到期</span>','已到期':'<span class="tag tag-expired">已到期</span>'};
  document.getElementById('detailFenceStatusTag').innerHTML=fsTag[h.fenceStatus]||h.fenceStatus||'—';
  var isTag={'正常':'<span class="tag tag-ok">正常</span>','待整改':'<span class="tag tag-warn">待整改</span>','整改逾期':'<span class="tag tag-error">整改逾期</span>'};
  document.getElementById('detailIssueStatusTag').innerHTML=isTag[h.issueStatus]||h.issueStatus||'—';
  var nv=h.needVerify||'';
  document.getElementById('detailNeedVerifyTag').innerHTML=nv==='是'?'<span class="tag tag-need-verify">待校核</span>':(nv==='否'?'<span class="tag tag-no-verify">无需校核</span>':'—');"""
    c = c.replace(old_js, new_js)

    # === 4. Add CSS for detail-status-tags ===
    css = """
.detail-status-tags{display:flex;align-items:center;gap:var(--space-2);margin:0 var(--space-4)}
.detail-status-item{display:inline-flex}
.detail-status-item .tag{font-size:var(--font-size-xs)}"""
    c = c.replace('</style>', css + '\n</style>')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'PC OK: {path.split(chr(92))[-1]}')

# === APP page: add status bar between nav and content in screenDetail ===
app_path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-app\app_prototype_v2.html"
with open(app_path, 'r', encoding='utf-8') as f:
    c = f.read()

# Add CSS for detail-status-bar
app_css = """
.detail-status-bar{display:flex;align-items:center;gap:8px;padding:8px 16px;background:var(--panel);border-bottom:1px solid var(--gray-100);flex-shrink:0;overflow-x:auto}
.detail-status-bar .tag{font-size:11px;flex-shrink:0}"""
c = c.replace('</style>', app_css + '\n</style>')

# Add status bar HTML in screenDetail after nav-bar
old_detail_nav = """      <div id="detailTabs" class="detail-tabs" style="display:none;flex-shrink:0"></div>
      <div id="detailContent" style="flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none"></div>"""
new_detail_nav = """      <div id="detailStatusBar" class="detail-status-bar" style="display:none">
        <span class="tag tag-blue" id="appFenceStatusTag">—</span>
        <span class="tag tag-green" id="appIssueStatusTag">—</span>
        <span class="tag tag-yellow" id="appNeedVerifyTag">—</span>
      </div>
      <div id="detailTabs" class="detail-tabs" style="display:none;flex-shrink:0"></div>
      <div id="detailContent" style="flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;position:relative;scrollbar-width:none"></div>"""
c = c.replace(old_detail_nav, new_detail_nav)

# Remove the three infoRowHtml lines from renderDetail JS and move to status bar population
old_app_items = """  // 围挡状态 / 问题状态 / 是否待校核
  var fsTagMap={'设置中':'<span class="tag tag-blue">设置中</span>','即将到期':'<span class="tag tag-yellow">即将到期</span>','已到期':'<span class="tag tag-gray">已到期</span>'};
  var isTagMap={'正常':'<span class="tag tag-green">正常</span>','待整改':'<span class="tag tag-red">待整改</span>','整改逾期':'<span class="tag tag-red">整改逾期</span>'};
  var nv=f.needVerify||'';
  var nvHtml=nv==='是'?'<span class="tag tag-yellow">待校核</span>':(nv==='否'?'<span class="tag tag-gray">无需校核</span>':'—');
  html+=infoRowHtml('围挡状态',fsTagMap[f.fenceStatus]||f.fenceStatus||'—');
  html+=infoRowHtml('问题状态',isTagMap[f.issueStatus]||f.issueStatus||'—');
  html+=infoRowHtml('是否待校核',nvHtml);"""

new_app_items = """  // Populate status bar
  document.getElementById('detailStatusBar').style.display='flex';
  var fsTagMap={'设置中':'<span class="tag tag-blue">设置中</span>','即将到期':'<span class="tag tag-yellow">即将到期</span>','已到期':'<span class="tag tag-gray">已到期</span>'};
  var isTagMap={'正常':'<span class="tag tag-green">正常</span>','待整改':'<span class="tag tag-red">待整改</span>','整改逾期':'<span class="tag tag-red">整改逾期</span>'};
  document.getElementById('appFenceStatusTag').innerHTML=fsTagMap[f.fenceStatus]||f.fenceStatus||'—';
  document.getElementById('appIssueStatusTag').innerHTML=isTagMap[f.issueStatus]||f.issueStatus||'—';
  var nv=f.needVerify||'';
  document.getElementById('appNeedVerifyTag').innerHTML=nv==='是'?'<span class="tag tag-yellow">待校核</span>':(nv==='否'?'<span class="tag tag-gray">无需校核</span>':'—');"""
c = c.replace(old_app_items, new_app_items)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(c)
print('APP OK')
