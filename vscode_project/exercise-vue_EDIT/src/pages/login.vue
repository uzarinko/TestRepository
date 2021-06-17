<template>
  <div id="login">
      <v-card elevation="9">
      <v-app-bar color="blue">ログイン
      </v-app-bar>
        <v-container>
          <v-row>
            <v-col cols="6" class="mx-16">
              <v-text-field
                prepend-icon="mdi-account-circle"
                label="ユーザID"
                v-model="userId"
              />
              <v-text-field
                v-bind:type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                prepend-icon="mdi-lock"
                v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                label="パスワード"
                v-model="password"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1" class="mr-16" style="margin-left:auto;">
              <v-btn color="blue" @click="submit">ログイン</v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-footer>
          <div class="flex-grow-1"></div>
          <div>&copy; 2019 - {{ new Date().getFullYear() }} コピーライト</div>
        </v-footer>
      </v-card>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      showPassword: false,
      userId: '',
      password: ''
    }
  },
  methods: {
    submit () {
      if (this.userId === '' && this.password === '') {
        this.$router.push('home')
      }
    }
  }
}
</script>

<style scoped>
</style>
