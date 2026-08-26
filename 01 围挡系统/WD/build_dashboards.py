# -*- coding: utf-8 -*-
"""Build scoring dashboards for project-pc and supervisor-pc index pages."""
import re

# ═════════════════════════════════════════════════════════════════════
# PROJECT-PC INDEX
# ═════════════════════════════════════════════════════════════════════

proj_path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\project-pc\index.html"
with open(proj_path, 'r', encoding='utf-8') as f:
    c = f.read()

# CSS additions for scoring
score_css = """
/* ── 月度评分 ── */
.score-section{margin:var(--space-5) 0}
.score-main-card{background:var(--bg-card);border:1px solid var(--border-color-light);border-radius:var(--border-radius-lg);padding:var(--space-6);margin-bottom:var(--space-4);display:flex;align-items:center;gap:var(--space-8);box-shadow:var(--shadow-card)}
.score-big-num{font-size:48px;font-weight:var(--font-weight-bold);line-height:1}
.score-big-num.excellent{color:var(--color-success)}.score-big-num.good{color:var(--color-success)}.score-big-num.warn{color:var(--color-warning)}.score-big-num.poor{color:var(--color-danger)}
.score-meta{flex:1}
.score-grade-tag{display:inline-block;padding:4px 16px;border-radius:var(--border-radius-tag);font-size:var(--font-size-xl);font-weight:var(--font-weight-bold);margin-bottom:var(--space-2)}
.score-grade-tag.excellent{background:var(--color-success-light);color:var(--color-success-dark)}
.score-grade-tag.good{background:var(--color-success-light);color:var(--color-success-dark)}
.score-grade-tag.warn{background:var(--color-warning-light);color:var(--color-warning-dark)}
.score-grade-tag.poor{background:var(--color-danger-light);color:var(--color-danger-dark)}
.score-desc{font-size:var(--font-size-sm);color:var(--text-secondary)}
.score-dims-card{background:var(--bg-card);border:1px solid var(--border-color-light);border-radius:var(--border-radius-lg);padding:var(--space-5);margin-bottom:var(--space-4)}
.score-dims-title{font-size:var(--font-size-md);font-weight:var(--font-weight-bold);color:var(--text-title);margin-bottom:var(--space-4)}
.score-dim-row{display:flex;align-items:center;margin-bottom:var(--space-3);gap:var(--space-3)}
.score-dim-row:last-child{margin-bottom:0}
.score-dim-label{width:140px;font-size:var(--font-size-xs);color:var(--text-secondary);flex-shrink:0;text-align:right;line-height:var(--line-height-tight)}
.score-dim-bar-wrap{flex:1;height:20px;background:var(--color-gray-100);border-radius:4px;overflow:hidden;position:relative}
.score-dim-bar{height:100%;border-radius:4px;transition:width .5s ease}
.score-dim-bar.d1{background:var(--color-primary-500)}.score-dim-bar.d2{background:#0EA5E9}
.score-dim-val{width:56px;font-size:var(--font-size-xs);font-weight:var(--font-weight-bold);color:var(--text-primary);flex-shrink:0}
.score-dim-sub{font-size:11px;color:var(--text-tertiary);padding-left:var(--space-5);margin-top:2px}
.score-sug-card{background:var(--color-primary-50);border:1px solid rgba(24,98,212,.12);border-radius:var(--border-radius-lg);padding:var(--space-4);margin-bottom:var(--space-4)}
.score-sug-title{font-size:var(--font-size-sm);font-weight:var(--font-weight-bold);color:var(--color-primary-600);margin-bottom:var(--space-2)}
.score-sug-item{font-size:var(--font-size-sm);color:var(--text-primary);padding:4px 0;display:flex;align-items:flex-start;gap:var(--space-2);line-height:var(--line-height-normal)}
.score-sug-item::before{content:'→';color:var(--color-primary-400);flex-shrink:0;font-weight:var(--font-weight-bold)}
.score-rules-link{display:inline-flex;align-items:center;gap:4px;font-size:var(--font-size-xs);color:var(--text-link);cursor:pointer;margin-top:var(--space-2);text-decoration:underline;text-underline-offset:3px}
.score-rules-link:hover{color:var(--color-primary-600)}
.todo-tabs{display:flex;gap:0;margin-bottom:var(--space-4);border-bottom:2px solid var(--color-gray-200)}
.todo-tab{padding:var(--space-2) var(--space-5);font-size:var(--font-size-sm);color:var(--text-secondary);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s;background:none;border-top:none;border-left:none;border-right:none;font-family:var(--font-family)}
.todo-tab:hover{color:var(--text-primary)}
.todo-tab.active{color:var(--color-primary-500);border-bottom-color:var(--color-primary-500);font-weight:var(--font-weight-bold)}
.todo-panel{display:none}
.todo-panel.active{display:block}
"""
c = c.replace('</style>', score_css + '</style>')

