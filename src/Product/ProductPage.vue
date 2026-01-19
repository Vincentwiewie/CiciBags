<template>
  <div class="container mx-lg-5 p-5">
    <div
      class="main-product-thumbnail area-padding-bottom area-padding-top details-product-wraper sidebar-style"
    >
      <div class="row">
        <div class="col-lg-3 col-md-12 col-12 p-4 d-none d-lg-block">
          <AppSideBar
            :shopby="ShopBy"
            :selected="Selected"
            :sizes="sizes"
            @SelectedChange="FilterProduct"
          ></AppSideBar>
        </div>
        <div class="col-lg-9 col-md-12 col-12 p-2">
          <ProductList
            :Product="Product"
            :Brands="Brands"
            :selected="Selected"
            @SelectedChange="FilterProduct"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSideBar from "@/components/AppSideBar.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "ProductPage",
  components: {
    ProductList,
    AppSideBar,
  },

  data() {
    return {
      // Region Data
      Product: [
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
        {
          image: "assets/img/product/1/5.jpg",
          alt: "",
          price: 20.0,
          name: "Brilliance Bead Alternating",
          star: 0,
          actualPrice: 35.0,
        },
      ],
      Brands: [
        {
          id: 0,
          name: "Michael Kors",
          href: "/product/",
        },
        {
          id: 1,
          name: "Tory Burch",
          href: "/product/",
        },
        {
          id: 2,
          name: "Gucci",
          href: "/product/",
        },
        {
          id: 3,
          name: "Prada",
          href: "/product/",
        },
        {
          id: 4,
          name: "Bottega Veneta",
          href: "/product/",
        },
        {
          id: 5,
          name: "Christian Dior",
          href: "/product/",
        },
        {
          id: 6,
          name: "Louis Vuitton",
          href: "/product/",
        },
        {
          id: 7,
          name: "Balenciaga",
          href: "/product/",
        },
      ],
      ShopBy: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "Cozy knits",
        },
        {
          id: 3,
          name: "Boots",
        },
        {
          id: 4,
          name: "Dresses",
        },
        {
          id: 5,
          name: "Jeans",
        },
        {
          id: 6,
          name: "Cold-weather accessories",
        },
        {
          id: 7,
          name: "Activewear",
        },
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],

      // Region Selected
      Selected: {
        SelectedBrands: "",
        SelectedType: "",
        SelectedSize: "",
        SelectedFilter: "",
        SelectedPrice: 0,
        SearchBy: "",
      },
    };
  },

  onMounted() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.NewProduct = data.NewProduct;
        this.TopProduct = data.TopProduct;
        this.BestProduct = data.BestProduct;
      })
      .catch((error) => {
        console.error("Error fetching products data:", error);
      });
  },

  methods: {
    FilterProduct(data) {
      console.log(data);
      this.selected = data;
    },
  },
};
</script>
