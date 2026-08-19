# -*- coding: utf-8 -*-
"""
Restructure issue report pages: move 问题类型 to the very first section.
Old: nav 1=关联项目工程, 2=问题信息(含问题类型)
New: nav 1=问题类型(含应建未建字段), 2=关联项目工程, 3=问题信息
"""
def fix_section_order(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # === 1. Update nav ===
    old_nav = '<a class="section-nav-item active" data-sec="sec-project"><span class="section-nav-num">1</span>关联项目工程</a>\n        <a class="section-nav-item" data-sec="sec-issue"><span class="section-nav-num">2</span>问题信息</a>'
    new_nav = '<a class="section-nav-item active" data-sec="sec-type"><span class="section-nav-num">1</span>问题类型</a>\n        <a class="section-nav-item" data-sec="sec-project"><span class="section-nav-num">2</span>关联项目工程</a>\n        <a class="section-nav-item" data-sec="sec-issue"><span class="section-nav-num">3</span>问题信息</a>'
    c = c.replace(old_nav, new_nav)

    # === 2. Create new sec-type card with 问题类型 + 应建未建 fields, insert BEFORE sec-project ===
    # Extract the type grid + isReportedRow block from sec-issue
    # The pattern: the 问题类型 full form-item + isReportedRow div
    type_block = """        <section id="sec-type"><div class="card"><div class="card-header"><div class="card-title"><span class="card-title-dot"></span>问题类型</div></div>
        <div class="card-body"><div class="form-grid">
          <div class="form-item full"><label class="form-label"><span class="required">*</span> 问题类型</label><div class="type-grid" id="typeGrid"></div></div>
          <div id="isReportedRow" style="display:none"><div class="form-item full"><label class="form-label"><span class="required">*</span> 项目工程是否已报建</label>
            <div style="display:flex;gap:16px;padding-top:4px">
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="是" onchange="onIsReportedChange()"> 是</label>
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="否" onchange="onIsReportedChange()"> 否</label>
            </div></div>
            <div class="form-item full" id="rptStreetRow" style="display:none"><label class="form-label"><span class="required">*</span> 所属街道</label><select class="form-select" id="rptStreet"><option value="">请选择所属街道</option></select></div>
          </div>
        </div></div></div></section>"""

    # Insert before sec-project section
    c = c.replace('<section id="sec-project">', type_block + '\n        <section id="sec-project">')

    # === 3. Remove the old 问题类型 and isReportedRow from sec-issue ===
    # Remove the type grid (now moved) and the duplicate isReportedRow
    old_type_in_issue = '''<div class="form-item full"><label class="form-label"><span class="required">*</span> 问题类型</label><div class="type-grid" id="typeGrid"></div></div>
          <div id="isReportedRow" style="display:none"><div class="form-item full"><label class="form-label"><span class="required">*</span> 项目工程是否已报建</label>
            <div style="display:flex;gap:16px;padding-top:4px">
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="是" onchange="onIsReportedChange()"> 是</label>
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="否" onchange="onIsReportedChange()"> 否</label>
            </div></div>
            <div class="form-item full" id="rptStreetRow" style="display:none"><label class="form-label"><span class="required">*</span> 所属街道</label><select class="form-select" id="rptStreet"><option value="">请选择所属街道</option></select></div>
          </div>
          <div class="form-item full"><label class="form-label"><span class="required">*</span> 问题详情</label>'''

    new_type_in_issue = '''<div class="form-item full"><label class="form-label"><span class="required">*</span> 问题详情</label>'''
    c = c.replace(old_type_in_issue, new_type_in_issue)

    # === 4. Also fix sec-project nav in scroll tracking JS ===
    # Update sections array
    c = c.replace(
        "var sections=['sec-project','sec-issue']",
        "var sections=['sec-type','sec-project','sec-issue']"
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'Fixed section order: {path}')

# Fix both files
fix_section_order(r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\supervisor-issue-report.html")
fix_section_order(r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-report.html")
