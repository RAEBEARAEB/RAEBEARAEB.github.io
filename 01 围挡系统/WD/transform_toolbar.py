# -*- coding: utf-8 -*-
"""
Transform the fence toolbar in all 4 HTML files from the old 7-button design
to the new dual-toolbar (default + editing) design.
"""
import os
import re
import sys

files = [
    r'e:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\change_v2.html',
    r'e:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\detail_v2.html',
    r'e:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\change_v2_project.html',
    r'e:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\detail_v2_project.html',
]

# ── New toolbar HTML ──
new_toolbar_default = '''                  <div class="map-toolbar" id="mapToolbarDefault">
                    <button type="button" class="map-toolbar-btn primary" id="btnEnterEdit" onclick="enterEditMode()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>编辑点位</button>
                    <div class="map-legend"><div class="map-legend-item"><span class="map-legend-line dashed" style="border-color:#1862D4"></span>围挡范围</div><div class="map-legend-item"><span class="map-legend-line" style="border-color:#1862D4;border-style:solid"></span>围挡线段</div><div class="map-legend-item"><span class="map-legend-line" style="border-color:#D13B2F"></span>项目红线</div></div>
                    <span class="map-toolbar-info" id="mapInfo">0个图形 · 0个点位</span>
                  </div>
                  <div class="map-toolbar editing-toolbar" id="mapToolbarEdit" style="display:none">
                    <button type="button" class="map-toolbar-btn active" id="btnModePolygon" onclick="startNewShape('polygon')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>新增多边形</button>
                    <button type="button" class="map-toolbar-btn" id="btnModeLine" onclick="startNewShape('line')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="20" x2="20" y2="4"/></svg>新增线段</button>
                    <button type="button" class="map-toolbar-btn" id="btnUndo" onclick="undoLastPoint()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>撤回</button>
                    <button type="button" class="map-toolbar-btn danger" onclick="clearAllShapes()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>清空绘制</button>
                    <button type="button" class="map-toolbar-btn" style="background:#1862D4;color:#fff" onclick="saveAndExitEdit()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>保存编辑</button>
                    <div class="map-legend"><div class="map-legend-item"><span class="map-legend-line dashed" style="border-color:#1862D4"></span>围挡范围</div><div class="map-legend-item"><span class="map-legend-line" style="border-color:#1862D4;border-style:solid"></span>围挡线段</div><div class="map-legend-item"><span class="map-legend-line" style="border-color:#D13B2F"></span>项目红线</div></div>
                    <span class="map-toolbar-info" id="mapInfoEdit">0个图形 · 0个点位</span>
                    <div class="shape-list" id="shapeList" style="max-height:120px;overflow-y:auto;width:100%"></div>
                  </div>'''

# ── New CSS to add ──
new_css = """.editing-toolbar{background:#F0F5FF;border-bottom:2px solid #1862D4;flex-wrap:wrap}
.map-toolbar-btn.primary{background:#1862D4;color:#fff;border-color:#1862D4}
.map-toolbar-btn.primary:hover{background:#1256BD}"""

