<template>
  <div>
    <br>

    <myheader></myheader>
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>

    <br>
    <br>
    axios使用
    <ul>
        <li v-for="(user, key) in users" :key="key">{{ user.name }}</li>
    </ul>
    <h1>{{ message }}</h1>

  <br>
  -----------
  <br>
  <myTextBox label="test"></myTextBox>
  <br>
    <myDropDownList :options="languages"></myDropDownList>
    <myDropDownList :options="numbars"></myDropDownList>
    <mySwitch></mySwitch>
    <myCheckBox></myCheckBox>
    <myCalendar></myCalendar>
  -----------
  </div>

</template>

<script>
import myheader from '../components/myheader'
import axios from 'axios'
import myTextBox from '../components/TextBox'
import myDropDownList from '../components/DropDownList'
import mySwitch from '../components/Switch'
import myCalendar from '../components/Calendar'
import myCheckBox from '../components/CheckBox'

export default {
  components: {
    myheader,
    myTextBox,
    myDropDownList,
    mySwitch,
    myCalendar,
    myCheckBox
  },
  data () {
    return {
      msg: 'Hello World!',
      users: [],
      message: 'Hello Axios',
      languages: [
        {label: '中国語', code: 'ch'},
        {label: '日本語', code: 'ja'},
        {label: '英語', code: 'en'},
        {label: '韓国語', code: 'kr'}
      ],
      numbars: [
        {label: 'いち', num: 1},
        {label: 'に', code: 2},
        {label: 'さん', code: 3},
        {label: 'よん', code: 4}
      ]
    }
  },
  methods: {
    clear () {
      this.msg = ''
    }
  },
  mounted () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data
      })
      .catch(error => console.log(error))
  }
}
</script>
