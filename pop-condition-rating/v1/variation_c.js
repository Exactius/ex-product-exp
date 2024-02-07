const divEle = document.createElement("div");

const conditionHTML = `
    <ul class="condition_container">
      <li class="condition_item">
        <div class="condition_item__left">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="condition_item__icon"
          >
            <path
              d="M7.49969 7.50174L10.7138 10.7156M7.49969 7.50174L8.99959 6.00194V5.78768L7.76539 5.27346C6.87832 4.9038 6.04743 4.41165 5.29699 3.81136L4.28563 3.00232H4.07136L3 4.07361V4.28787L3.80909 5.29917C4.40941 6.04957 4.9016 6.8804 5.27127 7.76742L5.78553 9.00155H5.9998L7.49969 7.50174ZM13.4856 16.2863C14.8302 17.8121 16.1211 19.3843 17.3562 21H17.5704L20.9988 17.5719V17.3576C20.9988 17.3576 18.8818 15.7704 16.2848 13.4873M16.7134 11.5726C17.425 11.5728 18.1255 11.3958 18.7517 11.0575C19.3778 10.7193 19.9098 10.2304 20.2997 9.63508C20.6896 9.03974 20.925 8.35669 20.9848 7.64758C21.0446 6.93847 20.9269 6.22564 20.6422 5.57342H20.1417L17.5704 8.14452H15.8563V6.43045L18.4275 3.85936V3.35885C17.6593 3.02301 16.8095 2.91988 15.9832 3.06222C15.157 3.20456 14.3906 3.58613 13.7791 4.15966C13.1676 4.7332 12.7378 5.4735 12.5428 6.28889C12.3479 7.10428 12.3965 7.95894 12.6825 8.74701L11.1423 10.2871C7.28542 14.1437 3 17.3576 3 17.3576V17.5719L6.42834 21H6.64261C6.64261 21 9.85668 16.7148 13.7136 12.8582L15.2537 11.3181C15.7218 11.4872 16.2157 11.5734 16.7134 11.5726Z"
              stroke="black"
            />
          </svg>

          <p class="condition_item__title">Vehicle Condition</p>
        </div>

        <button class="condition_item_action__btn see_vehicle_condition_btn">
          See More
        </button>
      </li>
    </ul>`;

divEle.innerHTML = conditionHTML;

const priceWrapper = document.querySelector(
  ".auto_apr_ldp_banner_auto_apr_banner_container__eNccl"
);

if (priceWrapper) {
  priceWrapper.after(divEle);

  const see_vehicle_condition_btn = document.querySelector(
    ".see_vehicle_condition_btn"
  );
  const conditionBtn = document.querySelector("#button_pop_vdp_unit_condition");
  const featureBtn = document.querySelector("#button_pop_lis_features");

  const conditionAccordianWrapper = document.querySelector(
    "#pop_vdp_unit_condition"
  );

  see_vehicle_condition_btn.addEventListener("click", () => {
    if (
      !conditionAccordianWrapper.classList.value.includes(
        "lis_detail_accordion_section_open"
      )
    ) {
      conditionBtn.click();
    }

    setTimeout(() => {
      if (window.innerWidth > 900) {
        conditionBtn.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        featureBtn.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);
  });
}
