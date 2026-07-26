<template>
  <div class="lb-gallery-wrapper">
    <div class="lb-gallery-grid">
      <figure
        class="lb-gallery-item"
        v-for="(image, index) in images"
        :key="index"
        @click="open(index)"
      >
        <img :src="image" :alt="`作品 ${index + 1}`" loading="lazy" />
      </figure>
    </div>

    <Teleport to="body">
      <transition name="lb-lightbox">
        <div v-if="visible" class="lb-lightbox" @click.self="lb - close">
          <button class="lb-close" @click="close">✕</button>

          <button class="lb-prev" @click.stop="prev" v-if="images.length > 1">
            ‹
          </button>

          <img class="lb-lightbox-image" :src="images[current]" />

          <button class="lb-next" @click.stop="next" v-if="images.length > 1">
            ›
          </button>

          <div class="lb-counter">{{ current + 1 }} / {{ images.length }}</div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const visible = ref(false);

const current = ref(0);

const open = (index) => {
  current.value = index;

  visible.value = true;

  document.body.style.overflow = 'hidden';
};

const close = () => {
  visible.value = false;

  document.body.style.overflow = '';
};

const next = () => {
  current.value = (current.value + 1) % props.images.length;
};

const prev = () => {
  current.value =
    (current.value - 1 + props.images.length) % props.images.length;
};

const keydown = (e) => {
  if (!visible.value) return;

  switch (e.key) {
    case 'Escape':
      close();
      break;

    case 'ArrowRight':
      next();
      break;

    case 'ArrowLeft':
      prev();
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', keydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', keydown);
});
</script>

<style scoped>
.lb-gallery-grid {
  column-count: 3;
  column-gap: 20px;
}

.lb-gallery-item {
  break-inside: avoid;
  margin-bottom: 20px;

  overflow: hidden;

  border-radius: 14px;

  cursor: pointer;
}

.lb-gallery-item img {
  width: 100%;

  display: block;

  transition: transform 0.8s ease;
}

.lb-gallery-item:hover img {
  transform: scale(1.06);
}

.lb-lightbox {
  position: fixed;

  inset: 0;

  background: rgba(68, 59, 59, 0.651);
  backdrop-filter: blur(12px);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 99999;
}

.lb-lightbox-image {
  max-width: 90vw;

  max-height: 90vh;

  border-radius: 12px;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  animation: zoomIn 0.45s cubic-bezier(0.22, 0.61, 0.36, 1);
}

@keyframes zoomIn {
  from {
    opacity: 0;

    transform: scale(0.92);
  }

  to {
    opacity: 1;

    transform: scale(1);
  }
}

.lb-close,
.lb-prev,
.lb-next {
  position: absolute;

  width: 52px;

  height: 52px;

  border: none;

  border-radius: 50%;

  cursor: pointer;

  background: rgba(255, 255, 255, 0.15);

  color: white;

  font-size: 28px;

  transition: 0.3s;
}

.lb-close {
  right: 40px;

  top: 30px;
}

.lb-prev {
  left: 30px;

  top: 50%;

  transform: translateY(-50%);
}

.lb-next {
  right: 30px;

  top: 50%;

  transform: translateY(-50%);
}

.lb-close:hover,
.lb-prev:hover,
.lb-next:hover {
  background: white;

  color: #333;
}

.lb-counter {
  position: absolute;

  bottom: 35px;

  color: white;

  font-size: 18px;
}

.lb-lightbox-enter-active,
.lb-lightbox-leave-active {
  transition: 0.3s;
}

.lb-lightbox-enter-from,
.lb-lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .lb-gallery-grid {
    column-count: 2;
  }
}

@media (max-width: 600px) {
  .lb-gallery-grid {
    column-count: 1;
  }
}
</style>
