/*
处理用户的tokne时效
*/

import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

/*
 获取时间戳
  */

export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}

/*
设置当前的时间戳
*/

export function setTimeStamp () {
  setItem(TIME_STAMP, Date.now())
}

/* 判断是否超时 */

export function isCheckTimeout () {
  // 当前时间戳
  const currentTime = Date.now()
  // 缓存存的开始的时间戳
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
