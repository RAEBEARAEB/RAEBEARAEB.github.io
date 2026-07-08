/**
 * 围挡系统统一数据层 - shared_data.js
 * 所有端（监管PC/APP、项目PC/APP）共享此数据
 * 通过 localStorage key 'fenceSystemData' 实现4端数据互通
 */
var SD=(function(){
  var KEY='fenceSystemData';
  var _data=null;
  var CURRENT_VERSION=2;

  /* ═══ 默认 Mock 数据 ═══ */
  function getDefaultData(){
    return {
      version:CURRENT_VERSION,
      updatedAt:new Date().toISOString(),
      projects:[
        {
          id:'p1',name:'南山区科技园综合体项目',district:'南山区',street:'粤海街道',
          address:'南山区粤海街道科技南路18号',lat:22.536,lng:113.9585,
          redlineStatus:'已绘制',
          redlineGeo:[[[22.538,113.952],[22.544,113.960],[22.534,113.968],[22.528,113.954]]],
          regulatorUnit:'深圳市南山区住房和建设局',
          buildUnit:'深圳市南山科技园开发有限公司',buildContact:'李明 13800138001',
          constructUnit:'中建三局集团有限公司',constructContact:'王强 13900139001',
          supervisorUnit:'深圳市招商工程监理有限公司',
          designUnit:'深圳市建筑设计研究总院有限公司',
          engineers:[
            {id:'e1',name:'基坑围护工程',engStatus:'在建',planPeriod:'2024-06-01 至 2025-12-31',fenceId:'WD-2026-0001',
             fenceStatus:'已安装',issueStatus:'正常',length:320,height:2.5,area:156.8,material:'彩钢板',
             setupDate:'2025-09-15',planRemoveDate:'2027-06-30',
             address:'南山区粤海街道科技南路18号',
             shapes:[{type:'polygon',points:[[200,80],[350,60],[380,180],[280,200],[180,160]],label:'围挡范围 1',source:'manual'},{type:'polygon',points:[[420,40],[560,50],[580,150],[500,180],[400,130]],label:'围挡范围 2',source:'import'},{type:'polygon',points:[[600,100],[720,80],[740,170],[680,200],[590,170]],label:'围挡范围 3',source:'import'}],
             entrances:[{x:260,y:130,type:'vehicle',name:'主入口'},{x:520,y:110,type:'pedestrian',name:'次入口'},{x:680,y:160,type:'vehicle',name:'车行口'}]
            },
            {id:'e2',name:'主体结构工程',engStatus:'在建',planPeriod:'2025-01-15 至 2027-06-30',fenceId:'WD-2026-0001',
             fenceStatus:'已安装',issueStatus:'正常',length:320,height:2.5,area:156.8,material:'彩钢板',
             setupDate:'2025-09-15',planRemoveDate:'2027-06-30',
             address:'南山区粤海街道科技南路18号',
             shapes:[],entrances:[]
            },
            {id:'e3',name:'外立面装修工程',engStatus:'在建',planPeriod:'2026-03-01 至 2027-12-31',fenceId:null,
             fenceStatus:null,issueStatus:null,length:0,height:0,area:0,material:'',
             setupDate:'',planRemoveDate:'',
             address:'南山区粤海街道科技南路18号',
             shapes:[],entrances:[]
            }
          ]
        },
        {
          id:'p2',name:'宝安区新安街道住宅楼项目',district:'宝安区',street:'新安街道',
          address:'宝安区新安街道兴华路南侧',lat:22.5705,lng:113.9038,
          redlineStatus:'已绘制',
          redlineGeo:[[[22.572,113.901],[22.575,113.907],[22.568,113.908],[22.566,113.902]]],
          regulatorUnit:'深圳市宝安区住房和建设局',
          buildUnit:'深圳市宝安区建筑工务署',buildContact:'吴刚 13300133001',
          constructUnit:'深圳市宝安建筑工程公司',constructContact:'周涛 13200132001',
          supervisorUnit:'深圳市邦迪工程监理有限公司',
          designUnit:'深圳市清华苑建筑设计有限公司',
          engineers:[
            {id:'e4',name:'土方开挖工程',engStatus:'在建',planPeriod:'2024-11-01 至 2025-05-31',fenceId:'WD-2026-0004',
             fenceStatus:'已安装',issueStatus:'正常',length:240,height:2.5,area:120.0,material:'彩钢板',
             setupDate:'2025-03-01',planRemoveDate:'2026-09-30',
             address:'宝安区新安街道兴华路南侧',
             shapes:[{type:'polygon',points:[[180,100],[320,70],[360,200],[260,230],[140,180]],label:'围挡范围',source:'manual'}],
             entrances:[{x:250,y:140,type:'vehicle',name:'施工入口'}]
            },
            {id:'e5',name:'基础工程',engStatus:'在建',planPeriod:'2025-03-01 至 2026-08-31',fenceId:null,
             fenceStatus:null,issueStatus:null,length:0,height:0,area:0,material:'',
             setupDate:'',planRemoveDate:'',
             address:'宝安区新安街道兴华路南侧',
             shapes:[],entrances:[]
            }
          ]
        },
        {
          id:'p3',name:'福田中心区市政管网改造工程',district:'福田区',street:'福田街道',
          address:'福田区福华三路与金田路交汇处',lat:22.548,lng:114.0615,
          redlineStatus:'已绘制',
          redlineGeo:[[[22.550,114.059],[22.550,114.064],[22.546,114.064],[22.546,114.059]]],
          regulatorUnit:'深圳市福田区住房和建设局',
          buildUnit:'深圳市福田区建筑工务署',buildContact:'陈华 13700137001',
          constructUnit:'深圳市市政工程总公司',constructContact:'刘伟 13600136001',
          supervisorUnit:'深圳市合诚工程监理有限公司',
          designUnit:'深圳市市政设计研究院有限公司',
          engineers:[
            {id:'e6',name:'管道铺设工程',engStatus:'在建',planPeriod:'2024-03-01 至 2025-09-30',fenceId:'WD-2026-0002',
             fenceStatus:'已安装',issueStatus:'正常',length:450,height:3.0,area:270.0,material:'彩钢板',
             setupDate:'2025-06-01',planRemoveDate:'2026-03-31',
             address:'福田区福华三路与金田路交汇处',
             shapes:[{type:'polygon',points:[[160,90],[310,60],[350,190],[250,220],[130,170]],label:'围挡范围',source:'manual'}],
             entrances:[{x:240,y:130,type:'vehicle',name:'施工入口'}]
            },
            {id:'e7',name:'道路恢复工程',engStatus:'在建',planPeriod:'2025-04-01 至 2026-03-31',fenceId:null,
             fenceStatus:null,issueStatus:null,length:0,height:0,area:0,material:'',
             setupDate:'',planRemoveDate:'',
             address:'福田区福华三路与金田路交汇处',
             shapes:[],entrances:[]
            }
          ]
        },
        {
          id:'p4',name:'龙华区民治街道城市更新项目',district:'龙华区',street:'民治街道',
          address:'龙华区民治街道民康路与民塘路交汇处',lat:22.635,lng:114.025,
          redlineStatus:'未绘制',redlineGeo:[],
          regulatorUnit:'深圳市龙华区住房和建设局',
          buildUnit:'深圳市龙华区城市更新局',buildContact:'赵磊 13500135001',
          constructUnit:'深圳市龙华建筑工程总公司',constructContact:'孙浩 13400134001',
          supervisorUnit:'深圳市鹏城工程监理有限公司',
          designUnit:'深圳市华森建筑设计有限公司',
          engineers:[
            {id:'e8',name:'主体结构工程',engStatus:'停工',planPeriod:'2024-08-01 至 2026-06-30',fenceId:'WD-2026-0003',
             fenceStatus:'已到期',issueStatus:'有问题',length:560,height:2.5,area:280.0,material:'彩钢板',
             setupDate:'2024-08-01',planRemoveDate:'2025-08-01',
             address:'龙华区民治街道民康路与民塘路交汇处',
             shapes:[{type:'polygon',points:[[190,110],[340,80],[370,210],[270,240],[150,190]],label:'围挡范围',source:'manual'}],
             entrances:[]
            }
          ]
        },
        {
          id:'p5',name:'罗湖区湖贝旧村改造项目',district:'罗湖区',street:'湖贝街道',
          address:'罗湖区湖贝路与文锦中路交汇处',lat:22.555,lng:114.135,
          redlineStatus:'已绘制',
          redlineGeo:[[[22.557,114.133],[22.557,114.137],[22.553,114.137],[22.553,114.133]]],
          regulatorUnit:'深圳市罗湖区住房和建设局',
          buildUnit:'深圳市罗湖区城市更新局',buildContact:'郑明 13600136002',
          constructUnit:'深圳市罗湖建筑工程公司',constructContact:'黄伟 13700137002',
          supervisorUnit:'深圳市诚信工程监理有限公司',
          designUnit:'深圳市筑博建筑设计有限公司',
          engineers:[
            {id:'e9',name:'桩基工程',engStatus:'在建',planPeriod:'2025-01-01 至 2026-06-30',fenceId:'WD-2026-0005',
             fenceStatus:'已安装',issueStatus:'正常',length:200,height:2.5,area:100.0,material:'彩钢板',
             setupDate:'2025-01-15',planRemoveDate:'2026-06-30',
             address:'罗湖区湖贝路与文锦中路交汇处',
             shapes:[{type:'polygon',points:[[170,95],[320,65],[355,195],[255,225],[135,175]],label:'围挡范围',source:'manual'}],
             entrances:[{x:245,y:135,type:'vehicle',name:'施工入口'}]
            }
          ]
        },
        {
          id:'p6',name:'光明区凤凰城道路工程',district:'光明区',street:'凤凰城街道',
          address:'光明区凤凰城街道光明大道北侧',lat:22.745,lng:113.935,
          redlineStatus:'未绘制',redlineGeo:[],
          regulatorUnit:'深圳市光明区住房和建设局',
          buildUnit:'深圳市光明区建筑工务署',buildContact:'林峰 13800138002',
          constructUnit:'深圳市光明建筑工程公司',constructContact:'陈波 13900139002',
          supervisorUnit:'深圳市光明工程监理有限公司',
          designUnit:'深圳市光明建筑设计院',
          engineers:[
            {id:'e10',name:'路基施工工程',engStatus:'在建',planPeriod:'2025-06-01 至 2026-12-31',fenceId:null,
             fenceStatus:null,issueStatus:null,length:0,height:0,area:0,material:'',
             setupDate:'',planRemoveDate:'',
             address:'光明区凤凰城街道光明大道北侧',
             shapes:[],entrances:[]
            }
          ]
        }
      ],
      verifyRecords:{
        'WD-2026-0001':[
          {id:'vr1',verifier:'张建国',unit:'深圳市南山区住房和建设局',role:'监管人员',date:'2026-05-10 14:30',type:'校核修正',content:'围挡高度校核，由3.0m修正为2.5m',field:'围挡高度',before:'3.0m',after:'2.5m',linkedChangeId:'cr1'},
          {id:'vr2',verifier:'陈刚',unit:'深圳市南山区住房和建设局',role:'监管人员',date:'2026-05-08 10:15',type:'校核修正',content:'围挡材料校核，由水马修正为彩钢板',field:'围挡材料',before:'水马',after:'彩钢板'},
          {id:'vr3',verifier:'张建国',unit:'深圳市南山区住房和建设局',role:'监管人员',date:'2026-04-20 09:00',type:'校核通过',content:'围挡信息核实无误',field:'',before:'',after:'',linkedChangeId:'cr2'}
        ],
        'WD-2026-0004':[
          {id:'vr4',verifier:'李华',unit:'深圳市宝安区住房和建设局',role:'监管人员',date:'2026-05-06 16:45',type:'校核修正',content:'围挡长度校核，由260m修正为240m',field:'围挡长度',before:'260m',after:'240m',linkedChangeId:'cr3'},
          {id:'vr5',verifier:'李华',unit:'深圳市宝安区住房和建设局',role:'监管人员',date:'2026-04-25 11:30',type:'校核通过',content:'围挡信息核实无误',field:'',before:'',after:'',linkedChangeId:'cr4'}
        ],
        'WD-2026-0002':[
          {id:'vr6',verifier:'刘明',unit:'深圳市福田区住房和建设局',role:'监管人员',date:'2026-05-12 09:30',type:'校核修正',content:'围挡长度校核，由400m修正为450m',field:'围挡长度',before:'400m',after:'450m',linkedChangeId:'cr5'}
        ],
        'WD-2026-0003':[
          {id:'vr7',verifier:'王涛',unit:'深圳市龙华区住房和建设局',role:'监管人员',date:'2026-04-15 14:00',type:'校核修正',content:'围挡状态校核，标记为已到期除',field:'围挡状态',before:'已安装',after:'已到期除',linkedChangeId:'cr6'}
        ],
        'WD-2026-0005':[
          {id:'vr8',verifier:'赵磊',unit:'深圳市罗湖区住房和建设局',role:'监管人员',date:'2026-04-28 10:00',type:'校核通过',content:'围挡信息核实无误',field:'',before:'',after:'',linkedChangeId:'cr7'}
        ]
      },
      changeRecords:{
        'WD-2026-0001':[
          {id:'cr1',changer:'王强',unit:'中建三局集团有限公司',role:'施工人员',date:'2026-04-15 16:20',type:'变更操作',content:'围挡长度变更，由280m调整为320m',field:'围挡长度',before:'280m',after:'320m',linkedVerifyId:'vr1'},
          {id:'cr2',changer:'王强',unit:'中建三局集团有限公司',role:'施工人员',date:'2026-03-20 10:00',type:'新增围挡',content:'新增围挡档案',field:'',before:'',after:'',linkedVerifyId:'vr3'}
        ],
        'WD-2026-0004':[
          {id:'cr3',changer:'周涛',unit:'深圳市宝安建筑工程公司',role:'施工人员',date:'2026-04-10 11:30',type:'变更操作',content:'围挡长度变更，由200m调整为240m',field:'围挡长度',before:'200m',after:'240m',linkedVerifyId:'vr4'},
          {id:'cr4',changer:'周涛',unit:'深圳市宝安建筑工程公司',role:'施工人员',date:'2026-02-25 09:00',type:'新增围挡',content:'新增围挡档案',field:'',before:'',after:'',linkedVerifyId:'vr5'}
        ],
        'WD-2026-0002':[
          {id:'cr5',changer:'刘伟',unit:'深圳市市政工程总公司',role:'施工人员',date:'2026-05-01 14:00',type:'变更操作',content:'围挡高度变更，由2.5m调整为3.0m',field:'围挡高度',before:'2.5m',after:'3.0m',linkedVerifyId:'vr6'}
        ],
        'WD-2026-0003':[
          {id:'cr6',changer:'孙浩',unit:'深圳市龙华建筑工程总公司',role:'施工人员',date:'2026-01-10 09:30',type:'新增围挡',content:'新增围挡档案',field:'',before:'',after:'',linkedVerifyId:'vr7'}
        ],
        'WD-2026-0005':[
          {id:'cr7',changer:'黄伟',unit:'深圳市罗湖建筑工程公司',role:'施工人员',date:'2026-01-20 10:00',type:'新增围挡',content:'新增围挡档案',field:'',before:'',after:'',linkedVerifyId:'vr8'}
        ]
      },
      patrolRecords:{
        'WD-2026-0001':[
          {id:'pr1',date:'2026-05-14',inspector:'王强',result:'正常',issues:[],panoScenes:[]},
          {id:'pr2',date:'2026-05-13',inspector:'王强',result:'有问题',issues:['面板变形'],panoScenes:[]},
          {id:'pr3',date:'2026-05-12',inspector:'王强',result:'正常',issues:[],panoScenes:[]},
          {id:'pr4',date:'2026-05-07',inspector:'王强',result:'有问题',issues:['围挡倾斜'],panoScenes:[]},
          {id:'pr5',date:'2026-05-06',inspector:'王强',result:'正常',issues:[],panoScenes:[]},
          {id:'pr6',date:'2026-05-05',inspector:'王强',result:'正常',issues:[],panoScenes:[]},
          {id:'pr7',date:'2026-05-04',inspector:'王强',result:'正常',issues:[],panoScenes:[]}
        ],
        'WD-2026-0004':[
          {id:'pr8',date:'2026-05-14',inspector:'周涛',result:'正常',issues:[],panoScenes:[]},
          {id:'pr9',date:'2026-05-13',inspector:'周涛',result:'正常',issues:[],panoScenes:[]},
          {id:'pr10',date:'2026-05-12',inspector:'周涛',result:'有问题',issues:['底部松动'],panoScenes:[]}
        ]
      }
    };
  }

  /* ═══ CRUD API ═══ */
  function init(){
    if(_data)return _data;
    try{
      var s=localStorage.getItem(KEY);
      if(s){_data=JSON.parse(s);if(_data&&_data.version===CURRENT_VERSION)return _data}
    }catch(e){}
    _data=getDefaultData();
    save();
    return _data;
  }
  function save(){
    if(!_data)return;
    _data.updatedAt=new Date().toISOString();
    try{localStorage.setItem(KEY,JSON.stringify(_data))}catch(e){}
  }
  function reset(){
    _data=getDefaultData();
    save();
    return _data;
  }
  function getData(){return init()}

  /* 项目 */
  function getProjects(){return init().projects||[]}
  function getProject(id){return getProjects().find(function(p){return p.id===id})}

  /* 通过围挡ID查围挡+所属项目+工程 */
  function getFence(fenceId){
    var d=init();
    var result=null;
    d.projects.forEach(function(p){
      (p.engineers||[]).forEach(function(e){
        if(e.fenceId===fenceId){
          result={project:p,engineer:e,fenceId:fenceId};
        }
      });
    });
    return result;
  }

  /* 获取所有围挡（去重） */
  function getAllFences(){
    var fences=[];
    var seen={};
    getProjects().forEach(function(p){
      (p.engineers||[]).forEach(function(e){
        if(e.fenceId&&!seen[e.fenceId]){
          seen[e.fenceId]=true;
          fences.push({project:p,engineer:e,fenceId:e.fenceId});
        }
      });
    });
    return fences;
  }

  /* 获取未建档的工程 */
  function getUnfiledEngineers(projectId){
    var p=getProject(projectId);
    if(!p)return[];
    return(p.engineers||[]).filter(function(e){return !e.fenceId});
  }

  /* 更新围挡信息 */
  function updateFence(fenceId,updates){
    var d=init();
    d.projects.forEach(function(p){
      (p.engineers||[]).forEach(function(e){
        if(e.fenceId===fenceId){
          Object.keys(updates).forEach(function(k){e[k]=updates[k]});
        }
      });
    });
    save();
  }

  /* 更新工程信息（包括围挡范围shapes等） */
  function updateEngineer(projectId,engineerId,updates){
    var p=getProject(projectId);
    if(!p)return;
    var eng=(p.engineers||[]).find(function(e){return e.id===engineerId});
    if(!eng)return;
    Object.keys(updates).forEach(function(k){eng[k]=updates[k]});
    save();
  }

  /* 更新红线 */
  function updateRedline(projectId,geo,status){
    var p=getProject(projectId);
    if(!p)return;
    p.redlineGeo=geo||[];
    p.redlineStatus=status||'已绘制';
    save();
  }

  /* 校核记录 */
  function getVerifyRecords(fenceId){
    var d=init();
    return(d.verifyRecords&&d.verifyRecords[fenceId])||[];
  }
  function addVerifyRecord(fenceId,record){
    var d=init();
    if(!d.verifyRecords)d.verifyRecords={};
    if(!d.verifyRecords[fenceId])d.verifyRecords[fenceId]=[];
    record.id='vr'+Date.now();
    record.date=record.date||new Date().toISOString().slice(0,16).replace('T',' ');
    d.verifyRecords[fenceId].unshift(record);
    save();
  }

  /* 变更记录 */
  function getChangeRecords(fenceId){
    var d=init();
    return(d.changeRecords&&d.changeRecords[fenceId])||[];
  }
  function addChangeRecord(fenceId,record){
    var d=init();
    if(!d.changeRecords)d.changeRecords={};
    if(!d.changeRecords[fenceId])d.changeRecords[fenceId]=[];
    record.id='cr'+Date.now();
    record.date=record.date||new Date().toISOString().slice(0,16).replace('T',' ');
    d.changeRecords[fenceId].unshift(record);
    save();
  }

  /* 巡检记录 */
  function getPatrolRecords(fenceId){
    var d=init();
    return(d.patrolRecords&&d.patrolRecords[fenceId])||[];
  }
  function addPatrolRecord(fenceId,record){
    var d=init();
    if(!d.patrolRecords)d.patrolRecords={};
    if(!d.patrolRecords[fenceId])d.patrolRecords[fenceId]=[];
    record.id='pr'+Date.now();
    d.patrolRecords[fenceId].unshift(record);
    save();
  }

  /* 辅助：获取围挡状态样式类 */
  function getStatusClass(status){
    var map={'已安装':'status-setting','已设置':'status-set','即将拆除':'status-removing','已到期':'status-overdue','已拆除':'status-removed'};
    return map[status]||'status-setting';
  }
  function getStatusLabel(status){
    return status||'未设置';
  }

  /* 辅助：按项目查围挡（用于列表页） */
  function getFencesByProject(projectId){
    var p=getProject(projectId);
    if(!p)return[];
    var fences=[];
    var seen={};
    (p.engineers||[]).forEach(function(e){
      if(e.fenceId&&!seen[e.fenceId]){
        seen[e.fenceId]=true;
        fences.push({project:p,engineer:e,fenceId:e.fenceId});
      }
    });
    return fences;
  }

  /* 辅助：获取用户所属项目（项目端用） */
  function getUserProjects(){
    return getProjects();
  }

  /* 辅助：生成 change_v2/detail_v2 页面使用的 projectData 格式 */
  function toProjectData(){
    var pd={};
    getProjects().forEach(function(p,i){
      pd[String(i+1)]={
        name:p.name,lat:p.lat,lng:p.lng,
        engineers:(p.engineers||[]).map(function(e){
          return{
            name:e.name,planPeriod:e.planPeriod,
            region:p.district,street:p.street,
            address:e.address||p.address,
            buildUnit:p.buildUnit,buildContact:p.buildContact,
            constructUnit:p.constructUnit,constructContact:p.constructContact,
            supervisorUnit:p.supervisorUnit,
            regulateUnit:p.regulatorUnit,
            designUnit:p.designUnit
          };
        })
      };
    });
    return pd;
  }

  /* 辅助：生成 detail_info 页面使用的 projectData 格式（仅名称和坐标） */
  function toProjectDataSimple(){
    var pd={};
    getProjects().forEach(function(p,i){
      pd[String(i+1)]={name:p.name,lat:p.lat,lng:p.lng};
    });
    return pd;
  }

  /* 辅助：按围挡ID分组，返回共享同一围挡的所有工程 */
  function getAllFencesGrouped(){
    var groups={};
    getProjects().forEach(function(p){
      (p.engineers||[]).forEach(function(e){
        if(e.fenceId){
          if(!groups[e.fenceId]){
            groups[e.fenceId]={fenceId:e.fenceId,data:[],project:p};
          }
          groups[e.fenceId].data.push({engineer:e,project:p});
        }
      });
    });
    return Object.values(groups);
  }

  return {
    init:init,save:save,reset:reset,getData:getData,
    getProjects:getProjects,getProject:getProject,
    getFence:getFence,getAllFences:getAllFences,
    getUnfiledEngineers:getUnfiledEngineers,
    updateFence:updateFence,updateEngineer:updateEngineer,
    updateRedline:updateRedline,
    getVerifyRecords:getVerifyRecords,addVerifyRecord:addVerifyRecord,
    getChangeRecords:getChangeRecords,addChangeRecord:addChangeRecord,
    getPatrolRecords:getPatrolRecords,addPatrolRecord:addPatrolRecord,
    getStatusClass:getStatusClass,getStatusLabel:getStatusLabel,
    getFencesByProject:getFencesByProject,getUserProjects:getUserProjects,
    toProjectData:toProjectData,toProjectDataSimple:toProjectDataSimple,
    getAllFencesGrouped:getAllFencesGrouped
  };
})();
