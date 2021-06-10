<template>
  <div>
      <v-app>
    <v-content>
      <h2 class="title">Tabs</h2>
      <v-tabs>
        <v-tab :key="menu1">Menu1</v-tab>
        <v-tab :key="menu2">Menu2</v-tab>
        <v-tab :key="menu3">Menu3</v-tab>
       <v-tab-item :key="menu1">Menu1のコンテンツが入ります</v-tab-item>
       <v-tab-item :key="menu2">Menu2のコンテンツが入ります</v-tab-item>
       <v-tab-item :key="menu3">Menu1のコンテンツが入ります</v-tab-item>
      </v-tabs>
    </v-content>
  </v-app>
    <TextBox label="入力してください"></TextBox>
    <TextBox label="再度入力してください"></TextBox>
    <DropDownList :options="languages"></DropDownList>
  </div>
</template>

<script>
import TextBox from '../components/TextBox'
import DropDownList from '../components/DropDownList'

export default {
  components: {
    TextBox,
    DropDownList
  },
  data () {
  }
}
</script>
