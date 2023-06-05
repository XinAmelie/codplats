
import useClipboard from 'vue-clipboard3'
import { Message } from '@arco-design/web-vue'

const { toClipboard } = useClipboard()

export const copyText = async (message) => {
  try {
    await toClipboard(message)
    Message.success('复制成功')
  } catch (e) {
    Message.error('浏览器不支持复制')
  }
}
