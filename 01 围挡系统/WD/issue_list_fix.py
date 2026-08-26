"""Fix issue list pages: remove 问题描述 column, add 所属街道 column, add 问题类型 filter.
Handles both supervisor-pc/supervisor-issue-list.html and project-pc/fence-issue-list.html."""
import re

def fix_list_page(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # === 1. Add 问题类型 filter in search bar (after 全部来源) ===
    c = c.replace(
        '<option value="项目巡检">项目巡检</option></select>',
        '<option value="项目巡检">项目巡检</option></select>\n  <select id="filterType" onchange="renderTable()"><option value="all">全部类型</option></select>'
    )

    # === 2. Remove <th>问题描述</th> table header ===
    c = c.replace('<th>问题描述</th>', '')

    # === 3. Replace 关联工程 header and add 所属街道===
    c = c.replace(
        '<th>关联工程</th>',
        '<th>关联工程</th><th>所属街道</th>'
    )

    # === 4. Find the table row rendering and update ===
    # The row pattern: 关联工程 cell + 问题描述 cell
    old_row = " '<td>'+esc(i.engineerName||'--')+'</td><td style=\"max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap\" title=\"'+esc(i.details)+'\">'+esc(i.details)+'</td>'"
    new_row = " '<td>'+esc(i.engineerName||'--')+'</td><td>'+esc(i.street||(i.fenceStreet||'--'))+'</td>'"
    c = c.replace(old_row, new_row)

    # === 5. Initialize filterType options ===
    old_after = "filterSource||filterStatus"
    # Find where filters are populated and add type filter
    filter_init = """
  var typeSel=document.getElementById('filterType');
  if(typeSel&&typeSel.options.length<=1){
    var allTypes=window.MOCK_DATA?MOCK_DATA.getStreetIssueTypes():[];
    allTypes.forEach(function(t){var o=document.createElement('option');o.value=t;o.textContent=t;typeSel.appendChild(o);});
  }
  var typeFilter=document.getElementById('filterType')?document.getElementById('filterType').value:'all';"""
    c = c.replace("var src=document.getElementById('filterSource')", filter_init + "\n  var src=document.getElementById('filterSource')")

    # === 6. Add type filter in the rendering logic ===
    c = c.replace(
        "if(src!=='all'&&i.source!==src)",
        "if(src!=='all'&&i.source!==src)return false;\n    if(typeFilter!=='all'&&i.type!==typeFilter)return false;"
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'Fixed list: {path}')

fix_list_page(r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\supervisor-issue-list.html")
fix_list_page(r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-list.html")
