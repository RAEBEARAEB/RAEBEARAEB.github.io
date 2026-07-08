/**
 * 围挡系统统一 Mock 数据层 — mock-data.js
 * 所有页面共享此数据源，通过 localStorage 实现跨页持久化
 */
(function () {
  var STORAGE_KEY = 'HOARDING_MOCK_DATA';

  function getInitialData() {
    return {
      version: 21,
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
              fenceStatus: '已安装',
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
                { id: 'vr1', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-05-12 09:30', type: '校核不通过', content: '围挡长度校核，由300m修正为320m', changeId:'cr1', field: '围挡长度', before: '300m', after: '320m' },
                { id: 'vr2', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-04-20 09:00', type: '校核通过', content: '围挡信息核实无误', changeId:'cr2', field: '', before: '', after: '' },
                { id: 'vr3', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-06-09 10:00', type: '校核不通过', content: '围挡范围图斑变更校核，确认新增出入口位置符合规划要求', changeId:'cr3', field: '围挡范围 · 出入口', before: '（地图对比）', after: '（地图对比）' }
              ],
              changeRecords: [
                { id: 'cr1', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-05-01 14:00', type: '变更操作', content: '围挡高度变更，由2.0m调整为2.5m', field: '围挡高度', before: '2.0m', after: '2.5m' },
                { id: 'cr2', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-03-20 10:00', type: '新增围挡', content: '新增围挡档案', field: '', before: '', after: '' },
                { id: 'cr3', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-06-08 09:30', type: '变更操作', content: '围挡范围图斑调整，新增1处出入口', field: '围挡范围 · 出入口', before: '（地图对比）', after: '（地图对比）' }
              ],
              patrolRecords: [
                { id: 'pr2', date: '2026-05-07', time: '09:15', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr1', date: '2026-05-14', time: '14:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr8', date: '2026-05-02', time: '08:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr9', date: '2026-05-05', time: '10:00', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr10', date: '2026-05-09', time: '15:20', inspector: '刘伟', result: '异常', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.2㎡，不影响结构安全但需清洁'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr11', date: '2026-05-12', time: '09:00', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr12', date: '2026-05-16', time: '11:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr13', date: '2026-05-20', time: '08:00', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr14', date: '2026-05-23', time: '14:15', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr15', date: '2026-05-26', time: '10:45', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr27', date: '2026-06-14', time: '09:30', inspector: '刘伟', result: '异常', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因大风天气导致局部变形约0.8㎡，面板连接处出现松动，需更换面板并加固连接件'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr42', date: '2026-06-22', time: '09:15', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr47', date: '2026-06-22', time: '15:40', inspector: '刘伟', result: '异常', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'下午巡查发现围挡面板有新增泥浆泼溅痕迹约1.5㎡，疑为附近施工车辆经过溅起'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },

                { id: 'pr_gen_5000', date: '2026-06-25', time: '08:25', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5005', date: '2026-06-27', time: '08:27', inspector: '王强', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5010', date: '2026-06-28', time: '08:28', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5015', date: '2026-06-30', time: '08:30', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5020', date: '2026-07-02', time: '08:02', inspector: '陈刚', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5025', date: '2026-07-03', time: '08:03', inspector: '刘伟', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5030', date: '2026-07-05', time: '08:05', inspector: '李巡检', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5035', date: '2026-07-07', time: '08:07', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5040', date: '2026-07-08', time: '08:08', inspector: '刘伟', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5045', date: '2026-07-10', time: '08:10', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5050', date: '2026-07-12', time: '08:12', inspector: '李巡检', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5055', date: '2026-07-13', time: '08:13', inspector: '王强', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5060', date: '2026-07-15', time: '08:15', inspector: '刘伟', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5065', date: '2026-07-17', time: '08:17', inspector: '刘伟', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5070', date: '2026-07-18', time: '08:18', inspector: '陈刚', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5075', date: '2026-07-20', time: '08:20', inspector: '王强', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5080', date: '2026-07-22', time: '08:22', inspector: '刘伟', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5085', date: '2026-07-23', time: '08:23', inspector: '陈刚', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5090', date: '2026-07-25', time: '08:25', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5095', date: '2026-07-27', time: '08:27', inspector: '王强', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5100', date: '2026-07-28', time: '08:28', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5105', date: '2026-07-30', time: '08:30', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5500', date: '2026-06-23', time: '09:15', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0002',
              engineerName: '沟槽开挖工程',
              engStatus: '在建',
              fenceStatus: '已到期',
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
              verifyRecords: [
                { id: 'vr_g1', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-04-22 10:15', type: '校核通过', content: '围挡材料变更核实无误，符合规范要求', changeId:'cr_g1', field: '围挡材质', before: '彩钢板', after: '装配式钢结构喷绘围挡' }
              ],
              changeRecords: [
                { id: 'cr_g1', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-04-20 14:30', type: '变更操作', content: '围挡材质变更，由彩钢板调整为装配式钢结构喷绘围挡', field: '围挡材质', before: '彩钢板', after: '装配式钢结构喷绘围挡' },
                { id: 'cr_g2', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-06-12 09:00', type: '变更操作', content: '围挡风格变更，由标准型调整为生态仿真绿篱型', field: '围挡风格', before: '标准型', after: '仿真绿篱' },
                { id: 'cr_g3', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-07-01 10:30', type: '变更操作', content: '围挡范围图斑调整，缩减北侧边界，新增1处材料通道出入口', field: '围挡范围 · 出入口', before: '（地图对比）', after: '（地图对比）' }
              ],
              patrolRecords: [
                { id: 'pr3', date: '2026-05-10', time: '10:00', inspector: '刘伟', result: '异常', issues: [{type:'围挡尺寸不合规', unit:'深圳市市政工程总公司', detail:'围挡实测高度2.0m，低于规范要求的2.5m标准高度，需立即调整'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr16', date: '2026-05-03', time: '08:50', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr17', date: '2026-05-06', time: '14:00', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr18', date: '2026-05-13', time: '09:30', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr19', date: '2026-05-17', time: '16:00', inspector: '刘伟', result: '异常', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡面板之间连接螺栓松动3处，连接件存在脱落风险，需紧固或更换'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr20', date: '2026-05-21', time: '10:20', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr21', date: '2026-05-24', time: '13:15', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr22', date: '2026-05-27', time: '09:10', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr28', date: '2026-06-13', time: '10:00', inspector: '陈刚', result: '异常', issues: [{type:'围挡公益广告脱落', unit:'深圳市市政工程总公司', detail:'围挡外侧公益广告喷绘布因连日降雨导致大面积脱胶起泡约3㎡，公益广告内容已无法看清，影响市容市貌，需重新制作更换喷绘布面'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr43', date: '2026-06-22', time: '10:00', inspector: '陈刚', result: '异常', issues: [{type:'围挡公益广告脱落', unit:'深圳市市政工程总公司', detail:'围挡外侧公益广告喷绘布大面积脱胶起泡约3㎡'},{type:'围挡尺寸不合规', unit:'深圳市市政工程总公司', detail:'围挡实测高度2.0m，低于规范要求的2.5m标准高度'}], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' }
              ,
                { id: 'pr_gen_5001', date: '2026-06-24', time: '09:37', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5006', date: '2026-06-26', time: '09:39', inspector: '王强', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5011', date: '2026-06-28', time: '09:41', inspector: '刘伟', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5016', date: '2026-06-29', time: '09:42', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5021', date: '2026-07-01', time: '09:14', inspector: '陈刚', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5026', date: '2026-07-03', time: '09:16', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5031', date: '2026-07-04', time: '09:17', inspector: '李巡检', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5036', date: '2026-07-06', time: '09:19', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有泥浆污渍约0.5㎡，需清洁处理'}] },
                { id: 'pr_gen_5041', date: '2026-07-08', time: '09:21', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5046', date: '2026-07-09', time: '09:22', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5051', date: '2026-07-11', time: '09:24', inspector: '李巡检', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5056', date: '2026-07-13', time: '09:26', inspector: '陈刚', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5061', date: '2026-07-14', time: '09:27', inspector: '刘伟', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5066', date: '2026-07-16', time: '09:29', inspector: '刘伟', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5071', date: '2026-07-18', time: '09:31', inspector: '李巡检', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5076', date: '2026-07-19', time: '09:32', inspector: '王强', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5081', date: '2026-07-21', time: '09:34', inspector: '刘伟', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5086', date: '2026-07-23', time: '09:36', inspector: '刘伟', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5091', date: '2026-07-24', time: '09:37', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5096', date: '2026-07-26', time: '09:39', inspector: '王强', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5101', date: '2026-07-28', time: '09:41', inspector: '刘伟', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5106', date: '2026-07-29', time: '09:42', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5111', date: '2026-07-31', time: '09:44', inspector: '陈刚', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
              
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
                { id: 'vr3', verifier: '张建国', unit: '深圳市福田区住房和建设局', role: '监管人员', date: '2026-05-05 16:00', type: '校核不通过', content: '围挡状态已更新为到期，核实无误', changeId:'cr_rd1', field: '围挡状态', before: '已安装', after: '已到期' }
              ],
              changeRecords: [
                { id: 'cr_rd1', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-05-04 11:00', type: '变更操作', content: '围挡状态变更，由已安装调整为已到期', field: '围挡状态', before: '已安装', after: '已到期' },
                { id: 'cr_rd2', changer: '刘伟', unit: '深圳市市政工程总公司', role: '施工人员', date: '2026-06-15 10:00', type: '变更操作', content: '计划拆除日期变更，申请延期至2026-09-30', field: '计划拆除时间', before: '2025-06-01', after: '2026-09-30' }
              ],
              patrolRecords: [
                { id: 'pr4', date: '2026-05-08', time: '11:00', inspector: '陈刚', result: '异常', issues: [{type:'围挡材质不符合规范', unit:'深圳市市政工程总公司', detail:'现场围挡使用PVC材质，不符合装配式钢结构喷绘围挡的设计要求，需更换为规范材质'},{type:'围挡已到期除', unit:'深圳市市政工程总公司', detail:'该围挡已于2025-06-01到期，至今未拆除，属于超期围挡，需立即拆除或办理延期手续'}], panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr23', date: '2026-05-18', time: '08:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr24', date: '2026-05-22', time: '15:00', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr25', date: '2026-05-25', time: '10:30', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr26', date: '2026-05-28', time: '09:45', inspector: '陈刚', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr29', date: '2026-06-15', time: '08:30', inspector: '刘伟', result: '异常', issues: [{type:'围挡喷淋系统失效', unit:'深圳市市政工程总公司', detail:'围挡顶端喷淋降尘系统管道破裂导致水压不足，仅1/3喷头正常出水，无法满足降尘要求，需整体检修喷淋管道及更换破损管段'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ,
                { id: 'pr_gen_5002', date: '2026-06-24', time: '10:50', inspector: '李巡检', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5007', date: '2026-06-25', time: '10:51', inspector: '王强', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5012', date: '2026-06-27', time: '10:53', inspector: '刘伟', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5017', date: '2026-06-29', time: '10:55', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5022', date: '2026-06-30', time: '10:56', inspector: '陈刚', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5027', date: '2026-07-02', time: '10:28', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5032', date: '2026-07-04', time: '10:30', inspector: '王强', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5037', date: '2026-07-05', time: '10:31', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5042', date: '2026-07-07', time: '10:33', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5047', date: '2026-07-09', time: '10:35', inspector: '陈刚', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5052', date: '2026-07-10', time: '10:36', inspector: '李巡检', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5057', date: '2026-07-12', time: '10:38', inspector: '陈刚', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有泥浆污渍约0.5㎡，需清洁处理'}] },
                { id: 'pr_gen_5062', date: '2026-07-14', time: '10:40', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5067', date: '2026-07-15', time: '10:41', inspector: '刘伟', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5072', date: '2026-07-17', time: '10:43', inspector: '李巡检', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有泥浆污渍约0.5㎡，需清洁处理'}] },
                { id: 'pr_gen_5077', date: '2026-07-19', time: '10:45', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5082', date: '2026-07-20', time: '10:46', inspector: '刘伟', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5087', date: '2026-07-22', time: '10:48', inspector: '刘伟', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5092', date: '2026-07-24', time: '10:50', inspector: '李巡检', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5097', date: '2026-07-25', time: '10:51', inspector: '王强', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡面板变形', unit:'深圳市市政工程总公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5102', date: '2026-07-27', time: '10:53', inspector: '刘伟', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'深圳市市政工程总公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5107', date: '2026-07-29', time: '10:55', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5112', date: '2026-07-30', time: '10:56', inspector: '陈刚', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡基础松动', unit:'深圳市市政工程总公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
              
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
              verifyRecords: [
                { id: 'vr_k1', verifier: '张建国', unit: '深圳市南山区住房和建设局', role: '监管人员', date: '2026-05-20 09:30', type: '校核通过', content: '围挡范围图斑调整及新增出入口核实无误，予以通过', changeId:'cr_k1', field: '围挡范围 · 出入口', before: '（地图对比）', after: '（地图对比）' }
              ],
              changeRecords: [
                { id: 'cr_k1', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2026-05-18 15:00', type: '变更操作', content: '围挡范围图斑调整，新增1处材料通道出入口', field: '围挡范围 · 出入口', before: '（地图对比）', after: '（地图对比）' },
                { id: 'cr_k2', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2026-06-10 08:30', type: '变更操作', content: '围挡高度变更，由2.5m调整为3.0m', field: '围挡高度', before: '2.5m', after: '3.0m' }
              ],
              patrolRecords: [
                { id: 'pr5', date: '2026-05-12', time: '08:50', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr30', date: '2026-05-18', time: '14:00', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr31', date: '2026-05-22', time: '09:00', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr32', date: '2026-05-28', time: '15:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr33', date: '2026-06-03', time: '10:00', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr34', date: '2026-06-08', time: '08:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr35', date: '2026-06-16', time: '11:20', inspector: '王强', result: '异常', issues: [{type:'围挡基础沉降', unit:'中建三局集团有限公司', detail:'基坑围护工程围挡东南角基础出现不均匀沉降约5cm，围挡立柱倾斜约8度，面板间缝隙增大，需要对沉降区域进行注浆加固并校正立柱垂直度'}], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr45', date: '2026-06-22', time: '11:20', inspector: '王强', result: '异常', issues: [{type:'围挡基础沉降', unit:'中建三局集团有限公司', detail:'基坑围护工程围挡东南角基础出现不均匀沉降约5cm，围挡立柱倾斜约8度'}], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr48', date: '2026-06-22', time: '16:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' }
              ,
                { id: 'pr_gen_5003', date: '2026-06-25', time: '11:04', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5008', date: '2026-06-26', time: '11:05', inspector: '刘伟', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'中建三局集团有限公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5013', date: '2026-06-28', time: '11:07', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5018', date: '2026-06-30', time: '11:09', inspector: '李巡检', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5023', date: '2026-07-01', time: '11:40', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'中建三局集团有限公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5028', date: '2026-07-03', time: '11:42', inspector: '王强', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡面板变形', unit:'中建三局集团有限公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5033', date: '2026-07-05', time: '11:44', inspector: '刘伟', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'中建三局集团有限公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5038', date: '2026-07-06', time: '11:45', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5043', date: '2026-07-08', time: '11:47', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'中建三局集团有限公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5048', date: '2026-07-10', time: '11:49', inspector: '王强', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡面板变形', unit:'中建三局集团有限公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5053', date: '2026-07-11', time: '11:50', inspector: '陈刚', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5058', date: '2026-07-13', time: '11:52', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5063', date: '2026-07-15', time: '11:54', inspector: '陈刚', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡基础松动', unit:'中建三局集团有限公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5068', date: '2026-07-16', time: '11:55', inspector: '李巡检', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5073', date: '2026-07-18', time: '11:57', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5078', date: '2026-07-20', time: '11:59', inspector: '陈刚', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5083', date: '2026-07-21', time: '11:00', inspector: '刘伟', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5088', date: '2026-07-23', time: '11:02', inspector: '李巡检', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡脏污', unit:'中建三局集团有限公司', detail:'围挡面板表面有泥浆污渍约0.5㎡，需清洁处理'}] },
                { id: 'pr_gen_5093', date: '2026-07-25', time: '11:04', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5098', date: '2026-07-26', time: '11:05', inspector: '刘伟', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡脏污', unit:'中建三局集团有限公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5103', date: '2026-07-28', time: '11:07', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5108', date: '2026-07-30', time: '11:09', inspector: '李巡检', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5113', date: '2026-07-31', time: '11:10', inspector: '王强', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡面板变形', unit:'中建三局集团有限公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
              
                { id: 'pr_gen_5503', date: '2026-06-23', time: '16:20', inspector: '刘伟', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0007',
              engineerName: '绿化迁移工程',
              engStatus: '在建',
              fenceStatus: '已安装',
              issueStatus: '正常',
              needVerify: '否',
              custodyStart: '2025-09-01',
              custodyEnd: '2026-08-15',
              planRemoveDate: '2026-07-25',
              setupDate: '2025-09-01',
              length: 150,
              height: 2.0,
              area: 75.0,
              material: '仿真绿篱围挡',
              fenceStyle: '仿真绿篱',
              publicityContent: '绿美深圳 共建家园',
              roadOccupation: '人行道',
              roadOccupationArea: 30,
              fenceResponsible: '李明',
              fenceResponsiblePhone: '13800138001',
              address: '南山区科技南路18号东北角',
              gpsShape: [
                [22.536, 113.959],
                [22.538, 113.959],
                [22.538, 113.961],
                [22.536, 113.961]
              ],
              entrances: [
                { lat: 22.537, lng: 113.959, name: '绿篱入口', type: 'pedestrian' },
                { lat: 22.537, lng: 113.961, name: '材料通道', type: 'temporary' }
              ],
              defaultDemo: false,
              patrolRecords: [
                { id: 'pr_lh1', date: '2026-05-28', time: '09:00', inspector: '李明', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_lh2', date: '2026-06-10', time: '14:30', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_lh3', date: '2026-06-22', time: '08:45', inspector: '李明', result: '正常', issues: [], panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_lh4', date: '2026-07-02', time: '10:15', inspector: '李明', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            },
            {
              id: 'WD-2026-0005',
              engineerName: '主体结构工程',
              engStatus: '在建',
              fenceStatus: '已安装',
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
              verifyRecords: [
                { id: 'vr_z1', verifier: '张建国', unit: '深圳市南山区住房和建设局', role: '监管人员', date: '2026-06-02 14:00', type: '校核通过', content: '宣传画内容变更核实无误，符合城市管理要求', changeId:'cr_z1', field: '宣传画/公益广告', before: '优质工程 精品建设', after: '文明城市 · 绿色施工' }
              ],
              changeRecords: [
                { id: 'cr_z1', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2026-06-01 10:00', type: '变更操作', content: '围挡宣传画内容更新，由“优质工程 精品建设”调整为“文明城市 · 绿色施工”', field: '宣传画/公益广告', before: '优质工程 精品建设', after: '文明城市 · 绿色施工' },
                { id: 'cr_z2', changer: '王强', unit: '中建三局集团有限公司', role: '施工人员', date: '2026-06-14 16:00', type: '变更操作', content: '围挡占道范围变更，人行道占用宽度由2m调整为3m，新增非机动车道临时占道', field: '占道范围', before: '人行道局部占道', after: '人行道+非机动车道临时占道' }
              ],
              patrolRecords: [
                { id: 'pr6', date: '2026-05-15', time: '14:20', inspector: '王工', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr36', date: '2026-05-20', time: '10:00', inspector: '王工', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr37', date: '2026-05-25', time: '14:00', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr38', date: '2026-05-30', time: '09:30', inspector: '王工', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr39', date: '2026-06-05', time: '15:00', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr40', date: '2026-06-10', time: '08:00', inspector: '王工', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr41', date: '2026-06-17', time: '10:30', inspector: '李巡检', result: '异常', issues: [{type:'围挡占道超限', unit:'中建三局集团有限公司', detail:'主体结构工程围挡外堆放的钢筋加工成品超出占道许可范围约4m，严重挤占非机动车道，影响早晚高峰非机动车通行安全，需立即清理超占区域'}], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ,
                { id: 'pr_gen_5004', date: '2026-06-24', time: '08:16', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5009', date: '2026-06-26', time: '08:18', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5014', date: '2026-06-27', time: '08:19', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5019', date: '2026-06-29', time: '08:21', inspector: '李巡检', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡脏污', unit:'中建三局集团有限公司', detail:'围挡面板表面有泥浆污渍约0.5㎡，需清洁处理'}] },
                { id: 'pr_gen_5024', date: '2026-07-01', time: '08:53', inspector: '李巡检', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5029', date: '2026-07-02', time: '08:54', inspector: '王强', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡面板变形', unit:'中建三局集团有限公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5034', date: '2026-07-04', time: '08:56', inspector: '刘伟', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡脏污', unit:'中建三局集团有限公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5039', date: '2026-07-06', time: '08:58', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5044', date: '2026-07-07', time: '08:59', inspector: '陈刚', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡基础松动', unit:'中建三局集团有限公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5049', date: '2026-07-09', time: '08:01', inspector: '王强', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡面板变形', unit:'中建三局集团有限公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5054', date: '2026-07-11', time: '08:03', inspector: '刘伟', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡脏污', unit:'中建三局集团有限公司', detail:'围挡面板表面有轻微泥浆污渍，面积约0.3㎡，不影响结构安全但需清洁'}] },
                { id: 'pr_gen_5059', date: '2026-07-12', time: '08:04', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5064', date: '2026-07-14', time: '08:06', inspector: '陈刚', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡基础松动', unit:'中建三局集团有限公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5069', date: '2026-07-16', time: '08:08', inspector: '王强', result: '异常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b', issues: [{type:'围挡面板变形', unit:'中建三局集团有限公司', detail:'巡检发现围挡面板因风雨天气局部变形约0.5㎡，连接处松动'}] },
                { id: 'pr_gen_5074', date: '2026-07-17', time: '08:09', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5079', date: '2026-07-19', time: '08:11', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5084', date: '2026-07-21', time: '08:13', inspector: '陈刚', result: '异常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1', issues: [{type:'围挡基础松动', unit:'中建三局集团有限公司', detail:'围挡底部与地面连接处轻微松动，螺栓需紧固'}] },
                { id: 'pr_gen_5089', date: '2026-07-22', time: '08:14', inspector: '李巡检', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_gen_5094', date: '2026-07-24', time: '08:16', inspector: '陈刚', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5099', date: '2026-07-26', time: '08:18', inspector: '陈刚', result: '正常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_gen_5104', date: '2026-07-27', time: '08:19', inspector: '刘伟', result: '正常', panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_gen_5109', date: '2026-07-29', time: '08:21', inspector: '李巡检', result: '异常', panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492', issues: [{type:'围挡脏污', unit:'中建三局集团有限公司', detail:'围挡面板表面有泥浆污渍约0.5㎡，需清洁处理'}] },
                { id: 'pr_gen_5114', date: '2026-07-31', time: '08:23', inspector: '陈刚', result: '正常', panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },

              ]
            },
            {
              id: 'WD-2026-0006',
              engineerName: '土方回填工程',
              engStatus: '竣工验收',
              fenceStatus: '已到期',
              issueStatus: '正常',
              needVerify: '否',
              custodyStart: '2024-11-01',
              custodyEnd: '2025-04-30',
              planRemoveDate: '2025-05-30',
              setupDate: '2024-11-01',
              length: 180,
              height: 2.5,
              area: 90.0,
              material: '彩钢板',
              fenceStyle: '标准型',
              publicityContent: '文明施工 请勿靠近',
              roadOccupation: '人行道',
              roadOccupationArea: 25,
              fenceResponsible: '王强',
              fenceResponsiblePhone: '13900139001',
              address: '南山区科技南路18号西侧',
              gpsShape: [
                [22.533, 113.955],
                [22.534, 113.955],
                [22.534, 113.958],
                [22.533, 113.958]
              ],
              entrances: [
                { lat: 22.5335, lng: 113.956, name: '车辆入口', type: 'vehicle' }
              ],
              defaultDemo: false,
              demolishRecord: {
                date: '2025-06-15',
                file: '拆除完工验收报告_20250615.pdf',
                note: '土方回填工程施工完毕，围挡已按要求拆除并恢复路面，现场验收合格',
                operator: '王强',
                operateTime: '2025-06-15T14:30:00'
              },
              verifyRecords: [
                { id: 'vr_wq1', verifier: '张建国', unit: '深圳市南山区住房和建设局', role: '监管人员', date: '2025-06-18 09:30', type: '校核通过', content: '围挡已拆除完毕，路面恢复完好，责令清场手续齐全', changeId:'cr_wq1', field: '围挡状态', before: '已到期', after: '已拆除' }
              ],
              changeRecords: [
                { id: 'cr_wq1', changer: '王强', unit: ' 中建三局集团有限公司', role: '施工人员', date: '2025-06-15 14:30', type: '拆除操作', content: '围挡已拆除，拆除时间：2025-06-15，说明：土方回填工程施工完毕，围挡已按要求拆除并恢复路面，现场验收合格', field: '围挡状态', before: '已到期', after: '已拆除', file: '拆除完工验收报告_20250615.pdf' }
              ],
              patrolRecords: [
                { id: 'pr_wq1', date: '2025-02-15', time: '10:00', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' },
                { id: 'pr_wq2', date: '2025-03-15', time: '14:00', inspector: '李巡检', result: '正常', issues: [], panoramaSrc: 'https://ips.cscecsteel.com/kgsy/projectTourist/9018a67e-e58b-4283-9cf6-4eae3d515492' },
                { id: 'pr_wq3', date: '2025-04-15', time: '09:30', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://vsleem.com/scene/realsee/share?projectId=2183&patrolId=eff873ee90a9c39da9731b17789f9291&pointId=4d55d097-2e0d-4db5-b88a-a313b002cf2b&rotate=1.8900753669526844,-0.09621686902020032&authCode=70c29c3c9b5a40c8acd5567358e1c78b' },
                { id: 'pr_wq4', date: '2025-05-10', time: '08:45', inspector: '王强', result: '正常', issues: [], panoramaSrc: 'https://www.720yun.com/vr/1c1jt7mOey1' }
              ]
            }
          ]
        }
      ]
    };
  }

  /* ── 加载或初始化 ── */
  var CURRENT_VERSION = 21;
  var stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    var parsed = JSON.parse(stored);
    if (parsed.version >= CURRENT_VERSION) {
      window.MOCK_DATA = parsed;
    } else {
      window.MOCK_DATA = getInitialData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(window.MOCK_DATA));
      // Clear YZY issue cache so demo data reloads from code
      localStorage.removeItem('YZY_STREET_ISSUES');
      localStorage.removeItem('FENCE_ISSUE_CLOSURE');
    }
  } else {
    window.MOCK_DATA = getInitialData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(window.MOCK_DATA));
    // Clear YZY issue cache so demo data reloads from code
    localStorage.removeItem('YZY_STREET_ISSUES');
    localStorage.removeItem('FENCE_ISSUE_CLOSURE');
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

/* ═══════════ 属地管理扩展 — 问题上报 ═══════════ */
(function () {
  var STREET_ISSUE_KEY  = 'YZY_STREET_ISSUES';

  function _load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  }
  function _save(key, data) { try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {} }

  /** 围挡问题类型字典（属地管理 / 群众端共用） */
  window.MOCK_DATA.STREET_ISSUE_TYPES = [
    '围挡破损','围挡脏污','围挡缺失','围挡基础松动',
    '围挡占道超限','张贴小广告','应建未建围挡',
    '公益广告污损','公益广告内容不合时宜','公益广告画面不连贯影响整体美观',
    '围挡安全隐患','围挡喷淋不符合要求','围挡二维码内容不全',
    '无围挡维护责任人信息','其他'
  ];

  /** 获取问题类型字典 */
  window.MOCK_DATA.getStreetIssueTypes = function () {
    return this.STREET_ISSUE_TYPES;
  };

  function _demoIssues() {
    var now = new Date();
    function d(s) { var t = new Date(now); t.setDate(t.getDate() - s); return t.toISOString().slice(0,10); }
    function _img(w,h,txt,c1,c2) { return "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='"+w+"' height='"+h+"'><rect width='"+w+"' height='"+h+"' fill='"+c1+"'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='"+c2+"' font-family='sans-serif'>"+txt+"</text></svg>"); }
    return [
      { id: 'YZY-001', type: '围挡破损', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡面板破裂约0.5㎡，金属框架外露存在安全风险', status: '整改完成', source: '街道上报', reportTime: d(1)+' 08:30:15', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.060, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-002', type: '围挡占道超限', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '施工材料大量占据人行道，行人被迫绕行机动车道，存在严重安全隐患', status: '待整改', source: '群众上报', reportTime: d(3)+' 15:00:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.548, lng: 114.059, addr: '福田区福华三路西侧' } },
      { id: 'YZY-003', type: '围挡安全隐患', fenceId: 'WD-2026-0003', fenceAddr: '南山区科技南路', details: '围挡整体向西侧倒塌约15米，底部基础完全裸露', status: '待整改', source: '监管巡查', reportTime: d(5)+' 10:15:30', engineerName: '道路恢复工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.537, lng: 113.952, addr: '南山区科技南路' } },
      { id: 'YZY-004', type: '围挡基础松动', fenceId: 'WD-2026-0004', fenceAddr: '南山区科技园路', details: '基坑围护工程围挡向东倾斜约10度，基础部分外露', status: '整改完成', source: '街道上报', reportTime: d(10)+' 11:00:00', engineerName: '基坑围护工程', responsibleUnit: '中建三局集团有限公司', photos: ['../围挡破损.png'], location: { lat: 22.535, lng: 113.948, addr: '南山区科技园路' } },
      { id: 'YZY-005', type: '围挡安全隐患', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡底部焊接点锈蚀严重，存在倒塌风险，限期整改已超15天未完成', status: '整改逾期', source: '街道上报', reportTime: d(15)+' 09:00:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.549, lng: 114.060, addr: '福田区福华三路' } },
      { id: 'YZY-006', type: '围挡缺失', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡局部缺失约2米，行人可穿行进入施工区域，存在安全隐患', status: '待整改', source: '街道上报', reportTime: d(0)+' 07:45:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.548, lng: 114.059, addr: '福田区福华三路西侧' } },
      { id: 'YZY-007', type: '围挡破损', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '巡检中发现围挡面板出现裂缝，面积约0.3㎡，已修复完成', status: '整改完成', source: '项目巡检', reportTime: d(2)+' 14:20:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.060, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-008', type: '围挡脏污', fenceId: 'WD-2026-0005', fenceAddr: '南山区科技南路', details: '巡检中发现围挡表面有大面积泥浆污渍，影响市容，已超过7天未处理', status: '整改逾期', source: '项目巡检', reportTime: d(20)+' 10:00:00', engineerName: '主体结构工程', responsibleUnit: '中建三局集团有限公司', photos: ['../围挡破损.png'], location: { lat: 22.536, lng: 113.958, addr: '南山区科技南路18号' } },
      // ── 福田项目自查已整改 demo ──
      { id: 'YZY-011', type: '围挡基础松动', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '巡检中发现围挡底部基础螺栓松动3处，已当日加固修复', status: '整改完成', source: '项目巡检', reportTime: d(8)+' 09:20:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.061, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-012', type: '围挡脏污', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '巡检中发现围挡表面有泥浆泼溅痕迹约2㎡，已清洗完毕', status: '整改完成', source: '项目巡检', reportTime: d(9)+' 14:50:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.060, addr: '福田区福华三路西侧' } },
      { id: 'YZY-013', type: '围挡喷淋不符合要求', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '巡检中发现围挡喷淋头堵塞2处导致降尘效果不达标，已疏通更换', status: '整改完成', source: '项目巡检', reportTime: d(11)+' 16:30:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.062, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-014', type: '围挡二维码内容不全', fenceId: 'WD-2026-0003', fenceAddr: '福田区福华三路东侧', details: '巡检中发现围挡二维码缺少责任人联系电话，已重新制作张贴', status: '整改完成', source: '项目巡检', reportTime: d(12)+' 11:10:00', engineerName: '道路恢复工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.063, addr: '福田区福华三路东侧' } },
      // ── 应建未建围挡 demo ──
      { id: 'YZY-009', type: '应建未建围挡', fenceId: '', fenceAddr: '', details: '粤海街道科技南路与滨海大道交汇处，根据规划要求此处应设置围挡但至今未建', status: '待整改', source: '街道上报', reportTime: d(4)+' 09:30:00', engineerName: '', responsibleUnit: '', street: '粤海街道', projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.538, lng: 113.955, addr: '南山区粤海街道科技南路与滨海大道交汇处' } },
      { id: 'YZY-010', type: '应建未建围挡', fenceId: '', fenceAddr: '', details: '黄贝街道深南东路北侧工地出入口处未按规定设置围挡，存在安全隐患', status: '待整改', source: '街道上报', reportTime: d(6)+' 14:00:00', engineerName: '', responsibleUnit: '', street: '黄贝街道', projectName: '', photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.140, addr: '罗湖区黄贝街道深南东路北侧' } },
      // ── 补充演示数据：多种状态+多种来源 ──
      { id: 'YZY-015', type: '围挡破损', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '沟槽开挖工程围挡面板被施工机械碰撞导致大面积凹陷变形，面积约2㎡', status: '整改逾期', source: '监管巡查', reportTime: d(18)+' 15:30:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.547, lng: 114.060, addr: '福田区福华三路西侧' } },
      { id: 'YZY-016', type: '围挡喷淋不符合要求', fenceId: 'WD-2026-0004', fenceAddr: '南山区科技园路', details: '基坑围护工程围挡喷淋系统水压不足，降尘效果不达标', status: '待整改', source: '监管巡查', reportTime: d(3)+' 16:00:00', engineerName: '基坑围护工程', responsibleUnit: '中建三局集团有限公司', photos: ['../围挡破损.png'], location: { lat: 22.535, lng: 113.956, addr: '南山区粤海街道科技园路' } },
      { id: 'YZY-017', type: '围挡占道超限', fenceId: 'WD-2026-0005', fenceAddr: '南山区科技南路', details: '主体结构工程围挡外堆放的建筑材料超出占道许可范围约3m，影响非机动车通行', status: '待整改', source: '群众上报', reportTime: d(2)+' 09:45:00', engineerName: '主体结构工程', responsibleUnit: '中建三局集团有限公司', photos: ['../围挡破损.png'], location: { lat: 22.534, lng: 113.958, addr: '南山区粤海街道科技南路18号' } },
      { id: 'YZY-018', type: '公益广告污损', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '管道铺设工程围挡公益广告画面大面积褪色脱胶，公益广告内容已无法辨认', status: '整改逾期', source: '街道上报', reportTime: d(25)+' 11:20:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.550, lng: 114.062, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-019', type: '围挡安全隐患', fenceId: 'WD-2026-0004', fenceAddr: '南山区科技园路', details: '基坑围护工程围挡夜间照明设施损坏，施工区域夜间无警示灯光存在行人安全隐患', status: '待整改', source: '街道上报', reportTime: d(1)+' 20:10:00', engineerName: '基坑围护工程', responsibleUnit: '中建三局集团有限公司', photos: ['../围挡破损.png'], location: { lat: 22.537, lng: 113.958, addr: '南山区科技园路' } },
      { id: 'YZY-020', type: '围挡脏污', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '沟槽开挖工程围挡被附近工地泥浆溅射大面积污染，已影响市容环境卫生', status: '待整改', source: '群众上报', reportTime: d(0)+' 08:00:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.548, lng: 114.059, addr: '福田区福华三路西侧' } },
      // ── 巡检记录关联问题（1:1映射patrolRecord.issues）──
      { id: 'YZY-021', type: '围挡脏污', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '围挡面板表面有轻微泥浆污渍，面积约0.2㎡，不影响结构安全但需清洁', status: '待整改', source: '项目巡检', reportTime: '2026-05-09 15:20:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.549, lng: 114.060, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-022', type: '围挡尺寸不合规', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡实测高度2.0m，低于规范要求的2.5m标准高度，需立即调整', status: '待整改', source: '项目巡检', reportTime: '2026-05-10 10:00:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.060, addr: '福田区福华三路西侧' } },
      { id: 'YZY-023', type: '围挡基础松动', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡面板之间连接螺栓松动3处，连接件存在脱落风险，需紧固或更换', status: '整改完成', source: '项目巡检', reportTime: '2026-05-17 16:00:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.548, lng: 114.062, addr: '福田区福华三路西侧' } },
      { id: 'YZY-024', type: '围挡材质不符合规范', fenceId: 'WD-2026-0003', fenceAddr: '福田区福华三路东侧', details: '现场围挡使用PVC材质，不符合装配式钢结构喷绘围挡的设计要求，需更换为规范材质', status: '待整改', source: '项目巡检', reportTime: '2026-05-08 11:00:00', engineerName: '道路恢复工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.063, addr: '福田区福华三路东侧' } },
      { id: 'YZY-025', type: '围挡已到期除', fenceId: 'WD-2026-0003', fenceAddr: '福田区福华三路东侧', details: '该围挡已于2025-06-01到期，至今未拆除，属于超期围挡，需立即拆除或办理延期手续', status: '整改逾期', source: '项目巡检', reportTime: '2026-05-08 11:00:00', engineerName: '道路恢复工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.546, lng: 114.062, addr: '福田区福华三路东侧' } },
      // ── 新增巡检问题（关联最新巡检记录）──
      { id: 'YZY-026', type: '围挡面板变形', fenceId: 'WD-2026-0001', fenceAddr: '福田区福华三路', details: '巡检发现围挡面板因大风天气导致局部变形约0.8㎡，面板连接处出现松动，需更换面板并加固连接件', status: '待整改', source: '项目巡检', reportTime: '2026-06-14 09:30:00', engineerName: '管道铺设工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.550, lng: 114.062, addr: '福田区福华三路与金田路交汇处' } },
      { id: 'YZY-027', type: '围挡公益广告脱落', fenceId: 'WD-2026-0002', fenceAddr: '福田区福华三路西侧', details: '围挡外侧公益广告喷绘布因连日降雨导致大面积脱胶起泡约3㎡，公益广告内容已无法看清，影响市容市貌，需重新制作更换喷绘布面', status: '待整改', source: '项目巡检', reportTime: '2026-06-13 10:00:00', engineerName: '沟槽开挖工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.547, lng: 114.061, addr: '福田区福华三路西侧' } },
      { id: 'YZY-028', type: '围挡喷淋系统失效', fenceId: 'WD-2026-0003', fenceAddr: '福田区福华三路东侧', details: '围挡顶端喷淋降尘系统管道破裂导致水压不足，仅1/3喷头正常出水，无法满足降尘要求，需整体检修喷淋管道及更换破损管段', status: '待整改', source: '项目巡检', reportTime: '2026-06-15 08:30:00', engineerName: '道路恢复工程', responsibleUnit: '深圳市市政工程总公司', photos: ['../围挡破损.png'], location: { lat: 22.547, lng: 114.063, addr: '福田区福华三路东侧' } },
      { id: 'YZY-029', type: '围挡基础沉降', fenceId: 'WD-2026-0004', fenceAddr: '南山区科技园路', details: '基坑围护工程围挡东南角基础出现不均匀沉降约5cm，围挡立柱倾斜约8度，面板间缝隙增大，需要对沉降区域进行注浆加固并校正立柱垂直度', status: '待整改', source: '项目巡检', reportTime: '2026-06-16 11:20:00', engineerName: '基坑围护工程', responsibleUnit: '中建三局集团有限公司', photos: ['../围挡破损.png','../围挡破损.png'], location: { lat: 22.537, lng: 113.957, addr: '南山区粤海街道科技园路' } },
      { id: 'YZY-030', type: '围挡占道超限', fenceId: 'WD-2026-0005', fenceAddr: '南山区科技南路', details: '主体结构工程围挡外堆放的钢筋加工成品超出占道许可范围约4m，严重挤占非机动车道，影响早晚高峰非机动车通行安全，需立即清理超占区域', status: '待整改', source: '项目巡检', reportTime: '2026-06-17 10:30:00', engineerName: '主体结构工程', responsibleUnit: '中建三局集团有限公司', photos: ['../围挡破损.png'], location: { lat: 22.535, lng: 113.958, addr: '南山区粤海街道科技南路18号' } }
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
        'YZY-004': { rectifier: '王强', rectifierUnit: '中建三局集团有限公司', rectTime: '2026-06-01 16:00', desc: '已对倾斜围挡进行全面校正，基础重新浇筑混凝土，增设三处斜撑杆', photos: ['../围挡破损.png'] },
        'YZY-007': { rectifier: '刘伟', rectifierUnit: '深圳市市政工程总公司', rectTime: '2026-06-10 14:00', desc: '已用同材质钢板替换破损面板，修复完成后表面喷涂与围挡一致的颜色，外观已恢复正常', photos: ['../围挡破损.png','../围挡破损.png'] },
        'YZY-011': { rectifier: '刘伟', rectifierUnit: '深圳市市政工程总公司', rectTime: '2026-06-03 16:30', desc: '已对松动螺栓逐一紧固，并在地脚位置浇筑混凝土加固，经检查全部牢固无松动', photos: ['../围挡破损.png'] },
        'YZY-012': { rectifier: '陈刚', rectifierUnit: '深圳市市政工程总公司', rectTime: '2026-06-04 11:00', desc: '已用高压水枪冲洗围挡表面泥浆污渍，并重新喷涂防污涂层，表面已恢复整洁', photos: ['../围挡破损.png','../围挡破损.png'] },
        'YZY-013': { rectifier: '刘伟', rectifierUnit: '深圳市市政工程总公司', rectTime: '2026-06-06 09:00', desc: '已更换堵塞的喷淋头2个，修复破裂管道，现全部喷头出水正常，降尘效果达标', photos: ['../围挡破损.png'] },
        'YZY-014': { rectifier: '陈刚', rectifierUnit: '深圳市市政工程总公司', rectTime: '2026-06-07 15:30', desc: '已重新制作二维码标识牌并张贴，新二维码包含完整责任人信息、联系电话等内容', photos: ['../围挡破损.png'] },
        'YZY-001': { rectifier: '刘伟', rectifierUnit: '深圳市市政工程总公司', rectTime: '2026-05-28 10:00', desc: '已更换破损围挡面板约0.5㎡，焊接加固外露金属框架，消除安全风险', photos: ['../围挡破损.png'] }
      },
      audits: {
        'YZY-002': [
          { id: 'au2', auditor: '张建国', auditorUnit: '深圳市福田区住房和建设局', time: '2026-06-02 16:00', result: '待整改', opinion: '清运后现场仍有少量建筑垃圾残留，请再次清理并拍照', photos: ['../围挡破损.png'] }
        ],
        'YZY-004': [
          { id: 'au4', auditor: '张建国', auditorUnit: '深圳市福田区住房和建设局', time: '2026-06-03 09:30', result: '整改完成', opinion: '整改措施到位，围挡稳固无安全隐患，审核通过', photos: ['../围挡破损.png','../围挡破损.png'] }
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
          // fence street comes from project data: `getHoardingsByStreet` maps p.street → f.street
          i.street = i.street || f.street || '';
          i._street = i.street;
          i._district = f.district || '';
        }
      }
      if (!i._projectName) i._projectName = i.projectName || '';
      if (!i._constructUnit) i._constructUnit = i.responsibleUnit || '';
      if (!i.street) i.street = i._street || '';
      if (!i.source) i.source = '街道上报';
      i._unregistered = !i.fenceId && !i._projectName;
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
      if (allIssues[j].id === issueId) { allIssues[j].status = '整改完成'; break; }
    }
    window.MOCK_DATA._saveIssues(allIssues);
  };

  /** 提交审核（已废弃，保留兼容）*/
  window.MOCK_DATA.submitAudit = function (issueId, data) {
    var closureData = _load();
    if (!closureData.audits) closureData.audits = {};
    if (!closureData.audits[issueId]) closureData.audits[issueId] = [];
    closureData.audits[issueId].push({
      id: 'au' + (closureData.audits[issueId].length + 1),
      auditor: data.auditor || '',
      auditorUnit: data.auditorUnit || '',
      time: data.time || new Date().toISOString().replace('T', ' ').slice(0, 16),
      result: '整改完成',
      opinion: data.opinion || '',
      photos: data.photos || []
    });
    _save(closureData);
  };

  /** 保存街道问题列表（内部使用） */
  window.MOCK_DATA._saveIssues = function (issues) {
    try { localStorage.setItem('YZY_STREET_ISSUES', JSON.stringify(issues)); } catch (e) {}
  };

  /* ═══════════════════════════════════════════════════════════════════
     围挡管理评价 — 评分引擎（月度周期，按项目维度）
     ═══════════════════════════════════════════════════════════════════ */
  function _daysInMonth(y,m){return new Date(y,m,0).getDate();}
  function _getGrade(s){
    if(s>=85)return{grade:'优秀',cls:'excellent',icon:'🏆'};
    if(s>=70)return{grade:'良好',cls:'good',icon:'✅'};
    if(s>=55)return{grade:'警示',cls:'warn',icon:'⚠️'};
    return{grade:'差',cls:'poor',icon:'❌'};
  }
  window.MOCK_DATA.getProjectScores = function(year, month) {
    var now=new Date();if(!year)year=now.getFullYear();if(!month)month=now.getMonth()+1;
    var days=_daysInMonth(year,month);
    var expectedPatrolDays=Math.round(days*0.6);
    var monthPrefix=year+'-'+String(month).padStart(2,'0');
    var projects=this.getProjects();
    var allHoards=this.getHoardings();
    var issues=this.getStreetIssues();
    var results=[];
    projects.forEach(function(proj){
      var projHoards=allHoards.filter(function(h){return h.projectName===proj.name;});
      // D1(1): 围挡信息录入 (10pts)
      var hasFence=projHoards.length>0?10:0;
      // D1(2): 日常巡检频率 (30pts)
      var pDates={};
      projHoards.forEach(function(h){(h.patrolRecords||[]).forEach(function(p){if(p.date&&p.date.indexOf(monthPrefix)===0)pDates[p.date]=true;});});
      var actualDays=Object.keys(pDates).length;
      var patrolRate=expectedPatrolDays>0?Math.min(1,actualDays/expectedPatrolDays):0;
      var patrolScore=Math.round(30*patrolRate);
      var d1=hasFence===0?0:(hasFence+patrolScore);
      // D2(1): 问题发现率 (30pts)
      var self=0,supervisor=0,street=0;
      projHoards.forEach(function(h){issues.forEach(function(iss){if(iss.fenceId===h.id){if(iss.source==='项目巡检')self++;else if(iss.source==='监管巡查')supervisor++;else if(iss.source==='街道上报')street++;}});});
      var totalF=self+supervisor+street;
      var discRate=totalF>0?self/totalF:0;
      var discScore=Math.round(30*discRate);
      // D2(2): 整改完成率 (30pts)
      var tR=0,cR=0;
      projHoards.forEach(function(h){issues.forEach(function(iss){if(iss.fenceId===h.id){tR++;if(iss.status==='整改完成'||iss.status==='已通过')cR++;}});});
      var rectRate=tR>0?cR/tR:1;
      var rectScore=Math.round(30*rectRate);
      var d2=d1===0?0:(discScore+rectScore);
      var total=d1+d2;
      var grade=_getGrade(total);
      // 提升建议
      var sug=[];
      if(hasFence===0)sug.push('您的项目尚未录入围挡信息，请尽快在围挡档案管理中完成围挡登记');
      else{
        if(patrolRate<0.5)sug.push('您的日常巡检频率偏低（当前'+actualDays+'天/应巡检'+expectedPatrolDays+'天），建议加强日常巡检频次');
        else if(patrolRate<0.8)sug.push('您的日常巡检频率有提升空间（当前'+actualDays+'天/应巡检'+expectedPatrolDays+'天），建议保持每日巡检习惯');
        if(discRate<0.5&&totalF>0)sug.push('您的自查问题发现率较低（'+Math.round(discRate*100)+'%），建议巡检中加强对围挡破损、脏污等常见问题的关注');
        if(rectRate<0.7&&tR>0)sug.push('您的整改及时率较低（'+Math.round(rectRate*100)+'%），建议收到整改通知后48小时内完成整改');
        if(d2<10&&d1>0)sug.push('您的问题发现与整改维度过低，建议建立内部巡检-整改闭环机制');
      }
      if(!sug.length)sug.push('各项指标表现良好，请继续保持当前管理水平和巡检习惯');
      results.push({projectId:proj.id,projectName:proj.name,district:proj.district||'',hasFence:hasFence,d1_1:hasFence,d1_2:patrolScore,d1:d1,d2_1:discScore,d2_2:rectScore,d2:d2,total:total,grade:grade.grade,gradeCls:grade.cls,gradeIcon:grade.icon,actualPatrolDays:actualDays,expectedPatrolDays:expectedPatrolDays,patrolRate:patrolRate,selfFound:self,totalFound:totalF,discoveryRate:discRate,completedRectify:cR,totalRectify:tR,rectifyRate:rectRate,suggestions:sug,hoardingsCount:projHoards.length});
    });
    results.sort(function(a,b){return a.total-b.total;});
    return results;
  };
  window.MOCK_DATA.getScoreSummary = function(){
    var s=this.getProjectScores();
    var r={total:s.length,excellent:0,good:0,warn:0,poor:0,newPoor:[],byDistrict:{}};
    s.forEach(function(x){
      if(x.grade==='优秀')r.excellent++;else if(x.grade==='良好')r.good++;else if(x.grade==='警示')r.warn++;else{r.poor++;r.newPoor.push(x);}
      if(!r.byDistrict[x.district])r.byDistrict[x.district]={excellent:0,good:0,warn:0,poor:0};
      if(x.grade==='优秀')r.byDistrict[x.district].excellent++;
      else if(x.grade==='良好')r.byDistrict[x.district].good++;
      else if(x.grade==='警示')r.byDistrict[x.district].warn++;
      else r.byDistrict[x.district].poor++;
    });
    return r;
  };
})();
