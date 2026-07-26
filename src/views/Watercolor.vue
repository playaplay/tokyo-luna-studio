<script setup>
const galleryImages = [
  '/img/c1.jpg',
  '/img/c2.jpg',
  '/img/c3.jpg',
  '/img/c4.jpg',
  '/img/c5.jpg',
  '/img/c6.jpg',
  '/img/c7.jpg',
  '/img/c8.jpg',
  '/img/c9.jpg',
  '/img/c10.jpg',
  '/img/c11.jpg',
  '/img/c12.jpg',
  '/img/c13.jpg',
];
</script>
<template>
  <section class="sub-hero" style="background-image: url('/img/waterTop.jpg')">
    <div class="sub-hero-overlay"></div>
    <div class="container sub-hero-content">
      <nav class="breadcrumb" aria-label="面包屑">
        <router-link to="/"> 首页 </router-link>
        <span>/</span>
        <a href="/#courses"> 课程 </a>
        <span>/</span>
        <span>水彩课程</span>
      </nav>
      <p class="sub-hero-tag">Watercolor</p>
      <div class="sub-hero-title-row">
        <h1 class="sub-hero-title">水彩课程</h1>
        <a href="#pricing-title" class="hero-book-btn"> 立即预约 </a>
      </div>
      <p class="sub-hero-desc">
        不赶进度，不画统一范本，根据每个人的节奏与情况进行个别指导。
      </p>
    </div>
  </section>

  <section class="section course-detail">
    <div class="container">
      <div class="watercolor-intro">
        <div class="intro-block">
          <h3>① 少人数指导</h3>
          <p>
            这是一间位于东京的小型绘画工作室（Home Studio），每次仅接待 1～3
            位学员。不赶进度，不画统一范本，而是根据每个人的节奏与情况进行个别指导。
          </p>
        </div>
        <div class="intro-block">
          <h3>② 自由选题</h3>
          <p>
            工作室准备了丰富的参考素材，包括风景、植物、甜点、花卉、建筑等多种主题。如果已经有想画的内容，欢迎提前联系。我会根据课程时间与个人情况提供建议。
          </p>
        </div>
        <div class="intro-block">
          <h3>③ 适合不同经验程度</h3>
          <p>
            无论是第一次接触水彩，还是希望进一步提升绘画能力，都可以根据自己的兴趣与目标自由选择创作内容。你可以轻松完成一幅属于自己的作品，也可以从构图、色彩、观察方法与水彩技法开始，更系统地学习绘画。
          </p>
        </div>
      </div>

      <div class="suitable-box">
        <h3>适合这样的人</h3>
        <ul class="checklist">
          <li>想尝试水彩画，却不知道从哪里开始的人</li>
          <li>希望培养长期兴趣爱好的人</li>
          <li>喜欢艺术与创作的人</li>
          <li>希望获得少人数、个性化指导的人</li>
          <li>希望提升水彩绘画能力的人</li>
          <li>希望系统学习绘画基础的人</li>
          <li>希望拥有属于自己的创作时间的人</li>
        </ul>
      </div>

      <h3 class="pricing-title" id="pricing-title">课程方案</h3>
      <div class="pricing-grid">
        <article class="pricing-card featured">
          <h4>水彩体验课</h4>
          <p class="pricing-desc">适合第一次尝试水彩，想体验绘画乐趣的人</p>
          <ul class="pricing-meta">
            <li><strong>时间</strong>约 3 小时</li>
            <li><strong>费用</strong>7,500 日元</li>
            <li><strong>优惠</strong>双人同行，每人 500 日元 OFF</li>
          </ul>
          <a
            href="/?course=watercolor-trial#contact-form"
            class="btn btn-primary btn-sm"
            >预约体验</a
          >
        </article>
      </div>
    </div>
  </section>

  <section class="section other-courses">
    <div class="container">
      <h3 class="other-courses-title">其他课程</h3>
      <div class="other-courses-links">
        <router-link to="/courses/sketch"> 素描课程 </router-link>
        <router-link to="/courses/acrylic"> 丙烯课程 </router-link>
        <router-link to="/courses/kintsugi"> 金缮课程 </router-link>
      </div>
    </div>
  </section>

  <section class="section gallery" id="gallery">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Gallery</span>
        <h2 class="section-title">水彩作品集</h2>
        <p class="section-desc">学员与老师的水彩创作成果。</p>
      </div>
      <div class="gallery-grid">
        <figure
          class="gallery-item"
          v-for="(image, index) in galleryImages"
          :key="image"
        >
          <img :src="image" :alt="`水彩作品 ${index + 1}`" loading="lazy" />
        </figure>
      </div>
    </div>
  </section>
</template>
