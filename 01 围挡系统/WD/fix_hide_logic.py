# -*- coding: utf-8 -*-
"""
Fix selectType and onIsReportedChange: hide individual fields, not entire sec-project.
Add rptProjectGroup wrapper around: rptProject + rptEngineer + fenceInfoWrap + rptRespUnit
Then toggle this wrapper instead of sec-project display.
"""
def fix(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # === 1. Wrap hideable fields in sec-project with rptProjectGroup ===
    c = c.replace(
        '<div class="form-item"><label class="form-label"><span class="required">*</span> 关联项目</label>',
        '<div id="rptProjectGroup"><div class="form-item"><label class="form-label"><span class="required">*</span> 关联项目</label>'
    )
    c = c.replace(
        '</select></div>\n          <div id="isReportedRow"',
        '</select></div></div>\n          <div id="isReportedRow"'
    )

    # === 2. Fix selectType ===
    c = c.replace(
        "document.getElementById('sec-project').style.display=isNotBuilt?'none':'';",
        "var pg=document.getElementById('rptProjectGroup');if(pg)pg.style.display=isNotBuilt?'none':'';"
    )

    # === 3. Fix onIsReportedChange ===
    c = c.replace(
        "document.getElementById('sec-project').style.display=isYes?'':'none';",
        "var pg=document.getElementById('rptProjectGroup');if(pg)pg.style.display=isYes?'':'none';"
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'Fixed hide logic: {path}')

fix(r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\supervisor-issue-report.html")
fix(r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-report.html")
