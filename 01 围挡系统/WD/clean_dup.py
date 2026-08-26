# -*- coding: utf-8 -*-
"""Remove duplicate detail_items and duplicate JS from detail_info_v2_project.html"""
path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\detail_info_v2_project.html"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

dedup = []
populate_count = 0
skip_until_end = False
for line in lines:
    # Track how many "Populate" comment blocks we've seen
    if 'Populate 围挡状态 / 问题状态 / 是否待校核' in line:
        populate_count += 1
        if populate_count >= 2:
            skip_until_end = True  # Skip this entire block
            continue
    if skip_until_end:
        if line.strip() == '})();':
            skip_until_end = False
        continue
    # Skip lines that start duplicate detail-item (lines with duplicate ids)
    dedup.append(line)

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(dedup)
print(f'Dedup done. Lines: {len(lines)} -> {len(dedup)}')

# Verify
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()
count_fence = c.count('id="detailFenceStatus"')
count_block = c.count('Populate 围挡状态')
print(f'FenceStatus elements: {count_fence} (should be 1)')
print(f'Populate blocks: {count_block} (should be 1)')
