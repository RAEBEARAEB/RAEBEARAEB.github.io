with open(r'E:\01 进行中\241114  监管平台\260408 围挡平台\Station\public-miniapp\qrcode_2.0.html','r',encoding='utf-8') as f:
    c = f.read()

# ── 1. mobile-header CSS → demo_v4 white style ──
old_hdr = '''.mobile-header{background:var(--blue);color:#fff;padding:0 var(--s4);height:44px;display:flex;align-items:center;flex-shrink:0;position:relative}
.mobile-header-title{position:absolute;left:50%;transform:translateX(-50%);font-size:var(--fs-lg);font-weight:var(--fw-b);display:flex;align-items:center;gap:var(--s2)}
.mobile-header-title svg{width:18px;height:18px;flex-shrink:0}
.header-btn{background:rgba(255,255,255,0.18);border:none;color:#fff;height:28px;padding:0 var(--s3);border-radius:var(--radius-sm);font-size:var(--fs-sm);font-family:var(--font);font-weight:var(--fw-m);cursor:pointer;display:flex;align-items:center;gap:var(--s1);transition:background .15s;margin-left:auto}
.header-btn:active{background:rgba(255,255,255,0.3)}
.header-btn svg{width:13px;height:13px}'''
new_hdr = '''.mobile-header{background:rgba(255,255,255,.96);color:var(--text);border-bottom:1px solid var(--gray-200);padding:0 var(--s4);height:44px;display:flex;align-items:center;flex-shrink:0;position:relative;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
.mobile-header-title{position:absolute;left:50%;transform:translateX(-50%);font-size:var(--fs-lg);font-weight:var(--fw-b);letter-spacing:.02em}
.header-btn{background:var(--blue-50);border:none;color:var(--blue);height:28px;padding:0 12px;border-radius:999px;font-size:var(--fs-sm);font-family:var(--font);font-weight:var(--fw-m);cursor:pointer;display:flex;align-items:center;gap:var(--s1);transition:all .15s;margin-left:auto}
.header-btn:active{background:#E4E9FF;transform:scale(.98)}'''
assert old_hdr in c, 'mobile-header CSS not found'
c = c.replace(old_hdr, new_hdr)

# ── 2. status bar → white ──
c = c.replace('.phone-status-bar{height:48px;background:#1a1a1a;', '.phone-status-bar{height:48px;background:#fff;color:var(--text);border-bottom:1px solid var(--gray-200);')

# ── 3. hero-section CSS → demo_v4 light card ──
old_hero = '''.hero-section{position:relative;width:100%;padding:14px 16px 12px;background:var(--blue);overflow:hidden}
.hero-section img{display:none!important}
.hero-gradient{display:none}
.hero-info{position:relative;color:#fff}
.hero-info::before{content:'';position:absolute;left:-2px;top:1px;bottom:1px;width:3px;background:rgba(255,255,255,0.5);border-radius:2px}
.hero-project{font-size:var(--fs-lg);font-weight:var(--fw-h);line-height:1.3;padding-left:10px;margin-bottom:3px}
.hero-engineer{font-size:var(--fs-xs);color:rgba(255,255,255,0.85);font-weight:var(--fw-m);padding-left:10px;display:inline-block;background:rgba(255,255,255,0.15);padding:2px 8px 2px 8px;border-radius:999px;margin-left:10px;margin-bottom:6px}
.hero-address{font-size:var(--fs-xs);color:rgba(255,255,255,0.7);padding-left:10px;display:flex;align-items:center;gap:3px;line-height:1.4}
.hero-address svg{width:11px;height:11px;flex-shrink:0;opacity:0.7}'''
new_hero = '''.hero-section{width:auto;height:auto;min-height:0;margin:10px 16px 0;overflow:hidden;background:linear-gradient(135deg,#F3F6FF 0%,#FAFBFF 100%);border:1px solid rgba(44,80,221,.13);border-radius:14px;box-shadow:0 3px 10px rgba(44,80,221,.055)}
.hero-section img{display:none!important}
.hero-gradient{display:none}
.hero-info{position:relative;color:var(--text);padding:12px 14px}
.hero-project{margin:0;font-size:15px;font-weight:700;line-height:1.4;color:var(--text)}
.hero-detail-list{display:flex;flex-direction:column;gap:5px;margin-top:7px}
.hero-detail-row{display:grid;grid-template-columns:16px minmax(0,1fr);align-items:start;column-gap:6px}
.hero-detail-row>i{margin-top:1px;color:var(--blue);font-size:14px;opacity:.78}
.hero-engineer{color:var(--text-sec);font-size:12px;font-weight:600;line-height:17px}
.hero-address{display:-webkit-box;margin:0;color:var(--text-ter);font-size:11px;line-height:16px;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}
.hero-address svg{display:none}'''
assert old_hero in c, 'hero CSS not found'
c = c.replace(old_hero, new_hero)

