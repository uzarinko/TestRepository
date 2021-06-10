<template>
  <v-container>
      <v-row>
        <v-col md="4">
          <input type="checkbox"
            v-model="checkbox"/>
            {{checkbox}}
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      checkbox: true
    }
  }
}
</script>
