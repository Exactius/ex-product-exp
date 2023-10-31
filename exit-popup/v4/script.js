function createTest() {
  const checkBoxes = [
    {
      id: 1,
      label: "It's too expensive",
      value: "Too expensive",
    },
    {
      id: 2,
      label: "I'm not ready to buy yet/just browsing",
      value: "Not ready to buy yet/just browsing",
    },
    {
      id: 3,
      label: "It doesn't cover what I need",
      value: "Not the coverage I'm looking for",
    },
    {
      id: 4,
      label: "It's difficult to check out",
      value: "Poor user experience",
    },
    {
      id: 5,
      label: "I didn't mean to check out",
      value: "I didn't mean to checkout",
    },
    {
      id: 6,
      label: "I found a plan from another company",
      value: "I found a plan from another company",
    },
    {
      id: 7,
      label: "I need more information before I purchase",
      value: "Missing information/Lack of trust",
    },
    {
      id: 8,
      label: "I don't trust American Water Resources",
      value: "I don't trust American Water Resources",
    },
    {
      id: 9,
      label: "Other",
      value: "other_ans-",
    },
  ];

  let answers = [];
  let other_ans = "";

  const shuffleArray = (array) => {
    for (let i = array.length - 2; i > 0; i--) {
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
          if (e.target.value.includes("other_ans")) {
            answers.push(other_ans || e.target.value);
          } else {
            answers.push(e.target.value);
          }
        } else {
          answers = answers.filter((val) => {
            return !val.includes(e.target.value);
          });
        }

        if (answers.length <= 0) {
          $(".popup_submit_btn").attr("disabled", true);
        } else {
          $(".popup_submit_btn").attr("disabled", false);
        }
      };

      $(".popup-close_btn").click(() => {
        $("#bio_ep_close").click();
      });

      $(".popup_submit_btn").click(async () => {
        $(".popup_submit_btn").attr("disabled", true);
        $(".popup_submit_btn").text("Loading...");
        const formattedAnswers = answers.map((ans) => {
          if (ans.includes("other_ans")) {
            return ans
              .replace(
                "other_ans-",
                $(".other_input").val().length <= 0 ? "Other " : ""
              )
              .trim();
          } else {
            return ans;
          }
        });

        const body = {
          url: window.location.href,
          answers: formattedAnswers,
        };

        await fetch(
          `https://hook.us1.make.com/yg8q9ugv58i3emftujp4hsfi88qv67bg`,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            if (res && res.status === 200) {
              $("#bio_ep_close").click();
            }
          })
          .catch((err) => {
            console.log("Getting error >> ", err);
          });

        $(".popup_submit_btn").text("Submit");
        $(".popup_submit_btn").attr("disabled", false);
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
        other_ans = `other_ans-${e.target.value}`;
        answers = answers.filter((item) => {
          return !item.includes("other_ans");
        });

        answers.push(other_ans);
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
