webpackJsonp([19],{aKsM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("bOdI"),l=a.n(n),i=(a("FDxC"),a("w+oK")),r=a.n(i),s={data:function(){return{integralOK:{}}},mounted:function(){this.$route.params.integralBill&&(this.integralOK=this.$route.params.integralBill,this.integralOK.integralValue=this.$route.params.integralValue,this.integralOK.couponType=this.$route.params.couponType)},methods:{onClickLeft:function(){this.$router.go(-1)},sureIngegrall:function(){0===this.integralOK.couponType?this.$router.replace({path:"/shop/washCar"}):this.$router.replace({path:"/shop/companyList?type="+this.integralOK.couponType})}},components:l()({},r.a.name,r.a)},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("van-nav-bar",{attrs:{"left-arrow":!0,fixed:!0,title:"兑换结果","left-text":"","right-text":""},on:{"click-left":t.onClickLeft}}),t._v(" "),a("div",{staticClass:"mTop",staticStyle:{"text-align":"center"}},[a("van-icon",{staticClass:"ok",staticStyle:{"margin-top":"50px"},attrs:{name:"passed"}}),t._v(" "),a("div",[t._v("恭喜，兑换成功")])],1),t._v(" "),a("van-cell-group",{staticClass:"topGroup"},[a("van-cell",{attrs:{title:"积分",value:t.integralOK.integralValue}}),t._v(" "),a("van-cell",{attrs:{title:"订单编号",value:t.integralOK.billNo}}),t._v(" "),a("van-cell",{attrs:{title:"下单时间",value:t.integralOK.billDate}})],1),t._v(" "),a("van-cell-group",{staticClass:"topGroup",staticStyle:{"margin-bottom":"50px"}},[a("van-cell",{attrs:{title:"您的兑换已经成功，请及时使用哦"}})],1),t._v(" "),a("section",{staticClass:"dui-footer"},[a("van-button",{attrs:{type:"danger",size:"large"},on:{click:function(e){t.sureIngegrall()}}},[t._v("\n      立即使用\n    ")])],1)],1)},staticRenderFns:[]};var c=a("VU/8")(s,o,!1,function(t){a("z42M")},"data-v-8f8d89d2",null);e.default=c.exports},z42M:function(t,e){}});
//# sourceMappingURL=19.58428966ce2c16fb5c62.js.map