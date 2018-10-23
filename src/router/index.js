import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/*----项目入口-----*/ 
const Index = resolve => require(['@/components/vIndex'],resolve)
// /*一级菜单*/
// const Catalogue = resolve => require(['@/components/catalogue/catalogueMenu'],resolve)
// const Interview = resolve => require(['@/components/interview/interviewMenu'],resolve)
// const Breservation = resolve => require(['@/components/breservation/breservationMenu'],resolve)
// const Circulate = resolve => require(['@/components/circulate/circulateMenu'],resolve)
// const Periodical = resolve => require(['@/components/periodical/periodicalMenu'],resolve)
// const Settings = resolve => require(['@/components/settings/settingsMenu'],resolve)
// const MenuList = resolve => require(['@/components/menu/menuList'],resolve)
/*二级菜单*/

/*----典藏----*/

//典藏统计
const gcfltj = resolve => require(['@/components/breservation/dctj/gcfltj'],resolve) //馆藏分类统计
const gcqd = resolve => require(['@/components/breservation/dctj/gcqd'],resolve) //馆藏清单
const gcsmqd = resolve => require(['@/components/breservation/dctj/gcsmqd'],resolve) //馆藏书目清单
const gctj = resolve => require(['@/components/breservation/dctj/gctj'],resolve) //馆藏统计
//馆藏管理
const rcdj = resolve => require(['@/components/breservation/gcgl/rcdj'],resolve) //入藏登记
const rcpdj = resolve => require(['@/components/breservation/gcgl/rcpdj'],resolve) //入藏批登记
const gcztcl = resolve => require(['@/components/breservation/gcgl/gcztcl'],resolve) //馆藏状态处理
const gcztpcl = resolve => require(['@/components/breservation/gcgl/gcztpcl'],resolve) //馆藏状态批处理
const czbg = resolve => require(['@/components/breservation/gcgl/czbg'],resolve) //藏址变更
const czpbg = resolve => require(['@/components/breservation/gcgl/czpbg'],resolve) //藏址批变更
const tmgh = resolve => require(['@/components/breservation/gcgl/tmgh'],resolve) //条码更换
//批次管理
const dcpc = resolve => require(['@/components/breservation/pcgl/dcpc'],resolve) //典藏批次
const pcqd = resolve => require(['@/components/breservation/pcgl/pcqd'],resolve) //批次清单
//清点和剔除
const csqd = resolve => require(['@/components/breservation/qdhtc/csqd'],resolve) //藏书清点
const cspqd = resolve => require(['@/components/breservation/qdhtc/cspqd'],resolve) //藏书批清点
const qdrc = resolve => require(['@/components/breservation/qdhtc/qdrc'],resolve) //清点入藏
const qdprc = resolve => require(['@/components/breservation/qdhtc/qdprc'],resolve) //清点批入藏
const gctc = resolve => require(['@/components/breservation/qdhtc/gctc'],resolve) //馆藏剔除

/*----编目----*/

//文献编目
const bmgl = resolve => require(['@/components/catalogue/wxbm/bmgl'],resolve) //编目管理
const llbm = resolve => require(['@/components/catalogue/wxbm/llbm'],resolve) //浏览编目
const zjbm = resolve => require(['@/components/catalogue/wxbm/zjbm'],resolve) //直接编目
const hsjk = resolve => require(['@/components/catalogue/wxbm/hsjk'],resolve) //回溯建库
const spbm = resolve => require(['@/components/catalogue/wxbm/spbm'],resolve) //双屏编目
//文献移送
const yscl = resolve => require(['@/components/catalogue/wxys/yscl'],resolve) //移送处理
//编目统计
const sbdy = resolve => require(['@/components/catalogue/bmtj/sbdy'],resolve) //书标打印
const bmtj = resolve => require(['@/components/catalogue/bmtj/bmtj'],resolve) //编目统计

/*----流通----*/

