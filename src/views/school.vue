<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="../../public/static/img/header_border_dark.png" alt="" />
      </div>
      <span class="title">苍南县三禾高级中学</span>
      <div class="title-right">
        <!-- 当前时间 -->
        <Time />
      </div>
    </header>
    <div class="screen-body">
      <section class="screen-left">
        <div id="left-top-info">
          <!-- 学校信息 -->
          <div class="resize">
            <Title title="学校信息" />
            <SchoolInfo />
          </div>
        </div>
        <div id="left-top">
          <!-- 当前班级出勤统计 -->
          <div class="resize">
            <Title title="当前班级出勤统计" />
          </div>
        </div>
        <div id="left-center">
          <!-- 实时打卡数据 -->
          <div class="resize">
            <Title title="实时打卡数据" />
            <PunchCard />
          </div>
        </div>
        <div id="left-bottom">
          <!-- 进口机器使用情况 -->
          <div class="resize">
            <Title title="进口机器使用情况" />
            <InData />
          </div>
        </div>
      </section>
      <section class="screen-middle">
        <div id="middle-top">
          <!-- 总人数 -->
          <div class="resize">
            <PeopleNum />
          </div>
        </div>
        <div id="middle-center">
          <!-- 一周打卡情况 -->
          <div class="resize">
            <Title title="一周打卡情况" />
          </div>
        </div>
        <div id="middle-bottom">
          <!-- 一年打卡情况 -->
          <div class="resize"><Title title="一年打卡情况" /></div>
        </div>
      </section>
      <section class="screen-right">
        <div id="right-top">
          <!-- 本周考勤优秀班级 -->
          <div class="resize"><Title title="本周考勤优秀班级" /></div>
        </div>
        <div id="right-center">
          <!-- 本月考勤优秀班级 -->
          <div class="resize"><Title title="本月考勤优秀班级" /></div>
        </div>
        <div id="right-bottom">
          <!-- 停车场机器使用情况 -->
          <div class="resize">
            <Title title="停车场机器使用情况" />
            <ParkData />
          </div>
        </div>
        <div id="right-bottom-video">
          <!-- 校园监控 -->
          <div class="resize"><Title title="校园监控" /></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Time from "../components/time/time";
import Title from "../components/title/title";
import PeopleNum from "../components/schoolPeopleNum/schoolPeopleNum";
import PunchCard from "../components/punchCardData/punchCardData";
import InData from "../components/inData/inData";
import ParkData from "../components/parkData/parkData";
import SchoolInfo from "../components/schoolInfo/schoolInfo";
export default {
  components: { Time, Title, PeopleNum, PunchCard, InData, ParkData, SchoolInfo },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
// 全屏样式的定义
.fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  z-index: 100;
}

.screen-container {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #34449e;
  color: #fff;
  box-sizing: border-box;
}
.screen-header {
  width: 100%;
  height: 64px;
  font-size: 20px;
  position: relative;
  > div {
    img {
      width: 100%;
    }
  }
  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }
  .title-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-80%);
  }
  .qiehuan {
    width: 28px;
    height: 21px;
    cursor: pointer;
  }
  .datetime {
    font-size: 15px;
    margin-left: 10px;
  }
  .logo {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-80%);
    img {
      height: 35px;
      width: 128px;
    }
  }
}
.screen-body {
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  .screen-left {
    height: 100%;
    width: 27.6%;
    #left-top-info {
      height: 22%;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    #left-top {
      height: 53%;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    #left-center {
      height: 26%;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    #left-bottom {
      height: 31%;
      margin-top: 25px;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 120px;
    }
  }
  .screen-middle {
    height: 100%;
    width: 41.5%;
    margin-left: 1.6%;
    margin-right: 1.6%;
    #middle-top {
      width: 100%;
      height: 20%;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    #middle-center {
      width: 100%;
      height: 30%;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    #middle-bottom {
      margin-top: 25px;
      width: 100%;
      height: 38%;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .screen-right {
    height: 100%;
    width: 27.6%;
    #right-top {
      height: 40%;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    #right-center {
      height: 30%;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    #right-bottom {
      height: 38%;
      margin-top: 25px;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    #right-bottom-video {
      height: 38%;
      margin-top: 25px;
      position: relative;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
  }
}
.resize {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 100%;

  // cursor: pointer;
}
</style>
