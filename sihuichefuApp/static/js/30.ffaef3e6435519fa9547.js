webpackJsonp([30],{"8Lid":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,a=i("bOdI"),v=i.n(a),n=(i("FDxC"),i("w+oK")),r=i.n(n),l=(i("CCOf"),i("rrcz")),c=i.n(l),m=(i("3evy"),i("Irlo")),o=i.n(m),_=i("vMJZ"),p=i("0xDb"),d={data:function(){return{active:0,user:"",myBillList:[],toPaid:[],serving:[],toCommented:[]}},mounted:function(){var e=p.c.getLocalStorage("userInfo").userInfo;e&&(this.user=JSON.parse(e))},activated:function(){this.$route.query.isUpdate&&(this.selectListNeedToken(),this.$route.query.active&&(this.active=this.$route.query.active))},beforeRouteEnter:function(e,t,i){e.query.isUpdate=1,"/user/myOrder/detail"===t.path&&(e.query.isUpdate=0),i()},methods:{selectListNeedToken:function(){var e=this;Object(_.q)({pageNo:1,pageSize:9999,ownerId:this.user.id}).then(function(t){e.myBillList=t.page.records,e.toPaid=e.myBillList.filter(function(e){return"待支付"===e.stateName}),e.serving=e.myBillList.filter(function(e){return"服务中"===e.stateName}),e.toCommented=e.myBillList.filter(function(e){return"待评价"===e.stateName})})},onClickLeft:function(){this.$router.go(-1)},goDetail:function(e){this.$router.push({path:"/user/myOrder/detail",query:{id:e}})},goPay:function(e,t,i){this.$router.push({name:"订单支付",params:{id:e,payKind:t,payMoney:i}})},goReview:function(e){this.$router.push({path:"/user/myOrder/review",query:{id:e}})}},components:(s={},v()(s,o.a.name,o.a),v()(s,c.a.name,c.a),v()(s,r.a.name,r.a),s)},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"orderlist"},[i("van-nav-bar",{staticStyle:{"z-index":"10"},attrs:{title:"我的订单","left-text":"","right-text":"","left-arrow":"",fixed:!0},on:{"click-left":e.onClickLeft}}),e._v(" "),i("van-tabs",{staticClass:"mTop",model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("van-tab",{attrs:{title:"全部"}},e._l(e.myBillList,function(t,s){return i("div",{key:s,staticClass:"order-item"},[i("div",{staticClass:"item-wrap"},[i("div",{staticClass:"item-title"},[i("span",{staticClass:"pay_status"},[e._v(e._s(t.stateName))]),e._v(" "),i("span",[e._v(e._s(t.serviceTypeName))])]),e._v(" "),i("div",{staticClass:"item-detail",on:{click:function(i){e.goDetail(t.id)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.serviceType,expression:"item.serviceType == 0"}]},[i("div",{staticClass:"item-price"},[e._v("￥"),i("span",[e._v(e._s(t.billMoney))])]),e._v(" "),1===t.isItem?i("div",{staticClass:"item-company"},[e._v(e._s(t.mgrBillDetailItemList[0].itemName))]):e._e(),e._v(" "),0===t.isItem?i("div",{staticClass:"item-company"},[e._v(e._s(t.mgrBillDetailSetmealList[0].setmealName))]):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.serviceType,expression:"item.serviceType != 0"}]},[i("div",{staticClass:"item-price"},[e._v("￥"),i("span",[e._v(e._s(t.billMoney))])]),e._v(" "),i("div",{staticClass:"item-company"},[i("p",[e._v(e._s(t.companyName))]),e._v(" "),i("p",[e._v(e._s(t.carCode))])])]),e._v(" "),i("div",{staticClass:"item-time"},[i("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.serviceType,expression:"item.serviceType != 0"}]},[e._v("预约时间：")]),e._v("\n              "+e._s(t.billDate)+"\n            ")])]),e._v(" "),0==t.state||2==t.state?i("div",{staticClass:"btn-box"},[i("van-button",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"item.state == 0"}],attrs:{size:"small",type:"danger"},on:{click:function(i){e.goPay(t.id,t.payKind,t.payMoney)}}},[e._v("立即支付")]),e._v(" "),i("van-button",{directives:[{name:"show",rawName:"v-show",value:2==t.state,expression:"item.state == 2"}],attrs:{size:"small",type:"danger"},on:{click:function(i){e.goReview(t.id)}}},[e._v("立即评价")])],1):e._e()])])})),e._v(" "),i("van-tab",{attrs:{title:"待支付"}},e._l(e.toPaid,function(t,s){return i("div",{key:s,staticClass:"order-item"},[i("div",{staticClass:"item-wrap"},[i("div",{staticClass:"item-title"},[i("span",{staticClass:"pay_status"},[e._v(e._s(t.stateName))]),e._v(" "),i("span",[e._v(e._s(t.serviceTypeName))])]),e._v(" "),i("div",{staticClass:"item-detail",on:{click:function(i){e.goDetail(t.id)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.serviceType,expression:"item.serviceType == 0"}]},[i("div",{staticClass:"item-price"},[e._v("￥"),i("span",[e._v(e._s(t.billMoney))])]),e._v(" "),1===t.isItem?i("div",{staticClass:"item-company"},[e._v(e._s(t.mgrBillDetailItemList[0].itemName))]):e._e(),e._v(" "),0===t.isItem?i("div",{staticClass:"item-company"},[e._v(e._s(t.mgrBillDetailSetmealList[0].setmealName))]):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.serviceType,expression:"item.serviceType != 0"}]},[i("div",{staticClass:"item-price"},[e._v("￥"),i("span",[e._v(e._s(t.billMoney))])]),e._v(" "),i("div",{staticClass:"item-company"},[i("p",[e._v(e._s(t.companyName))]),e._v(" "),i("p",[e._v(e._s(t.carCode))])])]),e._v(" "),i("div",{staticClass:"item-time"},[i("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.serviceType,expression:"item.serviceType != 0"}]},[e._v("预约时间：")]),e._v("\n              "+e._s(t.billDate)+"\n            ")])]),e._v(" "),i("div",{staticClass:"btn-box"},[i("van-button",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"item.state == 0"}],attrs:{size:"small",type:"danger"},on:{click:function(i){e.goPay(t.id,t.payKind,t.payMoney)}}},[e._v("立即支付")])],1)])])})),e._v(" "),i("van-tab",{attrs:{title:"服务中"}},e._l(e.serving,function(t,s){return i("div",{key:s,staticClass:"order-item"},[i("div",{staticClass:"item-wrap"},[i("div",{staticClass:"item-title"},[i("span",{staticClass:"pay_status"},[e._v(e._s(t.stateName))]),e._v(" "),i("span",[e._v(e._s(t.serviceTypeName))])]),e._v(" "),i("div",{staticClass:"item-detail",on:{click:function(i){e.goDetail(t.id)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.serviceType,expression:"item.serviceType == 0"}]},[i("div",{staticClass:"item-price"},[e._v("￥"),i("span",[e._v(e._s(t.billMoney))])]),e._v(" "),1===t.isItem?i("div",{staticClass:"item-company"},[e._v(e._s(t.mgrBillDetailItemList[0].itemName))]):e._e(),e._v(" "),0===t.isItem?i("div",{staticClass:"item-company"},[e._v(e._s(t.mgrBillDetailSetmealList[0].setmealName))]):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.serviceType,expression:"item.serviceType != 0"}]},[i("div",{staticClass:"item-price"},[e._v("￥"),i("span",[e._v(e._s(t.billMoney))])]),e._v(" "),i("div",{staticClass:"item-company"},[i("p",[e._v(e._s(t.companyName))]),e._v(" "),i("p",[e._v(e._s(t.carCode))])])]),e._v(" "),i("div",{staticClass:"item-time"},[i("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.serviceType,expression:"item.serviceType != 0"}]},[e._v("预约时间：")]),e._v("\n              "+e._s(t.billDate)+"\n            ")])])])])})),e._v(" "),i("van-tab",{attrs:{title:"待评价"}},e._l(e.toCommented,function(t,s){return i("div",{key:s,staticClass:"order-item"},[i("div",{staticClass:"item-wrap"},[i("div",{staticClass:"item-title"},[i("span",{staticClass:"pay_status"},[e._v(e._s(t.stateName))]),e._v(" "),i("span",[e._v(e._s(t.serviceTypeName)+"订单")])]),e._v(" "),i("div",{staticClass:"item-detail",on:{click:function(i){e.goDetail(t.id)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.serviceType,expression:"item.serviceType == 0"}]},[i("div",{staticClass:"item-price"},[e._v("￥"),i("span",[e._v(e._s(t.billMoney))])]),e._v(" "),1===t.isItem?i("div",{staticClass:"item-company"},[e._v(e._s(t.mgrBillDetailItemList[0].itemName))]):e._e(),e._v(" "),0===t.isItem?i("div",{staticClass:"item-company"},[e._v(e._s(t.mgrBillDetailSetmealList[0].setmealName))]):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.serviceType,expression:"item.serviceType != 0"}]},[i("div",{staticClass:"item-price"},[e._v("￥"),i("span",[e._v(e._s(t.billMoney))])]),e._v(" "),i("div",{staticClass:"item-company"},[i("p",[e._v(e._s(t.companyName))]),e._v(" "),i("p",[e._v(e._s(t.carCode))])])]),e._v(" "),i("div",{staticClass:"item-time"},[i("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.serviceType,expression:"item.serviceType != 0"}]},[e._v("预约时间：")]),e._v("\n              "+e._s(t.billDate)+"\n            ")])]),e._v(" "),i("div",{staticClass:"btn-box"},[i("van-button",{directives:[{name:"show",rawName:"v-show",value:2==t.state,expression:"item.state == 2"}],attrs:{size:"small",type:"danger"},on:{click:function(i){e.goReview(t.id)}}},[e._v("立即评价")])],1)])])}))],1)],1)},staticRenderFns:[]};var y=i("VU/8")(d,u,!1,function(e){i("ZWqW")},"data-v-57c8c01f",null);t.default=y.exports},ZWqW:function(e,t){}});
//# sourceMappingURL=30.ffaef3e6435519fa9547.js.map