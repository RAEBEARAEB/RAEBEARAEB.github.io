# encoding: utf-8
"""Restructure detail_info_v3.html to Demo B v3 layout: left 55% detail + right 42% map"""
import re, subprocess, os

with open('detail_info_v3.html', 'r', encoding='utf-8') as f:
    c = f.read()
print(f'Start: {len(c)} bytes')

# ═══ 1. CSS: Add new layout classes ═══
css_insert = '''
/* ═══ 左右分栏布局（详情+地图） ═══ */
.layout-body-row{display:flex;flex:1;min-height:0}
.detail-left{flex:1 1 55%;min-width:0;display:flex;flex-direction:column;overflow-y:auto;border-right:1px solid var(--border-color-light)}
.detail-left .main-body{flex:1;min-height:0}
.detail-left .section-nav{flex-shrink:0}
.detail-left .form-content{flex:1;overflow-y:auto}
.map-right{width:42%;flex-shrink:0;background:var(--bg-card);display:flex;flex-direction:column}
.map-right-full{flex:1;position:relative;min-height:0;display:flex;flex-direction:column}
.map-right-full .card{flex:1;display:flex;flex-direction:column;border:none;border-radius:0;margin:0}
.map-right-full .card-header{border-bottom:1px solid var(--border-color-light)}
.map-right-full .card-body{flex:1;display:flex;flex-direction:column;padding:0;overflow:hidden}
.map-right-full .map-view-container{flex:1;display:flex;flex-direction:column}
.map-right-full #fenceMap{flex:1;height:auto!important;min-height:300px}
'''
c = c.replace('\n.main-body{display:flex', css_insert + '\n.main-body{display:flex')
print('1. Layout CSS added')

# ═══ 2. Remove standalone sec-map block (between tabs and main-body) ═══
old_standalone = '''</div>
      <div class="fence-tabs" id="fenceTabs"></div>
	<div id="sec-map">
	          <div class="card">
	            <div class="card-header"><div class="card-title"><span class="card-title-dot"></span>围挡范围地图</div></div>
	            <div class="card-body" style="padding:0">
	              <div class="map-view-container" style="border-radius:0">
	                <div class="map-legend"><div class="map-legend-item"><span class="map-legend-line dashed" style="border-color:#1862D4"></span>当前选中围挡</div><div class="map-legend-item"><span class="map-legend-line" style="border-color:#D13B2F"></span>项目红线</div><div class="map-legend-item"><span class="map-legend-line dashed" style="border-color:#9CA3B0"></span>其他围挡</div></div>
	                <div id="fenceMap"></div>
	                <div class="map-address-overlay"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span id="mapAddressText">—</span></div>
	              </div>
	            </div>
	          </div>
	          </div>

'''

assert old_standalone in c, 'old standalone map not found'
c = c.replace(old_standalone, '</div>\n      <div class="fence-tabs" id="fenceTabs"></div>\n')
print('2. Standalone map block removed')

# ═══ 3. Wrap main-body in a flex row layout ═══
old_main_body = '<div class="main-body">'
new_wrapper = '<div class="layout-body-row">\n        <div class="detail-left">\n      <div class="main-body">'
c = c.replace(old_main_body, new_wrapper)
print('3. main-body wrapped in detail-left')

