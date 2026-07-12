<script setup>
const quickLinks = [
  {
    title: '工作室',
    to: { path: '/', hash: '#about' },
  },
  {
    title: '课程',
    to: { path: '/', hash: '#courses' },
  },
  {
    title: '关于老师',
    to: { path: '/', hash: '#profile' },
  },
  {
    title: '作品',
    to: { path: '/', hash: '#gallery' },
  },
];

const courseLinks = [
  {
    title: '金缮',
    to: '/courses/kintsugi',
  },
  {
    title: '水彩',
    to: '/courses/watercolor',
  },
  {
    title: '素描',
    to: '/courses/sketch',
  },
  {
    title: '丙烯',
    to: '/courses/acrylic',
  },
];
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <!-- Logo -->
      <div class="footer-brand">
        <router-link to="/" class="logo">
          <img src="/img/logo.jpg" alt="Tokyo Luna Studio Logo" />
        </router-link>

        <p>
          东京荒川区西日暮里 ·
          绘画没有标准答案，重要的是观察、感受，以及持续创作的乐趣。
        </p>
      </div>

      <!-- 快速导航 -->
      <div class="footer-links">
        <h4>快速导航</h4>

        <ul>
          <li v-for="item in quickLinks" :key="item.title">
            <router-link :to="item.to" class="footer-link">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- 课程 -->
      <div class="footer-links">
        <h4>课程</h4>

        <ul>
          <li v-for="item in courseLinks" :key="item.title">
            <router-link :to="item.to">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom container">
      <p>&copy; 2026 Tokyo Luna Studio · 东京荒川区</p>
    </div>
  </footer>
</template>
