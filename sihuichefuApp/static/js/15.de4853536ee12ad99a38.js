webpackJsonp([15],{HQWt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=a("bOdI"),i=a.n(s),r=(a("dKGA"),a("kSul")),l=a.n(r),o=(a("jgNZ"),a("syWm")),c=a.n(o),p=a("Xxa5"),u=a.n(p),v=a("Gu7T"),g=a.n(v),d=a("exGp"),f=a.n(d),h=a("p+v9"),m=a("bh5B"),y=a("Y1Do"),x=a("Owbt"),w=a("0xDb"),_={mixins:[y.a],data:function(){return{picUrl:"http://222.73.44.144:8300",list:[],user:{},cssH:{height:window.innerHeight-92+"px"}}},mounted:function(){this.resetInit()},activated:function(){this.$refs.scroll.refresh();var t=w.c.getLocalStorage("userInfo").userInfo;this.user=t?JSON.parse(t):{}},methods:{onClickLeft:function(){this.$router.go(-1)},initData:function(){var t=this;return f()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)({pageNo:t.pages.currPage,pageSize:t.pages.perPage,isShow:1},!0).then(function(e){var a;e.page.records&&(1===t.pages.currPage?t.list=e.page.records:(a=t.list).push.apply(a,g()(e.page.records)));return e.page.total});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,t)}))()},changeType:function(t){this.selectTypeValue=t.value,this.resetInit()}},components:(n={},i()(n,c.a.name,c.a),i()(n,l.a.name,l.a),i()(n,"Scroll",m.a),i()(n,"IsEmpty",x.a),n)},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"积分商城","left-text":"","right-text":"","left-arrow":"",fixed:!0},on:{"click-left":t.onClickLeft}}),t._v(" "),a("van-cell-group",{staticStyle:{position:"fixed",top:"45px",width:"100%"}},[a("van-cell",[a("van-row",[a("van-col",{staticStyle:{"text-align":"center"},attrs:{span:"12"}},[a("van-icon",{staticStyle:{"margin-top":"5px"},attrs:{name:"exchange"}}),t._v(" 积分 "),a("span",{staticStyle:{color:"red"}},[t._v(t._s(t.user.totalIntegral?t.user.totalIntegral:0))])],1),t._v(" "),a("van-col",{staticStyle:{"text-align":"center","border-left":"1px solid #e5e5e5"},attrs:{span:"12"},nativeOn:{click:function(e){t.$router.push({path:"/user/integral/integralLog"})}}},[a("van-icon",{staticStyle:{"margin-top":"5px"},attrs:{name:"records"}}),t._v(" 兑换记录")],1)],1)],1)],1),t._v(" "),a("scroll",{directives:[{name:"show",rawName:"v-show",value:!t.isEmpty,expression:"!isEmpty"}],ref:"scroll",staticStyle:{"margin-top":"92px"},style:t.cssH,attrs:{data:t.list,pullDownRefresh:!0,pullUpLoad:!t.noMore},on:{pullingDown:t.onPullingDown,pullingUp:t.onPullingUp}},t._l(t.list,function(e,n){return a("van-cell",{key:n,attrs:{to:{path:"/user/integral/detail",query:{id:e.id}}}},[a("div",{staticClass:"news-item"},[a("div",{staticClass:"news-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.baseIntegralGoodsPicList.length>0?t.picUrl+e.baseIntegralGoodsPicList[0].path:"",expression:"item.baseIntegralGoodsPicList.length>0?picUrl+item.baseIntegralGoodsPicList[0].path:''"}]})]),t._v(" "),a("div",{staticClass:"news-content"},[a("div",{staticClass:"news-title"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"sort"},[a("span",[a("span",{staticClass:"sort-large"},[t._v(t._s(e.integralValue?e.integralValue:0))]),t._v("积分")])])])])])})),t._v(" "),a("is-empty",{model:{value:t.isEmpty,callback:function(e){t.isEmpty=e},expression:"isEmpty"}},[t._v("抱歉,没有最新消息")])],1)},staticRenderFns:[]};var S=a("VU/8")(_,b,!1,function(t){a("uMcE")},"data-v-cbc2abe4",null);e.default=S.exports},uMcE:function(t,e){}});
//# sourceMappingURL=15.de4853536ee12ad99a38.js.map