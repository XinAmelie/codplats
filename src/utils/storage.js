/**
储存数据
**/

export const setItem = (key, value) => {
  if (typeof value === 'object') {
    // 把object数据类型转换为json
    console.log(key, value)
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
获取数据
 **/
export const getItem = (key) => {
  console.log(key)
  //  try catch 错误处理；
  // 执行规则：首先执行try中的代码 如果抛出异常会由catch去捕获并执行 如果没有发生异常 catch去捕获会被忽略掉 但是不管有没有异常最后都会执行。
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    console.log(data)
    return data
  }
}

/**
删除数据
**/

export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/**
 删除所有的数据
**/

export const removeAllItem = key => {
  window.localStorage.clear()
}
