<template>
  <!-- Footer Area -->
  <footer id="footer" class="footer-area subscribe-footer-bottom pb-footer">
    <!-- Footer Top Area -->
    <div class="footer-top-area div-padding-sm">
      <div class="container" style="padding-left: 40px; padding-right: 40px">
        <div class="great-blowing widgets">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-12 col-12">
              <!-- footer Widget -->
              <div class="single-widget footer-about">
                <h5 class="footer-widget-title">Contact Us</h5>
                <ul class="contact-info mb-2">
                  <li>
                    <p>
                      <a
                        href="https://api.whatsapp.com/send?phone=6287834323337"
                        ><i class="icofont icofont-ui-cell-phone"></i
                        >+6287834323337</a
                      >
                    </p>
                    <p>
                      <a
                        href="https://mail.google.com/mail/u/ciciBags@gmail.com"
                        target="_top"
                        ><i class="icofont icofont-envelope"></i
                        >CiciBags@gmail.com</a
                      >
                    </p>
                    <p><i class="icofont-google-map"></i>Medan, Indonesian</p>
                  </li>
                </ul>
                <h6 class="footer-widget-title mb-0 mt-2 fw-bold">
                  Layanan Pengaduan Konsumen
                </h6>
                <p>
                  Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                  Kementerian Perdagangan Republik Indonesia
                </p>
              </div>
              <!--footer Widget -->
            </div>

            <div class="col-lg-2 col-sm-6 col-md-6 col-6">
              <!-- footer Widget -->
              <div class="single-widget footer-menu quick-link">
                <h5 class="footer-widget-title">CiciBags</h5>
                <ul>
                  <li v-for="item in QuickLink" :key="item">
                    <a :href="item.Url">{{ item.Name }}</a>
                  </li>
                </ul>
              </div>
              <!--footer Widget -->
            </div>

            <div class="col-lg-2 col-sm-6 col-md-6 col-6">
              <!-- footer Widget -->
              <div class="single-widget footer-menu support">
                <h5 class="footer-widget-title">Information</h5>
                <ul>
                  <li v-for="item in Information" :key="item">
                    <a :href="item.Url">{{ item.Name }}</a>
                  </li>
                </ul>
              </div>
              <!--footer Widget -->
            </div>

            <div class="col-lg-4 col-sm-12 col-md-12 col-12">
              <!-- footer Widget -->
              <div class="single-widget instgram">
                <h5 class="footer-widget-title">Popular Search</h5>
                <ul>
                  <li
                    class="text-center p-1 mx-1"
                    v-for="item in Search"
                    :key="item"
                    style="
                      border: 1px solid goldenrod;
                      border-radius: 10px;
                      margin-bottom: 5px;
                    "
                  >
                    <a :href="item.Url" class="text-black">{{ item.Name }}</a>
                  </li>
                </ul>
                <h5 class="footer-widget-title mt-3">Payments</h5>
                <ul>
                  <li class="payments">
                    <img
                      src="<%= BASE_URL %>assets/img/payment/visa.png"
                      alt="Visa"
                    />
                  </li>
                  <li class="payments">
                    <img
                      src="<%= BASE_URL %>assets/img/payment/master-card.png"
                      alt="Master Card"
                    />
                  </li>
                  <li class="payments">
                    <img
                      src="<%= BASE_URL %>assets/img/payment/bca.png"
                      alt="Bca"
                    />
                  </li>
                  <li class="payments">
                    <img
                      src="<%= BASE_URL %>assets/img/payment/mandiri.png"
                      alt="Mandiri"
                    />
                  </li>
                  <li class="payments">
                    <img
                      src="<%= BASE_URL %>assets/img/payment/bni.png"
                      alt="Bni"
                    />
                  </li>
                </ul>
              </div>
              <!--footer Widget -->
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <p class="footer-copyright text-center">
                Copyright &copy; {{ year }} Bags Cici All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Footer Top Area -->

    <!-- Footer Bottom Area -->
    <!-- <div class="footer-bottom-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="footer-copyright text-center text-black">
              Copyright &copy; <a>Bags Cici</a> 2026. All Right Reserved
            </p>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <p class="footer-copyright">&copy; <a>Bags Cici</a> 2026.</p>
          </div>
        </div>
      </div>
    </div> -->
    <!--Footer Bottom Area -->
  </footer>
  <!-- //Footer Area -->
</template>

<script>
export default {
  name: "AppFooter",

  data() {
    return {
      year: new Date().getFullYear(),
      Search: [
        { Name: "coach", Url: "/Product?Brands=" },
        { Name: "louis vuitton", Url: "/Product?Brands=" },
        { Name: "michael kors", Url: "/Product?Brands=" },
        { Name: "kate spade", Url: "/Product?Brands=" },
        { Name: "tory burch", Url: "/Product?Brands=" },
        { Name: "preloved", Url: "/Product?Brands=" },
        { Name: "longchamp", Url: "/Product?Brands=" },
        { Name: "jacquemus", Url: "/Product?Brands=" },
        { Name: "chanel", Url: "/Product?Brands=" },
        { Name: "bags", Url: "/Product?Brands=" },
        { Name: "preloved", Url: "/Product?Brands=" },
        { Name: "gucci", Url: "/Product?Brands=" },
        { Name: "balenciaga", Url: "/Product?Brands=" },
      ],
      Information: [
        { Name: "Policy & Terms", Url: "/PolicyTerms" },
        { Name: "Product & Purchase Policy", Url: "/PurchasePolicy" },
      ],
      QuickLink: [
        { Name: "About Us", Url: "/About" },
        { Name: "Faq", Url: "/Faq" },
        { Name: "Authenticity", Url: "/Authenticity" },
        { Name: "Shop Guide", Url: "/Guide" },
      ],
    };
  },
};
</script>
