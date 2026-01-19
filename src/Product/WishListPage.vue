<template>
  <!-- Breacrumb Area -->
  <div class="breadcrumb-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div class="cr-breadcrumb text-center">
            <h1>Wishlist</h1>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="post-right-sidebar.html">post</a>
              </li>
              <li>Wishlist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Breacrumb Area -->

  <!-- Main Content -->
  <main class="page-content">
    <!-- Wishlist are start-->
    <div class="cart-area area-padding-bottom-sm area-padding-top-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="catagory-title cat-tit-6">
              <h4>My Wishlist On garnish</h4>
            </div>
            <form method="post" action="#">
              <div class="table-responsive">
                <table class="shop_table cart wish table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product Name</th>
                      <th class="product-price">Unit Price</th>
                      <th class="product-quantity">Stock Status</th>
                      <th class="product-subtotal">Add Item</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="cart_item">
                      <td class="item-img">
                        <a href="#"
                          ><img src="/assets/img/product/1.jpg" alt="" />
                        </a>
                      </td>
                      <td class="item-title">
                        <a href="#">Fusce Laoreet Volutpat </a>
                      </td>
                      <td class="item-value">$130.00</td>
                      <td class="item-qty">In Stock</td>
                      <td class="item-value">
                        <button type="submit" class="default-btn">
                          Add To Cart
                        </button>
                      </td>
                      <td class="remove-item">
                        <a href="#"><i class="icofont-delete-alt"></i></a>
                      </td>
                    </tr>
                    <tr class="cart_item">
                      <td class="item-img">
                        <a href="#"><img src="img/product/2.jpg" alt="" /> </a>
                      </td>
                      <td class="item-title">
                        <a href="#">Fusce Laoreet Volutpat </a>
                      </td>
                      <td class="item-value">$140.00</td>
                      <td class="item-qty">In Stock</td>
                      <td class="item-value">
                        <button type="submit" class="default-btn">
                          Add To Cart
                        </button>
                      </td>
                      <td class="remove-item">
                        <a href="#"><i class="icofont-delete-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Wishlist are end-->
  </main>
  <!-- Page Content -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
