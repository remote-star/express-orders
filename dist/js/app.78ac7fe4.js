(function(e){function t(t){for(var r,l,i=t[0],o=t[1],c=t[2],u=0,f=[];u<i.length;u++)l=i[u],s[l]&&f.push(s[l][0]),s[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},s={app:0},n=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/shop/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"135b":function(e,t,a){},"203e":function(e,t,a){"use strict";var r=a("a65d"),s=a.n(r);s.a},2468:function(e,t,a){"use strict";var r=a("4ce2"),s=a.n(r);s.a},"3b43":function(e,t,a){"use strict";var r=a("6907"),s=a.n(r);s.a},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return a(t)}function n(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="4678"},"490c":function(e,t,a){"use strict";var r=a("135b"),s=a.n(r);s.a},"4ce2":function(e,t,a){},5101:function(e,t,a){},6907:function(e,t,a){},a65d:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.isMobile?e._e():a("header",[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入关键词搜索"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),a("div",{staticClass:"btns"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$refs.form.open()}}},[e._v("\n        新增\n      ")]),a("el-button",{attrs:{type:"danger",disabled:0===e.selectedOrders.length},on:{click:e.deleteAll}},[e._v("\n        删除\n      ")]),a("el-button",{attrs:{type:"success",disabled:0===e.selectedOrders.length},on:{click:e.exportOrders}},[e._v("\n        导出\n      ")])],1)],1),e.isMobile?a("header",[a("div"),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$refs.scanner.open()}}},[e._v("\n      扫码\n    ")])],1):e._e(),e.isMobile?e._e():a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.filteredTableData,stripe:"",border:""},on:{"selection-change":e.onTableSelected}},[a("el-table-column",{attrs:{type:"selection",width:"36"}}),a("el-table-column",{attrs:{prop:"id",width:"50",label:"单号"}}),a("el-table-column",{attrs:{prop:"goods",width:"300",label:"商品"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("el-table",{attrs:{data:e.row.goods,"show-header":!1,border:"",size:"mini"}},[a("el-table-column",{attrs:{prop:"name"}}),a("el-table-column",{attrs:{width:"40",prop:"size"}}),a("el-table-column",{attrs:{width:"40",formatter:function(e){return e.amount+"件"}}}),a("el-table-column",{attrs:{prop:"specialStatus"}})],1)]}}])}),a("el-table-column",{attrs:{prop:"receiverName",width:"80",label:"收件人"}}),a("el-table-column",{attrs:{prop:"receiverTelephone",width:"110",label:"收件电话"}}),a("el-table-column",{attrs:{prop:"receiverAddress",width:"250",label:"收件地址"}}),a("el-table-column",{attrs:{prop:"payType",width:"100",label:"付款方式"}}),a("el-table-column",{attrs:{prop:"expressType",width:"100",label:"业务类型"}}),a("el-table-column",{attrs:{prop:"senderName",width:"80",label:"寄件人"}}),a("el-table-column",{attrs:{prop:"senderTelephone",width:"110",label:"寄件电话"}}),a("el-table-column",{attrs:{prop:"senderAddress",width:"250",label:"寄件地址"}}),a("el-table-column",{attrs:{prop:"createTime",width:"160",label:"创建时间"}}),a("el-table-column",{attrs:{width:"85",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.$refs.form.edit(t.row)}}},[e._v("\n          编辑\n        ")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteOrder(t.$index)}}},[e._v("\n          删除\n        ")])]}}])})],1),e.isMobile?a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.filteredTableData,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"originalText",label:"下单信息"}}),a("el-table-column",{attrs:{width:"80",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.$refs.picture.open(t.row)}}},[e._v("\n          拍照\n        ")])]}}])})],1):e._e(),a("el-pagination",{attrs:{layout:"total",total:e.filteredTableData.length}}),a("Order",{ref:"form",on:{create:e.onCreated,save:e.onSaved}}),a("Picture",{ref:"picture",on:{create:e.onCreated,save:e.onSaved}}),a("Scanner",{ref:"scanner",on:{create:e.onCreated,save:e.onSaved}})],1)},n=[],l=(a("4917"),a("ac4d"),a("8a81"),a("ac6a"),a("8615"),a("96cf"),a("1da1")),i=a("d4ec"),o=a("bee2"),c=a("99de"),d=a("7e84"),u=a("262e"),f=a("9ab4"),p=a("60a3"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"新建订单",top:"30px",visible:e.dialogVisible,width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[a("el-form-item",{style:{marginBottom:0},attrs:{label:"原始文本"}},[a("el-input",{attrs:{type:"textarea",size:"small",rows:"4"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.recognize(t):null}},model:{value:e.form.originalText,callback:function(t){e.$set(e.form,"originalText",t)},expression:"form.originalText"}})],1),a("el-form-item",{style:{marginBottom:0}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.recognize}},[e._v("\n        识别\n      ")])],1),a("div",{staticClass:"line"}),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"订单号",prop:"id"}},[a("el-input",{attrs:{type:"number",size:"small"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1)],1),a("el-col",{attrs:{span:14}},[a("el-form-item",{attrs:{label:"邮寄方式"}},[a("el-select",{style:{width:"50%",paddingRight:"10px"},attrs:{size:"small",placeholder:"付款方式"},model:{value:e.form.payType,callback:function(t){e.$set(e.form,"payType",t)},expression:"form.payType"}},[a("el-option",{attrs:{label:"到付现结",value:"到付现结"}}),a("el-option",{attrs:{label:"寄付现结",value:"寄付现结"}})],1),a("el-select",{style:{width:"50%",paddingLeft:"10px"},attrs:{size:"small",placeholder:"业务类型"},model:{value:e.form.expressType,callback:function(t){e.$set(e.form,"expressType",t)},expression:"form.expressType"}},[a("el-option",{attrs:{label:"顺丰标快",value:"顺丰标快"}}),a("el-option",{attrs:{label:"顺丰特惠",value:"顺丰特惠"}}),a("el-option",{attrs:{label:"物流普运",value:"物流普运"}})],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"收件人",prop:"receiverName"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.receiverName,callback:function(t){e.$set(e.form,"receiverName",t)},expression:"form.receiverName"}})],1)],1),a("el-col",{attrs:{span:14}},[a("el-form-item",{attrs:{label:"电话",prop:"receiverTelephone"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.receiverTelephone,callback:function(t){e.$set(e.form,"receiverTelephone",t)},expression:"form.receiverTelephone"}})],1)],1)],1),a("el-form-item",{attrs:{label:"收件地址",prop:"receiverAddress"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.receiverAddress,callback:function(t){e.$set(e.form,"receiverAddress",t)},expression:"form.receiverAddress"}})],1),a("div",{staticClass:"line"}),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"寄件人"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.senderName,callback:function(t){e.$set(e.form,"senderName",t)},expression:"form.senderName"}})],1)],1),a("el-col",{attrs:{span:14}},[a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.senderTelephone,callback:function(t){e.$set(e.form,"senderTelephone",t)},expression:"form.senderTelephone"}})],1)],1)],1),a("el-form-item",{attrs:{label:"寄件地址"}},[a("el-input",{attrs:{size:"small"},model:{value:e.form.senderAddress,callback:function(t){e.$set(e.form,"senderAddress",t)},expression:"form.senderAddress"}})],1),a("div",{staticClass:"line"}),e._l(e.form.goods,function(t,r){return a("el-form-item",{key:r,attrs:{"label-width":"0"}},[a("el-row",{attrs:{gutter:8}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"商品"+(e.form.goods.length>1?r:""),prop:"goods."+r+".name",rules:{required:!0,message:"商品名不能为空",trigger:"blur"}}},[a("el-input",{attrs:{size:"small",placeholder:"商品名"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"good.name"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{"label-width":"0"}},[a("el-input",{attrs:{size:"small",placeholder:"尺寸"},model:{value:t.size,callback:function(a){e.$set(t,"size",a)},expression:"good.size"}})],1)],1),a("el-col",{attrs:{span:3}},[a("el-form-item",{attrs:{"label-width":"0",prop:"goods."+r+".amount"}},[a("el-input",{attrs:{type:"number",min:"1",size:"small",placeholder:"数量"},model:{value:t.amount,callback:function(a){e.$set(t,"amount",a)},expression:"good.amount"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{"label-width":"0",prop:"goods."+r+".amount"}},[a("el-input",{attrs:{size:"small",placeholder:"备注"},model:{value:t.specialStatus,callback:function(a){e.$set(t,"specialStatus",a)},expression:"good.specialStatus"}})],1)],1),a("el-col",{style:{textAlign:"right"},attrs:{span:1}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){t.preventDefault(),e.form.goods.splice(r,1)}}},[a("i",{staticClass:"el-icon-delete"})])],1)],1)],1)}),a("el-form-item",[a("el-button",{style:{marginRight:"10px"},attrs:{type:"success",size:"mini"},on:{click:e.addGood}},[e._v("\n        添加商品\n      ")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.save}},[e._v("\n        保存\n      ")]),a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n        取消\n      ")])],1)],2)],1)},b=[],h=(a("7f7f"),a("c5f6"),a("04ff"),a("28a5"),a("a481"),a("be94")),v=a("c1df"),g=a.n(v),y=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.dialogVisible=!1,e.form=e.getDefaultForm(),e.mode="create",e.rules={id:[{required:!0,message:"请输入订单号",trigger:"change"}],receiverName:[{required:!0,message:"请输入收件人姓名",trigger:"change"}],receiverTelephone:[{required:!0,message:"请输入收件人电话",trigger:"change"}],receiverAddress:[{required:!0,message:"请输入收件人地址",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"open",value:function(){this.dialogVisible=!0,this.mode="create"}},{key:"edit",value:function(e){this.form=Object(h["a"])({},e,{goods:e.goods.map(function(e){return Object(h["a"])({},e)})}),this.dialogVisible=!0,this.mode="edit"}},{key:"recognize",value:function(){var e=this;if(this.form.originalText){var t=this.form.originalText.replace(/(\d{11})/g," $1 "),a=t.match(/[\(（][^()（）]+( )[^()（）]+[\)）]/g);if(a){var r=!0,s=!1,n=void 0;try{for(var l,i=a[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var o=l.value,c=o.replace(/ /g,"/");t=t.replace(o,c)}}catch(N){s=!0,n=N}finally{try{r||null==i.return||i.return()}finally{if(s)throw n}}}var d=t.split(/[\s，。、：,.:]+/).filter(function(e){return e}),u=d[0].match(/\d+/);u&&(this.form.id=Number.parseInt(u[0]),d.splice(0,1)),d.forEach(function(t,a){var r=["顺丰","到付","包邮","陆运"];r.some(function(e){return t.indexOf(e)>=0})&&(t.indexOf("到付")>=0?e.form.payType="到付现结":e.form.payType="寄付现结",t.indexOf("陆运")>=0?e.form.expressType="顺丰特惠":t.indexOf("普运")>=0?e.form.expressType="物流普运":e.form.expressType="顺丰标快",d.splice(a,1))}),d.forEach(function(t,a){var r=["发货","发件","寄货","寄件","代发"];if(r.some(function(e){return t.indexOf(e)>=0})){var s=d.splice(a),n=!0,l=!1,i=void 0;try{for(var o,c=s[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var u=o.value;/^\d+$/.test(u)?e.form.senderTelephone=u:u.length>8?e.form.senderAddress=u:e.form.senderName=u.replace("收","")}}catch(N){l=!0,i=N}finally{try{n||null==c.return||c.return()}finally{if(l)throw i}}}});var f=d.splice(-3),p=!0,m=!1,b=void 0;try{for(var h,v=f[Symbol.iterator]();!(p=(h=v.next()).done);p=!0){var g=h.value;/^\d+$/.test(g)?this.form.receiverTelephone=g:g.length>8?this.form.receiverAddress=g:this.form.receiverName=g.replace("收","")}}catch(N){m=!0,b=N}finally{try{p||null==v.return||v.return()}finally{if(m)throw b}}d=d.filter(function(e){return["地址"].some(function(t){return e.indexOf(t)<0})});var y=[],j=!0,k=!1,w=void 0;try{for(var x,O=d[Symbol.iterator]();!(j=(x=O.next()).done);j=!0){var _=x.value,z={name:"",amount:1},T=_,S=_.match(/[\(（](.+)[\)）]/);S&&(z.specialStatus=S[1].replace("/"," "),T=_.replace(/[\(（].+[\)）]/,""));var $=T.split("/");T=$[0],z.amount=Number.parseInt($[1])||1;var D=void 0;/\d/.test(T[T.length-1])?D=T.match(/\d+$/)[0]:/[a-zA-Z]/.test(T[T.length-1])&&(D=T.match(/[a-zA-Z]+$/)[0]),D&&(z.size=D,T=T.substr(0,T.length-D.length)),z.name=T||y[y.length-1].name,y.push(z)}}catch(N){k=!0,w=N}finally{try{j||null==O.return||O.return()}finally{if(k)throw w}}this.form.goods=y}}},{key:"getDefaultForm",value:function(){return{id:1,payType:"到付现结",expressType:"顺丰标快",receiverName:"",receiverTelephone:"",receiverAddress:"",senderName:"王源",senderTelephone:"18613109175",senderAddress:"广东省 广州市 白云区 金钟横路",goods:[{name:"",size:"",amount:1}]}}},{key:"addGood",value:function(){this.form.goods.push({name:"",size:"",amount:1})}},{key:"save",value:function(){var e=this;this.form.goods.length?this.$refs.form.validate(function(t){if(!t)return!1;"create"===e.mode&&(e.form._id="".concat(+new Date),e.form.createTime=g()().format("YYYY-MM-DD HH:mm:ss")),e.form.modifyTime=g()().format("YYYY-MM-DD HH:mm:ss"),"create"===e.mode?e.$emit("create",e.form):e.$emit("save",e.form),e.dialogVisible=!1,e.form=e.getDefaultForm()}):this.$message({message:"请添加商品",type:"warning"})}}]),t}(p["b"]);y=f["a"]([p["a"]],y);var j=y,k=j,w=(a("203e"),a("2877")),x=Object(w["a"])(k,m,b,!1,null,"3ae59bbe",null);x.options.__file="Order.vue";var O=x.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"拍照留底",top:"30px",visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("p",[e._v("\n    "+e._s(e.order&&e.order.originalText)+"\n  ")]),a("el-carousel",{attrs:{height:"150px",trigger:"click"}},e._l(4,function(t){return a("el-carousel-item",{key:t},[a("h3",[e._v(e._s(t))])])})),a("div",{staticClass:"button-area"},[a("el-input",{attrs:{placeholder:"请输入内容",type:"file",accept:"image/*",capture:"camera"}}),a("el-button",{staticClass:"fake"},[e._v("\n      拍照\n    ")])],1)],1)},z=[],T=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.dialogVisible=!1,e.order=null,e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"open",value:function(e){this.dialogVisible=!0,this.order=e}}]),t}(p["b"]);T=f["a"]([p["a"]],T);var S=T,$=S,D=(a("2468"),Object(w["a"])($,_,z,!1,null,"e11868f6",null));D.options.__file="Picture.vue";var N=D.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"扫描条形码",top:"30px",visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"viewport",attrs:{id:"interactive"}})])},C=[],V=a("8a00"),M=a.n(V),q=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.dialogVisible=!1,e.state={inputStream:{type:"LiveStream",constraints:{width:{min:640},height:{min:480},facingMode:"environment",aspectRatio:{min:1,max:2}},target:null},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:2,frequency:10,decoder:{readers:[{format:"code_128_reader",config:{}}]},locate:!0},e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"open",value:function(){this.dialogVisible=!0,setTimeout(this.init)}},{key:"init",value:function(){var e=this,t=document.querySelector("#interactive");t?(this.state.inputStream.target=t,M.a.init(this.state,function(t){M.a.start(),M.a.onProcessed(function(t){t&&t.codeResult&&(alert(t.codeResult.code),M.a.stop(),e.dialogVisible=!1)})})):setTimeout(this.init)}}]),t}(p["b"]);q=f["a"]([p["a"]],q);var P=q,E=P,J=(a("3b43"),Object(w["a"])(E,A,C,!1,null,"33dba02c",null));J.options.__file="Scanner.vue";var Y=J.exports,R=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.keyword="",e.tableData=[],e.selectedOrders=[],e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"onCreated",value:function(e){this.tableData.push(e),window.localStorage.orders=JSON.stringify(this.tableData)}},{key:"onSaved",value:function(e){var t=this;this.tableData.some(function(a,r){return a._id===e._id&&(t.tableData.splice(r,1,e),!0)}),window.localStorage.orders=JSON.stringify(this.tableData)}},{key:"deleteOrder",value:function(e){var t=this;this.$confirm("确定删除订单？","确认删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.tableData.splice(e,1),window.localStorage.orders=JSON.stringify(t.tableData)})}},{key:"deleteAll",value:function(){var e=this;this.$confirm("确定删除全部所选订单？","确认删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.tableData=e.tableData.filter(function(t){return!e.selectedOrders.some(function(e){return e._id===t._id})}),window.localStorage.orders=JSON.stringify(e.tableData)})}},{key:"onTableSelected",value:function(e){this.selectedOrders=e}},{key:"exportOrders",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new Headers,t.append("Content-Type","application/json"),e.next=4,fetch("/shop/api/export",{method:"POST",body:JSON.stringify({orders:this.selectedOrders}),headers:t});case 4:if(a=e.sent,!a){e.next=10;break}return e.next=8,a.text();case 8:r=e.sent,window.open(location.origin+"/shop/"+r);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"created",value:function(){var e=window.localStorage.orders;if(e)try{this.tableData=JSON.parse(e)}catch(t){this.tableData=[]}}},{key:"filteredTableData",get:function(){var e=this;return this.keyword?this.tableData.filter(function(t){for(var a=Object.values(t),r=0;r<a.length;r++){var s=a[r];if("".concat(s).indexOf(e.keyword)>=0)return!0}var n=!0,l=!1,i=void 0;try{for(var o,c=t.goods[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)for(var d=o.value,u=Object.values(d),f=0;f<u.length;f++){var p=u[f];if("".concat(p).indexOf(e.keyword)>=0)return!0}}catch(m){l=!0,i=m}finally{try{n||null==c.return||c.return()}finally{if(l)throw i}}}):this.tableData}},{key:"isMobile",get:function(){var e=navigator.userAgent,t=e.match(/(iPad).*OS\s([\d_]+)/),a=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/),r=e.match(/(Android)\s+([\d.]+)/);return a||r}}]),t}(p["b"]);R=f["a"]([Object(p["a"])({components:{Order:O,Picture:N,Scanner:Y}})],R);var B=R,H=B,F=(a("f28b"),a("490c"),Object(w["a"])(H,s,n,!1,null,"a415d078",null));F.options.__file="App.vue";var L=F.exports,G=(a("0fb7"),a("450d"),a("f529")),I=a.n(G),U=(a("9e1f"),a("6ed5")),Z=a.n(U),W=(a("186a"),a("301f")),K=a.n(W),Q=(a("96dc"),a("9cea")),X=a.n(Q),ee=(a("f4f9"),a("c2cc")),te=a.n(ee),ae=(a("7a0f"),a("0f6c")),re=a.n(ae),se=(a("eca7"),a("3787")),ne=a.n(se),le=(a("425f"),a("4105")),ie=a.n(le),oe=(a("5466"),a("ecdf")),ce=a.n(oe),de=(a("38a0"),a("ad41")),ue=a.n(de),fe=(a("1951"),a("eedf")),pe=a.n(fe),me=(a("6611"),a("e772")),be=a.n(me),he=(a("1f1a"),a("4e4b")),ve=a.n(he),ge=(a("10cb"),a("f3ad")),ye=a.n(ge),je=(a("a7cc"),a("df33")),ke=a.n(je),we=(a("672e"),a("101e")),xe=a.n(we);r["default"].use(xe.a),r["default"].use(ke.a),r["default"].use(ye.a),r["default"].use(ve.a),r["default"].use(be.a),r["default"].use(pe.a),r["default"].use(ue.a),r["default"].use(ce.a),r["default"].use(ie.a),r["default"].use(ne.a),r["default"].use(re.a),r["default"].use(te.a),r["default"].use(X.a),r["default"].use(K.a),r["default"].prototype.$msgbox=Z.a,r["default"].prototype.$confirm=Z.a.confirm,r["default"].prototype.$message=I.a,r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(L)}}).$mount("#app")},f28b:function(e,t,a){"use strict";var r=a("5101"),s=a.n(r);s.a}});
//# sourceMappingURL=app.78ac7fe4.js.map