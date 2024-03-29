function createTest() {
  document.querySelector(".main-section-hero").outerHTML = `
  <div class="hero">

      <div class="hero-section top-section">
        <div class="hero-left">
        <div class="hero-content">
        <h1 class="heading">
          Donate a first aid kit.
          <br />
          Save a Ukrainian life.
        </h1>
        <p class="description">
          Ukraine is facing a critical shortage of individual first aid kits
          (IFAKs) that can treat serious injuries and save the lives of
          wounded Ukrainian soldiers and civilians.
        </p>
        <div class="donate-btn">
          <button>DONATE in 2 minutes</button>
        </div>
        <div class="features-container">
          <div class="feature">
            <p class="title">$3.7M</p>
            <p>raised</p>
          </div>
          <div class="feature">
            <p class="title">30,523</p>
            <p>IFAKs delivered</p>
          </div>
          <div class="feature">
            <p class="title">501(c)(3)</p>
            <p>US veteran-led charity</p>
          </div>
        </div>
      </div>
        </div>
        <div class="hero-right">
          <div class="hero-banner"></div>
        </div>
      </div>
      <div class="hero-section main-hero">
        <div class="hero-left">
          <div class="hero-content">
            <h1 class="heading">
              Donate a first aid kit.
              <br />
              Save a Ukrainian life.
            </h1>
            <p class="description">
              Ukraine is facing a critical shortage of individual first aid kits
              (IFAKs) that can treat serious injuries and save the lives of
              wounded Ukrainian soldiers and civilians.
            </p>
            <div class="donate-btn">
              <button id="donation-btn">DONATE in 2 minutes</button>
            </div>
            <div class="features-container">
              <div class="feature">
                <p class="title">$3.7M</p>
                <p>raised</p>
              </div>
              <div class="feature">
                <p class="title">30,523</p>
                <p>IFAKs delivered</p>
              </div>
              <div class="feature">
                <p class="title">501(c)(3)</p>
                <p>US veteran-led charity</p>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-right">
        <div class="hero-banner"></div>
        </div>
      </div>
    </div>
<div class="partners-section_container">
<div class="partners-section">
<div class="as_seen_on">
  <img
    class="desktop_only"
    src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/as_seen_on.png"
    alt="as_seen_on"
  />
  <img
    class="mobile_only"
    src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/as_seen_on_white.png"
    alt="as_seen_on"
  />
</div>
<div class="fox_news">
  <a
    href="https://www.foxnews.com/opinion/ukraine-war-question-ignore-20th-century-vow-never-again"
    target="_blank"
  >
    <img
      class="desktop_only"
      src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/fox_news.png"
      alt="fox_news"
    />
    <img
      class="mobile_only"
      src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/fox_news_white.png"
      alt="fox_news"
    />
  </a>
</div>
<div class="cnn">
  <a href="https://www.youtube.com/watch?v=kzq9BhXzJjY" target="_blank">
    <img class="desktop_only" src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/cnn.png" alt="cnn" />
    <img class="mobile_only" src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/cnn_white.png" alt="cnn" />
  </a>
</div>
<div class="the_boston_blobe">
  <a
    href="https://www.bostonglobe.com/2022/05/05/metro/former-us-marine-somerville-among-volunteers-helping-ukrainian-refugees-military/"
    target="_blank"
  >
    <img
      class="desktop_only"
      src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/the_boston_blobe.png"
      alt="the_boston_blobe"
    />
    <img
      class="mobile_only"
      src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/the_boston_blobe_white.png"
      alt="the_boston_blobe"
    />
  </a>
</div>
<div class="esquire">
  <a
    href="https://www.esquire.com/news-politics/a42929480/ukraine-secret-weapons/"
    target="_blank"
  >
    <img
      class="desktop_only"
      src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/esquire.png"
      alt="esquire"
    />
    <img
      class="mobile_only"
      src="https://cdn.jsdelivr.net/gh/Exactius/ex-product-exp/whitestork/assets/home/2x/esquire_white.png"
      alt="esquire"
    />
  </a>
</div>
</div>
    </div>
`;

  document.querySelector(".nav-button").outerHTML = `
    <div class="button vivid-yellow nav-button w-button donate">
      <a>Donate</a>
    </div>
  `;

  document.querySelector(".div-block-5").innerHTML = `
    <div class="text-block-bold">
      Ukraine is running out of time
    </div>
    <div class="hash-marks left-aligned">
      <div class="dash"></div>
      <div class="dash-blue"></div>
      <div class="dash"></div>
    </div>
    <h2>IFAKs save lives. We deliver to the frontlines.</h2>
    <p class="text-medium">Individual first aid kits (IFAKS) contain tourniquets, bandages, and chest seals that could be the difference between life and death for a wounded Ukrainian soldier or civilian. 
        <br><br>
      Operation White Stork has been on the ground since Day 4 of the war. We need your help now to keep going. Our US veteran-led team has delivered 30,532 IFAKs since the start of the war. No aid depots, no middlemen, no BS. We need your help to keep going.
    </p>
    <a data-formid="30660" href="#" class="button vivid-yellow donation-for-mobile w-button">Donate Today</a>
  `;

  const textT = document.querySelector(".div-block-5 p.text-medium");
  textT.innerHTML = `
    Individual first aid kits (IFAKS) contain tourniquets, bandages, and chest seals that could be the difference between life and death for a wounded Ukrainian soldier or civilian.&nbsp;
    <br>
    <br>
    Operation White Stork’s US veteran-led team has been on the ground since Day 4 of the war and has delivered over 30,532 IFAKs so far. No aid depots, no middlemen. No BS. We need your help now to keep going.
    <br>
    <br>
    All donations are <strong>tax-deductible.</strong>
  `;

  const donateButton = document.querySelector("#donation-btn");
  const donate = document.querySelector(".donate");

  donateButton.addEventListener("click", () => {
    scrolltoId("fr-placed-form-container-30660");
  });

  donate.addEventListener("click", () => {
    scrolltoId("fr-placed-form-container-30660");
  });
}

function scrolltoId(id) {
  const access = document.getElementById(id);
  window.scrollTo({
    top: access?.offsetTop - 110,
    behavior: "smooth"
  });
}

function checkElementToApplyTest() {
  const homePageCheck = setInterval(async function () {
    const heroSection = document.getElementsByClassName("nav-container");

    const heroSectionAppended2 =
      document.getElementsByClassName("main-section-hero");

    if (heroSection.length == 1) {
      createTest();
    }

    if (heroSectionAppended2.length === 0) {
      clearInterval(homePageCheck);
    }
  }, 100);
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
  setTimeout(() => {
    if (url.includes("/") || url.includes("")) {
      checkElementToApplyTest();
    }
  }, 700);
}
