(function(e){function t(t){for(var a,l,o=t[0],i=t[1],c=t[2],f=0,u=[];f<o.length;f++)l=o[f],s[l]&&u.push(s[l][0]),s[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var i=r[o];0!==s[i]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},s={app:0},n=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=i;n.push([1,"chunk-vendors"]),r()})({0:function(e,t){},1:function(e,t,r){e.exports=r("cd49")},"135b":function(e,t,r){},"1f41":function(e,t,r){},2:function(e,t){},3:function(e,t){},4678:function(e,t,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return r(t)}function n(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id="4678"},"490c":function(e,t,r){"use strict";var a=r("135b"),s=r.n(a);s.a},ba24:function(e,t,r){"use strict";var a=r("1f41"),s=r.n(a);s.a},bcda:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入关键词搜索"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),r("div",{staticClass:"btns"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$refs.form.open()}}},[e._v("\n        新增\n      ")]),r("el-button",{attrs:{type:"danger",disabled:0===e.selectedOrders.length},on:{click:e.deleteAll}},[e._v("\n        删除\n      ")]),r("el-button",{attrs:{type:"success",disabled:0===e.selectedOrders.length},on:{click:e.exportOrders}},[e._v("\n        导出\n      ")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.filteredTableData,stripe:"",border:""},on:{"selection-change":e.onTableSelected}},[r("el-table-column",{attrs:{type:"selection",width:"36"}}),r("el-table-column",{attrs:{prop:"id",width:"50",label:"单号"}}),r("el-table-column",{attrs:{prop:"goods",width:"300",label:"商品"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-table",{attrs:{data:e.row.goods,"show-header":!1,border:"",size:"mini"}},[r("el-table-column",{attrs:{width:"130",prop:"name"}}),r("el-table-column",{attrs:{prop:"size"}}),r("el-table-column",{attrs:{formatter:function(e){return e.amount+"件"}}})],1)]}}])}),r("el-table-column",{attrs:{prop:"receiverName",width:"80",label:"收件人"}}),r("el-table-column",{attrs:{prop:"receiverTelephone",width:"110",label:"收件电话"}}),r("el-table-column",{attrs:{prop:"receiverAddress",width:"250",label:"收件地址"}}),r("el-table-column",{attrs:{prop:"payType",width:"100",label:"付款方式"}}),r("el-table-column",{attrs:{prop:"expressType",width:"100",label:"业务类型"}}),r("el-table-column",{attrs:{prop:"senderName",width:"80",label:"寄件人"}}),r("el-table-column",{attrs:{prop:"senderTelephone",width:"110",label:"寄件电话"}}),r("el-table-column",{attrs:{prop:"senderAddress",width:"250",label:"寄件地址"}}),r("el-table-column",{attrs:{prop:"createTime",width:"160",label:"创建时间"}}),r("el-table-column",{attrs:{width:"85",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.$refs.form.edit(t.row)}}},[e._v("\n          编辑\n        ")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.deleteOrder(t.$index)}}},[e._v("\n          删除\n        ")])]}}])})],1),r("el-pagination",{attrs:{layout:"total",total:e.filteredTableData.length}}),r("Order",{ref:"form",on:{create:e.onCreated,save:e.onSaved}})],1)},n=[],l=(r("ac4d"),r("8a81"),r("ac6a"),r("8615"),r("d4ec")),o=r("bee2"),i=r("99de"),c=r("7e84"),d=r("262e"),f=r("9ab4"),u=r("60a3"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"新建订单",top:"30px",visible:e.dialogVisible,width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[r("el-form-item",{style:{marginBottom:0},attrs:{label:"原始文本"}},[r("el-input",{attrs:{type:"textarea",size:"small",rows:"4"},model:{value:e.form.originalText,callback:function(t){e.$set(e.form,"originalText",t)},expression:"form.originalText"}})],1),r("el-form-item",{style:{marginBottom:0}},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.recognize}},[e._v("\n        识别\n      ")])],1),r("div",{staticClass:"line"}),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"订单号",prop:"id"}},[r("el-input",{attrs:{type:"number",size:"small"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"邮寄方式"}},[r("el-select",{style:{width:"50%",paddingRight:"10px"},attrs:{size:"small",placeholder:"付款方式"},model:{value:e.form.payType,callback:function(t){e.$set(e.form,"payType",t)},expression:"form.payType"}},[r("el-option",{attrs:{label:"到付现结",value:"到付现结"}}),r("el-option",{attrs:{label:"寄付现结",value:"寄付现结"}})],1),r("el-select",{style:{width:"50%",paddingLeft:"10px"},attrs:{size:"small",placeholder:"业务类型"},model:{value:e.form.expressType,callback:function(t){e.$set(e.form,"expressType",t)},expression:"form.expressType"}},[r("el-option",{attrs:{label:"顺丰次日",value:"顺丰次日"}}),r("el-option",{attrs:{label:"顺丰隔日",value:"顺丰隔日"}})],1)],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"收件人",prop:"receiverName"}},[r("el-input",{attrs:{size:"small"},model:{value:e.form.receiverName,callback:function(t){e.$set(e.form,"receiverName",t)},expression:"form.receiverName"}})],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"电话",prop:"receiverTelephone"}},[r("el-input",{attrs:{size:"small"},model:{value:e.form.receiverTelephone,callback:function(t){e.$set(e.form,"receiverTelephone",t)},expression:"form.receiverTelephone"}})],1)],1)],1),r("el-form-item",{attrs:{label:"收件地址",prop:"receiverAddress"}},[r("el-input",{attrs:{size:"small"},model:{value:e.form.receiverAddress,callback:function(t){e.$set(e.form,"receiverAddress",t)},expression:"form.receiverAddress"}})],1),r("div",{staticClass:"line"}),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"寄件人"}},[r("el-input",{attrs:{size:"small"},model:{value:e.form.senderName,callback:function(t){e.$set(e.form,"senderName",t)},expression:"form.senderName"}})],1)],1),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"电话"}},[r("el-input",{attrs:{size:"small"},model:{value:e.form.senderTelephone,callback:function(t){e.$set(e.form,"senderTelephone",t)},expression:"form.senderTelephone"}})],1)],1)],1),r("el-form-item",{attrs:{label:"寄件地址"}},[r("el-input",{attrs:{size:"small"},model:{value:e.form.senderAddress,callback:function(t){e.$set(e.form,"senderAddress",t)},expression:"form.senderAddress"}})],1),r("div",{staticClass:"line"}),e._l(e.form.goods,function(t,a){return r("el-form-item",{key:a,attrs:{"label-width":"0"}},[r("el-row",{attrs:{gutter:8}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"商品"+(e.form.goods.length>1?a:""),prop:"goods."+a+".name",rules:{required:!0,message:"商品名不能为空",trigger:"blur"}}},[r("el-input",{attrs:{size:"small",placeholder:"商品名"},model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"good.name"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{"label-width":"0"}},[r("el-input",{attrs:{size:"small",placeholder:"尺寸"},model:{value:t.size,callback:function(r){e.$set(t,"size",r)},expression:"good.size"}})],1)],1),r("el-col",{attrs:{span:5}},[r("el-form-item",{attrs:{"label-width":"0",prop:"goods."+a+".amount"}},[r("el-input",{attrs:{type:"number",min:"1",size:"small",placeholder:"数量"},model:{value:t.amount,callback:function(r){e.$set(t,"amount",r)},expression:"good.amount"}})],1)],1),r("el-col",{style:{textAlign:"right"},attrs:{span:1}},[r("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){t.preventDefault(),e.form.goods.splice(a,1)}}},[r("i",{staticClass:"el-icon-delete"})])],1)],1)],1)}),r("el-form-item",[r("el-button",{style:{marginRight:"10px"},attrs:{type:"success",size:"mini"},on:{click:e.addGood}},[e._v("\n        添加商品\n      ")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.save}},[e._v("\n        保存\n      ")]),r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n        取消\n      ")])],1)],2)],1)},b=[],p=(r("7f7f"),r("6762"),r("2fdb"),r("a481"),r("c5f6"),r("04ff"),r("4917"),r("28a5"),r("be94")),v=r("c1df"),h=r.n(v),j=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.dialogVisible=!1,e.form=e.getDefaultForm(),e.mode="create",e.rules={id:[{required:!0,message:"请输入订单号",trigger:"change"}],receiverName:[{required:!0,message:"请输入收件人姓名",trigger:"change"}],receiverTelephone:[{required:!0,message:"请输入收件人电话",trigger:"change"},{min:11,max:11,message:"请输入11位电话号码",trigger:"blur"}],receiverAddress:[{required:!0,message:"请输入收件人地址",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},e}return Object(d["a"])(t,e),Object(o["a"])(t,[{key:"open",value:function(){this.dialogVisible=!0,this.mode="create"}},{key:"edit",value:function(e){this.form=Object(p["a"])({},e,{goods:e.goods.map(function(e){return Object(p["a"])({},e)})}),this.dialogVisible=!0,this.mode="edit"}},{key:"recognize",value:function(){var e=this;if(this.form.originalText){var t=this.form.originalText.split(/[\s，。、：,.:]+/),r=t[0].match(/\d+/);r&&(this.form.id=Number.parseInt(r[0]),t.splice(0,1)),t.forEach(function(r,a){var s=["顺丰","到付","包邮","陆运"];s.some(function(e){return r.indexOf(e)>=0})&&(r.indexOf("到付")>=0?e.form.payType="到付现结":e.form.payType="寄付现结",r.indexOf("陆运")>=0?e.form.expressType="顺丰隔日":e.form.expressType="顺丰次日",t.splice(a,1))}),t.forEach(function(r,a){var s=["发货","发件","寄货","寄件"];if(s.some(function(e){return r.indexOf(e)>=0})){var n=t.splice(a),l=!0,o=!1,i=void 0;try{for(var c,d=n[Symbol.iterator]();!(l=(c=d.next()).done);l=!0){var f=c.value;/^\d+$/.test(f)?e.form.senderTelephone=f:f.length>8?e.form.senderAddress=f:e.form.senderName=f.replace("收","")}}catch(u){o=!0,i=u}finally{try{l||null==d.return||d.return()}finally{if(o)throw i}}}});var a=t.splice(-3),s=!0,n=!1,l=void 0;try{for(var o,i=a[Symbol.iterator]();!(s=(o=i.next()).done);s=!0){var c=o.value;/^\d+$/.test(c)?this.form.receiverTelephone=c:c.length>8?this.form.receiverAddress=c:this.form.receiverName=c}}catch(k){n=!0,l=k}finally{try{s||null==i.return||i.return()}finally{if(n)throw l}}t=t.filter(function(e){return["地址"].some(function(t){return e.indexOf(t)<0})});var d=[],f=!0,u=!1,m=void 0;try{for(var b,p=t[Symbol.iterator]();!(f=(b=p.next()).done);f=!0){var v=b.value,h={name:"",amount:1},j=v,g=!1;(v.includes("(排单)")||v.includes("（排单）"))&&(g=!0,j=j.substr(0,j.length-4));var y=j.split("/");j=y[0],h.amount=Number.parseInt(y[1])||1;var w=void 0;/\d/.test(j[j.length-1])?w=j.match(/\d+$/)[0]:/[a-zA-Z]/.test(j[j.length-1])&&(w=j.match(/[a-zA-Z]+$/)[0]),w&&(h.size=w,j=j.substr(0,j.length-w.length)),h.name=j||d[d.length-1].name,g&&(h.name+="（排单）"),d.push(h)}}catch(k){u=!0,m=k}finally{try{f||null==p.return||p.return()}finally{if(u)throw m}}this.form.goods=d}}},{key:"getDefaultForm",value:function(){return{id:1,payType:"到付现结",expressType:"顺丰次日",receiverName:"",receiverTelephone:"",receiverAddress:"",senderName:"王源",senderTelephone:"18613109175",senderAddress:"广东省 广州市 白云区 金钟横路",goods:[{name:"",size:"",amount:1}]}}},{key:"addGood",value:function(){this.form.goods.push({name:"",size:"",amount:1})}},{key:"save",value:function(){var e=this;this.form.goods.length?this.$refs.form.validate(function(t){if(!t)return!1;"create"===e.mode&&(e.form._id="".concat(+new Date),e.form.createTime=h()().format("YYYY-MM-DD HH:mm:ss")),e.form.modifyTime=h()().format("YYYY-MM-DD HH:mm:ss"),"create"===e.mode?e.$emit("create",e.form):e.$emit("save",e.form),e.dialogVisible=!1,e.form=e.getDefaultForm()}):this.$message({message:"请添加商品",type:"warning"})}}]),t}(u["b"]);j=f["a"]([u["a"]],j);var g=j,y=g,w=(r("ba24"),r("2877")),k=Object(w["a"])(y,m,b,!1,null,"b217404c",null);k.options.__file="Order.vue";var x=k.exports,O=r("1146"),z=r.n(O),T={G1:{v:"寄件方信息",t:"s",w:"寄件方信息"},K1:{v:"收件方信息",t:"s",w:"收件方信息"},O1:{v:"商品信息",t:"s",w:"商品信息"},U1:{v:"发货信息",t:"s",w:"发货信息"},A2:{v:"序号",t:"s",w:"序号"},B2:{v:"订单号",t:"s",w:"订单号"},C2:{v:"运单号",t:"s",w:"运单号"},D2:{v:"子单号",t:"s",w:"子单号"},E2:{v:"签回单号",t:"s",w:"签回单号"},F2:{v:"寄方备注",t:"s",w:"寄方备注"},G2:{v:"寄方公司",t:"s",w:"寄方公司"},H2:{v:"寄方姓名",t:"s",w:"寄方姓名"},I2:{v:"寄方联系方式",t:"s",w:"寄方联系方式"},J2:{v:"寄方地址",t:"s",w:"寄方地址"},K2:{v:"收方公司",t:"s",w:"收方公司"},L2:{v:"收方姓名",t:"s",w:"收方姓名"},M2:{v:"收方联系方式",t:"s",w:"收方联系方式"},N2:{v:"收方地址",t:"s",w:"收方地址"},O2:{v:"商品名称",t:"s",w:"商品名称"},P2:{v:"商品编码",t:"s",w:"商品编码"},Q2:{v:"商品数量",t:"s",w:"商品数量"},R2:{v:"商品单价/元",t:"s",w:"商品单价/元"},S2:{v:"商品货号",t:"s",w:"商品货号"},T2:{v:"商品属性",t:"s",w:"商品属性"},U2:{v:"包裹件数",t:"s",w:"包裹件数"},V2:{v:"业务类型",t:"s",w:"业务类型"},W2:{v:"付款方式",t:"s",w:"付款方式"},X2:{v:"第三方付月结卡号",t:"s",w:"第三方付月结卡号"},Y2:{v:"包裹重量/KG",t:"s",w:"包裹重量/KG"},Z2:{v:"代收金额",t:"s",w:"代收金额"},AA2:{v:"代收卡号",t:"s",w:"代收卡号"},AB2:{v:"保价金额",t:"s",w:"保价金额"},AC2:{v:"是否签回单",t:"s",w:"是否签回单"},AD2:{v:"派送日期",t:"s",w:"派送日期"},AE2:{v:"派送时段",t:"s",w:"派送时段"},AF2:{v:"是否自取",t:"s",w:"是否自取"},AG2:{v:"是否保单配送",t:"s",w:"是否保单配送"},AH2:{v:"是否票据专送",t:"s",w:"是否票据专送"},AI2:{v:"是否易碎宝",t:"s",w:"是否易碎宝"},AJ2:{v:"易碎宝服务费/元",t:"s",w:"易碎宝服务费/元"},AK2:{v:"是否口令签收",t:"s",w:"是否口令签收"},AL2:{v:"标准化包装（元）",t:"s",w:"标准化包装（元）"},AM2:{v:"个性化包装（元）",t:"s",w:"个性化包装（元）"},AN2:{v:"其它费用（元）",t:"s",w:"其它费用（元）"},AO2:{v:"超长超重服务费",t:"s",w:"超长超重服务费"},AP2:{v:"是否双人派送",t:"s",w:"是否双人派送"},AQ2:{v:"长(cm)",t:"s",w:"长(cm)"},AR2:{v:"宽(cm)",t:"s",w:"宽(cm)"},AS2:{v:"高(cm)",t:"s",w:"高(cm)"},AT2:{v:"扩展字段1",t:"s",w:"扩展字段1"},AU2:{v:"扩展字段2",t:"s",w:"扩展字段2"},AV2:{v:"扩展字段3",t:"s",w:"扩展字段3"},AW2:{v:"扩展字段4",t:"s",w:"扩展字段4"}},A=function(e){var t=z.a.utils.book_new();e.forEach(function(e,t){T["F".concat(t+3)]={v:e.id+"号单",t:"s"},T["G".concat(t+3)]=T["H".concat(t+3)]={v:e.senderName||"王源",t:"s"},T["I".concat(t+3)]={v:e.senderTelephone||"18613109175",t:"s"},T["J".concat(t+3)]={v:e.senderAddress||"广东省 广州市 白云区 金钟横路",t:"s"},T["K".concat(t+3)]=T["L".concat(t+3)]={v:e.receiverName,t:"s"},T["M".concat(t+3)]={v:e.receiverTelephone,t:"s"},T["N".concat(t+3)]={v:e.receiverAddress,t:"s"},T["O".concat(t+3)]={v:e.goods.reduce(function(e,t){var r="";e&&(r=e+" ");var a=t.name+t.size;return t.amount>1&&(a+="/"+t.amount),r+a},""),t:"s"},T["U".concat(t+3)]={v:1,t:"n"},T["V".concat(t+3)]={v:e.expressType,t:"s"},T["W".concat(t+3)]={v:e.payType,t:"s"}}),T["!ref"]="A1:AW".concat(e.length+2),z.a.utils.book_append_sheet(t,T,"填写模板"),z.a.writeFile(t,"".concat(h()().format("YYYY年MM月DD日寄件单"),".xls"))},_=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.keyword="",e.tableData=[],e.selectedOrders=[],e}return Object(d["a"])(t,e),Object(o["a"])(t,[{key:"onCreated",value:function(e){this.tableData.push(e),window.localStorage.orders=JSON.stringify(this.tableData)}},{key:"onSaved",value:function(e){var t=this;this.tableData.some(function(r,a){return r._id===e._id&&(t.tableData.splice(a,1,e),!0)}),window.localStorage.orders=JSON.stringify(this.tableData)}},{key:"deleteOrder",value:function(e){var t=this;this.$confirm("确定删除订单？","确认删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.tableData.splice(e,1),window.localStorage.orders=JSON.stringify(t.tableData)})}},{key:"deleteAll",value:function(){var e=this;this.$confirm("确定删除全部所选订单？","确认删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.tableData=e.tableData.filter(function(t){return!e.selectedOrders.some(function(e){return e._id===t._id})}),window.localStorage.orders=JSON.stringify(e.tableData)})}},{key:"onTableSelected",value:function(e){this.selectedOrders=e}},{key:"exportOrders",value:function(){A(this.selectedOrders)}},{key:"created",value:function(){var e=window.localStorage.orders;if(e)try{this.tableData=JSON.parse(e)}catch(t){this.tableData=[]}}},{key:"filteredTableData",get:function(){var e=this;return this.keyword?this.tableData.filter(function(t){for(var r=Object.values(t),a=0;a<r.length;a++){var s=r[a];if("".concat(s).indexOf(e.keyword)>=0)return!0}var n=!0,l=!1,o=void 0;try{for(var i,c=t.goods[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)for(var d=i.value,f=Object.values(d),u=0;u<f.length;u++){var m=f[u];if("".concat(m).indexOf(e.keyword)>=0)return!0}}catch(b){l=!0,o=b}finally{try{n||null==c.return||c.return()}finally{if(l)throw o}}}):this.tableData}}]),t}(u["b"]);_=f["a"]([Object(u["a"])({components:{Order:x}})],_);var D=_,$=D,N=(r("f238"),r("490c"),Object(w["a"])($,s,n,!1,null,"581fa0cc",null));N.options.__file="App.vue";var S=N.exports,M=(r("0fb7"),r("450d"),r("f529")),Y=r.n(M),q=(r("9e1f"),r("6ed5")),C=r.n(q),J=(r("f4f9"),r("c2cc")),V=r.n(J),E=(r("7a0f"),r("0f6c")),B=r.n(E),F=(r("eca7"),r("3787")),G=r.n(F),P=(r("425f"),r("4105")),H=r.n(P),K=(r("5466"),r("ecdf")),U=r.n(K),I=(r("38a0"),r("ad41")),L=r.n(I),R=(r("1951"),r("eedf")),W=r.n(R),Z=(r("6611"),r("e772")),Q=r.n(Z),X=(r("1f1a"),r("4e4b")),ee=r.n(X),te=(r("10cb"),r("f3ad")),re=r.n(te),ae=(r("a7cc"),r("df33")),se=r.n(ae),ne=(r("672e"),r("101e")),le=r.n(ne);a["default"].use(le.a),a["default"].use(se.a),a["default"].use(re.a),a["default"].use(ee.a),a["default"].use(Q.a),a["default"].use(W.a),a["default"].use(L.a),a["default"].use(U.a),a["default"].use(H.a),a["default"].use(G.a),a["default"].use(B.a),a["default"].use(V.a),a["default"].prototype.$confirm=C.a.confirm,a["default"].prototype.$message=Y.a,a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(S)}}).$mount("#app")},f238:function(e,t,r){"use strict";var a=r("bcda"),s=r.n(a);s.a}});
//# sourceMappingURL=app.982e21a5.js.map