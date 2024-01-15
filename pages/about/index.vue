<template>
  <div class="index">
    <div class="index-banner">
      <div class="container">
        <div class="banner-title">关于我们</div>
        <div class="banner-intro">三实寓意“诚实做人、踏实做事、实干兴业”，致力于成为用户长期可信的一站式IT服务管家。</div>
      </div>
    </div>

    <div class="index-container">
      <div class="container-section background">
        <div class="section-background">
          <div class="background-detail">
            <div class="detail-title">公司简介</div>
            <div class="detail-desc">
              <p>
                安徽三实是由一群技术专家于2013年共同发起创立、专注于信息技术服务的高新技术企业。公司主要围绕“成为用户长期可信的一站式IT服务管家”的组织愿景，在践行“诚实做人、踏实做事、实干兴业”的组织价值观下，为用户提供贴身定制“软件开发、数据分析、安全保障、运行维护、系统集成”等全系列专业的信息化服务，落实三实“让用户工作变简单”的组织使命。
              </p>
              <p>
                经过多年的探索和沉淀，在业务数字化定制开发方面，公司已经形成覆盖房产监管行业（房管局）全业务场景、国有房屋资产租赁管理全业务场景的行业应用软件产品解决方案；在IT基础设施支撑服务方面，公司依托自主研发的“云悉IT统一运营平台”和模块化的服务产品，为用户灵活定制全系列基础信息化运维服务解决方案，满足用户数据中心个性化、全场景的运维服务需求。
              </p>
            </div>
          </div>
          <div class="background-img">
            <img src="@/assets/images/data.png" alt="" />
          </div>
        </div>
      </div>
      <div class="container-section">
        <div class="section-wrap">
          <div class="wrap-header">联系我们</div>
          <div class="wrap-adv">
            <div class="adv-item" v-for="(item, index) in advList" :key="index">
              <div class="item-icon">
                <img :src="item.icon" alt="" />
              </div>
              <div class="item-title">{{ item.title }}</div>
              <div class="item-desc">{{ item.remark }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @desc 关于我们
 * @author changz
 * */
export default {
  name: 'About',
  // 当前页面使用的基础布局
  layout: 'BasicLayout',
  // 用户获取数据
  asyncData(context) {
    return { name: 'World' }
  },

  data() {
    return {
      title: '关于我们',
      productList: [
        {
          title: '运维审批流程',
          remark: '通过“预先申请-领导审批-运维执行”的方式，管控可能对数据库和核心敏感数据造成负面影响的运维行为。',
          icon: require('@/assets/images/play.png')
        },
        {
          title: '主流数据库支持',
          remark: '支持oracle、mysql等主流数据库，同时支持云厂商RDS、人大金仓和达梦等国产数据库。',
          icon: require('@/assets/images/num-data.png')
        },
        {
          title: '数据库操作全记录',
          remark: '记录运维人员在平台使用中所有进行的数据库操作，形成全面的审计报表。',
          icon: require('@/assets/images/operate.png')
        },
        {
          title: '数据库安全运维',
          remark: '平台提供运维人员日常的数据库操作界面，同时记录运维过程中运维人员执行的SQL命令。',
          icon: require('@/assets/images/main.png')
        },
        {
          title: '数据脱敏',
          remark: '可以平台中自定义对业务数据库进行敏感字段的数据脱敏，例如：身份证信息、联系电话、家庭地址等。',
          icon: require('@/assets/images/desen.png')
        },
        {
          title: '权限管控',
          remark: '通过平台自定义设置，对业务数据库进行严格的权限分配，防止数据泄露。',
          icon: require('@/assets/images/juris.png')
        }
      ],
      advList: [
        {
          title: '地址',
          remark: '安徽省合肥市高新区明珠大道 198号星梦园科研楼F栋D区6层',
          icon: require('@/assets/images/adv1.png')
        },
        {
          title: '电话',
          remark: '400-005-8696',
          icon: require('@/assets/images/adv2.png')
        },
        {
          title: '邮箱',
          remark: 'service@ahss.com.cn',
          icon: require('@/assets/images/adv3.png')
        },
        {
          title: '网站',
          remark: 'www.ahss.com.cn',
          icon: require('@/assets/images/adv4.png')
        }
      ]
    }
  },

  head () {
    return {
      title: 'Nuxt预渲染-关于我们',
      meta: [
        { hid: 'nuxtkeywords', name: 'keywords', content: '新闻、动态' },
        { hid: 'nuxtdescription', name: 'description', content: '公司新闻动态' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  overflow: hidden;

  .index-banner {
    height: 400px;
    width: 100%;
    min-width: 1240px;
    overflow: hidden;
    background: url('@/assets/images/database.jpg') no-repeat center center;
    background-size: cover;
    .banner-title {
      margin: 110px 0 20px 0;
      font-size: 32px;
      letter-spacing: 1px;
      font-weight: bold;
      color: #ffffff;
    }
    .banner-text {
      color: #efefef;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .banner-intro {
      width: 572px;
      margin-top: 10px;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 1px;
      color: #efefef;
    }
    .banner-request {
      width: 154px;
      height: 54px;
      margin-top: 25px;
      background: #0183fd;
      line-height: 54px;
      text-align: center;
      border-radius: 27px;
      font-size: 18px;
      font-weight: 800;
      color: #efefef;
      cursor: pointer;
    }
  }
  .index-container {
    width: 100%;
    .container-section {
      width: 100%;
      .section-background {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1240px;
        padding: 40px 0;
        margin: 0 auto;
        .background-detail {
          width: 60%;
          text-align: left;
          .detail-title {
            width: 100%;
            margin-bottom: 40px;
            font-family: PingFang SC;
            font-weight: bold;
            font-size: 40px;
            color: #1e1f23;
          }
          .detail-desc {
            width: 100%;
            margin-bottom: 40px;
            font-family: PingFang SC;
            font-size: 16px;
            color: #686c78;
            p {
              margin-bottom: 10px;
              line-height: 1.5;
            }
          }
        }
        .background-img {
          width: 340px;
          img {
            width: 100%;
          }
        }
      }
      .section-wrap {
        width: 1240px;
        padding: 50px 0;
        margin: 0 auto;

        .wrap-header {
          width: 100%;
          margin-bottom: 40px;
          font-family: PingFang SC;
          font-weight: bold;
          font-size: 32px;
          color: #1e1f23;
          text-align: center;
        }
        .wrap-desc {
          width: 100%;
          margin-bottom: 40px;
          font-family: PingFang SC;
          font-size: 16px;
          color: #686c78;
          text-align: center;
        }

        .wrap-product {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          .product-item {
            display: flex;
            width: 33.3%;
            margin-bottom: 30px;
            .item-img {
              width: 62px;
              height: 62px;
              flex-shrink: 0;
              margin-right: 15px;
              margin-top: 5px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .item-info {
              flex: 1;
              .info-title {
                width: 100%;
                margin-bottom: 10px;
                font-family: PingFang SC;
                font-weight: bold;
                font-size: 20px;
                color: @title-color;
              }
              .info-desc {
                width: 90%;
                font-family: PingFang SC;
                font-size: 16px;
                color: @desc-color;
              }
            }
          }
        }
        .wrap-adv {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          .adv-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 23%;
            height: 400px;
            padding: 0 25px;
            border-radius: 10px;
            background-color: #f5f6fb;
            .item-icon {
              width: 100px;
              height: 100px;
              margin-bottom: 20px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .item-title {
              width: 100%;
              margin-bottom: 30px;
              font-family: PingFang SC;
              font-weight: bold;
              font-size: 20px;
              color: #1e1f23;
              text-align: center;
            }
            .item-desc {
              width: 100%;
              font-family: PingFang SC;
              font-size: 16px;
              color: #686c78;
            }
          }
        }
      }
    }
  }
}
</style>
