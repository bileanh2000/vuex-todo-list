<template>
  <div class="progress-container">
    <div class="progress" :style="{ width: progress + '%' }">
      <p>{{ progress }}%</p>
    </div>
  </div>
</template>
<script>
import { useStore, mapGetters } from "vuex";
export default {
  name: "Progress",
  id: "heheheeh",

  // computed: {
  //   completedPercent() {
  //     return this.$store.getters.percentCompleted;
  //   },
  //   doneTodos() {
  //     return this.$store.getters.progress;
  //   },
  // },
  computed: mapGetters(["progress"]),
};
</script>
<style scoped>
.progress-container {
  box-shadow: 0px 0px 0px 2px #000;
  /* background-color: red; */
}
.progress {
  background-color: #d49b54;
  text-align: center;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.3s;
}
</style>
