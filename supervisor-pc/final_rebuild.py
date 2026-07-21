# encoding: utf-8
"""Final clean rebuild of detail_info_v3.html from v2"""
import subprocess, os, re

with open('detail_info_v2.html', 'r', encoding='utf-8') as f:
    c = f.read()
print(f'V2: {len(c)} bytes')

# ═══ A. Remove old fenceMap from sec-fence ═══
old_map = '<div class="detail-item full"><span class="detail-label">围挡范围</span><span class="detail-value">\n                  <div class="map-view-container">\n                    <div class="map-legend">'
idx1 = c.find(old_map)
idx2 = c.find('</span></div>\n                <div class="detail-item"><span class="detail-label">所属街道</span>', idx1)
if idx1 > 0 and idx2 > idx1:
    c = c[:idx1] + c[idx2:]
    print('A. Old fenceMap removed')

# ═══ B. Layout: fence-tabs + L/R split ═══
c = c.replace('<div class="main-body">',
    '<div class="fence-tabs" id="fenceTabs"></div>\n      <div class="layout-body-row">\n        <div class="detail-left">\n          <div class="main-body">')

old_close = '    </main>'
new_close = '        </div>\n      </div>\n        </div>\n        <div class="map-right">\n          <div class="card">\n            <div class="card-header"><div class="card-title"><span class="card-title-dot"></span>围挡范围地图</div></div>\n            <div class="card-body">\n              <div class="map-view-container" style="position:relative">\n                <div class="map-legend" style="position:absolute;top:8px;right:10px;z-index:900">\n                  <div class="map-legend-item"><span class="map-legend-line dashed" style="border-color:#1862D4"></span>当前选中围挡</div>\n                  <div class="map-legend-item"><span class="map-legend-line" style="border-color:#D13B2F"></span>项目红线</div>\n                  <div class="map-legend-item"><span class="map-legend-line dashed" style="border-color:#9CA3B0"></span>其他围挡</div>\n                </div>\n                <div id="fenceMap"></div>\n                <div class="map-address-overlay"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span id="mapAddressText">-</span></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </main>'
c = c.replace(old_close, new_close)
print('B. Layout restructured')

# ═══ C. Data ═══
old_data_start = c.find('var _defaultHoard=(function(){')
old_data_end = c.find("return MOCK_DATA.getDefaultDemo();\n})();", old_data_start)
old_data_end += len("return MOCK_DATA.getDefaultDemo();\n})();")
new_data = 'var _projectHoardings=[],_currentIndex=0;\n(function(){\n  var m=window.location.search.match(/project=([^&]+)/);\n  var pn=m?decodeURIComponent(m[1]):\'\';\n  var all=MOCK_DATA.getHoardings();\n  if(pn){_projectHoardings=all.filter(function(h){return h.projectName===pn;});}\n  if(!_projectHoardings.length)_projectHoardings=[MOCK_DATA.getDefaultDemo()];\n  var en=\'\';try{var m2=window.location.search.match(/engineering=([^&]+)/);if(m2)en=decodeURIComponent(m2[1]);}catch(e){}\n  if(en){for(var i=0;i<_projectHoardings.length;i++){if(_projectHoardings[i].engineerName===en){_currentIndex=i;break;}}}\n})();\nfunction getCurrentHoard(){return _projectHoardings[_currentIndex]||_projectHoardings[0];}'
c = c[:old_data_start] + new_data + c[old_data_end:]
print('C. Data replaced')

# ═══ D. OTHER_FENCE_BLOCKS → ALL_FENCE_BLOCKS ═══
old_other_start = c.find('var OTHER_FENCE_BLOCKS=(function(){')
old_other_end = c.find('\n})();', old_other_start) + len('\n})();')
new_other = 'var ALL_FENCE_BLOCKS=(function(){\n  return _projectHoardings.map(function(h,i){\n    return{id:\'围挡\'+(i+1),engName:h.engineerName,status:h.fenceStatus,\n      gpsShape:h.gpsShape||[],\n      entrances:(h.entrances||[]).map(function(e){return{lat:e.lat,lng:e.lng,name:e.name}})};\n  });\n})();'
c = c[:old_other_start] + new_other + c[old_other_end:]
c = c.replace('_defaultHoard', 'getCurrentHoard()')
print('D. OTHER_FENCE_BLOCKS → ALL_FENCE_BLOCKS')

