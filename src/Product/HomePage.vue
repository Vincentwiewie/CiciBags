<template>
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
      class="slider-area common-slider-style"
      v-for="(slide, slideIndex) in slideshow"
      :key="slideIndex"
      :style="{
        backgroundImage: 'url(assets/img/' + slide.image + ')',
      }"
    >
      <div class="single-slider image-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12">
              <div class="single-slider-content">
                <h1>Family Jewellery <span>Collection</span></h1>
                <h3>Tomatoes, Onions & Garlic</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid atque, odio nostrum inventore repellat.
                </p>
                <div class="slider_btn_box">
                  <a href="/Product" class="readmore-btn sgs">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <!-- Main Content -->
  <main class="page-content">
    <!-- service area start-->
    <div class="service-area">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            v-for="svc in service"
            :key="svc.img"
          >
            <div class="single-feat">
              <div class="banner-icon">
                <img :src="svc.img" :alt="svc.alt" />
              </div>
              <div class="banner-text">
                <h4>{{ svc.title }}</h4>
                <p>{{ svc.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- service area end-->

    <!--Banner area Start-->
    <div
      class="banner-area big-small-banner area-padding-bottom-xs area-padding-top-sm"
    >
      <div class="container">
        <div class="row">
          <div class="col-3 justify-content-center d-flex">
            <div class="item-wrapper">
              <div class="item-img">
                <div class="offer-tag">
                  <span>New</span>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/team/team1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-3 justify-content-center d-flex">
            <div class="item-wrapper">
              <div class="item-img">
                <div class="offer-tag">
                  <span>New</span>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/team/team1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-3 justify-content-center d-flex">
            <div class="item-wrapper">
              <div class="item-img">
                <div class="offer-tag">
                  <span>New</span>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/team/team1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-3 justify-content-center d-flex">
            <div class="item-wrapper">
              <div class="item-img">
                <div class="offer-tag">
                  <span>New</span>
                </div>
                <a href="product-details.html">
                  <img src="assets/img/team/team1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Banner area end-->
    <!-- Review Area-->
    <ReviewList />
    <!--Review Area -->

    <!-- Starting About Area -->
    <div class="starting-about area-padding-large bg-color-grey">
      <div class="starting-about-thumb">
        <img
          class="wow fadeInLeft"
          src="assets/img/about/1.png"
          alt="about thumb"
        />
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-xl-6 offset-xl-6 offset-lg-6 col-sm-6 offset-sm-6 col-12"
          >
            <div class="starting-about-content">
              <h2>CiciBags</h2>
              <p>
                We Focused On High Product Quality And satisfying Service For
                Our Customers. Just Using Device You Can Now Enjoy Shopping In
                CiciBags
              </p>
              <ul class="list-item-style">
                <li>Best & Good Delivery Service</li>
                <li>Certified Products</li>
                <li>Good Quality Products</li>
              </ul>
              <div class="lode-more-course wow fadeInUp">
                <a href="/Product" class="readmore-btn">Shop Now </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Starting About Area -->

    <!-- Popular Product area -->
    <!-- <ProductList /> -->
    <!-- Popular Product area -->

    <!-- online library area start  -->
    <!-- <PopularProduct /> -->
    <!-- online library area end  -->

    <!-- Single Widget -->
    <!-- <ProductCard /> -->
    <!--Single Widget -->

    <!-- posts Area -->
    <!-- <PostPage /> -->
    <!--posts Area -->
  </main>
  <!-- Page Content -->
</template>

<script>
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ReviewList from "@/components/ReviewList.vue";

export default {
  name: "HomePage",
  components: {
    ReviewList,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      slideshow: [
        { image: "slider/1.jpg" },
        { image: "slider/2.jpg" },
        { image: "slider/3.jpg" },
      ],
      service: [
        {
          img: "assets/img/icons/truck.png",
          title: "Free shipping item",
          desc: "For all orders over $500",
          alt: "Service Icon",
        },
        {
          img: "assets/img/icons/refund.png",
          title: "Money back guarantee",
          desc: "100% Money back guarantee",
          alt: "Service Icon",
        },
        {
          img: "assets/img/icons/cash.png",
          title: "Cash on delivery",
          desc: "For all orders over $500",
          alt: "Service Icon",
        },
        {
          img: "assets/img/icons/support.png",
          title: "Help & Support",
          desc: "Call us : +6287834323337",
          alt: "Service Icon",
        },
      ],
    };
  },

  methods: {},
};
</script>
