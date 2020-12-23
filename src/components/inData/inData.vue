<template>
  <div>
    <div class="in_data">
      <div class="in_data_title">
        <ul>
          <li class="name">姓名</li>
          <li class="grade">年级</li>
          <li class="site">地点</li>
          <li class="time">时间</li>
        </ul>
        <div
          class="line"
          style="width: 92%; height: 1px; background: white; margin-top: 10px"
        ></div>
        <div ref="con1" class="in_data_list">
          <vue-seamless-scroll
            :data="inData"
            class="seamless-warp"
            :class-option="classOption"
          >
            <div class="in_data_item" v-for="(item, index) in inData" :key="index">
              <div class="item_name">{{ item.name }}</div>
              <div class="item_grade">{{ item.title }}</div>
              <div class="item_site">{{ item.site }}</div>
              <div class="item_time">
                <p>{{ item.in_time }}</p>
              </div>
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
      inData: [],
      timeId: null,
      animate: false,
      ws: null
    };
  },
  created() {
    this.$socket.registerCallBack("gate", this.getData);
  },
  mounted() {
    this.$socket.send({
      tag: "gate",
      value: ""
    });
  },
  destroyed() {
    this.$socket.unRegisterCallBack("gate");
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
      this.inData = res;
      console.log(res);
    }
  }
};
</script>

<style scoped lang="less">
.in_data {
  margin-top: 20px;
  .in_data_title {
    ul {
      display: flex;
      font-size: 20px;
      .name {
        width: 17%;
      }
      .grade {
        width: 40%;
      }
      .site {
        width: 17%;
      }
      .time {
        width: 43%;
      }
    }
  }
  .in_data_list {
    height: 200px;
    overflow: hidden;
    transition: 10s;
    .in_data_item {
      margin: 10px 0;
      display: flex;
      align-items: center;
      .item_name {
        width: 15%;
      }
      .item_grade {
        width: 34%;
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
.anim {
  transition: all 1.5s;
}
.seamless-warp {
  width: 100%;
  height: calc(100% - 16px);
  overflow: hidden;
  margin-top: 10px;
}
</style>
