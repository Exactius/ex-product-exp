(function () {
  const cookieName = '#2025_AWR_Product_List_Popup';
  const cookieValue = '1';
  const myDate = new Date();

  myDate.setDate(myDate.getDate() + 30);
  document.cookie = cookieName + '=' + cookieValue + ';expires=' + myDate;

  function createTest() {
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
      jQuery('body').addClass('mac');
    }
    jQuery('body').addClass('spz-2025');

    const productsCheck = setInterval(async function () {
      if (jQuery('#instruction').length == 0) {
        jQuery('.general-information').before(
          `<h6 id='instruction'>As a NYC DEP customer, simply add our protection to your existing DEP bill in a few clicks below.</h6>`
        );
        if (jQuery('#instruction').length > 0) {
          clearInterval(productsCheck);
        }
      } else {
        clearInterval(productsCheck);
      }
    }, 100);
  }

  async function removeTest() {
    jQuery('body').removeClass('spz-2025');
    jQuery('.products-wrapper').remove();
    jQuery('.noproducts-wrapper').remove();
    jQuery('.form-header.row.m-0.hide-desktop').remove();
    jQuery('#instruction').remove();
  }

  history.pushState = (function (f) {
    return function pushState() {
      const ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('pushstate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.pushState);
  history.replaceState = (function (f) {
    return function replaceState() {
      const ret = f.apply(this, arguments);
      window.dispatchEvent(new Event('replacestate'));
      window.dispatchEvent(new Event('locationchange'));
      return ret;
    };
  })(history.replaceState);
  window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
  });
  window.addEventListener('locationchange', function () {
    url = location.href;
    urlCheck(url);
  });

  url = location.href;
  urlCheck(url);

  function urlCheck(url) {
    setTimeout(() => {
      if (
        url.includes('nyc/user/checkout?section=cart') ||
        url.includes('nyc/user/checkout?section=etspayment')
      ) {
        createTest();
      } else {
        removeTest();
      }
    }, 700);
  }
})();
