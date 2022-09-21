<template>
  <Progress v-if="isAuthenticated" />
  <!-- <div @focus="handleFocus" @focusout="handleFocusOut" tabindex="0">
    SOME CONTENT HERE
  </div> -->
  <div class="todo-container" v-if="isAuthenticated">
    <div class="todo-input">
      <h2>Enter a task you wanna do</h2>
      <TodoInput />
    </div>
    <div class="todos-list">
      <h2>Todo List</h2>
      <TransitionGroup tag="ul" name="fade" class="list-container">
        <TodoItem
          v-for="todo in todosNotDone"
          :todoProps="todo"
          :key="todo.id"
          @deleteTodo="deleteTodo"
          @toggleCompleted="toggleCompleted"
        />
      </TransitionGroup>
    </div>
    <div class="dones-todo">
      <h2>Done</h2>
      <TransitionGroup tag="ul" name="fade" class="list-container">
        <TodoItem
          v-for="todo in doneTodos"
          :todoProps="todo"
          :key="todo.id"
          @deleteTodo="deleteTodo"
          @toggleCompleted="toggleCompleted"
        />
      </TransitionGroup>
    </div>
  </div>
  <p class="messages" v-else>You must to login first!</p>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import TodoInput from "./TodoInput.vue";
import Progress from "./Progress.vue";
import CheckedIcon from "./Icon/CheckedIcon.vue";
import DeleteIcon from "./Icon/DeleteIcon.vue";
import CancelIcon from "./Icon/CancelIcon.vue";
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoInput,
    Progress,
    CheckedIcon,
    DeleteIcon,
    CancelIcon,
    TodoItem,
  },
  // computed:{
  //   todos(){
  //     return this.$store.state.todos
  //   }
  // }

  mounted() {
    this.getTodos();
  },
  computed: {
    ...mapState(["todos", "auth"]),
    ...mapGetters(["doneTodos", "todosNotDone", "isAuthenticated"]),
  },

  methods: {
    toggleCompleted(todoId) {
      this.$store.commit("MARK_COMPLETED", todoId);
    },
    deleteTodo(todoId) {
      // this.$store.commit("DELETE_TODO", todoId);
      this.$store.dispatch("deleteTodo", todoId);
    },
    ...mapActions(["getTodos"]),
    // handleFocus(e) {
    //   console.log("focus", e);
    // },
    // handleFocusOut(e){
    //   console.log('focus out', e)
    // }
  },
};
</script>

<style scoped>
.todo-container {
  margin-top: 1rem;
  max-width: 1250px;
  margin: 24px auto;
  display: flex;
  gap: 50px;
}

h2 {
  margin-bottom: 10px;
}

.todo-input {
  flex: 1;
}

.todos-list {
  flex: 1;
}
.dones-todo {
  flex: 1;
}


.messages {
  color: red;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}
.dones-todo ul li span {
  text-decoration: line-through;
  opacity: 0.5;
}

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
.btn-done-active {
  background-color: #d1cfcf;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.1) translate(50px, 0px);
}
.fade-leave-active {
  position: absolute;
}
</style>
