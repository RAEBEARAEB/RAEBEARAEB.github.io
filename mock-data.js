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
              material: '彩钢板',
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
                { id: 'pr1', date: '2026-05-14', inspector: '刘伟', result: '正常', issues: [] },
                { id: 'pr2', date: '2026-05-07', inspector: '陈刚', result: '正常', issues: [] }
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
              material: '彩钢板',
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
                { id: 'pr3', date: '2026-05-10', inspector: '刘伟', result: '异常', issues: ['围挡高度不足'] }
              ]
            },
            {
              id: 'WD-2026-0003',
              engineerName: '道路恢复工程',
              engStatus: '停工',
              fenceStatus: '已超期',
              issueStatus: '正常',
              needVerify: '否',
              custodyStart: '2024-06-01',
              custodyEnd: '2025-06-01',
              planRemoveDate: '2025-06-01',
              setupDate: '2024-06-01',
              length: 180,
              height: 2.0,
              area: 90.0,
              material: '水马',
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
                { id: 'vr3', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-05-05 16:00', type: '校核修正', content: '围挡状态标记为超期', field: '围挡状态', before: '设置中', after: '已超期' }
              ],
              changeRecords: [],
              patrolRecords: [
                { id: 'pr4', date: '2026-05-08', inspector: '陈刚', result: '异常', issues: ['围挡材质不符合规范', '已超期未拆除'] }
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
              material: '彩钢板',
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
              patrolRecords: []
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
              material: '彩钢板',
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
              patrolRecords: []
            }
          ]
        }
      ]
    };
  }

  /* ── 加载或初始化 ── */
  var CURRENT_VERSION = 3;
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