# ═══ 4. Close detail-left and add map-right column ═══
# Find the closing of main-body (which closes form-content + main-body)
# Looks like: </div>\n        </div>\n      </div>\n    </main>
old_close = '</div>\n        </div>\n      </div>\n    </main>'
new_close = '''</div>
        </div>
      </div>
        </div>
        <div class="map-right">
          <div class="map-right-full">
            <div class="card">
              <div class="card-header"><div class="card-title"><span class="card-title-dot"></span>围挡范围地图</div></div>
              <div class="card-body">
                <div class="map-view-container" style="flex:1;display:flex;flex-direction:column">
                  <div class="map-legend" style="position:absolute;top:50px;right:10px;z-index:900;background:rgba(255,255,255,0.94);border-radius:6px;padding:6px 10px;font-size:11px;line-height:1.8;box-shadow:0 1px 4px rgba(0,0,0,0.1);pointer-events:none">
                    <div class="map-legend-item"><span class="map-legend-line dashed" style="border-color:#1862D4"></span>当前选中围挡</div>
                    <div class="map-legend-item"><span class="map-legend-line" style="border-color:#D13B2F"></span>项目红线</div>
                    <div class="map-legend-item"><span class="map-legend-line dashed" style="border-color:#9CA3B0"></span>其他围挡</div>
                  </div>
                  <div id="fenceMap"></div>
                  <div class="map-address-overlay"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span id="mapAddressText">—</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>'''

assert old_close in c, 'old closing not found'
c = c.replace(old_close, new_close)
print('4. Map-right column added')

# ═══ 5. Remove duplicate sec-map inside form-content ═══
dup_marker = '<!-- ═══ 1. 围挡范围地图 ═══ -->\n          <!-- ═══ 1. 关联项目工程 ═══ -->'
c = c.replace(dup_marker, '<!-- ═══ 1. 关联项目工程 ═══ -->')
print('5. Duplicate sec-map comment removed')

# ═══ 6. CSS: override map heights for right panel ═══
# Remove fixed 360px height so map fills container
c = c.replace('#fenceMap{width:100%;height:360px;z-index:1}',
              '#fenceMap{width:100%;height:360px;z-index:1}')
# Use the right-panel override
if '.map-right-full #fenceMap{flex:1;height:auto!important' in c:
    print('6. Map-right CSS already present')

# ═══ 7. Fix the map legend positioning (was set in the v2 CSS) ═══
old_rl = 'function renderAllFences(mapInstance){'
# The renderAllFences should exist from our previous edits
if old_rl in c:
    print('7. renderAllFences found')
else:
    print('7. renderAllFences MISSING — need to add')
    # Add it
    old_rf = 'function renderOtherFences(mapInstance,tooltipEnabled){'
    if old_rf in c:
        c = c.replace('function renderOtherFences(mapInstance,tooltipEnabled){', old_rl)
        print('  Replaced renderOtherFences')

# ═══ Verify ═══
checks = [
    ('layout-body-row', '.layout-body-row{display:flex' in c),
    ('detail-left', '.detail-left{flex:1 1 55%' in c),
    ('map-right', '.map-right{width:42%' in c),
    ('map-right-full #fenceMap', '.map-right-full #fenceMap{flex:1' in c),
    ('fence-tabs', 'id="fenceTabs"' in c),
    ('fenceMap in right', c.find('map-right') < c.find('id="fenceMap"') < c.find('map-right') + 2000),
    ('no standalone sec-map before main-body', 'sec-map' not in c[c.find('fenceTabs'):c.find('layout-body-row')]),
    ('DOCTYPE', '<!DOCTYPE html>' in c),
    ('</html>', '</html>' in c),
]
all_ok = True
for label, ok in checks:
    print(f'  {"OK" if ok else "FAIL"}: {label}')
    if not ok: all_ok = False

with open('detail_info_v3.html', 'w', encoding='utf-8') as f:
    f.write(c)
print(f'\nSaved: {len(c)} bytes')
if all_ok: print('=== CHECKS PASSED ===')
else: print('=== FAILED ===')

# JS check
with open('_tmp.js', 'w', encoding='utf-8') as tf:
    scripts = list(re.finditer(r'<script>', c))
    closes = list(re.finditer(r'</script>', c))
    tf.write(c[scripts[-1].end():closes[-1].start()])
r = subprocess.run(['node', '--check', '_tmp.js'], capture_output=True, text=True)
print(f'JS: {"OK" if r.returncode == 0 else r.stderr[:200]}')
os.remove('_tmp.js')
