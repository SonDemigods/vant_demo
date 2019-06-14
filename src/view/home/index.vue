<template>
  <div>
    <van-tag type="primary">首页</van-tag>
    <van-button type="default"
                :url="url">列表页</van-button>
  </div>
</template>

<script>
import { getParams } from '@/lib/util'
export default {
  name: 'home',
  components: {},
  props: {},
  data () {
    return {
      form: {
        aaa: 1,
        bbb: 2
      },
      url: 'list'
    }
  },
  watch: {},
  computed: {},
  methods: {
    configInfo () {
      this.$api('aaa', this.form).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      console.log(this.$baseUrl)
      let a = getParams('http://192.168.71.42:8088/login?from=%2Fjob%2FCadreSystem%2F')
      console.log(a)
    }
  },
  created () {
    this.configInfo()
  },
  mounted () { }
}
</script>
<style lang="less" scoped>
</style>