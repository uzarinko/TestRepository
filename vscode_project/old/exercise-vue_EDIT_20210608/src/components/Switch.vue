<template>
  <div id="test">
    <v-container>
      <v-row>
        <v-col md="4">
          <v-switch label="テスト"
              color="red"></v-switch>
        </v-col>
      </v-row>
    </v-container>

  <v-container>
    <v-switch
      v-model="switch1"
      :label="`Swtch 1: ${switch1.toString()}`"
    ></v-switch>
  </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      switch1: true
    }
  }
}
</script>

<style scoped>
</style>
