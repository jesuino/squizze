import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router/dist/vue-router.esm";
import Question from "./pages/Question.vue";
import Home from "./pages/Home.vue";
import Vuex from "vuex/dist/vuex.esm";
import Congratulations from "./pages/Congratulations.vue";
import QuizStore from "./components/quiz-store";

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: "/", component: Home, name: "home"},
    {path: "/question/:question_id", component: Question, name: "question"},
    {path: "/congratulations", component: Congratulations, name: "congratulations"}
];

const router = new VueRouter({routes});
let store = new Vuex.Store(QuizStore);
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
