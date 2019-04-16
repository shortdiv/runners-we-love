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
import { mapActions, mapState } from "vuex"

export default {
  name: 'LoginView',
  components: {
    Runners,
    NavBar
  },
  data () {
    return {
      message: null,
      filteredText: ""
    }
  },
  methods: {
    ...mapActions(["initializeIdentity", "getRunners"]),
  },
  computed: {
    filteredName() {
      const filter = new RegExp(this.filteredText, 'i')
      return this.runners.filter(el => {
        return el["Name"].match(filter)
      })
    },
    ...mapState(["runners"])
  },
  created() {
    this.getRunners()
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