# ═══ E. renderAllFences ═══
c = c.replace('function renderOtherFences(mapInstance,tooltipEnabled){', 'function renderAllFences(mapInstance){')
c = c.replace('renderOtherFences(map,true);', 'renderAllFences(map);')
c = c.replace('OTHER_FENCE_BLOCKS.forEach(function(b){', 'ALL_FENCE_BLOCKS.forEach(function(b,fi){')
old_ops = "var opts={color:'#9CA3B0',weight:2,dashArray:'6 4',fillColor:'rgba(156,163,176,0.08)',fillOpacity:0.5,interactive:tooltipEnabled};"
new_ops = "var isActive=fi===_currentIndex;var opts=isActive?{color:'#1862D4',weight:3,dashArray:'8 4',fillColor:'rgba(24,98,212,0.15)',fillOpacity:0.6,interactive:true}:{color:'#9CA3B0',weight:2,dashArray:'6 4',fillColor:'rgba(156,163,176,0.08)',fillOpacity:0.5,interactive:true};"
c = c.replace(old_ops, new_ops)
c = c.replace('if(tooltipEnabled&&layer){', 'if(layer){')
print('E. renderAllFences')

# ═══ F. Entrance color ═══
old_ent_start = c.find("b.entrances.forEach(function(en){\n        var enIcon=L.divIcon({className:'',html:'<div style=\"display:flex;flex-direction:column;align-items:center\"><div style=\"width:10px;height:10px;border-radius:50%;border:2px solid #9CA3B0;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.1)\"></div><span style=\"margin-top:2px;font-size:9px;white-space:nowrap;color:#9CA3B0;font-family:var(--font-family)\">'+en.name+'</span></div>',iconSize:[20,34],iconAnchor:[10,34]})")
old_ent_end = c.find('\n      });\n    }', old_ent_start)
# The above might not end correctly. Let's try fixing differently.
# Just search-replace the static color part
c = c.replace('border:2px solid #9CA3B0;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.1)\"></div><span style=\"margin-top:2px;font-size:9px;white-space:nowrap;color:#9CA3B0;',
    'border:2px solid \'+enCol+\';background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.1)\"></div><span style=\"margin-top:2px;font-size:9px;white-space:nowrap;color:\'+enCol+\';')
# Add enCol var
old_en_line = "b.entrances.forEach(function(en){\n        var enIcon=L.divIcon({"
new_en_line = "b.entrances.forEach(function(en){\n        var enCol=isActive?(ENTRANCE_COLORS[en.type]||'#1890FF'):'#9CA3B0';var enIcon=L.divIcon({"
c = c.replace(old_en_line, new_en_line)
print('F. Entrance colors')

# ═══ G. URL & Nav ═══
c = c.replace('<a href="index_v2.html" class="active">', '<a href="index_v3_project.html" class="active">')
c = c.replace('<title>围挡记录详情 - 深圳市建设施工围挡数字化管理系统</title>', '<title>围挡记录详情(v3) - 深圳市建设施工围挡数字化管理系统</title>')
c = c.replace('<h1 class="page-title"><span class="page-title-accent"></span>围挡记录详情', '<h1 class="page-title"><span class="page-title-accent"></span><span id="projTitle">围挡记录详情</span>')

# ═══ H. Remove project name field ═══
pn_marker = '<label class="form-label">项目名称</label>'
pn_idx = c.find(pn_marker)
if pn_idx > 0:
    pn_start = c.rfind('<div class="form-item">', 0, pn_idx)
    pn_end = c.find('</div>', c.find('</div>', pn_idx) + 6) + 6
    c = c[:pn_start] + c[pn_end:]
    print('H. Project name field removed')

