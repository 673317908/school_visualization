<template>
  <div>
    <div class="school_info">
      <div class="school_name">
        <label>学校名称</label>/
        <span>{{ schoolInfo.title }}</span>
      </div>
      <div class="school_address">
        <label>学校地址</label>/
        <span>{{ schoolInfo.address }}</span>
      </div>
      <div class="school_phone">
        <label>学校电话</label>/
        <span>{{ schoolInfo.phone }}</span>
      </div>
      <div
        class="line"
        style="
          width: 92%;
          height: 1px;
          background: white;
          margin-top: 10px;
          margin-bottom: 10px;
        "
      ></div>
      <div class="school_email">
        <label>电子邮箱</label>/
        <span>{{ schoolInfo.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      schoolInfo: {},
    };
  },
  created() {
    this.$socket.registerCallBack("website", this.getData);
  },
  mounted() {
    this.$socket.send({
      tag: "website",
      value: "",
    });
  },
  destroyed() {
    this.$socket.unRegisterCallBack("website");
  },
  methods: {
    getData(res) {
      this.schoolInfo = res;
    },
  },
};
</script>

<style scoped lang="less">
.school_info {
  padding: 10px;
  .school_name,
  .school_address,
  .school_phone,
  .school_email {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 15px;
    font-weight: 700;
    font-size: 18px;
  }
  label {
    margin-right: 15px;
  }
}
</style>
