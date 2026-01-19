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
  { path: "/Product", component: Product },
  { path: "/Product/:id", component: ProductDetail },
  { path: "/Cart", component: Cart },
  { path: "/Checkout", component: CheckOut },
  { path: "/Faq", component: Faq },
  { path: "/Wishlist", component: WishListPage },
  { path: "/About", component: AboutUs },
  { path: "/PolicyTerms", component: PolicyPage },
  { path: "/PurchasePolicy", component: PolicyPurchase },
  { path: "/Authenticity", component: AuthenticityPage },
];

const base = process.env.NODE_ENV === "production" ? "/CiciBags/" : "/";

const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
