# encoding: utf-8
"""Safe V4 builder — applies all changes to index_v4_project.html"""
import os

FILE = 'index_v4_project.html'

def read():
    with open(FILE, 'r', encoding='utf-8') as f:
        return f.read()

def write(s):
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(s)
    print(f'  Written {len(s)} bytes')

c = read()
print(f'Starting from {len(c)} bytes')

# ═══ Step 1: Remove old view-switch ═══
old_vs = '<div class="view-switch">\n          <button class="view-switch-btn active" data-view="list"'
vs_end = '</div>\n        </div>\n      </div>\n      <div class="selector-bar">'
idx1 = c.find(old_vs)
idx2 = c.find(vs_end, idx1) + len(vs_end)
if idx1 != -1 and idx2 != -1:
    c = c[:idx1 - 6] + c[idx2 - len(vs_end):]  # remove the view-switch div
    print('Step 1: old view-switch removed')
else:
    print('Step 1: view-switch not found')

# ═══ Step 2: Insert card CSS before 表格 ═══
css = open('card_css_v4.txt', 'r', encoding='utf-8').read() if os.path.exists('card_css_v4.txt') else ''
if not css:
    # Read from demo_d which has the correct CSS
    demo_d = '../demo/fence_mgmt_demo_d.html'
    if os.path.exists(demo_d):
        dem = open(demo_d, 'r', encoding='utf-8').read()
        # Extract CSS between .fcard{ and .map-panel-col .card{
        start = dem.find('.card-map-row{display:flex;')
        end = dem.find('#fenceMapContainerNew{flex:1;')
        if start != -1 and end != -1:
            css = '/* ═══ 子围挡卡片 ═══ */\n' + dem[start:end].strip() + '\n.card-map-row{display:flex;gap:var(--space-4);align-items:flex-start}\n.card-list-col{flex:55;min-width:0;display:flex;flex-direction:column;gap:var(--space-3)}\n.map-panel-col{width:45%;flex-shrink:0;position:sticky;top:16px}\n.map-panel-col .card{display:flex;flex-direction:column;height:calc(100vh - 180px);min-height:560px}\n#fenceMapContainerNew{flex:1;position:relative;min-height:0}\n'
            with open('card_css_v4.txt', 'w', encoding='utf-8') as f: f.write(css)
            print('  CSS extracted from demo_d')

old_marker = '/* ═══ 表格 ═══ */'
if css and old_marker in c:
    c = c.replace(old_marker, css + old_marker)
    print('Step 2: Card CSS inserted')
else:
    print('Step 2: CSS not inserted')

# ═══ Step 3: Replace listViewContainer with card+map layout ═══
old_start = '<div id="listViewContainer">'
new_layout = '''<!-- V4 card+map layout -->
<div class="card-map-row" id="cardMapRow">
        <div class="card-list-col" id="cardListCol"></div>
        <div class="map-panel-col">
          <div class="card" id="mapPanelCard">
            <div id="fenceMapContainerNew" style="position:absolute;inset:0;z-index:0"></div>
            <div style="position:absolute;top:8px;right:8px;z-index:999;display:flex;flex-direction:column;gap:4px">
              <button style="width:30px;height:30px;border:1px solid rgba(0,0,0,0.1);background:rgba(255,255,255,0.9);border-radius:4px;cursor:pointer;font-size:16px;line-height:1;color:#6B7280" onclick="mapZoom(1)">+</button>
              <button style="width:30px;height:30px;border:1px solid rgba(0,0,0,0.1);background:rgba(255,255,255,0.9);border-radius:4px;cursor:pointer;font-size:16px;line-height:1;color:#6B7280" onclick="mapZoom(-1)">-</button>
            </div>
            <div style="position:absolute;bottom:12px;right:12px;z-index:999;display:flex;flex-direction:column;gap:4px;padding:6px 10px;background:rgba(255,255,255,0.95);border-radius:4px;font-size:11px;color:#6B7280;box-shadow:0 2px 8px rgba(0,0,0,0.08);border:1px solid #E3E6ED">
              <div style="display:flex;align-items:center;gap:6px"><span style="display:inline-block;width:18px;height:2.5px;background:#1862D4;border-radius:1px"></span>围挡图斑</div>
              <div style="display:flex;align-items:center;gap:6px"><span style="display:inline-block;width:18px;height:2.5px;background:repeating-linear-gradient(90deg,#9CA3B0 0,#9CA3B0 3px,transparent 3px,transparent 6px);border-radius:1px"></span>已拆除</div>
              <div style="display:flex;align-items:center;gap:6px"><span style="display:inline-block;width:18px;height:2.5px;background:#D13B2F;border-radius:1px"></span>项目红线</div>
              <div style="display:flex;align-items:center;gap:6px"><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#1890FF"></span>出入口</div>
            </div>
          </div>
        </div>
      </div>
'''

if old_start in c:
    # Find the <script> after this point
    script_pos = c.find('<script>', c.find(old_start))
    if script_pos != -1:
        c = c[:c.find(old_start)] + new_layout + c[script_pos:]
        print('Step 3: Card+map layout inserted')
    else:
        print('Step 3: <script> not found')
else:
    print('Step 3: listViewContainer not found')

write(c)
print('Phase 1 complete')
