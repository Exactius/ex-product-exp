const webHookUrl = "https://hook.us1.make.com/1i29k8lt532aubof1kc3xz8vlr462yb8";

const makeOfferBtn = document.getElementById("make_offer_button");
const numericRegex = /^\d+$/;

makeOfferBtn.addEventListener("click", () => {
  setTimeout(() => {
    setTimeout(() => {
      const select = document.querySelector(".purchase-select select");
      const options = document.querySelectorAll(".purchase-option");
      const purchaseSelect = document.querySelector(
        ".purchase-select .select-button"
      );
      const selectedOption = document.querySelector(
        ".purchase-select .selected-option"
      );
      const selectedOptionValue = document.querySelector(
        "#purchase-hidden-select"
      );
      const placeholder = document.querySelector(
        ".purchase-select .select-placeholder"
      );
      const purchaseOptions = document.querySelector(".purchase-options");
      const arrowIcon = document.querySelector(".arrow-icon");

      purchaseSelect.addEventListener("click", function () {
        purchaseOptions.style.display =
          purchaseOptions.style.display === "block" ? "none" : "block";
        purchaseSelect.style.borderBottomLeftRadius =
          purchaseOptions.style.display === "block" ? "0px" : "5px";
        purchaseSelect.style.borderBottomRightRadius =
          purchaseOptions.style.display === "block" ? "0px" : "5px";
        arrowIcon.style.transform =
          purchaseOptions.style.display === "block"
            ? "rotate(180deg)"
            : "rotate(0deg)";
      });

      options.forEach(function (option) {
        option.addEventListener("click", function () {
          selectedOption.style.display = "block";
          selectedOptionValue.value = option.textContent.trim();
          selectedOption.textContent = option.textContent.trim();
          placeholder.style.display = "none";
          purchaseOptions.style.display = "none";
          purchaseSelect.style.borderBottomLeftRadius = "5px";
          purchaseSelect.style.borderBottomRightRadius = "5px";
          arrowIcon.style.transform = "rotate(0deg)";
          const selectedValue = option.getAttribute("data-value");

          const nativeSelectBoxValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLSelectElement.prototype,
            "value"
          ).set;

          const ev2 = new Event("change", { bubbles: true });

          nativeSelectBoxValueSetter.call(select, selectedValue);
          select.dispatchEvent(ev2);
        });
      });

      document.addEventListener("click", function (e) {
        if (!purchaseSelect.contains(e.target)) {
          purchaseOptions.style.display = "none";
          purchaseSelect.style.borderBottomLeftRadius = "5px";
          purchaseSelect.style.borderBottomRightRadius = "5px";
          arrowIcon.style.transform = "rotate(0deg)";
        }
      });
    }, 100);

    const formWrapper = document.querySelector("#pop_make_offer_modal_form");
    const mainWrapper = document.getElementById("make_offer_form_wrapper");

    const newSubmitFrm = document.createElement("div");
    newSubmitFrm.className = "submit-frm";

    newSubmitFrm.innerHTML = `
        <form
          id="pop_make_offer_modal_form_1"
          name="pop_make_offer_modal_form_1"
          class="form_input_element_mb-4 cm_register_form_box make_offer_modal_contact_consultant_form"
          autocomplete="on"
        >
          <fieldset>
            <ul class="pop_form_list">
              <li class="undefined">
                <div class="pop_input_text">
                  <label for="cus_first_name1">First Name</label
                  ><input
                    id="cus_first_name1"
                    name="cus_first_name1"
                    type="text"
                    placeholder="John"
                  />
                  </div>
                  <span class="error fname-err"></span>
              </li>
              <li class="undefined">
                <div class="pop_input_text">
                  <label for="cus_last_name1">Last Name</label
                  ><input
                    id="cus_last_name1"
                    name="cus_last_name1"
                    type="text"
                    placeholder="Doe"
                  />
                  </div>
                  <span class="error lname-err"></span>
              </li>
              <li class="undefined">
                <div class="pop_input_email">
                  <label for="cus_ea_address11">Email Address</label
                  ><input
                    id="cus_email_address1"
                    name="cus_email_address1"
                    type="email"
                    placeholder="email@address.com"
                  />
                  </div>
                  <span class="error email-err"></span>
              </li>
              <li class="undefined">
                <div class="pop_input_tel">
                  <label for="cus_tel_num1">Phone</label
                  ><input
                    id="cus_tel_num1"
                    name="cus_tel_num1"
                    type="text"
                    placeholder="(xxx) xxx-xxxx"
                    maxlength="14"
                    minlength="10"
                  />
                  </div>
                  <span class="error phoneno-err"></span>
              </li>
              <li class="undefined">
                <div class="pop_input_text">
                  <label for="cus_offer_amount1"
                    >Offer Amount</label
                  ><input
                    id="cus_offer_amount1"
                    name="cus_offer_amount1"
                    type="text"
                    placeholder=""
                  />
                  </div>
                  <span class="error offer-amt-err"></span>
              </li>
              <li>
                <div class="purchase-select pop_input_tel">
                  <label for="purchase_select">When do you want to purchase?</label>
                  <div class="select-button">
                    <select id="purchase-hidden-select">
                      <option value="">None</option>
                      <option value="Less_than_1_month">Less than 1 month</option>
                      <option value="Up_to_3_months">Up to 3 months</option>
                      <option value="Approximately_6_months">
                        Approximately 6 months
                      </option>
                      <option value="A_year_from_now">A year from now</option>
                      <option value="More_than_1_year">More than 1 year</option>
                      <option value="Just_browsing">Just browsing</option>
                    </select>
                    <div class="select-placeholder">Choose your option</div>
                    <div class="selected-option"></div>
                    <div class="arrow-icon">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.56386 11.8111L1.16638 5.02225C1.05958 4.90898 1 4.75848 1 4.60198C1 4.44549 1.05958 4.29499 1.16638 4.18172L1.17361 4.17441C1.22538 4.11931 1.2877 4.07543 1.35677 4.04545C1.42585 4.01546 1.50024 4 1.57541 4C1.65058 4 1.72496 4.01546 1.79404 4.04545C1.86311 4.07543 1.92543 4.11931 1.97721 4.17441L8.0012 10.5673L14.0228 4.17441C14.0746 4.11931 14.1369 4.07543 14.206 4.04545C14.275 4.01546 14.3494 4 14.4246 4C14.4998 4 14.5741 4.01546 14.6432 4.04545C14.7123 4.07543 14.7746 4.11931 14.8264 4.17441L14.8336 4.18172C14.9404 4.29499 15 4.44549 15 4.60198C15 4.75848 14.9404 4.90898 14.8336 5.02225L8.43614 11.8111C8.37988 11.8708 8.31221 11.9183 8.23724 11.9508C8.16227 11.9833 8.08156 12 8 12C7.91844 12 7.83773 11.9833 7.76276 11.9508C7.68779 11.9183 7.62012 11.8708 7.56386 11.8111Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="purchase-options">
                    <div class="purchase-option" data-value="Less_than_1_month">
                      Less than 1 month
                    </div>
                    <div class="purchase-option" data-value="Up_to_3_months">
                      Up to 3 months
                    </div>
                    <div
                      class="purchase-option"
                      data-value="Approximately_6_months"
                    >
                      Approximately 6 months
                    </div>
                    <div class="purchase-option" data-value="A_year_from_now">
                      A year from now
                    </div>
                    <div class="purchase-option" data-value="More_than_1_year">
                      More than 1 year
                    </div>
                    <div class="purchase-option" data-value="Just_browsing">
                      Just browsing
                    </div>
                  </div>
                  </div>
                  <span class="error purchase-select-err"></span>
              </li>
              <li class="undefined">
                <div class="pop_input_textarea">
                  <label for="cus_message1">My Message</label
                  ><textarea id="cus_message1" placeholder=""></textarea>
                  </div>
                  <span class="error msgbox-err"></span>
              </li>
            </ul>
          </fieldset>
          <div class="buttons form_btns">
            <button
              class="mb-4 button-yellow submit-full-width-mobile"
              id="submit1"
              type="submit1"
              form="pop_make_offer_modal_form_1"
              title="Submit"
            >
              Submit Offer
            </button>
          </div>
        </form>`;

    if (mainWrapper.children.length >= 2) {
      mainWrapper.insertBefore(newSubmitFrm, mainWrapper.children[2]);
    } else {
      mainWrapper.prepend(newSubmitFrm);
    }

    const formEle = document.querySelector(".submit-frm");

    const offerform = formEle.querySelector("#pop_make_offer_modal_form_1");

    const firstNameInput = document.getElementById("cus_first_name1");
    const lastNameInput = document.getElementById("cus_last_name1");
    const emailInput = document.getElementById("cus_email_address1");
    const phoneInput = document.getElementById("cus_tel_num1");
    const offerAmountInput = document.getElementById("cus_offer_amount1");
    const purchaseSelect = document.getElementById("purchase-hidden-select");
    const messageTextarea = document.getElementById("cus_message1");

    const requiredFieldValidation = (value, className, errMsg) => {
      if (value.trim().length <= 0) {
        document.querySelector(`.${className}`).innerText = errMsg;
        return false;
      }

      document.querySelector(`.${className}`).innerText = "";
      return true;
    };

    const formatPhoneNumber = (phoneNumber) => {
      phoneNumber = phoneNumber.replace(/\D/g, "");

      if (phoneNumber.length === 10) {
        return `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(
          3,
          6
        )}-${phoneNumber.substring(6)}`;
      }

      return phoneNumber;
    };

    const validatePhoneNumber = () => {
      const phoneInput = document.getElementById("cus_tel_num1");
      let phoneValue = phoneInput.value.trim();
      const phoneRegex =
        /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
      const errMsg = document.querySelector(".phoneno-err");
      errMsg.innerText = "";

      if (phoneValue.length <= 0) {
        errMsg.innerText = "Phone number is required.";
        return false;
      } else if (!numericRegex.test(phoneValue) && !phoneValue.includes("-")) {
        errMsg.innerText =
          "Please enter only numeric values for the phone number.";
      } else if (phoneValue.length < 10 || phoneValue.length > 14) {
        errMsg.innerText = "Phone number should be 10 digits.";
        return false;
      } else if (!phoneRegex.test(phoneValue)) {
        errMsg.innerText = "Invalid phone number format.";
        return false;
      }

      phoneValue = formatPhoneNumber(phoneValue);
      phoneInput.value = phoneValue;
      return true;
    };

    const validateOfferAmount = () => {
      const offerAmountInput = document.getElementById("cus_offer_amount1");
      const offerAmountValue = offerAmountInput.value.trim();
      const errMsg = document.querySelector(".offer-amt-err");
      errMsg.innerText = "";

      if (offerAmountValue === "") {
        errMsg.innerText = "Offer amount is required.";
        return false;
      } else if (!numericRegex.test(offerAmountValue)) {
        errMsg.innerText =
          "Please enter only numeric values for the offer amount.";
        return false;
      }

      return true;
    };

    const validateEmail = () => {
      const emailInput = document.getElementById("cus_email_address1");
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const errMsg = document.querySelector(".email-err");
      errMsg.innerText = "";

      if (emailValue === "") {
        errMsg.innerText = "Email address is required.";
        return false;
      } else if (!emailRegex.test(emailValue)) {
        errMsg.innerText =
          "Invalid email format. Please use a valid email address.";
        return false;
      }

      return true;
    };

    firstNameInput.addEventListener("input", (e) => {
      requiredFieldValidation(
        e.target.value,
        "fname-err",
        "First name is required"
      );
    });
    firstNameInput.addEventListener("blur", (e) => {
      requiredFieldValidation(
        e.target.value,
        "fname-err",
        "First name is required"
      );
    });

    lastNameInput.addEventListener("input", (e) => {
      requiredFieldValidation(
        e.target.value,
        "lname-err",
        "Last name is required"
      );
    });
    lastNameInput.addEventListener("blur", (e) => {
      requiredFieldValidation(
        e.target.value,
        "lname-err",
        "Last name is required"
      );
    });

    emailInput.addEventListener("input", validateEmail);
    emailInput.addEventListener("blur", validateEmail);

    phoneInput.addEventListener("input", validatePhoneNumber);
    phoneInput.addEventListener("blur", validatePhoneNumber);

    offerAmountInput.addEventListener("input", validateOfferAmount);
    offerAmountInput.addEventListener("blur", validateOfferAmount);

    purchaseSelect.addEventListener("change", (e) => {
      requiredFieldValidation(
        e.target.value,
        "purchase-select-err",
        "Purchase option is required"
      );
    });

    messageTextarea.addEventListener("input", (e) => {
      requiredFieldValidation(
        e.target.value,
        "msgbox-err",
        "Message is required"
      );
    });
    messageTextarea.addEventListener("blur", (e) => {
      requiredFieldValidation(
        e.target.value,
        "msgbox-err",
        "Message is required"
      );
    });

    const isValidForm = () => {
      const isValidFirstName = requiredFieldValidation(
        firstNameInput.value,
        "fname-err",
        "First name is required"
      );
      const isValidLastName = requiredFieldValidation(
        lastNameInput.value,
        "lname-err",
        "Last name is required"
      );
      const isValidPurchaseBox = requiredFieldValidation(
        purchaseSelect.value,
        "purchase-select-err",
        "Purchase option is required"
      );
      const isValidMgg = requiredFieldValidation(
        messageTextarea.value,
        "msgbox-err",
        "Message is required"
      );
      const isValidEmail = validateEmail();
      const isValidPhone = validatePhoneNumber();
      const isValidOfferAmount = validateOfferAmount();

      if (
        isValidFirstName &&
        isValidLastName &&
        isValidEmail &&
        isValidPurchaseBox &&
        isValidMgg &&
        isValidPhone &&
        isValidOfferAmount
      ) {
        return true;
      } else {
        return false;
      }
    };

    formWrapper.style.display = "none";

    offerform.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (isValidForm()) {
        const submitBtn = document
          .getElementById("pop_make_offer_modal_form_1")
          .querySelector("#submit1");
        submitBtn.innerText = "Loading...";
        submitBtn.disable = true;

        const values = {
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailInput.value,
          phone: phoneInput.value,
          offer: offerAmountInput.value,
          purchase: purchaseSelect.value,
          message: messageTextarea.value,
          page_url: location.href,
          time_stamp: new Date().toUTCString(),
        };

        const cusFname = document.getElementById("cus_first_name");
        const cusLname = document.getElementById("cus_last_name");
        const cusEmailAddress = document.getElementById("cus_ea_address");
        const cusPhoneNo = document.getElementById("cus_tel_num");
        const offerAmt = document.getElementById("cus_offer_amount");
        const msg = document.getElementById("cus_message");

        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        ).set;
        const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype,
          "value"
        ).set;

        const ev2 = new Event("input", { bubbles: true });

        nativeInputValueSetter.call(cusFname, values.firstName);
        cusFname.dispatchEvent(ev2);

        nativeInputValueSetter.call(cusLname, values.lastName);
        cusLname.dispatchEvent(ev2);

        nativeInputValueSetter.call(cusEmailAddress, values.email);
        cusEmailAddress.dispatchEvent(ev2);

        nativeInputValueSetter.call(cusPhoneNo, values.phone);
        cusPhoneNo.value = values.phone.replace(/[^0-9]/g, "");
        cusPhoneNo.dispatchEvent(ev2);

        nativeInputValueSetter.call(offerAmt, values.offer);
        offerAmt.dispatchEvent(ev2);

        nativeTextAreaValueSetter.call(
          msg,
          `${values.purchase} ${values.message}`
        );
        msg.dispatchEvent(ev2);

        await fetch(webHookUrl, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res && res.status === 200) {
              const form = document.querySelector("#pop_make_offer_modal_form");
              form.submit.click();
              submitBtn.innerText = "Submit";
              submitBtn.disable = false;
            }
          })
          .catch((err) => {
            console.log("Getting error >> ", err);
            submitBtn.innerText = "Submit";
            submitBtn.disable = false;
          });
      }
    });
  }, 100);
});
