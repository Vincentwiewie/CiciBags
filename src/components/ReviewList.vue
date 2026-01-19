<template>
  <div class="container">
    <swiper
      :navigation="true"
      :modules="modules"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="mySwiper"
    >
      <swiper-slide
        v-for="com in comments"
        :key="com.name"
        class="slider-area active-slider-def animated-slider-content slider-nav-btn-1 nav-style-2 common-slider-style"
      >
        <div
          class="review-inner review-style-1 active-review-style carsoule-dots-1"
        >
          <!-- Single Testimonial -->
          <div class="testimonial text-center">
            <div class="testimonial-thumb">
              <img
                src="<%= BASE_URL %>assets/img/testi/testimonial2.jpg"
                alt="testimonial author"
              />
            </div>
            <div class="testimonial-content">
              <p>
                {{ com.review }}
              </p>
            </div>
            <div class="single-item-rating">
              <i class="icofont-star"></i>
              <i class="icofont-star"></i>
              <i class="icofont-star"></i>
              <i class="icofont-star"></i>
              <i class="icofont-star"></i>
            </div>
            <div class="testimonial-author">
              <h6>{{ com.name }}</h6>
            </div>
          </div>
          <!--Single Testimonial -->
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.container-sm {
  width: 80%;
  height: 300px;
}
</style>

<script>
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  name: "ReviewList",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      comments: [
        {
          name: "Micwl Foleim",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quibusdam, quos totam nemo expedita molestias.",
        },
        {
          name: "Ezio Auditore",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quibusdam, quos totam nemo expedita molestias.",
        },
        {
          name: "William Hanson",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quibusdam, quos totam nemo expedita molestias.",
        },
        {
          name: "Maria Garcia",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quibusdam, quos totam nemo expedita molestias.",
        },
        {
          name: "Grace",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quibusdam, quos totam nemo expedita molestias.",
        },
        {
          name: "John Doe",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quibusdam, quos totam nemo expedita molestias.",
        },
      ],
    };
  },
  methods: {},
};
</script>
