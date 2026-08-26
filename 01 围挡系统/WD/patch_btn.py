path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\panorama_patrol.html"
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace("gap: 8px; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--ink-100); }",
              "justify-content: flex-end; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--ink-100); }")

c = c.replace("border: 1px solid var(--accent-300); border-radius: var(--radius); background: var(--accent-50); color: var(--accent-500); font-size: 11px; font-weight: 500; cursor: pointer; font-family: var(--font-base); transition: all .15s; }",
              "border: 1px solid var(--ink-200); border-radius: var(--radius); background: var(--white); color: var(--ink-500); font-size: 11px; font-weight: 500; cursor: pointer; font-family: var(--font-base); transition: all .15s; }")

c = c.replace("background: var(--accent-500); color: #fff; border-color: var(--accent-500); }",
              "background: var(--ink-50); color: var(--ink-800); border-color: var(--ink-300); }", 1)

c = c.replace(".patrol-record-pc-card { background: var(--white); border: 1px solid var(--ink-100); border-radius: var(--radius-lg); padding: 12px 14px; margin: 0 10px 8px; transition: all .15s; }",
              ".patrol-record-pc-card { background: var(--white); border: 1px solid var(--ink-100); border-radius: var(--radius-lg); padding: 12px 14px; margin: 0 10px 8px; transition: all .15s; position: relative; }")

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)
print('Done')
