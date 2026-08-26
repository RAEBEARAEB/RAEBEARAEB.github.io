path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\redline.html"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove updateTabCounts() call
for i, line in enumerate(lines):
    if line.strip() == 'updateTabCounts();':
        lines[i] = ''
        print(f"Removed updateTabCounts call at line {i+1}")
        break

# Remove the currentTab reset + tab-item class reset block (3 consecutive lines after resetFilter)
for i, line in enumerate(lines):
    if "currentTab='all';" in line:
        # Remove this line and the next 3 lines (the tab-item manipulations)
        for j in range(4):
            lines[i+j] = ''
        print(f"Removed currentTab reset block from line {i+1}")
        break

# Remove switchTab function (find its start and end)
in_switch = False
for i, line in enumerate(lines):
    if 'function switchTab(tab){' in line:
        in_switch = True
        lines[i] = ''
        continue
    if in_switch:
        lines[i] = ''
        if line.strip() == '}' and not line.strip().startswith('function'):
            print(f"Removed switchTab function ending at line {i+1}")
            break

# Remove updateTabCounts function
in_func = False
for i, line in enumerate(lines):
    if 'function updateTabCounts(){' in line:
        in_func = True
        lines[i] = ''
        continue
    if in_func:
        lines[i] = ''
        if line.strip() == '}' and not line.strip().startswith('function'):
            print(f"Removed updateTabCounts function ending at line {i+1}")
            break

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print('Done')
