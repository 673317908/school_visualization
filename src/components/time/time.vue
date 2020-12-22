<template>
  <div>
    <div class="now_time">{{ timeId }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      timeId: null,
    };
  },
  created() {},
  mounted() {
    this.getDate();
  },
  destroyed() {
    clearTimeout(this.timeId);
  },
  computed: {},
  methods: {
    getTime(timeStamp) {
      var date = new Date(timeStamp);
      var Y = date.getFullYear();
      var M = date.getMonth() > 9 ? date.getMonth() + 1 : "0" + date.getMonth() + 1;
      var D = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
      var H = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
      var m = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
      var s = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
      return Y + "-" + M + "-" + D + " " + H + ":" + m + ":" + s;
    },
    getDate() {
      this.timeId = this.getTime(new Date());
      setTimeout(this.getDate, 1000);
      clearTimeout(this.getDate);
    },
  },
};
</script>

<style scoped lang="less">
.now_time {
  font-size: 15px;
  margin-left: 10px;
}
</style>
