<template>
  <div>
    <van-tag type="primary">列表页</van-tag>
    <van-button type="default"
                :url="url">首页</van-button>
  </div>
</template>

<script>
export default {
  name: 'list',
  components: {},
  props: {},
  data () {
    return {
      url: 'home'
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>
<style lang="less" scoped>
</style>