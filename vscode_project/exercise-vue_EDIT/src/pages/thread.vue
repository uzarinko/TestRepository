<template>
  <div id="thread">
    <v-card elevation="9">
      <v-tabs @change="changeTab">
        <v-tab>案件申請</v-tab>
        <v-tab>開発案件選定</v-tab>
        <v-tab>Item Three</v-tab>
        <!-- タブ1 -->
        <v-tab-item>
          <v-card>
            <TabHeader
            :openIndex= this.openIndex
            ref="child1"
            @my-click="emitEvent"
            />
            <v-card-text>
              タブ1の内容をここに記述します。
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!-- タブ2 -->
        <v-tab-item>
          <v-card>
            <TabHeader
            :openIndex= this.openIndex
            ref="child2"
            @my-click="emitEvent"
            />
            <v-card-text>
              タブ2の内容をここに記述します。
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!-- タブ3 -->
        <v-tab-item>
          <v-card>
            <v-card-text>
              タブ3の内容をここに記述します。
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import TabHeader from '../components/TabHeader'

export default {
  name: 'App',
  components: {
    TabHeader
  },
  data () {
    return {
      openIndex: null
    }
  },
  methods: {
    changeTab () {
      this.$refs.child1.expansionChange(this.openIndex)
      this.$refs.child2.expansionChange(this.openIndex)
    },
    emitEvent () {
      if (this.openIndex === null) {
        this.openIndex = 0
      } else {
        this.openIndex = null
      }
    }
  }
}
</script>
