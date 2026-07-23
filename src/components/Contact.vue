<script setup>
import { ref, onMounted } from 'vue';
import { watch } from 'vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// 表单数据
const contactType = ref('微信');
const contactValue = ref('');
const message = ref('');

const date = ref('');
const time = ref('13:00');

// Google Form隐藏字段
const dateYear = ref('');
const dateMonth = ref('');
const dateDay = ref('');
const timeHour = ref('');
const timeMinute = ref('');

const googleContact = ref('');

// 可预约日期
const availableDates = ref([]);

// 提交状态
const isSubmitting = ref(false);

const formSuccess = ref(false);

const formRef = ref(null);
const iframeRef = ref(null);

const dateLoading = ref(true);
const datePlaceholder = ref('正在加载可预约日期...');

// 日期处理
const handleDate = () => {
  if (!date.value || !time.value) {
    return;
  }

  const dt = new Date(`${date.value} ${time.value}`);

  dateYear.value = dt.getFullYear();
  dateMonth.value = dt.getMonth() + 1;
  dateDay.value = dt.getDate();

  timeHour.value = dt.getHours();
  timeMinute.value = dt.getMinutes();
};

// 提交前处理
const handleSubmit = (e) => {
  if (isSubmitting.value) {
    e.preventDefault();
    return;
  }

  isSubmitting.value = true;

  handleDate();

  googleContact.value = contactValue.value
    ? `${contactType.value}: ${contactValue.value}`
    : '';
};

// 初始化日期
onMounted(() => {
  const now = new Date();

  // 默认最早可预约：明天
  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0);
  minDate.setDate(minDate.getDate() + 1);

  // 如果当前时间 >= 18:00，则最早预约改为后天
  if (now.getHours() >= 18) {
    minDate.setDate(minDate.getDate() + 1);
  }

  const fp = flatpickr('#web-date', {
    minDate: minDate,

    dateFormat: 'Y-m-d',

    enable: [
      function (date) {
        if (availableDates.value.length === 0) {
          return false;
        }

        const str = flatpickr.formatDate(date, 'Y-m-d');
        return availableDates.value.includes(str);
      },
    ],

    onChange(selectedDates, dateStr) {
      date.value = dateStr;
    },
  });

  // 获取Google Sheet日期

  fetch(
    'https://script.google.com/macros/s/AKfycbx8j4mPDokVN_EAnzE44CBn56nx61axK73kQA1uqLM5ZgSIGXwdrNnOTLPcP1LbSxHq/exec',
  )
    .then((res) => res.json())
    .then((data) => {
      availableDates.value = data;

      fp.redraw();

      dateLoading.value = false;

      datePlaceholder.value = '请选择日期';
    })
    .catch((err) => {
      console.error(err);

      dateLoading.value = false;

      datePlaceholder.value = '日期加载失败';
    });
});

watch(time, (newTime) => {
  if (newTime < '09:00' || newTime > '18:00') {
    alert('请选择09:00~18:00之间');

    time.value = '13:00';
  }
});

