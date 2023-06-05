
// 柱状图options数据
// 指定图表的配置项和数据
const optionColumnar = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
}

// const optionPie = {
//   title: {
//     text: '执行率 70%',
//     left: 'center',
//     top: 'center'
//   },
//   series: [
//     {
//       type: 'pie',
//       data: [
//         {
//           value: 335,
//           name: '已通过'
//         },
//         {
//           value: 234,
//           name: '待执行'
//         },
//         {
//           value: 1548,
//           name: '阻塞'
//         }
//       ],
//       radius: ['40%', '70%']
//     }
//   ]
// }

// 饼图
const optionPie = {
  tooltip: {
    trigger: 'item',
    alwaysShowContent: false
  },
  title: {
    text: '执行率',
    subtext: '7.8%',
    left: 'center',
    top: 'center',
    textStyle: {
      fontSize: 30
    },
    subtextStyle: {
      fontSize: 20
    }

  },
  // legend: {
  //   orient: 'vertical',
  //   x: 'right',
  //   data: ['已通过', '未通过', '阻塞', '跳过 ', '待执行']
  // },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: true,
      label: {
        show: false,
        position: 'insideTop'
      },
      labelLine: {
        show: true
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '12',
          fontWeight: 'bold'
          // position: 'top'
        }
      },
      data: [
        { value: 335, name: '已通过' },
        { value: 310, name: '未通过' },
        { value: 234, name: '阻塞' },
        { value: 135, name: '跳过' },
        { value: 1548, name: '待执行' }
      ]
    }
  ]
}

// 柱图数据

const optionCol = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    show: true,
    orient: 'horizontal'
  },
  series: [
    {
      name: '已执行',
      data: [10, 22, 28, 43, 49],
      type: 'bar',
      stack: 'x',
      color: ['#4f75de']
    },
    {
      name: '未执行',
      data: [5, 4, 3, 5, 10],
      type: 'bar',
      stack: 'x',
      color: ['#91a9ea']
    }
  ]
}

export { optionColumnar, optionPie, optionCol }
