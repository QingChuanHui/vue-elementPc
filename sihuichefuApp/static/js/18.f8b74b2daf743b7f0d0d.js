webpackJsonp([18],{"M/cC":function(t,e){},VGdj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("cKc3");var s=a("0xDb"),n={data:function(){return{user:{},picUrl:"http://222.73.44.144:8300",car:[],mainPlanOneList:[],itemNameList:[]}},mounted:function(){var t,e,a=this,n=s.c.getLocalStorage("userInfo").userInfo;n?(this.user=JSON.parse(n),void 0===this.$store.getters.myDefaultCar.carType||""===this.$store.getters.myDefaultCar.carType?this.$router.push({path:"/user/myCar"}):this.car=this.$store.getters.myDefaultCar):(this.user={},this.$router.replace({path:"/home/login"})),(t={code:this.car.pLevelId},i.a.fetchPost("/v1/app/car/getMaintainPlan",t,e)).then(function(t){t.newList.length>0&&(a.mainPlanOneList=t.newList[0].mainPlanOneList,a.mainPlanOneList.length>0&&(a.itemNameList=a.mainPlanOneList[0].plan21.map(function(t){return t.itemnameabbreve})))})},methods:{onClickLeft:function(){this.$router.go(-1)}},components:{}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"handbook"},[a("van-nav-bar",{staticStyle:{"z-index":"10"},attrs:{title:"保养手册","left-text":"","right-text":"","left-arrow":!0,fixed:!0},on:{"click-left":t.onClickLeft}}),t._v(" "),a("van-cell-group",{staticClass:"mTop"},[a("van-cell",{staticStyle:{"line-height":"40px",overflow:"hidden"},attrs:{title:t.car.carType}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.car.img,expression:"car.img"}],attrs:{slot:"icon",width:"40",height:"40"},slot:"icon"})])],1),t._v(" "),a("div",{staticClass:"handbookShow"},[a("div",{staticClass:"handbookLeft"},[a("div",{staticClass:"bookLeftRow"},[t._v("保养项目")]),t._v(" "),t._l(t.itemNameList,function(e){return a("div",{key:e,staticClass:"bookLeftRow"},[t._v(t._s(e))])})],2),t._v(" "),a("div",{staticClass:"handbookRight"},t._l(t.mainPlanOneList,function(e,i){return a("div",{key:i,staticClass:"bookRightCell"},[a("div",{staticClass:"bookRightRow",staticStyle:{"line-height":"15px"}},[t._v(t._s(e.mileage)),a("br"),t._v("KM")]),t._v(" "),t._l(e.plan21,function(e,i){return a("div",{key:i,staticClass:"bookRightRow"},[a("div",{staticClass:"cmm-replace",class:{OkBao:"不建议保养"!=e.itemadvice,NOBao:"不建议保养"==e.itemadvice}},[t._v("\n            "+t._s("不建议保养"==e.itemadvice?"优":"建")+"\n          ")])])})],2)}))])],1)},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(t){a("M/cC")},"data-v-90730b84",null);e.default=o.exports}});
//# sourceMappingURL=18.f8b74b2daf743b7f0d0d.js.map