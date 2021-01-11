<template>
  <div>
    <div class="word_title">
      <div
        class="title_item"
        :class="activeIndex !== index ? 'active' : ''"
        v-for="(item, index) in titleData"
        :key="index"
        @click="active(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="percent_list">
      <div class="percent_item" v-for="(item, index) in pieColor" :key="index">
        <p :style="'color:' + item.color + ';margin-bottom:10px;text-align: center;'">
          20%
        </p>
        <svg :width="size" :height="size">
          <circle
            class="circle"
            fill="transparent"
            :stroke-width="stroke"
            stroke="#272b4e"
            :r="radius"
            :cx="circleOffset"
            :cy="circleOffset"
          ></circle>
          <circle
            class="circle"
            fill="transparent"
            :stroke-width="stroke"
            :stroke="item.color"
            :r="radius"
            :cx="circleOffset"
            :cy="circleOffset"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="progress"
          ></circle>
        </svg>
        <div class="work_num">
          <p :style="'color:' + item.color + ';font-size:24px;font-weight:700;'">1000</p>
          <p>{{ item.type }}</p>
        </div>
      </div>
    </div>
    <div class="rank_list">
      <div class="work_rank" style="margin-right: 20px">
        <div class="title"><i class="iconfont icon-jiangpai"></i>出勤光荣榜</div>
        <div class="content">
          <div class="content_item">
            <span>苍南县三禾高级中学</span>
            <span>100%</span>
          </div>
          <div class="content_item">
            <span>苍南县三禾高级中学</span>
            <span>100%</span>
          </div>
          <div class="content_item">
            <span>苍南县三禾高级中学</span>
            <span>100%</span>
          </div>
        </div>
      </div>
      <div class="no_work_rank">
        <div class="title"><i class="iconfont icon-buhege"></i>出勤不足榜</div>
        <div class="content">
          <div class="content_item">
            <span>苍南县三禾高级中学</span>
            <span>88%</span>
          </div>
          <div class="content_item">
            <span>苍南县三禾高级中学</span>
            <span>88%</span>
          </div>
          <div class="content_item">
            <span>苍南县三禾高级中学</span>
            <span>88%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- stroke-dashoffset="progress" 进度条 -->
  <!-- stroke-dasharray="circumference" 白色部分 -->
  <!-- stroke-linecap="round" 控制进度条圆角 -->
</template>

<script>
export default {
  components: {},
  data() {
    return {
      size: 120,
      stroke: 20,
      percentage: 100,
      timer: null,
      seconds: 2,
      pieColor: [
        { color: "#e79b28", type: "迟到（人）" },
        { color: "#296bf5", type: "（人）" },
        { color: "#9c455c", type: "未到（人）" },
        { color: "#357afe", type: "实到（人）" },
      ],
      titleData: ["学生出勤", "教师出勤"],
      activeIndex: 0,
    };
  },
  computed: {
    radius() {
      return this.size / 2 - this.stroke / 2;
    },
    circleOffset() {
      return this.size / 2;
    },
    circumference() {
      return this.radius * 2 * Math.PI;
    },
    progress() {
      return this.circumference - (this.circumference * this.percentage) / 100;
    },
    countdown() {
      return Math.ceil((this.seconds * this.percentage) / 100);
    },
  },
  created() {},
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.percentage -= 1 / 10;
        if (this.percentage <= 0) {
          clearInterval(this.timer);
          this.percentage -= 1 / 10;
        }
      }, (this.seconds * 1000) / 100 / 10);
    },
    active(index) {
        console.log(index)
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
@import "../../../public/static/font/iconfont.css";
.word_title {
  display: flex;
  margin-bottom: 20px;
  font-size: 24px;
  .title_item {
    margin-right: 20px;
    cursor: pointer;
    user-select: none;
  }
}
.active {
  color: #565b79;
}
.percent_list {
  display: flex;
  margin-left: -8px;
  .percent_item {
    position: relative;
    margin: 20px 30px;
    .circle {
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }

    #countdown {
      display: inline-block;
      position: relative;
    }

    .work_num {
      position: absolute;
      top: 56%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
      text-align: center;
    }
  }
}
.rank_list {
  display: flex;
  margin-top: 40px;
  .no_work_rank,
  .work_rank {
    width: 46%;
  }
  .title {
    font-size: 24px;
    text-align: center;
    padding: 5px 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    i {
      margin-right: 10px;
      font-size: 24px;
    }
  }
  .work_rank .title {
    background: #163b93;
    border: 2px solid#19409e;
  }
  .no_work_rank .title {
    background: #428c4f;
    border: 2px solid#428c4f;
  }
  .content {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .work_rank .content {
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);
  }
  .no_work_rank .content {
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);
  }
  .content_item {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
  }

  .work_rank .content_item {
    border-bottom: 1px solid#19409e;
  }
  .no_work_rank .content_item {
    border-bottom: 1px solid#428c4f;
  }
  .content_item:last-child {
    border-bottom: none;
  }
}
</style>
