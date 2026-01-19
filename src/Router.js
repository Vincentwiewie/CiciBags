import Cart from "./Product/CartPage.vue";
import Home from "./Product/HomePage.vue";
import Product from "./Product/ProductPage.vue";
import CheckOut from "./Product/CheckoutPage.vue";
import Faq from "./Product/FaqPage.vue";
import WishListPage from "./Product/WishListPage.vue";
import AboutUs from "./Product/AboutUs.vue";
import PolicyPage from "./Product/PolicyPage.vue";
import PolicyPurchase from "./Product/PolicyPurchase.vue";
import AuthenticityPage from "./Product/AuthenticityPage.vue";
import ProductDetail from "./components/ProductDetail.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/Product", component: Product, name: "Product" },
  {
    path: "/Product/:id",
    component: ProductDetail,
    name: "ProductDetail",
  },
  { path: "/Cart", component: Cart, name: "Cart" },
  { path: "/Checkout", component: CheckOut, name: "Checkout" },
  { path: "/Faq", component: Faq, name: "Faq" },
  { path: "/Wishlist", component: WishListPage, name: "Wishlist" },
  { path: "/About", component: AboutUs, name: "About" },
  { path: "/PolicyTerms", component: PolicyPage, name: "PolicyTerms" },
  {
    path: "/PurchasePolicy",
    component: PolicyPurchase,
    name: "PurchasePolicy",
  },
  { path: "/Authenticity", component: AuthenticityPage, name: "Authenticity" },
];

const base = process.env.NODE_ENV === "production" ? "/CiciBags/" : "/";

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
