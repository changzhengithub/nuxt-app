<template>
  <div class="index">
    <div class="index-banner">
      <div class="container">
        <div class="banner-title">我的</div>
        <div class="banner-intro">助力建立健全全流程的数据安全管理与审查制度。</div>
      </div>
    </div>

    <div class="index-container">
      <div class="container-section background">
        <div class="section-background">
          <div class="background-detail">
            <div class="detail-title">行业背景</div>
            <div class="detail-desc">
              <p>
                于2021年9月1日起施行的《数据安全法》作为我国数据安全领域的基础性法律，对重要数据在管理形式和保护要求上提出了严格和明确的保护制度，强化了重要数据、核心数据的保护要求，对政府与企事业单位数据管理部门提出了更高的要求。
              </p>
              <p>
                传统的信息安全建设，往往侧重于外部安全威胁，对内部人员却缺乏有效的管控。权威的安全调查结果表明，60%以上的安全事件均与内部人员有关，这其中既包括主观攻击行为（违规访问、恶意操作、数据窃取、程序后门等），也包括非恶意行为（误操作、权限滥用）。由此可见，规范内部人员的数据访问行为，特别是对核心数据的安全管控势在必行。
              </p>
            </div>
          </div>
          <div class="background-img">
            <img src="@/assets/images/data.png" alt="">
          </div>
        </div>
      </div>
      <div class="container-section">
        <div class="section-wrap">
          <div class="wrap-header">产品定位</div>
          <div class="wrap-desc">集中统一接管核心数据库，通过平台化运维操作审批、数据权限与脱敏控制、数据库访问与操作全过程记录，有效防止核心数据外泄，助力建立健全全流程的数据安全管理与审查制度。</div>
          <div class="wrap-product">
            <div class="product-item" v-for="(item, index) in productList" :key="index">
              <div class="item-img">
                <img :src="item.icon" alt="" class="img-img" />
              </div>
              <div class="item-info">
                <div class="info-title">{{ item.title }}</div>
                <div class="info-desc">{{ item.remark }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-section background">
        <div class="section-wrap">
          <div class="wrap-header">我们的优势</div>
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
 * @desc 我的
 * @author changz
 * */
export default {
  name: 'Mine',
  // 当前页面使用的基础布局
  layout: 'BasicLayout',
  // 用户获取数据
  asyncData(context) {
    return { name: 'World' }
  },
  data() {
    return {
      title: '我的',
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
          title: '数据治理',
          remark: '基于用户现有业务数据，提供一站式数据治理方案，消除数据孤岛，提高数据质量与利用率。',
          icon: require('@/assets/images/adv1.png')
        },
        {
          title: '贴身定制',
          remark: '围绕用户场景贴身个性化定制开发数据监管、业务流程、安全运维等场景需求。',
          icon: require('@/assets/images/adv2.png')
        },
        {
          title: '便捷化运维工作',
          remark: '积累驻扎用户一线的丰富运维经验，利用自研运维平台，帮助用户运维工作便捷化。',
          icon: require('@/assets/images/adv3.png')
        },
        {
          title: '专业服务能力',
          remark: '结合专业信息化服务能力，提供一站式运维与安全管家服务，覆盖数据中心“规划设计、建设交付、安全保障、运行维护”全生命周期。',
          icon: require('@/assets/images/adv4.png')
        }
      ]
    }
  },
  head() {
    return {
      title: 'Nuxt预渲染-我的',
      meta: [
        { hid: 'nuxtkeywords', name: 'keywords', content: '我的' },
        { hid: 'nuxtdescription', name: 'description', content: '我的' }
      ]
    }
  },
  created() {
    console.log(this.$route)
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
            background-color: #fff;

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