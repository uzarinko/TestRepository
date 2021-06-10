<template>
  <div id="login">
    <v-app>
      <v-container>
        <v-row>
          <v-col cols="4">
            <myTextBox label="検索"></myTextBox>
          </v-col>
        </v-row>
        </v-container>
      <v-card
      class="mx-16"
      elevation="9"
      >
      <v-app-bar color="blue">案件一覧
      </v-app-bar>
        <v-container>
          <v-row>
            <v-col cols="6" class="mx-16">
              <myTextBox label="ユーザID"></myTextBox>
              <myTextBox label="パスワード"></myTextBox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1" class="mr-16"  style="margin-left:auto;">
                <v-btn color="blue">ログイン</v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-footer>
          <div class="flex-grow-1"></div>
          <div>&copy; 2019 - {{ new Date().getFullYear() }} コピーライト</div>
        </v-footer>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import myTextBox from '../components/TextBox'

export default {
  name: 'login',
  components: {
    myTextBox
  },
  methods: {
    clear () {
      this.msg = ''
    }
  }
}
</script>

<style scoped>
</style>
