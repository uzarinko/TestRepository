<template>
  <div id="header" v-if="headerFlg">
    <v-toolbar flat
      color="orange">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>ヘッダー</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/home">Home</v-btn>
        <v-btn to="/list">list</v-btn>
        <!-- ログアウト確認ダイアログ -->
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
            >ログアウト</v-btn>
          </template>
          <v-card>
            <v-card-title class="text grey lighten-2">
              確認
            </v-card-title>
              ログアウトしてログイン画面へ移動します。
              <br>
              よろしいですか。
            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn to="/"
                color="primary"
                text
                @click="dialog = false"
                >はい</v-btn>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >いいえ</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      headerFlg: false
    }
  },
  methods: {
    setDisp () {
      this.headerFlg = !(this.$route.path === '/')
      this.dialog = false
    }
  },
  watch: {
    // ルートが変更されたらこのメソッドを再び呼び出します
    $route: 'setDisp'
  }
}
</script>
