# -*- coding: utf-8 -*-
path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\detail_info_v2_project.html"
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove lines 504-506 (0-indexed: 503-505): duplicate detail items
del lines[503:506]  # after first deletion, indices shift

# Now find and remove the duplicate JS block (lines that start with second Populate comment)
for i in range(len(lines)):
    if '/* ═══ Populate 围挡状态 / 问题状态 / 是否待校核 ═══ */' in lines[i]:
        # Check if this is the SECOND occurrence
        below = lines[i+1:i+10]
        joined = ''.join(below)
        if 'document.getElementById' in joined:
            # Count populate blocks before this one
            count = 0
            for j in range(i):
                if 'Populate 围挡状态' in lines[j]:
                    count += 1
            if count >= 1:  # This is the second one
                # Delete from the comment line through the closing })();
                end = i
                for k in range(i, len(lines)):
                    if lines[k].strip() == '})();':
                        end = k
                        break
                print(f'Deleting duplicate JS block: lines {i+1} to {end+1}')
                del lines[i:end+1]
                break

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

# Verify
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()
print('FenceStatus count: ' + str(c.count('id="detailFenceStatus"')) + ' (should be 1)')
print('Populate blocks: ' + str(c.count('Populate 围挡状态')) + ' (should be 1)')
print('IssueStatus count: ' + str(c.count('id="detailIssueStatus"')) + ' (should be 1)')
