<template>
  <div>
  <table class="scroll">
    <thead>
      <tr>
        <th v-for="(key, idx) in runnerColumns" :key="idx">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(runner, idx) in filteredName" :key="`${idx}--${runner}`">
        <td v-for="(entry,ind) in runnerColumns" :key="`${entry}--${ind}`">
          <a v-if="entry === 'Likes'" @click="upvote(idx, runner[entry])">
            <i :class="{ fas: runner[entry] > 0, far: runner[entry] === 0, 'fa-heart': true }"></i>
            {{ runner[entry] }}
          </a>
          <a v-else target="_blank">
            {{ runner[entry] }}
          </a>
        </td>
      </tr>
     </tbody>
  </table>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex"
  export default {
    name: "Runners",
    props: {
      filteredName: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState(["runnerColumns"])
    },
    methods: {
      ...mapActions(["incrementLike"]),
      upvote(idx, currentLikes) {
        this.incrementLike({idx, currentLikes})
      }
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