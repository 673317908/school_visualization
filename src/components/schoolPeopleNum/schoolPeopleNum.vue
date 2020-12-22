<template>
  <div>
    <div class="sum">
      <table>
        <tr>
          <th style="width: 300px; font-size: 30px">总人数</th>
          <th style="text-align: center; width: 150px; font-size: 30px">正常打卡</th>
          <th style="text-align: center; width: 150px; font-size: 30px">迟到早退</th>
          <th style="text-align: center; width: 150px; font-size: 30px">其他</th>
        </tr>
        <tr>
          <td style="font-size: 50px; color: #f2f127">{{ dailyData.sum }}</td>
          <td style="font-size: 24px;text-align: center">{{ dailyData.org_num }}</td>
          <td style="font-size: 24px;text-align: center">{{ dailyData.late_num }}</td>
          <td style="font-size: 24px;text-align: center">{{ dailyData.other_num }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dailyData: {},
    };
  },
  created() {
    this.$socket.registerCallBack("daily", this.getData);
  },
  mounted() {
    this.$socket.send({
      tag: "daily",
      value: "",
    });
  },
  destroyed() {
    this.$socket.unRegisterCallBack("daily");
  },
  methods: {
    getData(res) {
      this.dailyData = res;
    },
  },
};
</script>

<style scoped lang="less">
.sum {
  padding-top: 3%;
}
</style>
