<template>
  <div>
    <div class="sum">
      <table>
        <tr>
          <th style="width:300px;font-size:30px;">总人数</th>
          <th style="text-align:center;width:150px;font-size:30px;">正常打卡</th>
          <th style="text-align:center;width:150px;font-size:30px;">迟到早退</th>
          <th style="text-align:center;width:150px;font-size:30px;">其他</th>
        </tr>
        <tr>
          <td style="font-size:50px;color:#f2f127;">200030000</td>
          <td style="text-align:center;">2005400</td>
          <td style="text-align:center;">2005400</td>
          <td style="text-align:center;">200600</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.sum {
padding-top: 3%;
}
</style>
