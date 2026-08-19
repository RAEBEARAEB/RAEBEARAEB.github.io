# -*- coding: utf-8 -*-
"""Move isReportedRow + rptStreetRow from sec-type to sec-project."""
def fix_field_placement(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # === 1. Move the isReportedRow+rptStreetRow block AFTER the 责任单位 field in sec-project ===
    # Find the closing of sec-project card-body
    old_sec_project_end = """          <div class="form-item"><label class="form-label"><span class="required">*</span> 责任单位</label><select class="form-select" id="rptRespUnit"><option value="">请先选择项目</option></select></div>
        </div></div></div></section>"""
    new_sec_project_end = """          <div class="form-item"><label class="form-label"><span class="required">*</span> 责任单位</label><select class="form-select" id="rptRespUnit"><option value="">请先选择项目</option></select></div>
          <div id="isReportedRow" style="display:none"><div class="form-item full"><label class="form-label"><span class="required">*</span> 项目工程是否已报建</label>
            <div style="display:flex;gap:16px;padding-top:4px">
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="是" onchange="onIsReportedChange()"> 是</label>
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="否" onchange="onIsReportedChange()"> 否</label>
            </div></div>
            <div class="form-item full" id="rptStreetRow" style="display:none"><label class="form-label"><span class="required">*</span> 所属街道</label><select class="form-select" id="rptStreet"><option value="">请选择所属街道</option></select></div>
          </div>
        </div></div></div></section>"""
    c = c.replace(old_sec_project_end, new_sec_project_end)

    # === 2. Remove the duplicate isReportedRow block from sec-type ===
    old_in_type = """          <div id="isReportedRow" style="display:none"><div class="form-item full"><label class="form-label"><span class="required">*</span> 项目工程是否已报建</label>
            <div style="display:flex;gap:16px;padding-top:4px">
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="是" onchange="onIsReportedChange()"> 是</label>
              <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:var(--font-size-sm)"><input type="radio" name="rptIsReported" value="否" onchange="onIsReportedChange()"> 否</label>
            </div></div>
            <div class="form-item full" id="rptStreetRow" style="display:none"><label class="form-label"><span class="required">*</span> 所属街道</label><select class="form-select" id="rptStreet"><option value="">请选择所属街道</option></select></div>
          </div>
        </div></div></div></section>"""
    new_in_type = """        </div></div></div></section>"""
    c = c.replace(old_in_type, new_in_type)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'Moved fields to sec-project: {path}')

fix_field_placement(r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\supervisor-issue-report.html")
fix_field_placement(r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-report.html")
