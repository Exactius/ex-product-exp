(function () {
  let glInt;

  function createTest() {
    console.log("CREATING TEST");

    const headerCheck = setInterval(async function () {
      // hiding on header for checkout page route change.
      const loginButton = jQuery(".login-area");
      loginButton.addClass("hidden");

      const navIcon = jQuery(".nav-icon");
      navIcon.addClass("hidden");

      const brandingIcon = jQuery(".branding");
      brandingIcon.addClass("no-pointer");

      clearInterval(headerCheck);

      if (
        document.querySelector(".login-area") &&
        document.querySelectorAll(".nav-icon") &&
        document.querySelectorAll(".branding")
      ) {
        await getProducts();
      }
    }, 100);
  }

  async function removeTest() {
    const loginButton = jQuery(".login-area");
    loginButton.removeClass("hidden");

    const navIcon = jQuery(".nav-icon");
    navIcon.removeClass("hidden");

    const brandingIcon = jQuery(".branding");
    brandingIcon.removeClass("no-pointer");
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
    if (url.includes("/user/checkout")) {
      createTest();
    } else {
      removeTest();
    }
  }
})();