# Replace stat cards + two-col-cards with scoring section
old_main_start = """      <!-- 统计卡片 -->
      <div class="stat-cards">"""
c = c.replace(old_main_start, '<!-- SCORING PLACEHOLDER -->' + old_main_start)

# Actually, let's insert the scoring section between stat cards and the two-col-cards
# And also wrap the two-col-cards in a tabs structure
old_two_col = """      <div class="two-col-cards">
      <!-- 待办事项 -->"""
new_scoring = """      <!-- ═══ 月度评分 ═══ -->
      <div class="score-section" id="scoreSection"></div>
      <!-- ═══ 评分说明弹窗 ═══ -->
      <div class="modal-overlay" id="scoreRulesModal" style="position:fixed;top:0;left:0;right:0;bottom:0;background:var(--bg-overlay);z-index:2000;display:none;align-items:center;justify-content:center" onclick="if(event.target===this)this.style.display='none'">
        <div class="modal-box" style="width:560px;max-width:90vw;background:var(--bg-card);border-radius:var(--border-radius-lg);box-shadow:var(--shadow-lg);max-height:80vh;overflow-y:auto" onclick="event.stopPropagation()">
          <div style="padding:var(--space-4) var(--space-5);border-bottom:1px solid var(--border-color-light);display:flex;align-items:center;justify-content:space-between"><span style="font-size:var(--font-size-lg);font-weight:var(--font-weight-bold);color:var(--text-title)">围挡管理评分说明</span><button onclick="document.getElementById('scoreRulesModal').style.display='none'" style="background:none;border:none;font-size:20px;cursor:pointer;color:var(--text-tertiary)">&times;</button></div>
          <div style="padding:var(--space-5)">
            <table style="width:100%;border-collapse:collapse;font-size:var(--font-size-sm)">
              <thead><tr style="background:var(--color-gray-50)"><th style="padding:var(--space-2) var(--space-3);text-align:left;border-bottom:1px solid var(--border-color-light)">档位</th><th style="padding:var(--space-2) var(--space-3);text-align:left;border-bottom:1px solid var(--border-color-light)">分数区间</th><th style="padding:var(--space-2) var(--space-3);text-align:left;border-bottom:1px solid var(--border-color-light)">奖励/处罚</th></tr></thead>
            <tbody>
              <tr><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)"><span style="color:var(--color-success);font-weight:var(--font-weight-bold)">🏆 优秀</span></td><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)">85分以上</td><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)">日常监督免罚一次 + 通报表扬</td></tr>
              <tr><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)"><span style="color:var(--color-success);font-weight:var(--font-weight-bold)">✅ 良好</span></td><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)">70-84分</td><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)">正常管理</td></tr>
              <tr><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)"><span style="color:var(--color-warning);font-weight:var(--font-weight-bold)">⚠️ 警示</span></td><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)">55-69分</td><td style="padding:var(--space-2) var(--space-3);border-bottom:1px solid var(--border-color-light)">约谈提醒</td></tr>
              <tr><td style="padding:var(--space-2) var(--space-3)"><span style="color:var(--color-danger);font-weight:var(--font-weight-bold)">❌ 差</span></td><td style="padding:var(--space-2) var(--space-3)">54分以下</td><td style="padding:var(--space-2) var(--space-3)">通报公示 + 列入重点监管名单</td></tr>
            </tbody></table>
            <div style="margin-top:var(--space-4);padding:var(--space-3);background:var(--color-gray-50);border-radius:var(--border-radius-md);font-size:var(--font-size-sm);color:var(--text-secondary);line-height:var(--line-height-normal)">
              <div style="font-weight:var(--font-weight-bold);margin-bottom:var(--space-2)">评分维度</div>
              <div>• 维度1（40分）：基础合规 — 围挡信息是否录入(10分) + 日常巡检频率(30分)</div>
              <div>• 维度2（60分）：问题发现与整改 — 自查问题发现率(30分) + 整改完成率(30分)</div>
              <div style="margin-top:var(--space-2);color:var(--color-danger)">• 未录入围挡信息则所有维度直接计为0分</div>
            </div>
          </div>
        </div>
      </div>
      <div class="two-col-cards">
      <div class="todo-tabs" id="todoTabs">
        <button class="todo-tab active" onclick="switchTodoTab('todo')">待办事项</button>
        <button class="todo-tab" onclick="switchTodoTab('remind')">提醒事项</button>
      </div>
      <div id="todoPanel_todo" class="todo-panel active">
      <!-- 待办事项 -->"""
