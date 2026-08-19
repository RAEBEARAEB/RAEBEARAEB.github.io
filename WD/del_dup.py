path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\detail_info_v2_project.html"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove line 891-900 (0-indexed: 890-899) — duplicate JS block
keep = []
skip = False
for i, line in enumerate(lines, 1):
    if i == 891:
        skip = True  # Start skipping at the duplicate comment
    if skip:
        if line.strip() == '})();':  # End of the duplicate block
            skip = False
            continue  # Don't keep the closing })();
        continue
    keep.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(keep)
print('Done, removed ' + str(len(lines) - len(keep)) + ' lines')
