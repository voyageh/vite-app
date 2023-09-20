<script setup lang="ts">
useHead({
  title: '404 - Not Found',
})

definePage({
  meta: {
    layout: 'custom',
  },
})

const router = useRouter()
function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="error-page">
    <div class="img-box" />
    <p class="error-message">
      404 - Not Found
    </p>
    <el-button class="back-box" type="primary" @click="goBack">
      返回
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :deep(.el-image) {
    width: 100%;
    height: 50vh;
  }

  .img-box {
    width: 100%;
    height: 50vh;
    background: url("@/assets/images/404.svg") no-repeat center/contain;
  }

  .error-message {
    color: #666060;
    margin-bottom: 40px;
  }

  .back-box {
    width: 16vw;
    margin-bottom: 12vh;
  }
}
</style>