# ═══ I. Field IDs ═══
field_specs = [
    ('<label class="form-label">工程名称</label>', '<div class="detail-form-value">', 'valEngName'),
    ('<label class="form-label">责任单位</label>', '<div class="detail-form-value">', 'valUnit'),
    ('<label class="form-label">围挡管护期限</label>', '<div class="detail-form-value">', 'valPeriod'),
    ('<label class="form-label">围挡责任人</label>', '<div class="detail-form-value">', 'valPerson'),
    ('<label class="form-label">围挡责任人联系电话</label>', '<div class="detail-form-value">', 'valPhone'),
    ('<span class="detail-label">围挡设置时间</span>', '<span class="detail-value">', 'valPlanSetup'),
    ('<span class="detail-label">计划拆除时间</span>', '<span class="detail-value">', 'valPlanRemove'),
    ('<span class="detail-label">所属街道</span>', '<span class="detail-value">', 'valFenceStreet'),
    ('<span class="detail-label">围挡材质</span>', '<span class="detail-value">', 'valFenceMaterial'),
    ('<span class="detail-label">围挡长度</span>', '<span class="detail-value">', 'valFenceLength'),
    ('<span class="detail-label">围挡高度</span>', '<span class="detail-value">', 'valFenceHeight'),
    ('<span class="detail-label">围挡风格</span>', '<span class="detail-value">', 'valFenceStyle'),
    ('<span class="detail-label">宣传画/公益广告</span>', '<span class="detail-value">', 'valFencePublicity'),
    ('<span class="detail-label">占道面积</span>', '<span class="detail-value">', 'valRoadArea'),
    ('<span class="detail-label">占道范围</span>', '<span class="detail-value">', 'valRoadRange'),
]
for marker, val_tag, vid in field_specs:
    idx = c.find(marker)
    if idx > 0:
        vp = c.find(val_tag, idx)
        if vp > 0 and 'id=' not in c[vp:vp+40]:
            c = c[:vp] + val_tag[:-1] + ' id="' + vid + '">' + c[vp+len(val_tag):]
print('I. Field IDs added')

c = c.replace('<div class="eng-info-grid">', '<div class="eng-info-grid" id="engInfoGrid">')

# ═══ J. CSS ═══
css = '\n/* ===== V3 Layout ===== */\n.layout-body-row{display:flex;flex:1;min-height:0}\n.detail-left{flex:1 1 55%;min-width:0;display:flex;flex-direction:column;overflow:hidden;border-right:1px solid var(--border-color-light)}\n.detail-left .main-body{flex:1;min-height:0}\n.map-right{width:42%;flex-shrink:0;background:var(--bg-card);display:flex;flex-direction:column}\n.map-right .card{border:none;border-radius:0;margin:0;display:flex;flex-direction:column;height:100%}\n.map-right .card-body{flex:1;padding:0;overflow:hidden;display:flex;flex-direction:column}\n.map-right .map-view-container{flex:1;display:flex;flex-direction:column;position:relative}\n.map-right .map-legend{position:absolute;top:8px;right:10px;z-index:900;background:rgba(255,255,255,0.94);border-radius:6px;padding:6px 10px;font-size:11px;line-height:1.8;box-shadow:0 1px 4px rgba(0,0,0,0.1);pointer-events:none}\n.map-right #fenceMap{flex:1!important;height:auto!important;min-height:300px}\n/* ===== V3 Tabs ===== */\n.fence-tabs{display:flex;gap:8px;padding:10px 16px;background:#fff;border-bottom:1px solid var(--border-color-light);overflow-x:auto;flex-shrink:0}\n.fence-tab{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:var(--border-radius-lg);cursor:pointer;transition:all var(--transition-fast);border:2px solid var(--color-gray-200);background:#fff;white-space:nowrap;flex-shrink:0;font-size:var(--font-size-sm)}\n.fence-tab:hover{border-color:var(--color-primary-300)}\n.fence-tab.active{background:var(--color-primary-50);border-color:var(--color-primary-500);box-shadow:0 0 0 3px rgba(24,98,212,0.08)}\n.fence-tab .tab-num{font-weight:var(--font-weight-bold);color:var(--text-title)}\n.fence-tab .tab-eng{color:var(--text-secondary);font-size:var(--font-size-xs)}\n.fence-tab .tab-tag{display:inline-flex;align-items:center;padding:1px 8px;border-radius:var(--border-radius-tag);font-size:10px;font-weight:var(--font-weight-medium);flex-shrink:0}\n.tab-tag.installed{background:var(--color-info-light);color:var(--color-info);border:1px solid var(--color-primary-200)}\n.tab-tag.claiming{background:#FEF3CD;color:#B45309;border:1px solid #FCD34D}\n.tab-tag.overdue{background:var(--color-danger-light);color:var(--color-danger);border:1px solid #F0B0B0}\n.tab-tag.removed{background:var(--color-gray-100);color:var(--text-tertiary);border:1px solid var(--color-gray-200)}\n.fence-tag2{display:inline-flex;align-items:center;padding:2px 10px;border-radius:2px;font-size:11px;font-weight:500;white-space:nowrap}\n.fence-tag2.installed{background:var(--color-info-light);color:var(--color-info);border:1px solid var(--color-primary-200)}\n.fence-tag2.claiming{background:#FEF3CD;color:#B45309;border:1px solid #FCD34D}\n.fence-tag2.overdue{background:var(--color-danger-light);color:var(--color-danger);border:1px solid #F0B0B0}\n.fence-tag2.removed{background:var(--color-gray-100);color:var(--text-tertiary);border:1px solid var(--color-gray-200)}\n'
c = c.replace('\n</style>', css + '\n</style>')
print('J. CSS inserted')

