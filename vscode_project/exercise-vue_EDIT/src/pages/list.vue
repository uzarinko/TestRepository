<template>
  <div id="list">
    <v-card elevation="9">
      <v-app-bar color="blue">案件一覧
      </v-app-bar>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="検索"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-container>
        <v-row>
          <v-col>
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            @click:row="onClickEvent"
          ></v-data-table>
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
  components: {
  },
  data () {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: '案件名', value: 'title' },
        { text: '作成者', value: 'author' }
      ],
      items: [
        { id: 1, title: 'あんけん１', author: 'たなかたろう' },
        { id: 2, title: '案件２', author: '田中次郎' },
        { id: 3, title: 'anken3', author: '佐藤三郎' },
        { id: 4, title: '案件４', author: '田中四郎' },
        { id: 5, title: '案件５', author: '田中五郎' },
        { id: 6, title: '案件６', author: '田中六郎' }
      ]
    }
  },
  methods: {
    // 第一引数にクリックした行のObjectが渡されるので処理を用意しておく
    onClickEvent (data) {
      console.log(data.title)
      this.$router.push({ name: 'Thread', params: {item: data} })
    }
  }
}

</script>

<style scoped>
</style>
