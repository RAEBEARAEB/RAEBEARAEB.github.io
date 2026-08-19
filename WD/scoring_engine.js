/* ═══════════════════════════════════════════════════════════════════
   围挡管理评价 — 评分引擎
   月度周期，按项目维度计算
   ═══════════════════════════════════════════════════════════════════ */
(function(){
  if (!window.MOCK_DATA) window.MOCK_DATA = {};

  /* ── 获取某月天数 ── */
  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  /* ── 分档 ── */
  function getGrade(score) {
    if (score >= 85) return { grade:'优秀', cls:'grade-excellent', icon:'🏆' };
    if (score >= 70) return { grade:'良好', cls:'grade-good', icon:'✅' };
    if (score >= 55) return { grade:'警示', cls:'grade-warn', icon:'⚠️' };
    return { grade:'差', cls:'grade-poor', icon:'❌' };
  }

  /* ── 主评分函数 ── */
  window.MOCK_DATA.getProjectScores = function(year, month) {
    var now = new Date();
    if (!year) year = now.getFullYear();
    if (!month) month = now.getMonth() + 1;
    var days = daysInMonth(year, month);
    var expectedPatrolDays = Math.round(days * 0.6);
    var monthPrefix = year + '-' + String(month).padStart(2, '0');

    var projects = this.getProjects();
    var hoardings = this.getHoardings();
    var streetIssues = this.getStreetIssues();

    var results = [];

    projects.forEach(function(proj) {
      var projHoards = hoardings.filter(function(h) { return h.projectName === proj.name; });

      // ═══ D1(1): 是否录入围挡信息 (10pts) ═══
      var hasFenceInfo = projHoards.length > 0 ? 10 : 0;

      // ═══ D1(2): 日常巡检频率 (30pts) ═══
      var patrolDates = {};
      projHoards.forEach(function(h) {
        (h.patrolRecords || []).forEach(function(p) {
          if (p.date && p.date.indexOf(monthPrefix) === 0) {
            patrolDates[p.date] = true;
          }
        });
      });
      var actualPatrolDays = Object.keys(patrolDates).length;
      var patrolRate = expectedPatrolDays > 0 ? Math.min(1, actualPatrolDays / expectedPatrolDays) : 0;
      var patrolScore = Math.round(30 * patrolRate);

      // D1 total
      var d1Score = hasFenceInfo === 0 ? 0 : (hasFenceInfo + patrolScore);

      // ═══ D2(1): 问题发现率 (30pts) ═══
      var selfFound = 0, supervisorFound = 0, streetFound = 0;
      projHoards.forEach(function(h) {
        streetIssues.forEach(function(iss) {
          if (iss.fenceId === h.id) {
            if (iss.source === '项目巡检') selfFound++;
            else if (iss.source === '监管巡查') supervisorFound++;
            else if (iss.source === '街道上报') streetFound++;
          }
        });
      });
      var totalFound = selfFound + supervisorFound + streetFound;
      var discoveryRate = totalFound > 0 ? selfFound / totalFound : 0;
      var discoveryScore = Math.round(30 * discoveryRate);

      // ═══ D2(2): 整改完成率 (30pts) ═══
      var totalRectify = 0, completedRectify = 0;
      projHoards.forEach(function(h) {
        streetIssues.forEach(function(iss) {
          if (iss.fenceId === h.id) {
            totalRectify++;
            if (iss.status === '审核通过' || iss.status === '已通过') completedRectify++;
          }
        });
      });
      var rectifyRate = totalRectify > 0 ? completedRectify / totalRectify : 1; // no issues = 100%
      var rectifyScore = Math.round(30 * rectifyRate);

      // D2 total
      var d2Score = d1Score === 0 ? 0 : (discoveryScore + rectifyScore);

      var totalScore = d1Score + d2Score;
      var gradeInfo = getGrade(totalScore);

      // ── 提升建议 ──
      var suggestions = [];
      if (hasFenceInfo === 0) {
        suggestions.push('您的项目尚未录入围挡信息，请尽快在围挡档案管理中完成围挡登记');
      } else {
        if (patrolRate < 0.5) suggestions.push('您的日常巡检频率偏低（当前 ' + actualPatrolDays + ' 天 / 应巡检 ' + expectedPatrolDays + ' 天），建议加强日常巡检频次');
        else if (patrolRate < 0.8) suggestions.push('您的日常巡检频率有提升空间（当前 ' + actualPatrolDays + ' 天 / 应巡检 ' + expectedPatrolDays + ' 天），建议保持每日巡检习惯');
        if (discoveryRate < 0.5 && totalFound > 0) suggestions.push('您的自查问题发现率较低（' + Math.round(discoveryRate*100) + '%），建议在巡检中加强对围挡破损、脏污等常见问题的关注');
        if (rectifyRate < 0.7 && totalRectify > 0) suggestions.push('您的整改及时率较低（' + Math.round(rectifyRate*100) + '%），建议在收到整改通知后 48 小时内完成整改并提交');
        if (d2Score < 10 && d1Score > 0) suggestions.push('您的问题发现与整改维度过低，建议建立内部巡检-整改闭环机制');
      }
      if (!suggestions.length) suggestions.push('各项指标表现良好，请继续保持当前管理水平和巡检习惯');

      results.push({
        projectId: proj.id,
        projectName: proj.name,
        district: proj.district || '',
        hasFenceInfo: hasFenceInfo,
        d1_1: hasFenceInfo,
        d1_2: patrolScore,
        d1: d1Score,
        d2_1: discoveryScore,
        d2_2: rectifyScore,
        d2: d2Score,
        total: totalScore,
        grade: gradeInfo.grade,
        gradeCls: gradeInfo.cls,
        gradeIcon: gradeInfo.icon,
        actualPatrolDays: actualPatrolDays,
        expectedPatrolDays: expectedPatrolDays,
        patrolRate: patrolRate,
        selfFound: selfFound,
        totalFound: totalFound,
        discoveryRate: discoveryRate,
        completedRectify: completedRectify,
        totalRectify: totalRectify,
        rectifyRate: rectifyRate,
        suggestions: suggestions,
        hoardingsCount: projHoards.length
      });
    });

    // Sort by score ascending (worst first)
    results.sort(function(a, b) { return a.total - b.total; });

    return results;
  };

  /* ── 获取当前月份同环比数据 ── */
  window.MOCK_DATA.getScoreSummary = function() {
    var scores = this.getProjectScores();
    var summary = { total: scores.length, excellent:0, good:0, warn:0, poor:0, newPoor:[] };
    scores.forEach(function(s) {
      if (s.grade === '优秀') summary.excellent++;
      else if (s.grade === '良好') summary.good++;
      else if (s.grade === '警示') summary.warn++;
      else { summary.poor++; summary.newPoor.push(s); }
    });
    return summary;
  };
})();
