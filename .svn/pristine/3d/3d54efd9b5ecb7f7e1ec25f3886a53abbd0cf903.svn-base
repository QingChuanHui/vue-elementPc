<template>
  <div>
    <van-nav-bar
        title="意见反馈"
        left-text=""
        right-text=""
        left-arrow
        :fixed="true"
        @click-left="onClickLeft"
    />
    <div class="mTop page">
      <van-cell-group>
        <van-field
          v-model="content"
          type="textarea"
          placeholder="亲，有什么想说的，请尽管吐槽！"
          rows="4"
          autosize
        />
      </van-cell-group>
      <van-button size="large" type="primary" style="margin-top:20px" @click="sunmitFeedback()">提交</van-button>
    </div>
    <div class="page-bottom">
      <div></div>
    </div>
  </div>
</template>
<script>
import { Button, Icon, Field } from 'vant'
import { localStorageTool } from '@/utils'
import { feedback } from '@/api/user'
export default {
  data() {
    return {
      user: {},
      content: ''
    }
  },
  mounted() {
    const { userInfo } = localStorageTool.getLocalStorage('userInfo') // 获取LocalStorage值
    if (userInfo) { // 获取用户信息、
      this.user = JSON.parse(userInfo)
    }
  },
  created() {
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    sunmitFeedback() {
      if (this.user) {
        feedback({ ownerId: this.user.id, content: this.content }).then((data) => {
          this.$toast('提交成功！')
          this.$router.go(-1)
        })
      } else {
        this.$router.push({ path: '/home/login' })
      }
    }
  },
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Field.name]: Field
  }
}
</script>
<style scoped>
.page{
  padding: 10px 15px;
}
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
  /* .page-bottom button{background: #fa5a4b} */
</style>

