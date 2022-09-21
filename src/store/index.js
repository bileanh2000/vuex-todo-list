import { registerRuntimeCompiler } from "vue";
import { createStore } from "vuex";
import axios from "axios";

import auth from "./modules/auth";
import todos from "./modules/todos";

export const store = createStore({
  modules: {
    auth,
    todos
  },
  
});
