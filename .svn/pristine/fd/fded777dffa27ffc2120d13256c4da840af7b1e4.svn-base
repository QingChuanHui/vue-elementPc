<template>
  <div class="home" >
    <van-nav-bar
      :left-arrow="true"
      :fixed="true"
      title="订单详情"
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
    <van-cell-group class="topGroup">
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
    <van-cell-group class="topGroup"  >
      <van-cell title="积分"  :value="integralDetail.integralValue"  >
      </van-cell>
      <van-cell title="订单编号"  :value="integralDetail.billNo"  >
      </van-cell>
      <van-cell title="下单时间"  :value="integralDetail.billDate"  >
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
import { exchangeIntegralByID } from '@/api/integral'
export default {
  data() {
    return {
      picUrl: process.env.BASE_API,
      integralDetail: {}, // 门店详细
      buttomText: '',
      isUButtoon: false // 禁用按钮
    }
  },
  mounted() {
    if (this.$route.query.id) {
      exchangeIntegralByID({ id: this.$route.query.id }).then((data) => {
        this.integralDetail = data.new
      })
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    login() {
      this.$router.push({ path: '/home/login' })
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
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