//文献流通
const cqgl = resolve => require(['@/components/circulate/wxlt/cqgl'],resolve) //超期管理
const dsgl = resolve => require(['@/components/circulate/wxlt/dsgl'],resolve) //丢失管理
const fkgl = resolve => require(['@/components/circulate/wxlt/fkgl'],resolve) //罚款管理
const jhgl = resolve => require(['@/components/circulate/wxlt/jhgl'],resolve) //借还管理
const tjjh = resolve => require(['@/components/circulate/wxlt/tjjh'],resolve) //脱机借还
const tslt = resolve => require(['@/components/circulate/wxlt/tslt'],resolve) //特殊流通
const wlgl = resolve => require(['@/components/circulate/wxlt/wlgl'],resolve) //物流管理
const wscl = resolve => require(['@/components/circulate/wxlt/wscl'],resolve) //污损处理
const yjlb = resolve => require(['@/components/circulate/wxlt/yjlb'],resolve) //预借列表
const yqcl = resolve => require(['@/components/circulate/wxlt/yqcl'],resolve) //延期处理
const yygl = resolve => require(['@/components/circulate/wxlt/yygl'],resolve) //预约管理
//读者管理
const bzcstj = resolve => require(['@/components/circulate/dzgl/bzcstj'],resolve) //办证次数统计
const dzdr = resolve => require(['@/components/circulate/dzgl/dzdr'],resolve) //读者导入
const dzgl = resolve => require(['@/components/circulate/dzgl/dzgl'],resolve) //读者管理
const dztpsc = resolve => require(['@/components/circulate/dzgl/dztpsc'],resolve) //读者图片上传
const wtgl = resolve => require(['@/components/circulate/dzgl/wtgl'],resolve) //委托管理
//流通查询
const dzjycx = resolve => require(['@/components/circulate/ltcx/dzjycx'],resolve) //读者借阅查询
const dzjylscx = resolve => require(['@/components/circulate/ltcx/dzjylscx'],resolve) //读者借阅历史查询
const wxjycx = resolve => require(['@/components/circulate/ltcx/wxjycx'],resolve) //文献借阅查询
const wxjylscx = resolve => require(['@/components/circulate/ltcx/wxjylscx'],resolve) //文献借阅历史查询
//流通统计
const dwjhtj = resolve => require(['@/components/circulate/lttj/dwjhtj'],resolve) //单位借还统计
const dzjhtj = resolve => require(['@/components/circulate/lttj/dzjhtj'],resolve) //读者借还统计
const dzjyphb = resolve => require(['@/components/circulate/lttj/dzjyphb'],resolve) //读者借阅排行榜
const dzlxjhtj = resolve => require(['@/components/circulate/lttj/dzlxjhtj'],resolve) //读者类型借还统计
const jhrstj = resolve => require(['@/components/circulate/lttj/jhrstj'],resolve) //借还人数统计
const ltxd = resolve => require(['@/components/circulate/lttj/ltxd'],resolve) //流通详单
const wxjyphb = resolve => require(['@/components/circulate/lttj/wxjyphb'],resolve) //文献借阅排行榜
const wxyyph = resolve => require(['@/components/circulate/lttj/wxyyph'],resolve) //文献预约排行
const ysjyph = resolve => require(['@/components/circulate/lttj/ysjyph'],resolve) //验收借阅排行
//财经管理
const cjlscx = resolve => require(['@/components/circulate/cjgl/cjlscx'],resolve) //财经历史查询
const sktj = resolve => require(['@/components/circulate/cjgl/sktj'],resolve) //收款统计

/*---- 采访 ----*/

//征订管理
const zdpcgl = resolve => require(['@/components/interview/zdgl/zdpcgl'],resolve) //征订批次管理
const zdmlgl = resolve => require(['@/components/interview/zdgl/zdmlgl'],resolve) //征订目录管理
const marc21 = resolve => require(['@/components/interview/zdgl/marc21'],resolve) //转MARC21
const dcmarc = resolve => require(['@/components/interview/zdgl/dcmarc'],resolve) //定长数据转MARC
const cbcx = resolve => require(['@/components/interview/zdgl/cbcx'],resolve) //出版查询
//预订管理
const ydpcgl = resolve => require(['@/components/interview/ydgl/ydpcgl'],resolve) //预订批次管理
const ydgl = resolve => require(['@/components/interview/ydgl/ydgl'],resolve) //预订管理
const zdsmyd = resolve => require(['@/components/interview/ydgl/zdsmyd'],resolve) //征订书目预订
//验收管理
const yspcgl = resolve => require(['@/components/interview/ysgl/yspcgl'],resolve) //验收批次管理
const pcysgl = resolve => require(['@/components/interview/ysgl/pcysgl'],resolve) //批次验收管理
const ydyscl = resolve => require(['@/components/interview/ysgl/ydyscl'],resolve) //预订验收处理
const zjyscl = resolve => require(['@/components/interview/ysgl/zjyscl'],resolve) //直接验收处理
const ksys = resolve => require(['@/components/interview/ysgl/ksys'],resolve) //快速验收
//采访统计
const dgd = resolve => require(['@/components/interview/cftj/dgd'],resolve) //订购单
const tdd = resolve => require(['@/components/interview/cftj/tdd'],resolve) //退订单
const ysd = resolve => require(['@/components/interview/cftj/ysd'],resolve) //验收单
const cqd = resolve => require(['@/components/interview/cftj/cqd'],resolve) //催缺单
const gbccz = resolve => require(['@/components/interview/cftj/gbccz'],resolve) //个别财产帐
const ydfltj = resolve => require(['@/components/interview/cftj/ydfltj'],resolve) //预订分类统计
const ysfltj = resolve => require(['@/components/interview/cftj/ysfltj'],resolve) //验收分类统计
const zkccz = resolve => require(['@/components/interview/cftj/zkccz'],resolve) //总括财产帐
const dhqkfx = resolve => require(['@/components/interview/cftj/dhqkfx'],resolve) //到货情况分析
const sjzqfx = resolve => require(['@/components/interview/cftj/sjzqfx'],resolve) //上架周期分析
const cgzlfx = resolve => require(['@/components/interview/cftj/cgzlfx'],resolve) //采购质量分析
//采访参数
const zchgl = resolve => require(['@/components/interview/cfcs/zchgl'],resolve) //种次号管理
const flztcgl = resolve => require(['@/components/interview/cfcs/flztcgl'],resolve) //分类主题词管理

