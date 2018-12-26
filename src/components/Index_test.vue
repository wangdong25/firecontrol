<template>
  <div class="Index">
    <div class="header">
      <h4> {{map_pargram.title}}</h4>
      <span>{{nowTime}}</span>
    </div>
    <div class="map_area">
      <baidu-map
        class="map"
        :center="map_pargram.center"
        :zoom="map_pargram.zoom"
        @ready="handler"
        :scroll-wheel-zoom="true"
      >
        <bm-map-type
          :map-types="['BMAP_NORMAL_MAP','BMAP_SATELLITE_MAP','BMAP_HYBRID_MAP']"
          anchor="BMAP_ANCHOR_TOP_RIGHT"
        ></bm-map-type>
      </baidu-map>
    </div>

  </div>
</template>

<script>
import { requesMap } from "../api/api";
export default {
  name: "Index",
  data() {
    return {
      map_pargram: {
        title: "",
        center: {
          lng: 0,
          lat: 0
        },
        zoom: 3
      },

      nowTime: ""
    };
  },
  // mounted() {
  //   this.nowTimes();
  // },
  methods: {
    handler({ BMap, map }) {
      map.setMapType(BMAP_SATELLITE_MAP);
        this.Ajax();
    },
    Ajax(){
       requesMap().then(res => {
        this.map_pargram = {
          title: res.data.data.title,
          center: {
            lng: res.data.data.center.longitude,
            lat: res.data.data.center.latitude
          },
          zoom: res.data.data.zoom
        };
        setTimeout(this.Ajax,4000)
      });
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
      this.nowTime =
        year +
        "年" +
        month +
        "月" +
        date +
        "日" +
        " " +
        hh +
        ":" +
        mm +
        ":" +
        ss;
      // console.log(this.nowTime);
    },
    // 定时器函数
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Index {
  width: 100%;
  height: 100%;
}

.map_area {
  width: 100%;
  height: calc(100% - 50px);
}
.map {
  width: 100%;
  height: 100%;
}
.header {
  height: 50px;
  width: 100%;
  background: #2774be;
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 50px;
}
.header h4 {
  margin: 0;
  padding: 0;
  display: inline-block;
}
.header span {
  font-size: 16px;
}
</style>
