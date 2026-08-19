"""Fix remaining detail/audit/rectify pages to show street + area fields."""
import os

fixes = [
    # (path, old, new)
    (r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-rectify.html",
     "'<div class=\"info-item\"><span class=\"info-lbl\">责任单位</span><span class=\"info-val\">'+esc(_issue._constructUnit||_issue.responsibleUnit||'--')+'</span></div>'+\n    '<div class=\"info-item\"><span class=\"info-lbl\">上报时间",
     "'<div class=\"info-item\"><span class=\"info-lbl\">责任单位</span><span class=\"info-val\">'+esc(_issue._constructUnit||_issue.responsibleUnit||'--')+'</span></div>'+\n    '<div class=\"info-item\"><span class=\"info-lbl\">所属街道</span><span class=\"info-val\">'+esc(_issue.street||'--')+'</span></div>'+\n    '<div class=\"info-item\"><span class=\"info-lbl\">所属区域</span><span class=\"info-val\">'+esc(_issue._district||'--')+'</span></div>'+\n    '<div class=\"info-item\"><span class=\"info-lbl\">上报时间"),
    (r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\supervisor-issue-detail.html",
     "'<div class=\"detail-item\"><span class=\"detail-label\">所属街道</span><span class=\"detail-value\">'+esc(_issue.street||'--')+'</span></div>'+\n    '<div class=\"detail-item\"><span class=\"detail-label\">上报时间",
     "'<div class=\"detail-item\"><span class=\"detail-label\">所属街道</span><span class=\"detail-value\">'+esc(_issue.street||'--')+'</span></div>'+\n    '<div class=\"detail-item\"><span class=\"detail-label\">所属区域</span><span class=\"detail-value\">'+esc(_issue._district||'--')+'</span></div>'+\n    '<div class=\"detail-item\"><span class=\"detail-label\">上报时间"),
    (r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-detail.html",
     "'<div class=\"detail-item\"><span class=\"detail-label\">所属街道</span><span class=\"detail-value\">'+esc(_issue.street||'--')+'</span></div>'+\n    '<div class=\"detail-item\"><span class=\"detail-label\">上报时间",
     "'<div class=\"detail-item\"><span class=\"detail-label\">所属街道</span><span class=\"detail-value\">'+esc(_issue.street||'--')+'</span></div>'+\n    '<div class=\"detail-item\"><span class=\"detail-label\">所属区域</span><span class=\"detail-value\">'+esc(_issue._district||'--')+'</span></div>'+\n    '<div class=\"detail-item\"><span class=\"detail-label\">上报时间"),
]

for path, old, new in fixes:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            c = f.read()
        if old in c:
            c = c.replace(old, new)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(c)
            print(f'OK: {os.path.basename(path)}')
        else:
            print(f'SKIP (not found): {os.path.basename(path)}')
    except Exception as e:
        print(f'ERR: {path}: {e}')
