<template>
  <div class="product-tab-area area-padding-bottom-xs">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
          <div class="section-title text-center">
            <h2>Popular Products</h2>
            <p>Our best luxury products</p>
          </div>
        </div>
        <!-- Product Categorie List Start -->
        <div class="col-lg-12 col-md-12">
          <div class="product-tab-list nav px-5">
            <swiper
              :slidesPerView="3"
              :spaceBetween="20"
              centered-slides
              :modules="modules"
              :initial-slide="1"
              slide-to-clicked-slide
              clickable="true"
              class="mySwiper gold-swiper"
              @slide-change="SelectedChange($event)"
            >
              <swiper-slide v-for="item in Brands" :key="item.id">
                <div class="slide-box">
                  <h6>{{ item.name }}</h6>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Grid & List View End -->
          <div class="shop-area product-tab-content">
            <!-- Grid & List Main Area End -->
            <div class="tab-content Products-area">
              <div class="tab-pane fade show active">
                <div class="row">
                  <!--single item start-->
                  <div
                    v-for="product in Product"
                    :key="product.id"
                    class="col-lg-3 col-md-4 col-6"
                  >
                    <div class="item-wrapper">
                      <div class="item-img">
                        <div class="offer-tag">
                          <span>New</span>
                        </div>
                        <router-link to="/Product/1">
                          <a>
                            <img :src="product.image" :alt="product.alt" />
                          </a>
                        </router-link>

                        <div class="item-action">
                          <a
                            class="view-plus"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#product-window"
                            href="#product-window"
                          >
                            <i class="icofont-ui-zoom-in"></i>
                          </a>

                          <a class="view-cart" title="Add To Cart" href="#">
                            <i class="icofont-cart"></i>
                          </a>
                          <a class="view-reload" href="#">
                            <i class="icofont-heart-alt"></i>
                          </a>
                        </div>
                      </div>
                      <div class="item-content">
                        <h4>
                          <router-link to="/Product/1">
                            <a>{{ product.name }}</a>
                          </router-link>
                        </h4>
                        <div class="single-item-rating">
                          <i class="icofont-star"></i>
                          <i class="icofont-star"></i>
                          <i class="icofont-star"></i>
                          <i class="icofont-star"></i>
                          <i class="icofont-star"></i>
                          <span>({{ product.star }})</span>
                        </div>
                        <div class="item-price">
                          <span>${{ product.price }}</span>
                          <span
                            ><del>{{
                              product.actualPrice
                                ? `$${product.actualPrice}`
                                : ""
                            }}</del></span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--single item end-->
                </div>
                <!-- Row End -->
              </div>
            </div>
            <!-- Grid & List Main Area End -->
          </div>
        </div>
        <!-- product Categorie List End -->
      </div>
    </div>
  </div>
</template>

<style scoped>
/* default slides */
.gold-swiper .swiper-slide {
  opacity: 0.25;
  transition: all 0.3s ease;
}

/* active slide */
.gold-swiper .swiper-slide-active {
  opacity: 1;
}

/* gold highlight box */
.gold-swiper .swiper-slide-active .slide-box {
  border: 2px solid gold;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
  background: linear-gradient(135deg, #d4af37, #fff1a8);
  color: #000;
}

/* slide styling */
.slide-box {
  width: auto;
  height: 20px;
  padding-left: 20%;
  padding-right: 20%;
  border-radius: 12px;
  background: #111;
  color: #fff;
  justify-content: center;
}
</style>

<script>
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

export default {
  name: "ProductList",
  props: {
    Product: [],
    Brands: [],
    selected: {
      SelectedBrands: String,
      SelectedType: String,
      SelectedSize: String,
      SelectedFilter: String,
      SelectedPrice: Number,
      SearchBy: String,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      selectedData: this.selected,
      modules: [Pagination],
    };
  },

  mounted() {
    this.Pagination = {
      el: ".swiper-pagination",
    };
    console.log("Se", this.modules);
  },

  methods: {
    SelectedChange(event) {
      console.log("Event", event.activeIndex);
      this.selectedData.SelectedBrands = this.Brands[event.activeIndex].name;
      this.$emit("SelectedChange", this.selectedData);
    },
  },
};
</script>