# ── New JS functions ──
new_js_functions = """
function enterEditMode(){
  document.getElementById('mapToolbarDefault').style.display='none';
  document.getElementById('mapToolbarEdit').style.display='flex';
  document.getElementById('btnModePolygon').classList.add('active');
  document.getElementById('btnModeLine').classList.remove('active');
  if(activeIdx>=0&&markers.length>0){
    isEditing=true;
    enableEditDrag();
  }
  updateShapeList();
  updateEditInfo();
}
function exitEditMode(){
  isDrawing=false;isEditing=false;
  disableEditDrag();
  document.getElementById('mapToolbarDefault').style.display='flex';
  document.getElementById('mapToolbarEdit').style.display='none';
  map.getContainer().style.cursor='';
}
function saveAndExitEdit(){
  saveActiveShape();
  if(typeof saveCurrentFence==='function')saveCurrentFence();
  exitEditMode();
  showToast('围挡范围已保存');
}
function startNewShape(type){
  currentShapeType=type;
  document.getElementById('btnModePolygon').classList.toggle('active',type==='polygon');
  document.getElementById('btnModeLine').classList.toggle('active',type==='line');
  if(activeIdx>=0&&drawPoints.length>=getMinPoints(currentShapeType)){
    saveActiveShape();
    if(activeIdx>=0&&activeIdx<shapes.length)renderStaticShape(activeIdx);
  }
  shapes.push({type:type,points:[],label:type==='polygon'?'范围'+(shapes.length+1):'线段'+(shapes.length+1)});
  staticLayers.push(null);
  activeIdx=shapes.length-1;
  clearCurrentDisplay();
  drawPoints=[];
  isDrawing=true;
  map.getContainer().style.cursor='crosshair';
  updateShapeList();updateEditInfo();
}
function updateEditInfo(){
  var el=document.getElementById('mapInfoEdit');
  if(!el)return;
  var total=shapes.reduce(function(s,sh){return s+sh.points.length},0)+drawPoints.length;
  el.textContent=shapes.length+'个图形 · '+total+'个点位';
  var el2=document.getElementById('mapInfo');
  if(el2)el2.textContent=shapes.length+'个图形 · '+total+'个点位';
}"""

