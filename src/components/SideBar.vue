<template lang="">
  <div
    :class="['sidebar-container', !isOpenProp ? '' : 'show-backdrop']"
    @click="handleFocus"
  >
    <div :class="['sidebar-content', !isOpenProp ? '' : 'show']">
      <div class="sidebar-header">
        <h2>Sidebar</h2>
        <button class="btn btn-primary" @click="$emit('close')">Close</button>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
        <li>Fanpage</li>
        <li>TuanLA</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, onUpdated, ref, watch } from "vue";
const props = defineProps(["isOpenProp"]);

const emit = defineEmits(["close"]);

const handleFocus = (e) => {
  if (e.target.classList[1] === "show-backdrop") {
    emit("close");
  } else {
    return;
  }
};

onUpdated(() => {
  if (props.isOpenProp) {
    document.body.setAttribute("style", "overflow-y:hidden");
  } else {
    document.body.removeAttribute("style");
  }
}),
  onUnmounted(() => {
    document.body.removeAttribute("style");
  });

const handleFocusOut = (e) => {
  console.log("focusout", e);
};
</script>
<style>
.sidebar-container {
  width: 100%;
  height: 100%;
  position: fixed;
  visibility: hidden;
  transition: visibility 0s linear 300ms, background 300ms linear;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
}

.sidebar-content {
  width: 250px;
  background-color: white;
  height: 100vh;
  /* width: 30vw; */
  padding: 20px;
  position: absolute;
  left: -35vw;
  transition: left 0.5s;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
}

.show-backdrop {
  background: rgba(0, 0, 0, 0.5);
  transition: background 0.5s;
  visibility: visible;
  transition: visibility 0s linear 0ms, background 300ms linear;
}
.show {
  transition: left 0.5s;
  left: 0vw;
}
</style>
