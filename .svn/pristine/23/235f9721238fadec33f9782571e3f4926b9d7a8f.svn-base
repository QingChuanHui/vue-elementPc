<template>
  <div class="home" >
    <van-nav-bar
      :left-arrow="true"
      :fixed="true"
      title="积分详情"
      left-text=""
      right-text=""
      @click-left="onClickLeft"
    />
    <van-swipe :autoplay="3000" style="height:11rem;" class="mTop" >
      <van-swipe-item v-for="(img,index) in integralDetail.baseIntegralGoodsPicList" :key="index">
        <img  v-lazy="picUrl+img.path"  height="100%" width="100%"  />
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <van-cell  >
        <div style="font-size:1.3rem;font-weight:bold;margin-bottom:1rem;">{{ integralDetail.name }}</div>
        <div class="sort">
          <span><span class="sort-large">{{ integralDetail.integralValue ? integralDetail.integralValue : 0}}</span>&nbsp;积分</span>
        </div>
      </van-cell>
      <van-cell title="有效期"  icon="wap-nav" :value="integralDetail.expiryDate"  >
        <svg-icon :icon-class="'date'" slot="icon" ></svg-icon>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="topGroup" style="margin-bottom:50px;">
      <van-cell title="商品详情"  icon="wap-nav"  >
      </van-cell>
       <van-cell >
        <div style="font-weight:bold;">规则:</div>
        <div v-html="integralDetail.avtivityRule" style="overflow: hidden;word-break: break-all;word-wrap: break-word;" ></div>
      </van-cell>
      <van-cell >
        <div style="font-weight:bold;">描述:</div>
        <div v-html="integralDetail.detailDescription" style="overflow: hidden;word-break: break-all;word-wrap: break-word;" ></div>
      </van-cell>
    </van-cell-group>
    <section class="dui-footer" >
      <van-button type="danger" size="large"  v-if="user.id"  :disabled="isUButtoon" @click="sureIngegrall()" >
        {{buttomText}}
      </van-button>
      <van-button type="danger" size="large" v-else  @click="login" >登录</van-button>
    </section>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Button } from 'vant'
import { getIntegralDetail, createIntegralBill } from '@/api/integral'
import { localStorageTool } from '@/utils'
import { getUser } from '@/api/login'
export default {
  data() {
    return {
      picUrl: process.env.BASE_API,
      integralDetail: {}, // 门店详细
      user: {},
      buttomText: '',
      isUButtoon: false // 禁用按钮
    }
  },
  mounted() {
    if (this.$route.query.id) {
      const { userInfo } = localStorageTool.getLocalStorage('userInfo') // 获取LocalStorage值
      if (userInfo) { // 获取用户信息、
        this.user = JSON.parse(userInfo)
      } else {
        this.user = {}
      }
      getIntegralDetail({ id: this.$route.query.id }).then((data) => {
        this.integralDetail = data.new
        if (this.user.id) {
          this.buttomText = this.integralDetail.integralValue === 0 ? '免费领取' : this.user.totalIntegral < this.integralDetail.integralValue ? '积分不足' : '马上兑换'
          this.isUButtoon = this.user.totalIntegral < this.integralDetail.integralValue
        }
      })
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    login() {
      this.$router.push({ path: '/home/login' })
    },
    sureIngegrall() {
      createIntegralBill({ ownerId: this.user.id, integralGoodsId: this.integralDetail.id }).then((data) => {
        getUser().then((user) => {
          localStorageTool.setLocalStorage({
            'userInfo': JSON.stringify(user.new) // data.token
          })
        })
        this.$router.replace({ name: '兑换积分结果',
          params: {
            integralBill: data.new,
            integralValue: this.integralDetail.integralValue,
            couponType: this.integralDetail.couponType
          }})
      })
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button
  }
}
</script>
<style scoped>
 .sort{
    color: #fa5a4b;
    font-size: 0.85rem;
    font-size:1.3rem;
  }
  .sort-large{ font-size: 2.5rem}
  .dui-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>

