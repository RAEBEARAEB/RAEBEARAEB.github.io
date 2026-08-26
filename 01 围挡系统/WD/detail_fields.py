"""Add 围挡状态/问题状态/是否待校核 to all detail pages."""
import sys

fixes = [
    # (path, detail_item_line_content, initMap_line)
    (r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\detail_info_v2.html",
     """                <div class="detail-item"><span class="detail-label">宣传画/公益广告</span><span class="detail-value">文明城市公益宣传画面</span></div>""",
     "initMap();"),
    (r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\detail_info_v2_project.html",
     """                <div class="detail-item"><span class="detail-label">宣传画/公益广告</span><span class="detail-value">文明城市公益宣传画面</span></div>""",
     "initMap();"),
]

new_items = """                <div class="detail-item"><span class="detail-label">宣传画/公益广告</span><span class="detail-value">文明城市公益宣传画面</span></div>
                <div class="detail-item"><span class="detail-label">围挡状态</span><span class="detail-value" id="detailFenceStatus">—</span></div>
                <div class="detail-item"><span class="detail-label">问题状态</span><span class="detail-value" id="detailIssueStatus">—</span></div>
                <div class="detail-item"><span class="detail-label">是否待校核</span><span class="detail-value" id="detailNeedVerify">—</span></div>"""

new_js = """initMap();
(function(){
  var h=_defaultHoard;if(!h)return;
  var fsTag={'设置中':'<span class="tag tag-setting">设置中</span>','即将到期':'<span class="tag tag-soon">即将到期</span>','已到期':'<span class="tag tag-expired">已到期</span>'};
  document.getElementById('detailFenceStatus').innerHTML=fsTag[h.fenceStatus]||h.fenceStatus||'—';
  var isTag={'正常':'<span class="tag tag-ok">正常</span>','待整改':'<span class="tag tag-warn">待整改</span>','整改逾期':'<span class="tag tag-error">整改逾期</span>'};
  document.getElementById('detailIssueStatus').innerHTML=isTag[h.issueStatus]||h.issueStatus||'—';
  var nv=h.needVerify||'';
  document.getElementById('detailNeedVerify').innerHTML=nv==='是'?'<span class="tag tag-need-verify">待校核</span>':(nv==='否'?'<span class="tag tag-no-verify">无需校核</span>':'—');
})();"""

for path, old_item, old_js in fixes:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # Replace the detail item block (add new fields after 宣传画)
    if old_item in c:
        c = c.replace(old_item, new_items)
        print(f'  Items: OK {path.split(chr(92))[-1]}')
    else:
        print(f'  Items: SKIP (already done?) {path.split(chr(92))[-1]}')

    # Replace initMap(); with our version
    if old_js in c:
        c = c.replace(old_js, new_js)
        print(f'  JS:    OK {path.split(chr(92))[-1]}')
    else:
        print(f'  JS:    SKIP (already done?) {path.split(chr(92))[-1]}')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)

# === APP detail page ===
app_path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-app\app_prototype_v2.html"
with open(app_path, 'r', encoding='utf-8') as f:
    c = f.read()

# Add 3 infoRows after 宣传画/公益广告 in renderDetail
old_app = "  html+=infoRow('围挡风格',f.fenceStyle);\n  html+=infoRow('宣传画/公益广告',f.publicityContent);\n\n  // ── 关联项目工程 ──"
new_app = """  html+=infoRow('围挡风格',f.fenceStyle);
  html+=infoRow('宣传画/公益广告',f.publicityContent);
  // 围挡状态 / 问题状态 / 是否待校核
  var fsTagMap={'设置中':'<span class="tag tag-blue">设置中</span>','即将到期':'<span class="tag tag-yellow">即将到期</span>','已到期':'<span class="tag tag-gray">已到期</span>'};
  var isTagMap={'正常':'<span class="tag tag-green">正常</span>','待整改':'<span class="tag tag-red">待整改</span>','整改逾期':'<span class="tag tag-red">整改逾期</span>'};
  var nv=f.needVerify||'';
  var nvHtml=nv==='是'?'<span class="tag tag-yellow">待校核</span>':(nv==='否'?'<span class="tag tag-gray">无需校核</span>':'—');
  html+=infoRowHtml('围挡状态',fsTagMap[f.fenceStatus]||f.fenceStatus||'—');
  html+=infoRowHtml('问题状态',isTagMap[f.issueStatus]||f.issueStatus||'—');
  html+=infoRowHtml('是否待校核',nvHtml);

  // ── 关联项目工程 ──"""
c = c.replace(old_app, new_app)

# Add infoRowHtml helper
old_helper = "function infoRow(label,value){\n  return '<div class=\"info-item\"><div class=\"info-label\">'+label+'</div><div class=\"info-value\">'+(value||'--')+'</div></div>';\n}"
new_helper = """function infoRowHtml(label,html){
  return '<div class="info-item"><div class="info-label">'+label+'</div><div class="info-value">'+(html||'—')+'</div></div>';
}
function infoRow(label,value){
  return '<div class="info-item"><div class="info-label">'+label+'</div><div class="info-value">'+(value||'--')+'</div></div>';
}"""
c = c.replace(old_helper, new_helper)

# Add tag CSS for APP
old_app_css = ".tag-red{background:rgba(229,72,77,0.12);color:var(--red)}\n.tag-gray{background:rgba(156,163,176,0.12);color:var(--gray-500)}"
new_app_css = ".tag-red{background:rgba(229,72,77,0.12);color:var(--red)}\n.tag-green{background:rgba(22,178,106,.12);color:var(--green)}\n.tag-gray{background:rgba(156,163,176,0.12);color:var(--gray-500)}"
c = c.replace(old_app_css, new_app_css)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(c)
print(f'APP: OK')