# ═══ K. JS ═══
js = '\n/* ===== V3 Tab Switch ===== */\nfunction switchFence(index){\n  _currentIndex=index;\n  updateDetailForIndex(index);\n  if(typeof map!==\'undefined\'&&map){\n    renderAllFences(map);\n    var h=_projectHoardings[index];if(h){var el=document.getElementById(\'mapAddressText\');if(el)el.textContent=h.address||h.projectAddress||\'-\';}\n  }\n  document.querySelectorAll(\'.fence-tab\').forEach(function(t,i){t.classList.toggle(\'active\',i===index);});\n}\nfunction updateDetailForIndex(index){\n  var h=_projectHoardings[index];if(!h)return;\n  document.getElementById(\'projTitle\').textContent=h.projectName||\'项目详情\';\n  updateStatusTags(h);updateDetailFields(h);renderEngInfoCard();renderFenceTabs();\n}\nfunction updateStatusTags(h){\n  var fs=h.fenceStatus,is=h.issueStatus,nv=h.needVerify;\n  var fc={\'已安装\':\'installed\',\'待认领\':\'claiming\',\'超期未拆\':\'overdue\',\'已拆除\':\'removed\'}[fs]||\'installed\';\n  var ic={\'正常\':\'tag-ok\',\'待整改\':\'tag-warn\',\'整改逾期\':\'tag-error\'}[is]||\'tag-ok\';\n  var el=document.getElementById(\'detailFenceStatusTag\');if(el)el.innerHTML=\'<span class=\"fence-tag2 \'+fc+\'\">\'+fs+\'</span>\';\n  el=document.getElementById(\'detailIssueStatusTag\');if(el)el.innerHTML=\'<span class=\"tag \'+ic+\'\">\'+is+\'</span>\';\n  el=document.getElementById(\'detailNeedVerifyTag\');if(el)el.innerHTML=nv===\'是\'?\'<span class=\"detail-verify-text\">待校核</span>\':\'\';\n}\nfunction updateDetailFields(h){\n  setVal(\'valEngName\',h.engineerName);setVal(\'valUnit\',h.constructUnit);\n  setVal(\'valPeriod\',(h.custodyStart||\'\')+\' ~ \'+(h.custodyEnd||\'\'));\n  setVal(\'valPerson\',h.fenceResponsible||\'-\');setVal(\'valPhone\',h.fenceResponsiblePhone||\'-\');\n  setVal(\'valPlanSetup\',h.setupDate);setVal(\'valPlanRemove\',h.planRemoveDate);\n  setVal(\'valFenceStreet\',h.projectStreet||\'\');setVal(\'valFenceMaterial\',h.material);\n  setVal(\'valFenceLength\',h.length+\'m\');setVal(\'valFenceHeight\',h.height+\'m\');\n  setVal(\'valFenceStyle\',h.fenceStyle);setVal(\'valFencePublicity\',h.publicityContent);\n  setVal(\'valRoadArea\',(h.roadOccupationArea||\'-\')+\'m2\');setVal(\'valRoadRange\',h.roadOccupation||\'-\');\n}\nfunction setVal(id,val){var el=document.getElementById(id);if(el)el.textContent=val||\'-\';}\nfunction renderFenceTabs(){\n  var ct=document.getElementById(\'fenceTabs\');if(!ct)return;\n  var clsMap={\'已安装\':\'installed\',\'待认领\':\'claiming\',\'超期未拆\':\'overdue\',\'已拆除\':\'removed\'};\n  ct.innerHTML=_projectHoardings.map(function(h,i){\n    return \'<div class=\"fence-tab\'+(i===_currentIndex?\' active\':\'\')+\'\" onclick=\"switchFence(\'+i+\')\">\'+\n      \'<span class=\"tab-tag \'+(clsMap[h.fenceStatus]||\'installed\')+\'\">\'+h.fenceStatus+\'</span>\'+\n      \'<span class=\"tab-num\">围挡\'+(i+1)+\'#</span>\'+\n      \'<span class=\"tab-eng\">\'+h.engineerName+\'</span></div>\';\n  }).join(\'\');\n}\nfunction renderEngInfoCard(){\n  var h=getCurrentHoard();if(!h||!h.projectName)return;\n  var projs=MOCK_DATA.getProjects(),found=null;\n  for(var i=0;i<projs.length;i++){if(projs[i].name===h.projectName){found=projs[i];break;}}\n  if(!found)return;\n  var fields=[\n    {label:\'监管单位\',value:found.regulatorUnit||\'\'},{label:\'建设单位\',value:found.buildUnit||\'\'},\n    {label:\'施工单位\',value:h.constructUnit||found.constructUnit||\'\'},{label:\'监理单位\',value:found.supervisorUnit||\'\'},\n    {label:\'设计单位\',value:found.designUnit||\'\'},{label:\'工程计划工期\',value:(h.custodyStart||\'\')+\' 至 \'+(h.custodyEnd||\'\')},\n    {label:\'所属区域\',value:found.district+\' \'+found.street},{label:\'地址\',value:h.address||found.address||\'\'},\n    {label:\'建设单位联系人\',value:found.buildContact||\'\'},{label:\'施工单位联系人\',value:found.constructContact||\'\'}\n  ];\n  var html=\'\';fields.forEach(function(f){\n    var d=document.createElement(\'span\');d.textContent=f.value||\'-\';\n    html+=\'<div class=\"eng-info-field\"><div class=\"eng-info-field-label\">\'+f.label+\'</div><div class=\"eng-info-field-value\" title=\"\'+d.innerHTML+\'\">\'+d.innerHTML+\'</div></div>\';\n  });\n  var grid=document.getElementById(\'engInfoGrid\');if(grid)grid.innerHTML=html;\n}\n(function(){\n  var h=getCurrentHoard();if(h){\n    document.getElementById(\'projTitle\').textContent=h.projectName||\'项目详情\';\n    updateDetailForIndex(_currentIndex);\n  }\n})();\n'
c = c.replace('\n</script>\n', js + '\n</script>\n')
print('K. JS inserted')

