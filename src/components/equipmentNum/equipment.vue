<template>
  <div>
    <div class="equipment_num">
      <div class="equipment_sum"><span>设备总数：</span><span>6320</span></div>
      <div class="equipment_online"><span>设备在线：</span><span>6220</span></div>
      <div class="equipment_offline"><span>设备离线：</span><span>100</span></div>
    </div>
    <div id="myChart" ref="myChart" style="width: 500px; height: 300px"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      chartInstance: null,
      allData: null,
    };
  },
  created() {},
  mounted() {
    this.initChart();
    this.screenAdapter();
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.myChart);
      var xData = ["zs", "ls", "ww", "rt"];
      var yData = [55, 87, 99, 85];
      var initOption = {
        xAxis: {
          type: "category",
          data: xData
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#0163ec",
                },
                {
                  offset: 1,
                  color: "#2f3d8e",
                },
              ]),
            },
            label: {
              // 柱状图上的文字设置
              show: true, // 是否显示
              position: "top", // 显示位置
              color:"#fff"
            },
            data: yData,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    getData() {},
    updateChart() {},
    screenAdapter() {
      const titleFontSize = (this.$refs.myChart.offsetWidth / 100) * 5.5;
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize,
          },
        },
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize,
            },
          },
        },
        series: [
          {
            barWidth: titleFontSize,
          },
        ],
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
  },
};
</script>

<style scoped lang="less">
.equipment_num {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}
</style>
