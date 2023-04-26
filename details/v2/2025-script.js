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

      // await jQuery(".detail-link links-pad-marg mobile-display-style").remove();

      await jQuery(".detail-link.links-pad-marg.mobile-display-style").remove();

      await jQuery(".program-head").before(
          `<div _ngcontent-c9="" class="detail-link-wrapper page-wrap row fixed-header-wrapper ng-tns-c9-0 ng-star-inserted">
          <div _ngcontent-c9="" class="col-12 left-box tab-width-100 PD-0">
              
              <div _ngcontent-c9="" class="detail-link links-pad-marg mobile-display-style">
                  <div _ngcontent-c9="" class="program-name font-weight-400">
                      <div _ngcontent-c9="" class="ng-tns-c9-0">
                          <a _ngcontent-c9="" class="social-btn d-none">Share<i _ngcontent-c9="" class="fa fa-share-alt iconClass" aria-hidden="true"></i></a>
                          <!---->
                      </div>
                      <!----><div _ngcontent-c9="" class="mobile-only-view program-name font-weight-400 rating-link ng-tns-c9-0 ng-star-inserted">
                          <a _ngcontent-c9="" class="rating-btn">Rating</a>
                          <div _ngcontent-c9="" class="rating-average">
                              <!----><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span>
                              <!----><span _ngcontent-c9="" class="rating-label ng-tns-c9-0 ng-star-inserted"> (62) </span>
                          </div>
                      </div>
                      <!----><div _ngcontent-c9="" class="mobile-only-view program-name font-weight-400 ng-tns-c9-0 ng-star-inserted">
                          <a _ngcontent-c9="" class="terms-btn">Terms &amp; Conditions</a>
                      </div>
                  </div>
                  <!----><div _ngcontent-c9="" class="desktop-only-view program-name font-weight-400 PR-15 ng-tns-c9-0 ng-star-inserted">
                      <a _ngcontent-c9="" class="rating-btn">Rating</a>
                      <div _ngcontent-c9="" class="rating-average">
                          <!----><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span><span _ngcontent-c9="" class="rating-star fa ng-tns-c9-0 fa-star ng-star-inserted"></span>
                          <!----><span _ngcontent-c9="" class="rating-label ng-tns-c9-0 ng-star-inserted"> (62) </span>
                      </div>
                  </div>
                  <!----><div _ngcontent-c9="" class="desktop-only-view program-name font-weight-400 ng-tns-c9-0 ng-star-inserted">
                      <a _ngcontent-c9="" class="terms-btn">Terms &amp; Conditions</a>
                  </div>
              </div>
          </div>
      </div>
          `
        );

        // const priceComponent = await jQuery(".zipcode-searched")
        // priceComponent.addClass('zipcode-searched-2025')

        // await jQuery(".program-head").after(
        //   priceComponent
        // );
        
        const descriptionComp = await jQuery(".description-heading-text-content");
        const whatsCoverComp = await jQuery(".covered-repair-section")

        await jQuery(".enroll-box.enroll-now-box").before(
          [descriptionComp, whatsCoverComp]
        )

      if(jQuery(".detail-link-wrapper").length != 0){
        clearInterval(productsCheck);
        if (
          document.querySelector(".product-card-spz") &&
          document.querySelectorAll(".product-card-spz[data-program-id]")
            .length == 0
        ) {
          await getProducts();
        }
      }
      
    }, 100);
  }

  jQuery(window).on('resize', function () {
      url = location.href;
      urlCheck(url);
  });

  async function removeTest() {
    jQuery("body").removeClass("spz-2025");
    jQuery(".products-wrapper").remove();
    jQuery(".noproducts-wrapper").remove();
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

  jQuery(document).on('DOMSubtreeModified', "article.page-wrap.product-list.row", function () {
      createTest();
  });

  url = location.href;
  urlCheck(url);
  
  //
  var breakpoint = false;

  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 815 && !breakpoint ) {
      breakpoint = true;
      url = location.href;
      urlCheck(url);
    }
    if ($(this).scrollTop() < 815 && breakpoint ) {
      breakpoint = false;
      url = location.href;
      urlCheck(url);
    }
  })

  //

  function urlCheck(url) {
    const urlArray = url.split('/');
    const residentialVar = urlArray[urlArray.length - 2]
    const lastVar = urlArray[urlArray.length - 1]

    if ((residentialVar === "residential" || residentialVar === "service") && lastVar.includes('-')) {
      createTest();
    } else {
      removeTest();
    }
  }


})();
