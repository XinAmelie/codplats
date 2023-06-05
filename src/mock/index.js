// # mockjs模块,模拟数据
import Mock from 'mockjs'
// import qs from 'qs'

// 'name|1': true //随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率是 1/2。
// 'name|min-max': true //随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。

// 随机函数
const Random = require('mockjs').Random

// 基础配置
Mock.setup({
  timeout: '500-1000'
})

// 登录api     /api/account_login/v3/

//    /    /  固定的写法  \原义字符

// Mock.mock(/\/account_login/, 'post', (config) => {
//   const result = (Mock.mock({
//     uid: '@integer(42091110,92091110)',
//     username: '@cname()',
//     nickname: '@csentence(3,8)',
//     email: '@email()',
//     'mobile|1': ['15005314465', '13605315497', '13605317460', '15005314417', '13605317483'],
//     'qq|1': ['已绑定', '未绑定'],
//     'is_vip|1-2': true,
//     maodou: '@integer(1000,10000)',
//     avatar_url: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`,
//     subcribe: '@integer(10,1000)', // 订阅
//     funs: '@integer(0,100)',
//     avatarver: Random.image('200x100')
//   }))
//
//   const user = {
//     result: true,
//     resultcode: 0,
//     msg: 'ok',
//     errormsg: '',
//     data: result
//   }
//   console.log(user)
//
//   return user
// })

/* mock获取tree data的数据 */

Mock.mock(/\/caseApi\/getDirectoryCaseNum/, 'get', (config) => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push(Mock.mock({
      title: '@ctitle(8)',
      key: '@integer(42091110,92091110)',
      children: [
        {
          title: '@ctitle(5)',
          key: '@integer(42091110,92091110)',
          children: [
            {
              title: '@ctitle(5)',
              key: '@integer(42091110,92091110)'
            },
            {
              title: '@ctitle(5)',
              key: '@integer(42091110,92091110)'
            }
          ]

        },
        {
          title: '@ctitle(5)',
          key: '@integer(42091110,92091110)',
          children: [
            {
              title: '@ctitle(5)',
              key: '@integer(42091110,92091110)'
            },
            {
              title: '@ctitle(5)',
              key: '@integer(42091110,92091110)'
            }
          ]
        }
      ]
    }
    ))
  }

  const res = {
    msg: 'success',
    success: 'true',
    retcode: 200,
    retlist: [result]
  }
  return res
})

// 处理手工用例的假数据 /caseApi/getCaselist/

