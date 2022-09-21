<template lang="">
  <SideBar :isOpenProp="isOpen" @close="isOpen = !isOpen" />
  <header>
    <div class="header-wrapper">
      <ul>
        <li>
          <button class="btn btn-secondary" @click="handleOpen">
            Open SideBar
          </button>
        </li>
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
import SideBar from "./SideBar.vue";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["todosNotDone", "isAuthenticated"]),
    // isAuthenticated(){
    //   this.$store.getters.isAuthenticated
    // }
  },

  components: { SideBar },
  // methods:{
  //   loginOrLogout(){
  //     this.$store.commit('TOGGLE_AUTH')
  //   }
  // }
  methods: {
    ...mapMutations(["TOGGLE_AUTH"]),
    handleOpen() {
      this.isOpen = true;
      // console.log("click worked");
      // console.log("s", this.isOpen);
    },
  },
};
</script>
<style scoped>
header {
  background-color: #c74b50;
  padding: 10px;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 998;
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
