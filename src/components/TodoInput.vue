<template>
  <div class="input-container" ref="inputField">
    <input type="text" v-model="title" />
    <button
      class="btn btn-primary"
      @click="submitForm"
      :disabled="!title.trim()"
    >
      Submit
    </button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
    };
  },

  mounted() {
    document.addEventListener("scroll", this.AddClassSticky);
  },
  unmounted() {
    document.removeEventListener("scroll", this.AddClassSticky);
  },
  methods: {
    submitForm() {
      if (this.title) {
        this.$store.commit("ADD_TODO", this.title);
        this.title = "";
      }
    },
    AddClassSticky() {
      let el = this.$refs.inputField;
      if (el === null) return;
      console.log(el.getBoundingClientRect().top);
      if (el.getBoundingClientRect().top <= 20) {
        el.classList.add("sticky");
      } else {
        el.classList.remove("sticky");
      }
    },
  },
};
</script>
<style scoped>
div {
  /* border: 1px solid black; */
}
.btn {
  margin-left: 10px;
}
.sticky {
  background-color: red;
  position: sticky;
  top:20px;
  right:50px;
}
</style>
