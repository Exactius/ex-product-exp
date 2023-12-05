const CreateSelectBox = (mainWrapperClassName) => {
  const select = document.querySelector(
    `.${mainWrapperClassName} .purchase-select select`
  );
  const options = document.querySelectorAll(
    `.${mainWrapperClassName} .purchase-option`
  );
  const purchaseSelect = document.querySelector(
    `.${mainWrapperClassName} .purchase-select .select-button`
  );
  const selectedOption = document.querySelector(
    `.${mainWrapperClassName} .purchase-select .selected-option`
  );
  const selectedOptionValue = document.querySelector(
    `.${mainWrapperClassName} .purchase-hidden-select`
  );
  const placeholder = document.querySelector(
    `.${mainWrapperClassName} .purchase-select .select-placeholder`
  );
  const purchaseOptions = document.querySelector(
    `.${mainWrapperClassName} .purchase-options`
  );
  const arrowIcon = document.querySelector(
    `.${mainWrapperClassName} .arrow-icon`
  );

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
};

const LoadCalendarScript = () => {
  const calendar = document.querySelector("#calendar_main"),
    bestDate = document.querySelector("#bestDate"),
    alternativeDate = document.querySelector("#alternativeDate"),
    calHeaderTitle = document.querySelector("#calendar_header span"),
    calDays = document.querySelector("#cal_days"),
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

  let selectedDay = null;

  // month param 0-11
  const getNumberOfDays = (year, month) => {
    return 40 - new Date(year, month, 40).getDate();
  };

  // Calc day details
  const getDayDetails = (args) => {
    let date = args.index - args.firstDay;
    let day = args.index % 7;
    let prevMonth = args.month - 1;
    let prevYear = args.year;

    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);

    let _date =
      (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;

    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();

    return {
      date: _date,
      day,
      month,
      timestamp,
      dayString: days[day],
    };
  };

  // [{}] each {} with details for each day of month
  const getMonthDetails = (year, month) => {
    let firstDay = new Date(year, month).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 5;
    let currentDay = null;
    let index = 0;
    let cols = 7;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        currentDay = getDayDetails({
          index,
          numberOfDays,
          firstDay,
          year,
          month,
        });

        monthArray.push(currentDay);
        index++;
      }
    }
    return monthArray;
  };
  // Use: getMonthDetails(2023, 3)

  // Variables that get updated with "state" changes
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let monthDetails = getMonthDetails(year, month);

  // Checks if day is one selected
  const isSelectedDay = (day, cell) => {
    if (day.timestamp === selectedDay) {
      cell.classList.add("active");
      cell.classList.add("isSelected");
    }
  };

  // Get month str
  const getMonthStr = (month) =>
    months[Math.max(Math.min(11, month), 0)] || "Month";

  // Set year using arrows
  const setHeaderNav = (offset) => {
    month = month + offset;
    if (month === -1) {
      month = 11;
      year--;
    } else if (month === 12) {
      month = 0;
      year++;
    }

    monthDetails = getMonthDetails(year, month);

    return {
      year,
      month,
      monthDetails,
    };
  };

  // Set dynamic calendar header
  const setHeader = (year, month) => {
    calHeaderTitle.innerHTML = getMonthStr(month) + " " + year;
  };

  // Set calendar header
  setHeader(year, month);

  // Add days row to calendar
  for (let i = 0; i < days.length; i++) {
    let div = document.createElement("div"),
      span = document.createElement("span");

    div.classList.add("cell_wrapper");
    span.classList.add("cell_item");

    span.innerText = days[i].slice(0, 1);

    div.appendChild(span);
    calDays.appendChild(div);
  }

  // Add dates to calendar
  const setCalBody = (monthDetails) => {
    const today = new Date();
    const currentTimestamp = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    ).getTime();

    // Add dates to calendar
    for (let i = 0; i < monthDetails.length; i++) {
      let div = document.createElement("div"),
        span = document.createElement("span");

      div.classList.add("cell_wrapper");
      div.classList.add("cal_date");
      monthDetails[i].month === 0 && div.classList.add("current");
      span.classList.add("cell_item");

      span.innerText = monthDetails[i].date;

      if (monthDetails[i].timestamp < currentTimestamp) {
        div.classList.remove("current");
      } else if (monthDetails[i].month === 0) {
        div.classList.add("current");
      }

      div.appendChild(span);
      calendar.appendChild(div);
    }
  };

  setCalBody(monthDetails);

  const updateCalendar = (btn) => {
    let newCal, offset;

    if (btn.classList.contains("back")) {
      offset = -1;
    } else if (btn.classList.contains("front")) {
      offset = 1;
    }

    newCal = setHeaderNav(offset);
    setHeader(newCal.year, newCal.month);
    calendar.innerHTML = "";
    setCalBody(newCal.monthDetails);
  };

  let firstSelectedDay = null;
  let secondSelectedDay = null;

  const getDateStringFromTimestamp = (timestamp) => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth();
    let date = dateObject.getDate();

    return `${getMonthStr(month)} ${date}, ${dateObject.getFullYear()}`;
  };

  const setDateToInput = (timestamp) => {
    alternativeDate.value = "";
    let dateString = getDateStringFromTimestamp(timestamp);
    bestDate.value = dateString;
  };

  // Function to format the date as "dd-mm-yyyy"
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}. ${day}, ${year}`;
  };

  const defaultSelection = () => {
    let oneDay = 60 * 60 * 24 * 1000;
    let todayTimestamp =
      Date.now() -
      (Date.now() % oneDay) +
      new Date().getTimezoneOffset() * 1000 * 60;

    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 4); // Setting the end date as 4 days ahead

    const endDateTimestamp = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    ).getTime();

    setDateToInput(todayTimestamp);
    bestDate.value = formatDate(todayTimestamp);
    alternativeDate.value = formatDate(endDateTimestamp);
    const tableCells = document.querySelectorAll(`.cal_date.current span`);

    tableCells.forEach((cell) => {
      if (cell.innerText === today.getDate().toString()) {
        firstSelectedDay = cell.parentNode;
        cell.parentElement.classList.add("isSelected", "active");
      }

      if (cell.innerText === endDate.getDate().toString()) {
        secondSelectedDay = cell.parentNode;
        cell.parentElement.classList.add("isSelected", "active");
      }
    });
  };

  const updateInput = () => {
    document
      .querySelectorAll(".cell_wrapper.cal_date.current")
      .forEach((cell) => {
        cell.addEventListener("click", (e) => {
          let cell_date = e.target.textContent;

          if (firstSelectedDay && secondSelectedDay) {
            alternativeDate.value = "";
            firstSelectedDay.classList.remove("active");
            secondSelectedDay.classList.remove("active");
            firstSelectedDay = null;
            secondSelectedDay = null;
          }

          if (!firstSelectedDay) {
            firstSelectedDay = cell;
            selectedDay = monthDetails.find(
              (day) => day.date === parseInt(cell_date) && day.month === 0
            ).timestamp;

            isSelectedDay(
              monthDetails.find((day) => day.timestamp === selectedDay),
              cell
            );

            bestDate.value = formatDate(selectedDay);
          } else if (!secondSelectedDay) {
            secondSelectedDay = cell;
            selectedDay = monthDetails.find(
              (day) => day.date === parseInt(cell_date) && day.month === 0
            ).timestamp;
            isSelectedDay(
              monthDetails.find((day) => day.timestamp === selectedDay),
              cell
            );

            if (firstSelectedDay && secondSelectedDay) {
              const endTimestamp = monthDetails.find(
                (day) =>
                  day.date === parseInt(secondSelectedDay.textContent) &&
                  day.month === 0
              ).timestamp;

              const endDate = formatDate(endTimestamp);

              alternativeDate.value = endDate;

              if (bestDate.value > endDate) {
                alternativeDate.value = bestDate.value;
                bestDate.value = endDate;
              }
            }
          }
        });
      });
  };

  defaultSelection();
  updateInput();

  // Set header nav actions
  document.querySelectorAll(".cal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      updateCalendar(btn);
      updateInput();
    });
  });
};
