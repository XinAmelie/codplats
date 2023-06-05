import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/components/Layout/index' // 全部加载，因为需要大量的使用

// 公开路由表 将来放404 401
const PublicRoutes = [
  {
    path: '/login',
    component: () => import('../views/Login')
  },
  {
    path: '/',
    redirect: '/interface-tool',
    component: layout,
    children: [
      {
        path: '/interface-tool',
        component: () => import('../views/interface-tool-page/index'),
        meta: { title: '接口工具页', icon: 'icon-mind-mapping' },
        name: 'tools'
      }
    ]
  }
]

// 私有权限路由表
const PrivateRoutes = [
  {
    path: '/docx/create',
    component: () => import('../views/project-management-page/MyDoc/newCreateArticle')
  },
  {
    path: '/manageCase',
    component: layout,
    meta: { title: '用例管理页', icon: 'icon-pen' },
    name: 'manage_case_0',
    redirect: '/manageCase/manuCase',
    children: [
      {
        path: '/manageCase/manuCase',
        meta: { title: '手工用例', icon: 'icon-pen' },
        name: 'manage_case_1',
        component: () => import('../views/Case-management-page/Manual-case')
      },
      {
        path: '/manageCase/manuCase/Create',
        meta: { title: '脑图用例' },
        name: 'manage_case_1_1',
        component: () => import('@/components/xmind')
      },
      {
        path: '/manageCase/IfCase',
        meta: { title: '接口用例', icon: 'icon-pen' },
        name: 'manage_case_2',
        component: () => import('../views/Case-management-page/Interface-case')
      },
      {
        path: '/manageCase/IfCaseDetails/:id',
        meta: { title: '用例详情页' },
        name: 'manage_case_2_1',
        component: () => import('../views/Case-management-page/Interface-case/InterfaceDetails/Interfacedetails')
      }

    ]

  },
  {
    path: '/manageTask',
    meta: { title: '任务管理页', icon: 'icon-apps' },
    name: 'manage_task_0',
    component: layout,
    redirect: '/manageTask/manuPlan',
    children: [
      {
        path: '/manageTask/manuPlan',
        meta: { title: '手工计划', icon: 'icon-apps' },
        name: 'manage_task_1',
        component: () => import('../views/task-management-page/Manual-plan')
      },
      {
        path: '/manageTask/manuPlanDetail/:id',
        meta: { title: '手工计划详情页' },
        name: 'manage_task_1_1',
        component: () => import('../views/task-management-page/Manual-plan/ManPlanDetail/ManPlanDetail')
      },

      {
        path: '/manageTask/IfPlan',
        meta: { title: '接口计划', icon: 'icon-apps' },
        name: 'manage_task_2',
        component: () => import('../views/task-management-page/Interface-plan')
      },
      {
        path: '/manageTask/DataChart',
        meta: { title: '数据分析', icon: 'icon-apps' },
        name: 'manage_dataChart_3',
        component: () => import('../views/task-management-page/Data-Chart')
      },
      {
        path: '/manageTask/createPlan',
        meta: { title: '新建手工计划' },
        name: 'manage_task_4',
        component: () => import('@/views/task-management-page/Manual-plan/createPlan')
      },
      {
        path: '/manageTask/createIfPlan',
        meta: { title: '新建接口计划' },
        name: 'manage_task_5',
        component: () => import('@/views/task-management-page/Interface-plan/createIfplan')
      }

    ]
  },
  {
    path: '/manageReport',
    meta: { title: '统计管理页', icon: 'icon-bar-chart' },
    name: 'manage_report_0',
    component: layout,
    redirect: '/manageReport/ifReport',
    children: [
      {
        path: '/manageReport/ifReport',
        meta: { title: '接口报告', icon: 'icon-bar-chart' },
        name: 'manage_ifReport_1',
        component: () => import('../views/report-management-page/Interface-report')
      },
      {
        path: '/manageReport/ManuReport',
        meta: { title: '手工报告', icon: 'icon-bar-chart' },
        name: 'manage_ManuReport_2',
        component: () => import('../views/report-management-page/Manual-report')
      }

    ]
  },
  {
    path: '/manageProject',
    meta: { title: '项目管理页', icon: 'icon-computer' },
    name: 'manage_project_0',
    component: layout,
    redirect: 'manageProject/demand',
    children: [
      {
        path: '/manageProject/demand',
        meta: { title: '项目需求', icon: 'icon-computer' },
        name: 'manage_demand_1',
        component: () => import('../views/project-management-page/demand')
      },
      {
        path: '/manageProject/Dedetail/:id',
        name: 'manage_demandDetails_1_1',
        meta: { title: '需求详情页' },
        component: () => import('../views/project-management-page/demand/DemanDetails/index')
      },
      {
        path: '/manageProject/defect',
        meta: { title: '项目缺陷', icon: 'icon-computer' },
        name: 'manage_defect_2',
        component: () => import('../views/project-management-page/defect')
      },
      {
        path: '/manageProject/defectDetails/:id',
        meta: { title: '缺陷详情页' },
        name: 'manage_defect_2_1',
        component: () => import('../views/project-management-page/defect/DefectDetail/DefectDetails')
      },
      {
        path: '/manageProject/myDoc',
        meta: { title: '总结文档', icon: 'icon-computer' },
        name: 'manage_doc_3',
        component: () => import('../views/project-management-page/MyDoc')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  // 扩展运算符。
  // 对数组和对象而言，就是将运算符后面的变量里东西每一项拆下来。解包
  routes: [...PublicRoutes, ...PrivateRoutes]
})

export default router
