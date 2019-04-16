<template>
  <form method="post" @submit.prevent="handleSubmit">
    <ul>
      <li v-for="entry in runnerColumns">
        <label>
          {{ entry }}
          <input
            type="text"
            :name="entry"
            @input="ev => form.entry = ev.target.value"
            >
        </label>
      </li>
    </ul>
    <button type="submit" class="submit-button">Ask a question</button>
  </form>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "RunnerForm",
    computed: {
      ...mapState(["runnerColumns"])
    },
    data () {
      return {
        form: {}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>