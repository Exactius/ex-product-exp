(function () {
  const cookieName = "#2025_AWR_Product_List_Popup";
  const cookieValue = "1";
  const myDate = new Date();
  const imgURL = "//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/2025";

  const imgBaseUrl =
    "https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/new-list-page/assets/images";

  myDate.setDate(myDate.getDate() + 30);
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
  var datalayerFlag = false;

  const comboManagement = [
    {
      comboName: "Water Line and Sewer Line Protection Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
      ],
    },
    {
      comboName: "Unlimited Water Line and Sewer Line Protection Program",
      comboProducts: [
        "Unlimited Water Line Protection Program",
        "Unlimited Sewer Line Protection Program",
      ],
    },
    {
      comboName: "Water Line and Sewer Line Unlimited Protection Program",
      comboProducts: [
        "Water Line Unlimited Protection Program",
        "Sewer Line Unlimited Protection Program",
      ],
    },
    {
      comboName: "Water Line and Sewer Line Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy",
      ],
    },
    {
      comboName: "Water Line & Sewer Line Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy",
      ],
    },
    {
      comboName: "Water Line, Sewer Line and In-Home Plumbing Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy",
        "In-Home Plumbing Insurance Policy",
      ],
    },
    {
      comboName: "Water Line, Sewer Line and In Home Plumbing Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy",
        "In Home Plumbing Insurance Policy",
      ],
    },
    {
      comboName: "Water Line, Sewer Line & In-Home Plumbing Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy",
        "In-Home Plumbing Insurance Policy",
      ],
    },
    {
      comboName: "Heating and Cooling System Repair Program",
      comboProducts: [
        "Heating System Repair Program",
        "Cooling System Repair Program",
      ],
    },
    {
      comboName: "Heating & Cooling System Repair Program",
      comboProducts: [
        "Heating System Repair Program",
        "Cooling System Repair Program",
      ],
    },
    {
      comboName:
        "Water Line, Sewer Line and In-Home Plumbing Emergency Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
        "In-Home Plumbing Emergency Program",
      ],
    },
    {
      comboName:
        "Water Line, Sewer Line and In Home Plumbing Emergency Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
        "In Home Plumbing Emergency Program",
      ],
    },
    {
      comboName:
        "Water Line, Sewer Line and In-Home Plumbing Protection Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
        "In-Home Plumbing Emergency Program",
      ],
    },
    {
      comboName:
        "Water Line, Sewer Line and In Home Plumbing Protection Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
        "In Home Plumbing Protection Program",
      ],
    },
  ];

  const relatedProducts = [
    {
      productFilterName: "Water Line Protection Program",
      productImage: imgURL + "/products/Water_Line_Repair_Plan.png",
      productNewName: "Water Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName: "Unlimited Water Line Protection Program",
      productImage: imgURL + "/products/Water_Line_Repair_Plan.png",
      productNewName: "Water Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName: "Water Service Line Protection Program",
      productImage: imgURL + "/products/Water_Line_Repair_Plan.png",
      productNewName: "Water Service Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName: "Sewer Line Protection Program",
      productImage: imgURL + "/products/Sewer_Line_Repair_Plan.png",
      productNewName: "Sewer Line Repair Plan",
      coverSubheading:
        "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName: "Unlimited Sewer Line Protection Program",
      productImage: imgURL + "/products/Sewer_Line_Insurance_Policy.png",
      productNewName: "Sewer Line Repair Plan",
      coverSubheading:
        "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName: "Sewer Service Line Protection Program",
      productImage: imgURL + "/products/Sewer_Line_Insurance_Policy.png",
      productNewName: "Sewer Service Line Repair Plan",
      coverSubheading:
        "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName: "Water Line and Sewer Line Protection Program",
      productImage:
        imgURL + "/products/Water_Line___Sewer_Line_Repair_Plan.png",
      productNewName: "Water Line & Sewer Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "popular",
    },
    {
      productFilterName:
        "Unlimited Water Line and Sewer Line Protection Program",
      productImage:
        imgURL + "/products/Water_Line___Sewer_Line_Repair_Plan.png",
      productNewName: "Water Line & Sewer Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In-Home Plumbing Emergency Program",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName:
        "Water Line, Sewer Line  and In-Home Emergency Plumbing Repair Plan",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In Home Plumbing Emergency Program",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName:
        "Water Line, Sewer Line  and In-Home Emergency Plumbing Repair Plan",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In Home Plumbing Protection Program",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName:
        "Water Line, Sewer Line  and In-Home Emergency Plumbing Repair Plan",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In-Home Plumbing Protection Program",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName:
        "Water Line, Sewer Line  and In-Home Emergency Plumbing Repair Plan",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In Home Plumbing Emergency Program",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName:
        "Water Line, Sewer Line  and In-Home Emergency Plumbing Repair Plan",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName: "In Home Plumbing Protection Program",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Emergency Repair Plan",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: "",
    },
    {
      productFilterName: "In-Home Plumbing Emergency Program",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Emergency Repair Plan",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: "",
    },
    {
      productFilterName: "In Home Plumbing Emergency Program",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Emergency Repair Plan",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: "",
    },
    {
      productFilterName: "Heating and Cooling System Repair Program",
      productImage:
        imgURL + "/products/Heating_and_Cooling_System_Repair_Plan.png",
      productNewName: "Heating and Cooling System Repair Plan",
      coverSubheading:
        "Protect the heating and cooling systems and avoid the hassle and cost of repairs.",
      popularProduct: "",
    },
    {
      productFilterName: "Heating & Cooling System Repair Program",
      productImage:
        imgURL + "/products/Heating_and_Cooling_System_Repair_Plan.png",
      productNewName: "Heating and Cooling System Repair Plan",
      coverSubheading:
        "Protect the heating and cooling systems and avoid the hassle and cost of repairs.",
    },
    {
      productFilterName: "Heating System Repair Program",
      productImage: imgURL + "/products/Heating_System_Repair_Plan.png",
      productNewName: "Heating System Repair Plan",
      coverSubheading:
        "Get protection for your heating system including labor and materials for those repairs.",
      popularProduct: "",
    },
    {
      productFilterName: "Cooling System Repair Program",
      productImage: imgURL + "/products/Cooling_System_Repair_Plan.png",
      productNewName: "Cooling System Repair Plan",
      coverSubheading:
        "Protect your cooling system  including labor and materials for those repairs.",
      popularProduct: "",
    },
    {
      productFilterName: "Water Heater Repair and Replacement Program",
      productImage:
        imgURL + "/products/Water_Heater_Repair_and_Replacement_Plan.png",
      productNewName: "Water Heater Repair and Replacement Repair Plan",
      coverSubheading:
        "Cover you water heater fails due to normal wear and tear. Get replacement through one of our service providers",
      popularProduct: "",
    },
    {
      productFilterName: "Gas Line Protection Program",
      productImage: imgURL + "/products/Gas_Line_Repair_Plan.png",
      productNewName: "Gas Line Repair Plan",
      coverSubheading:
        "Get repairs from leaks in the exposed interior natural gas pipes running through your house as well as the flexible connectors due to normal wear or defects.",
      popularProduct: "",
    },
    {
      productFilterName: "Interior Electric Line Protection Program",
      productImage: imgURL + "/products/Interior_Electric_Line_Repair_Plan.png",
      productNewName: "Interior Electric Line Repair Plan",
      coverSubheading:
        "Get protected from interior electric line failures including costs like contractor, labor, parts, and even paperwork.",
      popularProduct: "",
    },
    {
      productFilterName: "Exterior Electric Line Protection Program",
      productImage: imgURL + "/products/Exterior_Electric_Line_Repair_Plan.png",
      productNewName: "Exterior Electric Line Repair Plan",
      coverSubheading:
        "Cover your repairs to overhead and underground exterior electric lines, including the permanent wiring to fixtures such as light posts, detached garages and pool pumps.",
      popularProduct: "",
    },
    {
      productFilterName: "In-Home Plumbing Plus Program",
      productImage: imgURL + "/products/In-Home_Plumbing_Plus_Repair_Plan.png",
      productNewName: "In-Home Plumbing Plus Repair Plan",
      coverSubheading:
        "Protect your home's interior water supply and wastewater drainage systems. Think overflowing toilet, broken water pipe under your sink (or behind the walls).",
      popularProduct: "",
    },
    {
      productFilterName: "In-Home Plumbing Plus Program",
      productImage: imgURL + "/products/In-Home_Plumbing_Plus_Repair_Plan.png",
      productNewName: "In-Home Plumbing Plus Repair Plan",
      coverSubheading:
        "Protect your home's interior water supply and wastewater drainage systems. Think overflowing toilet, broken water pipe under your sink (or behind the walls).",
      popularProduct: "",
    },
    {
      productFilterName:
        "Water Line and Sewer Line Unlimited Protection Program",
      productImage:
        imgURL +
        "/products/Water_Line_and_Sewer_Line_Unlimited_Repair_Plan.png",
      productNewName: "Water Line and Sewer Line Unlimited Repair Plan",
      coverSubheading:
        "Bundle your protection on your home's water and sewer lines and save on your monthly payment.",
      popularProduct: "",
    },
    {
      productFilterName: "Water Line Unlimited Protection Program",
      productImage: imgURL + "/products/Water_Line_Unlimited_Repair_Plan.png",
      productNewName: "Water Line Unlimited Repair Plan",
      coverSubheading:
        "Get coverage for repairs to a broken or leaking water pipe. Normal wear and tear, corrosion, or even soil conditions.",
      popularProduct: "",
    },
    {
      productFilterName: "Sewer Line Unlimited Protection Program",
      productImage: imgURL + "/products/Sewer_Line_Repair_Plan.png",
      productNewName: "Sewer Line Unlimited Repair Plan",
      coverSubheading:
        "Cover your repairs to a clogged, blocked, or leaking sewer pipe.",
      popularProduct: "",
    },
    {
      productFilterName: "Surge Protection Program",
      productImage: imgURL + "/products/Surge_Protection.png",
      productNewName: "Surge Repair Plan",
      coverSubheading:
        "Our Surge Protection Program gives you financial protection for all your home's electronics and electric appliances valued at $100 or more.",
    },
    {
      productFilterName: "Power Surge Protection Program",
      productImage: imgURL + "/products/Power_Surge_Protection.png",
      productNewName: "Power Surge Repair Plan",
      coverSubheading:
        "Power surges can happen at any time & lead to sudden death for your appliances. Its not always covered by homeowners insurance. With AWR your appliances are protected.",
      popularProduct: "",
    },
    {
      productFilterName: "In-Home Plumbing Clog Protection Program",
      productImage: imgURL + "/products/In-Home_Plumbing_Clog_Protection.png",
      productNewName: "In-Home Plumbing Clog Repair Plan",
      coverSubheading:
        "With this protection program, help is just a phone call away. We'll send out a pre-qualified local service provider to clear any clogs or blockages you can't prevent.",
      popularProduct: "",
    },
    {
      productFilterName: "Energy Essentials Protection Program",
      productImage: imgURL + "/products/Energy_Essentials_Proteciton.png",
      productNewName: "Energy Essentials Repair Plan",
      coverSubheading:
        "This valuable bundled package provides repair coverage for gas lines, electric lines, and expense of damage to electronics from electric surges.",
    },
    {
      productFilterName: "Well System and Septic Line Protection Program",
      productImage:
        imgURL + "/products/Well_System_and_Septic_Line_Repair_Plan.png",
      productNewName: "Well System and Septic Line Repair Plan",
      coverSubheading:
        "This combo plan offers the best value and covers everything covered under Septic line and Well line protection.",
      popularProduct: "",
    },
    {
      productFilterName: "Well Line and Pump Protection Program",
      productImage: imgURL + "/products/Well_Line_and_Pump_Repair_Plan.png",
      productNewName: "Well Line and Pump Repair Plan",
      coverSubheading:
        "The plan covers the line from the house to the well tank, Pressure tank, Well pump, shutoff valves, Pressure gauges, & Electric cable.",
      popularProduct: "",
    },
    {
      productFilterName: "Septic Line Protection Program",
      productImage: imgURL + "/products/Septic_Line_Repair_Plan.png",
      productNewName: "Septic Line Repair Plan",
      coverSubheading:
        "Avoid Unexpected, Costly Repairs to Your Home's Septic System. The plan covers clogs and blockages",
      popularProduct: "",
    },
    {
      productFilterName: "Water Line Insurance Policy",
      productImage: imgURL + "/products/Water_Line_Repair_Plan.png",
      productNewName: "Water Line Insurance Policy",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName: "Sewer Line Insurance Policy",
      productImage: imgURL + "/products/Sewer_Line_Insurance_Policy.png",
      productNewName: "Sewer Line Insurance Policy",
      coverSubheading:
        "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "",
    },
    {
      productFilterName: "Water Line and Sewer Line Insurance Policy",
      productImage:
        imgURL + "/products/Water_Line___Sewer_Line_Repair_Plan.png",
      productNewName: "Water Line & Sewer Line Insurance Policy",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "popular",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In-Home Plumbing Insurance Policy",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName:
        "Water Line, Sewer Line and In-Home Plumbing Insurance Policy",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In Home Plumbing Insurance Policy",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName:
        "Water Line, Sewer Line and In-Home Plumbing Insurance Policy",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName: "In-Home Plumbing Insurance Policy",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Insurance Policy",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: "",
    },
    {
      productFilterName: "In Home Plumbing Insurance Policy",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Insurance Policy",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: "",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In-Home Plumbing Protection Program",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName: "Water Line, Sewer Line and In-Home Plumbing Protection",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName:
        "Water Line, Sewer Line and In-Home Plumbing Protection Program",
      productImage:
        imgURL +
        "/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png",
      productNewName: "Water Line, Sewer Line and In-Home Plumbing Protection",
      coverSubheading:
        "Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.",
      bestProduct: "best-product",
    },
    {
      productFilterName: "Preferred Cooling Protection Plan - Primary System",
      productImage:
        imgURL +
        "/products/Preferred_Cooling_Protection_Plan_-_Primary_System.png",
      productNewName: "Preferred Cooling Protection Plan - Primary System",
      coverSubheading:
        "With Preferred Cooling Protection, you'll be protected against the unexpected if your air conditioner or heat pump needs to be repaired or replaced.",
      popularProduct: "",
    },
    {
      productFilterName: "Preferred Cooling Protection Plan - Secondary System",
      productImage:
        imgURL +
        "/products/Preferred_Cooling_Protection_Plan_-_Secondary_System.png",
      productNewName: "Preferred Cooling Protection Plan - Secondary System",
      coverSubheading:
        "With Preferred Cooling Protection, you'll be protected against the unexpected if your air conditioner or heat pump needs to be repaired or replaced.",
      popularProduct: "",
    },
    {
      productFilterName: "Cooling Repair Plan - Primary System",
      productImage:
        imgURL + "/products/Cooling_Repair_Plan_-_Primary_System.png",
      productNewName: "Cooling Repair Plan - Primary System",
      coverSubheading:
        "With the Cooling Repair Plan, you'll have peace of mind if your air conditioner or heat pump needs to be repaired.",
      popularProduct: "",
    },
    {
      productFilterName: "Cooling Repair Plan - Secondary System",
      productImage:
        imgURL + "/products/Cooling_Repair_Plan_-_Secondary_System.png",
      productNewName: "Cooling Repair Plan - Secondary System",
      coverSubheading:
        "With the Cooling Repair Plan, you'll have peace of mind if your air conditioner or heat pump needs to be repaired.",
      popularProduct: "",
    },
  ];
  const pwShortArray = [
    ["water line protection program", "water line insurance policy"],
    ["sewer line protection program", "sewer line insurance policy"],
    [
      "water line and sewer line protection program",
      "water line and sewer line insurance policy",
    ],
    ["water line, sewer line and in-home plumbing emergency program"],
    [
      "unlimited water line protection program",
      "unlimited water line insurance policy",
    ],
    [
      "unlimited sewer line protection program",
      "unlimited sewer line insurance policy",
    ],
    [
      "unlimited water line and sewer line protection program",
      "unlimited water line and sewer line insurance policy",
    ],
    ["in-home plumbing emergency program", "in-home plumbing plus program"],
    [
      "interior electric line protection program",
      "interior electric line insurance policy",
    ],
    [
      "exterior electric line protection program",
      "exterior electric line insurance policy",
    ],
    ["water heater repair and replacement program"],
    ["cooling system repair program"],
    ["heating system repair program"],
    ["heating and cooling system repair program"],
    ["gas line protection program", "gas line insurance policy"],
  ];

  const phillyShortArray = [
    [
      "unlimited water line protection program",
      "unlimited water line insurance policy",
    ],
    [
      "unlimited sewer line protection program",
      "unlimited sewer line insurance policy",
    ],
    [
      "unlimited water line and sewer line protection program",
      "unlimited water line and sewer line insurance policy",
    ],
    [
      "energy essentials protection program",
      "energy essentials insurance policy",
    ],
    [
      "in-home plumbing clog protection program",
      "in-home plumbing clog insurance policy",
    ],
    ["in-home plumbing plus program", "in-home plumbing insurance policy"],
    [
      "interior electric line protection program",
      "interior electric line insurance policy",
    ],
    ["surge protection program", "surge insurance policy"],
    ["water heater repair and replacement program"],
    ["gas line protection program", "gas line insurance policy"],
  ];

  const prodductsGroupWise = [
    {
      id: "wholeHome",
      heading: "Whole Home and Appliances Protection Plans",
      description:
        "Enjoy more savings, more protection and more peace of mind with our whole home and appliances protection bundles. From your sewer and water lines to your HVAC system, just call us when you need a repair and get back to your life.",
      img: `${imgBaseUrl}/whole_home_img.png`,
      mobileImg: `${imgBaseUrl}/whole_home_img_mobile.png`,
    },
    {
      id: "wsp",
      heading: "Water, Sewer and Plumbing Protection Plans",
      description:
        "A clogged sewer or a broken water line can leave your home without water for days and a pricey repair bill not covered typically by most standard homeowners insurance. Older homes are particularly at risk, and because these pipes are located underground, repairs can require extensive excavations. Our plans protect your home for just a few cents a day.  ",
      img: `${imgBaseUrl}/plumbing_protection.png`,
      mobileImg: `${imgBaseUrl}/plumbing_protection_mobile.png`,
    },
    {
      id: "hvac",
      heading: "HVAC Protection Plans",
      description:
        "Stay cool in the summer, cozy in winter and never stress about sudden HVAC repair costs not covered typically by most standard homeowners insurance. Our plans will help keep your home just the right temperature, no matter the season.",
      img: `${imgBaseUrl}/hvac_protection.png`,
      mobileImg: `${imgBaseUrl}/hvac_protection_mobile.png`,
    },
    {
      id: "eg",
      heading: "Electric & Gas Protection Plans",
      description:
        "A faulty wire or leaky gas line is not only dangerous to fix on your own, but expensive, and not typically covered by homeowners insurance. Our electricity and gas protection plans protect you from the shock of these unpleasant repair bills.",
      img: `${imgBaseUrl}/electric_gas_protection.png`,
      mobileImg: `${imgBaseUrl}/electric_gas_protection_mobile.png`,
    },
    {
      id: "other",
      heading: "Other Plans",
      description:
        "Need even more protection for your home? We've got plans for a variety of essential home systems, so you can enjoy 100% peace of mind.",
      img: `${imgBaseUrl}/other_plans.png`,
      mobileImg: `${imgBaseUrl}/other_plans_mobile.png`,
    },
  ];

  const filterCardsArr = [
    {
      id: 1,
      img: `${imgBaseUrl}/whole_home_icon.svg`,
      activeImg: `${imgBaseUrl}/whole_home_icon_active.svg`,
      label: "Whole home",
      value: "wholeHome",
    },
    {
      id: 2,
      img: `${imgBaseUrl}/wsp_icon.svg`,
      activeImg: `${imgBaseUrl}/wsp_icon_active.svg`,
      label: "Water, Sewer & Plumbing ",
      value: "wsp",
    },
    {
      id: 3,
      img: `${imgBaseUrl}/hvac_icon.svg`,
      activeImg: `${imgBaseUrl}/hvac_icon_active.svg`,
      label: "HVAC",
      value: "hvac",
    },
    {
      id: 4,
      img: `${imgBaseUrl}/electric_gas_icon.svg`,
      activeImg: `${imgBaseUrl}/electric_gasI_icon_active.svg`,
      label: "Electric & Gas",
      value: "eg",
    },
    {
      id: 5,
      img: `${imgBaseUrl}/other_icon.svg`,
      activeImg: `${imgBaseUrl}/other_icon_active.svg`,
      label: "Other",
      value: "other",
    },
  ];

  async function getPrice(price) {
    return (
      '<span class="price">' +
      price +
      '</span> <span>per month<span id="savetext"></span></span>'
    );
  }

  function noProducts() {
    if (
      jQuery(".page-wrap.product-list > div:first-child").html() ===
      "There are currently no additional protection plans available in your area. Please continue to check back for new programs."
    ) {
      return true;
    }
    return false;
  }
  async function getImage(title) {
    for (let i = 0; i < relatedProducts.length; i++) {
      let text = relatedProducts[i].productFilterName;
      if (text == title) {
        return relatedProducts[i].productImage;
      }
    }
  }
  async function getPopular(title) {
    for (let i = 0; i < relatedProducts.length; i++) {
      const text = relatedProducts[i].productFilterName;
      const popular = relatedProducts[i].popularProduct;
      if (text == title) {
        if (popular != undefined) {
          return relatedProducts[i].popularProduct;
        }
      }
    }
  }

  async function getBest(title) {
    for (let i = 0; i < relatedProducts.length; i++) {
      const text = relatedProducts[i].productFilterName;
      const popular = relatedProducts[i].bestProduct;
      if (text == title) {
        if (popular != undefined) {
          return relatedProducts[i].bestProduct;
        }
      }
    }
  }

  setInterval(function () {
    if (noProducts()) {
      jQuery(".products-wrapper").remove();
      if (jQuery(".noproducts-wrapper").length === 0) {
        jQuery("header").after(
          '<div class="noproducts-wrapper"><div class="noproducts-inner"> <p>There are currently no additional protection plans available in your area. Please continue to check back for new programs.</p> </div></div>'
        );
      }
    } else {
      jQuery(".noproducts-wrapper").remove();
    }
  }, 1000);
  function createTest(url) {
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      jQuery("body").addClass("mac");
    }
    jQuery("body").addClass("spz-2025");

    let ourProducts = [];
    const productsCheck = setInterval(async function () {
      const products = await jQuery(".page-wrap.product-list .product-item");
      if (products.length != 0) {
        if (datalayerFlag == false) {
          dataLayer.push({ event: "experiment2025.activated" });
          datalayerFlag = true;
        }

        await jQuery(".products-wrapper .products-boxes").remove();
        await jQuery(".products-wrapper").remove();
        //.product-list-area.content-section
        const prodListHeader = jQuery(".product-list-header");
        let filterCardValueArr = [];
        jQuery(".product-list-title").before(prodListHeader);

        jQuery(".product-list-title").before(prodListHeader);

        jQuery(".product-list-title").html(`
        <div class="header-wrapper">
          <div class="product-list-heading">
            <h1>Don’t Be the Homeowner Without a Repair Plan</h1>
            <p>Quick Coverage*. All-Year Protection from Costly Repairs.</p>
          </div>
          <div class="main-filtercard-wrapper scrolbar">
            <div class="filter-cards-wrapper">
            ${filterCardsArr
              .map((card, index) => {
                return `
                <label for="filter-card${
                  index + 1
                }" class="filter-card filter-card-${index + 1} b-contain">
                  <img class="inactive-img" src="${card.img}" alt="${
                  card.label
                }" />
                  <img class="active-img" src="${card.activeImg}" alt="${
                  card.label
                }" />
                  <p>${card.label}</p>
                    <input value="${card.value}" id="filter-card${
                  index + 1
                }" type="checkbox" />
                </label>
              `;
              })
              .join(" ")}
            </div>
          </div>
        </div>`);

        if (document.querySelector(".products-wrapper")) {
          document.querySelector(".products-wrapper").scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }

        let priority = products.length;
        for await (product of products) {
          const singleProduct = {};
          let name = jQuery(product).find(".program-name").html().trim();
          let price = jQuery(product)
            .find(".price-cls .notranslate")
            .html()
            .trim();
          // let icon = jQuery(product).find(".product-icon").attr('src');
          let priceToShow = await getPrice(price);
          let image = await getImage(name.replaceAll("&amp;", "&"));
          let popularItem = await getPopular(name);
          let bestProductItem = await getBest(name);
          let productIcon = await jQuery(product)
            .find(".product-icon")
            .attr("src");

          singleProduct["target"] = name.replaceAll("&amp;", "&");
          let newName = name
            .replaceAll("Emergency Plumbing", "Plumbing Emergency")
            .replaceAll("and In Home", "and In-Home")
            .replaceAll("In Home", "In-Home");
          singleProduct["name"] = newName;
          singleProduct["productClass"] = name
            .replace(/[^\w\s]/gi, "_")
            .replaceAll(" ", "_");
          singleProduct["price"] = price;
          singleProduct["priceToShow"] = priceToShow;
          singleProduct["image"] = image;
          singleProduct["popularItem"] = popularItem;
          singleProduct["bestProductItem"] = bestProductItem;
          singleProduct["productIcon"] = productIcon;
          singleProduct["component"] = product;

          let shortArray = [];

          if (url.includes("/philadelphia/products")) {
            shortArray = phillyShortArray;
          } else {
            if (url.includes("/pa") || url.includes("/nj")) {
              shortArray = pwShortArray;
            }
          }

          if (shortArray.find((val) => val.includes(name.toLowerCase()))) {
            singleProduct["priority"] = shortArray.findIndex((e) =>
              e.includes(name.toLowerCase())
            );
          } else {
            singleProduct["priority"] = priority;
          }
          priority += 1;
          ourProducts.push(singleProduct);
        }
        jQuery(".product-list-header .zipcode-box button.change-link").text(
          "Change"
        );
        jQuery(
          ".spz-2025 .product-list-area > .page-wrap.set-pad > .product-list-header .zipcode-box button.product-page-search > span:first-child"
        ).text("Search");

        $(".img-flip img").each(function () {
          $(this).click();
        });

        const coveredRepairs = $(".covered-repairs-list");
        const coveredRepairsLists = $(".covered-repairs-list li");
        coveredRepairsLists.addClass("card-coverage");
        coveredRepairsLists.prepend(
          `<img class="checkIcon" src="${imgBaseUrl}/check_icon.svg" alt="checkIcon" />`
        );
        coveredRepairs.classList = "card-coverage-wrapper";

        const btnEnrollNow = $(".enroll-now");
        const pdpRedirectBtn = $(".bottom-btn.ga-track-learn-more");

        ourProducts.forEach((prod, idx) => {
          prod.covered = coveredRepairs[idx].children;
          prod.enrollNowBtn = btnEnrollNow[idx];
          prod.pdpRedirectBtn = pdpRedirectBtn[idx];
          prod.index = idx;
        });

        const sortedProducts = ourProducts.slice().sort(function (a, b) {
          return a.priority - b.priority;
        });
        if (sortedProducts.length < 3) {
          jQuery(".products-boxes").addClass("justify-content-center");
        }

        for await (value of sortedProducts) {
          await jQuery(".products-wrapper .products-boxes").append(
            value.component
          );
        }

        const loadProducts = (heading, description, img, data, mobileImg) => {
          if (data && data.length > 0) {
            prodListHtmlOld.append(
              ` 
              <img class="plans-img page-wrap main-wrapper mobile-only" src="${mobileImg}" alt="img" />
              <div class="plans page-wrap main-wrapper">
                <h3 class="plans-headding">
                  ${heading}
                </h3>
                <p>
                  ${description}
                </p>
              </div>
              <img class="plans-img page-wrap main-wrapper desktop-only" src="${img}" alt="img" />
              <div class="services page-wrap">
                <div class="services-card">
                  <img src="${imgBaseUrl}/certified_technicians.svg" alt="" />
                  <h4>Certified Technicians</h4>
                </div>
                <div class="services-card">
                  <img src="${imgBaseUrl}/repair_hotline.svg" alt="" />
                  <h4>24/7 Repair Hotline</h4>
                </div>
                <div class="services-card">
                  <img src="${imgBaseUrl}/years_of_experience.svg" alt="" />
                  <h4>20 Years of Experience</h4>
                </div>
              </div>
              <div class="products desktop-only page-wrap main-wrapper">
                ${data
                  .map((prod) => {
                    btnEnrollNowSorted.push({
                      id: `${prod.index}`,
                      enrollNowBtn: prod.enrollNowBtn,
                    });
                    btnlearnMoreSorted.push({
                      id: `${prod.index}`,
                      pdpRedirectBtn: prod.pdpRedirectBtn,
                    });
                    return `

                  <div class="products-card-wrapper">
                  ${
                    prod.popularItem && prod.popularItem.length > 0
                      ? `
                    <div class="most-populer">
                      <p>Most Popular Plan</p>
                    </div>
                    `
                      : `
                    <div class="non-populer">
                      <p></p>
                    </div>
                    `
                  }
                  <div class="products-card-checkout ${
                    prod.popularItem && prod.popularItem.length > 0
                      ? "popupar-item"
                      : ""
                  } products-card">
                    <div class="products-card-headding">
                      <div>
                        <h3 class="truncate-2lines">${prod.name}</h3>
                      </div>
                    </div>
                    <div class="products-card-coverage">
                      <ul class="covered-repairs-list scrolbar covered-repairs-list${
                        prod.index
                      }">
                          ${Object.keys(prod.covered)
                            .map((i) => {
                              if (i < 3) {
                                return `<li>${prod.covered[i].innerHTML}</li>`;
                              }
                            })
                            .join(" ")}
                      </ul>
                      <div>
                        <button id="btn-view-${
                          prod.index
                        }" class="card-coverage-btn">
                          <img src="${imgBaseUrl}/left_arrow.svg" alt="" />
                          <sapn>View All Coverage</sapn>
                        </button>
                      </div>
                    </div>
                    <button id="btn-learn-more-${
                      prod.index
                    }" class="learn-plan">
                      <h3>Learn Why Homeowners Buy This Plan</h3>
                    </button>
                    <div class="products-card-pay-amount">
                      <div class="products-card-pay">
                        <span class="amount">${prod.price}</span>
                        <p style="margin-bottom: 0px;" class="month-plan">/month</p>
                      </div>
                      <div id="btn-checkout-${prod.index}" class="btn-checkout">
                        <p>Quick Checkout</p>
                        <img src="${imgBaseUrl}/chevron_left_arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                  `;
                  })
                  .join(" ")}
              </div>
              <div class="mobile-only swiper-main-wrapper">
              <div class="swiper">
                <div class="swiper-wrapper">
                ${data
                  .map((prod) => {
                    btnEnrollNowSorted.push({
                      id: `${prod.index}`,
                      enrollNowBtn: prod.enrollNowBtn,
                    });
                    btnlearnMoreSorted.push({
                      id: `${prod.index}`,
                      pdpRedirectBtn: prod.pdpRedirectBtn,
                    });
                    return `

                    <div class="swiper-slide">
                  <div class="products-card-wrapper">
                  ${
                    prod.popularItem && prod.popularItem.length > 0
                      ? `
                    <div class="most-populer">
                      <p>Most Popular Plan</p>
                    </div>
                    `
                      : `
                    <div class="non-populer">
                      <p></p>
                    </div>
                    `
                  }
                  <div class="products-card-checkout ${
                    prod.popularItem && prod.popularItem.length > 0
                      ? "popupar-item"
                      : ""
                  } products-card">
                    <div class="products-card-headding">
                      <div>
                        <h3 class="truncate-2lines">${prod.name}</h3>
                      </div>
                    </div>
                    <div class="products-card-coverage">
                      <ul class="covered-repairs-list scrolbar covered-repairs-list${
                        prod.index
                      }">
                          ${Object.keys(prod.covered)
                            .map((i) => {
                              if (i < 3) {
                                return `<li>${prod.covered[i].innerHTML}</li>`;
                              }
                            })
                            .join(" ")}
                      </ul>
                      <div>
                        <button id="btn-view-${
                          prod.index
                        }" class="card-coverage-btn">
                          <img src="${imgBaseUrl}/left_arrow.svg" alt="" />
                          <sapn>View All Coverage</sapn>
                        </button>
                      </div>
                    </div>
                    <button id="btn-learn-more-${
                      prod.index
                    }" class="learn-plan">
                      <h3>Learn Why Homeowners Buy This Plan</h3>
                    </button>
                    <div class="products-card-pay-amount">
                      <div class="products-card-pay">
                        <span class="amount">${prod.price}</span>
                        <p style="margin-bottom: 0px;" class="month-plan">/month</p>
                      </div>
                      <div id="btn-checkout-${prod.index}" class="btn-checkout">
                        <p>Quick Checkout</p>
                        <img src="${imgBaseUrl}/chevron_left_arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                  `;
                  })
                  .join(" ")}
                </div>
                <div class="swiper-pagination"></div>
                <div class="arrow-btn-swiper">
                  <div class="swiper-prev"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M13.881 15.0001L18.6076 10.2735L17.2574 8.92334L11.1807 15.0001L17.2574 21.0768L18.6076 19.7266L13.881 15.0001Z" fill="#005695"/>
                  </svg></div>
                  <div class="swiper-next"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M16.119 15.0001L11.3924 10.2735L12.7426 8.92334L18.8193 15.0001L12.7426 21.0768L11.3924 19.7266L16.119 15.0001Z" fill="#005695"/>
                  </svg></div>
                </div>
              </div>
              `
            );
          }
        };

        const loadSwiper = () => {
          new Swiper(".swiper", {
            direction: "horizontal",
            loop: false,

            breakpoints: {
              640: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            },

            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
            },

            navigation: {
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            },

            renderFraction: function (currentClass, totalClass) {
              return `
              <div class="pagination-swiper">
                <span class="
                ${currentClass}
                "></span>
                " of "
                <span class="${totalClass}"></span>
              </div>
                `;
            },
          });
        };

        const grouped = {};
        const result = [];
        let filteredFinalArr;

        const btnEnrollNowSorted = [];
        const btnlearnMoreSorted = [];

        sortedProducts.forEach((item) => {
          const productName = item.name.toLowerCase();
          let prefix;
          if (
            productName.includes("whole home") ||
            productName.includes("appliances")
          ) {
            prefix = "wholeHome";
          } else if (
            productName.includes("water") ||
            productName.includes("sewer") ||
            productName.includes("plumbing")
          ) {
            prefix = "wsp";
          } else if (
            productName.includes("electric") ||
            productName.includes("gas")
          ) {
            prefix = "eg";
          } else if (productName.includes("HVAC")) {
            prefix = "hvac";
          } else {
            prefix = "other";
          }
          if (!grouped[prefix]) {
            grouped[prefix] = [];
          }
          grouped[prefix].push(item);
        });

        // Creating the expected result structure
        for (const prefix in grouped) {
          const obj = {};
          obj[prefix] = grouped[prefix];
          result.push(obj);
        }

        prodductsGroupWise.forEach((item) => {
          result.forEach((prod) => {
            const prefix = Object.keys(prod)[0];
            if (prefix === item.id) {
              item.data = prod[prefix];
            }
          });
        });

        const prodListHtmlOld = await jQuery(".product-list");
        prodListHtmlOld.removeClass("page-wrap");

        const handleChange = async (e, index) => {
          if (e.target.checked) {
            filterCardValueArr.push(e.target.value);
          } else {
            filterCardValueArr = filterCardValueArr.filter((val) => {
              return val !== e.target.value;
            });
          }
          if (filterCardValueArr.length > 0) {
            filteredFinalArr = prodductsGroupWise.filter((item) => {
              return filterCardValueArr.includes(item.id);
            });
          } else {
            filteredFinalArr = prodductsGroupWise;
          }

          if (e.target.checked) {
            $(`.filter-card-${index}`).addClass("active-card");
          } else {
            $(`.filter-card-${index}`).removeClass("active-card");
          }

          prodListHtmlOld.removeClass("page-wrap");
          prodListHtmlOld.html("");
          prodListHtmlOld.after(
            filteredFinalArr.forEach(
              ({ heading, description, img, data, mobileImg }) => {
                loadProducts(heading, description, img, data, mobileImg);
              }
            )
          );

          loadSwiper();
        };

        $("#filter-card1").change((e) => {
          handleChange(e, 1);
        });

        $("#filter-card2").change((e) => {
          handleChange(e, 2);
        });

        $("#filter-card3").change((e) => {
          handleChange(e, 3);
        });

        $("#filter-card4").change((e) => {
          handleChange(e, 4);
        });

        $("#filter-card5").change((e) => {
          handleChange(e, 5);
        });

        // Load only once
        prodListHtmlOld.addClass("show");
        prodListHtmlOld.html("");
        prodListHtmlOld.after(
          prodductsGroupWise.forEach(
            ({ heading, description, img, data, mobileImg }) => {
              loadProducts(heading, description, img, data, mobileImg);
            }
          )
        );

        loadSwiper();

        $(".btn-checkout").click((e) => {
          btnEnrollNowSorted.map((i) => {
            i.enrollNowBtn.id = `btn-enroll-${i.id}`;
            if (
              i.enrollNowBtn.id.split("-")[
                i.enrollNowBtn.id.split("-").length - 1
              ] ===
              $(e.currentTarget.id.split("-"))[
                e.currentTarget.id.split("-").length - 1
              ]
            ) {
              i.enrollNowBtn.click();
            }
          });
        });

        $(".card-coverage-btn").click((e) => {
          const coveredId =
            e.currentTarget.id.split("-")[
              e.currentTarget.id.split("-").length - 1
            ];

          prodductsGroupWise.forEach(({ data }) => {
            if (data && data.length > 0) {
              data.map((prod) => {
                if (coveredId === `${prod.index}`) {
                  $(`.covered-repairs-list${coveredId}`).html(" ");
                  $(`.covered-repairs-list${coveredId}`).append(`
                    ${Object.keys(prod.covered)
                      .map((i) => {
                        return `<li>${prod.covered[i].innerHTML}</li>`;
                      })
                      .join(" ")}
                      `);
                }
              });
            }
          });
        });

        $(".learn-plan").click((e) => {
          btnlearnMoreSorted.map((i) => {
            i.pdpRedirectBtn.id = `btn-learn-more-${i.id}`;
            if (
              i.pdpRedirectBtn.id.split("-")[
                i.pdpRedirectBtn.id.split("-").length - 1
              ] ===
              $(e.currentTarget.id.split("-"))[
                e.currentTarget.id.split("-").length - 1
              ]
            ) {
              i.pdpRedirectBtn.click();
            }
          });
        });

        jQuery.each(comboManagement, function (index, cmbo) {
          let totalprice = 0;
          let comboPrice = 0;
          if (
            document.querySelector(
              'div[data-targettitle="' +
                cmbo.comboName +
                '"] .product-pricing > span:first-child'
            )
          ) {
            comboPrice = document.querySelector(
              'div[data-targettitle="' +
                cmbo.comboName +
                '"] .product-pricing > span:first-child'
            ).innerHTML;
            comboPrice = Number(comboPrice.replaceAll("$", ""));
          }
          jQuery.each(cmbo.comboProducts, function (ind, intProduct) {
            if (
              document.querySelector(
                'div[data-targettitle="' +
                  intProduct +
                  '"] .product-pricing > span:first-child'
              )
            ) {
              const singlePrice = document.querySelector(
                'div[data-targettitle="' +
                  intProduct +
                  '"] .product-pricing > span:first-child'
              ).innerHTML;
              totalprice += Number(singlePrice.replaceAll("$", ""));
              const finalprice = (totalprice - comboPrice).toFixed(2);
              if (comboPrice > 0 && finalprice >= 1) {
                jQuery(
                  'div[data-targettitle="' +
                    cmbo.comboName +
                    '"] .product-pricing span#savetext'
                ).html("save $" + finalprice + "");
                jQuery(
                  'div[data-targettitle="' +
                    cmbo.comboName +
                    '"] .product-pricing span#savetext'
                ).addClass("show-save");
                jQuery(
                  'div[data-targettitle="' + cmbo.comboName + '"]'
                ).addClass("amount-save");
              }
            }
          });
        });

        if (jQuery(window).width() > 1023) {
          jQuery(".products-single-box .prod-card .prod-info").on(
            "click mouseenter",
            function (e) {
              e.stopPropagation();
              setTimeout(() => {
                jQuery(this).closest(".products-single-box").addClass("active");
              }, 500);
            }
          );

          jQuery(".products-single-box .prod-feature .prod-cross").on(
            "click",
            function (e) {
              e.stopPropagation();
              jQuery(this)
                .closest(".products-single-box")
                .removeClass("active");
            }
          );
        } else {
          jQuery(".products-single-box .prod-card .prod-info").on(
            "click",
            function (e) {
              jQuery(this).closest(".products-single-box").addClass("active");
              e.stopPropagation();
            }
          );

          jQuery(".products-single-box .prod-feature .prod-cross").on(
            "click",
            function (e) {
              jQuery(this)
                .closest(".products-single-box")
                .removeClass("active");
              e.stopPropagation();
            }
          );
        }

        clearInterval(productsCheck);
      }
    }, 100);
  }

  // // Open PDP on card click
  jQuery("body").on(
    "click",
    ".products-single-box .product-image, .products-single-box .product-text > a, .products-single-box .product-text .product-title > h1",
    async function (e) {
      e.preventDefault();

      const linksControl = await jQuery(
        ".page-wrap.product-list .product-item .card"
      );
      for await (const link of linksControl) {
        if (
          jQuery(this)
            .closest(".products-single-box")
            .attr("data-targettitle") ===
          jQuery(link)
            .find(".program-name")
            .html()
            .trim()
            .replaceAll("&amp;", "&")
        ) {
          jQuery(link).find(".program-name").click();
          return;
        }
      }
    }
  );

  jQuery("body").on(
    "click",
    '.btn.primary-btn.set-width.mt-1.btn-margin-right:contains("YES")',
    async function (e) {
      e.preventDefault();

      await removeTest();
      createTest(location.href);
    }
  );

  async function removeTest() {
    jQuery("body").removeClass("spz-2025");
    jQuery(".products-wrapper").remove();
    jQuery(".noproducts-wrapper").remove();
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
    url = location.href;
    urlCheck(url);
  });

  url = location.href;
  urlCheck(url);

  function urlCheck(url) {
    let allBlogsUrlString = "";
    if (window.location.pathname.indexOf("/products/") > -1) {
      allBlogsUrlString = window.location.href;
    }
    if (isSameUrl(url, allBlogsUrlString, true)) {
      createTest(url);
    } else {
      removeTest();
    }
  }

  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#")
      ? currentUrl.slice(0, currentUrl.indexOf("#"))
      : currentUrl;
    specifiedUrl = specifiedUrl.includes("#")
      ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
      : specifiedUrl;
    if (!includeQueryParams)
      currentUrl = currentUrl.includes("?")
        ? currentUrl.slice(0, currentUrl.indexOf("?"))
        : currentUrl;

    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
      return true;
    return false;
  }
})();
