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
          <vue-seamless-scroll
            :data="parkData"
            class="seamless-warp"
            :class-option="classOption"
          >
            <div class="park_data_item" v-for="(item, index) in parkData" :key="index">
              <div class="item_plate_num">{{ item.car_number }}</div>
              <div class="item_site">{{ item.gateinname }}</div>
              <div class="item_time">{{ item.in_time }}</div>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  components: { vueSeamlessScroll },
  data() {
    return {
      parkData: [],
      timeId: null,
      animate: false,
      ws: null
    };
  },
  created() {
    this.$socket.registerCallBack("park", this.getData);
  },
  mounted() {
    this.$socket.send({
      tag: "park",
      value: ""
    });
  },
  destroyed() {
    this.$socket.unRegisterCallBack("park");
  },
  computed: {
    classOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    }
  },
  methods: {
    getData(res) {
      this.parkData = res;
    }
  }
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
