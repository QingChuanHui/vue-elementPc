webpackJsonp([32],{"18L0":function(t,e){},AwQ0:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("bOdI"),c=o.n(n),i=(o("FDxC"),o("w+oK")),s=o.n(i),a=o("fy5O"),u=o("0xDb"),p={data:function(){return{user:{},picIp:"http://222.73.44.144:8300",List:[],couponId:this.$route.params.couponId,reduceMoney:0}},mounted:function(){var t=u.c.getLocalStorage("userInfo").userInfo;t&&(this.user=JSON.parse(t),this.getList())},created:function(){},methods:{onClickLeft:function(){this.$router.go(-1)},goMy:function(t){this.$router.push({path:"/shop/companyList",query:{type:t}})},getList:function(){var t=this;Object(a.c)({pageNo:1,pageSize:999,ownerId:this.user.id,flagUse:0}).then(function(e){t.List=e.page.records})},getcoupon:function(t,e){this.reduceMoney=t,this.couponId=e}},beforeRouteLeave:function(t,e,o){t.params.reduceMoney=this.reduceMoney,t.params.id=this.couponId,o()},components:c()({},s.a.name,s.a)},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("van-nav-bar",{attrs:{title:"我的优惠券","left-text":"","right-text":"","left-arrow":!0,fixed:!0,"z-index":10},on:{"click-left":t.onClickLeft}}),t._v(" "),o("div",{staticClass:"mTop",staticStyle:{"padding-top":"1px"}},t._l(t.List,function(e,n){return o("div",{key:n,staticClass:"coupon-item clearfix",on:{click:function(o){t.getcoupon(e.reduceMoney,e.id)}}},[o("div",{staticClass:"coupon-info"},[o("div",{staticClass:"triangle1"}),t._v(" "),o("div",{staticClass:"triangle2"}),t._v(" "),o("div",{staticClass:"coupon-price",class:{coupon_type1:"洗车"===e.couponType,coupon_type2:"保养"===e.couponType,coupon_type3:"清洗"===e.couponType,coupon_type4:"维修"===e.couponType,coupon_type5:"钣金"===e.couponType,coupon_type6:"救援"===e.couponType}},[o("div",{staticClass:"price-num"},[t._v("\n                ￥"),o("span",[t._v(t._s(e.reduceMoney))])])]),t._v(" "),o("div",{staticClass:"coupon-title"},[t._v(t._s(e.couponName))]),t._v(" "),o("div",{staticClass:"coupon-detail"},[t._v("满"+t._s(e.fullMoney)+"减"+t._s(e.reduceMoney)+" ")]),t._v(" "),o("div",{staticClass:"coupon-detail"},[t._v("有效期至 "+t._s(e.endDate)+" ")]),t._v(" "),o("div",{staticClass:"coupon-use"},[o("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(o){t.goMy(e.type)}}},[t._v("立即购买")])],1)])])}))],1)},staticRenderFns:[]};var d=o("VU/8")(p,r,!1,function(t){o("18L0")},"data-v-4535129a",null);e.default=d.exports}});
//# sourceMappingURL=32.c65ef38bf4f22d4e77e7.js.map