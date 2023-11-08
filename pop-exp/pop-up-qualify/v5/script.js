const webHookUrl = "https://hook.us1.make.com/1i29k8lt532aubof1kc3xz8vlr462yb8";

const makeOfferBtn = document.getElementsByClassName(
  "_lis_id__lis_btn_cta_item__hRYdk _lis_id__lis_cta_top_btn_blue__HGMwH model_tab_btn"
);

makeOfferBtn[0].addEventListener("click", () => {
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
          select.value = option.getAttribute("data-value");
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
    const mainWrapper = document.querySelectorAll(
      ".make_offer_modal_modal_column__Dylcr"
    )[1];
    const newSubmitFrm = document.createElement("div");
    newSubmitFrm.className = "submit-frm";

    newSubmitFrm.innerHTML = `
        <form
          id="pop_make_offer_modal_form_1"
          name="pop_make_offer_modal_form_1"
          class="form_input_element_mb-4__4HWJW cm_register_form_box make_offer_modal_contact_consultant_form__g_a_7"
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
                    required=""
                    pattern="^^[A-Za-z0-9\s!@#$%^&amp;*()_+=-'~\\\]\[{}|';:/.,?><]*$"
                    title=""
                  />
                </div>
              </li>
              <li class="undefined">
                <div class="pop_input_text">
                  <label for="cus_last_name1">Last Name</label
                  ><input
                    id="cus_last_name1"
                    name="cus_last_name1"
                    type="text"
                    placeholder="Doe"
                    required=""
                    pattern="^^[A-Za-z0-9\s!@#$%^&amp;*()_+=-'~\\\]\[{}|';:/.,?><]*$"
                    title=""
                  />
                </div>
              </li>
              <li class="undefined">
                <div class="pop_input_email">
                  <label for="cus_ea_address11">Email Address</label
                  ><input
                    id="cus_email_address1"
                    name="cus_email_address1"
                    type="email"
                    placeholder="email@address.com"
                    required=""
                    pattern="^[a-zA-Z0-9.!#$%&amp;’*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                    title="Please use the format: test@test.com"
                  />
                </div>
              </li>
              <li class="undefined">
                <div class="pop_input_tel">
                  <label for="cus_tel_num1">Phone</label
                  ><input
                    id="cus_tel_num1"
                    name="cus_tel_num1"
                    type="tel"
                    maxlength="14"
                    minlength="10"
                    placeholder="(xxx) xxx-xxxx"
                    required=""
                    pattern="^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$"
                    title="Please enter a 10 digit phone number"
                    autocomplete="off"
                  />
                </div>
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
                    pattern="^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$"
                    title="Please only include numeric values."
                    value=""
                  />
                </div>
              </li>
              <li>
                <div class="purchase-select pop_input_tel">
                  <label for="purchase_select">When do you want to purchase?</label>
                  <div class="select-button">
                    <select id="purchase-hidden-select" required="">
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
              </li>
              <li class="undefined">
                <div class="pop_input_textarea">
                  <label for="cus_message1">My Message</label
                  ><textarea id="cus_message1" placeholder="" required=""></textarea>
                </div>
              </li>
            </ul>
          </fieldset>
          <div class="buttons form_btns">
            <button
              class="mb-4 button-yellow"
              id="submit1"
              type="submit1"
              form="pop_make_offer_modal_form_1"
              title="Submit"
            >
              Submit
            </button>
          </div>
        </form>`;

    mainWrapper.prepend(newSubmitFrm);

    const formEle = document.querySelector(".submit-frm");

    const offerform = formEle.querySelector("#pop_make_offer_modal_form_1");

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

    formWrapper.style.display = "none";

    const formatInput = () => {
      const inputElement = document.getElementById("cus_tel_num1");
      const formattedPhoneNumber = formatPhoneNumber(inputElement.value);
      inputElement.value = formattedPhoneNumber;
    };

    document
      .getElementById("cus_tel_num1")
      .addEventListener("input", formatInput);

    offerform.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = document
        .getElementById("pop_make_offer_modal_form_1")
        .querySelector("#submit1");
      submitBtn.innerText = "Loading...";
      submitBtn.disable = true;
      
      const values = {
        firstName: document.getElementById("cus_first_name1").value,
        lastName: document.getElementById("cus_last_name1").value,
        email: document.getElementById("cus_email_address1").value,
        phone: document.getElementById("cus_tel_num1").value,
        offer: document.getElementById("cus_offer_amount1").value,
        purchase: document.getElementById("purchase-hidden-select").value,
        message: document.getElementById("cus_message1").value,
        page_url: location.href,
        time_stamp: new Date().toUTCString()
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
    });
  }, 100);
});
