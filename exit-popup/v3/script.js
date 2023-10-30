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
      label: "Other",
      value: "other_input",
    },
  ];

  let selectedCheckBoxes = [];
  let other_input_val = "";

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // shuffle checkboxes array
  shuffleArray(checkBoxes);

  const interval = setInterval(() => {
    if ($(".checkbox_container")) {
      $(".popup-wrapper").css("display", "flex");
      $(".checkbox_container").html(`
          ${checkBoxes
            .map(({ value, label, id }) => {
              return `
              <label for="checkbox${id}" class="checkbox_wrapper control-checkbox">
                  <input id="checkbox${id}" value="${value}" type="checkbox" />
                  <div class="checkbox_indicator"></div>
                  ${
                    label.toLowerCase() !== "other"
                      ? `<p>${label}</p>`
                      : `<p>${label}  <input type="text" class="other_input" disabled /></p>`
                  }
              </label>
          `;
            })
            .join(" ")}
      `);

      $(".popup_submit_btn").attr("disabled", true);

      const handleChange = (e) => {
        if (e.target.checked) {
          if (e.target.value.includes("other_input")) {
            selectedCheckBoxes.push(other_input_val || e.target.value);
          } else {
            selectedCheckBoxes.push(e.target.value);
          }
        } else {
          selectedCheckBoxes = selectedCheckBoxes.filter((val) => {
            return !val.includes(e.target.value);
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
          $(".popup_submit_btn").text("Submit");
          $(".popup_submit_btn").attr("disabled", false);
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
        if (e.target.checked) {
          $(".other_input").attr("disabled", false);
        } else {
          $(".other_input").attr("disabled", true);
        }
      });

      $(".other_input").change((e) => {
        other_input_val = `other_input_${e.target.value}`;
        selectedCheckBoxes = selectedCheckBoxes.filter((item) => {
          return !item.includes("other_input");
        });

        selectedCheckBoxes.push(other_input_val);
      });

      clearInterval(interval);
    }
  }, 100);
}

const setIdleTimeout = (millis) => {
  let timeout = 0;

  const onActivity = () => {
    if (timeout) clearTimeout(timeout);

    window.removeEventListener("mousemove", onActivity);
    window.removeEventListener("keypress", onActivity);
    window.removeEventListener("scroll", onActivity);
    window.removeEventListener("click", onActivity);
    window.removeEventListener("keydown", onActivity);
    setTimeout(startTimer, 1000);
  };

  const onExpires = () => {
    timeout = 0;
    bioEp?.showPopup();
  };

  const startTimer = () => {
    timeout = setTimeout(onExpires, millis);
    window.addEventListener("mousemove", onActivity);
    window.addEventListener("keypress", onActivity);
    window.addEventListener("scroll", onActivity);
    window.addEventListener("click", onActivity);
    window.addEventListener("keydown", onActivity);
  };

  startTimer();
};
