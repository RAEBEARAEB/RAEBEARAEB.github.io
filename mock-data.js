/**
 * 围挡系统统一 Mock 数据层 — mock-data.js
 * 所有页面共享此数据源，通过 localStorage 实现跨页持久化
 */
(function () {
  var STORAGE_KEY = 'HOARDING_MOCK_DATA';

  function getInitialData() {
    return {
      version: 3,
      updatedAt: new Date().toISOString(),
      projects: [
        /* ── 项目 1：福田 ── */
        {
          id: 'p1',
          name: '福田中心区市政管网改造工程',
          district: '福田区',
          street: '福田街道',
          address: '福田区福华三路与金田路交汇处',
          lat: 22.548,
          lng: 114.061,
          status: '在建',
          buildUnit: '深圳市福田区建筑工务署',
          buildContact: '陈华 13700137001',
          constructUnit: '深圳市市政工程总公司',
          constructContact: '刘伟 13600136001',
          supervisorUnit: '深圳市合诚工程监理有限公司',
          regulatorUnit: '深圳市福田区住房和建设局',
          designUnit: '深圳市市政设计研究院有限公司',
          redlineGeo: [
            [22.545, 114.058],
            [22.551, 114.058],
            [22.551, 114.064],
            [22.545, 114.064]
          ],
          hoardings: [
            {
              id: 'WD-2026-0001',
              engineerName: '管道铺设工程',
              engStatus: '在建',
              fenceStatus: '设置中',
              issueStatus: '待整改',
              needVerify: '否',
              custodyStart: '2025-06-01',
              custodyEnd: '2026-12-31',
              planRemoveDate: '2027-06-30',
              setupDate: '2025-06-01',
              length: 320,
              height: 2.5,
              area: 156.8,
              material: '装配式钢结构喷绘围挡',
              fenceStyle: '标准型',
              publicityContent: '文明施工 安全第一',
              roadOccupation: '人行道',
              roadOccupationArea: 48,
              fenceResponsible: '刘伟',
              fenceResponsiblePhone: '13600136001',
              address: '福田区福华三路与金田路交汇处',
              gpsShape: [
                [22.549, 114.059],
                [22.551, 114.060],
                [22.551, 114.063],
                [22.549, 114.063]
              ],
              entrances: [
                { lat: 22.550, lng: 114.0595, name: '施工入口', type: 'vehicle' },
                { lat: 22.550, lng: 114.063, name: '消防通道', type: 'pedestrian' }
              ],
              defaultDemo: true,
              verifyRecords: [
                { id: 'vr1', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-05-12 09:30', type: '校核修正', content: '围挡长度校核，由300m修正为320m', field: '围挡长度', before: '300m', after: '320m' },
                { id: 'vr2', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-04-20 09:00', type: '校核通过', content: '围挡信息核实无误', field: '', before: '', after: '' }
              ],
              changeRecords: [
                { id: 'cr1', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-05-01 14:00', type: '变更操作', content: '围挡高度变更，由2.0m调整为2.5m', field: '围挡高度', before: '2.0m', after: '2.5m' },
                { id: 'cr2', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-03-20 10:00', type: '新增围挡', content: '新增围挡档案', field: '', before: '', after: '' }
              ],
              patrolRecords: [
                { id: 'pr2', date: '2026-05-07', time: '09:15', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr1', date: '2026-05-14', time: '14:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0002',
              engineerName: '沟槽开挖工程',
              engStatus: '在建',
              fenceStatus: '即将到期',
              issueStatus: '整改逾期',
              needVerify: '是',
              custodyStart: '2025-03-01',
              custodyEnd: '2026-05-31',
              planRemoveDate: '2026-05-31',
              setupDate: '2025-03-01',
              length: 260,
              height: 2.5,
              area: 130.0,
              material: '装配式钢结构喷绘围挡',
              fenceStyle: '标准型',
              publicityContent: '注意安全 请勿靠近',
              roadOccupation: '非机动车道',
              roadOccupationArea: 36,
              fenceResponsible: '刘伟',
              fenceResponsiblePhone: '13600136001',
              address: '福田区福华三路与金田路交汇处西侧',
              gpsShape: [
                [22.546, 114.059],
                [22.548, 114.059],
                [22.548, 114.061],
                [22.546, 114.061]
              ],
              entrances: [
                { lat: 22.547, lng: 114.059, name: '沟槽入口', type: 'vehicle' },
                { lat: 22.547, lng: 114.061, name: '人行通道', type: 'pedestrian' }
              ],
              defaultDemo: false,
              verifyRecords: [],
              changeRecords: [],
              patrolRecords: [
                { id: 'pr3', date: '2026-05-10', time: '10:00', inspector: '刘伟', result: '异常', issues: ['围挡高度不足'], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0003',
              engineerName: '道路恢复工程',
              engStatus: '停工',
              fenceStatus: '已到期',
              issueStatus: '正常',
              needVerify: '否',
              custodyStart: '2024-06-01',
              custodyEnd: '2025-06-01',
              planRemoveDate: '2025-06-01',
              setupDate: '2024-06-01',
              length: 180,
              height: 2.0,
              area: 90.0,
              material: '装配式PVC围挡',
              fenceStyle: '简易型',
              publicityContent: '施工区域 请绕行',
              roadOccupation: '机动车道',
              roadOccupationArea: 60,
              fenceResponsible: '刘伟',
              fenceResponsiblePhone: '13600136001',
              address: '福田区福华三路与金田路交汇处东侧',
              gpsShape: [
                [22.546, 114.062],
                [22.548, 114.062],
                [22.548, 114.064],
                [22.546, 114.064]
              ],
              entrances: [
                { lat: 22.547, lng: 114.062, name: '恢复区入口', type: 'vehicle' }
              ],
              defaultDemo: false,
              verifyRecords: [
                { id: 'vr3', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-05-05 16:00', type: '校核修正', content: '围挡状态标记为到期', field: '围挡状态', before: '设置中', after: '已到期' }
              ],
              changeRecords: [],
              patrolRecords: [
                { id: 'pr4', date: '2026-05-08', time: '11:00', inspector: '陈刚', result: '异常', issues: ['围挡材质不符合规范', '已到期未拆除'], panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' }
              ]
            }
          ]
        },
        /* ── 项目 2：南山 ── */
        {
          id: 'p2',
          name: '南山区科技园综合体项目',
          district: '南山区',
          street: '粤海街道',
          address: '南山区粤海街道科技南路18号',
          lat: 22.536,
          lng: 113.958,
          status: '在建',
          buildUnit: '深圳市南山科技园开发有限公司',
          buildContact: '李明 13800138001',
          constructUnit: '中建三局集团有限公司',
          constructContact: '王强 13900139001',
          supervisorUnit: '深圳市招商工程监理有限公司',
          regulatorUnit: '深圳市南山区住房和建设局',
          designUnit: '深圳市建筑设计研究总院有限公司',
          redlineGeo: [
            [22.533, 113.955],
            [22.539, 113.955],
            [22.539, 113.961],
            [22.533, 113.961]
          ],
          hoardings: [
            {
              id: 'WD-2026-0004',
              engineerName: '基坑围护工程',
              engStatus: '竣工验收',
              fenceStatus: '已到期',
              issueStatus: '正常',
              needVerify: '否',
              custodyStart: '2024-08-01',
              custodyEnd: '2025-08-01',
              planRemoveDate: '2025-08-01',
              setupDate: '2024-08-01',
              length: 450,
              height: 2.5,
              area: 225.0,
              material: '装配式钢结构喷绘围挡',
              fenceStyle: '标准型',
              publicityContent: '基坑施工 注意安全',
              roadOccupation: '人行道',
              roadOccupationArea: 55,
              fenceResponsible: '王强',
              fenceResponsiblePhone: '13900139001',
              address: '南山区粤海街道科技南路18号',
              gpsShape: [
                [22.537, 113.956],
                [22.539, 113.956],
                [22.539, 113.959],
                [22.537, 113.959]
              ],
              entrances: [
                { lat: 22.538, lng: 113.956, name: '基坑入口', type: 'vehicle' },
                { lat: 22.538, lng: 113.959, name: '材料通道', type: 'vehicle' }
              ],
              defaultDemo: false,
              verifyRecords: [],
              changeRecords: [],
              patrolRecords: [
                { id: 'pr5', date: '2026-05-12', time: '08:50', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' }
              ]
            },
            {
              id: 'WD-2026-0005',
              engineerName: '主体结构工程',
              engStatus: '在建',
              fenceStatus: '设置中',
              issueStatus: '正常',
              needVerify: '是',
              custodyStart: '2025-09-15',
              custodyEnd: '2027-06-30',
              planRemoveDate: '2027-06-30',
              setupDate: '2025-09-15',
              length: 380,
              height: 2.5,
              area: 190.0,
              material: '装配式钢结构喷绘围挡',
              fenceStyle: '标准型',
              publicityContent: '优质工程 精品建设',
              roadOccupation: '非机动车道',
              roadOccupationArea: 42,
              fenceResponsible: '王强',
              fenceResponsiblePhone: '13900139001',
              address: '南山区粤海街道科技南路18号',
              gpsShape: [
                [22.534, 113.956],
                [22.536, 113.956],
                [22.536, 113.959],
                [22.534, 113.959]
              ],
              entrances: [
                { lat: 22.535, lng: 113.956, name: '主体入口', type: 'vehicle' },
                { lat: 22.535, lng: 113.959, name: '消防通道', type: 'pedestrian' }
              ],
              defaultDemo: false,
              verifyRecords: [],
              changeRecords: [],
              patrolRecords: [
                { id: 'pr6', date: '2026-05-15', time: '14:20', inspector: '王工', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            }
          ]
        }
      ]
    };
  }

  /* ── 加载或初始化 ── */
  var CURRENT_VERSION = 4;
  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    var parsed = JSON.parse(stored);
    if (parsed.version >= CURRENT_VERSION) {
      window.MOCK_DATA = parsed;
    } else {
      window.MOCK_DATA = getInitialData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(window.MOCK_DATA));
    }
  } else {
    window.MOCK_DATA = getInitialData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(window.MOCK_DATA));
  }

  /* ── 持久化方法 ── */
  window.MOCK_DATA.save = function () {
    this.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this));
    console.log('[MOCK] 数据已保存', this.updatedAt);
  };

  window.MOCK_DATA.reset = function () {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  };

  /* ── 查询辅助 ── */
  function _each(cb) {
    (window.MOCK_DATA.projects || []).forEach(function (p) {
      (p.hoardings || []).forEach(function (h) {
        cb(h, p);
      });
    });
  }

  function _enrich(h, p) {
    var copy = {};
    for (var k in h) { if (h.hasOwnProperty(k)) copy[k] = h[k]; }
    copy.projectId = p.id;
    copy.projectName = p.name;
    copy.projectDistrict = p.district;
    copy.projectStreet = p.street;
    copy.projectAddress = p.address;
    copy.projectLat = p.lat;
    copy.projectLng = p.lng;
    copy.projectStatus = p.status;
    copy.buildUnit = p.buildUnit;
    copy.buildContact = p.buildContact;
    copy.constructUnit = p.constructUnit;
    copy.constructContact = p.constructContact;
    copy.supervisorUnit = p.supervisorUnit;
    copy.regulatorUnit = p.regulatorUnit;
    copy.designUnit = p.designUnit;
    copy.redlineGeo = p.redlineGeo;
    return copy;
  }

  /** 获取全部围挡（扁平数组，含项目信息） */
  window.MOCK_DATA.getHoardings = function () {
    var arr = [];
    _each(function (h, p) { arr.push(_enrich(h, p)); });
    return arr;
  };

  /** 按 ID 查找围挡 */
  window.MOCK_DATA.findHoard = function (hoardingId) {
    var found = null;
    _each(function (h, p) {
      if (h.id === hoardingId) found = _enrich(h, p);
    });
    return found;
  };

  /** 获取 defaultDemo 围挡 */
  window.MOCK_DATA.getDefaultDemo = function () {
    var found = null;
    _each(function (h, p) {
      if (h.defaultDemo && !found) found = _enrich(h, p);
    });
    return found;
  };

  /** 同项目其他围挡（用于 OTHER_FENCE_BLOCKS） */
  window.MOCK_DATA.getOtherHoardings = function (hoardingId) {
    var result = [];
    (this.projects || []).forEach(function (p) {
      var target = (p.hoardings || []).find(function (h) { return h.id === hoardingId; });
      if (target) {
        (p.hoardings || []).forEach(function (h) {
          if (h.id !== hoardingId) result.push(_enrich(h, p));
        });
      }
    });
    return result;
  };

  /** 按项目名+工程名查找 */
  window.MOCK_DATA.findByProjectAndEngineer = function (projName, engName) {
    var found = null;
    _each(function (h, p) {
      if (p.name === projName && h.engineerName === engName && !found) found = _enrich(h, p);
    });
    return found;
  };

  /** 按项目名查找所有围挡 */
  window.MOCK_DATA.findByProject = function (projName) {
    var arr = [];
    _each(function (h, p) {
      if (p.name === projName) arr.push(_enrich(h, p));
    });
    return arr;
  };

  /** 获取项目列表 */
  window.MOCK_DATA.getProjects = function () {
    return this.projects || [];
  };

  /** 更新围挡并持久化 */
  window.MOCK_DATA.updateHoard = function (hoardingId, updates) {
    _each(function (h) {
      if (h.id === hoardingId) {
        for (var k in updates) {
          if (updates.hasOwnProperty(k)) h[k] = updates[k];
        }
      }
    });
    this.save();
  };

  /** 新增围挡并持久化 */
  window.MOCK_DATA.addHoard = function (projectId, hoarding) {
    (this.projects || []).forEach(function (p) {
      if (p.id === projectId) {
        if (!p.hoardings) p.hoardings = [];
        p.hoardings.push(hoarding);
      }
    });
    this.save();
  };

  /** 生成下一个围挡编号 */
  window.MOCK_DATA.nextHoardId = function () {
    var max = 0;
    _each(function (h) {
      var m = h.id && h.id.match(/WD-\d{4}-(\d+)/);
      if (m) { var n = parseInt(m[1], 10); if (n > max) max = n; }
    });
    var y = new Date().getFullYear();
    return 'WD-' + y + '-' + String(max + 1).padStart(4, '0');
  };
})();

/* ═══════════ 属地管理扩展 — 街道巡查/问题上报 ═══════════ */
(function () {
  var STREET_PATROL_KEY = 'YZY_STREET_PATROLS';
  var STREET_ISSUE_KEY  = 'YZY_STREET_ISSUES';

  function _load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  }
  function _save(key, data) { try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {} }

  /** 围挡问题类型字典（属地管理 / 群众端共用） */
  window.MOCK_DATA.STREET_ISSUE_TYPES = [
    '围挡损毁','围挡倒塌','围挡倾斜','围挡缺失','围挡污损',
    '围挡占道超限','围挡超高不足','围挡基础松动','公益广告破损',
    '围挡安全隐患','应建未建围挡','其他'
  ];

  /** 获取问题类型字典 */
  window.MOCK_DATA.getStreetIssueTypes = function () {
    return this.STREET_ISSUE_TYPES;
  };

  /** 获取初始演示数据 */
  function _demoPatrols() {
    var now = new Date();
    function d(s) { var t = new Date(now); t.setDate(t.getDate() - s); return t.toISOString().slice(0,10); }
    return [
      { id: 'sp1', date: d(1), time: '09:15', inspector: '李伟', fenceId: 'WD-2026-0001', result: '正常', note: '' },
      { id: 'sp2', date: d(3), time: '14:30', inspector: '李伟', fenceId: 'WD-2026-0002', result: '异常', note: '围挡面板有明显破损，面积约0.5㎡' },
      { id: 'sp3', date: d(5), time: '10:00', inspector: '赵芳', fenceId: 'WD-2026-0003', result: '正常', note: '' }
    ];
  }
  function _demoIssues() {
    var now = new Date();
    function d(s) { var t = new Date(now); t.setDate(t.getDate() - s); return t.toISOString().slice(0,10); }
    function _img(w,h,txt,c1,c2) { return "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='"+w+"' height='"+h+"'><rect width='"+w+"' height='"+h+"' fill='"+c1+"'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='"+c2+"' font-family='sans-serif'>"+txt+"</text></svg>"); }
    return [
      { id: 'YZY-001', type: '围挡损毁', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡面板破裂约0.5㎡，金属框架外露存在安全风险', status: '待整改', source: '街道上报', reportTime: d(1)+' 08:30:15', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.060, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-002', type: '占道违规', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '施工材料大量占据人行道，行人被迫绕行机动车道，存在严重安全隐患', status: '退回整改', source: '群众上报', reportTime: d(3)+' 15:00:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.548, lng: 114.059, addr: '福田区福华三路西侧' } },
      { id: 'YZY-003', type: '围挡倒塌', fenceId: 'WD-2026-0003', fenceAddr: '南山区科技南路', details: '围挡整体向西侧倒塌约15米，底部基础完全裸露', status: '待审核', source: '监管巡查', reportTime: d(5)+' 10:15:30', engineerName: '道路恢复工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.537, lng: 113.952, addr: '南山区科技南路' } },
      { id: 'YZY-004', type: '围挡倾斜', fenceId: 'WD-2026-0004', fenceAddr: '南山区科技园路', details: '基坑围护工程围挡向东倾斜约10度，基础部分外露', status: '审核通过', source: '街道上报', reportTime: d(10)+' 11:00:00', engineerName: '基坑围护工程', responsibleUnit: '中建三局集团有限公司', photos: ['../围挡破损.png'], location: { lat: 22.535, lng: 113.948, addr: '南山区科技园路' } },
      { id: 'YZY-005', type: '围挡安全隐患', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡底部焊接点锈蚀严重，存在倒塌风险，限期整改已超15天未完成', status: '整改逾期', source: '街道上报', reportTime: d(15)+' 09:00:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.549, lng: 114.060, addr: '福田区福华三路' } },
      { id: 'YZY-006', type: '围挡缺失', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡局部缺失约2米，行人可穿行进入施工区域，存在安全隐患', status: '待接收', source: '街道上报', reportTime: d(0)+' 07:45:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.548, lng: 114.059, addr: '福田区福华三路西侧' } }
    ];
  }

  /** 按街道筛选围挡 */
  window.MOCK_DATA.getHoardingsByStreet = function (streetName) {
    var result = [];
    (this.getProjects() || []).forEach(function (p) {
      (p.hoardings || []).forEach(function (h) {
        if (streetName && p.street !== streetName) return;
        var f = {
          id: h.id, engineerName: h.engineerName, fenceStatus: h.fenceStatus,
          issueStatus: h.issueStatus, address: h.address || p.address,
          length: h.length, height: h.height, area: h.area,
          planRemoveDate: h.planRemoveDate, custodyStart: h.custodyStart, custodyEnd: h.custodyEnd,
          material: h.material, fenceResponsible: h.fenceResponsible,
          fenceResponsiblePhone: h.fenceResponsiblePhone,
          gpsShape: h.gpsShape, entrances: h.entrances,
          projectName: p.name, constructUnit: p.constructUnit,
          buildUnit: p.buildUnit, supervisorUnit: p.supervisorUnit,
          redlineGeo: p.redlineGeo, district: p.district, street: p.street
        };
        result.push(f);
      });
    });
    return result;
  };

  /** 街道巡查记录 */
  window.MOCK_DATA.getStreetPatrols = function () { return _load(STREET_PATROL_KEY, _demoPatrols()); };
  window.MOCK_DATA.addStreetPatrol = function (record) {
    var list = this.getStreetPatrols();
    record.id = 'sp' + (list.length + 1);
    list.unshift(record);
    _save(STREET_PATROL_KEY, list);
  };

  /** 街道问题上报 */
  window.MOCK_DATA.getStreetIssues = function () { return _load(STREET_ISSUE_KEY, _demoIssues()); };
  window.MOCK_DATA.addStreetIssue = function (issue) {
    var list = this.getStreetIssues();
    issue.id = 'YZY-' + String(list.length + 1).padStart(3, '0');
    issue.status = '待处理';
    issue.reportTime = new Date().toISOString().replace('T', ' ').slice(0, 16);
    list.unshift(issue);
    _save(STREET_ISSUE_KEY, list);
  };

  /** 按围挡ID查找围挡详情 */
  window.MOCK_DATA.findFenceById = function (fenceId) {
    var all = this.getHoardingsByStreet();
    for (var i = 0; i < all.length; i++) { if (all[i].id === fenceId) return all[i]; }
    return null;
  };
})();

/* ═══════════ 围挡问题闭环处置扩展 ═══════════ */
(function () {
  var CLOSURE_KEY = 'FENCE_ISSUE_CLOSURE';

  function _load() {
    try { var v = localStorage.getItem(CLOSURE_KEY); return v ? JSON.parse(v) : _demoData(); }
    catch (e) { return _demoData(); }
  }
  function _save(data) { try { localStorage.setItem(CLOSURE_KEY, JSON.stringify(data)); } catch (e) {} }

  function _demoData() {
    function _img(w,h,txt,c1,c2) { return "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='"+w+"' height='"+h+"'><rect width='"+w+"' height='"+h+"' fill='"+c1+"'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='"+c2+"' font-family='sans-serif'>"+txt+"</text></svg>"); }
    return {
      rectifications: {
        'YZY-002': { rectifier: '陈刚', rectifierUnit: '深圳市市政工程总公司', rectTime: '2026-06-02 10:15', desc: '已将占道施工材料全部清运至指定堆放区域，人行道恢复通行', photos: ['../围挡破损.png','../围挡破损.png'] },
        'YZY-003': { rectifier: '王强', rectifierUnit: '中建三局集团有限公司', rectTime: '2026-06-04 08:30', desc: '已重新加固围挡基础并扶正围挡面板，增设斜撑加固', photos: ['../围挡破损.png','../围挡破损.png'] },
        'YZY-004': { rectifier: '王强', rectifierUnit: '中建三局集团有限公司', rectTime: '2026-06-01 16:00', desc: '已对倾斜围挡进行全面校正，基础重新浇筑混凝土，增设三处斜撑杆', photos: ['../围挡破损.png'] }
      },
      audits: {
        'YZY-002': [
          { id: 'au2', auditor: '张建国', auditorUnit: '深圳市福田区住房和建设局', time: '2026-06-02 16:00', result: '退回整改', opinion: '清运后现场仍有少量建筑垃圾残留，请再次清理并拍照', photos: ['../围挡破损.png'] }
        ],
        'YZY-004': [
          { id: 'au4', auditor: '张建国', auditorUnit: '深圳市福田区住房和建设局', time: '2026-06-03 09:30', result: '审核通过', opinion: '整改措施到位，围挡稳固无安全隐患，审核通过', photos: ['../围挡破损.png','../围挡破损.png'] }
        ]
      }
    };
  }

  /** 获取所有待闭环问题（从街道上报中筛选本项目相关） */
  window.MOCK_DATA.getClosureIssues = function () {
    var issues = window.MOCK_DATA.getStreetIssues();
    // Enrich with project/engineering info and closure data
    var closureData = _load();
    issues.forEach(function (i) {
      if (i.fenceId) {
        var f = window.MOCK_DATA.findFenceById(i.fenceId);
        if (f) {
          i._projectName = f.projectName || '';
          i._constructUnit = f.constructUnit || '';
          i._street = f.street || '';
          i._district = f.district || '';
        }
      }
      if (!i._projectName) i._projectName = i.projectName || '';
      if (!i._constructUnit) i._constructUnit = i.responsibleUnit || '';
      if (!i.source) i.source = '街道上报';
      // Closure data
      i._rectification = (closureData.rectifications || {})[i.id] || null;
      i._audits = (closureData.audits || {})[i.id] || [];
    });
    return issues;
  };

  /** 获取单个问题闭环详情 */
  window.MOCK_DATA.getClosureDetail = function (issueId) {
    var issues = window.MOCK_DATA.getClosureIssues();
    for (var i = 0; i < issues.length; i++) {
      if (issues[i].id === issueId) return issues[i];
    }
    return null;
  };

  /** 提交整改 */
  window.MOCK_DATA.submitRectification = function (issueId, data) {
    var closureData = _load();
    if (!closureData.rectifications) closureData.rectifications = {};
    closureData.rectifications[issueId] = {
      rectifier: data.rectifier || '',
      rectifierUnit: data.rectifierUnit || '',
      rectTime: data.rectTime || new Date().toISOString().replace('T', ' ').slice(0, 16),
      desc: data.desc || '',
      photos: data.photos || []
    };
    _save(closureData);
    // Update issue status
    var allIssues = window.MOCK_DATA.getStreetIssues();
    for (var j = 0; j < allIssues.length; j++) {
      if (allIssues[j].id === issueId) { allIssues[j].status = '待审核'; break; }
    }
    window.MOCK_DATA._saveIssues(allIssues);
  };

  /** 提交审核 */
  window.MOCK_DATA.submitAudit = function (issueId, data) {
    var closureData = _load();
    if (!closureData.audits) closureData.audits = {};
    if (!closureData.audits[issueId]) closureData.audits[issueId] = [];
    closureData.audits[issueId].push({
      id: 'au' + (closureData.audits[issueId].length + 1),
      auditor: data.auditor || '',
      auditorUnit: data.auditorUnit || '',
      time: data.time || new Date().toISOString().replace('T', ' ').slice(0, 16),
      result: data.result || '审核通过',
      opinion: data.opinion || '',
      photos: data.photos || []
    });
    _save(closureData);
    // Update issue status based on audit result
    var allIssues = window.MOCK_DATA.getStreetIssues();
    for (var j = 0; j < allIssues.length; j++) {
      if (allIssues[j].id === issueId) {
        allIssues[j].status = data.result === '退回整改' ? '退回整改' : '审核通过';
        break;
      }
    }
    window.MOCK_DATA._saveIssues(allIssues);
  };

  /** 保存街道问题列表（内部使用） */
  window.MOCK_DATA._saveIssues = function (issues) {
    try { localStorage.setItem('YZY_STREET_ISSUES', JSON.stringify(issues)); } catch (e) {}
  };
})();
