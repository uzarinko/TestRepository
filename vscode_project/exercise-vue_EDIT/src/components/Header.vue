<template>
  <div>
    <div v-if="headerFlg">
      <router-link to="/home">home</router-link> |
      <router-link to="/list">list</router-link> |
      <router-link to="/">ログアウト</router-link> |
      <router-link to="/Practice">練習用ページ</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      headerFlg: true
    }
  },
  methods: {
    fetchData () {
      this.headerFlg = !(this.$route.path === '/')
    }
  },
  watch: {
    // ルートが変更されたらこのメソッドを再び呼び出します
    $route: 'fetchData'
  }
}
</script>
