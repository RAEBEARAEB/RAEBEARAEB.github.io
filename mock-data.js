/**
 * 围挡系统统一 Mock 数据层 — mock-data.js
 * 所有页面共享此数据源，通过 localStorage 实现跨页持久化
 */
(function () {
  var STORAGE_KEY = 'HOARDING_MOCK_DATA_V2';
  var now = new Date();
  function _d(s) { var t = new Date(now); t.setDate(t.getDate() - s); return t.toISOString().slice(0,10); }


    var _demoIssues = [
      { id: 'YZY-001', type: '围挡破损', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡面板破裂约0.5㎡，金属框架外露存在安全风险', status: '整改完成', source: '街道上报', reportTime: _d(1)+' 08:30:15', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.060, addr: '福田区福华三路与金田路交汇处' } },
{ id: 'YZY-002', type: '围挡脏污', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡表面大面积泥浆污渍影响市容，面积约5㎡', status: '整改逾期', source: '监管巡查', reportTime: _d(7)+' 09:45:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', _rectification: {"rectTime": "2026-07-23 16:00:00", "rectifier": "刘伟", "rectifierUnit": "深圳市市政工程总公司", "desc": "已完成部分清洗，剩余顽固污渍因连续降雨无法彻底清除", "photos": ["../围挡破损.png"]}, photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.059, addr: '福田区福华三路西侧' } },
      { id: 'YZY-003', type: '围挡安全隐患', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡整体向西侧倒塌约15米，底部基础完全裸露', status: '待整改', source: '监管巡查', reportTime: _d(5)+' 10:15:30', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', _transfers: [{"time": "2026-07-24 09:00:00", operator: '张建国', unit: '深圳市福田区住建局', desc: '转派至福田街道办督促整改', originalEng: '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区', transferEng: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区'}], photos: ['../围挡破损.png'], location: { lat: 22.546, lng: 114.060, addr: '福田区福华三路西侧' } },
{ id: 'YZY-011', type: '围挡基础松动', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '巡检中发现围挡底部基础螺栓松动3处，已当日加固修复', status: '整改完成', source: '项目巡检', reportTime: _d(8)+' 09:20:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', _rectification: {"rectTime": "2026-07-22 16:00:00", "rectifier": "刘伟", "rectifierUnit": "深圳市市政工程总公司", "desc": "紧固3处松动螺栓并做防锈处理", "photos": ["../围挡破损.png"]}, photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.061, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-012', type: '围挡脏污', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '巡检中发现围挡表面有泥浆泼溅痕迹约2㎡，已清洗完毕', status: '整改完成', source: '项目巡检', reportTime: _d(9)+' 14:50:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.060, addr: '福田区福华三路西侧' } },
      { id: 'YZY-009', type: '应建未建围挡', whetherReported: '否', fenceId: '', fenceAddr: '', details: '粤海街道科技南路与滨海大道交汇处，根据规划要求此处应设置围挡但至今未建', status: '待整改', source: '街道上报', reportTime: _d(4)+' 09:30:00', engineerName: '', responsibleUnit: '', street: '粤海街道', _projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.538, lng: 113.955, addr: '南山区粤海街道科技南路与滨海大道交汇处' } },
      { id: 'YZY-010', type: '应建未建围挡', whetherReported: '否', fenceId: '', fenceAddr: '', details: '黄贝街道深南东路北侧工地出入口处未按规定设置围挡，存在安全隐患', status: '待整改', source: '街道上报', reportTime: _d(6)+' 14:00:00', engineerName: '', responsibleUnit: '', street: '黄贝街道', _projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.140, addr: '罗湖区黄贝街道深南东路北侧' } },
      { id: 'YZY-018', type: '围挡破损', fenceId: 'WD-2026-0001', fenceAddr: '南山区科技南路18号东北角', details: '围挡破损人可通行', status: '待整改', source: '监管巡查', reportTime: '2026-07-22 10:30:00', engineerName: '国际演艺中心建设主体工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '深圳市绿篱建设工程有限公司', supervisor: '张建国', photos: ['../围挡破损.png'], location: { lat: 22.5372, lng: 113.9598, addr: '南山区科技南路18号东北角围挡范围处' } },
      { id: 'YZY-013', type: '围挡脏污', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡表面有大量泥浆泼溅，影响城市市容，请尽快清洗处理', status: '待整改', source: '街道上报', reportTime: _d(2)+' 15:20:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', street: '福田街道', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.062, addr: '福田区福华三路金田路口东侧' } },
      { id: 'YZY-014', type: '围挡缺失', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡西段缺失约8米，缺口处行人可随意进出施工区域，存在严重安全隐患', status: '待整改', source: '街道上报', reportTime: _d(3)+' 10:45:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', street: '福田街道', _transfers: [{"time": "2026-07-26 09:00:00", "operator": "张建国", "unit": "深圳市福田区住建局", "desc": "转派至福田街道办督促修复缺失围挡", "originalEng": "穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区", transferEng: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区'}], photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.059, addr: '福田区福华三路西侧围挡缺口处' } },
{ id: 'YZY-015', type: '张贴小广告', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡立面被张贴大量小广告，面积约3㎡，影响市容整洁度', status: '整改逾期', source: '街道上报', reportTime: _d(9)+' 11:10:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', street: '福田街道', _rectification: {"rectTime": "2026-07-21 16:00:00", "rectifier": "刘伟", "rectifierUnit": "深圳市市政工程总公司", "desc": "已清除全部小广告，重新涂刷防粘贴涂层", "photos": ["../围挡破损.png"]}, photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.063, addr: '福田区福华三路中段' } },
      { id: 'YZY-016', type: '围挡安全隐患', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡面板连接处多处锈蚀严重，遇大风天气存在倒塌风险，需紧急加固', status: '待整改', source: '街道上报', reportTime: _d(1)+' 16:30:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', street: '福田街道', _transfers: [{"time": "2026-07-28 09:00:00", "operator": "张建国", "unit": "深圳市福田区住建局", "desc": "转派至项目施工单位紧急加固", "originalEng": "穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区", transferEng: '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区'}], photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.060, addr: '福田区福华三路与金田路交汇处北侧' } },
      { id: 'YZY-017', type: '应建未建围挡', whetherReported: '否', fenceId: '', fenceAddr: '', details: '粤海街道后海大道与创业路交叉口西南角，该处于2025年底完成拆迁后至今未设置施工围挡', status: '待整改', source: '街道上报', reportTime: _d(5)+' 08:50:00', engineerName: '', responsibleUnit: '', street: '粤海街道', _projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.520, lng: 113.940, addr: '南山区粤海街道后海大道创业路口' } },
      // ── 新增：南山项目问题 ──
      { id: 'YZY-019', type: '围挡安全隐患', fenceId: 'WD-2026-0002', fenceAddr: '南山区科技南路18号北侧', details: '基坑支护围挡底部排水沟堵塞，雨季积水浸泡围挡基础,存在沉降倾倒风险', status: '待整改', source: '监管巡查', reportTime: _d(3)+' 09:15:00', engineerName: '国际演艺中心地基与基础工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '深圳市岩土工程有限公司', supervisor: '张建国', photos: ['../围挡破损.png'], location: { lat: 22.5375, lng: 113.958, addr: '南山区科技南路18号北侧基坑入口处' } },
      { id: 'YZY-020', type: '围挡破损', fenceId: 'WD-2026-0002', fenceAddr: '南山区科技南路18号北侧', details: '围挡面板左上角碰撞破损约0.3㎡，面板边缘锋利可能划伤行人', status: '整改完成', source: '项目巡检', reportTime: _d(2)+' 14:20:00', engineerName: '国际演艺中心地基与基础工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '深圳市岩土工程有限公司', photos: ['../围挡破损.png'], location: { lat: 22.538, lng: 113.959, addr: '南山区科技南路18号北侧围挡中段' } },
      { id: 'YZY-021', type: '围挡脏污', fenceId: 'WD-2026-0001', fenceAddr: '南山区科技南路18号东北角', details: '仿真绿篱围挡表面有多处泥浆溅痕，面积合计约2㎡，影响绿篱美观效果', status: '整改逾期', source: '街道上报', reportTime: _d(6)+' 10:30:00', engineerName: '国际演艺中心建设主体工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '深圳市绿篱建设工程有限公司', street: '粤海街道', photos: ['../围挡破损.png'], location: { lat: 22.537, lng: 113.960, addr: '南山区科技南路18号绿篱入口附近' } },
      { id: 'YZY-022', type: '围挡基础松动', fenceId: 'WD-2026-0002', fenceAddr: '南山区科技南路18号北侧', details: '基坑支护围挡北段基础预埋件3处螺栓锈蚀松动，需重新紧固并做防腐处理', status: '待整改', source: '项目巡检', reportTime: _d(1)+' 11:00:00', engineerName: '国际演艺中心地基与基础工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '深圳市岩土工程有限公司', photos: ['../围挡破损.png'], location: { lat: 22.5385, lng: 113.958, addr: '南山区科技南路18号基坑支护围挡北段' } },
      { id: 'YZY-023', type: '张贴小广告', fenceId: 'WD-2026-0003', fenceAddr: '南山区科技南路18号南侧', details: '已拆除围挡区域围挡立柱上残留大量广告贴纸，影响市容整洁', status: '整改完成', source: '街道上报', reportTime: _d(4)+' 09:50:00', engineerName: '国际演艺中心建设工程外立面装饰幕墙工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '中建三局集团有限公司', street: '粤海街道', photos: ['../围挡破损.png'], location: { lat: 22.534, lng: 113.958, addr: '南山区科技南路18号南侧' } },
      // ── 新增：教学楼项目问题 ──
      { id: 'YZY-024', type: '围挡安全隐患', fenceId: 'WD-2026-0004', fenceAddr: '龙华区民治街道民丰路88号', details: '教学楼施工围挡东段倾斜约10度，支撑杆件有3根弯曲变形，遇强风天气存在倒塌风险', status: '待整改', source: '监管巡查', reportTime: _d(2)+' 15:40:00', engineerName: '龙城北综合车场主体工程', _projectName: '龙城北综合车场工程(含保障性租赁住房)', responsibleUnit: '深圳市建工集团股份有限公司', supervisor: '张建国', photos: ['../围挡破损.png'], location: { lat: 22.629, lng: 114.043, addr: '龙华区民治街道民丰路88号教学楼东侧' } },
      { id: 'YZY-025', type: '围挡缺失', fenceId: 'WD-2026-0004', fenceAddr: '龙华区民治街道民丰路88号', details: '教学楼围挡人行通道处缺失一段约3米，学生可随意进出施工区域，存在严重安全隐患', status: '待整改', source: '街道上报', reportTime: _d(1)+' 08:25:00', engineerName: '龙城北综合车场主体工程', _projectName: '龙城北综合车场工程(含保障性租赁住房)', responsibleUnit: '深圳市建工集团股份有限公司', street: '民治街道', photos: ['../围挡破损.png'], location: { lat: 22.628, lng: 114.043, addr: '龙华区民治街道民丰路88号人行通道处' } },
      { id: 'YZY-026', type: '公益广告污损', fenceId: 'WD-2026-0004', fenceAddr: '龙华区民治街道民丰路88号', details: '教学楼围挡公益广告画面有3处大面积破损褪色，面积约4㎡，广告内容模糊不清', status: '整改逾期', source: '项目巡检', reportTime: _d(8)+' 16:10:00', engineerName: '龙城北综合车场主体工程', _projectName: '龙城北综合车场工程(含保障性租赁住房)', responsibleUnit: '深圳市建工集团股份有限公司', photos: ['../围挡破损.png'], location: { lat: 22.630, lng: 114.042, addr: '龙华区民治街道民丰路88号教学楼西侧围挡' } },
      // ── 新增：未知项目问题 ──
      { id: 'YZY-027', type: '应建未建围挡', whetherReported: '否', fenceId: '', fenceAddr: '', details: '龙华街道清湖路与和平路交汇处西北角，一处无标示的施工围挡存在大范围倾斜,金属结构外露，安全隐患突出', status: '待整改', source: '监管巡查', reportTime: _d(4)+' 10:05:00', engineerName: '', responsibleUnit: '', street: '龙华街道', _projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.655, lng: 114.040, addr: '龙华区龙华街道清湖路与和平路交汇处西北角' } },
      { id: 'YZY-028', type: '应建未建围挡', whetherReported: '否', fenceId: '', fenceAddr: '', details: '南头街道中山园路与南博一路交叉口，一处施工场地围挡被拆除约20米，现场无任何安全警示标志', status: '整改逾期', source: '街道上报', reportTime: _d(10)+' 11:35:00', engineerName: '', responsibleUnit: '', street: '南头街道', _projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.542, lng: 113.920, addr: '南山区南头街道中山园路与南博一路交叉口' } },
      // ── 补充：各围挡关联问题（覆盖所有来源和状态）──
{ id: 'YZY-029', type: '围挡喷淋不符合要求', fenceId: 'WD-2026-0001', fenceAddr: '南山区科技南路18号东北角', details: '绿化迁移围挡喷淋设施3处喷头堵塞不出水，不符合文明施工要求', status: '整改完成', source: '项目巡检', reportTime: _d(3)+' 08:45:00', engineerName: '国际演艺中心建设主体工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '深圳市绿篱建设工程有限公司', _rectification: {"rectTime": "2026-07-27 16:00:00", "rectifier": "王强", "rectifierUnit": "深圳市绿篱建设工程有限公司", "desc": "已疏通3处堵塞喷头并更换损坏的喷淋头", "photos": ["../围挡破损.png"]}, photos: ['../围挡破损.png'], location: { lat: 22.5365, lng: 113.960, addr: '南山区科技南路18号东北角绿化围挡处' } },
      { id: 'YZY-030', type: '围挡安全隐患', fenceId: 'WD-2026-0002', fenceAddr: '南山区科技南路18号北侧', details: '围挡面板底部与基础连接处4处螺栓锈蚀严重，存在围挡倾覆安全隐患', status: '整改逾期', source: '街道上报', reportTime: _d(5)+' 14:00:00', engineerName: '国际演艺中心地基与基础工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '深圳市岩土工程有限公司', street: '粤海街道', photos: ['../围挡破损.png'], location: { lat: 22.537, lng: 113.9575, addr: '南山区科技南路18号北侧围挡面板连接处' } },
      { id: 'YZY-031', type: '围挡脏污', fenceId: 'WD-2026-0003', fenceAddr: '南山区科技南路18号南侧', details: '已拆除围挡区域内遗留围挡板材未及时清理，表面大面积泥浆污渍约4㎡', status: '待整改', source: '监管巡查', reportTime: _d(2)+' 10:20:00', engineerName: '国际演艺中心建设工程外立面装饰幕墙工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '中建三局集团有限公司', supervisor: '张建国', photos: ['../围挡破损.png'], location: { lat: 22.534, lng: 113.959, addr: '南山区科技南路18号南侧拆除区域' } },
      { id: 'YZY-032', type: '围挡破损', fenceId: 'WD-2026-0003', fenceAddr: '南山区科技南路18号南侧', details: '已拆除围挡区域立柱底部混凝土基座破损断裂，钢筋外露，影响人行通行', status: '整改逾期', source: '街道上报', reportTime: _d(7)+' 09:30:00', engineerName: '国际演艺中心建设工程外立面装饰幕墙工程', _projectName: '国际演艺中心建设工程', responsibleUnit: '中建三局集团有限公司', street: '粤海街道', photos: ['../围挡破损.png'], location: { lat: 22.5335, lng: 113.958, addr: '南山区科技南路18号南侧人行道旁' } },
{ id: 'YZY-033', type: '围挡公益广告画面不连贯', fenceId: 'WD-2026-0004', fenceAddr: '龙华区民治街道民丰路88号', details: '教学楼围挡公益广告画面在东南角转角处断开约2米，整体视觉效果不连贯', status: '整改完成', source: '项目巡检', reportTime: _d(6)+' 14:50:00', engineerName: '龙城北综合车场主体工程', _projectName: '龙城北综合车场工程(含保障性租赁住房)', responsibleUnit: '深圳市建工集团股份有限公司', _rectification: {"rectTime": "2026-07-24 16:00:00", "rectifier": "周文", "rectifierUnit": "深圳市建工集团股份有限公司", "desc": "已补全转角处缺失的公益广告画面，整体连贯", "photos": ["../围挡破损.png"]}, photos: ['../围挡破损.png'], location: { lat: 22.628, lng: 114.044, addr: '龙华区民治街道民丰路88号教学楼东南角围挡' } },
      // ── 群众上报演示数据 ──
      { id: 'YZY-034', type: '围挡破损', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '福华三路围挡靠近人行道处有一块面板脱落，露出内部钢架，行人经过容易刮伤', status: '整改完成', source: '群众上报', reportTime: _d(5)+' 10:20:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', _rectification: {"rectTime": "2026-07-25 14:00:00", "rectifier": "刘伟", "rectifierUnit": "深圳市市政工程总公司", "desc": "已更换脱落面板，焊缝加固并打磨锋利边缘", "photos": ["../围挡破损.png"]}, photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.062, addr: '福田区福华三路靠近人行道处' } },
      { id: 'YZY-035', type: '围挡脏污', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡表面有大面积泥浆污渍，下雨后泥水顺着围挡流到人行道上，影响通行', status: '待整改', source: '群众上报', reportTime: _d(2)+' 08:45:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.061, addr: '福田区福华三路人行道旁' } },
      { id: 'YZY-036', type: '围挡安全隐患', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡西段靠近路口处有明显倾斜，刮风天晃动厉害，担心会倒下来砸到行人', status: '待整改', source: '群众上报', reportTime: _d(1)+' 18:30:00', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区', _projectName: '穗莞深城际轨道交通深圳机场至前海段工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.059, addr: '福田区福华三路西侧路口处' } },
      { id: 'YZY-037', type: '围挡基础松动', fenceId: 'WD-2026-0005', fenceAddr: '龙华区民治街道22号线一工区施工段', details: '项目巡检发现施工入口东侧围挡基础连接件松动，已完成紧固处理', status: '整改完成', source: '项目巡检', reportTime: '2026-07-30 10:20:00', engineerName: '深圳市城市轨道交通22号线一期工程施工总承包22101标土建一工区', _projectName: '深圳市城市轨道交通22号线一期工程施工总承包22101标土建一工区', responsibleUnit: '中铁十四局集团有限公司', photos: ['../围挡破损.png'] },
      { id: 'YZY-038', type: '围挡二维码内容不全', fenceId: 'WD-2026-0006', fenceAddr: '福田区福城南产业片区10-08-03宗地', details: '项目巡检发现围挡公示二维码缺少责任单位信息，已更新公示内容', status: '整改完成', source: '项目巡检', reportTime: '2026-07-29 15:30:00', engineerName: '福城南产业片区10-08-03宗地项目桩基础工程', _projectName: '福城南产业片区10-08-03宗地项目', responsibleUnit: '深圳市建安集团有限公司', photos: ['../围挡破损.png'] },
      { id: 'YZY-039', type: '围挡脏污', fenceId: 'WD-2026-0007', fenceAddr: '福田区福城南产业片区10-08-03宗地', details: '项目巡检发现基坑围挡局部泥浆污染，已安排责任单位清洗处理', status: '待整改', source: '项目巡检', reportTime: '2026-07-31 09:40:00', engineerName: '福城南产业片区10-08-03宗地项目基坑支护与土石方工程', _projectName: '福城南产业片区10-08-03宗地项目', responsibleUnit: '深圳市地质建设工程公司', photos: ['../围挡破损.png'] },
      { id: 'YZY-040', type: '围挡喷淋不符合要求', fenceId: 'WD-2026-0004', fenceAddr: '龙华区民治街道民丰路88号', details: '项目巡检发现喷淋头堵塞，已疏通并恢复正常喷淋', status: '整改完成', source: '项目巡检', reportTime: '2026-07-28 14:10:00', engineerName: '龙城北综合车场主体工程', _projectName: '龙城北综合车场工程(含保障性租赁住房)', responsibleUnit: '深圳市建工集团股份有限公司', photos: ['../围挡破损.png'] }
    ];

  function getInitialData() {
    var now = new Date();




    return {
      version: 73,
      updatedAt: new Date().toISOString(),
      projects: [
        /* ── 项目 1：福田 ── */
        {
          id: 'p1',
          name: '穗莞深城际轨道交通深圳机场至前海段工程',
          district: '福田区', street: '福田街道',
          address: '福田区福华三路与金田路交汇处',
          lat: 22.548, lng: 114.061, status: '在建',
          buildUnit: '深圳市福田区建筑工务署', buildContact: '陈华 13700137001',
          constructUnit: '深圳市市政工程总公司', constructContact: '刘伟 13600136001',
          supervisorUnit: '深圳市合诚工程监理有限公司',
          regulatorUnit: '深圳市福田区住房和建设局', supervisionGroup: '一部一组(陈江华)',
          designUnit: '深圳市市政设计研究院有限公司',
          redlineGeo: [[22.545,114.057],[22.552,114.057],[22.552,114.065],[22.545,114.065]],
          hoardings: [
            {
              id: 'WD-2026-0001', fenceName: '福华三路管道段围挡', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区', engStatus: '已竣工',
              constructUnit: '深圳市市政工程总公司', fenceStatus: '已拆除', issueStatus: '正常', needVerify: '否',
              custodyStart: '2025-06-01', custodyEnd: '2026-04-30',
              planRemoveDate: '2026-04-30', setupDate: '2025-06-01',
              length: 320, height: 2.5, area: 156.8,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准型',
              publicityContent: '文明施工 安全第一', roadOccupation: '人行道', roadOccupationArea: 48,
              fenceResponsible: '刘伟', fenceResponsiblePhone: '13600136001',
              address: '福田区福华三路与金田路交汇处',
              gpsShape: [[22.549,114.059],[22.551,114.060],[22.551,114.063],[22.549,114.063]],
              entrances: [{lat:22.550,lng:114.0595,name:'施工入口',type:'vehicle'},{lat:22.550,lng:114.063,name:'消防通道',type:'pedestrian'}],
              defaultDemo: true,
              verifyRecords: [
                { id: 'vr1', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-05-12 09:30', type: '校核不通过', content: '围挡长度校核，由300m修正为320m', changeId:'cr1', field: '围挡长度', before: '300m', after: '320m' },
                { id: 'vr2', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-04-20 09:00', type: '校核通过', content: '围挡信息核实无误', changeId:'cr2', field: '', before: '', after: '' },
                { id: 'vr3', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-06-09 10:00', type: '校核不通过', content: '围挡范围图斑变更校核，确认新增出入口位置符合规划要求', changeId:'cr3', field: '围挡范围 · 出入口', before: '（地图对比）', after: '（地图对比）' }
              ],
              changeRecords: [
                { id: 'cr2', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-03-20 10:00', type: '新增围挡', content: '新增围挡档案', field: '', before: '', after: '' },
                { id: 'cr_ft_rm', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-04-30 16:00', type: '拆除操作', content: '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区竣工，围挡已全部拆除', field: '围挡拆除', before: '已安装', after: '已拆除' }
              ],
              patrolRecords: [
                { id: 'pr2', date: '2026-05-07', time: '09:15', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr1', date: '2026-05-14', time: '14:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr8', date: '2026-05-02', time: '08:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr9', date: '2026-05-05', time: '10:00', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr10', date: '2026-05-09', time: '15:20', inspector: '刘伟', result: '异常', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.2㎡，不影响结构安全但需清洁', status:'待整改', source:'项目巡检'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr11', date: '2026-05-12', time: '09:00', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr12', date: '2026-05-16', time: '11:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0002', fenceName: '福华三路沟槽段围挡', engineerName: '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区', engStatus: '在建',
              constructUnit: '深圳市市政工程总公司', fenceStatus: '超期未拆',
              issueStatus: '正常', needVerify: '否',
              custodyStart: '2025-03-01', custodyEnd: '2026-05-31',
              planRemoveDate: '2026-05-31', setupDate: '2025-03-01',
              length: 260, height: 2.5, area: 130.0,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准型',
              publicityContent: '注意安全 请勿靠近', roadOccupation: '非机动车道', roadOccupationArea: 36,
              fenceResponsible: '刘伟', fenceResponsiblePhone: '13600136001',
              address: '福田区福华三路与金田路交汇处西侧',
              gpsShape: [[22.546,114.059],[22.548,114.059],[22.548,114.061],[22.546,114.061]],
              entrances: [{lat:22.547,lng:114.059,name:'沟槽入口',type:'vehicle'},{lat:22.547,lng:114.061,name:'人行通道',type:'pedestrian'}],
              defaultDemo: true,
              verifyRecords: [{ id: 'vr_g1', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-04-22 10:15', type: '校核通过', content: '围挡材料变更核实无误，符合规范要求', changeId:'cr_g1', field: '围挡材质', before: '彩钢板', after: '装配式钢结构喷绘围挡' }],
              changeRecords: [
                { id: 'cr_g1', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-04-20 14:30', type: '变更操作', content: '围挡材质变更，由彩钢板调整为装配式钢结构喷绘围挡', field: '围挡材质', before: '彩钢板', after: '装配式钢结构喷绘围挡' }
              ],
              patrolRecords: [
                { id: 'pr3_score_week', date: '2026-07-29', time: '09:10', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr3', date: '2026-05-10', time: '10:00', inspector: '刘伟', result: '异常', issues: [{type:'围挡尺寸不合规', unit:'深圳市市政工程总公司', detail:'围挡实测高度2.0m，低于规范要求的2.5m标准高度，需立即调整', status:'待整改', source:'项目巡检'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr16', date: '2026-05-03', time: '08:50', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr3_today', date: _d(0), time: '09:30', inspector: '刘伟', result: '异常', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡下沿存在泥浆污染，影响沿街整体观感，需安排清洗。', status:'待整改', source:'项目巡检', photos:['../围挡破损.png'], location:{lat:22.5471,lng:114.0600,addr:'福田区福华三路沟槽段围挡中部'}}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            }
          ]
        },
        /* ── 项目 2：南山 ── */
        {
          id: 'p2',
          name: '国际演艺中心建设工程',
          district: '南山区', street: '粤海街道',
          address: '南山区粤海街道科技南路18号',
          lat: 22.536, lng: 113.958, status: '在建',
          buildUnit: '深圳市南山科技园开发有限公司', buildContact: '李明 13800138001',
          constructUnit: '中建三局集团有限公司', constructContact: '王强 13900139001',
          supervisorUnit: '深圳市招商工程监理有限公司',
          regulatorUnit: '深圳市南山区住房和建设局', supervisionGroup: '一部二组(王琨)',
          designUnit: '深圳市建筑设计研究总院有限公司',
          redlineGeo: [[22.532,113.954],[22.541,113.954],[22.541,113.962],[22.532,113.962]],
          hoardings: [
            {
              id: 'WD-2026-0001', fenceName: '科技南路绿化迁移围挡', engineerName: '国际演艺中心建设主体工程', engStatus: '在建',
              constructUnit: '深圳市绿篱建设工程有限公司', fenceStatus: '待认领', issueStatus: '正常', needVerify: '是',
              custodyStart: '2025-09-01', custodyEnd: '2026-04-30',
              planRemoveDate: '2026-04-30', setupDate: '2025-09-01',
              length: 150, height: 2.0, area: 75.0,
              material: '仿真绿篱围挡', fenceStyle: '仿真绿篱',
              publicityContent: '绿美深圳 共建家园', roadOccupation: '人行道', roadOccupationArea: 30,
              fenceResponsible: '', fenceResponsiblePhone: '',
              address: '南山区科技南路18号东北角',
              gpsShape: [[22.536,113.959],[22.538,113.959],[22.538,113.961],[22.536,113.961]],
              entrances: [{lat:22.537,lng:113.959,name:'绿篱入口',type:'pedestrian'},{lat:22.537,lng:113.961,name:'材料通道',type:'temporary'}],
              defaultDemo: true,
              changeRecords: [
                { id: 'cr_ns1', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2025-09-01 08:00', type: '新增围挡', content: '国际演艺中心建设主体工程开工，新建仿真绿篱围挡', field: '', before: '', after: '' },
                { id: 'cr_ns2', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2025-10-15 10:00', type: '移交操作', content: '国际演艺中心建设工程外立面装饰幕墙工程施工完毕，围挡移交给国际演艺中心建设主体工程沿用', field: '工程移交', before: '国际演艺中心建设工程外立面装饰幕墙工程', after: '国际演艺中心建设主体工程' },
                { id: 'cr_ns3', changer: '张项目', unit: '深圳市绿篱建设工程有限公司', role: '项目负责人', date: '2026-07-15 10:00', type: '移交操作', content: '国际演艺中心建设主体工程已完工，围挡转为待认领状态，等待后续工程接收认领', field: '工程移交', before: '国际演艺中心建设主体工程', after: '待认领' }
              ],
              patrolRecords: [
                { id: 'pr_lh_score_week', date: '2026-07-28', time: '09:25', inspector: '李明', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_lh1', date: '2026-05-28', time: '09:00', inspector: '李明', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_lh2', date: '2026-06-10', time: '14:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_lh3', date: '2026-07-22', time: '10:30', inspector: '张建国', result: '异常', issues: [{type:'围挡破损', unit:'深圳市绿篱建设工程有限公司', detail:'围挡破损人可通行', status:'待整改', source:'监管巡查', supervisor:'张建国', location:{lat:22.5372,lng:113.9598,addr:'南山区科技南路18号东北角围挡范围处'}}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_lh_recent', date: _d(1), time: '16:20', inspector: '李明', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_lh_today', date: _d(0), time: '10:15', inspector: '李明', result: '异常', issues: [{type:'公益广告污损', unit:'深圳市绿篱建设工程有限公司', detail:'东北角公益广告画面局部褪色并有污渍，需更换画面。', status:'待整改', source:'项目巡检', photos:['../围挡破损.png'], location:{lat:22.5372,lng:113.9598,addr:'南山区科技南路18号东北角围挡'}}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0002', fenceName: '科技南路基坑支护围挡', engineerName: '国际演艺中心地基与基础工程', engStatus: '在建',
              constructUnit: '深圳市岩土工程有限公司', fenceStatus: '已安装', issueStatus: '正常', needVerify: '否',
              custodyStart: '2026-06-01', custodyEnd: '2026-12-31',
              planRemoveDate: '2026-12-31', setupDate: '2026-06-01',
              length: 280, height: 3.0, area: 140.0,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准化围挡',
              publicityContent: '品质工程 安全生产', roadOccupation: '机动车道', roadOccupationArea: 50,
              fenceResponsible: '王强', fenceResponsiblePhone: '13900139001',
              address: '南山区科技南路18号北侧',
              gpsShape: [[22.537,113.957],[22.5385,113.957],[22.5385,113.959],[22.537,113.959]],
              entrances: [{lat:22.5375,lng:113.958,name:'基坑入口',type:'vehicle'}],
              defaultDemo: false,
              changeRecords: [
                { id: 'cr_jk1', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2026-06-01 08:00', type: '移交操作', content: '绿化迁移完成，围挡移交给国际演艺中心地基与基础工程使用', field: '工程移交', before: '国际演艺中心建设主体工程', after: '国际演艺中心地基与基础工程' },
                { id: 'cr_jk2', changer: '张项目', unit: '深圳市岩土工程有限公司', role: '项目负责人', date: '2026-06-10 14:30', type: '认领操作', content: '国际演艺中心地基与基础工程正式认领接管该围挡', before: '待认领', after: '国际演艺中心地基与基础工程' }
              ],
              patrolRecords: [
                { id: 'pr_jk_score_week', date: '2026-07-30', time: '14:10', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_jk1', date: '2026-06-05', time: '09:00', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_jk2', date: '2026-06-20', time: '14:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_jk_recent', date: _d(1), time: '15:10', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_jk_today', date: _d(0), time: '11:20', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0003', fenceName: '科技南路土方回填围挡', engineerName: '国际演艺中心建设工程外立面装饰幕墙工程', engStatus: '已竣工',
              constructUnit: '中建三局集团有限公司', fenceStatus: '已拆除',
              issueStatus: '正常', needVerify: '否',
              custodyStart: '2024-03-01', custodyEnd: '2025-06-30',
              planRemoveDate: '2025-06-30', setupDate: '2024-03-01',
              length: 200, height: 2.5, area: 100.0,
              material: '彩钢板围挡', fenceStyle: '标准型',
              publicityContent: '安全施工 质量为本', roadOccupation: '人行道', roadOccupationArea: 28,
              fenceResponsible: '李明', fenceResponsiblePhone: '13800138001',
              address: '南山区科技南路18号南侧',
              gpsShape: [[22.533,113.957],[22.535,113.957],[22.535,113.959],[22.533,113.959]],
              entrances: [{lat:22.534,lng:113.958,name:'土方入口',type:'vehicle'}],
              defaultDemo: false,
              changeRecords: [
                { id: 'cr_tf1', changer: '李明', unit: '中建三局集团有限公司', role: '施工人员', date: '2025-06-25 09:00', type: '拆除操作', content: '国际演艺中心建设工程外立面装饰幕墙工程竣工，围挡已拆除并清运完毕', field: '围挡拆除', before: '已安装', after: '已拆除' },
                { id: 'cr_tf2', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2024-03-01 08:00', type: '新增围挡', content: '国际演艺中心建设工程外立面装饰幕墙工程开工，新建施工围挡', field: '', before: '', after: '' }
              ],
              patrolRecords: [
                { id: 'pr_tf1', date: '2024-08-15', time: '09:00', inspector: '李明', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_tf2', date: '2025-02-20', time: '14:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_tf3', date: '2025-06-10', time: '10:00', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            }
          ]
        },
        /* ── 项目 3：龙华 ── */
        {
          id: 'p3',
          name: '龙城北综合车场工程(含保障性租赁住房)',
          district: '龙华区', street: '民治街道',
          address: '龙华区民治街道民丰路88号',
          lat: 22.628, lng: 114.042, status: '在建',
          buildUnit: '深圳市龙华区建筑工务署', buildContact: '赵刚 13800138003',
          constructUnit: '深圳市建工集团股份有限公司', constructContact: '周文 13900139003',
          supervisorUnit: '深圳市广通工程监理有限公司',
          regulatorUnit: '深圳市龙华区住房和建设局', supervisionGroup: '二部一组(渠明)',
          designUnit: '深圳市建筑设计研究总院有限公司',
          redlineGeo: [[22.625,114.038],[22.632,114.038],[22.632,114.046],[22.625,114.046]],
          hoardings: [
            {
              id: 'WD-2026-0004', fenceName: '教学楼主体围挡', engineerName: '龙城北综合车场主体工程', engStatus: '在建',
              fenceStatus: '待认领', issueStatus: '正常', needVerify: '否',
              custodyStart: '2026-02-01', custodyEnd: '2027-08-31',
              planRemoveDate: '2027-08-31', setupDate: '2026-02-01',
              length: 180, height: 2.5, area: 90.0,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准化围挡',
              publicityContent: '教育为本 安全为先', roadOccupation: '人行道', roadOccupationArea: 25,
              fenceResponsible: '', fenceResponsiblePhone: '',
              address: '龙华区民治街道民丰路88号',
              gpsShape: [[22.627,114.041],[22.630,114.041],[22.630,114.044],[22.627,114.044]],
              entrances: [{lat:22.628,lng:114.041,name:'主入口',type:'vehicle'},{lat:22.628,lng:114.044,name:'人行通道',type:'pedestrian'}],
              defaultDemo: true,
              changeRecords: [
                { id: 'cr_lh1', changer: '周文', unit: '深圳市建工集团股份有限公司', role: '施工人员', date: '2026-02-01 09:00', type: '新增围挡', content: '龙城北综合车场主体工程开工，新建施工围挡', field: '', before: '', after: '' },
                { id: 'cr_lh2', changer: '张项目', unit: '深圳市建工集团股份有限公司', role: '项目负责人', date: '2026-07-18 15:30', type: '移交操作', content: '龙城北综合车场主体工程已完工，围挡移交至待认领状态', field: '工程移交', before: '龙城北综合车场主体工程', after: '待认领' },
                { id: 'cr_lh3', changer: '张项目', unit: '深圳市建工集团股份有限公司', role: '项目负责人', date: '2026-07-20 10:00', type: '取消移交', content: '取消前次移交操作，围挡恢复已安装状态', before: '待认领', after: '龙城北综合车场主体工程' }
              ],
              patrolRecords: [
                { id: 'pr_lh4_score_week', date: '2026-07-28', time: '14:00', inspector: '周文', result: '异常', issues: [{type:'围挡喷淋不符合要求', unit:'深圳市建工集团股份有限公司', detail:'喷淋头堵塞，已完成疏通处理', status:'整改完成', source:'项目巡检'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_lh1', date: '2026-07-15', time: '09:00', inspector: '周文', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_lh2', date: '2026-06-20', time: '14:30', inspector: '赵巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' }
              ]
            }
          ]
        },
        /* ── 项目 4：22号线 ── */
        {
          id: 'p4',
          name: '深圳市城市轨道交通22号线一期工程施工总承包22101标土建一工区',
          district: '龙华区', street: '民治街道',
          address: '龙华区民治街道22号线一工区施工段',
          lat: 22.645, lng: 114.052, status: '在建',
          buildUnit: '深圳市地铁集团有限公司', buildContact: '陈工 13800138022',
          constructUnit: '中铁十四局集团有限公司', constructContact: '李强 13800138022',
          supervisorUnit: '深圳市铁科建设监理有限公司',
          regulatorUnit: '深圳市龙华区住房和建设局', supervisionGroup: '二部二组(梁映)',
          designUnit: '中铁工程设计咨询集团有限公司',
          redlineGeo: [[22.643,114.050],[22.647,114.050],[22.647,114.054],[22.643,114.054]],
          hoardings: [
            {
              id: 'WD-2026-0005', fenceName: '22号线一工区围挡', engineerName: '深圳市城市轨道交通22号线一期工程施工总承包22101标土建一工区', engStatus: '在建',
              constructUnit: '中铁十四局集团有限公司', fenceStatus: '已安装', issueStatus: '正常', needVerify: '否',
              custodyStart: '2026-03-01', custodyEnd: '2027-06-30',
              planRemoveDate: '2027-06-30', setupDate: '2026-03-01',
              length: 420, height: 2.5, area: 210.0,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准化围挡',
              publicityContent: '文明施工 安全第一', roadOccupation: '人行道', roadOccupationArea: 60,
              fenceResponsible: '李强', fenceResponsiblePhone: '13800138022',
              address: '龙华区民治街道22号线一工区施工段',
              gpsShape: [[22.644,114.051],[22.646,114.051],[22.646,114.053],[22.644,114.053]],
              entrances: [{lat:22.645,lng:114.0515,name:'施工入口',type:'vehicle'}],
              defaultDemo: false,
              changeRecords: [
                { id: 'cr_m22_1', changer: '李强', unit: '中铁十四局集团有限公司', role: '施工人员', date: '2026-03-01 08:00', type: '新增围挡', content: '22号线一工区开工，新建施工围挡', field: '', before: '', after: '' }
              ],
              patrolRecords: [
                { id: 'pr_m22_score_week', date: '2026-07-30', time: '10:20', inspector: '李强', result: '异常', issues: [{type:'围挡基础松动', unit:'中铁十四局集团有限公司', detail:'施工入口东侧围挡基础连接件松动，已完成紧固处理', status:'整改完成', source:'项目巡检'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_m22_1', date: '2026-06-12', time: '09:00', inspector: '李强', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_m22_recent', date: _d(1), time: '15:40', inspector: '李强', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_m22_today', date: _d(0), time: '10:00', inspector: '李强', result: '异常', issues: [{type:'围挡基础松动', unit:'中铁十四局集团有限公司', detail:'施工入口东侧一处围挡基础连接件松动，需及时加固。', status:'待整改', source:'项目巡检', photos:['../围挡破损.png'], location:{lat:22.6451,lng:114.0518,addr:'龙华区民治街道22号线一工区施工入口东侧'}}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            }
          ]
        },
        /* ── 项目 5：福城南 ── */
        {
          id: 'p5',
          name: '福城南产业片区10-08-03宗地项目',
          district: '福田区', street: '福田街道',
          address: '福田区福城南产业片区10-08-03宗地',
          lat: 22.535, lng: 114.068, status: '在建',
          buildUnit: '深圳市福田产业投资开发有限公司', buildContact: '王工 13800138005',
          constructUnit: '深圳市建安集团有限公司', constructContact: '王勇 13800138005',
          supervisorUnit: '深圳市现代建设监理有限公司',
          regulatorUnit: '深圳市福田区住房和建设局', supervisionGroup: '巡查一部',
          designUnit: '深圳华森建筑与工程设计顾问有限公司',
          redlineGeo: [[22.533,114.066],[22.537,114.066],[22.537,114.070],[22.533,114.070]],
          hoardings: [
            {
              id: 'WD-2026-0006', fenceName: '福城南桩基础围挡', engineerName: '福城南产业片区10-08-03宗地项目桩基础工程', engStatus: '在建',
              constructUnit: '深圳市建安集团有限公司', fenceStatus: '已安装', issueStatus: '正常', needVerify: '否',
              custodyStart: '2026-05-01', custodyEnd: '2026-12-31',
              planRemoveDate: '2026-12-31', setupDate: '2026-05-01',
              length: 200, height: 2.5, area: 100.0,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准化围挡',
              publicityContent: '安全施工 质量为本', roadOccupation: '人行道', roadOccupationArea: 30,
              fenceResponsible: '王勇', fenceResponsiblePhone: '13800138005',
              address: '福田区福城南产业片区10-08-03宗地',
              gpsShape: [[22.534,114.067],[22.536,114.067],[22.536,114.069],[22.534,114.069]],
              entrances: [{lat:22.535,lng:114.067,name:'桩基入口',type:'vehicle'}],
              defaultDemo: false,
              changeRecords: [
                { id: 'cr_fn_1', changer: '王勇', unit: '深圳市建安集团有限公司', role: '施工人员', date: '2026-05-01 08:00', type: '新增围挡', content: '桩基础工程开工，新建施工围挡', field: '', before: '', after: '' }
              ],
              patrolRecords: [
                { id: 'pr_fn_1', date: '2026-06-18', time: '14:00', inspector: '王勇', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_fn1_score_week', date: '2026-07-29', time: '15:30', inspector: '王勇', result: '异常', issues: [{type:'围挡二维码内容不全', unit:'深圳市建安集团有限公司', detail:'公示二维码缺少责任单位信息，已更新', status:'整改完成', source:'项目巡检'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_fn_today', date: _d(0), time: '15:30', inspector: '王勇', result: '异常', issues: [{type:'围挡二维码内容不全', unit:'深圳市建安集团有限公司', detail:'围挡公示二维码扫码后缺少当前责任单位信息，需补充更新。', status:'待整改', source:'项目巡检', photos:['../围挡破损.png'], location:{lat:22.5351,lng:114.0677,addr:'福田区福城南产业片区桩基围挡主入口'}}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0007', fenceName: '福城南基坑围挡', engineerName: '福城南产业片区10-08-03宗地项目基坑支护与土石方工程', engStatus: '在建',
              constructUnit: '深圳市地质建设工程公司', fenceStatus: '待认领', issueStatus: '正常', needVerify: '否',
              custodyStart: '2026-04-01', custodyEnd: '2026-10-31',
              planRemoveDate: '2026-10-31', setupDate: '2026-04-01',
              length: 180, height: 2.5, area: 90.0,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准化围挡',
              publicityContent: '注意安全 请勿靠近', roadOccupation: '非机动车道', roadOccupationArea: 25,
              fenceResponsible: '', fenceResponsiblePhone: '',
              address: '福田区福城南产业片区10-08-03宗地',
              gpsShape: [[22.5345,114.0675],[22.5365,114.0675],[22.5365,114.0695],[22.5345,114.0695]],
              entrances: [{lat:22.5355,lng:114.068,name:'基坑入口',type:'vehicle'}],
              defaultDemo: false,
              changeRecords: [
                { id: 'cr_fn_2', changer: '王勇', unit: '深圳市地质建设工程公司', role: '施工人员', date: '2026-04-01 08:00', type: '新增围挡', content: '基坑支护与土石方工程开工，新建施工围挡', field: '', before: '', after: '' }
              ],
              patrolRecords: [
                { id: 'pr_fn_2', date: '2026-07-10', time: '10:00', inspector: '王勇', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_fn2_score_week', date: '2026-07-31', time: '09:40', inspector: '王勇', result: '异常', issues: [{type:'围挡脏污', unit:'深圳市地质建设工程公司', detail:'基坑围挡局部泥浆污染，已安排清洗', status:'待整改', source:'项目巡检'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            }
          ]
        }
      ]
    };
  }

  /* ── 加载或初始化 ── */
  var CURRENT_VERSION = 73;
  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    var parsed = JSON.parse(stored);
    if (parsed.version >= CURRENT_VERSION) {
      window.MOCK_DATA = parsed;
    } else {
      window.MOCK_DATA = getInitialData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(window.MOCK_DATA));
      localStorage.removeItem('YZY_STREET_ISSUES');
      localStorage.removeItem('FENCE_ISSUE_CLOSURE');
    }
  } else {
    window.MOCK_DATA = getInitialData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(window.MOCK_DATA));
  }

  /* 兼容旧缓存：补齐稳定的监督组归属，不重置已有原型数据。 */
  var _supervisionGroupByProject = {
    p1: '一部一组(陈江华)', p2: '一部二组(王琨)', p3: '二部一组(渠明)',
    p4: '二部二组(梁映)', p5: '巡查一部'
  };
  var _supervisionGroupChanged = false;
  (window.MOCK_DATA.projects || []).forEach(function (project) {
    if (!project.supervisionGroup && _supervisionGroupByProject[project.id]) {
      project.supervisionGroup = _supervisionGroupByProject[project.id];
      _supervisionGroupChanged = true;
    }
  });
  if (_supervisionGroupChanged) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(window.MOCK_DATA)); } catch (e) {}
  }

  /* ═══ Helper ═══ */
  function _each(fn) {
    (window.MOCK_DATA.projects || []).forEach(function (p) {
      (p.hoardings || []).forEach(function (h) { fn(h, p); });
    });
  }
  function _enrich(h, p) {
    var copy = {};
    for (var k in h) { if (h.hasOwnProperty(k)) copy[k] = h[k]; }
    copy.projectId = p.id; copy.projectName = p.name;
    copy.projectDistrict = p.district; copy.projectStreet = p.street;
    copy.projectAddress = p.address; copy.projectLat = p.lat; copy.projectLng = p.lng;
    copy.projectStatus = p.status;
    copy.buildUnit = p.buildUnit; copy.buildContact = p.buildContact;
    copy.constructUnit = copy.constructUnit || p.constructUnit;
	    copy._projectConstructUnit = p.constructUnit;
    copy.constructContact = p.constructContact;
    copy.supervisorUnit = p.supervisorUnit;
    copy.regulatorUnit = p.regulatorUnit; copy.designUnit = p.designUnit;
    copy.redlineGeo = p.redlineGeo;
    return copy;
  }

  window.MOCK_DATA.getProjects = function () { return this.projects || []; };
  window.MOCK_DATA.getHoardings = function () {
    var arr = [];
    _each(function (h, p) { arr.push(_enrich(h, p)); });
    return arr;
  };
  window.MOCK_DATA.updateHoard = function (hoardingId, updates) {
    _each(function (h, p) {
      if (h.id === hoardingId) { for (var k in updates) { if (updates.hasOwnProperty(k)) h[k] = updates[k]; } }
    });
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(window.MOCK_DATA)); } catch (e) {}
  };
  window.MOCK_DATA.findFenceById = function (fenceId) {
    var found = null;
    _each(function (h) { if (h.id === fenceId) found = h; });
    return found;
  };
  window.MOCK_DATA.findHoard = function (id) {
    return window.MOCK_DATA.findFenceById(id);
  };
  window.MOCK_DATA.findByProjectAndEngineer = function (projectName, engineerName) {
    var hoardings = window.MOCK_DATA.getHoardings();
    return hoardings.find(function (h) { return h.projectName === projectName && h.engineerName === engineerName; }) || null;
  };
  window.MOCK_DATA.getDefaultDemo = function () {
    var hoardings = window.MOCK_DATA.getHoardings();
    return hoardings.find(function (h) { return h.defaultDemo; }) || hoardings[0] || null;
  };
  window.MOCK_DATA.getOtherHoardings = function (excludeId) {
    var targetProj = null;
    (window.MOCK_DATA.getProjects() || []).forEach(function (p) {
      (p.hoardings || []).forEach(function (h) { if (h.id === excludeId) targetProj = p; });
    });
    if (!targetProj) return [];
    var hoardings = window.MOCK_DATA.getHoardings();
    return hoardings.filter(function (h) { return h.projectName === targetProj.name && h.id !== excludeId; });
  };

  /* ═══ Closure Issues ═══ */
  var CLOSURE_OVERRIDE_KEY = 'HOARDING_CLOSURE_ISSUE_OVERRIDES_V1';
  function _getClosureIssueOverrides() {
    try { return JSON.parse(localStorage.getItem(CLOSURE_OVERRIDE_KEY) || '{}') || {}; } catch (e) { return {}; }
  }
  function _saveClosureIssueOverride(issue) {
    var overrides = _getClosureIssueOverrides();
    overrides[issue.id] = {
      fenceId: issue.fenceId || '', fenceName: issue.fenceName || '', fenceAddr: issue.fenceAddr || '',
      engineerName: issue.engineerName || '', responsibleUnit: issue.responsibleUnit || '',
      _reportSnapshot: issue._reportSnapshot || null, _transfers: issue._transfers || []
    };
    try { localStorage.setItem(CLOSURE_OVERRIDE_KEY, JSON.stringify(overrides)); } catch (e) {}
  }
  function _formatIssueDateTime(date) {
    function pad(value) { return String(value).padStart(2, '0'); }
    return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + ' ' +
      pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
  }
  function _shiftIssueTime(dateTime, minutes) {
    var parsed = new Date(String(dateTime || '').replace(' ', 'T'));
    if (isNaN(parsed.getTime())) parsed = new Date();
    parsed.setMinutes(parsed.getMinutes() + minutes);
    return _formatIssueDateTime(parsed);
  }
  function _getIssueReportOperator(issue) {
    if (issue.reportOperator) return issue.reportOperator;
    if (issue.source === '项目巡检') return '刘伟';
    if (issue.source === '街道上报') return '李伟';
    if (issue.source === '监管巡查') return issue.supervisor || '张建国';
    if (issue.source === '群众上报') return '市民';
    return '—';
  }
  function _getOriginalEngineering(issue) {
    var engineeringPairs = {
      '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区': '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区',
      '穗莞深城际轨道交通深圳机场至前海段工程II标土建二工区': '穗莞深城际轨道交通深圳机场至前海段工程I标土建一工区',
      '国际演艺中心建设主体工程': '国际演艺中心地基与基础工程',
      '国际演艺中心地基与基础工程': '国际演艺中心建设主体工程',
      '国际演艺中心建设工程外立面装饰幕墙工程': '国际演艺中心建设主体工程',
      '福城南产业片区10-08-03宗地项目桩基础工程': '福城南产业片区10-08-03宗地项目基坑支护与土石方工程',
      '福城南产业片区10-08-03宗地项目基坑支护与土石方工程': '福城南产业片区10-08-03宗地项目桩基础工程'
    };
    return engineeringPairs[issue.engineerName] || '未明确关联工程';
  }
  function _findIssueFence(projectName, fenceId, engineerName) {
    var fences = window.MOCK_DATA.getHoardings();
    return fences.find(function (fence) {
      return fence.projectName === projectName && fence.id === fenceId && (!engineerName || fence.engineerName === engineerName);
    }) || fences.find(function (fence) {
      return fence.projectName === projectName && fence.id === fenceId;
    }) || fences.find(function (fence) {
      return fence.projectName === projectName && engineerName && fence.engineerName === engineerName;
    }) || null;
  }
  function _fenceSnapshot(fence) {
    if (!fence) return null;
    return {
      fenceId: fence.id || '',
      fenceName: fence.fenceName || '围挡信息未记录',
      engineeringId: fence.engineeringId || '',
      engineeringName: fence.engineerName || '—',
      responsibleUnitId: fence.responsibleUnitId || '',
      responsibleUnitName: fence.constructUnit || '—'
    };
  }
  function _getRectificationDescription(issue) {
    var descriptions = {
      '围挡破损': '已更换破损围挡面板并完成连接部位加固，现场复查无安全隐患。',
      '围挡脏污': '已完成围挡表面清洗，污染区域已恢复整洁。',
      '围挡基础松动': '已紧固松动连接件并完成防锈处理，围挡基础状态稳定。',
      '张贴小广告': '已清除残留广告并完成表面清洁，围挡立面恢复整洁。',
      '围挡喷淋不符合要求': '已疏通堵塞喷头并更换损坏部件，喷淋设施恢复正常。',
      '围挡公益广告画面不连贯': '已补全缺失画面并调整拼接位置，公益广告画面保持连续。',
      '围挡二维码内容不全': '已更新围挡公示二维码内容，责任单位等信息可正常查看。'
    };
    return descriptions[issue.type] || '已按要求完成现场整改，经复查问题已消除。';
  }
  function _ensureCompletedIssueFlow(issue) {
    if (issue.status !== '整改完成' && issue.status !== '已通过') return issue;
    issue.reportOperator = _getIssueReportOperator(issue);

    var transferTime = _shiftIssueTime(issue.reportTime, 90);
    if (!Array.isArray(issue._transfers) || !issue._transfers.length) {
      var targetFence = _findIssueFence(issue._projectName || '', issue.fenceId || '', issue.engineerName || '');
      issue._transfers = [{
        time: transferTime,
        operator: '张建国',
        unit: '深圳市住房和建设局',
        originalEng: _getOriginalEngineering(issue),
        transferEng: issue.engineerName || '—',
        sourceFenceId: '',
        sourceFenceName: '围挡信息未记录',
        sourceEngineeringId: '',
        sourceEngineeringNameSnapshot: _getOriginalEngineering(issue),
        sourceResponsibleUnitId: '',
        sourceResponsibleUnitNameSnapshot: '—',
        targetFenceId: targetFence ? targetFence.id : (issue.fenceId || ''),
        targetFenceName: targetFence ? targetFence.fenceName : '围挡信息未记录',
        targetEngineeringId: targetFence ? (targetFence.engineeringId || '') : '',
        targetEngineeringNameSnapshot: targetFence ? (targetFence.engineerName || '—') : (issue.engineerName || '—'),
        targetResponsibleUnitId: targetFence ? (targetFence.responsibleUnitId || '') : '',
        targetResponsibleUnitNameSnapshot: targetFence ? (targetFence.constructUnit || '—') : (issue.responsibleUnit || '—'),
        desc: '经核实，将问题转派至对应工程责任单位办理整改。'
      }];
    } else {
      issue._transfers.forEach(function (transfer) {
        transfer.time = transfer.time || transferTime;
        transfer.operator = transfer.operator || '张建国';
        transfer.unit = transfer.unit || '深圳市住房和建设局';
        transfer.originalEng = transfer.originalEng || _getOriginalEngineering(issue);
        transfer.transferEng = transfer.transferEng || issue.engineerName || '—';
        transfer.desc = transfer.desc || '经核实，将问题转派至对应工程责任单位办理整改。';
      });
    }

    var lastTransferTime = issue._transfers[issue._transfers.length - 1].time;
    var rectificationTime = _shiftIssueTime(lastTransferTime, 300);
    if (!issue._rectification) issue._rectification = {};
    if (!issue._rectification.rectTime || issue._rectification.rectTime <= lastTransferTime) issue._rectification.rectTime = rectificationTime;
    issue._rectification.rectifier = issue._rectification.rectifier || (issue.responsibleUnit === '深圳市市政工程总公司' ? '刘伟' : '王强');
    issue._rectification.rectifierUnit = issue._rectification.rectifierUnit || issue.responsibleUnit || '项目责任单位';
    issue._rectification.desc = issue._rectification.desc || _getRectificationDescription(issue);
    if (!Array.isArray(issue._rectification.photos) || !issue._rectification.photos.length) issue._rectification.photos = (issue.photos || ['../围挡破损.png']).slice();
    return issue;
  }
  window.MOCK_DATA.getClosureIssues = function () {
    var all = [];
    try { var raw = localStorage.getItem('YZY_STREET_ISSUES'); if (raw) all = JSON.parse(raw); } catch (e) {}
    var demoIds = {};
    _demoIssues.forEach(function(d){ demoIds[d.id] = true; });
    all = all.filter(function(i){ return !demoIds[i.id]; }).concat(_demoIssues);
    var overrides = _getClosureIssueOverrides();
    all.forEach(function (i) {
      var saved = overrides[i.id];
      if (saved) {
        ['fenceId','fenceName','fenceAddr','engineerName','responsibleUnit','_reportSnapshot','_transfers'].forEach(function (key) {
          if (saved.hasOwnProperty(key)) i[key] = saved[key];
        });
      }
      i._unregistered = !i.fenceId && !i._projectName;
      _ensureCompletedIssueFlow(i);
    });
    return all;
  };
  window.MOCK_DATA.getClosureDetail = function (issueId) {
    return window.MOCK_DATA.getClosureIssues().find(function (i) { return i.id === issueId; });
  };
  window.MOCK_DATA.transferClosureIssue = function (issueId, targetFenceId, description, operator) {
    var issue = window.MOCK_DATA.getClosureDetail(issueId);
    if (!issue) return { ok: false, message: '未找到问题记录' };
    var projectName = issue._projectName || '';
    var sourceFence = _findIssueFence(projectName, issue.fenceId || '', issue.engineerName || '');
    var targetFence = _findIssueFence(projectName, targetFenceId || '', '');
    if (!targetFence || targetFence.projectName !== projectName) return { ok: false, message: '目标围挡不属于当前项目' };
    if (targetFence.id === issue.fenceId) return { ok: false, message: '不能转派至当前围挡' };
    if (targetFence.fenceStatus === '已拆除' || targetFence.fenceStatus === '待认领' || !targetFence.constructUnit) {
      return { ok: false, message: '该围挡当前无法承接整改任务' };
    }
    var source = _fenceSnapshot(sourceFence) || {
      fenceId: issue.fenceId || '', fenceName: issue.fenceName || '围挡信息未记录', engineeringId: '',
      engineeringName: issue.engineerName || '—', responsibleUnitId: '', responsibleUnitName: issue.responsibleUnit || '—'
    };
    var target = _fenceSnapshot(targetFence);
    if (!issue._reportSnapshot) {
      issue._reportSnapshot = {
        fenceId: source.fenceId, fenceName: source.fenceName,
        engineeringName: source.engineeringName, responsibleUnitName: source.responsibleUnitName
      };
    }
    var nowText = _formatIssueDateTime(new Date());
    operator = operator || {};
    var transfer = {
      time: nowText,
      operator: operator.name || '刘伟',
      unit: operator.unit || '项目责任单位',
      desc: description || '',
      sourceFenceId: source.fenceId,
      sourceFenceName: source.fenceName,
      sourceEngineeringId: source.engineeringId,
      sourceEngineeringNameSnapshot: source.engineeringName,
      sourceResponsibleUnitId: source.responsibleUnitId,
      sourceResponsibleUnitNameSnapshot: source.responsibleUnitName,
      targetFenceId: target.fenceId,
      targetFenceName: target.fenceName,
      targetEngineeringId: target.engineeringId,
      targetEngineeringNameSnapshot: target.engineeringName,
      targetResponsibleUnitId: target.responsibleUnitId,
      targetResponsibleUnitNameSnapshot: target.responsibleUnitName,
      originalEng: source.engineeringName,
      transferEng: target.engineeringName
    };
    if (!Array.isArray(issue._transfers)) issue._transfers = [];
    issue._transfers.push(transfer);
    issue.fenceId = target.fenceId;
    issue.fenceName = target.fenceName;
    issue.fenceAddr = targetFence.address || issue.fenceAddr || '';
    issue.engineerName = target.engineeringName;
    issue.responsibleUnit = target.responsibleUnitName;
    _saveClosureIssueOverride(issue);
    return { ok: true, issue: issue, transfer: transfer, targetFence: targetFence };
  };
  window.MOCK_DATA.getStreetIssues = function () {
    return window.MOCK_DATA.getClosureIssues();
  };
  window.MOCK_DATA.getStreetIssueTypes = function () {
    return ['围挡破损','围挡脏污','围挡缺失','围挡基础松动','围挡占道超限','张贴小广告','应建未建围挡','公益广告污损','公益广告内容不合时宜','公益广告画面不连贯影响整体美观','围挡安全隐患','围挡喷淋不符合要求','围挡二维码内容不全','无围挡维护责任人信息','其他'];
  };

  /* ═══ Project Scores ═══ */
  function _roundScore(value) { return Math.round(Number(value) || 0); }
  function _average(values) {
    var valid = values.filter(function (value) { return typeof value === 'number' && isFinite(value); });
    return valid.length ? Math.round(valid.reduce(function (sum, value) { return sum + value; }, 0) / valid.length * 10) / 10 : null;
  }
  function _getGrade(score) {
    var s = Math.max(0, Math.min(115, Number(score) || 0));
    if (s >= 100) return { grade: '优秀', cls: 'excellent', icon: '🏆' };
    if (s >= 80) return { grade: '良好', cls: 'good', icon: '✅' };
    if (s >= 60) return { grade: '警示', cls: 'warn', icon: '⚠️' };
    return { grade: '差', cls: 'poor', icon: '❌' };
  }
  function _uniqueCount(values, fallback) {
    if (Array.isArray(values)) {
      var seen = {};
      values.forEach(function (value) { if (value !== null && value !== undefined && value !== '') seen[String(value)] = true; });
      return Object.keys(seen).length;
    }
    return Math.max(0, Number(fallback) || 0);
  }
  function _dedupeSuggestions(items) {
    return items.filter(function (item, index, all) { return item && all.indexOf(item) === index; });
  }
  function _normalisePeriod(start, end) {
    if (typeof start === 'number') {
      var year = start, month = Number(end) || 1;
      return { start: year + '-' + String(month).padStart(2, '0') + '-01', end: year + '-' + String(month).padStart(2, '0') + '-' + String(new Date(year, month, 0).getDate()).padStart(2, '0') };
    }
    if (typeof start === 'string' && typeof end === 'string') return { start: start, end: end };
    var today = new Date(), day = today.getDay() || 7, sunday = new Date(today), monday = new Date(today);
    sunday.setDate(today.getDate() - day); monday.setDate(sunday.getDate() - 6);
    function fmt(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
    return { start: fmt(monday), end: fmt(sunday) };
  }

  window.MOCK_DATA.getScoreGrade = function (score) { return _getGrade(score); };
  window.MOCK_DATA.calculatePatrolScore = function (validDays, actualDays) {
    var n = Math.max(0, Math.floor(Number(validDays) || 0));
    var a = Math.max(0, Math.floor(Number(actualDays) || 0));
    if (a > n) return { valid: false, participated: false, score: null, N: n, A: a, T: n > 0 ? Math.max(1, Math.floor(n * 0.8)) : null };
    if (n === 0) return { valid: true, participated: false, score: null, N: 0, A: 0, T: null };
    var t = Math.max(1, Math.floor(n * 0.8)), score;
    if (a < t) score = a / t * 60;
    else if (a === t && t < n) score = 60;
    else if (a > t) score = 60 + (a - t) / (n - t) * 15;
    else score = 75;
    return { valid: true, participated: true, score: _roundScore(score), N: n, A: a, T: t };
  };
  window.MOCK_DATA.calculateIssueScore = function (metrics) {
    metrics = metrics || {};
    var selfFound = Math.max(0, Number(metrics.selfFound) || 0);
    var selfOverdue = _uniqueCount(metrics.selfOverdueIssueIds, metrics.selfOverdue);
    var supervisorFound = Math.max(0, Number(metrics.supervisorFound) || 0);
    var supervisorOverdue = _uniqueCount(metrics.supervisorOverdueIssueIds, metrics.supervisorOverdue);
    return Math.max(0, Math.min(35, _roundScore(25 + Math.min(selfFound, 10) - 10 * selfOverdue - 15 * supervisorFound - 15 * supervisorOverdue)));
  };
  window.MOCK_DATA.calculateBonusScore = function (metrics) {
    metrics = metrics || {};
    return (Number(metrics.patrolStreakWeeks) >= 2 ? 3 : 0) + (Number(metrics.rectifyStreakWeeks) >= 2 && Number(metrics.rectifyDueIssues) > 0 ? 2 : 0);
  };
  window.MOCK_DATA.calculateFenceScore = function (metrics) {
    metrics = metrics || {};
    var patrol = this.calculatePatrolScore(metrics.validDays, metrics.actualDays);
    if (!patrol.valid) return { valid: false, participated: false, total: null, grade: '—', gradeCls: 'none', d1: null, d2: null, bonus: null, patrol: patrol, metrics: metrics };
    if (!patrol.participated) return { valid: true, participated: false, total: null, grade: '—', gradeCls: 'none', d1: null, d2: null, bonus: null, patrol: patrol, metrics: metrics };
    var issue = this.calculateIssueScore(metrics), bonus = this.calculateBonusScore(metrics);
    var total = Math.max(0, Math.min(115, _roundScore(patrol.score + issue + bonus))), grade = _getGrade(total);
    return { valid: true, participated: true, total: total, grade: grade.grade, gradeCls: grade.cls, d1: patrol.score, d2: issue, bonus: bonus, patrol: patrol, metrics: metrics };
  };

  window.MOCK_DATA.getFenceScoreSuggestions = function (metrics, score) {
    metrics = metrics || {};
    score = score || this.calculateFenceScore(metrics);
    if (!score.valid) return [];
    if (!score.participated || Number(metrics.validDays) === 0) return ['本期不参与评分'];
    var suggestions = [], n = score.patrol.N, a = score.patrol.A, t = score.patrol.T;
    var found = Math.max(0, Number(metrics.periodFoundIssues) || 0);
    var needsRectification = Math.max(0, Number(metrics.periodRectificationIssues) || 0);
    var pending = Math.max(0, Number(metrics.currentPendingIssues) || 0);
    var overdue = Math.max(0, Number(metrics.currentOverdueIssues) || 0);
    var overdueThisPeriod = _uniqueCount(metrics.periodOverdueDeductionIssueIds, metrics.periodOverdueDeductionIssues);
    var allTimely = metrics.allRectificationsWithin24Hours === true && overdue === 0 && overdueThisPeriod === 0;

    if (a === 0) suggestions.push('本期尚无巡检记录，请及时安排巡检');
    else if (a < t) suggestions.push('本期仅巡检' + a + '天，巡检频次偏低，建议及时加强巡检安排。');
    else if (a < n) suggestions.push('本期已巡检' + a + '天，距全勤还差' + (n - a) + '天，请继续坚持每日巡检');

    if (found === 0 && needsRectification === 0) {
      suggestions.push(a < t ? '本期暂未发现问题，建议加强问题排查' : '本期暂未发现问题，请继续保持当前管理水平');
    } else if (pending > 0) {
      if (overdue > 0) suggestions.push('当前待整改问题' + pending + '个，其中' + overdue + '个问题整改超期，请尽快完成整改，避免因整改超期导致持续扣分');
      else suggestions.push('当前待整改问题' + pending + '个，发现问题后应在24小时内尽快完成整改，避免因整改超期导致扣分');
    } else if (needsRectification > 0 && allTimely) {
      suggestions.push('本期问题已全部按时整改完成，请继续保持当前管理水平');
    }

    var patrolWeeks = Math.max(0, Number(metrics.patrolStreakWeeks) || 0);
    var rectifyWeeks = Math.max(0, Number(metrics.rectifyStreakWeeks) || 0);
    if (patrolWeeks >= 2 && rectifyWeeks >= 2) suggestions.push('本周已获得巡检连续奖励+3分和整改连续奖励+2分，请继续保持');
    else if (patrolWeeks >= 2) suggestions.push('本周已获得巡检连续性奖励+3分，请继续保持');
    else if (rectifyWeeks >= 2) suggestions.push('本周已获得整改连续性奖励+2分，请继续保持');
    else {
      if (patrolWeeks === 1) suggestions.push('本周已达成巡检全勤，再保持1周可获得巡检连续奖励+3分！');
      if (rectifyWeeks === 1) suggestions.push('本周问题整改已达标，再保持1周可获得整改连续奖励+2分！');
    }
    return _dedupeSuggestions(suggestions);
  };

  window.MOCK_DATA.getProjectScoreSuggestions = function (fenceScores) {
    fenceScores = Array.isArray(fenceScores) ? fenceScores : [];
    if (fenceScores.length && fenceScores.every(function (row) { return row.valid && !row.participated && row.patrol && row.patrol.N === 0; })) return ['本期不参与评分'];
    var participating = fenceScores.filter(function (row) { return row.participated && typeof row.total === 'number'; });
    if (!participating.length) return [];
    var suggestions = [];
    var lowPatrol = participating.filter(function (row) { return row.patrol.A < row.patrol.T; });
    if (lowPatrol.length) {
      suggestions.push(lowPatrol.map(function (row) { return row.fenceName; }).join('、') + '本期仅巡检' + lowPatrol[0].patrol.A + '天，建议提升该围挡巡检频次');
    }
    var overdue = participating.filter(function (row) {
      return _uniqueCount(row.metrics.periodOverdueDeductionIssueIds, row.metrics.periodOverdueDeductionIssues) > 0;
    });
    if (overdue.length) suggestions.push(overdue.map(function (row) { return row.fenceName; }).join('、') + '发现问题后应在24小时内完成整改，避免扣分');
    if (participating.every(function (row) { return row.d1 === 75 && row.d2 === 35; })) suggestions.push('本期巡检与整改均达标，请继续保持当前管理水平和巡检习惯');
    return _dedupeSuggestions(suggestions);
  };

  var _scoreProfiles = {
    'p1|WD-2026-0002': { validDays: 7, actualDays: 2, selfFound: 0, selfOverdue: 0, supervisorFound: 0, supervisorOverdue: 0, periodFoundIssues: 0, periodRectificationIssues: 0, currentPendingIssues: 0, currentOverdueIssues: 0, periodOverdueDeductionIssues: 0, allRectificationsWithin24Hours: false, patrolStreakWeeks: 0, rectifyStreakWeeks: 0, rectifyDueIssues: 0 },
    'p2|WD-2026-0001': { validDays: 7, actualDays: 7, selfFound: 10, selfOverdue: 0, supervisorFound: 0, supervisorOverdue: 0, periodFoundIssues: 10, periodRectificationIssues: 10, currentPendingIssues: 0, currentOverdueIssues: 0, periodOverdueDeductionIssues: 0, allRectificationsWithin24Hours: true, patrolStreakWeeks: 2, rectifyStreakWeeks: 2, rectifyDueIssues: 1 },
    'p2|WD-2026-0002': { validDays: 7, actualDays: 6, selfFound: 0, selfOverdue: 0, supervisorFound: 0, supervisorOverdue: 0, periodFoundIssues: 0, periodRectificationIssues: 0, currentPendingIssues: 0, currentOverdueIssues: 0, periodOverdueDeductionIssues: 0, allRectificationsWithin24Hours: false, patrolStreakWeeks: 0, rectifyStreakWeeks: 0, rectifyDueIssues: 0 },
    'p3|WD-2026-0004': { validDays: 7, actualDays: 4, selfFound: 0, selfOverdue: 0, supervisorFound: 0, supervisorOverdue: 0, periodFoundIssues: 0, periodRectificationIssues: 0, currentPendingIssues: 0, currentOverdueIssues: 0, periodOverdueDeductionIssues: 0, allRectificationsWithin24Hours: false, patrolStreakWeeks: 0, rectifyStreakWeeks: 0, rectifyDueIssues: 0 },
    'p4|WD-2026-0005': { validDays: 7, actualDays: 7, selfFound: 0, selfOverdue: 0, supervisorFound: 0, supervisorOverdue: 0, periodFoundIssues: 0, periodRectificationIssues: 0, currentPendingIssues: 0, currentOverdueIssues: 0, periodOverdueDeductionIssues: 0, allRectificationsWithin24Hours: false, patrolStreakWeeks: 2, rectifyStreakWeeks: 0, rectifyDueIssues: 0 },
    'p5|WD-2026-0006': { validDays: 7, actualDays: 5, selfFound: 0, selfOverdue: 0, supervisorFound: 0, supervisorOverdue: 0, periodFoundIssues: 0, periodRectificationIssues: 0, currentPendingIssues: 0, currentOverdueIssues: 0, periodOverdueDeductionIssues: 0, allRectificationsWithin24Hours: false, patrolStreakWeeks: 0, rectifyStreakWeeks: 0, rectifyDueIssues: 0 },
    'p5|WD-2026-0007': { validDays: 7, actualDays: 5, selfFound: 10, selfOverdue: 1, selfOverdueIssueIds: ['LEGACY-001','LEGACY-001'], supervisorFound: 0, supervisorOverdue: 0, periodFoundIssues: 0, periodRectificationIssues: 1, currentPendingIssues: 1, currentOverdueIssues: 1, periodOverdueDeductionIssueIds: ['LEGACY-001','LEGACY-001'], allRectificationsWithin24Hours: false, patrolStreakWeeks: 0, rectifyStreakWeeks: 0, rectifyDueIssues: 0 }
  };
  window.MOCK_DATA.getFenceScores = function (periodStart, periodEnd) {
    var period = _normalisePeriod(periodStart, periodEnd), results = [], self = this;
    this.getProjects().forEach(function (project) {
      (project.hoardings || []).forEach(function (fence) {
        var profile = _scoreProfiles[project.id + '|' + fence.id];
        if (!profile) return;
        var score = self.calculateFenceScore(profile), suggestions = self.getFenceScoreSuggestions(profile, score);
        results.push({
          projectId: project.id, projectName: project.name, district: project.district || '', street: project.street || '',
          fenceId: fence.id, fenceName: fence.fenceName || '', engineerName: fence.engineerName || '—',
          responsibleUnit: fence.constructUnit || '—', constructUnit: fence.constructUnit || '—', projectStatus: project.status || '', fenceStatus: fence.fenceStatus || '', periodStart: period.start, periodEnd: period.end,
          valid: score.valid, participated: score.participated, d1: score.d1, d2: score.d2, bonus: score.bonus, total: score.total, grade: score.grade, gradeCls: score.gradeCls,
          patrol: score.patrol, metrics: profile, suggestions: suggestions
        });
      });
    });
    return results;
  };
  window.MOCK_DATA.getEngineeringScores = function (periodStart, periodEnd) {
    var groups = {};
    this.getFenceScores(periodStart, periodEnd).forEach(function (row) {
      var key = row.projectId + '|' + row.engineerName;
      if (!groups[key]) groups[key] = { projectId: row.projectId, projectName: row.projectName, district: row.district, street: row.street, engineerName: row.engineerName, responsibleUnits: [], fenceScores: [] };
      groups[key].fenceScores.push(row);
      if (groups[key].responsibleUnits.indexOf(row.responsibleUnit) < 0) groups[key].responsibleUnits.push(row.responsibleUnit);
    });
    return Object.keys(groups).map(function (key) {
      var group = groups[key], total = _average(group.fenceScores.map(function (row) { return row.total; })), grade = total === null ? { grade: '—', cls: 'none' } : _getGrade(total);
      group.total = total; group.grade = grade.grade; group.gradeCls = grade.cls; group.participated = total !== null; group.hoardingsCount = group.fenceScores.length;
      return group;
    });
  };
  window.MOCK_DATA.getProjectScores = function (periodStart, periodEnd) {
    var groups = {}, projectsById = {}, self = this;
    this.getProjects().forEach(function (project) { projectsById[project.id] = project; });
    this.getEngineeringScores(periodStart, periodEnd).forEach(function (row) {
      if (!groups[row.projectId]) groups[row.projectId] = [];
      groups[row.projectId].push(row);
    });
    var results = Object.keys(groups).map(function (projectId) {
      var project = projectsById[projectId], engineeringScores = groups[projectId], total = _average(engineeringScores.map(function (row) { return row.total; })), grade = total === null ? { grade: '—', cls: 'none' } : _getGrade(total);
      var fenceScores = engineeringScores.reduce(function (all, row) { return all.concat(row.fenceScores); }, []);
      return {
        projectId: projectId, projectName: project.name, district: project.district || '', street: project.street || '',
        d1: _average(engineeringScores.map(function (row) { return _average(row.fenceScores.map(function (fence) { return fence.d1; })); })),
        d2: _average(engineeringScores.map(function (row) { return _average(row.fenceScores.map(function (fence) { return fence.d2; })); })),
        bonus: _average(engineeringScores.map(function (row) { return _average(row.fenceScores.map(function (fence) { return fence.bonus; })); })),
        total: total, grade: grade.grade, gradeCls: grade.cls, participated: total !== null,
        suggestions: self.getProjectScoreSuggestions(fenceScores),
        hoardingsCount: engineeringScores.reduce(function (sum, row) { return sum + row.hoardingsCount; }, 0), engineeringScores: engineeringScores
      };
    });
    results.sort(function (a, b) {
      if (a.total === null && b.total === null) return 0;
      if (a.total === null) return 1;
      if (b.total === null) return -1;
      return b.total - a.total;
    });
    return results;
  };
  window.MOCK_DATA.getScoreSummary = function (periodStart, periodEnd) {
    var scores = this.getProjectScores(periodStart, periodEnd);
    var result = { total: scores.length, excellent: 0, good: 0, warn: 0, poor: 0, newPoor: [], byDistrict: {} };
    scores.forEach(function (row) {
      if (!row.participated) { result.total--; return; }
      var key = row.grade === '优秀' ? 'excellent' : row.grade === '良好' ? 'good' : row.grade === '警示' ? 'warn' : 'poor';
      result[key]++;
      if (key === 'poor') result.newPoor.push(row);
      if (!result.byDistrict[row.district]) result.byDistrict[row.district] = { excellent: 0, good: 0, warn: 0, poor: 0 };
      result.byDistrict[row.district][key]++;
    });
    return result;
  };
})();
