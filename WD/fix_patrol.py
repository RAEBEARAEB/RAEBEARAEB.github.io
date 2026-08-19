import sys
path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\panorama_patrol.html"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add onclick to card div
content = content.replace(
    """      html += '<div class="'+cardCls+'" data-patrol-id="'+(r.id||'')+'">';""",
    """      html += '<div class="'+cardCls+'" data-patrol-id="'+(r.id||'')+'" onclick="openPatrolDetailModal(\\x27'+(r.id||'')+'\\x27)">';"""
)

# 2. Add view button before card close
content = content.replace(
    """      html += '</div>';
    });""",
    """      html += '<div class="patrol-record-pc-actions"><button class="patrol-record-pc-view-btn" onclick="event.stopPropagation();viewPatrolPanorama(\\x27'+(r.id||'')+'\\x27)"><i class="fas fa-play"></i> 查看</button></div>';
      html += '</div>';
    });"""
)

# 3. Add records cache after setting innerHTML
content = content.replace(
    """  if (cntEl) cntEl.textContent = records.length;
  sc.innerHTML = html;
  if (em) em.style.display""",
    """  if (cntEl) cntEl.textContent = records.length;
  if (records.length) window._patrolRecordsCache = records;
  sc.innerHTML = html;
  if (em) em.style.display"""
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('OK')
