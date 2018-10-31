<template>
  <div>
    <van-nav-bar
        title="新人有礼"
        left-text=""
        right-text=""
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="z-index:10;"
      />
    <div class="page mTop">
        <div class="in-banner">
          <div class="in-rule" @click="show = true"></div>
        </div>
        <div class="bottom-background">
          <div class="in-coupons-wrap">
            <div class="in-coupons clear">
              <div class="in-coupon-item in-coupon-item-space"></div>
              <div class="in-coupon-item"></div>
              <div class="in-coupon-item in-coupon-item-space"></div>
              <div class="in-coupon-item"></div>
            </div>
            <div class="in-btn" @click="joinActivity()">一键领取</div>
          </div>
          <div class="in-title-wrap"></div>
          <div class="in-item-wrap clear">
            <div class="in-item">
              <div class="in-img in-img-sheng"></div>
              <div class="in-gray-words">4S店养车</div>
              <div class="in-gray-title">总价低至5折</div>
            </div>
            <div class="in-item">
              <div class="in-img in-img-4s"></div>
              <div class="in-gray-words">80家大品牌</div>
              <div class="in-gray-title">4000家4S店任你选</div>
            </div>
            <div class="in-item">
              <div class="in-img in-img-pei"></div>
              <div class="in-gray-words">100%品牌配件</div>
              <div class="in-gray-title">明码标价</div>
            </div>
            <div class="in-item">
              <div class="in-img in-img-ji"></div>
              <div class="in-gray-words">在线预约</div>
              <div class="in-gray-title">到店0等待</div>
            </div>
          </div>
        </div>
        <van-popup v-model="show">
          <div class="modal">
            <div class="modal-content">
              <div class="modal-title"></div>
              <!--
              <p class="text-title">参与条件：</p>
              <p class="text-txt">1、每位乐车邦用户仅可领取一次新人礼包，同一手机号、同一终端设备号等合理显示为同一用户的情形，均视为同一用户无法重复领取；</p>
              <p class="text-txt">2、新人礼包仅限乐车邦未下单用户领取，若已完成4S店保养、钣喷、清洗养护、维修首单则无法领取。</p>
              <p class="text-title">注意事项：</p>
              <p class="text-txt">本次活动中，对于以不正当参与活动的用户，包括但不限于恶意套现、恶意下单、利用程序漏洞等，乐车邦有权在不事先通知的情况下取消其参加活动的资格。 本次活动最终解释权归乐车邦所有。</p>
              -->
              <p class="text-txt" v-html="activity.activityRule"></p>
              <div class="callservice">客服电话：4008-851-877</div>
            </div>
            <div class="modal-close" @click="show = false"><van-icon name="close" /></div>
          </div>
        </van-popup>
    </div>
  </div>
</template>
<script>
import { Popup, Icon } from 'vant'
import { activity, haveJoinActivity, joinActivity } from '@/api/home'
import { localStorageTool } from '@/utils'
export default {
  data() {
    return {
      picUrl: process.env.BASE_API,
      show: false,
      user: {},
      activity: {}
    }
  },
  mounted() {
    const { userInfo } = localStorageTool.getLocalStorage('userInfo') // 获取LocalStorage值
    if (userInfo) { // 获取用户信息、
      this.user = JSON.parse(userInfo)
    }
    activity({ id: 123456 }).then((data) => { // 获取活动详情
      this.activity = data.new
    })
  },
  activated() {
  },
  methods: {
    joinActivity() {
      if (this.user) {
        haveJoinActivity({ activityId: 123456, ownerId: this.user.id }).then((data) => { // 判断用户是否参与了某活动
          if (data.new) {
            this.$toast('您已经参加次活动！')
          } else {
            joinActivity({ activityId: 123456, ownerId: this.user.id }).then((data) => {
              // this.$router.push({ path: '/user/myCoupon' })
            })
          }
        })
      } else {
        this.$router.push({ path: '/home/login' })
      }
    },
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon
  }
}
</script>
<style scoped>
.page{
  position: relative;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}
