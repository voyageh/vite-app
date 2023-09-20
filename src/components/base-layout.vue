<script setup lang="ts">
import { Icon } from '@iconify/vue'

const route = useRoute()

const store = useAccountStore()
const { userInfo } = storeToRefs(store)

const activePath = computed(() => route.path)
const isCollapse = ref(false)

const platformName = import.meta.env.VITE_PLATFORM_NAME
</script>

<template>
  <el-container class="base-layout">
    <el-aside class="left-box" width="auto">
      <div class="logo-box">
        <div class="logo-img" />
        <Transition name="bounce">
          <span v-if="!isCollapse">{{ platformName }}</span>
        </Transition>
      </div>
      <el-scrollbar wrap-class="scroll-box">
        <ul-menu
          :menus="userInfo.menus"
          background-color="#2b303b"
          text-color="#bfcbd9"
          active-text-color="#ffffff"
          select-bg-color="#597ef7"
          :default-active="activePath"
          router
          :collapse="isCollapse"
        />
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="base-layout__header">
        <el-icon size="1.25rem" @click="isCollapse = !isCollapse">
          <Icon :icon="isCollapse ? 'ep:fold' : 'ep:expand'" />
        </el-icon>
      </el-header>
      <el-main class="base-layout__main">
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.base-layout {
  width: 100%;
  height: 100%;

  .left-box {
    overflow: hidden;
    display: flex;
    flex-direction: column;

    :deep(.scroll-box) {
      flex: 1;
      background-color: #2b303b;
      .el-sub-menu__title {
        padding-right: 0;
      }
    }
    .logo-box {
      color: #fff;
      border-right: solid 1px var(--el-menu-border-color);
      background-color: #2b303b;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;

      .logo-img {
        width: 30px;
        height: 30px;
        background: url("/logo.svg") center/100%;
      }
      span {
        margin-left: 6px;
      }

      .bounce-enter-active {
        animation: jackInTheBox 0.6s;
      }

      @keyframes jackInTheBox {
        from {
          opacity: 0;
          transform: scale(0.1) rotate(30deg);
          transform-origin: center bottom;
        }

        50% {
          transform: rotate(-10deg);
        }

        70% {
          transform: rotate(3deg);
        }

        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }

  &__header {
    height: 50px;
    display: flex;
    align-items: center;
    border-right: solid 1px var(--el-menu-border-color);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    z-index: 1;

    :deep(.el-icon) {
      margin-right: 20px;
    }
  }

  &__main {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #f4f7fc;

    :deep(.el-breadcrumb) {
      margin-bottom: 15px;
    }
  }
}
</style>
