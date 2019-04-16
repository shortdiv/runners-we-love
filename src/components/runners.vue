<template>
  <div>
    <h1>{{ hello }}</h1>  
  <table class="scroll">
    <thead>
      <tr>
        <th v-for="(key, idx) in runnerColumns" :key="idx">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(runner, i) in filteredName">
        <td v-for="entry in runnerColumns">
          <a target="_blank">
            {{ runner[entry] }}
          </a>
        </td>
      </tr>
     </tbody>
  </table>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import { mapState } from "vuex"
  export default {
    name: "Runners",
    props: {
      filteredName: {
        type: Array,
        default: () => []
      }
    },
    apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`{hello}`,
    },
    data () {
      return {
        hello: ''
      }
    },
    computed: {
      ...mapState(["runnerColumns"])
    },
    mounted () {
      // fetch("https://gist.githubusercontent.com/shortdiv/e321906511045e3650f36db4fef256d3/raw/f698d121d48516de0d4d8de1db0f7058c79a1b7d/runners.json")
      // .then(res => {
      //   return res.json()
      // })
      // .then(data => {
        // this.runners = data
      // })
    }
  }
</script>

<style lang="scss" scoped>
table {
  width: 100vw;
  position: relative;
  margin-top: 15px;
}
@media (max-width: 800px) {
  table {
    width: 200vw;
    overflow-y: scroll;
  }
}
th {
  background: #F8CD55;
  padding: 5px;
}
td {
  padding: 5px 8px;
}
.scroll {
  border: 0;
  border-collapse: collapse;
}
.scroll tr {
  display: flex;
}
.scroll td {
  padding: 3px;
  flex: 1 auto;
  width: 1px;
  word-wrap: break;
}
@supports (-ms-ime-align: auto) {
  /* Microsoft EdgeV13&14 CSS styles go here */
  .scroll td {
    padding: 3px 35px !important;
    flex: none !important;
    width: 130px;
  }
}
.scroll thead tr:after {
  content: '';
  overflow-y: scroll;
  visibility: hidden;
  height: 0;
}
.scroll thead th {
  flex: 1 auto;
  display: block;
}
.scroll tbody {
  display: block;
  width: 100%;
  overflow-y: auto;
}
</style>