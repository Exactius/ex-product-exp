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
  let unsavedData = {};
  const version = 2.0;
  console.log(`Version ${version}`);

  async function SaveDataToDb(data, redirect = true) {
    data = JSON.stringify(data);

    await fetch(`https://hook.us1.make.com/oenbcsi5j18c4za2osjinaqan13aauh8`, {
      method: "POST",
      body: JSON.parse(data),
    })
      .then((res) => {
        console.log("res >>> ", res);
      })
      .catch((err) => {
        console.log("Getting error >> ", err);
      });

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

  function getIpAddress(response) {
    var data = response.replace(/[\r\n]+/g, '","').replace(/\=+/g, '":"');
    data = '{"' + data.slice(0, data.lastIndexOf('","')) + '"}';
    var jsondata = JSON.parse(data);
    console.log("jsondata.ip >>", jsondata.ip);
    return jsondata.ip;
  }

  function ShowPopUp() {
    document.querySelector(
      ".get-started-btn .desktop-only.text-visible"
    ).innerHTML = "Loading...";
    fetch("https://api.ipify.org/?format=json");
    fetch("https://checkip.amazonaws.com/");
    fetch("https://www.cloudflare.com/cdn-cgi/trace")
      .then((response) => {
        return response.text();
      })
      // .then((response) => response.json())
      .then((data) => {
        console.log("data >>>", data);
        ipAddress = getIpAddress(data);

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

                  document.querySelector("#zipCodeClick").click();
                },
                false
              );
              // SKIP NOW BUTTON = ENDS

              BindEventToSubmit();
            } else {
              document.querySelector("#zipCodeClick").click();
            }
            document.querySelector(
              ".get-started-btn .desktop-only.text-visible"
            ).innerHTML = "GET STARTED";
          });
      });
  }

  function checkValidityOfInput(input) {
    let isValid = false;
    var inputData = document.getElementById(input);
    if (input === "phone") {
      const phoneNoRegex =
        /(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/;
      if (inputData.value.length > 0 && phoneNoRegex.test(inputData.value)) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    if (input === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,255}$/;
      if (inputData.value.length > 0 && emailRegex.test(inputData.value)) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    return isValid;
  }

  function validateDataOnSubmit() {
    let isValidEmail = false;
    let isValidPhone = false;
    const phoneNumber = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const address = document.querySelector("#address").value;
    const zipcode = document.querySelector(".search-zipcode").value;

    if (!checkValidityOfInput("phone")) {
      document.querySelector("#phone").classList.add("is-invalid");
      document.getElementsByClassName("asterisk")[0].style.marginRight = "30px";
      isValidPhone = false;
    } else {
      document.querySelector("#phone").classList.remove("is-invalid");
      isValidPhone = true;
    }

    if (!checkValidityOfInput("email")) {
      document.querySelector("#email").classList.add("is-invalid");
      document.getElementsByClassName("asterisk")[1].style.marginRight = "30px";
      isValidEmail = false;
    } else {
      document.querySelector("#email").classList.remove("is-invalid");
      isValidEmail = true;
    }
    //let phoneValid = checkValidityOfInput('phone');
    //let emailValid = checkValidityOfInput('email');
    //console.log({phoneValid,emailValid}

    if (!isValidEmail || !isValidPhone) {
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
      document.querySelector("#phone").addEventListener("change", () => {
        validateDataOnSubmit();
      });

      document.querySelector("#email").addEventListener("change", () => {
        validateDataOnSubmit();
      });

      if (submitButtonHomepage) {
        $(".get-started-btn").after(
          `<button type="submit" style="display:none" id="zipCodeClick"></button>`
        );
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

          if (typeof window !== "undefined" && window !== undefined) {
            window.dataLayer = window.dataLayer || [];
            const data = {
              event: "discover_plans",
            };
            window.dataLayer.push(data);
          }
          SaveDataToDb(submitData, true);
        });

        popupCloseButton.addEventListener("click", (event) => {
          event.preventDefault();
          $("#leadGenModal").modal("hide");
          // SaveDataToDb(unsavedData, false);
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
      }
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
