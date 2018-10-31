<template>
  <div>
    <van-nav-bar
      title="在线支付"
      left-text=""
      right-text=""
      :left-arrow="false"
      :fixed="true"
      :z-index="10"

    />
    <div class="mTop pay_title">
      <span class="pay_money">￥{{$route.params.payMoney}}</span>
      洗车订单
    </div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <!--<van-cell title="支付宝" icon="alipay" clickable @click="radio = '1'" class='pay1'>
          <van-radio name="1" />
        </van-cell>-->
        <van-cell title="微信" icon="wechat" clickable @click="radio = '2'" class='pay2'>
          <van-radio name="2" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="page-bottom" >
        <van-button type="primary" bottom-action @click="billPay">确认支付</van-button>
    </div>
  </div>
</template>
<script>
import { Icon, Radio, RadioGroup, Button } from 'vant'
import { payBill } from '@/api/user'
import { localStorageTool } from '@/utils'
import native from '@/native'
export default {
  data() {
    return {
      picIp: process.env.BASE_API,
      radio: '2',
      user: '',
      paybill: {},
      payNo: ''
    }
  },
  mounted() {
    const { userInfo } = localStorageTool.getLocalStorage('userInfo') // 获取LocalStorage值
    if (userInfo) { // 获取用户信息、
      this.user = JSON.parse(userInfo)
    }
  },
  methods: {
    billPay() {
      if (this.user) {
        if (this.$route.params.id) {
          this.paybill = { id: this.$route.params.id, payKind: this.$route.params.payKind, payMoney: this.$route.params.payMoney }
          payBill({ formData: JSON.stringify(this.paybill) }).then((data) => {
            this.payNo = data.result.outTradeNo
            native.Pay((result) => {
              if (result === '0') {
                // this.$toast('支付成功')
                this.$router.replace({ path: '/user/myOrder/payOk' })
                // payOk({ outTradeNo: JSON.stringify(this.payNo) }).then((data) => {
                //  this.$router.replace({ path: '/user/myOrder/payOk' })
                // })
              } else if (result === '-1') {
                // this.$toast('支付失败')
                this.$router.replace({ path: '/user/myOrder/payFailed' })
              }
            }, data.result)
          })
        }
      }
    }
  },
  components: {
    [Icon.name]: Icon,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Button.name]: Button
  }
}
</script>
<style scoped>
 .pay_title{
   background: #fff;
   font-size: 1.18rem;
   height: 50px;
   line-height: 50px;
   padding: 0 1.18rem;
   position: relative;
   border-bottom: 2px dashed #e9e9e9;
   margin-bottom: 10px;
 }
 .pay_money{
   float: right;
   color: #fa5a4b;
   font-size: 1.6rem;
 }
 /*.pay_way{
   box-shadow: 0 1px 0 rgba(0,0,0,0.04)
 }
 .pay_way_item{
   position: relative;
   padding: 0.8rem 3.15rem 0.71rem 1.18rem;
   color: #b9b9b9;
   box-shadow: 1.18rem 1px 0 rgba(0,0,0,0.04);
 }*/
 .page-bottom{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom:0;
    right: 0;
    width: 100%;
    z-index: 5;
  }
  .page-bottom button{background: #fa5a4b}
   .pay1{
    color:#55ABE6
  }
  .pay2{
    color:#00C800
  }
</style>