onMounted(() => {
  if (iframeRef.value) {
    iframeRef.value.addEventListener(
      'load',

      () => {
        if (!isSubmitting.value) {
          return;
        }

        formSuccess.value = true;

        setTimeout(() => {
          formSuccess.value = false;

          formRef.value.reset();

          isSubmitting.value = false;
        }, 6000);
      },
    );
  }
});
</script>
<template>
  <section class="section contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <span class="section-tag">Reservation</span>
          <h2 class="section-title">开始你的绘画体验</h2>
          <p>
            填表预约。提交表单后，将在
            <strong>24 小时内</strong>与您联系确认。
          </p>
          <div class="location-box">
            <h4>地址 &amp; 须知</h4>
            <ul class="contact-details">
              <li>
                <span class="contact-icon">📍</span>
                <div>
                  <strong>工作室地点</strong>
                  <p>
                    东京荒川区西日暮里<br /><small
                      >（完全预约制，具体地址预约成功后发送）</small
                    >
                  </p>
                </div>
              </li>
              <li>
                <span class="contact-icon">🚃</span>
                <div>
                  <strong>交通</strong>
                  <p>
                    京成本线（新三河岛）｜常磐线（三河岛）<br />千代田线（町屋）｜山手线（西日暮里）<br />步行均可达
                  </p>
                </div>
              </li>
              <li>
                <span class="contact-icon">🕐</span>
                <div>
                  <strong>开放时间</strong>
                  <p>
                    不定期开放<br /><small
                      >（具体可预约时段请看预约表单或微信咨询）</small
                    >
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <form
          ref="formRef"
          class="contact-form"
          id="contact-form"
          @submit="handleSubmit"
          action="https://docs.google.com/forms/d/e/1FAIpQLScr22LDiue33ykNh8MDSJSoi_pMQb-FNhuwWL8UnAZ2-oo0lA/formResponse"
          method="POST"
          target="hidden_iframe"
        >
          <h3 class="form-title">填表预约</h3>
          <p class="form-note">
            ※ 提交表单预约后，确认邮件将自动发送至您的邮箱
          </p>
          <div class="payment-notice-box">
            <span class="payment-icon">💳</span>
            <p class="payment-text">
              <strong>支付方式：</strong>到店付款 / 現場付款<br />
              <span class="payment-sub"
                >支持现金、PayPay、微信、支付宝 (Cash, PayPay, WeChat Pay,
                Alipay)</span
              >
            </p>
          </div>

          <input type="hidden" name="entry.1737513457" :value="message" />

          <iframe
            ref="iframeRef"
            name="hidden_iframe"
            style="display: none"
          ></iframe>
          <input type="hidden" name="entry.420058892_year" v-model="dateYear" />
          <input
            type="hidden"
            name="entry.420058892_month"
            v-model="dateMonth"
          />
          <input type="hidden" name="entry.420058892_day" v-model="dateDay" />
          <input type="hidden" name="entry.452735192_hour" v-model="timeHour" />
          <input
            type="hidden"
            name="entry.452735192_minute"
            v-model="timeMinute"
          />

          <input
            type="hidden"
            name="entry.1368018323"
            v-model="googleContact"
          />

          <div class="form-group">
            <label for="name">姓名 <span class="required">*</span></label>
            <input
              type="text"
              id="name"
              name="entry.502038855"
              placeholder="您的姓名"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">邮箱 <span class="required">*</span></label>
            <input
              type="email"
              id="email"
              name="entry.1913734033"
              placeholder="your-email@example.com"
              required
            />
            <p class="field-desc font-caption">
              预约确认及后续联系将优先通过此邮箱进行
            </p>
          </div>

          <div class="form-group">
            <label for="contact-value">其他联系方式（选填）</label>
            <div
              class="contact-combined-group"
              style="display: flex; gap: 10px"
            >
              <select v-model="contactType" style="width: 30%">
                <option value="微信">微信</option>
                <option value="电话">电话</option>
              </select>
              <input
                type="text"
                v-model="contactValue"
                style="width: 70%"
                placeholder="方便与您联系"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="course">意向课程 <span class="required">*</span></label>
            <select id="course" name="entry.2112526655" required>
              <option value="" disabled selected hidden>请选择课程</option>
              <option value="水彩课程">水彩课程</option>
              <option value="素描课程">素描课程</option>
              <option value="丙烯课程">丙烯课程</option>
              <option value="金缮课程">金缮课程</option>
              <option value="艺术讲座 | 线下沙龙 | WorkShop">
                艺术讲座 | 线下沙龙 | WorkShop
              </option>
            </select>
          </div>
          <div class="form-group">
            <label> 希望日期与时间 <span class="required">*</span> </label>

            <div class="datetime-row">
              <!-- 日期 -->
              <input
                type="text"
                id="web-date"
                v-model="date"
                :placeholder="datePlaceholder"
                required
              />

              <!-- 时间 -->
              <input
                type="time"
                id="web-time"
                v-model="time"
                min="09:00"
                max="18:00"
                step="1800"
                required
                @change="checkTime"
              />
            </div>

            <!-- 加载提示 -->
            <div class="date-loading" v-if="dateLoading">
              <span class="spinner"></span>
              正在加载可预约日期...
            </div>

            <p class="field-desc font-caption">
              开放时间：9:00-21:00（最晚18:00到店）
            </p>
          </div>

          <div class="form-group">
            <label for="message">留言</label>
            <textarea
              v-model="message"
              rows="3"
              placeholder="想画的内容、经验程度、参加人数或是否有同行人等…"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-primary btn-full"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? '提交中...' : '提交预约' }}
          </button>
          <p class="form-success" id="form-success" v-show="formSuccess">
            感謝您的預約！我們將在 24 小时内與您聯繫確認。
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
