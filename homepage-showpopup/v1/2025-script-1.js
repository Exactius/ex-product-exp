(function () {
  const basePath =
    "https://scpprd.prod.apimanagement.us10.hana.ondemand.com/api/hos/api/customer/customer-lead-gen";
  const apiKey = "Ng0glnSyFyARBd7AGghwnAAjV1ORz5Vp";
  let ipAddress = 0;
  let testingUrl = window.location.origin + window.location.pathname;
  const popupId = 1;
  const maxLimit = 30000;
  const url = `${basePath}/save-lead?APIKey=${apiKey}`;
  var xhr = new XMLHttpRequest();
  let getUrl = `${basePath}?url=${testingUrl}&popupId=${popupId}&APIKey=${apiKey}`;
  let isSubmitClick = false;
  var patternFailed = false;
  let unsavedData = {};
  const version = 2.0;
  console.log(`Version ${version}`);

  function SaveDataToDb(data, redirect = true) {
    data = JSON.stringify(data);
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        response = JSON.parse(xhr.response);
      }
    };
    xhr.send(data);

    if (redirect === true) {
      $("#leadGenModal").modal("hide");
      document.querySelector("#zipCodeClick").click();
    }
  }

  function ShowPopUp() {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        ipAddress = data.ip;
        getUrl = `${getUrl}&ipAddress=${ipAddress}`;
        fetch(getUrl)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              return { skipCount: 0, isDataFilled: false };
            }
          })
          .then((data) => {
            if (data.skipCount <= maxLimit && data.isDataFilled === false) {
              unsavedData = {
                popupId,
                ipAddress,
                url: testingUrl,
                isDataFilled: false,
              };
              $("#leadGenModal").modal("show");
              // BindEventToSubmit();
            } else {
              document.querySelector("#zipCodeClick").click();
            }
          });
      });
  }

  function checkValidityOfInput(input) {
    var inputData = document.getElementById(input);
    const isInvalid = !inputData.checkValidity();
    inputData.classList.toggle("is-invalid", isInvalid);
    patternFailed = isInvalid;
    return isInvalid;
  }

  function validateDataOnSubmit() {
    let isValidEmail = true;
    let isValidPhone = true;
    const phoneNumber = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const address = document.querySelector("#address").value;
    const zipcode = document.querySelector(".search-zipcode").value;
    if (!phoneNumber.length || checkValidityOfInput("phone")) {
      document.querySelector("#phone").classList.add("is-invalid");
      document.getElementsByClassName("asterisk")[0].style.marginRight = '30px';
      
      isValidPhone = false;
    }
    if (!email.length || checkValidityOfInput("email")) {
      document.querySelector("#phone").classList.add("is-invalid");
      document.getElementsByClassName("asterisk")[1].style.marginRight = '30px';
      isValidEmail = false;
    }
    //let phoneValid = checkValidityOfInput('phone');
    //let emailValid = checkValidityOfInput('email');
    //console.log({phoneValid,emailValid})

    if (!isValidPhone || !isValidEmail) {
      return false;
    } else {
      return {
        phoneNumber,
        email,
        address,
        zipcode,
        popupId,
        ipAddress,
        url: testingUrl,
        isDataFilled: true,
      };
    }
  }

  function createTest() {
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      jQuery("body").addClass("mac");
    }
    jQuery("body").addClass("spz-2025");

    const popupCheck = setInterval(async function () {
      const submitButtonHomepage = document.querySelector(".get-started-btn");

      $('.get-started-btn').after(`<button type="submit" style="display:none" id="zipCodeClick"></button>`)

      submitButtonHomepage.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          const zipCodeLength =
            document.querySelector(".search-zipcode").value.length;
          if (zipCodeLength === 5) ShowPopUp();
          else document.querySelector("#zipCodeClick").click();
        },
        false
      );

      // bind submit

      const popupSubmitButton = document.querySelector("#submit-button");
      const popupCloseButton = document.querySelector("#close-popup-button");
      // Add an event listener to the submit button to handle form submission
      popupSubmitButton.addEventListener("click", (event) => {
        event.preventDefault();
        // Get the values of the form fields
        let submitData = validateDataOnSubmit();
        if (!submitData) {
          return;
        }
        isSubmitClick = true;
        SaveDataToDb(submitData, true);
      });

      popupCloseButton.addEventListener("click", (event) => {
        event.preventDefault();
        SaveDataToDb(unsavedData, false);
      });

      // Get the popup and overlay elements

      document.onreadystatechange = function () {
        if (document.readyState === "complete") {
          $("#email").on("keyup change", function () {
            checkValidityOfInput("email");
          });
          $("#phone").on("keyup change", function () {
            checkValidityOfInput("phone");
          });
          $("#leadGenModal").on("hidden.bs.modal", function (e) {
            if (isSubmitClick === false) {
              SaveDataToDb(unsavedData, false);
            }
          });
        }
      };

      clearInterval(popupCheck);
    }, 100);
  }

  // jQuery(window).on('resize', function () {
  //     url = location.href;
  //     urlCheck(url);
  // });

  async function removeTest() {
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
    // url = location.href;
    urlCheck(location.href);
  });

//   url = location.href;
  urlCheck(location.href);

  // jQuery(document).on('click', '.product-page-search', function () {
  //   setTimeout(() => {
  //     something();

  //     glInt = setInterval(() => {
  //       if (
  //         document.querySelectorAll('.pace.pace-inactive') &&
  //         document.querySelectorAll(
  //           '.page-wrap.product-list .product-item .card'
  //         ).length != document.querySelectorAll('.has-wc').length
  //       ) {
  //         url = location.href;
  //         urlCheck(url);
  //       }
  //     }, 1000);
  //   }, 2000);

  //   setTimeout(() => {
  //     clearInterval(glInt);
  //   }, 10000);
  // });

  function urlCheck(urla) {
    if (urla.includes("/nyc")) {
      createTest();
    } else {
      removeTest();
    }
  }
})();
