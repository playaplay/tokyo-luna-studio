<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { nextTick } from 'vue';

const route = useRoute();

const menuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref('home');

const navItems = [
  { title: '首页', id: 'home' },
  { title: '工作室', id: 'about' },
  { title: '课程', id: 'courses' },
  { title: '作品', id: 'gallery' },
  { title: '预约', id: 'contact-form', cta: true },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 60;
};

let observer = null;

const initObserver = () => {
  observer?.disconnect();

  if (route.path !== '/') {
    activeSection.value = 'courses';
    return;
  }

  const sections = document.querySelectorAll('section[id]');

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length) {
        activeSection.value = visible[0].target.id;
      }
    },
    {
      rootMargin: '-40% 0px -55% 0px',
    },
  );

  sections.forEach((section) => observer.observe(section));
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  initObserver();
});

watch(
  () => route.fullPath,
  async () => {
    menuOpen.value = false;

    await nextTick();

    initObserver();
  },
);

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  observer?.disconnect();
});

const isActive = (id) =>
  route.path.startsWith('/courses')
    ? id === 'courses'
    : activeSection.value === id;

const handleNavClick = (id) => {
  activeSection.value = id;
  menuOpen.value = false;
};

observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length) {
      activeSection.value = visible[0].target.id;
    }
  },
  {
    threshold: [0.25, 0.5, 0.75],
    rootMargin: '0px 0px -35% 0px',
  },
);
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <nav class="nav container">
      <img
        :src="scrolled ? '/img/logo-light.png' : '/img/logo-dark.png'"
        alt="Tokyo Luna Studio"
        class="logo-img"
      />

      <button
        class="nav-toggle"
        :class="{ open: menuOpen }"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-menu" :class="{ open: menuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <router-link
            :to="{ path: '/', hash: '#' + item.id }"
            class="nav-link"
            :class="{
              active: isActive(item.id),
              'nav-cta': item.cta,
            }"
            @click="handleNavClick(item.id)"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
