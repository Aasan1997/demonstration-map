webpackJsonp([1],{"5wr7":function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("7+uW"),i={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=t("VU/8")({name:"App"},i,!1,function(n){t("5wr7")},null,null).exports,s=t("/ocq"),r={name:"HelloWorld",data:function(){return{}},mounted:function(){this.$nextTick(function(){var n=new maptalks.Map("map",{center:[114.067095,22.525025],dragPitch:!0,dragRotate:!0,dragRotatePitch:!0,minZoom:1,maxZoom:19,spatialReference:{projection:"baidu"},baseLayer:new maptalks.TileLayer("base",{urlTemplate:"https://gss{s}.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20170927",subdomains:[0,1,2,3],attribution:'&copy; <a target="_blank" href="http://map.baidu.com">Baidu</a>'})}),e=new maptalks.VectorLayer("vector").addTo(n);[{lan:[114.064529,22.523873],name:"皇岗公园",key:1},{lan:[114.061206,22.524603],name:"深圳市福田区益强小学",key:2},{lan:[114.062917,22.524737],name:"益田路",key:3},{lan:[114.067064,22.524076],name:"云顶翠峰-二期",key:4},{lan:[114.067095,22.525025],name:"深圳市云顶学校",key:5},{lan:[114.068835,22.524063],name:"scie深圳国际交流学校",key:6},{lan:[114.067506,22.525749],name:"晨辉家园",key:7},{lan:[114.065754,22.525465],name:"捷讯大楼",key:8},{lan:[114.068453,22.525511],name:"锦平楼",key:9},{lan:[114.068503,22.526066],name:"水围龙轩豪庭",key:10}].forEach(function(n,t){var a=new maptalks.Marker(n.lan).addTo(e).on("click",function(e){console.log(n),document.getElementById("info-box").innerHTML='<div><div>当前位置信息: </div><div><span>名称:&nbsp;</span><span style="font-size:15px;font-weight:bold;">'+n.name+"</span></div><div><span>经纬度:&nbsp;</span><span style='color:#4B7EFF;'>"+e.coordinate.toFixed(6).toArray().join()+"</span></div></div>"});a.setInfoWindow({title:"当前位置信息",content:'<div><span>名称:&nbsp;</span><span style="font-size:15px;font-weight:bold;">'+n.name+"</span></div><div><span>经纬度:&nbsp;</span><span style='color:#4B7EFF;'>"+n.lan+"</span></div>"}),a.openInfoWindow()})})}},l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"hello"},[e("div",{staticClass:"container",attrs:{id:"map"}}),this._v(" "),e("div",{attrs:{id:"info"}},[e("div",[e("span",{staticStyle:{color:"red","font-size":"20px","font-weight":"bold"}},[this._v("注释: ")]),this._v("同时按下ctrl + 鼠标左键,\n      或者点击鼠标右键可以进行地图旋转、仰视、俯视视角\n    ")]),this._v(" "),e("div",{attrs:{id:"info-box"}})])])}]};var d=t("VU/8")(r,l,!1,function(n){t("mgMd"),t("Y/SE")},"data-v-75d49304",null).exports;a.a.use(s.a);var p=new s.a({routes:[{path:"/",name:"HelloWorld",component:d}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:o},template:"<App/>"})},"Y/SE":function(n,e){},mgMd:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.fcab4d386c036ddcae42.js.map