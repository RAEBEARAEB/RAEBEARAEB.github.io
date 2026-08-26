# -*- coding: utf-8 -*-
"""Sync street/area fields to issue detail, audit, and rectification pages."""
files = [
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\supervisor-issue-detail.html",
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\supervisor-issue-audit.html",
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-detail.html",
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-rectify.html",
]

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # === 1. After 责任单位 row, insert 所属街道 ===
    # Pattern: 责任单位 cell + whatever comes next
    old1 = "'<div class=\"detail-item\"><span class=\"detail-label\">责任单位</span><span class=\"detail-value\">'+esc(_issue._constructUnit||_issue.responsibleUnit||'--')+'</span></div>'+"
    new1 = "'<div class=\"detail-item\"><span class=\"detail-label\">责任单位</span><span class=\"detail-value\">'+esc(_issue._constructUnit||_issue.responsibleUnit||'--')+'</span></div>'+\n    '<div class=\"detail-item\"><span class=\"detail-label\">所属街道</span><span class=\"detail-value\">'+esc(_issue.street||'--')+'</span></div>'+"
    c = c.replace(old1, new1)

    # === 2. Add 应建未建 fields (will show empty for non-应建未建 since data has no isReported field) ===
    old2 = "'<div class=\"detail-item\"><span class=\"detail-label\">问题类型</span><span class=\"detail-value\""
    new2 = "'<div class=\"detail-item\"><span class=\"detail-label\">所属区域</span><span class=\"detail-value\">'+esc(_issue._district||'--')+'</span></div>'+\n    '<div class=\"detail-item\"><span class=\"detail-label\">问题类型</span><span class=\"detail-value\""
    c = c.replace(old2, new2)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'Fixed: {path}')
