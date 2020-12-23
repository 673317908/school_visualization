<template>
  <div>
    <div class="punch_card_data">
      <div class="punch_card_data_title">
        <ul>
          <li class="name">姓名</li>
          <li class="grade">年级</li>
          <li class="time">时间</li>
        </ul>
        <div
          class="line"
          style="width: 92%; height: 1px; background: white; margin-top: 10px"
        ></div>
        <div ref="con1" class="punch_card_data_list">
          <vue-seamless-scroll
            :data="punchData"
            class="seamless-warp"
            :class-option="classOption"
          >
            <div
              class="punch_card_data_item"
              v-for="(item, index) in punchData"
              :key="index"
            >
              <span class="item_name">{{ item.name }}</span>
              <span class="item_grade">{{ item.class }}</span>
              <span class="item_time">{{ item.time }}</span>
            </div>
          </vue-seamless-scroll>
        </div>
      </div>
      <!-- <button @click="getData">按钮</button> -->
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  components: { vueSeamlessScroll },
  data() {
    return {
      punchData: [
        {
          name: "张飞",
          class: "高三一5班",
          time: "2020-12-18 17:30"
        },
        {
          name: "关羽",
          class: "高三一4班",
          time: "2020-12-18 17:30"
        },
        {
          name: "刘备",
          class: "高三一2班",
          time: "2020-12-18 17:30"
        },
        {
          name: "诸葛亮",
          class: "高三一1班",
          time: "2020-12-18 17:30"
        },
        {
          name: "马超",
          class: "高三一3班",
          time: "2020-12-18 17:30"
        },
        {
          name: "赵云",
          class: "高三一5班",
          time: "2020-12-18 17:30"
        },
        {
          name: "黄忠",
          class: "高三一4班",
          time: "2020-12-18 17:30"
        },
        {
          name: "魏延",
          class: "高三一2班",
          time: "2020-12-18 17:30"
        },
        {
          name: "曹操",
          class: "高三一1班",
          time: "2020-12-18 17:30"
        },
        {
          name: "司马迁",
          class: "高三一3班",
          time: "2020-12-18 17:30"
        }
      ],
      timeId: null,
      animate: false,
      ws: null
    };
  },
  created() {},
  mounted() {
    this.$socket.send({ value: "" });
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
  methods: {}
};
</script>

<style scoped lang="less">
.punch_card_data {
  margin-top: 20px;
  .punch_card_data_title {
    ul {
      display: flex;
      font-size: 20px;
      .name {
        width: 20%;
      }
      .grade {
        width: 30%;
      }
      .time {
        width: 43%;
      }
    }
  }
  .punch_card_data_list {
    height: 150px;
    overflow: hidden;
    transition: 10s;
    .punch_card_data_item {
      margin: 10px 0;
      .item_name {
        width: 20%;
        display: inline-block;
      }
      .item_grade {
        width: 30%;
        display: inline-block;
      }
      .item_time {
        width: 50%;
        display: inline-block;
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
