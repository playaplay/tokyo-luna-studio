<script setup>
const galleries = [
  {
    title: '金缮 · 工艺集 →',
    image: '/img/index-k.jpg',
    alt: '金缮工艺集',
    link: '/courses/kintsugi#gallery',
    size: 'large',
  },
  {
    title: '水彩 · 作品集 →',
    image: '/img/index-c.jpg',
    alt: '水彩作品集',
    link: '/courses/watercolor#gallery',
    size: '',
  },
  {
    title: '素描 · 作品集 →',
    image: '/img/index-s.jpg',
    alt: '素描作品集',
    link: '/courses/sketch#gallery',
    size: '',
  },
  {
    title: '丙烯 · 作品集 →',
    image: '/img/index-a.jpg',
    alt: '丙烯作品集',
    link: '/courses/acrylic#gallery',
    size: '',
  },
];
</script>

<template>
  <section class="section gallery" id="gallery">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Gallery</span>
        <h2 class="section-title">Gallery</h2>
        <p class="section-desc">
          工作室与学员的创作成果（点击图片查看各课程完整作品集）。
        </p>
      </div>
      <div class="gallery-grid">
        <router-link
          v-for="item in galleries"
          :key="item.title"
          :to="item.link"
          class="gallery-item"
          :class="item.size"
        >
          <img :src="item.image" :alt="item.alt" loading="lazy" />

          <figcaption>
            {{ item.title }}
          </figcaption>
        </router-link>
      </div>
    </div>
  </section>
</template>
