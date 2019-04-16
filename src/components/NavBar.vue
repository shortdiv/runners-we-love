<template>
  <div class="nav-bar">
    <div class="bar-column">
      <span class="logo--title">Boston Road Runner</span>
    </div>
    <div class="bar-column">
        <button @click="attemptLogout">
          <span>Log me out</span>
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex"
  export default {
    name: "NavBar",
    methods: {
      ...mapActions(["identityLogout"]),
      attemptLogout() {
        this.identityLogout()
          .then(() => {
            this.handleSuccessfulLogout()
          })
      },
      handleSuccessfulLogout() {
        this.$router.push(this.$route.query.redirect || "/login");
      },
      handleSuccessfulLogin() {
        this.$router.push(this.$route.query.redirect || "/");
      }
    }
  }
</script>

<style lang="scss" scoped>
.nav-bar {
  background: #0f1b20;
  height: 3.6rem;
  padding: 0;
  position: fixed;
  width: 100%;
  z-index: 5000;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: left;
  vertical-align: middle;
  button {
    position: absolute;
    right: 0;
    top: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    span {
      padding-right: 13px;
      font-size: 0.75em;
      position: relative;
      vertical-align: middle;
    }
    i {
      vertical-align: middle;
    }
  }
}
</style>