c = c.replace(old_two_col, new_scoring)

# Close the todo panel and start remind panel
old_remind = """      <!-- 提醒事项 -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">提醒事项</div>"""
new_remind = """      </div>
      <div id="todoPanel_remind" class="todo-panel">
      <!-- 提醒事项 -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">提醒事项</div>"""
c = c.replace(old_remind, new_remind)

# Close the remind panel at the end of two-col-cards
old_two_end = """      </div>
      </div>

      <!-- 统计图表 -->"""
new_two_end = """      </div>
      </div>
      </div>
      </div>

      <!-- 统计图表 -->"""
c = c.replace(old_two_end, new_two_end)

# Add JS
old_js_end = '<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>'
new_js = """<script>
/* ═══ 评分渲染 ═══ */
(function(){
  var scores=MOCK_DATA.getProjectScores();
  if(!scores||!scores.length)return;
  // Show project-1 (the first/default project)
  var s=scores[0];
  var allScores=scores;

  // Main score card
  var cls=s.gradeCls+' '+s.gradeCls;
  var h='<div class="score-main-card">';
  if(s.total>0){
    h+='<div><span class="score-big-num '+s.gradeCls+'">'+s.total+'</span><span style="font-size:var(--font-size-sm);color:var(--text-tertiary);margin-left:4px">分</span></div>';
    h+='<div class="score-meta"><span class="score-grade-tag '+s.gradeCls+'">'+s.gradeIcon+' '+s.grade+'</span><div class="score-desc">综合评分基于基础合规（40分）与问题发现整改（60分）两大维度</div></div>';
  }else{
    h+='<div><span class="score-big-num poor">0</span><span style="font-size:var(--font-size-sm);color:var(--text-tertiary);margin-left:4px">分</span></div>';
    h+='<div class="score-meta"><span class="score-grade-tag poor">❌ 未录入</span><div class="score-desc">尚未录入围挡信息，无法计算评分</div></div>';
  }
  h+='<a class="score-rules-link" onclick="document.getElementById(\\'scoreRulesModal\\').style.display=\\'flex\\'">查看评分说明 →</a></div>';

  // Dimensions
  h+='<div class="score-dims-card"><div class="score-dims-title">评分维度</div>';
  if(s.d1>0||s.hasFence>0){
    h+='<div class="score-dim-row"><span class="score-dim-label">基础合规</span><div class="score-dim-bar-wrap"><div class="score-dim-bar d1" style="width:'+Math.round(s.d1/40*100)+'%"></div></div><span class="score-dim-val">'+s.d1+'/40</span></div>';
    h+='<div class="score-dim-sub">围挡录入 '+(s.d1_1||0)+'分 + 巡检频率 '+(s.d1_2||0)+'分（'+s.actualPatrolDays+'/'+s.expectedPatrolDays+'天）</div>';
    h+='<div class="score-dim-row"><span class="score-dim-label">问题发现与整改</span><div class="score-dim-bar-wrap"><div class="score-dim-bar d2" style="width:'+Math.round(s.d2/60*100)+'%"></div></div><span class="score-dim-val">'+s.d2+'/60</span></div>';
    h+='<div class="score-dim-sub">发现率 '+(s.d2_1||0)+'分 + 整改率 '+(s.d2_2||0)+'分（自查'+s.selfFound+'/'+s.totalFound+'个问题，整改'+s.completedRectify+'/'+s.totalRectify+'个）</div>';
  }else{
    h+='<div class="score-dim-row"><span class="score-dim-label">基础合规</span><div class="score-dim-bar-wrap"><div class="score-dim-bar d1" style="width:0%"></div></div><span class="score-dim-val">0/40</span></div>';
    h+='<div class="score-dim-row"><span class="score-dim-label">问题发现与整改</span><div class="score-dim-bar-wrap"><div class="score-dim-bar d2" style="width:0%"></div></div><span class="score-dim-val">0/60</span></div>';
  }
  h+='</div>';

  // Suggestions
  if(s.suggestions&&s.suggestions.length){
    h+='<div class="score-sug-card"><div class="score-sug-title">提升建议</div>';
    s.suggestions.forEach(function(sug){h+='<div class="score-sug-item">'+sug+'</div>';});
    h+='</div>';
  }

  document.getElementById('scoreSection').innerHTML=h;
})();

/* ═══ TAB 切换 ═══ */
function switchTodoTab(tab){
  document.querySelectorAll('.todo-tab').forEach(function(t){t.classList.toggle('active',t.textContent.indexOf(tab==='todo'?'待办':'提醒')>-1)});
  document.querySelectorAll('.todo-panel').forEach(function(p){p.classList.remove('active')});
  document.getElementById('todoPanel_'+tab).classList.add('active');
}
</script>
"""
c = c.replace(old_js_end, old_js_end + new_js)

