(function () {
  const cookieName = "#2025_AWR_Product_List_Popup";
  const cookieValue = "1";
  const myDate = new Date();
  const imgURL = "//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/2025";
  const baseUrl =
    "https://scpprd.prod.apimanagement.us10.hana.ondemand.com/api/hos/api";
  const apiKey = "Ng0glnSyFyARBd7AGghwnAAjV1ORz5Vp";
  let glInt;

  myDate.setDate(myDate.getDate() + 30);
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
  var datalayerFlag = false;

  const comboManagement = [
    {
      comboName: "Water Line and Sewer Line Protection Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program"
      ]
    },
    {
      comboName: "Unlimited Water Line and Sewer Line Protection Program",
      comboProducts: [
        "Unlimited Water Line Protection Program",
        "Unlimited Sewer Line Protection Program"
      ]
    },
    {
      comboName: "Water Line and Sewer Line Unlimited Protection Program",
      comboProducts: [
        "Water Line Unlimited Protection Program",
        "Sewer Line Unlimited Protection Program"
      ]
    },
    {
      comboName: "Water Line and Sewer Line Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy"
      ]
    },
    {
      comboName: "Water Line & Sewer Line Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy"
      ]
    },
    {
      comboName: "Water Line, Sewer Line and In-Home Plumbing Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy",
        "In-Home Plumbing Insurance Policy"
      ]
    },
    {
      comboName: "Water Line, Sewer Line and In Home Plumbing Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy",
        "In Home Plumbing Insurance Policy"
      ]
    },
    {
      comboName: "Water Line, Sewer Line & In-Home Plumbing Insurance Policy",
      comboProducts: [
        "Water Line Insurance Policy",
        "Sewer Line Insurance Policy",
        "In-Home Plumbing Insurance Policy"
      ]
    },
    {
      comboName: "Heating and Cooling System Repair Program",
      comboProducts: [
        "Heating System Repair Program",
        "Cooling System Repair Program"
      ]
    },
    {
      comboName: "Heating & Cooling System Repair Program",
      comboProducts: [
        "Heating System Repair Program",
        "Cooling System Repair Program"
      ]
    },
    {
      comboName:
        "Water Line, Sewer Line and In-Home Plumbing Emergency Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
        "In-Home Plumbing Emergency Program"
      ]
    },
    {
      comboName:
        "Water Line, Sewer Line and In Home Plumbing Emergency Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
        "In Home Plumbing Emergency Program"
      ]
    },
    {
      comboName:
        "Water Line, Sewer Line and In-Home Plumbing Protection Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
        "In-Home Plumbing Emergency Program"
      ]
    },
    {
      comboName:
        "Water Line, Sewer Line and In Home Plumbing Protection Program",
      comboProducts: [
        "Water Line Protection Program",
        "Sewer Line Protection Program",
        "In Home Plumbing Protection Program"
      ]
    }
  ];

  const relatedProducts = [
    {
      productFilterName: "Water Line Protection Program",
      productImage: imgURL + "/products/Water_Line_Repair_Plan.png",
      productNewName: "Water Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.",
      popularProduct: ""
    },
    {
      productFilterName: "Unlimited Water Line Protection Program",
      productImage: imgURL + "/products/Water_Line_Repair_Plan.png",
      productNewName: "Water Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.",
      popularProduct: ""
    },
    {
      productFilterName: "Water Service Line Protection Program",
      productImage: imgURL + "/products/Water_Line_Repair_Plan.png",
      productNewName: "Water Service Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.",
      popularProduct: ""
    },
    {
      productFilterName: "Sewer Line Protection Program",
      productImage: imgURL + "/products/Sewer_Line_Repair_Plan.png",
      productNewName: "Sewer Line Repair Plan",
      coverSubheading:
        "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: ""
    },
    {
      productFilterName: "Unlimited Sewer Line Protection Program",
      productImage: imgURL + "/products/Sewer_Line_Insurance_Policy.png",
      productNewName: "Sewer Line Repair Plan",
      coverSubheading:
        "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: ""
    },
    {
      productFilterName: "Sewer Service Line Protection Program",
      productImage: imgURL + "/products/Sewer_Line_Insurance_Policy.png",
      productNewName: "Sewer Service Line Repair Plan",
      coverSubheading:
        "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: ""
    },
    {
      productFilterName: "Water Line and Sewer Line Protection Program",
      productImage:
        imgURL + "/products/Water_Line___Sewer_Line_Repair_Plan.png",
      productNewName: "Water Line & Sewer Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "popular"
    },
    {
      productFilterName:
        "Unlimited Water Line and Sewer Line Protection Program",
      productImage:
        imgURL + "/products/Water_Line___Sewer_Line_Repair_Plan.png",
      productNewName: "Water Line & Sewer Line Repair Plan",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: ""
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
      bestProduct: "best-product"
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
      bestProduct: "best-product"
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
      bestProduct: "best-product"
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
      bestProduct: "best-product"
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
      bestProduct: "best-product"
    },
    {
      productFilterName: "In Home Plumbing Protection Program",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Emergency Repair Plan",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: ""
    },
    {
      productFilterName: "In-Home Plumbing Emergency Program",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Emergency Repair Plan",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: ""
    },
    {
      productFilterName: "In Home Plumbing Emergency Program",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Emergency Repair Plan",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: ""
    },
    {
      productFilterName: "Heating and Cooling System Repair Program",
      productImage:
        imgURL + "/products/Heating_and_Cooling_System_Repair_Plan.png",
      productNewName: "Heating and Cooling System Repair Plan",
      coverSubheading:
        "Protect the heating and cooling systems and avoid the hassle and cost of repairs.",
      popularProduct: ""
    },
    {
      productFilterName: "Heating & Cooling System Repair Program",
      productImage:
        imgURL + "/products/Heating_and_Cooling_System_Repair_Plan.png",
      productNewName: "Heating and Cooling System Repair Plan",
      coverSubheading:
        "Protect the heating and cooling systems and avoid the hassle and cost of repairs."
    },
    {
      productFilterName: "Heating System Repair Program",
      productImage: imgURL + "/products/Heating_System_Repair_Plan.png",
      productNewName: "Heating System Repair Plan",
      coverSubheading:
        "Get protection for your heating system including labor and materials for those repairs.",
      popularProduct: ""
    },
    {
      productFilterName: "Cooling System Repair Program",
      productImage: imgURL + "/products/Cooling_System_Repair_Plan.png",
      productNewName: "Cooling System Repair Plan",
      coverSubheading:
        "Protect your cooling system  including labor and materials for those repairs.",
      popularProduct: ""
    },
    {
      productFilterName: "Water Heater Repair and Replacement Program",
      productImage:
        imgURL + "/products/Water_Heater_Repair_and_Replacement_Plan.png",
      productNewName: "Water Heater Repair and Replacement Repair Plan",
      coverSubheading:
        "Cover you water heater fails due to normal wear and tear. Get replacement through one of our service providers",
      popularProduct: ""
    },
    {
      productFilterName: "Gas Line Protection Program",
      productImage: imgURL + "/products/Gas_Line_Repair_Plan.png",
      productNewName: "Gas Line Repair Plan",
      coverSubheading:
        "Get repairs from leaks in the exposed interior natural gas pipes running through your house as well as the flexible connectors due to normal wear or defects.",
      popularProduct: ""
    },
    {
      productFilterName: "Interior Electric Line Protection Program",
      productImage: imgURL + "/products/Interior_Electric_Line_Repair_Plan.png",
      productNewName: "Interior Electric Line Repair Plan",
      coverSubheading:
        "Get protected from interior electric line failures including costs like contractor, labor, parts, and even paperwork.",
      popularProduct: ""
    },
    {
      productFilterName: "Exterior Electric Line Protection Program",
      productImage: imgURL + "/products/Exterior_Electric_Line_Repair_Plan.png",
      productNewName: "Exterior Electric Line Repair Plan",
      coverSubheading:
        "Cover your repairs to overhead and underground exterior electric lines, including the permanent wiring to fixtures such as light posts, detached garages and pool pumps.",
      popularProduct: ""
    },
    {
      productFilterName: "In-Home Plumbing Plus Program",
      productImage: imgURL + "/products/In-Home_Plumbing_Plus_Repair_Plan.png",
      productNewName: "In-Home Plumbing Plus Repair Plan",
      coverSubheading:
        "Protect your home's interior water supply and wastewater drainage systems. Think overflowing toilet, broken water pipe under your sink (or behind the walls).",
      popularProduct: ""
    },
    {
      productFilterName: "In-Home Plumbing Plus Program",
      productImage: imgURL + "/products/In-Home_Plumbing_Plus_Repair_Plan.png",
      productNewName: "In-Home Plumbing Plus Repair Plan",
      coverSubheading:
        "Protect your home's interior water supply and wastewater drainage systems. Think overflowing toilet, broken water pipe under your sink (or behind the walls).",
      popularProduct: ""
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
      popularProduct: ""
    },
    {
      productFilterName: "Water Line Unlimited Protection Program",
      productImage: imgURL + "/products/Water_Line_Unlimited_Repair_Plan.png",
      productNewName: "Water Line Unlimited Repair Plan",
      coverSubheading:
        "Get coverage for repairs to a broken or leaking water pipe. Normal wear and tear, corrosion, or even soil conditions.",
      popularProduct: ""
    },
    {
      productFilterName: "Sewer Line Unlimited Protection Program",
      productImage: imgURL + "/products/Sewer_Line_Repair_Plan.png",
      productNewName: "Sewer Line Unlimited Repair Plan",
      coverSubheading:
        "Cover your repairs to a clogged, blocked, or leaking sewer pipe.",
      popularProduct: ""
    },
    {
      productFilterName: "Surge Protection Program",
      productImage: imgURL + "/products/Surge_Protection.png",
      productNewName: "Surge Repair Plan",
      coverSubheading:
        "Our Surge Protection Program gives you financial protection for all your home's electronics and electric appliances valued at $100 or more."
    },
    {
      productFilterName: "Power Surge Protection Program",
      productImage: imgURL + "/products/Power_Surge_Protection.png",
      productNewName: "Power Surge Repair Plan",
      coverSubheading:
        "Power surges can happen at any time & lead to sudden death for your appliances. Its not always covered by homeowners insurance. With AWR your appliances are protected.",
      popularProduct: ""
    },
    {
      productFilterName: "In-Home Plumbing Clog Protection Program",
      productImage: imgURL + "/products/In-Home_Plumbing_Clog_Protection.png",
      productNewName: "In-Home Plumbing Clog Repair Plan",
      coverSubheading:
        "With this protection program, help is just a phone call away. We'll send out a pre-qualified local service provider to clear any clogs or blockages you can't prevent.",
      popularProduct: ""
    },
    {
      productFilterName: "Energy Essentials Protection Program",
      productImage: imgURL + "/products/Energy_Essentials_Proteciton.png",
      productNewName: "Energy Essentials Repair Plan",
      coverSubheading:
        "This valuable bundled package provides repair coverage for gas lines, electric lines, and expense of damage to electronics from electric surges."
    },
    {
      productFilterName: "Well System and Septic Line Protection Program",
      productImage:
        imgURL + "/products/Well_System_and_Septic_Line_Repair_Plan.png",
      productNewName: "Well System and Septic Line Repair Plan",
      coverSubheading:
        "This combo plan offers the best value and covers everything covered under Septic line and Well line protection.",
      popularProduct: ""
    },
    {
      productFilterName: "Well Line and Pump Protection Program",
      productImage: imgURL + "/products/Well_Line_and_Pump_Repair_Plan.png",
      productNewName: "Well Line and Pump Repair Plan",
      coverSubheading:
        "The plan covers the line from the house to the well tank, Pressure tank, Well pump, shutoff valves, Pressure gauges, & Electric cable.",
      popularProduct: ""
    },
    {
      productFilterName: "Septic Line Protection Program",
      productImage: imgURL + "/products/Septic_Line_Repair_Plan.png",
      productNewName: "Septic Line Repair Plan",
      coverSubheading:
        "Avoid Unexpected, Costly Repairs to Your Home's Septic System. The plan covers clogs and blockages",
      popularProduct: ""
    },
    {
      productFilterName: "Water Line Insurance Policy",
      productImage: imgURL + "/products/Water_Line_Repair_Plan.png",
      productNewName: "Water Line Insurance Policy",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.",
      popularProduct: ""
    },
    {
      productFilterName: "Sewer Line Insurance Policy",
      productImage: imgURL + "/products/Sewer_Line_Insurance_Policy.png",
      productNewName: "Sewer Line Insurance Policy",
      coverSubheading:
        "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: ""
    },
    {
      productFilterName: "Water Line and Sewer Line Insurance Policy",
      productImage:
        imgURL + "/products/Water_Line___Sewer_Line_Repair_Plan.png",
      productNewName: "Water Line & Sewer Line Insurance Policy",
      coverSubheading:
        "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.",
      popularProduct: "popular"
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
      bestProduct: "best-product"
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
      bestProduct: "best-product"
    },
    {
      productFilterName: "In-Home Plumbing Insurance Policy",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Insurance Policy",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: ""
    },
    {
      productFilterName: "In Home Plumbing Insurance Policy",
      productImage:
        imgURL + "/products/In-Home_Plumbing_Emergency_Repair_Plan.png",
      productNewName: "In-Home Plumbing Insurance Policy",
      coverSubheading:
        "Cover your home's interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.",
      popularProduct: ""
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
      bestProduct: "best-product"
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
      bestProduct: "best-product"
    },
    {
      productFilterName: "Preferred Cooling Protection Plan - Primary System",
      productImage:
        imgURL +
        "/products/Preferred_Cooling_Protection_Plan_-_Primary_System.png",
      productNewName: "Preferred Cooling Protection Plan - Primary System",
      coverSubheading:
        "With Preferred Cooling Protection, you'll be protected against the unexpected if your air conditioner or heat pump needs to be repaired or replaced.",
      popularProduct: ""
    },
    {
      productFilterName: "Preferred Cooling Protection Plan - Secondary System",
      productImage:
        imgURL +
        "/products/Preferred_Cooling_Protection_Plan_-_Secondary_System.png",
      productNewName: "Preferred Cooling Protection Plan - Secondary System",
      coverSubheading:
        "With Preferred Cooling Protection, you'll be protected against the unexpected if your air conditioner or heat pump needs to be repaired or replaced.",
      popularProduct: ""
    },
    {
      productFilterName: "Cooling Repair Plan - Primary System",
      productImage:
        imgURL + "/products/Cooling_Repair_Plan_-_Primary_System.png",
      productNewName: "Cooling Repair Plan - Primary System",
      coverSubheading:
        "With the Cooling Repair Plan, you'll have peace of mind if your air conditioner or heat pump needs to be repaired.",
      popularProduct: ""
    },
    {
      productFilterName: "Cooling Repair Plan - Secondary System",
      productImage:
        imgURL + "/products/Cooling_Repair_Plan_-_Secondary_System.png",
      productNewName: "Cooling Repair Plan - Secondary System",
      coverSubheading:
        "With the Cooling Repair Plan, you'll have peace of mind if your air conditioner or heat pump needs to be repaired.",
      popularProduct: ""
    }
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
    // let imagename = title.replace(" &amp; ", " ").replace(/[^\w\s]/gi, '_').replaceAll(" ", "_").replaceAll("-", "_");
    // return "//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/PRODUCTPAGE/" + imagename + ".jpg";
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
  function createTest() {
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      jQuery("body").addClass("mac");
    }
    jQuery("body").addClass("spz-2025");
    // let productsList = null;
    // let titlesToCheck = ["water line protection program", "sewer line protection program", "water line and sewer line protection program", "water service line protection program", "sewer service line protection program"];

    let ourProducts = [];
    const productsCheck = setInterval(async function () {
      if (jQuery(".page-wrap.product-list .product-item .card").length != 0) {
        if (datalayerFlag == false) {
          dataLayer.push({ event: "experiment2025.activated" });
          datalayerFlag = true;
        }

        await jQuery(".products-wrapper").remove();
        //.product-list-area.content-section
        jQuery("header").after(
          '<div class="products-wrapper"><div class="products-inner"><div class="products-title"><h2>We&apos;ve got your back</h2></div><p class="product-description">The following plans are available in your area</p> <div class="products-boxes"> </div></div></div>'
        );
        await jQuery(".products-wrapper .products-boxes").html("");
        const products = await jQuery(
          ".page-wrap.product-list .product-item .card"
        );
        if (document.querySelector(".products-wrapper")) {
          document.querySelector(".products-wrapper").scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
        }
        let priority = 10;
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
          singleProduct["target"] = name.replaceAll("&amp;", "&");
          // let newName = name.replaceAll("Protection Program", "").replace("Program", "").replaceAll("Repair", "");
          // if (newName.indexOf("Policy") > -1) {
          //     newName = newName;
          // } else {
          //     newName = newName + " Repair Plan"
          // }
          // singleProduct["name"] = newName;
          let newName = name
            .replaceAll("Emergency Plumbing", "Plumbing Emergency")
            .replaceAll("and In Home", "and In-Home")
            .replaceAll("In Home", "In-Home");
          singleProduct["name"] = newName;
          //singleProduct["name"] = name;
          singleProduct["productClass"] = name
            .replace(/[^\w\s]/gi, "_")
            .replaceAll(" ", "_");
          singleProduct["price"] = price;
          // singleProduct["icon"] = icon;
          singleProduct["priceToShow"] = priceToShow;
          singleProduct["image"] = image;
          singleProduct["popularItem"] = popularItem;
          singleProduct["bestProductItem"] = bestProductItem;
          if (
            name.toLowerCase() ===
              "water line and sewer line protection program" ||
            name.toLowerCase() === "water line and sewer line insurance policy"
          ) {
            singleProduct["priority"] = 0;
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
        const sortedProducts = ourProducts.slice().sort(function (a, b) {
          return a.priority - b.priority;
        });
        if (sortedProducts.length < 3) {
          jQuery(".products-boxes").addClass("justify-content-center");
        }
        jQuery.each(sortedProducts, function (index, value) {
          jQuery(".products-wrapper .products-boxes").append(`
                    <div data-targettitle="${value.target}" class="products-single-box product-card-spz ${value.productClass} ${value.popularItem} ${value.bestProductItem}">
                        <div class="product-text prod-card">
                        <div class="product-title">
                            <h1>${value.name}</h1>
                            <div class="product-image" style="background-image:url(${value.image})"></div></div>
                            <div class="product-cart-info">
                            <button class="prod-info"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1667969299/AWR/2025/src/info-icon.svg" class="info-blue" alt="get-coverage"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1667981336/AWR/2025/src/info_hover.svg" class="info-hover" alt="get-coverage"></img></button>
                                <div class="product-pricing">${value.priceToShow}</div>
                                <button class="enroll-now-spz">Enroll Now 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.80304 12.803C7.51015 13.0959 7.51015 13.5708 7.80304 13.8637C8.09594 14.1565 8.57081 14.1565 8.8637 13.8637L7.80304 12.803ZM11.6667 9.99999L12.197 10.5303C12.3377 10.3897 12.4167 10.1989 12.4167 9.99999C12.4167 9.80108 12.3377 9.61031 12.197 9.46966L11.6667 9.99999ZM8.8637 6.13633C8.57081 5.84343 8.09594 5.84343 7.80304 6.13633C7.51015 6.42922 7.51015 6.90409 7.80304 7.19699L8.8637 6.13633ZM8.8637 13.8637L12.197 10.5303L11.1364 9.46966L7.80304 12.803L8.8637 13.8637ZM12.197 9.46966L8.8637 6.13633L7.80304 7.19699L11.1364 10.5303L12.197 9.46966Z" fill="white"/>
                                    </svg>
                                    </button></div></div>

                                    <div class="product-text prod-feature">
                        <div class="product-feature">
                        <ul class="product-feature-list"><p>What's Covered</p></ul>
                            </div>
                            <div class="product-cart-info">
                            <button class="prod-cross"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1667969299/AWR/2025/src/cross-icon.svg" alt="get-card"></img></button>
                                <div class="product-pricing">${value.priceToShow}</div>
                                <button class="enroll-now-spz">Enroll Now 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.80304 12.803C7.51015 13.0959 7.51015 13.5708 7.80304 13.8637C8.09594 14.1565 8.57081 14.1565 8.8637 13.8637L7.80304 12.803ZM11.6667 9.99999L12.197 10.5303C12.3377 10.3897 12.4167 10.1989 12.4167 9.99999C12.4167 9.80108 12.3377 9.61031 12.197 9.46966L11.6667 9.99999ZM8.8637 6.13633C8.57081 5.84343 8.09594 5.84343 7.80304 6.13633C7.51015 6.42922 7.51015 6.90409 7.80304 7.19699L8.8637 6.13633ZM8.8637 13.8637L12.197 10.5303L11.1364 9.46966L7.80304 12.803L8.8637 13.8637ZM12.197 9.46966L8.8637 6.13633L7.80304 7.19699L11.1364 10.5303L12.197 9.46966Z" fill="white"/>
                                    </svg>
                                    </button></div></div>
                                    `);
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
        jQuery(".products-single-box .product-text button.enroll-now-spz").on(
          "click",
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
                jQuery(link).find(".enroll-now").click();

                createTestPopup();

                return;
              }
            }
          }
        );

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
        if (
          document.querySelector(".product-card-spz") &&
          document.querySelectorAll(".product-card-spz[data-program-id]")
            .length == 0
        ) {
          await getProducts();
        }
      }
    }, 100);
  }

  // // Open PDP on card click
  jQuery("body").on(
    "click",
    ".products-single-box .product-image, .products-single-box .product-text > a, .products-single-box .product-text .product-title > h1",
    async function (e) {
      e.preventDefault();

      // const programId = jQuery(this).parents('.product-card-spz').data("program-id");

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

  // jQuery(window).on('resize', function () {
  //     url = location.href;
  //     urlCheck(url);
  // });

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

  let something = (function () {
    let executed = false;
    return function () {
      if (!executed) {
        executed = true;
        url = location.href;
        urlCheck(url);
      }
    };
  })();

  // jQuery(document).on('DOMSubtreeModified', "article.page-wrap.product-list.row", function () {
  //     createTest();
  // });

  url = location.href;
  urlCheck(url);

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
          url = location.href;
          urlCheck(url);
        }
      }, 1000);
    }, 2000);

    setTimeout(() => {
      clearInterval(glInt);
    }, 10000);
  });

  function urlCheck(url) {
    let allBlogsUrlString = "";
    if (window.location.pathname.indexOf("/products/") > -1) {
      allBlogsUrlString = window.location.href;
    }
    if (isSameUrl(url, allBlogsUrlString, true)) {
      createTest();
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

  // Functions regarding API calls
  async function getProducts() {
    let getPinLength = location.href.split("/").indexOf("products") + 1;
    let zipCode = location.href.split("/")[getPinLength];

    try {
      const zipResult = await getZipCode(zipCode);
      // const locResult = await getLocationCode(zipResult.locationCodeId);
      // const microSiteResult = await getMicroSite(locResult.locationCode);
      const defaultCodes = await getDefaultCodes(
        zipResult.locationCodeId,
        zipResult.syncSource
      );

      defaultCodes.result.forEach((prodList, k) => {
        document
          .querySelectorAll(
            ".products-wrapper .products-boxes .product-card-spz"
          )
          .forEach((viewProd, i) => {
            let prName = viewProd.getAttribute("data-targettitle");
            // prodList.customerProgramName = prodList.customerProgramName.replaceAll("-", "");
            if (
              prodList.webProgramName == prName &&
              viewProd.querySelectorAll(".product-feature-list li").length < 1
            ) {
              prodList.coveredRepairs.forEach((feature) => {
                viewProd
                  .querySelector(".product-feature-list")
                  .insertAdjacentHTML(
                    "beforeend",
                    "<li>" + feature.value + "</li>"
                  );
                viewProd.classList.add("has-wc");
              });
            }
          });
      });
    } catch (error) {
      if (error.status === 404) {
        return { status: "error", error: "Zipcode not found" };
      } else if (error.status === 500) {
        return { status: "error", error: "No marketing codes found" };
      } else {
        return;
      }
    }
  }

  async function getZipCode(zipCode) {
    const result = await fetch(
      `${baseUrl}/location/zip_codes/${zipCode}?APIKey=${apiKey}`
    );
    if (result.status === 404) {
      throw { status: 404 };
    }

    return result.json();
  }

  async function getDefaultCodes(locationId, syncSource) {
    // const urlSplit = location.href.split('/');
    const proSelDetail = JSON.parse(
      localStorage.getItem("providerSelectionDetails")
    );
    const isProSel =
      proSelDetail &&
      undefined != proSelDetail.providerValue &&
      proSelDetail.providerValue == "no";
    let migrateToOracle = syncSource === "oracle" ? "true" : "false";
    let dcUrl = `${baseUrl}/product/marketing-codes/default-codes?contact_type=1&allProducts=true&location_code=${locationId}&APIKey=${apiKey}`;

    if (isProSel) {
      const locCode =
        proSelDetail.locationCodeId || localStorage.getItem("location_code");
      if (
        window.location.pathname.indexOf("/products/") > -1 &&
        migrateToOracle == "false"
      ) {
        migrateToOracle = true;
      }
      dcUrl = `${baseUrl}/product/marketing-codes/default-codes?contact_type=1&allProducts=true&location_code=${locCode}&APIKey=${apiKey}`;
    }

    const result = await fetch(dcUrl, {
      headers: {
        "Migrated-To-Oracle": migrateToOracle
      },
      method: "GET"
    });
    if (result.status === 500) {
      throw { status: 500 };
    }
    return result.json();
  }

  function createTestPopup() {
    const modalCheck = setInterval(async function () {
      const productContainer = jQuery(".container-fluid .product-list.row");
      if (productContainer.length != 0) {
        // Modal Header with close button
        const modalHeader = jQuery(".container-fluid.modal-header-container");
        modalHeader.find(".col-10").html("");
        modalHeader.find(".fa.fa-times").addClass("color-black");
        modalHeader.find(".justify-content-end").addClass("absolute-close-btn");
        modalHeader.addClass("bg-white");

        // Hide original card
        modalHeader.find(".upsell-product-card--row").addClass("hide");

        // Modal Custom Header
        productContainer.find(".product-promotion").html(`
          <div class="modal-popup-header">
          <h1>Your home is still not 100% covered</h1>
          <p>Older homes need more repairs. Don&apos;t risk it! Get more protection and save up to 17%.</p>
          </div>
        `);

        // footer
        const modalFooter = jQuery(".modal-footer");
        modalFooter.find(".cursor-pointer.footer-btn-1").addClass("hidden");

        const btnToHide = modalFooter.find(".btn.submit-btn");
        btnToHide.addClass("hidden");

        const btn = document.createElement("button");
        btn.classList.add("cards-content-btn");
        btn.innerHTML = "No thanks, I&apos;ll take the risk.";
        btn.onclick = function () {
          btnToHide.click();
        };
        modalFooter.append(btn);

        // Product List
        const productList = productContainer.find(
          ".container-fluid.upsell-product-card--container"
        );

        document
          .querySelectorAll(".container-fluid.upsell-product-card--container")
          .forEach((eachProduct, i) => {
            // containers
            const htmlContainerDiv = document.createElement("div");
            htmlContainerDiv.classList.add("flex-product");

            // Get All Elements from Div.
            const image = productList.find(".upsell-product-card--imgDiv__img")[
              i
            ];
            const title = productList.find(
              ".upsell-product-card--productNameDiv__productTitle"
            )[i];

            const btnOriginal = productList.find(
              ".enroll-now.ga-track-upgrade-cart"
            );

            // Content of text finded.
            const imageSRC = image.getAttribute("src");
            const titleContent = title.innerHTML.trim();

            // containers
            const btn = document.createElement("button");
            btn.classList.add("Upgrade");
            btn.innerHTML = "Upgrade";
            btn.onclick = function () {
              btnOriginal.click();
            };

            let textSaveUpto = "",
              populerText = "";
            if (titleContent === "Water Line and Sewer Line Insurance Policy") {
              textSaveUpto = "Save Up to 14%";
              populerText = "Most Popular";
            } else if (
              titleContent ===
              "Water Line, Sewer Line and In-Home Plumbing Insurance Policy"
            ) {
              textSaveUpto = "Save up to 17%";
              populerText = "Best value";
            }

            //  ${
            //       populerText !== ""
            //         ? `<p class="label-modal-populer">${populerText}</p>`
            //         : ""
            //     }

            // Start Creating Design
            htmlContainerDiv.innerHTML = `
             <div class="">
                <img
                  src=${imageSRC}
                  class="img"
                />
              </div>
              <div class="title-modal-populer">
               
                <p>${titleContent}</p>
              </div>
              `;

            // whole button section
            const buttonSection = document.createElement("div");
            buttonSection.classList.add("btn-c");
            buttonSection.innerHTML = `${
              textSaveUpto !== ""
                ? `<div class="save-btn">${textSaveUpto}</div>`
                : ""
            }
                <div class="card-content">
                  <p>Only</p>
                  <p class="price-modal-populer">$11.99</p>
                  <p>/Month</p>
                </div>`;

            buttonSection.append(btn);
            htmlContainerDiv.append(buttonSection);

            eachProduct.append(htmlContainerDiv);
          });

        clearInterval(modalCheck);
      }
    }, 100);
  }
})();
