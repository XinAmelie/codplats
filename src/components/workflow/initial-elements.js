import { MarkerType, Position } from '@vue-flow/core'

export const initialElements = [
  {
    id: '1',
    type: 'toolbar',
    label: '开始',
    position: { x: 0, y: 80 },
    sourcePosition: Position.Right,
    data: { toolbarPosition: Position.Top }
  },
  {
    id: '6',
    type: 'toolbar',
    label: '技术评审',
    position: { x: 100, y: 80 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { toolbarPosition: Position.Top }
  },
  {
    id: '2',
    type: 'toolbar',
    label: '安全技术评审',
    position: { x: 250, y: 0 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    data: { toolbarPosition: Position.Right }
  },
  { id: '3', type: 'toolbar', label: 'Server估分', position: { x: 250, y: 50 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Right } },
  { id: '4', type: 'toolbar', label: 'FE估分', position: { x: 250, y: 100 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Right } },
  { id: '7', type: 'toolbar', label: 'RD联调/提测', position: { x: 580, y: 80 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Top } },
  { id: '9', type: 'toolbar', label: 'Server开发&自测', position: { x: 400, y: 50 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Right } },
  { id: '10', type: 'toolbar', label: 'FE开发&自测', position: { x: 400, y: 100 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Right } },
  { id: '11', type: 'toolbar', label: 'QA测试用例设计&评审', position: { x: 250, y: 300 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Right } },
  {
    id: '5',
    type: 'toolbar',
    label: '功能测试(BOE)',
    position: { x: 750, y: 80 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: '12',
    type: 'toolbar',
    label: '回归测试(PPE)',
    position: { x: 900, y: 80 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  { id: '13', type: 'toolbar', label: 'Server 上车/上线', position: { x: 1050, y: 50 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Right } },
  { id: '14', type: 'toolbar', label: 'FE 上车/上线', position: { x: 1050, y: 100 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Right } },
  { id: '15', type: 'toolbar', label: '集成验收', position: { x: 1250, y: 80 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Top } },
  { id: '16', type: 'toolbar', label: '结束', position: { x: 1400, y: 80 }, sourcePosition: Position.Right, targetPosition: Position.Left, data: { toolbarPosition: Position.Top } },

  { id: 'e1-6', source: '1', target: '6', style: { stroke: 'rgb(195 199 202)' }, labelBgStyle: { fill: 'rgb(195 199 202)' } },
  { id: 'e6-3', source: '6', target: '3', animated: true },
  { id: 'e6-2', source: '6', target: '2', animated: true },
  { id: 'e6-4', source: '6', target: '4', animated: true },
  { id: 'e3-9', source: '3', target: '9', style: { stroke: 'rgb(195 199 202)' }, labelBgStyle: { fill: 'rgb(195 199 202)' } },
  { id: 'e4-10', source: '4', target: '10', style: { stroke: 'rgb(195 199 202)' }, labelBgStyle: { fill: 'rgb(195 199 202)' } },
  { id: 'e6-11', source: '6', target: '11', animated: true },
  { id: 'e9-7', source: '9', target: '7', animated: true },
  { id: 'e10-7', source: '10', target: '7', animated: true },
  { id: 'e7-5', source: '7', target: '5', style: { stroke: 'rgb(195 199 202)' }, labelBgStyle: { fill: 'rgb(195 199 202)' } },
  { id: 'e5-12', source: '5', target: '12', style: { stroke: 'rgb(195 199 202)' }, labelBgStyle: { fill: 'rgb(195 199 202)' } },
  { id: 'e12-13', source: '12', target: '13', animated: true },
  { id: 'e12-14', source: '12', target: '14', animated: true },
  { id: 'e13-15', source: '13', target: '15', animated: true },
  { id: 'e14-15', source: '14', target: '15', animated: true },
  { id: 'e15-16', source: '15', target: '16', style: { stroke: 'rgb(195 199 202)' }, labelBgStyle: { fill: 'rgb(195 199 202)' } },
  { id: 'e11-5', source: '11', target: '5', style: { stroke: '#37D4CF' }, labelBgStyle: { fill: '#37D4CF' }, type: 'simple-bezier' }
]
