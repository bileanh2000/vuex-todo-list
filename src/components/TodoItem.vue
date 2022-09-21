<template>
  <li >
    <!-- <span :class="['checkmark', todoProps.completed ? 'done-todos':'']"> -->
    <span :class="['checkmark', todoProps.completed ? 'done-todos' : '']" >
      {{ todoProps.title }}
    </span>
    <div class="todo-item-action">
      <button
        :class="[
          'btn-icon btn-done',
          todoProps.completed ? 'btn-done-active' : '',
        ]"
        @click="toggleCompleted(todoProps.id)"
      >
        <CheckedIcon v-if="!todoProps.completed"/>
        <CancelIcon v-else/>
      </button>
      <button class="btn-icon btn-delete" @click="deleteTodo(todoProps.id)">
        <DeleteIcon />
      </button>
    </div>
  </li>
</template>
<script>
import CheckedIcon from "./Icon/CheckedIcon.vue";
import DeleteIcon from "./Icon/DeleteIcon.vue";
import CancelIcon from "./Icon/CancelIcon.vue";
export default {
  name: "TodoItem",
  props: ["todoProps"],
  components: { CheckedIcon, DeleteIcon, CancelIcon },
  methods: {
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
    toggleCompleted(id) {
      this.$emit("toggleCompleted", id);
    },
  },
};
</script>
<style scoped>
.btn-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-right: 5px;
}

.done-todos {
  text-decoration: line-through;
  opacity: 0.5;
}
.btn-icon:hover {
  background-color: #d1cfcf;
  transition: 0.3s;
}
.btn-delete {
  color: orange;
}
.btn-done {
  color: green;
}
.todo-item-action{
 width:125px;
 display:flex;
 justify-content: flex-end;
}
.btn-done-active {
  background-color: #d1cfcf;
}

li {
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 10px;
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
