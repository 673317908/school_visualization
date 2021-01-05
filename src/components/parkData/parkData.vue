<template>
  <div>
    <div class="park_data">
      <div class="park_data_title">
        <ul>
          <li class="plateNum">车牌</li>
          <li class="site">地点</li>
          <li class="time">时间</li>
        </ul>
        <div
          class="line"
          style="width: 92%; height: 1px; background: white; margin-top: 10px"
        ></div>
        <div ref="con1" class="park_data_list">
          <vueScroll :allData="parkData">
            <div class="park_data_item" v-for="(item, index) in parkData" :key="index">
              <div class="item_plate_num">{{ item.car_number }}</div>
              <div class="item_site">{{ item.gateinname }}</div>
              <div class="item_time">{{ item.in_time }}</div>
            </div>
          </vueScroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueScroll from "../scroll/scroll";
export default {
  components: { vueScroll },
  data() {
    return {
      parkData: [],
      timeId: null,
      animate: false,
      ws: null,
    };
  },
  created() {
    this.$socket.registerCallBack("park", this.getData);
  },
  mounted() {
    this.$socket.send({
      tag: "park",
      value: "",
    });
  },
  destroyed() {
    this.$socket.unRegisterCallBack("park");
  },
  methods: {
    getData(res) {
      this.parkData = res;
    },
  },
};
</script>

<style scoped lang="less">
.park_data {
  margin-top: 20px;
  .park_data_title {
    ul {
      display: flex;
      font-size: 20px;
      .plateNum {
        width: 17%;
      }
      .site {
        width: 17%;
      }
      .time {
        width: 43%;
      }
    }
  }
  .park_data_list {
    height: 250px;
    overflow: hidden;
    transition: 10s;
    .park_data_item {
      margin: 10px 0;
      display: flex;
      align-items: center;
      .item_plate_num {
        width: 18%;
      }
      .item_site {
        width: 15%;
      }
      .item_time {
        width: 35%;
      }
    }
  }
}
.seamless-warp {
  width: 100%;
  height: calc(100% - 16px);
  overflow: hidden;
  margin-top: 10px;
}
</style>
