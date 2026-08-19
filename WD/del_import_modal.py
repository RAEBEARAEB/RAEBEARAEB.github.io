path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\index_v2.html"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find start and end lines of the importModal block
start = None
end = None
for i, line in enumerate(lines):
    if '<!-- 批量导入弹窗 -->' in line:
        start = i
    if start is not None and '<!-- 围挡删除弹窗 -->' in line and i > start:
        end = i
        break

if start is not None and end is not None:
    # Remove from start to end (exclusive of end, keep the delete modal comment)
    del lines[start:end]
    print(f'Removed lines {start+1} to {end} ({end-start} lines)')
else:
    print(f'Start={start}, End={end} - not found')

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print('Done')