# ── 4. info-card CSS → demo_v4 with blue bar ──
old_card = '''.info-card-header{padding:var(--s3) var(--s4);background:var(--gray-100);border-bottom:1px solid #E8E8E8;display:flex;align-items:center;gap:var(--s2)}
.info-card-header svg{width:15px;height:15px;color:var(--blue)}
.info-card-title{font-size:var(--fs-md);font-weight:var(--fw-b);color:var(--text)}
.info-card-body{padding:var(--s3) var(--s4)}'''
new_card = '''.info-card-header{padding:var(--s3) var(--s4);background:var(--white);border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:var(--s2);position:relative}
.info-card-header::before{content:"";width:3px;height:16px;border-radius:2px;background:var(--blue)}
.info-card-header svg{display:none}
.info-card-title{font-size:15px;font-weight:var(--fw-b);color:var(--text)}
.info-card-body{padding:14px 16px 15px}'''
assert old_card in c, 'info-card CSS not found'
c = c.replace(old_card, new_card)

# ── 5. report-header CSS → match (orange bar, hide svg) ──
old_rep = '''.report-header{padding:var(--s3) var(--s4);background:var(--gray-100);border-bottom:1px solid #E8E8E8;display:flex;align-items:center;gap:var(--s2)}
.report-header svg{width:15px;height:15px;color:var(--orange)}
.report-title{font-size:var(--fs-md);font-weight:var(--fw-b);color:var(--text)}'''
new_rep = '''.report-header{padding:var(--s3) var(--s4);background:var(--white);border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:var(--s2);position:relative}
.report-header::before{content:"";width:3px;height:16px;border-radius:2px;background:var(--orange)}
.report-header svg{display:none}
.report-title{font-size:15px;font-weight:var(--fw-b);color:var(--text)}'''
assert old_rep in c, 'report-header CSS not found'
c = c.replace(old_rep, new_rep)

# ── 6. HTML: hero-section structure → demo_v4 detail-list ──
old_hero_html = '''<div class="hero-section">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='200' viewBox='0 0 420 200'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%2368A4D0'/%3E%3Cstop offset='0.6' stop-color='%23A8CCE8'/%3E%3Cstop offset='1' stop-color='%23C4DBED'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='420' height='200' fill='url(%23sky)'/%3E%3Crect x='20' y='80' width='380' height='120' fill='%238B9E6B' opacity='0.3'/%3E%3Crect x='40' y='60' width='80' height='140' fill='%23707B7D' rx='2'/%3E%3Crect x='140' y='40' width='60' height='160' fill='%2361696B' rx='2'/%3E%3Crect x='220' y='55' width='90' height='145' fill='%237A8588' rx='2'/%3E%3Crect x='330' y='70' width='70' height='130' fill='%236E797C' rx='2'/%3E%3Crect x='30' y='100' width='360' height='3' fill='%23C4A035' opacity='0.6'/%3E%3Crect x='30' y='130' width='360' height='3' fill='%23C4A035' opacity='0.6'/%3E%3Crect x='30' y='160' width='360' height='3' fill='%23C4A035' opacity='0.6'/%3E%3Crect x='40' y='30' width='25' height='8' rx='1' fill='%23B0B0B0'/%3E%3Crect x='140' y='20' width='20' height='8' rx='1' fill='%23A0A0A0'/%3E%3Crect x='220' y='30' width='30' height='8' rx='1' fill='%23B0B0B0'/%3E%3Crect x='330' y='45' width='25' height='8' rx='1' fill='%23A0A0A0'/%3E%3Crect x='10' y='185' width='400' height='15' fill='%23A0977A' opacity='0.4'/%3E%3Crect x='25' y='100' width='370' height='60' fill='%233A6B35' opacity='0.15' rx='2'/%3E%3C/svg%3E" alt="">
      <div class="hero-gradient"></div>
      <div class="hero-info"><div class="hero-project">南山区科技园综合体项目</div><div class="hero-engineer">基坑围护工程围挡</div><div class="hero-address"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>深圳市南山区科技园南区高新南一道与科技南路交汇处东南侧</div></div>
    </div>'''
new_hero_html = '''<div class="hero-section">
      <div class="hero-info">
        <div class="hero-project">南山区科技园综合体项目</div>
        <div class="hero-detail-list">
          <div class="hero-detail-row"><i class="ti ti-building-community"></i><span class="hero-engineer">基坑围护工程围挡</span></div>
          <div class="hero-detail-row"><i class="ti ti-map-pin"></i><span class="hero-address">深圳市南山区科技园南区高新南一道与科技南路交汇处东南侧</span></div>
        </div>
      </div>
    </div>'''
assert old_hero_html in c, 'hero HTML not found'
c = c.replace(old_hero_html, new_hero_html)

# ── 7. spec-row lighten ──
c = c.replace('.spec-row{display:flex;gap:var(--s2);padding:var(--s3) var(--s4);background:var(--white);border-bottom:1px solid var(--gray-200)}',
              '.spec-row{display:flex;gap:10px;padding:12px 16px;background:var(--gray-100);border-bottom:none}')
c = c.replace('.spec-chip{flex:1;background:var(--gray-100);border:1px solid var(--gray-200);border-radius:var(--radius-md);padding:var(--s3) var(--s2);text-align:center}',
              '.spec-chip{flex:1;background:#F7F8FC;border:none;border-radius:12px;padding:var(--s3) var(--s2);text-align:center;box-shadow:inset 0 0 0 1px rgba(230,232,234,.78)}')

with open(r'E:\01 进行中\241114  监管平台\260408 围挡平台\Station\public-miniapp\qrcode_2.0.html','w',encoding='utf-8') as f:
    f.write(c)
print('demo_v4 styles applied to qrcode_2.0.html')
