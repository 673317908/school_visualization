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
          <vueScroll :allData="inData">
            <div class="in_data_item" v-for="(item, index) in inData" :key="index">
              <div class="item_name">{{ item.name }}</div>
              <div class="item_grade">{{ item.title }}</div>
              <div class="item_site">{{ item.site }}</div>
              <div class="item_time">
                <p>{{ item.in_time }}</p>
              </div>
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
      inData: [],
      timeId: null,
      animate: false,
      ws: null,
    };
  },
  created() {
    this.$socket.registerCallBack("gate", this.getData);
  },
  mounted() {
    this.$socket.send({
      tag: "gate",
      value: "",
    });
  },
  destroyed() {
    this.$socket.unRegisterCallBack("gate");
  },
  methods: {
    getData(res) {
      this.inData = res;
      console.log(res);
    },
  },
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
