<template>
  <HeadNavBar />
  <div style="height: 60px;background-color:#f6f6fb ">
    <div style=
           "width: 928px;
           position: absolute;
           left: 50%;
            margin-left: -424px;
            margin-top: 30px;
            line-height: 27.594px;
            "
    >
      <span style="text-align: start;font-size: 24px;font-weight: 700;color: #191d32">Log In</span>
      <span style="float: right;color: #212533;font-size: 14px">Don't have an account yet?&nbsp;&nbsp;&nbsp;&nbsp;<span> <a href="#" style="text-decoration: none;font-size: 14px">Sgin up</a></span></span>
    </div>
  </div>

  <div
    :style="{
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      padding: '40px',
      backgroundColor: '#f6f6fb',
      height: '100%',
    }"
  >

    <!--   marginLeft 在变量中注意写法   -->

    <a-card
      :style="{
      width: '826px',
      left: '50%',
      marginLeft: '-423px',
      height: '402px',
      padding: '10px',
      top: '-20px',
    }">
      <div style=" width: 413px;height:428px;float: left;position: relative">
        <img style="width: 220px;height: 220px;position: absolute;top: 50%;margin-top: -110px;left: 50%;margin-left:-110px " :src="IconLogin">
      </div>
      <div style="width: 413px;height:428px;justify-content: flex-end;float: right;" >
        <div>
          <a-form ref="formRef" :model="loginform" >
          <a-space direction="vertical" size="large">
            <span style="font-weight: 600;font-size: 14px">Phone Number<span style="float: right"><a href="#" style="text-decoration: none">Log in with email</a></span></span>
            <a-form-item field="username" label=""
             :validate-trigger="['blur']"
             :rules="rules"
             :validate-status="status"
             feedback
            >
              <!--filed绑定的值要和v-model的key是一致的-->
              <!--allow-clear允许清空输入框-->
              <a-input :style="{width:'320px'}"   v-model="loginform.username" placeholder="Enter your Phone number" allow-clear  @keyup.enter="handleLogin">
              <template #prefix>
                <icon-user />
              </template>
            </a-input>
            </a-form-item>

            <span style="font-weight: 600;font-size: 14px">Password<span style="float: right"><a href="#" style="text-decoration: none;font-size: 12px;font-weight: 400;cursor: pointer;font-family: Proxima Nova;color: #474c66">Forgot the password?</a></span></span>
            <a-form-item
            field="password"
            :rules="pwdrules"
            :validate-status="pwdstatus"
            label=""
            feedback
            :validate-trigger="['blur']"
            >
<!--              filed绑定的值要和v-model的key是一致的-->
              <a-input-password :style="{width:'320px'}"  v-model="loginform.password" placeholder="Enter your password" @keyup.enter="handleLogin" />
            </a-form-item>

            <!-- 登录 按钮-->
            <a-form-item>
              <a-button
              type="primary"
              @click="handleLogin"
              :loading= "loading"
              >
                Log In
              </a-button>

            </a-form-item>
          </a-space>
          </a-form>
        </div>

      </div>

    </a-card>
  </div>

</template>

<script setup>

import HeadNavBar from '@/components/NavigationBar/HeadNavBar'
import { IconUser } from '@arco-design/web-vue/es/icon'
import { reactive, ref } from 'vue'
import { UserRules, PwdRules } from '@/views/Login/loginrules'
import { useStore } from 'vuex'
import { Message } from '@arco-design/web-vue'

const IconLogin = require('@/assets/icon_id_login.png')

// 登录
// 实例store对象，调用他的方法
const store = useStore()

const loginform = reactive(

  {
    username: '和泰网络有限公司',
    password: '111111'
  }
)

// loading加载
const formRef = ref(null)
const loading = ref(false)

// formdata数据的处理
const formData = new FormData()

// loginform是object,forEach循环,循环数组中每一个元素并采取操作, 没有返回值, 可以不用知道数组长度
// 循环object的key和value
Object.keys(loginform).forEach(key => {
  formData.append(`${key}`, `${loginform[key]}`)
})

// 遍历查询
formData.forEach((value, key) => {
  console.log(`${key}:${value}`)
})

// 创建一个空的object,并添加对象和数值
// const obj = {}
// formData.forEach((value, key) => {
//   obj[key] = value
// })
// console.log(obj)

const handleLogin = () => {
  // 如果表单输入的内容符合规则  那么valid这个就是true 反之就是false
  // 目前的组件，是返回undfeind是正确值;错误值是object的错误内容

  formRef.value.validate(valid => {
    if (typeof (valid) === 'undefined') {
      valid = true
    } else {
      valid = false
    }

    // 官方定义return语句将终止当前函数并返回当前函数的值
    if (!valid) return

    loading.value = true

    // loginform formData

    store
      // user模型下actions的login方法
      .dispatch('user/login', loginform)
      .then((res) => {
        // 以后补充登录的操作
        console.log(res[0].data.userInfo.username)

        Message.success('欢迎' + res[0].data.userInfo.username + '登录')
        setTimeout(() => {
          loading.value = false
        }, 1000)
      })
      .catch(err => {
        console.log(err)
        // Message.error('登录错误')
        setTimeout(() => {
          loading.value = false
        }, 1000)
      })
  })
}

// 校验状态
const status = ref('')
const pwdstatus = ref('')

// 自定义校验规则
// username
const rules = reactive([{ required: true, validator: UserRules(status) }, { required: true, message: 'The phone is required' }])
// 校验密码规则
const pwdrules = reactive([{ required: true, validator: PwdRules(pwdstatus) }, { required: true, message: 'the pwd is required' }])
</script>

<style scoped lang="scss">

//根节点

:deep(#app){
  height: 100vh;
}

:deep(.arco-card-body){
  padding: 0;
}

//输入框的样式
:deep(.arco-input-wrapper){
  border: 1px #d9dbe6 solid;
  background-color: white;
  height: 45px;
  border-radius: 3px;

}

:deep(.arco-space-vertical){
  padding: 50px;
}
//按钮自适应
:deep(.arco-btn-primary){
  width: 100%;
  border-radius: 5px;
  height: 44px;
}

:deep(.arco-space-item){
  margin-bottom: 5px!important;
  margin-top: 18px!important;
}

//调试样式
:deep(.arco-col-5){
  flex: none;
  width: auto;
  display: block;
}

:deep(.arco-row){
display: block;
width: 400px!important;
}

//隐藏*号
:deep(.arco-form-item-label-required-symbol){
  display: none;

}
</style>

<style>

#app{
  height: 100vh;
}

</style>