with open(proj_path, 'w', encoding='utf-8') as f:
    f.write(c)
print('Project-PC dashboard done')


# ═════════════════════════════════════════════════════════════════════
# SUPERVISOR-PC INDEX
# ═════════════════════════════════════════════════════════════════════
sup_path = r"E:\城安院\01 进行中\241114  监管平台\260408 围挡平台\Station\supervisor-pc\index.html"
with open(sup_path, 'r', encoding='utf-8') as f:
    c = f.read()

sup_css = """
/* ── 评分监管 ── */
.sup-score-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-3);margin:var(--space-4) 0}
.sup-score-cell{text-align:center;padding:var(--space-4) var(--space-2);border-radius:var(--border-radius-lg);border:1px solid var(--border-color-light)}
.sup-score-cell .cell-num{font-size:28px;font-weight:var(--font-weight-bold);line-height:1}
.sup-score-cell .cell-label{font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:4px}
.sup-score-cell.excellent{border-color:rgba(26,144,66,.2);background:rgba(26,144,66,.04)}.sup-score-cell.excellent .cell-num{color:var(--color-success)}
.sup-score-cell.good{border-color:rgba(26,144,66,.15);background:rgba(26,144,66,.02)}.sup-score-cell.good .cell-num{color:var(--color-success)}
.sup-score-cell.warn{border-color:rgba(212,138,0,.2);background:rgba(212,138,0,.04)}.sup-score-cell.warn .cell-num{color:var(--color-warning)}
.sup-score-cell.poor{border-color:rgba(209,59,47,.2);background:rgba(209,59,47,.04)}.sup-score-cell.poor .cell-num{color:var(--color-danger)}
.sup-poor-list-card{background:var(--bg-card);border:1px solid var(--border-color-light);border-radius:var(--border-radius-lg);padding:var(--space-4);margin-bottom:var(--space-4)}
.sup-poor-list-title{font-size:var(--font-size-md);font-weight:var(--font-weight-bold);color:var(--text-title);margin-bottom:var(--space-3)}
.sup-poor-item{display:flex;align-items:center;justify-content:space-between;padding:var(--space-2) 0;border-bottom:1px solid var(--color-gray-50);font-size:var(--font-size-sm)}
.sup-poor-item:last-child{border-bottom:none}
.sup-poor-name{color:var(--text-primary);flex:1}
.sup-poor-district{font-size:var(--font-size-xs);color:var(--text-tertiary);margin-right:var(--space-3)}
.sup-poor-score{font-weight:var(--font-weight-bold);color:var(--color-danger);margin-right:var(--space-3)}
.todo-tabs{display:flex;gap:0;margin-bottom:var(--space-4);border-bottom:2px solid var(--color-gray-200)}
.todo-tab{padding:var(--space-2) var(--space-5);font-size:var(--font-size-sm);color:var(--text-secondary);cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .15s;background:none;border-top:none;border-left:none;border-right:none;font-family:var(--font-family)}
.todo-tab:hover{color:var(--text-primary)}
.todo-tab.active{color:var(--color-primary-500);border-bottom-color:var(--color-primary-500);font-weight:var(--font-weight-bold)}
.todo-panel{display:none}
.todo-panel.active{display:block}
"""
c = c.replace('</style>', sup_css + '</style>')

