function createTest() {
  const checkBoxes = [
    {
      id: 1,
      label: "It's too expensive",
      value: "Its_too_expensive",
    },
    {
      id: 2,
      label: "I'm not ready to buy yet/just browsing",
      value: "im_not_ready_to_buy_yet/just_browsing",
    },
    {
      id: 3,
      label: "It doesn't cover what I need",
      value: "it_doesn't_cover_what_i_need",
    },
    {
      id: 4,
      label: "It's difficult to check out",
      value: "its_difficult_to_check_out",
    },
    {
      id: 5,
      label: "I didn't mean to check out",
      value: "i_didn't_mean_to_check_out",
    },
    {
      id: 6,
      label: "I found a plan from another company",
      value: "i_found_a_plan_from_another_company",
    },
    {
      id: 7,
      label: "I need more information before I purchase",
      value: "i_need_more_information_before_i_purchase",
    },
    {
      id: 8,
      label: "I don't trust American Water Resources",
      value: "i_don't_trust_american_water_resources",
    },
    {
      id: 9,
      label: "Other  ______________",
      value: "other",
    },
  ];

  let selectedCheckBoxes = [];

  const interval = setInterval(() => {
    // $("#bio_ep").removeAttr("style")

    if ($(".checkbox_container")) {
      $(".popup-wrapper").css("display", "flex");
      $(".checkbox_container").html(`
        ${checkBoxes
          .map(({ value, label, id }) => {
            return `
            <label for="checkbox${id}" class="checkbox_wrapper control-checkbox">
                <input id="checkbox${id}" value="${value}" type="checkbox" />
                <div class="checkbox_indicator"></div>
                <p>${label}</p>
            </label>
        `;
          })
          .join(" ")}
    `);

      $(".popup_submit_btn").attr("disabled", true);

      const handleChange = (e) => {
        if (e.target.checked) {
          selectedCheckBoxes.push(e.target.value);
        } else {
          selectedCheckBoxes = selectedCheckBoxes.filter((val) => {
            return val !== e.target.value;
          });
        }

        if (selectedCheckBoxes.length <= 0) {
          $(".popup_submit_btn").attr("disabled", true);
        } else {
          $(".popup_submit_btn").attr("disabled", false);
        }
      };

      $(".popup-close_btn").click(() => {
        $("#bio_ep_close").click();
      });

      $(".popup_submit_btn").click(() => {
        $(".popup_submit_btn").attr("disabled", true);
        $(".popup_submit_btn").text("Loading...");
        console.log("submited ", selectedCheckBoxes);
        setTimeout(() => {
          $("#bio_ep_close").click();
        }, 1000);
      });

      $("#checkbox1").change((e) => {
        handleChange(e);
      });

      $("#checkbox2").change((e) => {
        handleChange(e);
      });

      $("#checkbox3").change((e) => {
        handleChange(e);
      });

      $("#checkbox4").change((e) => {
        handleChange(e);
      });

      $("#checkbox5").change((e) => {
        handleChange(e);
      });

      $("#checkbox6").change((e) => {
        handleChange(e);
      });

      $("#checkbox7").change((e) => {
        handleChange(e);
      });

      $("#checkbox8").change((e) => {
        handleChange(e);
      });

      $("#checkbox9").change((e) => {
        handleChange(e);
      });

      clearInterval(interval);
    }
  }, 100);
}
