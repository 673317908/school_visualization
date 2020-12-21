<template>
  <div>
    <div class="title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.title {
  color: white;
  position: relative;
  span {
    margin-left: 10px;
  }
  &::before {
    height: 30px;
    width: 8px;
    background:#69ddff;
    content: "";
    display: block;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20px;
  }
}
</style>
