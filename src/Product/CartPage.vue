<template>
  <main class="page-content">
    <!-- cart are start-->
    <div class="cart-area area-padding-bottom-sm area-padding-top-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <form method="post" action="#">
              <div class="table-responsive">
                <table class="shop_table cart table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product Name</th>
                      <th class="product-price">Unit Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-subtotal">Total</th>
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
                      <td class="item-qty">
                        <input type="number" value="1" min="1" />
                      </td>
                      <td class="item-value"><strong> $130.00</strong></td>
                      <td class="remove-item">
                        <a href="#"><i class="icofont-delete-alt"></i></a>
                      </td>
                    </tr>
                    <tr class="cart_item">
                      <td class="item-img">
                        <a href="#"
                          ><img src="/assets/img/product/2.jpg" alt="" />
                        </a>
                      </td>
                      <td class="item-title">
                        <a href="#">Fusce Laoreet Volutpat </a>
                      </td>
                      <td class="item-value">$140.00</td>
                      <td class="item-qty">
                        <input type="number" value="1" min="1" />
                      </td>
                      <td class="item-value"><strong> $140.00</strong></td>
                      <td class="remove-item">
                        <a href="#"><i class="icofont-delete-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="update-continue-btn d-flex justify-content-end">
                  <button type="submit" class="default-btn">
                    Continue Shopping
                  </button>
                </div>
              </div>

              <div class="cart-bottom-area">
                <div class="row">
                  <div class="col-md-8 col-sm-8 col-xs-12">
                    <div class="update-coupne-area">
                      <div class="coupn-area">
                        <div class="catagory-title cat-tit-5 mb-20">
                          <h3>Coupon</h3>
                          <p>Enter your coupon code if you have one.</p>
                        </div>

                        <div class="input-box input-box-2">
                          <input
                            type="text"
                            placeholder="Coupn"
                            class="info"
                            name="subject"
                          />
                          <button type="submit" class="default-btn">
                            Apply Coupon
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="cart-total-area">
                      <div class="catagory-title cat-tit-5 mb-20 text-end">
                        <h3>Cart Totals</h3>
                      </div>
                      <div class="sub-shipping">
                        <p>Subtotal <span>$150.00</span></p>
                        <p>Shipping <span>$3.00</span></p>
                      </div>
                      <div class="shipping-method text-end">
                        <div class="shipp">
                          <input type="radio" name="ship" id="pay-toggle" />
                          <label for="pay-toggle">Flat Rate</label>
                        </div>
                        <div class="shipp">
                          <input type="radio" name="ship" id="pay-toggle2" />
                          <label for="pay-toggle2">Direct Bank Transfer</label>
                        </div>
                        <p><a href="#">Calculate Shipping</a></p>
                      </div>
                      <div class="process-cart-total">
                        <p>Total <span>$150.00</span></p>
                      </div>
                      <div class="process-checkout-btn text-end">
                        <button type="submit" class="default-btn">
                          Process To Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- cart are end-->
  </main>
</template>

<script>
export default {
  name: "CartPage",
  props: [],
  data() {},
};
</script>
