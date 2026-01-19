<template>
  <div class="header-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-5 col-sm-5 hidden-xs col-12">
          <span
            >follow our social media
            <div class="top-bar-left">
              <div class="content">
                <a><i class="icofont-instagram"></i></a>
              </div>
              <div class="content">
                <a><i class="icofont icofont-youtube"></i></a>
              </div>
              <div class="content">
                <a><i class="icofont-whatsapp"></i></a>
              </div>
            </div>
          </span>
        </div>
        <div class="col-lg-5 col-md-7 col-sm-7 col-xs-12 col-12">
          <div class="top-bar-right">
            <div class="content">
              <router-link to="/Login"
                ><i class="icofont icofont-login"></i> My Account</router-link
              >
            </div>
            <div class="content">
              <router-link to="/Wishlist"
                ><i class="icofont-heart-alt"></i> Wishlist</router-link
              >
            </div>
            <div class="content">
              <router-link to="/Cart"
                ><i class="icofont-cart"></i> Cart</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header
    class="header header-style-1 sticky-header mega-menu-main-wrap common-header-style"
  >
    <div class="container d-none d-lg-block">
      <div class="row">
        <div class="col-lg-12">
          <div class="header-inner">
            <div class="logo default_logo">
              <router-link to="/">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </router-link>
            </div>
            <div class="logo sticky_logo">
              <router-link to="/">
                <img src="assets/img/logo/logo-sticky.png" alt="Sticky logo" />
              </router-link>
            </div>

            <nav class="menu">
              <ul>
                <li v-for="nav in Navbar" :key="nav" class="megamenu-area">
                  <a>{{ nav.Name }}</a>
                  <ul class="megamenu-area-wrap">
                    <li class="megamenu-area-single">
                      <a class="collecion_heading" href="shop.html"
                        >By Category</a
                      >
                      <ul>
                        <li v-for="item in nav.ByCategory" :key="item">
                          <a :href="item.url">{{ item.Name }}</a>
                        </li>
                      </ul>
                    </li>
                    <li class="megamenu-area-single">
                      <a class="collecion_heading" href="shop.html"
                        >By Designer</a
                      >
                      <ul>
                        <li v-for="item in nav.ByDesigner" :key="item">
                          <a :href="item.url">{{ item.Name }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="menu">
                  <a href="" class="text-danger">Sale</a>
                </li>
              </ul>
            </nav>

            <div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu-wrapper">
      <div class="container d-block d-lg-none">
        <div class="mobile-menu clearfix mean-container">
          <router-link class="mobile-logo" to="/">
            <img src="assets/img/logo/logo-sticky.png" alt="mobile logo" />
          </router-link>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
  </header>
  <!-- //Header -->
</template>

<script>
export default {
  mounted() {
    this.initMeanMenu();
    window.addEventListener("resize", this.handleMeanResize);
  },
  beforeUnmount() {
    this.destroyMeanMenu();
    window.removeEventListener("resize", this.handleMeanResize);
  },
  data() {
    return {
      Navbar: [
        {
          Name: "New Arrivals",
          ByCategory: [
            { Name: "Editor's Pick", url: "" },
            { Name: "Good Deals", url: "" },
          ],
          ByDesigner: [
            { Name: "Michael Kors", url: "" },
            { Name: "Coach", url: "" },
            { Name: "Kate Spade", url: "" },
            { Name: "Louis Vuitton", url: "" },
            { Name: "Tory Burch", url: "" },
            { Name: "Gucci", url: "" },
            { Name: "Marc Jacobs", url: "" },
            { Name: "Chanel", url: "" },
            { Name: "Christian Dior", url: "" },
            { Name: "Popmart", url: "" },
          ],
        },
        {
          Name: "Bags",
          ByCategory: [
            { Name: "Belt Bags", url: "" },
            { Name: "Travel Bags", url: "" },
            { Name: "Totes", url: "" },
            { Name: "Shoulder Bags", url: "" },
            { Name: "Satchels", url: "" },
            { Name: "Laptop Bags", url: "" },
            { Name: "Backpacks", url: "" },
            { Name: "Briefcase", url: "" },
            { Name: "Clutches", url: "" },
            { Name: "Crossbody Bags", url: "" },
          ],
          ByDesigner: [
            { Name: "Michael Kors", url: "" },
            { Name: "Kate Spade", url: "" },
            { Name: "Coach", url: "" },
            { Name: "Tory Burch", url: "" },
            { Name: "Louis Vuitton", url: "" },
            { Name: "Marc Jacobs", url: "" },
            { Name: "Gucci", url: "" },
            { Name: "Longchamp", url: "" },
            { Name: "Christian Dior", url: "" },
            { Name: "Chanel", url: "" },
          ],
        },
        {
          Name: "Accessories",
          ByCategory: [
            { Name: "Earring", url: "" },
            { Name: "Tumbler", url: "" },
            { Name: "Hat", url: "" },
            { Name: "Jewelry", url: "" },
            { Name: "Key Chain", url: "" },
            { Name: "Scarves", url: "" },
            { Name: "Sunglasses And Eyewear", url: "" },
            { Name: "Tech Accessories", url: "" },
            { Name: "Belts", url: "" },
            { Name: "Wallets", url: "" },
            { Name: "Watches", url: "" },
          ],
          ByDesigner: [
            { Name: "Coach", url: "" },
            { Name: "Popmart", url: "" },
            { Name: "Michael Kors", url: "" },
            { Name: "Kate Spade", url: "" },
            { Name: "Louis Vuitton", url: "" },
            { Name: "Gucci", url: "" },
            { Name: "Hermes", url: "" },
            { Name: "Christian Dior", url: "" },
            { Name: "Chanel", url: "" },
            { Name: "Jellycat", url: "" },
          ],
        },
        {
          Name: "Shoes",
          ByCategory: [
            { Name: "Heels", url: "" },
            { Name: "Sandals", url: "" },
            { Name: "Sneakers", url: "" },
            { Name: "Wedges", url: "" },
            { Name: "Flats", url: "" },
          ],
          ByDesigner: [
            { Name: "Michael Kors", url: "" },
            { Name: "Tory Burch", url: "" },
            { Name: "Gucci", url: "" },
            { Name: "Prada", url: "" },
            { Name: "Bottega Veneta", url: "" },
            { Name: "Christian Dior", url: "" },
            { Name: "Louis Vuitton", url: "" },
            { Name: "Balenciaga", url: "" },
            { Name: "Onitsuka Tiger", url: "" },
            { Name: "Salvatore Ferragamo", url: "" },
          ],
        },
        {
          Name: "Mens",
          ByCategory: [
            { Name: "Accessories", url: "" },
            { Name: "Bags", url: "" },
            { Name: "Shoes", url: "" },
          ],
          ByDesigner: [
            { Name: "Coach", url: "" },
            { Name: "Michael Kors", url: "" },
            { Name: "Fossil", url: "" },
            { Name: "Louis Vuitton", url: "" },
            { Name: "Kenzo", url: "" },
            { Name: "Givenchy", url: "" },
            { Name: "Hugo Boss", url: "" },
            { Name: "Bally", url: "" },
            { Name: "Bottega Veneta", url: "" },
            { Name: "Prada", url: "" },
          ],
        },
        {
          Name: "Preloved",
          ByCategory: [
            { Name: "Wallets", url: "" },
            { Name: "Shoes", url: "" },
            { Name: "Bags", url: "" },
          ],
          ByDesigner: [
            { Name: "Michael Kors", url: "" },
            { Name: "Coach", url: "" },
            { Name: "Kate Spade", url: "" },
            { Name: "Louis Vuitton", url: "" },
            { Name: "Tory Burch", url: "" },
            { Name: "Gucci", url: "" },
            { Name: "Marc Jacobs", url: "" },
            { Name: "Chanel", url: "" },
            { Name: "Christian Dior", url: "" },
            { Name: "Popmart", url: "" },
          ],
        },
      ],
    };
  },
  methods: {
    initMeanMenu() {
      this.$nextTick(() => {
        const $ = window.$ || window.jQuery;
        if (!($ && typeof $.fn.meanmenu === "function")) return;

        // remove any previous instances to avoid duplicate controls
        $(".mean-bar, .mean-push, .mean-nav").remove();
        $(
          ".header-style-1 nav.menu, .header-style-2 nav.menu, .header-style-3 nav.menu",
        ).show();

        $(
          ".header-style-1 nav.menu, .header-style-2 nav.menu, .header-style-3 nav.menu",
        ).meanmenu({
          meanMenuClose: '<i class="icofont icofont-close"></i>',
          meanMenuCloseSize: "18px",
          meanScreenWidth: "991",
          meanExpandableChildren: true,
          meanMenuContainer: ".mobile-menu",
          onePage: true,
        });
      });
    },
    destroyMeanMenu() {
      const $ = window.$ || window.jQuery;
      if (!$) return;
      $(".mean-bar, .mean-push, .mean-nav").remove();
      $(
        ".header-style-1 nav.menu, .header-style-2 nav.menu, .header-style-3 nav.menu",
      ).show();
    },
    handleMeanResize() {
      // debounce re-init on resize
      if (this._meanResizeTimer) clearTimeout(this._meanResizeTimer);
      this._meanResizeTimer = setTimeout(() => {
        try {
          this.destroyMeanMenu();
          this.initMeanMenu();
        } catch (e) {
          return null;
        }
      }, 200);
    },
  },
};
</script>
