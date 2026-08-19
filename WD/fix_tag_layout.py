# -*- coding: utf-8 -*-
"""Fix status tag layout for both PC detail pages."""
paths = [
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\detail_info_v2.html",
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\detail_info_v2_project.html",
]

for path in paths:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # 1. Fix CSS: remove extra horizontal margin, add verify text style
    c = c.replace(
        '.detail-status-tags{display:flex;align-items:center;gap:var(--space-2);margin:0 var(--space-4)}',
        '.detail-status-tags{display:flex;align-items:center;gap:var(--space-2);margin-left:var(--space-3)}'
    )
    c = c.replace(
        '.detail-status-item .tag{font-size:var(--font-size-xs)}',
        '.detail-status-item .tag{font-size:var(--font-size-xs)}\n.detail-verify-text{font-size:var(--font-size-sm);color:#C47D00;font-weight:var(--font-weight-bold);white-space:nowrap}'
    )

    # 2. Fix JS: only show colored text when "是", hide when "否"
    c = c.replace(
        "document.getElementById('detailNeedVerifyTag').innerHTML=nv==='是'?'<span class=\"tag tag-need-verify\">待校核</span>':(nv==='否'?'<span class=\"tag tag-no-verify\">无需校核</span>':'—');",
        "document.getElementById('detailNeedVerifyTag').innerHTML=nv==='是'?'<span class=\"detail-verify-text\">● 待校核</span>':'';"
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'Fixed: {path.split(chr(92))[-1]}')
