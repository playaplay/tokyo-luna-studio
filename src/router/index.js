import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Kintsugi from '../views/Kintsugi.vue';
import Watercolor from '../views/Watercolor.vue';
import Sketch from '../views/Sketch.vue';
import Acrylic from '../views/Acrylic.vue';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Tokyo Luna Studio | 东京绘画工作室',
      },
    },

    {
      path: '/courses/kintsugi',
      component: Kintsugi,
      meta: {
        title: '金缮课程 | Tokyo Luna Studio',
      },
    },

    {
      path: '/courses/watercolor',
      component: Watercolor,
      meta: {
        title: '水彩课程 | Tokyo Luna Studio',
      },
    },

    {
      path: '/courses/sketch',
      component: Sketch,
      meta: {
        title: '素描课程 | Tokyo Luna Studio',
      },
    },

    {
      path: '/courses/acrylic',
      component: Acrylic,
      meta: {
        title: '丙烯课程 | Tokyo Luna Studio',
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    return {
      top: 0,
    };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
