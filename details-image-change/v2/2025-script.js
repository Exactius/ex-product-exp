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
      loadImage();
      if (jQuery(".banner-img").length != 0) {
        clearInterval(productsCheck);
      }
    }, 100);
  }

  jQuery(window).on("load", function () {
    url = location.href;
    urlCheck(url);
  });

  async function removeTest() {
    jQuery("body").removeClass("spz-2025");
    jQuery(".products-wrapper").remove();
    jQuery(".noproducts-wrapper").remove();
  }

  jQuery(window).scroll(function () {
    loadImage();
  });

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

  function loadImage() {
    if (
      location.href.includes("/sewer-line-protection-program") ||
      location.href.includes("/sewer-line-insurance-policy")
    ) {
      jQuery(".banner-img").attr(
        "src",
        "https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/details-image-change/assets/sewer_line_protection_program_img.png"
      );
    }
    if (
      location.href.includes("/water-line-protection-program") ||
      location.href.includes("/water-line-insurance-policy")
    ) {
      jQuery(".banner-img").attr(
        "src",
        "https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/details-image-change/assets/water_line_protection_img.png"
      );
    }
  }

  function urlCheck(url) {
    const urlArray = url.split("/");
    const residentialVar = urlArray[urlArray.length - 2];
    const lastVar = urlArray[urlArray.length - 1];
    if (
      (residentialVar === "residential" || residentialVar === "service") &&
      lastVar.includes("-")
    ) {
      createTest();
    } else {
      removeTest();
    }
  }
})();