/*----期刊----*/

//期刊藏书管理
//null
//期刊记到管理
const hdbkshs = resolve => require(['@/components/periodical/qkjdgl/hdbkshs'],resolve) //合订本快速回溯
const hxqk = resolve => require(['@/components/periodical/qkjdgl/hxqk'],resolve) //核心期刊
const qkhsz = resolve => require(['@/components/periodical/qkjdgl/qkhsz'],resolve) //期刊回收站
const qkjdcl = resolve => require(['@/components/periodical/qkjdgl/qkjdcl'],resolve) //期刊记到处理
const qkzdzd = resolve => require(['@/components/periodical/qkjdgl/qkzdzd'],resolve) //期刊自动装订
const qkzjjd = resolve => require(['@/components/periodical/qkjdgl/qkzjjd'],resolve) //期刊直接记到
//期刊统计报表
const bmltj = resolve => require(['@/components/periodical/qktjbb/bmltj'],resolve) //编目量统计
const qkdgd = resolve => require(['@/components/periodical/qktjbb/dgd'],resolve) //订购单
const qdfpb = resolve => require(['@/components/periodical/qktjbb/qdfpb'],resolve) //签到分配表
const qkqdb = resolve => require(['@/components/periodical/qktjbb/qkqdb'],resolve) //期刊签到表
//期刊预订管理
const qkccyd = resolve => require(['@/components/periodical/qkydgl/qkccyd'],resolve) //期刊查重处理
const qkpcydgl = resolve => require(['@/components/periodical/qkydgl/qkpcydgl'],resolve) //期刊批次预订管理
const qkydgl = resolve => require(['@/components/periodical/qkydgl/qkydgl'],resolve) //期刊预订管理
const qkydpcgl = resolve => require(['@/components/periodical/qkydgl/qkydpcgl'],resolve) //期刊预订批次管理
const qkzdsmyd = resolve => require(['@/components/periodical/qkydgl/qkzdsmyd'],resolve) //期刊征订书目预订
//期刊阅览管理
const ylgl = resolve => require(['@/components/periodical/qkylgl/ylgl'],resolve) //阅览管理
//期刊征订管理
const qkbm = resolve => require(['@/components/periodical/qkzdgl/qkbm'],resolve) //期刊编目
const qkzdpc = resolve => require(['@/components/periodical/qkzdgl/qkzdpc'],resolve) //期刊征订批次
const qkzdmlgl = resolve => require(['@/components/periodical/qkzdgl/zdmlgl'],resolve) //征订目录管理

/*----设置----*/

