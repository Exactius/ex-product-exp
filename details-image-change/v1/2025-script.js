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
      if (
        jQuery(".detail-link.links-pad-marg.mobile-display-style").length !=
          0 &&
        jQuery(".description-heading-text-content").length != 0 &&
        jQuery(".covered-repair-section").length != 0
        // jQuery("#detail-link-wrapper").length != 0
      ) {
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

  // jQuery(window).on("resize", function () {
  //   url = location.href;
  //   urlCheck(url);
  // });

  async function removeTest() {
    jQuery("body").removeClass("spz-2025");
    jQuery(".products-wrapper").remove();
    jQuery(".noproducts-wrapper").remove();
  }

  jQuery(window).scroll(function () {
    loadImage();
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

  //

  function urlCheck(url) {
    const urlArray = url.split("/");
    const residentialVar = urlArray[urlArray.length - 3];
    const lastVar = urlArray[urlArray.length - 2];
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
