(function () {
  let ipAddress = 0;
  let testingUrl = window.location.origin + window.location.pathname;
  let isSubmitClick = false;
  let unsavedData = {};
  const version = 2.0;
  let isLoading;
  console.log(`Version ${version}`);

  function getIpAddress(response) {
    var data = response.replace(/[\r\n]+/g, '","').replace(/\=+/g, '":"');
    data = '{"' + data.slice(0, data.lastIndexOf('","')) + '"}';
    var jsondata = JSON.parse(data);
    return jsondata.ip;
  }

  async function SaveDataToDb(data) {
    data = JSON.stringify(data);
    document.querySelector("#submit-button").textContent = "Loading ... ";
    document.querySelector("#submit-button").disabled = true;
    await fetch(`https://hook.us1.make.com/4mvit3fhuqt7q41msy97aj6we2lyffsr`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("res >>> ", res);
        $("#leadGenModal").modal("hide");
      })
      .catch((err) => {
        console.log("Getting error >> ", err);
      })
      .finally(() => {
        document.querySelector("#submit-button").textContent =
          "GET MY DISCOUNT";
      });
  }

  function ShowPopUp() {
    fetch("https://api.ipify.org/?format=json");
    fetch("https://checkip.amazonaws.com/");
    fetch("https://www.cloudflare.com/cdn-cgi/trace")
      .then((response) => {
        return response.text();
      })
      // .then((response) => response.json())
      .then((data) => {
        ipAddress = getIpAddress(data);

        unsavedData = {
          ipAddress,
          url: testingUrl,
        };

        $("#leadGenModal").modal("show");

        // SKIP NOW BUTTON
        const skipNow = document.querySelector("#skip-now");
        skipNow.addEventListener(
          "click",
          (event) => {
            if (typeof window !== "undefined" && window !== undefined) {
              window.dataLayer = window.dataLayer || [];
              const data = {
                event: "skip_now",
              };
              window.dataLayer.push(data);
            }
          },
          false
        );
        // SKIP NOW BUTTON = ENDS
      });
  }

  function checkValidityOfZipcode() {
    let inputData = document.getElementById("zipCode");
    let isValid;
    const zipCode = /^[0-9]\d*(\.\d+)?$/;
    if (inputData.value.length === 5 && zipCode.test(inputData.value)) {
      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
  }

  function checkValidityOfPhone() {
    let inputData = document.getElementById("phone");
    let isValid;
    const phoneNoRegex =
      /(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/;
    if (inputData.value.length > 0 && phoneNoRegex.test(inputData.value)) {
      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
  }

  function checkValidityOfEmail() {
    let isValid;
    var inputData = document.getElementById("email");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,255}$/;
    if (inputData.value.length > 0 && emailRegex.test(inputData.value)) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  }

  function validateDataOnSubmit() {
    let isValidEmail = false;
    let isValidPhone = false;
    let isValidZipcode = false;
    const phoneNumber = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const address = document.querySelector("#address").value;
    const zipcode = document.querySelector("#zipCode").value;

    if (!checkValidityOfZipcode()) {
      document.querySelector("#zipCode").classList.add("is-invalid");
      document.getElementsByClassName("asterisk")[0].style.marginRight = "30px";
      isValidZipcode = false;
    } else {
      document.querySelector("#zipCode").classList.remove("is-invalid");
      isValidZipcode = true;
    }

    if (!checkValidityOfPhone()) {
      document.querySelector("#phone").classList.add("is-invalid");
      document.getElementsByClassName("asterisk")[1].style.marginRight = "30px";
      isValidPhone = false;
    } else {
      document.querySelector("#phone").classList.remove("is-invalid");
      isValidPhone = true;
    }

    if (!checkValidityOfEmail()) {
      document.querySelector("#email").classList.add("is-invalid");
      document.getElementsByClassName("asterisk")[2].style.marginRight = "30px";
      isValidEmail = false;
    } else {
      document.querySelector("#email").classList.remove("is-invalid");
      isValidEmail = true;
    }

    if (!isValidEmail || !isValidPhone || !isValidZipcode) {
      return false;
    } else {
      return {
        phoneNumber,
        email,
        address,
        zipcode,
        ipAddress,
        url: testingUrl,
      };
    }
  }

  function createTest() {
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      jQuery("body").addClass("mac");
    }
    jQuery("body").addClass("spz-2025");

    const popupCheck = setInterval(async function () {
      ShowPopUp();
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

        if (typeof window !== "undefined" && window !== undefined) {
          window.dataLayer = window.dataLayer || [];
          const data = {
            event: "discover_plans",
          };
          window.dataLayer.push(data);
        }
        SaveDataToDb(submitData);
      });

      popupCloseButton.addEventListener("click", (event) => {
        event.preventDefault();
        $("#leadGenModal").modal("hide");
      });

      // Get the popup and overlay elements

      document.onreadystatechange = function () {
        if (document.readyState === "complete") {
          const phoneNumber = document.querySelector("#phone");
          const email = document.querySelector("#email");
          const zipcode = document.querySelector("#zipCode");

          zipcode.addEventListener("change", (e) => {
            e.preventDefault();
            if (!checkValidityOfZipcode()) {
              document.querySelector("#zipCode").classList.add("is-invalid");
              document.getElementsByClassName("asterisk")[0].style.marginRight =
                "30px";
            } else {
              document.querySelector("#zipCode").classList.remove("is-invalid");
            }
          });

          phoneNumber.addEventListener("change", (e) => {
            e.preventDefault();
            if (!checkValidityOfPhone()) {
              document.querySelector("#phone").classList.add("is-invalid");
              document.getElementsByClassName("asterisk")[1].style.marginRight =
                "30px";
            } else {
              document.querySelector("#phone").classList.remove("is-invalid");
            }
          });

          email.addEventListener("change", (e) => {
            e.preventDefault();
            if (!checkValidityOfEmail()) {
              document.querySelector("#email").classList.add("is-invalid");
              document.getElementsByClassName("asterisk")[2].style.marginRight =
                "30px";
            } else {
              document.querySelector("#email").classList.remove("is-invalid");
            }
          });

          $("#leadGenModal").on("hidden.bs.modal", function (e) {
            if (isSubmitClick === false) {
              SaveDataToDb(unsavedData);
            }
          });
        }
      };

      clearInterval(popupCheck);
      //   }
    }, 100);
  }

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

  jQuery(document).on("click", ".product-page-search", function () {
    setTimeout(() => {
      something();

      glInt = setInterval(() => {
        if (
          document.querySelectorAll(".pace.pace-inactive") &&
          document.querySelectorAll(
            ".page-wrap.product-list .product-item .card"
          ).length != document.querySelectorAll(".has-wc").length
        ) {
          urlCheck(location.href);
        }
      }, 1000);
    }, 2000);

    setTimeout(() => {
      clearInterval(glInt);
    }, 10000);
  });

  function urlCheck(urla) {
    if (
      urla.includes("whole-home-program-6029") ||
      urla.includes("whole-home-plus-7369")
    ) {
      createTest();
    } else {
      removeTest();
    }
  }
})();
