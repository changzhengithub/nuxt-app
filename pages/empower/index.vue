<template>
  <div class="empower">
    <div class="empower-container">
      <div class="container-login">
        <div class="login-title">
          <div class="title-text">Nuxt预渲染</div>
        </div>
        <div class="login-form">
          <div class="form-item">
            <div class="item-wrap">
              <div class="wrap-input">
                <a-icon class="input-icon" type="user" />
                <input class="form-input" v-model="formData.name" type="text" placeholder="请输入用户名" />
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="item-wrap">
              <div class="wrap-input">
                <a-icon class="input-icon" type="lock" />
                <input class="form-input" v-model="formData.password" :type="!pwdType ? 'password' : 'text'" placeholder="请输入密码" @keypress.enter="submitForm" />
              </div>
              <div class="wrap-type" @click="togglePwdType">
                <a-icon v-if="pwdType" type="eye-invisible" />
                <a-icon v-else type="eye" />
              </div>
            </div>
          </div>
          <div class="form-item">
            <div class="item-wrap">
              <div class="wrap-code">
                <a-icon class="input-icon" type="safety" />
                <input class="form-input" v-model="formData.code" type="text" placeholder="请输入验证码" @keypress.enter="submitForm" />
              </div>
              <div class="wrap-img" @click="getVerifyCode">
                <img v-if="!codeLoad" :src="formData.verifyImg" alt="" />
                <a-icon v-else type="loading" />
              </div>
            </div>
          </div>
          <div class="form-item">
            <!-- <div class="item-label"></div> -->
            <div class="item-wrap">
              <div class="wrap-button">
                <a-button type="primary" block :loading="submitLoad" @click="submitForm">登录</a-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-copyright">
        <span>@copyright2024</span>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * @description 登录页面
 * @author changz
 * */
import storage from 'store'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Empower',
  data() {
    return {
      codeLoad: false,
      submitLoad: false,
      pwdType: false,
      formData: {
        name: '',
        password: '',
        code: '',
        key: '',
        verifyImg: ''
      }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created() {
    // this.getVerifyCode()
  },
  methods: {
    ...mapMutations(['setUserInfo']),

    togglePwdType() {
      this.pwdType = !this.pwdType
    },

    // 获取验证码
    getVerifyCode() {
      this.codeLoad = true
      this.$axios
        .$get('/api/captcha')
        .then(res => {
          this.codeLoad = false
          if (res.code !== 200) {
            this.$notification.warning({
              message: '提示',
              description: res.msg
            })
            return
          }
          const { img, key } = res.data
          this.formData.verifyImg = img
          this.formData.key = key
          this.formData.code = ''
        })
        .catch(err => {
          this.codeLoad = false
          this.$notification.warning({
            message: '提示',
            description: err.message
          })
        })
    },
    // 登录
    submitForm() {
      storage.set('ACCESS_TOKEN', 'TOKEN_LOGIN_1010001001')
      this.setUserInfo({
        id: 1,
        username: '超级管理员'
      })
      this.$message.success('登录成功')
      this.$router.push({ path: '/' })

      // 对接你的真实数据
      // const { name, password, code, key } = this.formData
      // if (!name) {
      //   this.$message.warning('请输入用户名')
      //   return
      // }
      // if (!password) {
      //   this.$message.warning('请输入密码')
      //   return
      // }
      // if (!code) {
      //   this.$message.warning('请输入验证码')
      //   return
      // }
      // const params = {
      //   name,
      //   password,
      //   code,
      //   key
      //   // ...this.encryptData
      // }
      // this.submitLoad = true
      // this.$axios
      //   .$post('/api/login', params)
      //   .then(res => {
      //     this.submitLoad = false
      //     if (res.code !== 200) {
      //       this.$notification.warning({
      //         message: '提示',
      //         description: res.msg
      //       })
      //       this.getVerifyCode()
      //       return
      //     }
      //     const { token, data } = res
      //     storage.set('ACCESS_TOKEN', token, 7 * 24 * 60 * 60 * 1000)
      //     this.setUserInfo(data)
      //     this.$message.success('登录成功')
      //     this.$router.push({ path: '/' })
      //   })
      //   .catch(err => {
      //     this.submitLoad = false
      //     this.getVerifyCode()
      //     this.$notification.warning({
      //       message: '提示',
      //       description: err.message
      //     })
      //   })
    }
  }
}
</script>

<style lang="less" scoped>
.empower {
  width: 100%;
  height: 100%;
  min-height: 740px;
  background-color: #fff;
  background: url('@/assets/images/bg.svg') 0 0 no-repeat;
  background-size: 100% 100%;

  .empower-container {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9;
    width: 400px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    transform: translate(-50%, -50%);

    .container-login {
      width: 100%;
      padding: 34px 0 18px 0;

      .login-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 26px;
        text-align: center;

        .title-logo {
          width: 274px;
          height: 68px;
          margin-bottom: 22px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .title-text {
          margin-bottom: 8px;
          font-size: 30px;
          font-weight: 500;
          color: #4e5969;
          line-height: 35px;
        }
      }

      .login-form {
        width: 100%;
        padding: 0 40px;

        .form-item {
          .flex_vertical_center();
          width: 100%;
          margin-bottom: 26px;

          .item-label {
            width: 25%;
            padding-right: 16px;
            font-size: 14px;
            color: #4e5969;
            text-align: right;
          }

          .item-wrap {
            position: relative;
            .flex_vertical_center();
            width: 100%;

            .wrap-input {
              position: relative;
              width: 100%;

              .input-icon {
                position: absolute;
                left: 10px;
                top: 50%;
                z-index: 9;
                font-size: 14px;
                color: #353535;
                transform: translateY(-50%);
              }
            }

            .wrap-type {
              position: absolute;
              right: 10px;
              top: 50%;
              z-index: 9;
              transform: translateY(-50%);
              cursor: pointer;
            }

            .wrap-code {
              position: relative;
              width: calc(100% - 140px);

              .input-icon {
                position: absolute;
                left: 10px;
                top: 50%;
                z-index: 9;
                font-size: 14px;
                color: #353535;
                transform: translateY(-50%);
              }
            }

            .wrap-img {
              .flex_center();
              width: 130px;
              height: 40px;
              margin-left: 10px;
              font-size: 14px;
              color: #86909c;
              background-color: #f2f3f5;
              border-radius: 4px;
              cursor: pointer;

              img {
                width: 100%;
                // height: 100%;
                border-radius: 4px;
                object-fit: cover;
              }
            }

            .wrap-button {
              width: 100%;
              padding-top: 16px;
            }

            .form-input {
              width: 100%;
              height: 40px;
              padding: 0 30px 0 30px;
              font-size: 14px;
              color: #86909c;
              border: 1px solid #e4e7ed;
              background-color: #fff;
              border-radius: 4px;
              outline: none;
              transition: all 0.3s;

              &:hover {
                border-color: #407fff;
              }

              &:focus {
                border-color: #407fff;
              }

              &::placeholder {
                color: #c0c4cc;
              }
            }
          }
        }
      }
    }

    .container-copyright {
      position: absolute;
      bottom: -90px;
      z-index: 9;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      color: #86909c;
      line-height: 22px;
    }
  }
}
</style>
