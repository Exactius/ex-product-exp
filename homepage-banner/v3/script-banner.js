(function () {
  function createTest() {
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      jQuery("body").addClass("mac");
    }
    jQuery("body").addClass("spz-2025");

    const bannerCheck = setInterval(async function () {
      const header = $(".top-bar");
      header.append(`
        <div class="new-banner">
          <h2>NEW!</h2>
          <p>
            Protect your budget from costly repairs with our simple
            <label style="cursor:pointer;" class="bold-plan">whole home plans!</label>
          </p>
        </div>
      `);

      $(".bold-plan").click(() => {
        $(".search-zipcode").focus();
      });
      const banner = $(".new-banner");
      banner.addClass("mt-32px");

      clearInterval(bannerCheck);
    }, 100);
  }

  async function removeTest() {
    jQuery(".new-banner").remove();
    jQuery("body").removeClass("spz-2025");
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
    urlCheck(location.href);
    removeTest();
  });

  urlCheck(location.href);

  $(window).on("scroll", () => {
    const banner = $(".new-banner");
    if ($(document).scrollTop() > 95) {
      banner.removeClass("mt-32px");
    } else {
      banner.addClass("mt-32px");
    }
  });

  function urlCheck(urla) {
    if (
      (urla.split("/").length <= 4 &&
        urla.split("/")[urla.split("/").length - 1] !== "" &&
        urla.split("/")[urla.split("/").length - 1].length > 0) ||
      (urla.split("/")[urla.split("/").length - 1] === "" &&
        urla.split("/")[urla.split("/").length - 2].length > 0)
    ) {
      createTest();
    } else {
      removeTest();
    }
  }
})();
