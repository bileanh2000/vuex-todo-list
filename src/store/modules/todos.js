import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const state = {
  todos: [],
};

const getters = {
  doneTodos(state) {
    return state.todos.filter((todo) => todo.completed === true);
  },
  todosNotDone(state) {
    return state.todos.filter((todo) => todo.completed !== true);
  },
  progress(state, getters) {
    if (!state.todos.length) {
      return 0;
    } else {
      return Math.floor((getters.doneTodos.length / state.todos.length) * 100);
    }
  },
};
const actions = {
  deleteTodo(context, todoId) {
    context.commit("DELETE_TODO", todoId);
  },
  async getTodos({ commit }) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      commit("SET_TODO", response.data);
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  MARK_COMPLETED(state, todoId) {
    state.todos.map((todo) => {
      if (todo.id === todoId) todo.completed = !todo.completed;
      return todo;
    });
  },
  DELETE_TODO(state, todoId) {
    state.todos = state.todos.filter((todo) => todo.id !== todoId);
  },

  ADD_TODO(state, title) {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    // console.log(title);
    state.todos.unshift(newTodo);
  },
  SET_TODO(state, todos) {
    state.todos = todos;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