# ═══ Verify ═══
checks = [
    ('fenceMap count=1', c.count('id="fenceMap"') == 1),
    ('map-right HTML', 'class="map-right"' in c),
    ('detail-left HTML', 'class="detail-left"' in c),
    ('layout-body-row HTML', 'class="layout-body-row"' in c),
    ('fence-tabs HTML', 'id="fenceTabs"' in c),
    ('projTitle', 'id="projTitle"' in c),
    ('no _defaultHoard', '_defaultHoard' not in c),
    ('switchFence', 'function switchFence(' in c),
    ('renderFenceTabs', 'function renderFenceTabs()' in c),
    ('DOCTYPE', '<!DOCTYPE html>' in c),
    ('</html>', '</html>' in c),
]
for label, ok in checks:
    print(f'  {"OK" if ok else "FAIL"}: {label}')

with open('_tmp.js', 'w', encoding='utf-8') as tf:
    scripts = list(re.finditer(r'<script>', c))
    closes = list(re.finditer(r'</script>', c))
    tf.write(c[scripts[-1].end():closes[-1].start()])
r = subprocess.run(['node', '--check', '_tmp.js'], capture_output=True, text=True)
print(f'JS: {"OK" if r.returncode == 0 else r.stderr[:200]}')
os.remove('_tmp.js')

with open('detail_info_v3.html', 'w', encoding='utf-8') as f:
    f.write(c)
print(f'\nSaved: {len(c)} bytes')