# Insert scoring section before the existing stat cards (or after page-header)
old_sup_header = '<!-- 统计卡片 -->'
if old_sup_header in c:
    c = c.replace(old_sup_header, '<div id="supScoreSection"></div>\n      <!-- ═══ TODO Tabs ═══ -->\n      <div class="todo-tabs" id="supTodoTabs"><button class="todo-tab active" onclick="switchSupTodoTab(\'todo\')">待办事项</button><button class="todo-tab" onclick="switchSupTodoTab(\'remind\')">提醒事项</button></div>\n      <!-- 统计卡片 -->')

sup_js = r"""
<script>
(function(){
  var summary=MOCK_DATA.getScoreSummary();
  if(!summary)return;
  var h='<div class="sup-score-grid">';
  h+='<div class="sup-score-cell excellent"><div class="cell-num">'+summary.excellent+'</div><div class="cell-label">优秀（85+分）</div></div>';
  h+='<div class="sup-score-cell good"><div class="cell-num">'+summary.good+'</div><div class="cell-label">良好（70-84分）</div></div>';
  h+='<div class="sup-score-cell warn"><div class="cell-num">'+summary.warn+'</div><div class="cell-label">警示（55-69分）</div></div>';
  h+='<div class="sup-score-cell poor"><div class="cell-num">'+summary.poor+'</div><div class="cell-label">差（54分以下）</div></div>';
  h+='</div>';
  // New poor projects
  if(summary.newPoor&&summary.newPoor.length){
    h+='<div class="sup-poor-list-card"><div class="sup-poor-list-title">本月新进入"差"档项目</div>';
    summary.newPoor.forEach(function(p){h+='<div class="sup-poor-item"><span class="sup-poor-name">'+p.projectName+'</span><span class="sup-poor-district">'+p.district+'</span><span class="sup-poor-score">'+p.total+'分</span></div>';});
    h+='</div>';
  }
  var el=document.getElementById('supScoreSection');if(el)el.innerHTML=h;
})();
function switchSupTodoTab(tab){
  document.querySelectorAll('#supTodoTabs .todo-tab').forEach(function(t){t.classList.toggle('active',t.textContent.indexOf(tab==='todo'?'待办':'提醒')>-1)});
}
</script>
"""
c = c.replace('</body>', sup_js + '\n</body>')

with open(sup_path, 'w', encoding='utf-8') as f:
    f.write(c)
print('Supervisor-PC dashboard done')
