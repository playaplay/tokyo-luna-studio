<script setup>
const courses = [
  {
    en: 'Kintsugi',
    title: '金缮课程',
    desc: '日本传统修复工艺',
    image: '/img/index-k.jpg',
    link: '/courses/kintsugi',
  },
  {
    en: 'Watercolor',
    title: '水彩课程',
    desc: '自由选题，个别指导',
    image: '/img/index-c.jpg',
    link: '/courses/watercolor',
  },
  {
    en: 'Sketch',
    title: '素描课程',
    desc: '观察与造型基础',
    image: '/img/index-s.jpg',
    link: '/courses/sketch',
  },
  {
    en: 'Acrylic',
    title: '丙烯课程',
    desc: '色彩与肌理创作',
    image: '/img/index-a.jpg',
    link: '/courses/acrylic',
  },
];
</script>

<template>
  <section class="section courses-home" id="courses">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Courses</span>
        <h2 class="section-title">课程</h2>
        <p class="section-desc">四种课程，点击进入了解详情。</p>
      </div>

      <div class="courses-home-grid">
        <router-link
          v-for="course in courses"
          :key="course.en"
          :to="course.link"
          class="course-home-card"
        >
          <div
            class="course-home-img"
            :style="{ backgroundImage: `url(${course.image})` }"
          ></div>

          <div class="course-home-body">
            <span class="course-home-en">
              {{ course.en }}
            </span>

            <h3>
              {{ course.title }}
            </h3>

            <p>
              {{ course.desc }}
            </p>

            <span class="course-home-link"> 了解详情 → </span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
