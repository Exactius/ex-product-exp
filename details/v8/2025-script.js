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

      // await jQuery(".detail-link.links-pad-marg.mobile-display-style").addClass('hide');

      const ratingComp = await jQuery(".detail-link.links-pad-marg.mobile-display-style")
      // ratingComp.addClass('detail-link-wrapper')

      await jQuery(".content-section.detail-header-section.content-style .program-head").before(
        ratingComp
      );

      // await jQuery(".content-section.detail-header-section.content-style .program-head").before(
      //   `<div id="detail-link-wrapper" ></div>`
      // );
        
      const descriptionComp = await jQuery(".description-heading-text-content");
      const whatsCoverComp = await jQuery(".covered-repair-section")

      await jQuery(".enroll-box.enroll-now-box").after(
        [descriptionComp, whatsCoverComp]
      )

      if(
        jQuery(".detail-link.links-pad-marg.mobile-display-style").length != 0
        && jQuery(".description-heading-text-content").length != 0
        && jQuery(".covered-repair-section").length != 0
        // jQuery("#detail-link-wrapper").length != 0
      ){
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

  // jQuery(window).on('resize', function () {
  //     url = location.href;
  //     urlCheck(url);
  // });


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

  url = location.href;
  urlCheck(url);
  
  //
  var breakpoint = false;

  
  $(window).scroll(function() {
    console.log('general-section >>>', jQuery('#review-section').position() )
    const heroHeight = jQuery('#general-section').height();
    if ($(this).scrollTop() > (heroHeight + 100) && !breakpoint ) {
      console.log('CALL 111111')
      breakpoint = true;
      url = location.href;
      urlCheck(url);
    }
    if ($(this).scrollTop() < (heroHeight + 100) && breakpoint ) {
      console.log('CALL 222222')
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
