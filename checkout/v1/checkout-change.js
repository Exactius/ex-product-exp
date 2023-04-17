(function () {
  var bodyList = document.querySelector("body");

  var oldHref = document.location.href;

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (oldHref != document.location.href) {
        oldHref = document.location.href;

        checkoutPageChange();
      }
    });
  });

  var config = {
    childList: true,
    subtree: true
  };

  observer.observe(bodyList, config);

  // hiding on header for checkout page route change.
  function checkoutPageChange() {
    if (document.location.href.includes("/user/checkout")) {
      const loginButton = jQuery(".login-area");
      loginButton.addClass("hidden");

      const navIcon = jQuery(".nav-icon");
      navIcon.addClass("hidden");

      const brandingIcon = jQuery(".branding");
      brandingIcon.addClass("no-pointer");
    } else {
      const loginButton = jQuery(".login-area");
      loginButton.removeClass("hidden");

      const navIcon = jQuery(".nav-icon");
      navIcon.removeClass("hidden");

      const brandingIcon = jQuery(".branding");
      brandingIcon.removeClass("no-pointer");
    }
  }
})();
