const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const nav = document.querySelector("nav");
const cta = document.querySelector(".cta");
const mainContent = document.querySelector(".main-content");
const contact = document.querySelector(".contact");
const footer = document.querySelector("footer");

/* Nav */
nav.children[0].textContent = siteContent.nav["nav-item-1"];
nav.children[1].textContent = siteContent.nav["nav-item-2"];
nav.children[2].textContent = siteContent.nav["nav-item-3"];
nav.children[3].textContent = siteContent.nav["nav-item-4"];
nav.children[4].textContent = siteContent.nav["nav-item-5"];
nav.children[5].textContent = siteContent.nav["nav-item-6"];
document.getElementById("logo-img").src = siteContent.nav["img-src"];
/* Cta */
cta.children[0].children[0].textContent = siteContent.cta["h1"];
// let h = cta.children[0].children[0];
// h.append("DOM");
// let br = document.createElement("br");
// br.textContent = " Is";
// h.appendChild(br);
// h.append(" Awesome")
cta.children[0].children[1].textContent = siteContent.cta["button"];
cta.querySelector("#cta-img").src = siteContent.cta["img-src"];

const features = mainContent.children[0].children[0];
features.querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
features.querySelector("p").textContent = siteContent["main-content"]["features-content"];

const about = mainContent.children[0].children[1];
about.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
about.querySelector("p").textContent = siteContent["main-content"]["about-content"];