.in-banner{
  height: 25.63rem;
  background: url(../../assets/img/activity/banner.png) no-repeat center center;
  background-size: cover;
}
.in-rule{
  width:3.94rem;
  height: 1.5rem;
  position: absolute;
  top:1.6rem;
  right: 1.6rem;
  background: url(../../assets/img/activity/rule.png) no-repeat center center;
  background-size: cover;
}
.bottom-background{
  background: url(../../assets/img/activity/bottom.png) no-repeat center center;
  background-size: 100% 100%;
  padding-bottom: 4.7rem;
}
.in-coupons-wrap{
  width: 92%;
  margin: auto;
  padding: 0.4rem 0 0.8rem;
  border-radius: 0.4rem;
}
.in-coupons{
  width:98%;
  background: url(../../assets/img/activity/voucher.png) no-repeat center center;
  background-size: 100% 100%;
  margin: 0.8rem auto 0;
}
.in-coupon-item{
  width: 49%;
  height: 6.1rem;
  float: left;
  background-size: contain;
  background-position: 100% 100%;
  background-repeat: no-repeat;
}
.in-coupon-item-space{
  margin-right: 1%;
}
.clear::after{
  content: '';
  display: block;
  clear: both;
  font-size: 0;
}
.in-btn{
  font-style: italic;
  font-size: 1.6rem;
  color: #feda21;
  margin: 0.8rem auto 0;
  background: url(../../assets/img/activity/btn.png) no-repeat center center;
  background-size: contain;
  padding: 0.8rem 0.8rem 1.58rem;
  text-shadow: 0 2px 2px reba(4,0,0,0.21);
  position: relative;
  text-align: center;
}
.in-btn::before{
  content: attr(text);
  position: absolute;
  z-index: 10;
  color: #fede23;
  -webkit-mask:linear-gradient(to top, #ffcf0e, transparent );
}
.in-title-wrap{
  width: 100%;
  height: 9rem;
  text-align: center;
  color: #fff;
  font-size: 1.34rem;
  background: url(../../assets/img/activity/decoratef.png) no-repeat center center;
  background-size: contain;
  margin-bottom: -4.7rem;
}
.in-item-wrap{
  width: 92%;
  margin: 0 auto;
  text-align: center;
  border-radius: 0.4rem;
  padding: 0.8rem 0;
  font-size: 1.1rem;
}
.in-item{
  float: left;
  width: 50%;
  margin: 1.18rem 0;
}
.in-img{
  width:6.94rem;
  height: 6.94rem;
  margin: 0 auto 0.8rem;
  background: url(../../assets/img/activity/pics.png) no-repeat center center;
  background-size: 6.94rem 28.4rem;
}
.in-img-sheng{
  background-position: 0 100%;
}
.in-gray-words{
  color: #a68064;
}
.in-gray-title{
  font-weight: 700;
  color: #562339;
}
.in-img-4s{
  background-position: 0 1.26%;
}
.in-img-pei{
  background-position: 0 67.08%;
}
.in-img-ji{
  background-position: 0 34.17%;
}
.modal{
  width: 23.66rem;
  height: 31.5rem;
  margin: 0 auto;
  box-sizing: border-box;
}
.modal-content{
  background: url(../../assets/img/activity/modal_background.png) no-repeat center center;
  background-size: 100% 100%;
  padding: 1.58rem 1.1rem;
  box-sizing: border-box;
  color: #fff;
  overflow: auto;
}
.modal-title{
  background: url(../../assets/img/activity/modal_titlebg.png) no-repeat center center;
  background-size: contain;
  width: 15.77rem;
  height: 3.15rem;
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.text-title{
  font-weight: 700;
  font-size: 1rem;
}
.callservice{
  font-weight: 700;
  margin-top: 1.58rem;
}
.modal-close{
  position: absolute;
  top:-3.94rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  font-size: 3.5rem;
  color: #fff;
}
</style>

