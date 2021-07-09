<template>
  <div id="tabHeader">
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-container>
              <v-row>
                <v-col>
                  案件管理番号：{{ $route.params.item.id }}
                </v-col>
                <v-col>
                    案件名：{{ $route.params.item.title }}
                </v-col>
                <v-col>
                    作成者：{{ $route.params.item.author }}
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels v-model="openedPanel">
            <v-expansion-panel>
              <v-expansion-panel-header @click="expansionClick">
                管理項目
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-container>
                  <v-row>
                    <v-col cols="4">
                        <!-- ユーザ選択ダイアログ -->
                        <v-dialog
                          v-model="dialog"
                          width="500"
                        >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-bind="attrs"
                            v-on="on"
                            v-model="user"
                            label="担当者" />
                        </template>
                        <v-card>
                          <v-card-title class="text grey lighten-2">
                            ユーザ選択
                          </v-card-title>
                            ユーザを選択してください。
                          <v-container>
                            <v-row>
                              <v-col>
                                <v-select
                                  v-model="selectUser"
                                  :options="users"
                                />
                              </v-col>
                            </v-row>
                          </v-container>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="primary"
                              @click="setUser"
                              >決定</v-btn>
                            <v-btn
                              color="primary"
                              @click="dialog = false"
                            >戻る</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                    <v-col>
                      <v-text-field label="副担当者" />
                    </v-col>
                    <v-col>
                      <v-text-field label="ステータス" />
                    </v-col>
                  </v-row>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import myDropDownList from '../components/DropDownList'

export default {
  name: 'Props',
  components: {
    myDropDownList
  },
  props: ['openIndex'],
  data () {
    return {
      openedPanel: null,
      dialog: false,
      items: [
        { id: 1, title: 'あんけん１', author: 'たなかたろう' },
        { id: 2, title: '案件２', author: '田中次郎' },
        { id: 3, title: 'anken3', author: '佐藤三郎' },
        { id: 4, title: '案件４', author: '田中四郎' },
        { id: 5, title: '案件５', author: '田中五郎' },
        { id: 6, title: '案件６', author: '田中六郎' }
      ],
      users: ['ユーザ１', 'ユーザ２', 'ユーザ３'],
      user: '',
      selectUser: ''
    }
  },
  methods: {
    expansionClick () {
      this.$emit('my-click', (this.openedPanel))
    },
    expansionChange (index) {
      this.openedPanel = index
    },
    setUser () {
      this.user = this.selectUser
      this.dialog = false
    },
    setDisp () {
      this.dialog = false
    }
  },
  watch: {
    // ルートが変更されたらこのメソッドを再び呼び出します
    $route: 'setDisp'
  }
}

</script>

<style scoped>
</style>
