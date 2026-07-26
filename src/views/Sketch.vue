<script setup>
const galleryImages = [
  '/img/s1.jpg',
  '/img/s2.jpg',
  '/img/s3.jpg',
  '/img/s4.jpg',
  '/img/s5.jpg',
  '/img/s6.jpg',
  '/img/s7.jpg',
];
</script>
<template>
  <section class="sub-hero" style="background-image: url('/img/sketchTop.jpg')">
    <div class="sub-hero-overlay"></div>
    <div class="container sub-hero-content">
      <nav class="breadcrumb" aria-label="面包屑">
        <router-link to="/"> 首页 </router-link>
        <span>/</span>
        <a href="/#courses"> 课程 </a>
        <span>/</span>
        <span>素描课程</span>
      </nav>
      <p class="sub-hero-tag">Sketch</p>
      <div class="sub-hero-title-row">
        <h1 class="sub-hero-title">素描课程</h1>
        <a href="#pricing-title" class="hero-book-btn"> 立即预约 </a>
      </div>
      <p class="sub-hero-desc">
        观察与造型基础。拒绝流水线式教学，老师全程陪伴式指导，开启你的造型之旅。
      </p>
    </div>
  </section>

  <section class="section course-detail">
    <div class="container">
      <div class="watercolor-intro">
        <div class="intro-block">
          <h3>① 极致小班（1-3人）</h3>
          <p>
            这是一间位于东京荒川区的小型绘画工作室（Home
            Studio），极少人数的安静空间。拒绝流水线式教学，根据每个人的节奏与情况进行个别指导。每位学员都拥有独立的教学进度，老师全程陪伴式指导。
          </p>
        </div>
        <div class="intro-block">
          <h3>② 零基础友好 / 系统进阶</h3>
          <p>
            无论你是零基础爱好者，还是想系统学习造型、光影、结构，我会为你量身定制专属学习路径。你可以轻松完成一幅属于自己的素描作品，也可以从观察方法、造型基础、结构理解与明暗表现开始，更系统地学习绘画。
          </p>
        </div>
      </div>

      <div class="suitable-box">
        <h3>适合这样的人</h3>
        <ul class="checklist">
          <li>想尝试素描绘画，却不知道从哪里开始的人</li>
          <li>希望培养长期兴趣爱好的人</li>
          <li>喜欢艺术与创作的人</li>
          <li>希望获得少人数、个性化指导的人</li>
          <li>希望提升素描绘画能力的人</li>
          <li>希望系统学习绘画基础的人</li>
          <li>希望拥有属于自己的创作时间的人</li>
        </ul>
      </div>

      <div
        class="suitable-box"
        style="
          margin-top: 2rem;
          background-color: #fcfcfc;
          border-left: 4px solid #666;
        "
      >
        <h3>素描学习大纲</h3>
        <ul
          class="checklist"
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          "
        >
          <li><strong>第一阶段｜</strong>基础知识（线条与透视）</li>
          <li><strong>第二阶段｜</strong>单个几何体练习</li>
          <li><strong>第三阶段｜</strong>石膏几何体组合练习</li>
          <li><strong>第四阶段｜</strong>静物及静物组合练习</li>
          <li><strong>第五阶段｜</strong>五官及人像练习</li>
          <li><strong>第六阶段｜</strong>创作与表达</li>
        </ul>
        <blockquote
          class="profile-quote"
          style="margin-top: 1.5rem; background: none; padding: 0 1rem"
        >
          <p style="font-size: 0.95rem; font-style: italic">
            “素描是一切造型艺术的基础和首要因素。” —— 米开朗基罗
          </p>
        </blockquote>
      </div>

      <h3 class="pricing-title" id="pricing-title">课程方案</h3>
      <div class="pricing-grid">
        <article class="pricing-card featured">
          <h4>素描体验课</h4>
          <p class="pricing-desc">适合第一次尝试素描，想体验绘画乐趣的人</p>
          <ul class="pricing-meta">
            <li><strong>时间</strong>约 3 小时</li>
            <li><strong>费用</strong>6,500 日元</li>
            <li><strong>优惠</strong>双人同行，每人 500 日元 OFF</li>
          </ul>
          <a
            href="/?course=sketch-trial#contact-form"
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
        <router-link to="/courses/watercolor"> 水彩课程 </router-link>
        <router-link to="/courses/acrylic"> 丙烯课程 </router-link>
        <router-link to="/courses/kintsugi"> 金缮课程 </router-link>
      </div>
    </div>
  </section>

  <section class="section gallery" id="gallery">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Gallery</span>
        <h2 class="section-title">素描作品集</h2>
        <p class="section-desc">观察、造型与光影练习成果。</p>
      </div>
      <div class="gallery-grid">
        <figure
          class="gallery-item"
          v-for="(image, index) in galleryImages"
          :key="image"
        >
          <img :src="image" :alt="`素描作品 ${index + 1}`" loading="lazy" />
        </figure>
      </div>
    </div>
  </section>
</template>
