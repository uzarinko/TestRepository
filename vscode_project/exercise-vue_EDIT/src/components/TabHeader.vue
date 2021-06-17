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
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                管理項目
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-container>
                  <v-row>
                    <v-col cols="4">
                      <v-text-field label="担当者" />
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
export default {
  data () {
    return {
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
  }
}

</script>

<style scoped>
</style>
