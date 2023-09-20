<script setup lang="ts">
import type { FormInstance, IFormItem } from 'udesign-vue'

definePage({
  meta: {
    title: '登录',
    layout: 'custom',
  },
})

const formRef = ref<FormInstance>()

const loginInfo = reactive<any>({
  username: '',
  password: '',
  autoLogin: false,
})

const content = ref<IFormItem[]>([
  {
    component: 'input',
    label: '用户名',
    id: 'username',
    el: {
      placeholder: '请输入用户名',
    },
    rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  },
  {
    component: 'input',
    label: '密码',
    id: 'password',
    el: {
      placeholder: '请输入密码',
      type: 'password',
    },
    rules: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  },
])

async function login() {
  await formRef.value?.validate()?.(async (_valid) => {

  })
}
</script>

<template>
  <div class="login-page">
    <div class="left-box" />
    <div class="right-box">
      <ul-form ref="formRef" class="login-form" :content="content" :model="loginInfo" label-position="top">
        <el-form-item>
          <el-button class="sub-btn" type="primary" @click="login">
            登录
          </el-button>
          <div class="op-box">
            <el-checkbox v-model="loginInfo.autoLogin">
              自动登陆
            </el-checkbox>
            <router-link to="/">
              忘记密码?
            </router-link>
          </div>
        </el-form-item>
      </ul-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .left-box {
    flex: 1;
    background: url("@/assets/images/login-bg.svg") #0b71cc no-repeat center;
    background-size: 88%;
  }

  .right-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-form {
      width: 330px;

      :deep(.el-input__wrapper) {
        padding: 1px;

        .el-input__inner {
          padding: 0 10px;
        }
      }
      .sub-btn {
        width: 100%;
        margin-bottom: 15px;
      }
      .op-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
