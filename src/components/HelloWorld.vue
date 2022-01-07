<template>
  <div class="hello">
    <div id="map" class="container"></div>
    <div id="info">
      <div>
        <span style="color:red;font-size:20px;font-weight:bold;">注释: </span
        >同时按下ctrl + 鼠标左键,
        或者点击鼠标右键可以进行地图旋转、仰视、俯视视角
      </div>
      <div id="info-box"></div>
    </div>
  </div>
</template>

<script>
import cityJson from "@/js/city.js";
import "maptalks/dist/maptalks.css";
import * as maptalks from "maptalks";
export default {
  name: "HelloWorld",
  data() {
    return {
      // msg: "Welcome to Your Vue.js App"
      // mapArr: [
      //   [114.063885, 22.524395],
      //   [114.061206, 22.524603],
      //   [114.062917, 22.524737],
      //   [114.067049, 22.52414],
      //   [114.061378, 22.523484],
      //   [114.067258, 22.525795],
      //   [114.065761, 22.525547]
      // ]
    };
  },
  mounted() {
    // console.log(cityJson);
    // this.$nextTick(() => {
    const map = new maptalks.Map("map", {
      center: [114.067095, 22.525025],
      // zoom: 14,
      // minZoom:1,
      // maxZoom:19,
      // 拖动俯视
      dragPitch: true,
      // 拖动旋转
      dragRotate: true,
      // 支持拖动仰视俯视
      dragRotatePitch: true,
      // 默认主题
      // baseLayer: new maptalks.TileLayer("base", {
      //   urlTemplate:
      //     "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
      //   subdomains: ["a", "b", "c", "d"],
      //   attribution:
      //     '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      // })
      // 百度地图图层
      minZoom: 1,
      maxZoom: 19,
      spatialReference: {
        projection: "baidu"
      },
      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate:
          "https://gss{s}.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20170927",
        subdomains: [0, 1, 2, 3],
        attribution:
          '&copy; <a target="_blank" href="http://map.baidu.com">Baidu</a>'
      })
    });
    // var marker = new maptalks.Marker(
    //   map.getCenter(),
    //   {
    //     symbol : {
    //       'textName' : 'Layer is shown.', // 文本描述
    //       'textWeight' : 'bold', // 自提加粗
    //       'textSize' : 50, // 字体大小
    //       'textFill' : '#1bbc9b', // 字体填充颜色
    //       'textHaloFill' : '#fff', // 字体颜色
    //       'textHaloRadius' : 5, // 削圆角
    //     }
    //   }
    // );
    // var layer = new maptalks.VectorLayer('vector', [marker]).addTo(map);
    var mapArr = [
      { lan: [114.064529, 22.523873], name: "皇岗公园", key: 1 },
      { lan: [114.061206, 22.524603], name: "深圳市福田区益强小学", key: 2 },
      { lan: [114.062917, 22.524737], name: "益田路", key: 3 },
      { lan: [114.067064, 22.524076], name: "云顶翠峰-二期", key: 4 },
      { lan: [114.067095, 22.525025], name: "深圳市云顶学校", key: 5 },
      { lan: [114.068835, 22.524063], name: "scie深圳国际交流学校", key: 6 },
      { lan: [114.067506, 22.525749], name: "晨辉家园", key: 7 },
      { lan: [114.065754, 22.525465], name: "捷讯大楼", key: 8 },
      { lan: [114.068453, 22.525511], name: "锦平楼", key: 9 },
      { lan: [114.068503, 22.526066], name: "水围龙轩豪庭", key: 10 }
    ];
    var layer = new maptalks.VectorLayer("vector").addTo(map);
    mapArr.forEach((item, i) => {
      // console.log(item, i);
      let marker = new maptalks.Marker(item.lan).addTo(layer).on("click", function(data) {
        console.log(item);
        var infoDom = document.getElementById("info-box");
        infoDom.innerHTML = `<div><div>当前位置信息: </div><div><span>名称:&nbsp;</span><span style="font-size:15px;font-weight:bold;">${
          item.name
        }</span></div><div><span>经纬度:&nbsp;</span><span style='color:#4B7EFF;'>${data.coordinate
          .toFixed(6)
          .toArray()
          .join()}</span></div></div>`;
      });
      marker.setInfoWindow({
        'title': '当前位置信息',
        'content': `<div><span>名称:&nbsp;</span><span style="font-size:15px;font-weight:bold;">${
          item.name
        }</span></div><div><span>经纬度:&nbsp;</span><span style='color:#4B7EFF;'>${item.lan}</span></div>`
      });
      marker.openInfoWindow();
    });
    // 默认弹层
    // marker.openInfoWindow();

    // 自定义信息弹层
    // var coordinate = map.getCenter().toFixed(3);
    // var infoWindow = new maptalks.ui.InfoWindow({
    //   'title'     : '单点渲染',
    //   'content'   : '你点个试试!'
    //   // 'autoPan': true,
    //   // 'width': 300,
    //   // 'minHeight': 120,
    //   // 'custom': false,
    //   //'autoOpenOn' : 'click',  //set to null if not to open when clicking on marker
    //   //'autoCloseOn' : 'click'
    // });
    // infoWindow.addTo(map).show(coordinate);
    // map.on("click", function(data) {
    //   console.log(data.coordinate.toArray().join());
    //   var infoDom = document.getElementById("info-box");
    //   infoDom.innerHTML = `<div>当前位置信息: <span style='color:#4B7EFF;'>${data.coordinate
    //     .toFixed(6)
    //     .toArray()
    //     .join()}</span></div>${infoDom.innerHTML}`;
    //   // new maptalks.ui.InfoWindow({
    //   //   'title'     : '单点渲染',
    //   //   'content'   : `<div>经纬度: <span style='color:#4B7EFF;'>${data.viewPoint.x}, ${data.viewPoint.y}</span></div>`
    //   // }).addTo(map).show();
    // })
    // .on("mouseenter", function(e) {
    //   console.log('mouseenter====', e);
    //   // e.target.updateSymbol({
    //   //   polygonFill: 'red'
    //   // });
    // })
    // .on("mouseout", function(e) {
    //   console.log('mouseout=====', e);
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.maptalks-msgBox .maptalks-msgContent {
  text-align: left !important;
}
</style>
<style scoped>
.hello {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  padding: 10px;
  background: #f8f8f8;
}
#map {
  margin-left: 218px;
}
.container {
  width: 86%;
  height: 95%;
  margin: 10px auto;
}
.content {
  color: #fff;
  width: 190px;
  height: 128px;
  /* background-color:#051127; */
  background: coral;
  border: 1px solid #0c2c45;
}
.pop_title {
  float: left;
  padding-left: 10px;
  width: 180px;
  height: 36px;
  line-height: 36px;
  /* background:url(title.png); */
  font-weight: bold;
  font-size: 16px;
}
.pop_time {
  float: left;
  width: 183px;
  height: 30px;
  margin: 0 10px;
  line-height: 36px;
}
.pop_dept {
  float: left;
  padding: 5px;
  max-width: 65px;
  line-height: 15px;
  text-align: center;
  border: 1px solid #192b41;
  margin: 0 10px;
}
.pop_arrow {
  float: left;
  width: 15px;
  height: 24px;
  line-height: 24px;
  /* background:url(arrow.png) no-repeat center center */
}
.arrow {
  display: block;
  width: 17px;
  height: 10px;
  /* background:url(em.png) no-repeat; */
  position: absolute;
  left: 50%;
  margin-left: -5px;
  bottom: -10px;
}
#info {
  text-align: left;
  position: fixed;
  /* background-color: rgba(13, 13, 13, 0.5); */
  background: #fff;
  padding: 10px 10px 10px 10px;
  font: 13px bold sans-serif;
  color: #000;
  line-height: 25px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 200px;
  /* height: 140px; */
  overflow: hidden;
}
#info-box {
  border-top: 1px solid rgba(13, 13, 13, 0.5);
  margin-top: 20px;
}
</style>
