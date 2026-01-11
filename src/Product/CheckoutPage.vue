<template>
  <!-- Breacrumb Area -->
  <div class="breadcrumb-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div class="cr-breadcrumb text-center">
            <h1>Checkout</h1>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="post-right-sidebar.html">post</a>
              </li>
              <li>Checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Breacrumb Area -->

  <!-- Main Content -->
  <main class="page-content">
    <!-- Checkout are start-->
    <div class="checkout-area area-padding-bottom-sm area-padding-top-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="coupne-customer-area mb50">
              <div
                class="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div class="panel panel-checkout">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <img src="images/icons/acc.jpg" alt="" /> Returning
                      customer?
                      <a
                        class="collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Click here to login
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="panel-body">
                      <div class="sm-des pb20">
                        If you have shopped with us before, please enter your
                        details in the boxes below. If you are a new customer
                        please proceed to the Billing & Shipping section.
                      </div>
                      <div class="first-last-area">
                        <div class="input-box mtb-20">
                          <label>User Name Or Email</label>
                          <input
                            type="email"
                            placeholder="Your Email"
                            class="info"
                            name="email"
                          />
                        </div>
                        <div class="input-box">
                          <label>Password</label>
                          <input
                            type="password"
                            placeholder="Password"
                            class="info"
                            name="padd"
                          />
                        </div>
                        <div class="frm-action cc-area">
                          <div class="input-box tci-box">
                            <button type="submit" class="default-btn">
                              Login
                            </button>
                          </div>
                          <span>
                            <input type="checkbox" class="remr" /> Remember me
                          </span>
                          <a class="forgotten forg" href="#"
                            >Forgotten Password?</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel panel-checkout">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <img src="images/icons/acc.jpg" alt="" /> Have A Coupon?
                      <a
                        class="collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Click here to enter your code
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="panel-body coupon-body">
                      <div class="first-last-area">
                        <div class="input-box mtb-20">
                          <input
                            type="text"
                            placeholder="Coupon Code"
                            class="info"
                            name="code"
                          />
                        </div>
                        <div class="frm-action">
                          <div class="input-box tci-box">
                            <button type="submit" class="default-btn">
                              Apply Coupon
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12 col-12">
                <div class="billing-details">
                  <div class="contact-text right-side">
                    <h2>Billing Details</h2>
                    <form action="#">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <div class="input-box">
                            <label>First Name <em>*</em></label>
                            <input
                              type="text"
                              name="namm"
                              class="info"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <div class="input-box">
                            <label>Last Name<em>*</em></label>
                            <input
                              type="text"
                              name="namm"
                              class="info"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="input-box">
                            <label>Company Name</label>
                            <input
                              type="text"
                              name="cpany"
                              class="info"
                              placeholder="Company Name"
                            />
                          </div>
                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <div class="input-box">
                            <label>Email Address<em>*</em></label>
                            <input
                              type="email"
                              name="email"
                              class="info"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <div class="input-box">
                            <label>Phone Number<em>*</em></label>
                            <input
                              type="text"
                              name="phone"
                              class="info"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>

                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="input-box">
                            <label>Address <em>*</em></label>
                            <input
                              type="text"
                              name="add1"
                              class="info"
                              placeholder="Street Address"
                            />
                            <input
                              type="text"
                              name="add2"
                              class="info"
                              placeholder="Apartment, suite, unit etc. (optional)"
                            />
                          </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="input-box">
                            <label>Town/City <em>*</em></label>
                            <input
                              type="text"
                              name="add1"
                              class="info"
                              placeholder="Town/City"
                            />
                          </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="input-box">
                            <label>Post Code/Zip Code<em>*</em></label>
                            <input
                              type="text"
                              name="zipcode"
                              class="info"
                              placeholder="Zip Code"
                            />
                          </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="create-acc clearfix">
                            <div class="acc-toggle">
                              <input type="checkbox" id="acc-toggle" />
                              <label for="acc-toggle"
                                >Create an Account ?</label
                              >
                            </div>
                            <div class="create-acc-body">
                              <div class="sm-des">
                                Create an account by entering the information
                                below. If you are a returning customer please
                                login at the top of the page.
                              </div>
                              <div class="input-box">
                                <label>Account password <em>*</em></label>
                                <input
                                  type="password"
                                  name="pass"
                                  class="info"
                                  placeholder="Password"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="billing-details">
                  <div class="right-side">
                    <div class="ship-acc clearfix">
                      <div class="ship-toggle pb20">
                        <input type="checkbox" id="ship-toggle" />
                        <label for="ship-toggle"
                          >Ship to a different address?</label
                        >
                      </div>
                      <div class="ship-acc-body">
                        <form action="#">
                          <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <div class="input-box">
                                <label>First Name <em>*</em></label>
                                <input
                                  type="text"
                                  name="namm"
                                  class="info"
                                  placeholder="First Name"
                                />
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <div class="input-box">
                                <label>Last Name<em>*</em></label>
                                <input
                                  type="text"
                                  name="namm"
                                  class="info"
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="input-box">
                                <label>Company Name</label>
                                <input
                                  type="text"
                                  name="cpany"
                                  class="info"
                                  placeholder="Company Name"
                                />
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <div class="input-box">
                                <label>Email Address<em>*</em></label>
                                <input
                                  type="email"
                                  name="email"
                                  class="info"
                                  placeholder="Your Email"
                                />
                              </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <div class="input-box">
                                <label>Phone Number<em>*</em></label>
                                <input
                                  type="text"
                                  name="phone"
                                  class="info"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="input-box">
                                <label>Address <em>*</em></label>
                                <input
                                  type="text"
                                  name="add1"
                                  class="info"
                                  placeholder="Street Address"
                                />
                                <input
                                  type="text"
                                  name="add2"
                                  class="info"
                                  placeholder="Apartment, suite, unit etc. (optional)"
                                />
                              </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="input-box">
                                <label>Town/City <em>*</em></label>
                                <input
                                  type="text"
                                  name="add1"
                                  class="info"
                                  placeholder="Town/City"
                                />
                              </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="input-box">
                                <label>Post Code/Zip Code<em>*</em></label>
                                <input
                                  type="text"
                                  name="zipcode"
                                  class="info"
                                  placeholder="Zip Code"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="form">
                      <div class="input-box">
                        <label>Order Notes</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          class="area-tex"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-12 col-12">
                <div class="checkout-payment-area">
                  <div class="checkout-total">
                    <h3>Your order</h3>
                    <form action="#" method="post">
                      <div class="table-responsive">
                        <table class="checkout-area table">
                          <thead>
                            <tr class="cart_item check-heading">
                              <td class="ctg-type">Product</td>
                              <td class="cgt-des">Total</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="cart_item check-item prd-name">
                              <td class="ctg-type">
                                Product Title × <span>1</span>
                              </td>
                              <td class="cgt-des">$1,026.00</td>
                            </tr>
                            <tr class="cart_item">
                              <td class="ctg-type">Subtotal</td>
                              <td class="cgt-des">$1,026.00</td>
                            </tr>
                            <tr class="cart_item">
                              <td class="ctg-type">Shipping</td>
                              <td class="cgt-des ship-opt">
                                <div class="shipp">
                                  <input
                                    type="radio"
                                    id="pay-toggle"
                                    name="ship"
                                  />
                                  <label for="pay-toggle"
                                    >Flat Rate: <span>$03</span></label
                                  >
                                </div>
                                <div class="shipp">
                                  <input
                                    type="radio"
                                    id="pay-toggle2"
                                    name="ship"
                                  />
                                  <label for="pay-toggle2">Free Shipping</label>
                                </div>
                              </td>
                            </tr>
                            <tr class="cart_item">
                              <td class="ctg-type crt-total">Total</td>
                              <td class="cgt-des prc-total">$ 1.029.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </form>
                  </div>
                  <div class="payment-section clearfix">
                    <div class="pay-toggle">
                      <form action="#">
                        <div class="pay-type-total">
                          <div class="pay-type">
                            <input type="radio" id="pay-toggle01" name="pay" />
                            <label for="pay-toggle01"
                              >Direct Bank Transfer</label
                            >
                          </div>
                          <div class="pay-type">
                            <input type="radio" id="pay-toggle02" name="pay" />
                            <label for="pay-toggle02">Cheque Payment</label>
                          </div>
                          <div class="pay-type">
                            <input type="radio" id="pay-toggle03" name="pay" />
                            <label for="pay-toggle03">Cash on Delivery</label>
                          </div>
                          <div class="pay-type">
                            <input type="radio" id="pay-toggle04" name="pay" />
                            <label for="pay-toggle04">Paypal</label>
                          </div>
                        </div>
                        <div class="input-box">
                          <button type="submit" class="default-btn">
                            Place order
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Checkout are end-->
  </main>
  <!-- Page Content -->
</template>

<script>
export default {
  name: "CheckOutPage",
  data() {
    return {};
  },
};
</script>
