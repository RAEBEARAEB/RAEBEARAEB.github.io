path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\fence-issue-report.html"
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# Fix nav items
c = c.replace('监管总览', '首页')  # 监管总览 → 首页
c = c.replace('href="index_v2.html"', 'href="index_v2_project.html"')
c = c.replace('href="panorama_patrol.html"', 'href="fence-issue-list.html"')
c = c.replace('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>全景巡查',
              '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>问题闭环处置')
c = c.replace('href="supervisor-issue-list.html" class="active"', 'href="fence-issue-list.html" class="active"')
c = c.replace('href="supervisor-issue-list.html"', 'href="fence-issue-list.html"')

# Fix source (submitReport function)
c = c.replace("source:'监管巡查'", "source:'项目巡检'")

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
print('ok')