def process_file(fpath):
    print(f"Processing: {os.path.basename(fpath)}")
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # ═══ 1. Replace the old toolbar HTML with new dual-toolbar ═══
    # Find the old toolbar block: from <div class="map-toolbar"> to its closing </div>
    # The old toolbar contains btnModePolygon with setShapeType

    # Pattern: find the line with <div class="map-toolbar"> that is followed by btnModePolygon or btnEnterEdit
    lines = content.split('\n')

    # Find start line (the <div class="map-toolbar"> line)
    start_line = None
    end_line = None

    for i, line in enumerate(lines):
        # Find the map-toolbar that contains the drawing buttons (not the entrance button)
        if '<div class="map-toolbar"' in line and 'id="mapToolbarDefault"' not in line and 'id="mapToolbarEdit"' not in line and 'editing-toolbar' not in line:
            if i + 1 < len(lines) and ('btnModePolygon' in lines[i+1] or 'btnEnterEdit' in lines[i+1] or 'setShapeType' in lines[i+1]):
                start_line = i

    if start_line is None:
        print(f"  WARNING: Could not find toolbar start in {fpath}")
        # Try to find any map-toolbar with btnModePolygon or setShapeType
        for i, line in enumerate(lines):
            if 'btnModePolygon' in line and ('setShapeType' in line or 'startNewShape' in line or 'enterEditMode' in line):
                # Go back to find the <div class="map-toolbar">
                for j in range(i, max(i-3, -1), -1):
                    if '<div class="map-toolbar"' in lines[j]:
                        start_line = j
                        break
                break

    if start_line is None:
        print(f"  ERROR: Still cannot find toolbar start. Skipping.")
        return False

    # Find end line: the closing </div> that matches the toolbar
    # Look for the line containing shapeList followed by a line with just </div>
    # Or look for the pattern: shapeList div, then </div> for map-toolbar
    depth = 0
    for i in range(start_line, min(start_line + 20, len(lines))):
        line = lines[i]
        # Count opening and closing divs
        depth += line.count('<div') - line.count('</div>')
        if 'shapeList' in line or ('mapInfo' in line and 'id=' in line):
            # The next </div> should close the toolbar
            for j in range(i+1, min(i+4, len(lines))):
                if '</div>' in lines[j] and '<div' not in lines[j]:
                    end_line = j
                    break
                elif '</div>' in lines[j]:
                    end_line = j
                    break
            if end_line:
                break

    if end_line is None:
        print(f"  WARNING: Could not find toolbar end. Trying alternate method.")
        # Try finding </div> after mapInfo/shapeList
        for i in range(start_line+1, min(start_line+15, len(lines))):
            if '</div>' in lines[i] and i > start_line + 5:
                end_line = i
                break

    if end_line is None:
        print(f"  ERROR: Cannot find toolbar end. Skipping.")
        return False

    print(f"  Toolbar: lines {start_line+1} to {end_line+1}")
    for i in range(start_line, end_line+1):
        print(f"    {i+1}: {lines[i][:100]}")

    # Replace the toolbar lines
    new_lines = lines[:start_line] + [new_toolbar_default] + lines[end_line+1:]
    content = '\n'.join(new_lines)

    # ═══ 2. Add new CSS after existing map-toolbar-btn styles ═══
    css_marker = '.map-toolbar-btn svg{width:12px;height:12px}'
    if css_marker in content:
        content = content.replace(css_marker, css_marker + '\n' + new_css)
        print("  Added new CSS")
    else:
        print("  WARNING: Could not find CSS marker")

    # ═══ 3. Replace JS functions ═══

    # 3a. Replace updInfo() - update both mapInfo and mapInfoEdit
    old_updInfo_pattern = r"function\s+updInfo\(\)\s*\{[^}]*\}"
    new_updInfo = """function updInfo(){
  var total=shapes.reduce(function(s,sh){return s+sh.points.length},0)+drawPoints.length;
  var text=shapes.length+'个图形 · '+total+'个点位';
  var el1=document.getElementById('mapInfo');
  var el2=document.getElementById('mapInfoEdit');
  if(el1)el1.textContent=text;
  if(el2)el2.textContent=text;
}"""
    content, n = re.subn(old_updInfo_pattern, new_updInfo, content, count=1)
    print(f"  Replaced updInfo(): {n} match(es)")

    # 3b. Remove setShapeType() function
    old_setShapeType = r"\s*function\s+setShapeType\s*\(\s*type\s*\)\s*\{[^}]*\}"
    content, n = re.subn(old_setShapeType, '', content, count=1)
    print(f"  Removed setShapeType(): {n} match(es)")

    # 3c. Remove startDraw() function
    old_startDraw = r"\s*function\s+startDraw\s*\(\)\s*\{[^}]*\}"
    content, n = re.subn(old_startDraw, '', content, count=1)
    print(f"  Removed startDraw(): {n} match(es)")

    # 3d. Replace finishDraw() - add vertex dragging after finish
    old_finishDraw = r"function\s+finishDraw\s*\(\)\s*\{[^}]*isDrawing\s*=\s*false;[^}]*updateShapeList\(\)\s*;?\s*updInfo\(\)\s*;?\s*\}"
    new_finishDraw = """function finishDraw(){
  if(!map)return;
  var minPts=getMinPoints(currentShapeType);
  if(drawPoints.length>=minPts){
    if(polygon)map.removeLayer(polygon);
    var pts=drawPoints.slice();
    if(currentShapeType==='polygon'){
      polygon=L.polygon(pts,{color:'#1862D4',weight:2.5,dashArray:'8 4',fillColor:'rgba(24,98,212,0.12)',fillOpacity:0.5}).addTo(map);
    }else{
      polygon=L.polyline(pts,{color:'#1862D4',weight:3}).addTo(map);
    }
    if(activeIdx>=0&&activeIdx<shapes.length){shapes[activeIdx].points=pts.slice()}
    showAddressLabel();
  }
  isDrawing=false;
  map.getContainer().style.cursor='';
  isEditing=true;
  enableEditDrag();
  updateShapeList();updInfo();
}"""
    content, n = re.subn(old_finishDraw, new_finishDraw, content, count=1, flags=re.DOTALL)
    if n == 0:
        # Try simpler pattern
        old_finishDraw2 = r"function\s+finishDraw\s*\(\)\s*\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}"
        content, n = re.subn(old_finishDraw2, new_finishDraw, content, count=1)
    print(f"  Replaced finishDraw(): {n} match(es)")

    # 3e. Remove addShape() function
    old_addShape = r"\s*function\s+addShape\s*\([^)]*\)\s*\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}"
    content, n = re.subn(old_addShape, '', content, count=1)
    print(f"  Removed addShape(): {n} match(es)")

    # 3f. Replace clearAllShapes() - don't exit edit mode, just clear
    old_clearAllShapes = r"function\s+clearAllShapes\s*\(\)\s*\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}"
    new_clearAllShapes = """function clearAllShapes(){
  if(!map)return;
  isDrawing=false;
  if(polygon){map.removeLayer(polygon);polygon=null}
  markers.forEach(function(m){map.removeLayer(m)});
  markers=[];drawPoints=[];
  staticLayers.forEach(function(l){if(l)map.removeLayer(l)});
  staticLayers=[];shapes=[];activeIdx=-1;
  isEditing=false;disableEditDrag();
  updInfo();updateShapeList();
  document.getElementById('mapAddress').style.display='none';
}"""
    content, n = re.subn(old_clearAllShapes, new_clearAllShapes, content, count=1)
    print(f"  Replaced clearAllShapes(): {n} match(es)")

    # 3g. Remove toggleEdit() function (single-line or multi-line)
    old_toggleEdit = r"\s*function\s+toggleEdit\s*\(\)\s*\{[^}]*\}"
    content, n = re.subn(old_toggleEdit, '', content, count=1)
    if n == 0:
        # Try the single-line version
        old_toggleEdit2 = r"\s*function\s+toggleEdit\s*\(\)\s*\{.*?\}(?=\s*function|\s*$)"
        content, n = re.subn(old_toggleEdit2, '', content, count=1, flags=re.MULTILINE)
    print(f"  Removed toggleEdit(): {n} match(es)")

    # 3h. Replace switchToShape() - add vertex dragging
    old_switchToShape = r"function\s+switchToShape\s*\(\s*idx\s*\)\s*\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}"
    new_switchToShape = """function switchToShape(idx){
  if(idx===activeIdx)return;
  isDrawing=false;map.getContainer().style.cursor='';
  saveActiveShape();
  clearCurrentDisplay();
  if(activeIdx>=0&&activeIdx<shapes.length&&shapes[activeIdx].points.length>=getMinPoints(shapes[activeIdx].type)){
    renderStaticShape(activeIdx);
  }
  activeIdx=idx;
  if(staticLayers[idx]){map.removeLayer(staticLayers[idx]);staticLayers[idx]=null}
  rebuildActiveDisplay();
  isEditing=true;
  enableEditDrag();
  updateShapeList();
}"""
    content, n = re.subn(old_switchToShape, new_switchToShape, content, count=1)
    print(f"  Replaced switchToShape(): {n} match(es)")

    # 3i. Add new JS functions before enableEditDrag()
    new_funcs_marker = 'function enableEditDrag()'
    if new_funcs_marker in content:
        content = content.replace(new_funcs_marker, new_js_functions + '\n' + new_funcs_marker)
        print("  Added new JS functions before enableEditDrag()")
    else:
        print("  WARNING: Could not find enableEditDrag() marker for new JS functions")

    # ═══ 4. Verify no duplicate IDs ═══
    mapinfo_count = content.count('id="mapInfo"')
    mapinfoedit_count = content.count('id="mapInfoEdit"')
    print(f"  ID counts: mapInfo={mapinfo_count}, mapInfoEdit={mapinfoedit_count}")

    if mapinfo_count != 1:
        print(f"  WARNING: mapInfo count is {mapinfo_count}, expected 1")
    if mapinfoedit_count != 1:
        print(f"  WARNING: mapInfoEdit count is {mapinfoedit_count}, expected 1")

    # ═══ 5. Write the file ═══
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  SUCCESS: File written")
    else:
        print(f"  WARNING: No changes made")

    return True

for fpath in files:
    try:
        process_file(fpath)
    except Exception as e:
        print(f"ERROR processing {fpath}: {e}")
        import traceback
        traceback.print_exc()
    print()
