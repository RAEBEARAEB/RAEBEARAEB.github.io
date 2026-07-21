/**
 * 围挡系统统一 Mock 数据层 — mock-data.js
 * 所有页面共享此数据源，通过 localStorage 实现跨页持久化
 */
(function () {
  var STORAGE_KEY = 'HOARDING_MOCK_DATA_V2';
  var now = new Date();
  function _d(s) { var t = new Date(now); t.setDate(t.getDate() - s); return t.toISOString().slice(0,10); }


    var _demoIssues = [
      { id: 'YZY-001', type: '围挡破损', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡面板破裂约0.5㎡，金属框架外露存在安全风险', status: '整改完成', source: '街道上报', reportTime: _d(1)+' 08:30:15', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.060, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-002', type: '围挡脏污', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡表面大面积泥浆污渍影响市容，面积约5㎡', status: '整改逾期', source: '监管巡查', reportTime: _d(7)+' 09:45:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.059, addr: '福田区福华三路西侧' } },
      { id: 'YZY-003', type: '围挡安全隐患', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡整体向西侧倒塌约15米，底部基础完全裸露', status: '待整改', source: '监管巡查', reportTime: _d(5)+' 10:15:30', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.546, lng: 114.060, addr: '福田区福华三路西侧' } },
      { id: 'YZY-011', type: '围挡基础松动', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '巡检中发现围挡底部基础螺栓松动3处，已当日加固修复', status: '整改完成', source: '项目巡检', reportTime: _d(8)+' 09:20:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.061, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-012', type: '围挡脏污', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '巡检中发现围挡表面有泥浆泼溅痕迹约2㎡，已清洗完毕', status: '整改完成', source: '项目巡检', reportTime: _d(9)+' 14:50:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.060, addr: '福田区福华三路西侧' } },
      { id: 'YZY-009', type: '应建未建围挡', fenceId: '', fenceAddr: '', details: '粤海街道科技南路与滨海大道交汇处，根据规划要求此处应设置围挡但至今未建', status: '待整改', source: '街道上报', reportTime: _d(4)+' 09:30:00', engineerName: '', responsibleUnit: '', street: '粤海街道', projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.538, lng: 113.955, addr: '南山区粤海街道科技南路与滨海大道交汇处' } },
      { id: 'YZY-010', type: '应建未建围挡', fenceId: '', fenceAddr: '', details: '黄贝街道深南东路北侧工地出入口处未按规定设置围挡，存在安全隐患', status: '待整改', source: '街道上报', reportTime: _d(6)+' 14:00:00', engineerName: '', responsibleUnit: '', street: '黄贝街道', projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.140, addr: '罗湖区黄贝街道深南东路北侧' } },
      { id: 'YZY-013', type: '围挡脏污', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡表面有大量泥浆泼溅，影响城市市容，请尽快清洗处理', status: '待整改', source: '街道上报', reportTime: _d(2)+' 15:20:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', street: '福田街道', photos: ['../围挡破损.png'], location: { lat: 22.548, lng: 114.062, addr: '福田区福华三路金田路口东侧' } },
      { id: 'YZY-014', type: '围挡缺失', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡西段缺失约8米，缺口处行人可随意进出施工区域，存在严重安全隐患', status: '待整改', source: '街道上报', reportTime: _d(3)+' 10:45:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', street: '福田街道', photos: ['../围挡破损.png'], location: { lat: 22.546, lng: 114.058, addr: '福田区福华三路西侧围挡缺口处' } },
      { id: 'YZY-015', type: '张贴小广告', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡立面被张贴大量小广告，面积约3㎡，影响市容整洁度', status: '整改逾期', source: '街道上报', reportTime: _d(9)+' 11:10:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', street: '福田街道', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.063, addr: '福田区福华三路中段' } },
      { id: 'YZY-016', type: '围挡安全隐患', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡面板连接处多处锈蚀严重，遇大风天气存在倒塌风险，需紧急加固', status: '待整改', source: '街道上报', reportTime: _d(1)+' 16:30:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', street: '福田街道', photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.060, addr: '福田区福华三路与金田路交汇处北侧' } },
      { id: 'YZY-017', type: '应建未建围挡', fenceId: '', fenceAddr: '', details: '粤海街道后海大道与创业路交叉口西南角，该处于2025年底完成拆迁后至今未设置施工围挡', status: '待整改', source: '街道上报', reportTime: _d(5)+' 08:50:00', engineerName: '', responsibleUnit: '', street: '粤海街道', projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.520, lng: 113.940, addr: '南山区粤海街道后海大道创业路口' } }
    ];

  function getInitialData() {
    var now = new Date();




    return {
      version: 44,
      updatedAt: new Date().toISOString(),
      projects: [
        /* ── 项目 1：福田 ── */
        {
          id: 'p1',
          name: '福田中心区市政管网改造工程',
          district: '福田区', street: '福田街道',
          address: '福田区福华三路与金田路交汇处',
          lat: 22.548, lng: 114.061, status: '在建',
          buildUnit: '深圳市福田区建筑工务署', buildContact: '陈华 13700137001',
          constructUnit: '深圳市市政工程总公司', constructContact: '刘伟 13600136001',
          supervisorUnit: '深圳市合诚工程监理有限公司',
          regulatorUnit: '深圳市福田区住房和建设局',
          designUnit: '深圳市市政设计研究院有限公司',
          redlineGeo: [[22.545,114.057],[22.552,114.057],[22.552,114.065],[22.545,114.065]],
          hoardings: [
            {
              id: 'WD-2026-0001', engineerName: '管道铺设工程', engStatus: '已竣工',
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
                { id: 'cr_ft_rm', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-04-30 16:00', type: '拆除操作', content: '管道铺设工程竣工，围挡已全部拆除', field: '围挡拆除', before: '已安装', after: '已拆除' }
              ],
              patrolRecords: [
                { id: 'pr2', date: '2026-05-07', time: '09:15', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr1', date: '2026-05-14', time: '14:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr8', date: '2026-05-02', time: '08:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr9', date: '2026-05-05', time: '10:00', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr10', date: '2026-05-09', time: '15:20', inspector: '刘伟', result: '异常', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.2㎡，不影响结构安全但需清洁'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr11', date: '2026-05-12', time: '09:00', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr12', date: '2026-05-16', time: '11:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0002', engineerName: '沟槽开挖工程', engStatus: '在建',
              constructUnit: '深圳市深建基坑工程有限公司', fenceStatus: '超期未拆',
              issueStatus: '整改逾期', needVerify: '是',
              custodyStart: '2025-03-01', custodyEnd: '2026-05-31',
              planRemoveDate: '2026-05-31', setupDate: '2025-03-01',
              length: 260, height: 2.5, area: 130.0,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准型',
              publicityContent: '注意安全 请勿靠近', roadOccupation: '非机动车道', roadOccupationArea: 36,
              fenceResponsible: '刘伟', fenceResponsiblePhone: '13600136001',
              address: '福田区福华三路与金田路交汇处西侧',
              gpsShape: [[22.546,114.059],[22.548,114.059],[22.548,114.061],[22.546,114.061]],
              entrances: [{lat:22.547,lng:114.059,name:'沟槽入口',type:'vehicle'},{lat:22.547,lng:114.061,name:'人行通道',type:'pedestrian'}],
              defaultDemo: false,
              verifyRecords: [{ id: 'vr_g1', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-04-22 10:15', type: '校核通过', content: '围挡材料变更核实无误，符合规范要求', changeId:'cr_g1', field: '围挡材质', before: '彩钢板', after: '装配式钢结构喷绘围挡' }],
              changeRecords: [
                { id: 'cr_g1', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-04-20 14:30', type: '变更操作', content: '围挡材质变更，由彩钢板调整为装配式钢结构喷绘围挡', field: '围挡材质', before: '彩钢板', after: '装配式钢结构喷绘围挡' }
              ],
              patrolRecords: [
                { id: 'pr3', date: '2026-05-10', time: '10:00', inspector: '刘伟', result: '异常', issues: [{type:'围挡尺寸不合规', unit:'深圳市市政工程总公司', detail:'围挡实测高度2.0m，低于规范要求的2.5m标准高度，需立即调整'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr16', date: '2026-05-03', time: '08:50', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' }
              ]
            }
          ]
        },
        /* ── 项目 2：南山 ── */
        {
          id: 'p2',
          name: '南山区科技园综合体项目',
          district: '南山区', street: '粤海街道',
          address: '南山区粤海街道科技南路18号',
          lat: 22.536, lng: 113.958, status: '在建',
          buildUnit: '深圳市南山科技园开发有限公司', buildContact: '李明 13800138001',
          constructUnit: '中建三局集团有限公司', constructContact: '王强 13900139001',
          supervisorUnit: '深圳市招商工程监理有限公司',
          regulatorUnit: '深圳市南山区住房和建设局',
          designUnit: '深圳市建筑设计研究总院有限公司',
          redlineGeo: [[22.532,113.954],[22.541,113.954],[22.541,113.962],[22.532,113.962]],
          hoardings: [
            {
              id: 'WD-2026-0001', engineerName: '绿化迁移工程', engStatus: '在建',
              constructUnit: '深圳市绿篱建设工程有限公司', fenceStatus: '超期未拆', issueStatus: '正常', needVerify: '否',
              custodyStart: '2025-09-01', custodyEnd: '2026-04-30',
              planRemoveDate: '2026-04-30', setupDate: '2025-09-01',
              length: 150, height: 2.0, area: 75.0,
              material: '仿真绿篱围挡', fenceStyle: '仿真绿篱',
              publicityContent: '绿美深圳 共建家园', roadOccupation: '人行道', roadOccupationArea: 30,
              fenceResponsible: '李明', fenceResponsiblePhone: '13800138001',
              address: '南山区科技南路18号东北角',
              gpsShape: [[22.536,113.959],[22.538,113.959],[22.538,113.961],[22.536,113.961]],
              entrances: [{lat:22.537,lng:113.959,name:'绿篱入口',type:'pedestrian'},{lat:22.537,lng:113.961,name:'材料通道',type:'temporary'}],
              defaultDemo: false,
              changeRecords: [
                { id: 'cr_ns1', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2025-09-01 08:00', type: '新增围挡', content: '绿化迁移工程开工，新建仿真绿篱围挡', field: '', before: '', after: '' },
                { id: 'cr_ns2', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2025-10-15 10:00', type: '移交操作', content: '土方回填工程施工完毕，围挡移交给绿化迁移工程沿用', field: '工程移交', before: '土方回填工程', after: '绿化迁移工程' }
              ],
              patrolRecords: [
                { id: 'pr_lh1', date: '2026-05-28', time: '09:00', inspector: '李明', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_lh2', date: '2026-06-10', time: '14:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' }
              ]
            },
            {
              id: 'WD-2026-0002', engineerName: '基坑支护工程', engStatus: '在建',
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
                { id: 'cr_jk1', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2026-06-01 08:00', type: '移交操作', content: '绿化迁移完成，围挡移交给基坑支护工程使用', field: '工程移交', before: '绿化迁移工程', after: '基坑支护工程' }
              ],
              patrolRecords: [
                { id: 'pr_jk1', date: '2026-06-05', time: '09:00', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_jk2', date: '2026-06-20', time: '14:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' }
              ]
            },
            {
              id: 'WD-2026-0003', engineerName: '土方回填工程', engStatus: '已竣工',
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
                { id: 'cr_tf1', changer: '李明', unit: '中建三局集团有限公司', role: '施工人员', date: '2025-06-25 09:00', type: '拆除操作', content: '土方回填工程竣工，围挡已拆除并清运完毕', field: '围挡拆除', before: '已安装', after: '已拆除' },
                { id: 'cr_tf2', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2024-03-01 08:00', type: '新增围挡', content: '土方回填工程开工，新建施工围挡', field: '', before: '', after: '' }
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
          name: '龙华区民治街道学校扩建项目',
          district: '龙华区', street: '民治街道',
          address: '龙华区民治街道民丰路88号',
          lat: 22.628, lng: 114.042, status: '在建',
          buildUnit: '深圳市龙华区建筑工务署', buildContact: '赵刚 13800138003',
          constructUnit: '深圳市建工集团股份有限公司', constructContact: '周文 13900139003',
          supervisorUnit: '深圳市广通工程监理有限公司',
          regulatorUnit: '深圳市龙华区住房和建设局',
          designUnit: '深圳市建筑设计研究总院有限公司',
          redlineGeo: [[22.625,114.038],[22.632,114.038],[22.632,114.046],[22.625,114.046]],
          hoardings: [
            {
              id: 'WD-2026-0004', engineerName: '教学楼主体工程', engStatus: '在建',
              fenceStatus: '已安装', issueStatus: '正常', needVerify: '否',
              custodyStart: '2026-02-01', custodyEnd: '2027-08-31',
              planRemoveDate: '2027-08-31', setupDate: '2026-02-01',
              length: 180, height: 2.5, area: 90.0,
              material: '装配式钢结构喷绘围挡', fenceStyle: '标准化围挡',
              publicityContent: '教育为本 安全为先', roadOccupation: '人行道', roadOccupationArea: 25,
              fenceResponsible: '周文', fenceResponsiblePhone: '13900139003',
              address: '龙华区民治街道民丰路88号',
              gpsShape: [[22.627,114.041],[22.630,114.041],[22.630,114.044],[22.627,114.044]],
              entrances: [{lat:22.628,lng:114.041,name:'主入口',type:'vehicle'},{lat:22.628,lng:114.044,name:'人行通道',type:'pedestrian'}],
              defaultDemo: false,
              changeRecords: [
                { id: 'cr_lh1', changer: '周文', unit: '深圳市建工集团股份有限公司', role: '施工人员', date: '2026-02-01 09:00', type: '新增围挡', content: '教学楼主体工程开工，新建施工围挡', field: '', before: '', after: '' }
              ],
              patrolRecords: [
                { id: 'pr_lh1', date: '2026-07-15', time: '09:00', inspector: '周文', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_lh2', date: '2026-06-20', time: '14:30', inspector: '赵巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' }
              ]
            }
          ]
        }
      ]
    };
  }

  /* ── 加载或初始化 ── */
  var CURRENT_VERSION = 43;
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
  window.MOCK_DATA.getClosureIssues = function () {
    var all = [];
    try { var raw = localStorage.getItem('YZY_STREET_ISSUES'); if (raw) all = JSON.parse(raw); } catch (e) {}
    all = all.concat(_demoIssues);
    all.forEach(function (i) { i._unregistered = !i.fenceId && !i._projectName; });
    return all;
  };
  window.MOCK_DATA.getClosureDetail = function (issueId) {
    return window.MOCK_DATA.getClosureIssues().find(function (i) { return i.id === issueId; });
  };
  window.MOCK_DATA.getStreetIssues = function () {
    return window.MOCK_DATA.getClosureIssues();
  };
  window.MOCK_DATA.getStreetIssueTypes = function () {
    return ['围挡破损','围挡脏污','围挡缺失','围挡基础松动','围挡占道超限','张贴小广告','应建未建围挡','公益广告污损','公益广告内容不合时宜','公益广告画面不连贯影响整体美观','围挡安全隐患','围挡喷淋不符合要求','围挡二维码内容不全','无围挡维护责任人信息','其他'];
  };

  /* ═══ Project Scores ═══ */
  function _daysInMonth(y, m) { return new Date(y, m, 0).getDate(); }
  function _getGrade(s) {
    if (s >= 85) return { grade: '优秀', cls: 'excellent', icon: '🏆' };
    if (s >= 70) return { grade: '良好', cls: 'good', icon: '✅' };
    if (s >= 55) return { grade: '警示', cls: 'warn', icon: '⚠️' };
    return { grade: '差', cls: 'poor', icon: '❌' };
  }
  window.MOCK_DATA.getProjectScores = function (year, month) {
    var now = new Date(); if (!year) year = now.getFullYear(); if (!month) month = now.getMonth() + 1;
    var days = _daysInMonth(year, month);
    var expectedPatrolDays = Math.round(days * 0.6);
    var monthPrefix = year + '-' + String(month).padStart(2, '0');
    var projects = this.getProjects();
    var allHoards = this.getHoardings();
    var issues = this.getStreetIssues();
    var results = [];
    projects.forEach(function (proj) {
      var projHoards = allHoards.filter(function (h) { return h.projectName === proj.name; });
      var hasFence = projHoards.length > 0 ? 10 : 0;
      var pDates = {};
      projHoards.forEach(function (h) { (h.patrolRecords || []).forEach(function (p) { if (p.date && p.date.indexOf(monthPrefix) === 0) pDates[p.date] = true; }); });
      var actualDays = Object.keys(pDates).length;
      var patrolRate = expectedPatrolDays > 0 ? Math.min(1, actualDays / expectedPatrolDays) : 0;
      var patrolScore = Math.round(30 * patrolRate);
      var d1 = hasFence === 0 ? 0 : (hasFence + patrolScore);
      var self = 0, supervisor = 0, street = 0;
      projHoards.forEach(function (h) { issues.forEach(function (iss) { if (iss.fenceId === h.id) { if (iss.source === '项目巡检') self++; else if (iss.source === '监管巡查') supervisor++; else if (iss.source === '街道上报') street++; } }); });
      var totalF = self + supervisor + street;
      var discRate = totalF > 0 ? self / totalF : 0;
      var discScore = Math.round(30 * discRate);
      var tR = 0, cR = 0;
      projHoards.forEach(function (h) { issues.forEach(function (iss) { if (iss.fenceId === h.id) { tR++; if (iss.status === '整改完成' || iss.status === '已通过') cR++; } }); });
      var rectRate = tR > 0 ? cR / tR : 1;
      var rectScore = Math.round(30 * rectRate);
      var d2 = d1 === 0 ? 0 : (discScore + rectScore);
      var total = d1 + d2;
      var grade = _getGrade(total);
      var sug = [];
      if (hasFence === 0) sug.push('您的项目尚未录入围挡信息，请尽快在围挡档案管理中完成围挡登记');
      else {
        if (patrolRate < 0.5) sug.push('您的日常巡检频率偏低（当前' + actualDays + '天/应巡检' + expectedPatrolDays + '天），建议加强日常巡检频次');
        if (discRate < 0.5 && totalF > 0) sug.push('您的自查问题发现率较低，建议巡检中加强对围挡破损、脏污等常见问题的关注');
        if (rectRate < 0.7 && tR > 0) sug.push('您的整改及时率较低，建议收到整改通知后48小时内完成整改');
      }
      if (!sug.length) sug.push('各项指标表现良好，请继续保持当前管理水平和巡检习惯');
      results.push({ projectId: proj.id, projectName: proj.name, district: proj.district || '', d1: d1, d2: d2, total: total, grade: grade.grade, gradeCls: grade.cls, suggestions: sug, hoardingsCount: projHoards.length });
    });
    results.sort(function (a, b) { return a.total - b.total; });
    return results;
  };
  window.MOCK_DATA.getScoreSummary = function () {
    var s = this.getProjectScores();
    var r = { total: s.length, excellent: 0, good: 0, warn: 0, poor: 0, newPoor: [], byDistrict: {} };
    s.forEach(function (x) {
      if (x.grade === '优秀') r.excellent++; else if (x.grade === '良好') r.good++; else if (x.grade === '警示') r.warn++; else { r.poor++; r.newPoor.push(x); }
      if (!r.byDistrict[x.district]) r.byDistrict[x.district] = { excellent: 0, good: 0, warn: 0, poor: 0 };
      if (x.grade === '优秀') r.byDistrict[x.district].excellent++;
      else if (x.grade === '良好') r.byDistrict[x.district].good++;
      else if (x.grade === '警示') r.byDistrict[x.district].warn++;
      else r.byDistrict[x.district].poor++;
    });
    return r;
  };
})();
