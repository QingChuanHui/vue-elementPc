<template>
  <div>
    <van-nav-bar
        title="热门活动"
        left-text=""
        right-text=""
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
        style="z-index:10;"
      />
    <div class="page mTop">
        <div class="form-wrap" v-for="(item,index) in list" :key="index" @click="goDetail(item.id)">
          <div class="act-pic">
            <img  v-lazy="picUrl+item.pic" alt="">
          </div>
          <div class="act-title">
            {{item.name}}
          </div>
        </div>
    </div>
  </div>
</template>
<script>
// import { Popup, Icon } from 'vant'
import { activityList } from '@/api/home'
export default {
  data() {
    return {
      picUrl: process.env.BASE_API,
      show: false,
      user: {},
      list: []
    }
  },
  mounted() {
    activityList({ pageNo: 1, pageSize: 999 }).then((data) => { // 获得活动列表
      this.list = data.page.records
    })
  },
  activated() {
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    goDetail(id) {
      if (id === '123456') {
        this.$router.push({ path: '/home/activity/newcomer' })
      }
    }
  },
  components: {
    // [Popup.name]: Popup,
    // [Icon.name]: Icon
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
.form-wrap{
  background: #fff;
  margin-bottom: 0.8rem;
  position: relative;
  box-shadow: 0 1px 0 rgba(0,0,0,0.04)
}
.act-pic{
  width:100%;
  height: 11.83rem;
}
.act-pic img{
  width:100%;
  height: 11.83rem;
  border: 0 none;
}
.act-title{
  padding: 1.18rem;
  position: relative;
  font-size: 1.18rem;
}
.act-title::after{
  content: '';
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-top: 1px solid #c3c3c3;
  border-right: 1px solid #c3c3c3;
  right:1.58rem;
  top: 50%;
  -webkit-transform:rotate(45deg) translateY(-70%);
  transform:rotate(45deg) translateY(-70%);
}
</style>