//系统参数
const cbs = resolve => require(['@/components/settings/xtcs/cbs'],resolve) //出版社
const cyg = resolve => require(['@/components/settings/xtcs/cyg'],resolve) //成员馆
const czgl = resolve => require(['@/components/settings/xtcs/czgl'],resolve) //藏址管理
const gys = resolve => require(['@/components/settings/xtcs/gys'],resolve) //供应商
const hbhl = resolve => require(['@/components/settings/xtcs/hbhl'],resolve) //货币汇率
const ipgl = resolve => require(['@/components/settings/xtcs/ipgl'],resolve) //IP管理
const kjjsz = resolve => require(['@/components/settings/xtcs/kjjsz'],resolve) //快捷键设置
const ysgl = resolve => require(['@/components/settings/xtcs/ysgl'],resolve) //预算管理
const yslx = resolve => require(['@/components/settings/xtcs/yslx'],resolve) //预算类型
const zfwq = resolve => require(['@/components/settings/xtcs/zfwq'],resolve) //Z3950服务器
const gcfpsz = resolve => require(['@/components/settings/xtcs/gcfpsz'],resolve) //馆藏分配设置
//系统权限
const jsgl = resolve => require(['@/components/settings/xtqx/jsgl'],resolve) //角色管理
const xgmm = resolve => require(['@/components/settings/xtqx/xgmm'],resolve) //修改密码
const yhgl = resolve => require(['@/components/settings/xtqx/yhgl'],resolve) //用户管理
//系统日记
const xtczrz = resolve => require(['@/components/settings/xtrz/xtczrz'],resolve) //系统操作日志
const xtdlrz = resolve => require(['@/components/settings/xtrz/xtdlrz'],resolve) //系统登录日志
//机读格式参数
const marclx = resolve => require(['@/components/settings/jdgscs/marclx'],resolve) //MARC类型
const wxlx = resolve => require(['@/components/settings/jdgscs/wxlx'],resolve) //文献类型
const fblx = resolve => require(['@/components/settings/jdgscs/fblx'],resolve) //分编类型
const marcgz = resolve => require(['@/components/settings/jdgscs/marcgz'],resolve) //MARC规则
const marcmb = resolve => require(['@/components/settings/jdgscs/marcmb'],resolve) //MARC模板
const cjsy = resolve => require(['@/components/settings/jdgscs/cjsy'],resolve) //重建索引
const marctm = resolve => require(['@/components/settings/jdgscs/marctm'],resolve) //MARC条目
const marcbz = resolve => require(['@/components/settings/jdgscs/marcbz'],resolve) //MARC帮助
//webopac参数
const rmts = resolve => require(['@/components/settings/opaccs/rmts'],resolve) //热门图书
const tsjg = resolve => require(['@/components/settings/opaccs/tsjg'],resolve) //图书荐购
const tstj = resolve => require(['@/components/settings/opaccs/tstj'],resolve) //图书推荐
const pbsmk = resolve => require(['@/components/settings/opaccs/pbsmk'],resolve) //屏蔽书目库
const dzts = resolve => require(['@/components/settings/opaccs/dzts'],resolve) //电子图书
const wxswrzjk = resolve => require(['@/components/settings/opaccs/wxswrzjk'],resolve) //无线上网认证接口
//个人参数
const mrcssz = resolve => require(['@/components/settings/grcs/mrcssz'],resolve) //默认参数设置
//流通参数
const dzlx = resolve => require(['@/components/settings/ltcs/dzlx'],resolve) //读者类型
const yjmb = resolve => require(['@/components/settings/ltcs/yjmb'],resolve) //邮件模板
const jqsd = resolve => require(['@/components/settings/ltcs/jqsd'],resolve) //假期设定
const yjsz = resolve => require(['@/components/settings/ltcs/yjsz'],resolve) //邮件设置
const jygz = resolve => require(['@/components/settings/ltcs/jygz'],resolve) //借阅规则
const ltgz = resolve => require(['@/components/settings/ltcs/ltgz'],resolve) //流通规则
const ltlx = resolve => require(['@/components/settings/ltcs/ltlx'],resolve) //流通类型



 const router = new Router({
    routes:[{
        path:'/',
        component:Index,
        name:'首页',
        meta:{requireAuth: true},
        children:[
            // /* 一级菜单路由 */
            // {path:'/menuList'  , meta: {requireAuth: true}},
            // {path:'/catalogue' , name:'编目' , meta: {requireAuth: true},children:[
                // {path:'/manu/bmgl' , components:{wrapper:bmgl} , name:'菜单-编目管理' , meta:{requireAuth: true}},
                
                //文献编目
                {path:'/catalogue/bmgl' , components:{wrapper:bmgl} , name:'编目管理' , meta:{requireAuth: true}},
                {path:'/catalogue/llbm' , components:{wrapper:llbm} , name:'浏览编目' , meta:{requireAuth: true}},
                {path:'/catalogue/zjbm' , components:{wrapper:zjbm} , name:'直接编目' , meta:{requireAuth: true}},
                {path:'/catalogue/hsjk' , components:{wrapper:hsjk} , name:'回溯建库' , meta:{requireAuth: true}},
                {path:'/catalogue/spbm' , components:{wrapper:spbm} , name:'双屏编目' , meta:{requireAuth: true}},
                //文献移送
                {path:'/catalogue/yscl' , components:{wrapper:yscl} , name:'移送处理' , meta:{requireAuth: true}},
                //编目统计
                {path:'/catalogue/sbdy' , components:{wrapper:sbdy} , name:'书标打印' , meta:{requireAuth: true}},
                {path:'/catalogue/bmtj' , components:{wrapper:bmtj} , name:'编目统计' , meta:{requireAuth: true}},
                
            // ]},
            // {path:'/interview', name:'采访', meta: {requireAuth: true} , children:[
                //征订管理
                {path:'/interview/zdpcgl',components:{wrapper:zdpcgl} , name:'征订批次管理' , meta:{requireAuth: true}},
                {path:'/interview/zdmlgl',components:{wrapper:zdmlgl} , name:'征订目录管理' , meta:{requireAuth: true}},
                {path:'/interview/marc21',components:{wrapper:marc21} , name:'转MARC21' , meta:{requireAuth: true}},
                {path:'/interview/dcmarc',components:{wrapper:dcmarc} , name:'定长数据转MARC' , meta:{requireAuth: true}},
                {path:'/interview/cbcx',components:{wrapper:cbcx} , name:'出版查询' , meta:{requireAuth: true}},
                //预订管理
                {path:'/interview/ydpcgl',components:{wrapper:ydpcgl} , name:'预订批次管理' , meta:{requireAuth: true}},
                {path:'/interview/ydgl',components:{wrapper:zdpcgl} , name:'预订管理' , meta:{requireAuth: true}},
                {path:'/interview/zdsmyd',components:{wrapper:zdsmyd} , name:'征订书目预订' , meta:{requireAuth: true}},
                //验收管理
                {path:'/interview/yspcgl',components:{wrapper:yspcgl} , name:'验收批次管理' , meta:{requireAuth: true}},
                {path:'/interview/pcysgl',components:{wrapper:pcysgl} , name:'批次验收管理' , meta:{requireAuth: true}},
                {path:'/interview/ydyscl',components:{wrapper:ydyscl} , name:'预订验收处理' , meta:{requireAuth: true}},
                {path:'/interview/zjyscl',components:{wrapper:zjyscl} , name:'直接验收处理' , meta:{requireAuth: true}},
                {path:'/interview/ksys',components:{wrapper:zdpcgl} , name:'快速验收' , meta:{requireAuth: true}},
                //采访统计
                {path:'/interview/dgd',components:{wrapper:dgd} , name:'订购单' , meta:{requireAuth: true}},
                {path:'/interview/tdd',components:{wrapper:tdd} , name:'退订单' , meta:{requireAuth: true}},
                {path:'/interview/ysd',components:{wrapper:ysd} , name:'验收单' , meta:{requireAuth: true}},
                {path:'/interview/cqd',components:{wrapper:cqd} , name:'催缺单' , meta:{requireAuth: true}},
                {path:'/interview/gbccz',components:{wrapper:ysd} , name:'个别财产帐' , meta:{requireAuth: true}},
                {path:'/interview/ydfltj',components:{wrapper:ydfltj} , name:'预订分类统计' , meta:{requireAuth: true}},
                {path:'/interview/ysfltj',components:{wrapper:ysfltj} , name:'验收分类统计' , meta:{requireAuth: true}},
                {path:'/interview/zkccz',components:{wrapper:zkccz} , name:'总括财产帐' , meta:{requireAuth: true}},
                {path:'/interview/dhqkfx',components:{wrapper:dhqkfx} , name:'到货情况分析' , meta:{requireAuth: true}},
                {path:'/interview/sjzqfx',components:{wrapper:sjzqfx} , name:'上架周期分析' , meta:{requireAuth: true}},
                {path:'/interview/cgzlfx',components:{wrapper:cgzlfx} , name:'采购质量分析' , meta:{requireAuth: true}},
                //采访参数
                {path:'/interview/zchgl',components:{wrapper:zchgl} , name:'种次号管理' , meta:{requireAuth: true}},
                {path:'/interview/flztcgl',components:{wrapper:flztcgl} , name:'分类主题词管理' , meta:{requireAuth: true}},
               
            // ]},
            // {path:'/breservation', name:'典藏' , meta: {requireAuth: true} , children:[
                //典藏统计
                {path:'/breservation/gcqd',components:{wrapper:gcqd} , name:'馆藏清单' , meta:{requireAuth: true}},
                {path:'/breservation/gcfltj',components:{wrapper:gcfltj} , name:'馆藏分类统计' , meta:{requireAuth: true}},
                {path:'/breservation/gctj',components:{wrapper:gctj} , name:'馆藏统计' , meta:{requireAuth: true}},
                {path:'/breservation/gcsmqd',components:{wrapper:gcsmqd} , name:'馆藏书目清单' , meta:{requireAuth: true}},
                //馆藏管理
                {path:'/breservation/rcdj',components:{wrapper:rcdj} , name:'入藏登记' , meta:{requireAuth: true}},
                {path:'/breservation/rcpdj',components:{wrapper:rcpdj} , name:'入藏批登记' , meta:{requireAuth: true}},
                {path:'/breservation/gcztcl',components:{wrapper:gcztcl} , name:'馆藏状态处理' , meta:{requireAuth: true}},
                {path:'/breservation/gcztpcl',components:{wrapper:gcztpcl} , name:'馆藏状态批处理' , meta:{requireAuth: true}},
                {path:'/breservation/czbg',components:{wrapper:czbg} , name:'藏址变更' , meta:{requireAuth: true}},
                {path:'/breservation/czpbg',components:{wrapper:czpbg} , name:'藏址批变更' , meta:{requireAuth: true}},
                {path:'/breservation/tmgh',components:{wrapper:tmgh} , name:'条码更换' , meta:{requireAuth: true}},
                //批次管理
                {path:'/breservation/dcpc',components:{wrapper:dcpc} , name:'典藏批次' , meta:{requireAuth: true}},
                {path:'/breservation/pcqd',components:{wrapper:pcqd} , name:'批次清单' , meta:{requireAuth: true}},
                //清点和剔除
                {path:'/breservation/csqd',components:{wrapper:csqd} , name:'藏书清点' , meta:{requireAuth: true}},
                {path:'/breservation/cspqd',components:{wrapper:cspqd} , name:'藏书批清点' , meta:{requireAuth: true}},
                {path:'/breservation/qdrc',components:{wrapper:qdrc} , name:'清点入藏' , meta:{requireAuth: true}},
                {path:'/breservation/qdprc',components:{wrapper:qdprc} , name:'清点批入藏' , meta:{requireAuth: true}},
                {path:'/breservation/gctc',components:{wrapper:gctc} , name:'馆藏剔除' , meta:{requireAuth: true}},
                
            // ]},
            // {path:'/circulate', name:'流通' , meta: {requireAuth: true} , children:[
                //文献流通
                {path:'/circulate/cqgl',components:{wrapper:cqgl} , name:'超期管理' , meta:{requireAuth: true}},
                {path:'/circulate/dsgl',components:{wrapper:dsgl} , name:'丢失管理' , meta:{requireAuth: true}},
                {path:'/circulate/fkgl',components:{wrapper:fkgl} , name:'罚款管理' , meta:{requireAuth: true}},
                {path:'/circulate/jhgl',components:{wrapper:jhgl} , name:'借还管理' , meta:{requireAuth: true}},
                {path:'/circulate/tjjh',components:{wrapper:tjjh} , name:'脱机借还' , meta:{requireAuth: true}},
                {path:'/circulate/tslt',components:{wrapper:tslt} , name:'特殊流通' , meta:{requireAuth: true}},
                {path:'/circulate/wlgl',components:{wrapper:wlgl} , name:'物流管理' , meta:{requireAuth: true}},
                {path:'/circulate/wscl',components:{wrapper:wscl} , name:'污损处理' , meta:{requireAuth: true}},
                {path:'/circulate/yjlb',components:{wrapper:yjlb} , name:'预借列表' , meta:{requireAuth: true}},
                {path:'/circulate/yqcl',components:{wrapper:yqcl} , name:'延期处理' , meta:{requireAuth: true}},
                {path:'/circulate/yygl',components:{wrapper:yygl} , name:'预约管理' , meta:{requireAuth: true}},
                //读者管理
                {path:'/circulate/bzcstj',components:{wrapper:bzcstj} , name:'办证次数统计' , meta:{requireAuth: true}},
                {path:'/circulate/dzdr',components:{wrapper:dzdr} , name:'读者导入' , meta:{requireAuth: true}},
                {path:'/circulate/dzgl',components:{wrapper:dzgl} , name:'读者管理' , meta:{requireAuth: true}},
                {path:'/circulate/dztpsc',components:{wrapper:dztpsc} , name:'读者图片上传' , meta:{requireAuth: true}},
                {path:'/circulate/wtgl',components:{wrapper:wtgl} , name:'委托管理' , meta:{requireAuth: true}},
                //流通查询
                {path:'/circulate/dzjycx',components:{wrapper:dzjycx} , name:'读者借阅查询' , meta:{requireAuth: true}},
                {path:'/circulate/dzjylscx',components:{wrapper:dzjylscx} , name:'读者借阅历史查询' , meta:{requireAuth: true}},
                {path:'/circulate/wxjycx',components:{wrapper:wxjycx} , name:'文献借阅查询' , meta:{requireAuth: true}},
                {path:'/circulate/wxjylscx',components:{wrapper:wxjylscx} , name:'文献借阅历史查询' , meta:{requireAuth: true}},
                //流通统计
                {path:'/circulate/dwjhtj',components:{wrapper:dwjhtj} , name:'单位借还统计' , meta:{requireAuth: true}},
                {path:'/circulate/dzjhtj',components:{wrapper:dzjhtj} , name:'读者借还统计' , meta:{requireAuth: true}},
                {path:'/circulate/dzjyphb',components:{wrapper:dzjyphb} , name:'读者借阅排行榜' , meta:{requireAuth: true}},
                {path:'/circulate/dzlxjhtj',components:{wrapper:dzlxjhtj} , name:'读者类型借还统计' , meta:{requireAuth: true}},
                {path:'/circulate/jhrstj',components:{wrapper:jhrstj} , name:'借还人数统计' , meta:{requireAuth: true}},
                {path:'/circulate/ltxd',components:{wrapper:ltxd} , name:'流通详单' , meta:{requireAuth: true}},
                {path:'/circulate/wxjyphb',components:{wrapper:wxjyphb} , name:'文献借阅排行榜' , meta:{requireAuth: true}},
                {path:'/circulate/wxyyph',components:{wrapper:wxyyph} , name:'文献预约排行' , meta:{requireAuth: true}},
                {path:'/circulate/ysjyph',components:{wrapper:ysjyph} , name:'验收借阅排行' , meta:{requireAuth: true}},
                //财经管理
                {path:'/circulate/cjlscx',components:{wrapper:cjlscx} , name:'财经历史查询' , meta:{requireAuth: true}},
                {path:'/circulate/sktj',components:{wrapper:sktj} , name:'收款统计' , meta:{requireAuth: true}},
            // ]},,
            // {path:'/periodical', name:'期刊' , meta: {requireAuth: true} , children:[
                //期刊记到管理
                {path:'/periodical/hdbkshs',components:{wrapper:hdbkshs} , name:'合订本快速回溯' , meta:{requireAuth: true}},
                {path:'/periodical/hxqk',components:{wrapper:hxqk} , name:'核心期刊' , meta:{requireAuth: true}},
                {path:'/periodical/qkhsz',components:{wrapper:qkhsz} , name:'期刊回收站' , meta:{requireAuth: true}},
                {path:'/periodical/qkjdcl',components:{wrapper:qkjdcl} , name:'期刊记到处理' , meta:{requireAuth: true}},
                {path:'/periodical/qkzdzd',components:{wrapper:qkzdzd} , name:'期刊自动装订' , meta:{requireAuth: true}},
                {path:'/periodical/qkzjjd',components:{wrapper:qkzjjd} , name:'期刊直接记到' , meta:{requireAuth: true}},
                //期刊统计报表
                {path:'/periodical/bmltj',components:{wrapper:bmltj} , name:'编目量统计' , meta:{requireAuth: true}},
                {path:'/periodical/dgd',components:{wrapper:qkdgd} , name:'订购单' , meta:{requireAuth: true}},
                {path:'/periodical/qdfpb',components:{wrapper:qdfpb} , name:'签到分配表' , meta:{requireAuth: true}},
                {path:'/periodical/qkqdb',components:{wrapper:qkqdb} , name:'期刊签到表' , meta:{requireAuth: true}},
                //期刊预订管理
                {path:'/periodical/qkccyd',components:{wrapper:qkccyd} , name:'期刊查重处理' , meta:{requireAuth: true}},
                {path:'/periodical/qkpcydgl',components:{wrapper:qkpcydgl} , name:'期刊批次预订管理' , meta:{requireAuth: true}},
                {path:'/periodical/qkydgl',components:{wrapper:qkydgl} , name:'期刊预订管理' , meta:{requireAuth: true}},
                {path:'/periodical/qkydpcgl',components:{wrapper:qkydpcgl} , name:'期刊预订批次管理' , meta:{requireAuth: true}},
                {path:'/periodical/qkzdsmyd',components:{wrapper:qkzdsmyd} , name:'期刊征订书目预订' , meta:{requireAuth: true}},
                //期刊阅览管理
                {path:'/periodical/ylgl',components:{wrapper:ylgl} , name:'阅览管理' , meta:{requireAuth: true}},
                //期刊征订管理
                {path:'/periodical/qkbm',components:{wrapper:qkbm} , name:'期刊编目' , meta:{requireAuth: true}},
                {path:'/periodical/qkzdpc',components:{wrapper:qkzdpc} , name:'期刊征订批次' , meta:{requireAuth: true}},
                {path:'/periodical/zdmlgl',components:{wrapper:zdmlgl} , name:'征订目录管理' , meta:{requireAuth: true}},
            // ]},
            // {path:'/settings', name:'设置' , meta: {requireAuth: true} , children:[
                //系统参数
                {path:'/settings/cbs',components:{wrapper:cbs} , name:'出版社' , meta:{requireAuth: true}},
                {path:'/settings/cyg',components:{wrapper:cyg} , name:'成员馆' , meta:{requireAuth: true}},
                {path:'/settings/czgl',components:{wrapper:czgl} , name:'藏址管理' , meta:{requireAuth: true}},
                {path:'/settings/gys',components:{wrapper:gys} , name:'供应商' , meta:{requireAuth: true}},
                {path:'/settings/hbhl',components:{wrapper:hbhl} , name:'货币汇率' , meta:{requireAuth: true}},
                {path:'/settings/ipgl',components:{wrapper:ipgl} , name:'IP管理' , meta:{requireAuth: true}},
                {path:'/settings/kjjsz',components:{wrapper:kjjsz} , name:'快捷键设置' , meta:{requireAuth: true}},
                {path:'/settings/ysgl',components:{wrapper:ysgl} , name:'预算管理' , meta:{requireAuth: true}},
                {path:'/settings/yslx',components:{wrapper:yslx} , name:'预算类型' , meta:{requireAuth: true}},
                {path:'/settings/zfwq',components:{wrapper:zfwq} , name:'Z3950服务器' , meta:{requireAuth: true}},
                {path:'/settings/gcfpsz',components:{wrapper:gcfpsz} , name:'馆藏分配设置' , meta:{requireAuth: true}},
                //系统权限
                {path:'/settings/jsgl',components:{wrapper:jsgl} , name:'角色管理' , meta:{requireAuth: true}},
                {path:'/settings/xgmm',components:{wrapper:xgmm} , name:'修改密码' , meta:{requireAuth: true}},
                {path:'/settings/yhgl',components:{wrapper:yhgl} , name:'用户管理' , meta:{requireAuth: true}},
                //系统日记
                {path:'/settings/xtczrz',components:{wrapper:xtczrz} , name:'系统操作日志' , meta:{requireAuth: true}},
                {path:'/settings/xtdlrz',components:{wrapper:xtdlrz} , name:'系统登录日志' , meta:{requireAuth: true}},
                //机读格式参数
                {path:'/settings/marclx',components:{wrapper:marclx} , name:'MARC类型' , meta:{requireAuth: true}},
                {path:'/settings/wxlx',components:{wrapper:wxlx} , name:'文献类型' , meta:{requireAuth: true}},
                {path:'/settings/fblx',components:{wrapper:fblx} , name:'分编类型' , meta:{requireAuth: true}},
                {path:'/settings/marcgz',components:{wrapper:marcgz} , name:'MARC规则' , meta:{requireAuth: true}},
                {path:'/settings/marcmb',components:{wrapper:marcmb} , name:'MARC模板' , meta:{requireAuth: true}},
                {path:'/settings/cjsy',components:{wrapper:cjsy} , name:'重建索引' , meta:{requireAuth: true}},
                {path:'/settings/marctm',components:{wrapper:marctm} , name:'MARC条目' , meta:{requireAuth: true}},
                {path:'/settings/marcbz',components:{wrapper:marcbz} , name:'MARC帮助' , meta:{requireAuth: true}},
                //webopac参数
                {path:'/settings/rmts',components:{wrapper:tsjg} , name:'热门图书' , meta:{requireAuth: true}},
                {path:'/settings/tsjg',components:{wrapper:tsjg} , name:'图书荐购' , meta:{requireAuth: true}},
                {path:'/settings/tstj',components:{wrapper:tstj} , name:'图书推荐' , meta:{requireAuth: true}},
                {path:'/settings/pbsmk',components:{wrapper:pbsmk} , name:'屏蔽书目库' , meta:{requireAuth: true}},
                {path:'/settings/dzts',components:{wrapper:dzts} , name:'电子图书' , meta:{requireAuth: true}},
                {path:'/settings/wxswrzjk',components:{wrapper:wxswrzjk} , name:'无线上网认证接口' , meta:{requireAuth: true}},
                //个人参数
                {path:'/settings/mrcssz',components:{wrapper:mrcssz} , name:'默认参数设置' , meta:{requireAuth: true}},
                //流通参数
                {path:'/settings/dzlx',components:{wrapper:dzlx} , name:'读者类型' , meta:{requireAuth: true}},
                {path:'/settings/yjmb',components:{wrapper:yjmb} , name:'邮件模板' , meta:{requireAuth: true}},
                {path:'/settings/jqsd',components:{wrapper:jqsd} , name:'假期设定' , meta:{requireAuth: true}},
                {path:'/settings/yjsz',components:{wrapper:yjsz} , name:'邮件设置' , meta:{requireAuth: true}},
                {path:'/settings/jygz',components:{wrapper:jygz} , name:'借阅规则' , meta:{requireAuth: true}},
                {path:'/settings/ltgz',components:{wrapper:ltgz} , name:'流通规则' , meta:{requireAuth: true}},
                {path:'/settings/ltlx',components:{wrapper:ltlx} , name:'流通类型' , meta:{requireAuth: true}},
            // ]},
           
        ]
    }]
})
export default router