Mock.mock(/\/caseApi\/getCaselist/, 'get', (config) => {
  const result = []
  for (let i = 0; i < 10; i++) {
    result.push(Mock.mock({
      key: i + 1,
      caselist: '@ctitle(20)',
      'priority|1': ['p1', 'p2', 'p3'],
      associatedScript: '@title(2)',
      AssociatedRequirements: '@title(3)',
      founder: '@cname()',
      creationTime: Random.datetime(),
      operate: '...',
      avatar_url: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`

    }
    ))
  }

  const res = {
    msg: 'success',
    success: 'true',
    retcode: 200,
    retlist: [result]
  }
  return res
})

// 获取接口用例的假数据
Mock.mock(/\/caseApi\/getInterfaceCaselist/, 'get', (config) => {
  const result = []
  for (let i = 0; i < 10; i++) {
    result.push(Mock.mock({
      key: i + 1,
      InterfaceURL: '@url()',
      'Method|1': ['GET', 'POST', 'PUT', 'DELETE'],
      'AgreementType|1': ['http', 'https'],
      casesGenerated: Random.integer(10, 100),
      AssociatedRequirements: '@title(3)',
      'CasePass|1': ['100%', '50%', '20%', '10%'],
      'data-sources|1': ['BOE', 'PPE'],
      UpdateTime: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
      operation: '参数替换',
      operation1: '更新预期值'
    }
    ))
  }

  const res = {
    msg: 'success',
    success: 'true',
    retcode: 200,
    retlist: [result]
  }
  return res
})

// 获取手工计划的接口
Mock.mock(/\/caseApi\/getManPlanlist/, 'get', (config) => {
  const result = []
  for (let i = 0; i < 10; i++) {
    result.push(Mock.mock({
      key: i + 1,
      PlanName: '@ctitle(10)',
      NumberCases: Random.integer(10, 1000),
      'exacutiveRate|1': ['100%', '50%', '20%', '10%'],
      'state|1': ['全部', '进行中', '未开始', '已开始'],
      'result|1': ['通过', '不通过', '阻塞'],
      AssociatedVersion: '@ctitle()',
      LinkedDemand: '@ctitle(10)',
      Creator: '@cname',
      Executor: '@cname',
      ExecutionStartTime: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
      ExecutionTime: Random.integer(10, 1000),
      Planscheduling: Random.datetime('yyyy-MM-dd') + ' ~ ' + Random.datetime('yyyy-MM-dd'),
      Operator: '...',
      avatar_url_01: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`,
      avatar_url_02: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`
    }
    ))
  }

  const res = {
    msg: 'success',
    success: 'true',
    retcode: 200,
    retlist: [result]
  }
  return res
})

// 获取接口计划的接口

Mock.mock(/\/caseApi\/getIfPlanlist/, 'get', (config) => {
  const result = []
  for (let i = 0; i < 10; i++) {
    result.push(Mock.mock({
      key: i + 1,
      TaskID: '@ctitle(10)' + '@integer()',
      TaskName: '@ctitle(5)',
      PSMServer: '@ctitle()',
      'ExecutionStatus|1': ['已完成', '进行中', '失败'],
      'ImpleResults|1': ['通过', '不通过', '阻塞'],
      'ProtType|1': ['HTTP', 'HTTPS'],
      'TaskType|1': ['非卡点', '卡点'],
      TriggerSource: '@ctitle()',
      StartAndEnd: '@datetime()' + ' ~ ' + '@datetime()',
      CreatedBy: '@cname',
      Operation: '详情',
      avatar_url_01: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`,
      avatar_url_02: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`
    }
    ))
  }

  const res = {
    msg: 'success',
    success: 'true',
    retcode: 200,
    retlist: [result]
  }
  return res
})

// 需求列表数据

Mock.mock(/\/caseApi\/getdemandList/, 'get', (config) => {
  const result = []
  for (let i = 0; i < 20; i++) {
    result.push(Mock.mock({
      key: i + 1,
      RequirementName: '@ctitle(15)',
      'LineofBusiness|1': ['企业与消费者的电子商务B2C(business to customer)', '线下商务的机会与互联网结合的电子商务O2O(Online To Offline)', '消费者与政府机构的电子商务C2G(customer to Government)'],
      country: '@ctitle(3)',
      CreationTime: Random.datetime('yyyy-MM-dd'),
      'priority|1': ['P0', 'p1', 'p2', 'p3'],
      creator: '@cname()',
      DemandStatus: '@ctitle(5)',
      operate: '...',
      avatar_url_01: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`,
      avatar_url_02: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`
    }
    ))
  }

  const res = {
    msg: 'success',
    success: 'true',
    retcode: 200,
    retlist: [result]
  }
  return res
})

// 缺陷列表数据

Mock.mock(/\/caseApi\/getdefectList/, 'get', (config) => {
  const result = []
  for (let i = 0; i < 10; i++) {
    result.push(Mock.mock({
      key: i + 1,
      DefectTitle: '@ctitle(15)',
      'priority|1': ['P0', 'P1', 'P2', 'P3'],
      'OwningEnd|1': ['FE前端', 'Server服务端'],
      country: '@ctitle(3)',
      responsibleOwner: '@cname(3)',
      reporter: '@cname(2)',
      ProblemAttribution: '@ctitle(6)',
      'curStatus|1': ['已解决', '未解决'],
      RootCause: '@ctitle(5)',
      RdResults: '@ctitle(5)',
      QAResults: '@ctitle(5)',
      LineBusiness: '@ctitle(6)',
      CreateTime: Random.datetime('yyyy-MM-dd'),
      Findmethods: '@ctitle(4)',
      'discoveryStage|1': ['BOE', 'PPE'],
      IssueType: '@ctitle(4)',
      operator: '@cname(3)',
      creator: '@cname()',
      operate: '...',
      avatar_url_01: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`,
      avatar_url_02: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`,
      avatar_url_03: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`,
      avatar_url_04: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock('@integer(1,8)')}.jpg`
    }
    ))
  }

  const res = {
    msg: 'success',
    success: 'true',
    retcode: 200,
    retlist: [result]
  }
  return res
})
