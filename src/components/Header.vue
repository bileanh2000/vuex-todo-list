<template lang="">
  <header>
    <div class="header-wrapper">
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      <h2 class="logo">Vuex</h2>
      <ul>
        <li v-if="isAuthenticated">Total todos: {{ todosNotDone.length }}</li>
        <li>
          <button
            class="btn btn-primary"
            v-if="isAuthenticated"
            @click="TOGGLE_AUTH"
          >
            Logout
          </button>
          <button class="btn btn-primary" v-else @click="TOGGLE_AUTH">
            Login
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["todosNotDone", "isAuthenticated"]),
    // isAuthenticated(){
    //   this.$store.getters.isAuthenticated
    // }
  },
  // methods:{
  //   loginOrLogout(){
  //     this.$store.commit('TOGGLE_AUTH')
  //   }
  // }
  methods: mapMutations(["TOGGLE_AUTH"]),
};
</script>
<style scoped>
header {
  background-color: #c74b50;
  padding: 10px;
  color: #fff;
}

ul,
li {
  display: inline;
  margin: 0 20px;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
