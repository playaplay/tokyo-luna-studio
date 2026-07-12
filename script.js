// ===== 导航栏滚动效果 =====
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (header && !header.classList.contains('scrolled')) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== 移动端菜单 =====
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== 导航高亮（仅首页锚点） =====
const sections = document.querySelectorAll('section[id]');

if (sections.length && navLinks.length) {
  const anchorLinks = [...navLinks].filter((link) =>
    link.getAttribute('href')?.startsWith('#'),
  );

  if (anchorLinks.length) {
    const observerNav = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anchorLinks.forEach((link) => {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === `#${entry.target.id}`,
              );
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((section) => observerNav.observe(section));
  }
}

// ===== 滚动渐入动画 =====
const fadeElements = document.querySelectorAll(
  '.section-header, .about-grid > *, .course-home-card, .course-card, .intro-block, .suitable-box, .pricing-card, .consult-box, .profile-grid > *, .gallery-item, .contact-grid > *',
);

fadeElements.forEach((el) => el.classList.add('fade-in'));

const observerFade = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observerFade.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

fadeElements.forEach((el) => observerFade.observe(el));

// 1. 获取所有的卡片元素
const cards = document.querySelectorAll('.pricing-card'); // 如果你的卡片类名不是 .card，请修改这里

cards.forEach((card) => {
  // 2. 为每一个卡片绑定点击事件
  card.addEventListener('click', function () {
    // 3. 寻找当前拥有 featured 类名的卡片，并移除它
    const currentFeatured = document.querySelector('.pricing-card.featured');
    if (currentFeatured) {
      currentFeatured.classList.remove('featured');
    }

    // 4. 为当前被点击的卡片添加 featured 类名
    this.classList.add('featured');
  });
});
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  // 💡 核心：添加一个提交状态开关，默认是 false
  let isSubmitting = false;

  contactForm.addEventListener('submit', function () {
    // 标记当前正在提交表单
    isSubmitting = true;

    // 日期时间
    const date = document.getElementById('web-date').value;
    const time = document.getElementById('web-time').value;
    const rawDateTime = `${date} ${time}`;

    if (rawDateTime) {
      const dt = new Date(rawDateTime);
      document.getElementById('hidden-date-year').value = dt.getFullYear();
      document.getElementById('hidden-date-month').value = dt.getMonth() + 1;
      document.getElementById('hidden-date-day').value = dt.getDate();
      document.getElementById('hidden-time-hour').value = dt.getHours();
      document.getElementById('hidden-time-minute').value = dt.getMinutes();
    }

    // 联系方式
    const contactType = document.getElementById('contact-type').value;
    const contactValue = document.getElementById('contact-value').value;
    document.getElementById('hidden-google-contact').value = contactValue
      ? `${contactType}: ${contactValue}`
      : '';

    // 留言
    document.getElementById('hidden-google-remarks').value =
      document.getElementById('message').value;
  });

  const iframe = document.getElementById('hidden_iframe');

  iframe.addEventListener('load', function () {
    // 💡 核心：只有当用户真正提交了表单（isSubmitting 为 true）时，才显示成功提示
    if (!isSubmitting) return;

    formSuccess.hidden = false;

    setTimeout(() => {
      formSuccess.hidden = true;
      contactForm.reset();
      // 提示结束后，重置提交状态
      isSubmitting = false;
    }, 6000);
  });
}
// 可预约日期
let availableDates = [];

// 初始化 Flatpickr（立即初始化）
const fp = flatpickr('#web-date', {
  minDate: 'today',
  dateFormat: 'Y-m-d',

  enable: [
    function (date) {
      // 数据还没加载完成时，不允许选择
      if (availableDates.length === 0) {
        return false;
      }

      const str = flatpickr.formatDate(date, 'Y-m-d');
      return availableDates.includes(str);
    },
  ],
});

// 获取输入框
const dateInput = document.getElementById('web-date');

// 显示加载状态
dateInput.placeholder = '正在加载可预约日期...';

// 后台读取 Google Sheets
fetch(
  'https://script.google.com/macros/s/AKfycbx8j4mPDokVN_EAnzE44CBn56nx61axK73kQA1uqLM5ZgSIGXwdrNnOTLPcP1LbSxHq/exec',
)
  .then((response) => response.json())
  .then((data) => {
    availableDates = data;

    // 重新绘制日历
    fp.redraw();

    dateInput.placeholder = '请选择日期';
  })
  .catch((error) => {
    console.error('读取预约日期失败：', error);

    dateInput.placeholder = '日期加载失败，请刷新页面';
  });

const timeInput = document.getElementById('web-time');

timeInput.addEventListener('change', function () {
  const time = this.value;

  if (time < '09:00' || time > '18:00') {
    alert('请选择 09:00～18:00 之间的时间。');
    this.value = '13:00'; // 或者 this.value = "";
    this.focus();
  }
});
