"""Put status tags inside <h1> title, flowing inline after the text."""
paths = [
    r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\detail_info_v2.html",
]

for path in paths:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # 1. Move div into h1 as inline span
    old_html = """        <h1 class="page-title"><span class="page-title-accent"></span>围挡记录详情</h1>
        <div class="detail-status-tags" id="detailStatusTags">
          <span class="detail-status-item" id="detailFenceStatusTag">—</span>
          <span class="detail-status-item" id="detailIssueStatusTag">—</span>
          <span class="detail-status-item" id="detailNeedVerifyTag">—</span>
        </div>"""
    new_html = """        <h1 class="page-title"><span class="page-title-accent"></span>围挡记录详情<span class="detail-status-tags" id="detailStatusTags"><span class="detail-status-item" id="detailFenceStatusTag">—</span><span class="detail-status-item" id="detailIssueStatusTag">—</span><span class="detail-status-item" id="detailNeedVerifyTag">—</span></span></h1>"""
    c = c.replace(old_html, new_html)

    # 2. Fix CSS: inline-flex + vertical-align:middle
    c = c.replace(
        'detail-status-tags{display:flex;align-items:center;gap:var(--space-2);margin-left:var(--space-3)}',
        'detail-status-tags{display:inline-flex;align-items:center;gap:var(--space-2);margin-left:var(--space-4);vertical-align:middle}')
    c = c.replace(
        'detail-status-item{display:inline-flex}',
        'detail-status-item{display:inline-flex;line-height:1}')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'Fixed inline tags: {path.split(chr(92))[-1]}')
