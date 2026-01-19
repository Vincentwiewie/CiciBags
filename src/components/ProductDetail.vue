<template>
  <main class="page-content">
    <!-- Product Thumbnail Start -->
    <div
      class="main-product-thumbnail area-padding-bottom-xs area-padding-top-sm details-product-wraper p-5"
    >
      <div class="container" style="padding: 5% 7% 5% 7%">
        <div class="row">
          <!-- Main Thumbnail Image Start -->
          <div class="col-lg-5 col-md-6 mb-all-40">
            <div class="tab-content single-img-thumb">
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
                <swiper-slide>
                  <div id="thumb1" class="tab-pane fade show active">
                    <a
                      data-fancybox="single_images"
                      src="assets/img/product/1/1.jpg"
                      ><img src="assets/img/product/1/1.jpg" alt="product-view"
                    /></a>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div id="thumb1" class="tab-pane fade show active">
                    <a
                      data-fancybox="single_images"
                      src="assets/img/product/1/1.jpg"
                      ><img src="assets/img/product/1/1.jpg" alt="product-view"
                    /></a>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div id="thumb1" class="tab-pane fade show active">
                    <a
                      data-fancybox="single_images"
                      src="assets/img/product/1/1.jpg"
                      ><img src="assets/img/product/1/1.jpg" alt="product-view"
                    /></a>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="details-product-thumbnail">
              <div
                class="product-multiple-item nav"
                role="tablist"
                style="
                  display: flex;
                  flex-direction: row;
                  gap: 10px;
                  flex-wrap: nowrap;
                  align-items: center;
                "
              >
                <a class="active" data-bs-toggle="tab" href="#thumb1"
                  ><img
                    src="assets/img/product/1/1.jpg"
                    alt="product-thumbnail"
                    style="width: 100%; height: auto; flex: 1"
                /></a>
                <a data-bs-toggle="tab" href="#thumb2"
                  ><img
                    src="assets/img/product/1/2.jpg"
                    alt="product-thumbnail"
                    style="width: 100%; height: auto; flex: 1"
                /></a>
                <a data-bs-toggle="tab" href="#thumb3"
                  ><img
                    src="assets/img/product/1/3.jpg"
                    alt="product-thumbnail"
                    style="width: 100%; height: auto; flex: 1"
                /></a>
              </div>
            </div>
          </div>
          <!-- Main Thumbnail Image End -->

          <!-- Thumbnail Description Start -->
          <div class="col-lg-7 col-md-6">
            <div class="thubnail-desc fix">
              <div class="item-content product-details-content">
                <h4>Enchanted Disney Mulan</h4>
                <div class="single-item-rating">
                  <div class="spir si-ratting">
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <span>(05)</span>
                  </div>
                </div>
                <div class="item-price">
                  <span>$20.00</span>
                  <span><del>$35.00</del></span>
                </div>
                <div class="list-item-des">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                    eum illo distinctio nihil laborum accusantium omnis numquam
                    animi minima, cum neque minus eos! Eius facere atque commodi
                    autem, illum assumenda. cum neque minus eos! Eius facere
                    atque commodi autem, illum assumenda.
                  </p>
                </div>

                <div class="item-action">
                  <a
                    class="view-plus quick-view"
                    title="Quick View"
                    data-bs-toggle="modal"
                    data-bs-target="#product-window"
                    href="#"
                    ><i class="icofont-ui-zoom-in"></i>
                  </a>

                  <a class="view-cart" title="Add To Cart" href="#">
                    <i class="icofont-cart"></i>
                  </a>
                  <a class="view-reload" href="#">
                    <i class="icofont-heart-alt"></i>
                  </a>
                </div>
              </div>

              <form action="#">
                <div class="product-info-stock d-flex">
                  Availability:<span>In Stock </span>
                </div>

                <div class="quatity-stock">
                  <ul class="d-flex flex-wrap align-items-center">
                    <li>
                      <a href="#" title="Add To Cart" class="aqbw default-btn">
                        <i class="icofont-cart"></i><span>add to cart</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        title="Add To Wishlist"
                        class="aqbw default-btn single-wishlist"
                      >
                        <i class="icofont-heart-alt"></i
                        ><span>add to wishlist</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <label class="mr-5">Product Details</label>

                  <ul class="d-flex flex-column flex-wrap g-0">
                    <li><label>Size: S, M</label></li>
                    <li><label>Color: White, Black</label></li>
                    <li><label>Coated canvas & leather upper</label></li>
                    <li><label>Serial number 49T8FUFR1B</label></li>
                    <li><label>Synthetic Leather Insole</label></li>
                    <li><label>Synthetic Leather Lining</label></li>
                    <li><label>Rubber Outsole</label></li>
                  </ul>
                </div>
              </form>

              <div class="course-details-social-icons">
                <div class="social-icons color-icon product-dtails-share">
                  <label>Share This Item : </label>
                  <ul>
                    <li class="facebook">
                      <a href="course-details.html#">
                        <i class="icofont-facebook"></i>
                      </a>
                    </li>
                    <li class="twitter">
                      <a href="course-details.html#/">
                        <i class="icofont-twitter"></i>
                      </a>
                    </li>
                    <li class="pinterest">
                      <a href="course-details.html#">
                        <i class="icofont-pinterest"></i>
                      </a>
                    </li>
                    <li class="vimeo">
                      <a href="course-details.html#">
                        <i class="icofont-vimeo"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Thumbnail Description End -->
        </div>

        <!-- Related Product area start  -->
        <div class="single-related-product p-2">
          <h5
            class="small-title text-center"
            style="
              color: #c29958;
              font-weight: 800;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
              letter-spacing: 0.5px;
            "
          >
            Related Products
          </h5>
          <div class="row related_product_active slider-nav-btn-2">
            <!--single item start-->
            <div class="col-lg-3 col-md-6 col-12">
              <div class="item-wrapper">
                <div class="item-img">
                  <div class="offer-tag">
                    <span>New</span>
                  </div>
                  <a href="product-details.html">
                    <img src="assets/img/product/1/1.jpg" alt="" />
                  </a>
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
                    <a href="product-details.html">Diamond Octagonal Frame</a>
                  </h4>
                  <div class="single-item-rating">
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <span>(02)</span>
                  </div>
                  <div class="item-price">
                    <span>$20.00</span>
                    <span><del>$35.00</del></span>
                  </div>
                </div>
              </div>
            </div>
            <!--single item end-->

            <!--single item start-->
            <div class="col-lg-3 col-md-6 col-12">
              <div class="item-wrapper">
                <div class="item-img">
                  <div class="offer-tag">
                    <span class="disc">25%</span>
                  </div>
                  <a href="product-details.html">
                    <img src="assets/img/product/1/2.jpg" alt="" />
                  </a>
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
                    <a href="product-details.html">Enchanted Disney Mulan</a>
                  </h4>
                  <div class="single-item-rating">
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <span>(03)</span>
                  </div>
                  <div class="item-price">
                    <span>$30.00</span>
                    <span><del>$30.00</del></span>
                  </div>
                </div>
              </div>
            </div>
            <!--single item end-->

            <!--single item start-->
            <div class="col-lg-3 col-md-6 col-12">
              <div class="item-wrapper">
                <div class="item-img">
                  <a href="product-details.html">
                    <img src="assets/img/product/1/3.jpg" alt="" />
                  </a>
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
                    <a href="product-details.html">Diamond Layered Oval</a>
                  </h4>
                  <div class="single-item-rating">
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <span>(03)</span>
                  </div>
                  <div class="item-price">
                    <span>$156.00</span>
                    <span><del>$170.00</del></span>
                  </div>
                </div>
              </div>
            </div>
            <!--single item end-->

            <!--single item start-->
            <div class="col-lg-3 col-md-6 col-12">
              <div class="item-wrapper">
                <div class="item-img">
                  <div class="offer-tag">
                    <span>New</span>
                  </div>
                  <a href="product-details.html">
                    <img src="assets/img/product/1/4.jpg" alt="" />
                  </a>
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
                    <a href="product-details.html">Diamond Octagonal Frame</a>
                  </h4>
                  <div class="single-item-rating">
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <i class="icofont-star"></i>
                    <span>(02)</span>
                  </div>
                  <div class="item-price">
                    <span>$20.00</span>
                    <span><del>$35.00</del></span>
                  </div>
                </div>
              </div>
            </div>
            <!--single item end-->
          </div>
        </div>
        <!-- Related Product area end  -->
      </div>
    </div>
    <!-- Product Thumbnail End -->
  </main>
</template>

<script>
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  name: "ProductDetail",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      product: {
        name: "Enchanted Disney Mulan",
        price: 20.0,
        actualPrice: 35.0,
        rating: 5,
        reviewCount: 5,
        Availability: "In Stock",
        Sizes: ["S", "M", "L"],
        Color: ["Black", "White"],
      },
    };
  },
};
</script>
