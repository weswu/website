(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19e05cb1"],{"0fb4":function(t,e,n){"use strict";var a=n("a593");e["a"]=a["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},"4fe5":function(t,e,n){},c7ca:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)},i=[],s={name:"BaseView"},o=s,r=n("9ca4"),d=n("7033"),c=n.n(d),l=(n("4fe5"),n("0fb4")),u=l["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:a,insetFooter:i,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:n+"px",paddingBottom:a+i+s+"px",paddingLeft:o+"px"}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),p=n("d135"),m=u.extend({name:"v-main",created(){Object(p["d"])("v-content","v-main",this)},render(t){const e=u.options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}}),f=n("dd88"),v=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=v.exports;c()(v,{VContent:m,VFadeTransition:f["b"]})}}]);
//# sourceMappingURL=chunk-19e05cb1.d4c328a0.js.map