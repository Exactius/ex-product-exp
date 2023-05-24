(function () {
  const cookieName = "#2025_AWR_Product_List_Popup";
  const cookieValue = "1";
  const myDate = new Date();

  myDate.setDate(myDate.getDate() + 30);
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

  function createTest() {
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      jQuery("body").addClass("mac");
    }
    jQuery("body").addClass("spz-2025");

    const productsCheck = setInterval(async function () {
      if (jQuery(".toggle").length == 0) {
        await jQuery(".cart-note-div").remove();

        // await jQuery(".card-title").html(`<span>Your cart</span>`);

        await jQuery(".padding-30px-0-0").removeClass("padding-30px-0-0");

        await jQuery(".product-total-name").html(
          `
          <div>Your recurring monthly <br/>
          payment (including taxes)</div>
          `
        );

        // await jQuery(".pad-btn-checkout button").addClass("col-lg-5");

        await jQuery(".payment-option").after(
          `
          <label class="toggle">
            <span id="monthly" class="toggle-label monthly toggle-label-bold">Monthly</span>
            <input  id="toggle-input" class="toggle-checkbox" type="checkbox">
            <div class="toggle-switch"></div>
            <span id="annually" class="toggle-label annually">Annually</span>
          </label>
          `
        );

        $(document).on("change", "#toggle-input", (e) => {
          if (e.target.checked) {
            jQuery(".annually").addClass("toggle-label-bold");
            jQuery(".monthly").removeClass("toggle-label-bold");
            jQuery("#frequency-Annual-desktop").click();
            jQuery(".product-total-name").html(
              `
              <div>Your recurring annually <br/>
              payment (including taxes)</div>
              `
            );
          } else {
            jQuery(".monthly").addClass("toggle-label-bold");
            jQuery(".annually").removeClass("toggle-label-bold");
            jQuery("#frequency-Monthly-desktop").click();
            jQuery(".product-total-name").html(
              `
              <div>Your recurring monthly <br/>
              payment (including taxes)</div>
              `
            );
          }
        });

        if (
          jQuery(".toggle").length > 0 ||
          jQuery(".no-data-card-empty").length > 0
        ) {
          clearInterval(productsCheck);
        }
      } else {
        clearInterval(productsCheck);
      }
    }, 100);

    const checkoutBtnCheck = setInterval(async function () {
      const button = await jQuery(".flex-center-cls.pad-btn-checkout");
      if (button.length != 0) {
        await jQuery(".form-group.col-12.col-md-6:last").after(
          `
            <div class="form-group col-12 col-md-6">
            <label style="opacity: 0">s</label>
               <div id="checkout-btn"></div>
            </div>
            `
        );
        // if(jQuery('#checkout-btn .enroll-now.skiptranslate').length == 0) {
        await jQuery("#checkout-btn").html(button);
        // }
        if (
          jQuery("#checkout-btn .flex-center-cls.pad-btn-checkout").length != 0
        ) {
          clearInterval(checkoutBtnCheck);
        }
      } else {
        if (
          jQuery("#checkout-btn .flex-center-cls.pad-btn-checkout").length !=
            0 ||
          jQuery(".no-data-card-empty").length > 0
        ) {
          clearInterval(checkoutBtnCheck);
        }
      }
    }, 100);

    const stepWapperCheck = setInterval(async function () {
      if (jQuery(".form-inner-header").length == 0) {
        await jQuery(".form-header").addClass("hide-mobile");
        await jQuery(".form-header").html(
          `
          <div class="stepper-wrapper">
            <div class="stepper-item completed">
              <div class="step-counter"><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.863647 3.19413L2.93246 5.26294L7.5 1" stroke="#0098DB" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div class="step-name">Enter ZIP code</div>
            </div>
            <div class="stepper-item completed">
              <div class="step-counter">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.863647 3.19413L2.93246 5.26294L7.5 1" stroke="#0098DB" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
              <div class="step-name">Choose a plan</div>
            </div>
            <div class="stepper-item active">
              <div class="step-counter">3</div>
              <div class="step-name">Check out</div>
            </div>
          </div>
          `
        );

        await jQuery(
          ".page-wrap.row.nav-wrap.justify-content-between.fs-restrict-dead-clicks"
        ).after(
          `
            <div _ngcontent-c7="" class="form-header row m-0 hide-desktop">
              <div class="stepper-wrapper">
                <div class="stepper-item completed">
                  <div class="step-counter"><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.863647 3.19413L2.93246 5.26294L7.5 1" stroke="#0098DB" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  </div>
                  <div class="step-name">Enter ZIP code</div>
                </div>
                <div class="stepper-item completed">
                  <div class="step-counter">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.863647 3.19413L2.93246 5.26294L7.5 1" stroke="#0098DB" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              </div>
                  <div class="step-name">Choose a plan</div>
                </div>
                <div class="stepper-item active">
                  <div class="step-counter">3</div>
                  <div class="step-name">Check out</div>
                </div>
              </div>
              </div>
            `
        );

        await jQuery("#name").before(
          `
          <div class="form-inner-header">
            Your Personal Info
          </div>
          `
        );

        await jQuery("#email").after(
          `
          <div class="form-inner-header address">
          Your Address
          </div>
          `
        );

        await jQuery(".form-message").html(
          `
          All fields are required.
          `
        );

        if (
          jQuery(".stepper-wrapper").length > 0 ||
          jQuery(".no-data-card-empty").length > 0
        ) {
          clearInterval(stepWapperCheck);
        }
      } else {
        clearInterval(stepWapperCheck);
      }
    }, 100);

    const otherProductsCheck = setInterval(async function () {
      const cartLinkDiv = await jQuery(".cart-link-div");

      if (cartLinkDiv.length == 2) {
        await jQuery(".ga-track-remove-product").html(
          `
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50008 1.94792C7.17042 1.94782 6.84884 2.04995 6.57964 2.24024C6.31045 2.43053 6.10689 2.69961 5.997 3.01042C5.94838 3.14105 5.85037 3.24735 5.7241 3.30638C5.59783 3.36541 5.45342 3.37246 5.322 3.32599C5.19059 3.27952 5.0827 3.18326 5.02161 3.05797C4.96051 2.93269 4.95111 2.78841 4.99541 2.65625C5.1787 2.13846 5.51796 1.6902 5.9665 1.37317C6.41504 1.05613 6.95081 0.885899 7.50008 0.885899C8.04935 0.885899 8.58512 1.05613 9.03366 1.37317C9.4822 1.6902 9.82146 2.13846 10.0047 2.65625C10.0491 2.78841 10.0397 2.93269 9.97856 3.05797C9.91746 3.18326 9.80958 3.27952 9.67816 3.32599C9.54675 3.37246 9.40233 3.36541 9.27606 3.30638C9.14979 3.24735 9.05178 3.14105 9.00317 3.01042C8.89319 2.69967 8.6896 2.43064 8.42043 2.24037C8.15125 2.05009 7.82972 1.94792 7.50008 1.94792ZM0.947998 4.25C0.947998 4.1091 1.00397 3.97398 1.1036 3.87435C1.20323 3.77472 1.33835 3.71875 1.47925 3.71875H13.5209C13.6618 3.71875 13.7969 3.77472 13.8966 3.87435C13.9962 3.97398 14.0522 4.1091 14.0522 4.25C14.0522 4.3909 13.9962 4.52602 13.8966 4.62565C13.7969 4.72528 13.6618 4.78125 13.5209 4.78125H1.47925C1.33835 4.78125 1.20323 4.72528 1.1036 4.62565C1.00397 4.52602 0.947998 4.3909 0.947998 4.25ZM3.18987 5.98542C3.18048 5.8448 3.11561 5.71368 3.00954 5.62089C2.90347 5.5281 2.76488 5.48125 2.62427 5.49065C2.48365 5.50004 2.35253 5.56491 2.25974 5.67098C2.16696 5.77705 2.12011 5.91564 2.1295 6.05625L2.45816 10.9806C2.51837 11.8887 2.56725 12.6225 2.682 13.1991C2.80171 13.7976 3.00429 14.2977 3.42362 14.6894C3.84225 15.0818 4.35508 15.2511 4.96071 15.3298C5.54296 15.4063 6.27821 15.4063 7.18912 15.4063H7.81175C8.72196 15.4063 9.45792 15.4063 10.0402 15.3298C10.6451 15.2511 11.1579 15.0818 11.5772 14.6894C11.9959 14.2977 12.1985 13.7969 12.3182 13.1991C12.4329 12.6225 12.4811 11.8887 12.542 10.9806L12.8707 6.05625C12.8801 5.91564 12.8332 5.77705 12.7404 5.67098C12.6476 5.56491 12.5165 5.50004 12.3759 5.49065C12.2353 5.48125 12.0967 5.5281 11.9906 5.62089C11.8846 5.71368 11.8197 5.8448 11.8103 5.98542L11.4845 10.8729C11.4207 11.827 11.3754 12.4915 11.2762 12.9908C11.1792 13.476 11.0446 13.7325 10.8512 13.9138C10.6571 14.0951 10.3922 14.2127 9.90204 14.2765C9.397 14.3423 8.73117 14.3438 7.77421 14.3438H7.22596C6.26971 14.3438 5.60387 14.3423 5.09812 14.2765C4.60796 14.2127 4.34304 14.0951 4.14896 13.9138C3.95558 13.7325 3.821 13.476 3.72396 12.9908C3.62479 12.4915 3.57946 11.827 3.51571 10.8729L3.18987 5.98542Z" fill="black"/>
            <path d="M5.67618 7.26325C5.81632 7.24921 5.9563 7.29138 6.06535 7.38051C6.1744 7.46964 6.24359 7.59842 6.25773 7.73854L6.61189 11.2802C6.62227 11.4184 6.57824 11.5552 6.4892 11.6613C6.40016 11.7675 6.27315 11.8347 6.13527 11.8486C5.9974 11.8624 5.85956 11.8219 5.75117 11.7355C5.64277 11.6492 5.5724 11.5239 5.55506 11.3865L5.20089 7.84479C5.18685 7.70466 5.22903 7.56468 5.31815 7.45563C5.40728 7.34658 5.53606 7.27738 5.67618 7.26325ZM9.79939 7.84479C9.80977 7.70661 9.76574 7.56984 9.6767 7.46366C9.58766 7.35748 9.46065 7.2903 9.32277 7.27644C9.1849 7.26257 9.04706 7.30313 8.93867 7.38946C8.83027 7.47579 8.7599 7.60106 8.74256 7.73854L8.38839 11.2802C8.37802 11.4184 8.42205 11.5552 8.51109 11.6613C8.60013 11.7675 8.72713 11.8347 8.86501 11.8486C9.00289 11.8624 9.14072 11.8219 9.24912 11.7355C9.35751 11.6492 9.42788 11.5239 9.44523 11.3865L9.79939 7.84479Z" fill="black"/>
          </svg>
          `
        );

        await jQuery(".cart-other-link").html(
          `Upgrade to our bundles for more savings!`
        );

        await jQuery(".cart-link-div .cart-link").html("+ Upgrade");

        await jQuery(
          ".cart-link-div .col-12.mar-15-0.flex-align-center .col-2.PD-0"
        ).removeClass("col-2");
        // await jQuery('.cart-link-div .col-12.mar-15-0.flex-align-center .col-2.PD-0').addClass('col-1');

        await jQuery(
          ".cart-link-div .col-12.mar-15-0.flex-align-center .col-7.PR-0.text-align-center"
        ).removeClass("col-7");
        // await jQuery('.cart-link-div .col-12.mar-15-0.flex-align-center .col-7.PR-0.text-align-center').addClass('col-8');

        // const title = await jQuery(
        //   ".cart-link-div .PR-0.text-align-center .margin-0.font-size-15"
        // )
        //   .html()
        //   .replaceAll("Add", "")

        document
          .querySelectorAll(
            ".spz-2025 .cart-link-div .PR-0.text-align-center .margin-0.font-size-15"
          )
          .forEach((i) => {
            i.innerHTML = i.innerHTML.replace("Add", "");
          });

        // await jQuery(
        //   ".cart-link-div .PR-0.text-align-center .margin-0.font-size-15"
        // ).html(
        //   title
        // );

        // const amo = await jQuery(
        //   ".spz-2025 .cart-link-div .PR-0.text-align-center .notranslate.margin-0.font-size-13"
        // )
        //   .html()
        //   .replace("For only ", "For only<br/>")
        //   .replaceAll("Per Month", "/mo")

        document
          .querySelectorAll(
            ".spz-2025 .cart-link-div .PR-0.text-align-center .notranslate.margin-0.font-size-13"
          )
          .forEach((i) => {
            i.innerHTML = i.innerHTML
              .replace("For only ", "For only<br/>")
              .replace("Per Month", "/mo");
          });

        // await jQuery(
        //   ".spz-2025 .cart-link-div .PR-0.text-align-center .notranslate.margin-0.font-size-13"
        // ).html(
        //   amo
        // );

        // await jQuery(".pad-btn-checkout button").addClass("col-lg-5");

        const cardListComponent =
          document.getElementsByClassName("cart-list")[0];

        document
          .getElementsByClassName("cart-list")[0]
          .classList.add("mobile-only");
        // await jQuery('.cart-link-div').after(
        //   cardListComponent
        // )

        jQuery(".spz-2025 .cart-link-div .cart-link").on("click", () => {
          setTimeout(() => {
            createTest();
          }, 1000);
        });

        jQuery(".spz-2025 .ga-track-remove-product").on("click", () => {
          setTimeout(() => {
            createTest();
          }, 1000);
        });

        if (
          jQuery(".cart-other-link").html() ==
          `Upgrade to our bundles for more savings!`
        ) {
          clearInterval(otherProductsCheck);
        }
      } else {
        // clearInterval(otherProductsCheck);
      }
    }, 100);
  }

  async function removeTest() {
    jQuery("body").removeClass("spz-2025");
    jQuery(".products-wrapper").remove();
    jQuery(".noproducts-wrapper").remove();
    jQuery(".form-header.row.m-0.hide-desktop").remove();
    jQuery(".toggle").remove();
    jQuery(".stepper-wrapper").remove();
  }

  history.pushState = (function (f) {
    return function pushState() {
      const ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
  })(history.pushState);

  history.replaceState = (function (f) {
    return function replaceState() {
      const ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
  })(history.replaceState);

  window.addEventListener("popstate", function () {
    window.dispatchEvent(new Event("locationchange"));
  });

  window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
  });

  url = location.href;

  urlCheck(url);

  function urlCheck(url) {
    setTimeout(() => {
      if (
        url.includes("user/checkout?section=cart") ||
        url.includes("user/checkout?section=etspayment")
      ) {
        createTest();
      } else {
        removeTest();
      }
    }, 700);
  }
})();
