<script setup>
import LightboxGallery from '../components/LightboxGallery.vue';
const galleryImages = [
  '/img/k1.jpg',
  '/img/k2.jpg',
  '/img/k3.jpg',
  '/img/k4.jpg',
  '/img/k5.jpg',
  '/img/k6.jpg',
  '/img/k7.jpg',
  '/img/k8.jpg',
  '/img/k9.jpg',
  '/img/k10.jpg',
  '/img/k11.jpg',
  '/img/k12.jpg',
];
</script>
<template>
  <section
    class="sub-hero"
    style="background-image: url('/img/kintsugiTop.jpg')"
  >
    <div class="sub-hero-overlay"></div>
    <div class="container sub-hero-content">
      <nav class="breadcrumb" aria-label="面包屑">
        <router-link to="/"> 首页 </router-link>
        <span>/</span>
        <a href="/#courses"> 课程 </a>
        <span>/</span>
        <span>金缮课程</span>
      </nav>
      <p class="sub-hero-tag">Kintsugi</p>
      <div class="sub-hero-title-row">
        <h1 class="sub-hero-title">金缮修复体验</h1>
        <a href="#pricing-title" class="hero-book-btn"> 立即预约 </a>
      </div>
      <p class="sub-hero-desc">
        【金缮】－修补器物，更疗愈人心。在安静的修补中，寻得一段专注于自己的治愈时光。
      </p>
    </div>
  </section>

  <section class="section course-detail">
    <div class="container">
      <div
        class="suitable-box"
        style="
          background-color: #f9f9f9;
          border-left: 4px solid #c5a880;
          margin-bottom: 3rem;
          padding: 2rem;
        "
      >
        <h3
          style="
            font-family: 'Noto Serif SC', serif;
            font-size: 1.2rem;
            color: #333;
          "
        >
          拥抱缺陷、歌颂生命痕迹的哲学
        </h3>
        <p style="line-height: 1.8; margin-top: 1rem">
          这是一种以金修复破碎器物的传统技法。最早源于中国古老的漆艺修复，却在日本侘寂美学中，找到了拥抱缺陷、歌颂生命痕迹的哲学。与追求“完美无痕”的传统修复不同，金缮反其道而行之，将修补的痕迹高调展现，用金勾勒出破损的痕迹。正是这些金色的脉络，诉说着独一无二的生命故事。
        </p>
        <p style="line-height: 1.8; margin-top: 1rem">
          如今，金缮也被视为一种心灵的疗愈。在金缮的世界里：生命中的伤痕与不完美，无需隐藏，它们正是我们之所以独特的证明。
        </p>
      </div>

      <h3 class="pricing-title" id="pricing-title">体验方案</h3>
      <div class="pricing-grid">
        <article class="pricing-card featured">
          <span class="pricing-num">A</span>
          <h4>现代非生漆金缮 (单次体验)</h4>
          <p class="pricing-desc">
            适合零基础体验，无需任何修复经验。使用现代安全材料进行修复，步骤精简高效。
          </p>
          <ul class="pricing-meta">
            <li><strong>体验时长</strong>约 2-3 小时</li>
            <li><strong>完成时间</strong>当日完成并可直接带回</li>
            <li><strong>费用</strong>8,800 日元</li>
          </ul>
          <div
            style="
              margin: 1rem 0;
              padding-top: 1rem;
              border-top: 1px solid #eee;
              font-size: 0.9rem;
              color: #666;
            "
          >
            <strong>体验包含：</strong> 器物提供（无需自带）｜ 修复材料全包 ｜
            茶饮与点心 ｜ 礼盒包装
          </div>
          <a href="/?#contact-form" class="btn btn-primary btn-sm"
            >预约 A 课程</a
          >
        </article>

        <article class="pricing-card page-fixed" style="opacity: 0.85">
          <span class="pricing-num" style="background: #ccc; color: #fff"
            >B</span
          >
          <h4>
            传统生漆金缮 (需多次)
            <span
              style="
                font-size: 0.8rem;
                color: #d9534f;
                font-weight: bold;
                margin-left: 5px;
              "
              >[暂时中止]</span
            >
          </h4>
          <p class="pricing-desc">
            专为想深入学习传统金继技艺的学员设计。遵循传统工艺，全程使用天然生漆
            (Urushi) 进行修复。
          </p>
          <ul class="pricing-meta">
            <li><strong>适合对象</strong>想要完整学习传统修复方法的人</li>
            <li>
              <strong>体验时长</strong>分阶段进行（漆面需自然阴干，需多次预约）
            </li>
            <li><strong>状态</strong>当前时段暂不开放预约</li>
          </ul>
          <button
            class="btn btn-outline btn-sm"
            disabled
            style="cursor: not-allowed; margin-top: auto"
          >
            暂不开放
          </button>
        </article>
      </div>
    </div>
  </section>

  <section class="section other-courses">
    <div class="container">
      <h3 class="other-courses-title">其他课程</h3>
      <div class="other-courses-links">
        <router-link to="/courses/watercolor"> 水彩课程 </router-link>
        <router-link to="/courses/sketch"> 素描课程 </router-link>
        <router-link to="/courses/acrylic"> 丙烯课程 </router-link>
      </div>
    </div>
  </section>

  <section class="section gallery">
    <div class="container">
      <div class="section-header">
        <span class="section-tag"> Gallery </span>

        <h2 class="section-title">金缮工艺集</h2>

        <p class="section-desc">拥抱缺陷，勾勒独一无二的器物脉络。</p>
      </div>

      <LightboxGallery :images="galleryImages" />
    </div>
  </section>
</template>
