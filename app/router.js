import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Explain from './components/Explain.vue';
import Characters from './components/Characters.vue';
import Levels from './components/Levels.vue';
import LevelQuiz from './components/Level-Quiz.vue';

import Win from './components/Win.vue';
import Lose from './components/Lose.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
    },
    {
      path: '/levelquiz/:id',
      name: 'level quiz',
      component: LevelQuiz,
    },
    {
      path: '/levels',
      name: 'levels',
      component: Levels,
    },
    {
      path: '/explain',
      name: 'explain',
      component: Explain,
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose,
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
