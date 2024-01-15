<template>
  <a-spin dot :spinning="pageLoad" :style="{ width: '100%' }" tip="加载中...">
    <div class="basic">
      <header class="basic-header">
        <nuxt-link to="/">
          <div class="header-logo">
            <img src="/logo.png" alt="" />
            <h1 class="logo-title">Nuxt预渲染</h1>
          </div>
        </nuxt-link>
        <div class="header-nav">
          <nuxt-link class="nav-item" :to="item.path" :class="{ 'item-active': $route.path == item.path }" v-for="(item, index) in routeList" :key="index">
            {{ item.name }}
          </nuxt-link>
        </div>
        <div class="header-right">
          <a-dropdown v-if="userInfo" placement="bottomRight">
            <div class="right-user">
              <div class="user-avatar">
                <img src="@/assets/images/avatar.png" alt="" />
              </div>
              <div class="user-name">{{ userInfo.username }}</div>
            </div>
            <template v-slot:overlay>
              <a-menu :selected-keys="[]">
                <a-menu-item key="center" @click="gotoPage('/user-center')">
                  <a-icon type="user" />
                  个人中心
                </a-menu-item>
                <a-menu-item key="logout" @click="handleLogout">
                  <a-icon type="logout" />
                  退出登录
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <div class="right-login" v-else @click="gotoPage('/empower')">登录</div>
        </div>
      </header>
      <main class="basic-main">
        <nuxt />
      </main>
      <footer class="basic-footer">
        <span>Copyright© 2020-{{ new Date().getFullYear() }}</span>
      </footer>
    </div>
  </a-spin>
</template>

<script>
/**
 * @description 公共布局页面
 * @author changz
 * */
import storage from 'store'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'BasicLayout',
  data() {
    return {
      pageLoad: false,
      routeList: [
        { name: '首页', path: '/' },
        { name: '产品', path: '/product' },
        { name: '新闻', path: '/news' },
        { name: '关于我们', path: '/about' },
        { name: '我的', path: '/mine' }
      ]
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    gotoPage(path) {
      this.$router.push({ path })
    },
    handleLogout() {
      this.$confirm({
        title: '提示',
        content: '确认退出登录',
        onOk: () => {
          storage.clearAll()
          this.setUserInfo(null)
          this.$router.push({ path: '/empower' })
        },
        onCancel() {}
      })
    }
  }
}
</script>

<style lang="less" scoped>
.basic {
  width: 100%;
  .basic-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0 32px;
    background-color: #fff;
    box-shadow: 0 0 10px 5px #f1f1f1;
    .header-logo {
      display: flex;
      align-items: center;
      img {
        width: 34px;
        height: 34px;
        margin-right: 10px;
      }
      .logo-title {
        font-weight: 600;
        font-size: 20px;
        color: #333;
      }
    }
    .header-nav {
      display: flex;
      align-items: center;
      flex: 1;
      height: 100%;
      margin-left: 10vw;
      .nav-item {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 20px;
        font-size: 16px;
        color: #333;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          color: #165dff;
        }
        &.item-active {
          color: #165dff;
          border-bottom: 2px solid #165dff;
        }
      }
    }
    .header-right {
      .right-user {
        display: flex;
        align-items: center;
        height: 64px;
        .user-avatar {
          width: 24px;
          height: 24px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .user-name {
          margin-left: 10px;
          font-size: 14px;
          color: #78787c;
        }
      }
      .right-login {
        font-size: 14px;
        color: #78787c;
        cursor: pointer;
      }
    }
  }
  .basic-main {
    width: 100%;
    min-height: calc(100vh - 64px - 80px);
  }
  .basic-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    font-size: 20px;
    color: #fff;
    background-color: #0b1632;
  }
}
</style>
