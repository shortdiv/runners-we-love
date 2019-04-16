<template>
  <div class="hello">
    <NavBar />
    <div class="content-body">
    <span>
      <label for="filterText" class="hidden">Name</label>
      <input id="filteredText" type="text" name="textfield" v-model="filteredText">
    </span>
    </div>
    <Runners :filteredName="filteredName"/>
    <div id="identity-wrapper"></div>
  </div>
</template>

<script>
import Runners from "./runners"
import NavBar from "./NavBar"
import { mapActions } from "vuex"

export default {
  name: 'LoginView',
  components: {
    Runners,
    NavBar
  },
  apollo: {
    // Vue-Apollo options here
  },
  data () {
    return {
      message: null,
      filteredText: "",
      runners: [
          {"Bib":"11","Name":"Kirui, Geoffrey","Age":"24","M/F":"M","City":"Keringet","State":"","Country":"KEN","Citizen":"","5K":"0:15:25","10K":"0:30:28","15K":"0:45:44","20K":"1:01:15","Half":"1:04:35","25K":"1:16:59","30K":"1:33:01","35K":"1:48:19","40K":"2:02:53","Pace":"0:04:57","Proj Time":"-","Official Time":"2:09:37","Overall":"1","Gender":"1","Division":"1"},{"Bib":"17","Name":"Rupp, Galen","Age":"30","M/F":"M","City":"Portland","State":"OR","Country":"USA","Citizen":"","5K":"0:15:24","10K":"0:30:27","15K":"0:45:44","20K":"1:01:15","Half":"1:04:35","25K":"1:16:59","30K":"1:33:01","35K":"1:48:19","40K":"2:03:14","Pace":"0:04:58","Proj Time":"-","Official Time":"2:09:58","Overall":"2","Gender":"2","Division":"2"},{"Bib":"23","Name":"Osako, Suguru","Age":"25","M/F":"M","City":"Machida-City","State":"","Country":"JPN","Citizen":"","5K":"0:15:25","10K":"0:30:29","15K":"0:45:44","20K":"1:01:16","Half":"1:04:36","25K":"1:17:00","30K":"1:33:01","35K":"1:48:31","40K":"2:03:38","Pace":"0:04:59","Proj Time":"-","Official Time":"2:10:28","Overall":"3","Gender":"3","Division":"3"},{"Bib":"21","Name":"Biwott, Shadrack","Age":"32","M/F":"M","City":"Mammoth Lakes","State":"CA","Country":"USA","Citizen":"","5K":"0:15:25","10K":"0:30:29","15K":"0:45:44","20K":"1:01:19","Half":"1:04:45","25K":"1:17:00","30K":"1:33:01","35K":"1:48:58","40K":"2:04:35","Pace":"0:05:03","Proj Time":"-","Official Time":"2:12:08","Overall":"4","Gender":"4","Division":"4"},{"Bib":"9","Name":"Chebet, Wilson","Age":"31","M/F":"M","City":"Marakwet","State":"","Country":"KEN","Citizen":"","5K":"0:15:25","10K":"0:30:28","15K":"0:45:44","20K":"1:01:15","Half":"1:04:35","25K":"1:16:59","30K":"1:33:01","35K":"1:48:41","40K":"2:05:00","Pace":"0:05:04","Proj Time":"-","Official Time":"2:12:35","Overall":"5","Gender":"5","Division":"5"},{"Bib":"15","Name":"Abdirahman, Abdi","Age":"40","M/F":"M","City":"Phoenix","State":"AZ","Country":"USA","Citizen":"","5K":"0:15:25","10K":"0:30:28","15K":"0:45:44","20K":"1:01:15","Half":"1:04:35","25K":"1:16:59","30K":"1:33:01","35K":"1:48:52","40K":"2:05:21","Pace":"0:05:04","Proj Time":"-","Official Time":"2:12:45","Overall":"6","Gender":"6","Division":"1"},{"Bib":"63","Name":"Maiyo, Augustus K.","Age":"33","M/F":"M","City":"Colorado Springs","State":"CO","Country":"USA","Citizen":"","5K":"0:15:25","10K":"0:30:29","15K":"0:45:44","20K":"1:01:15","Half":"1:04:36","25K":"1:17:00","30K":"1:33:01","35K":"1:49:06","40K":"2:05:41","Pace":"0:05:05","Proj Time":"-","Official Time":"2:13:16","Overall":"7","Gender":"7","Division":"6"},{"Bib":"7","Name":"Sefir, Dino","Age":"28","M/F":"M","City":"Addis Ababa","State":"","Country":"ETH","Citizen":"","5K":"0:15:24","10K":"0:30:28","15K":"0:46:13","20K":"1:02:35","Half":"1:06:04","25K":"1:18:36","30K":"1:34:52","35K":"1:51:11","40K":"2:07:09","Pace":"0:05:08","Proj Time":"-","Official Time":"2:14:26","Overall":"8","Gender":"8","Division":"7"},{"Bib":"18","Name":"Puskedra, Luke","Age":"27","M/F":"M","City":"Eugene","State":"OR","Country":"USA","Citizen":"","5K":"0:15:24","10K":"0:30:29","15K":"0:45:47","20K":"1:01:28","Half":"1:04:53","25K":"1:17:26","30K":"1:34:05","35K":"1:50:53","40K":"2:07:17","Pace":"0:05:09","Proj Time":"-","Official Time":"2:14:45","Overall":"9","Gender":"9","Division":"8"}
        ]
    }
  },
  methods: {
    ...mapActions(["initializeIdentity"]),
  },
  computed: {
    filteredName() {
      const filter = new RegExp(this.filteredText, 'i')
      return this.runners.filter(el => {
        return el["Name"].match(filter)
      })
    }
  },
  mounted() {
    // fetch("/.netlify/functions/hello")
    //   .then(response => response.json())
    //   .then(data => {
    //     this.message = data.msg
    //   })
    this.initializeIdentity("#identity-wrapper")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
select,
input[type="text"] {
  margin: 0 0 0 8px;
  background: transparent;
  font-size: 16px;
  border: 1px solid #4f4d53;
  line-height: 20px;
  position: relative;
  z-index: 3000;
  border-radius: 4px;
  padding: 2px 0;
}
.content-body {
  padding-top: 5em;
}
</style>
