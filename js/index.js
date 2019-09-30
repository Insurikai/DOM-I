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


nav.children[0].textContent = siteContent.nav["nav-item-1"];
nav.children[1].textContent = siteContent.nav["nav-item-2"];
nav.children[2].textContent = siteContent.nav["nav-item-3"];
nav.children[3].textContent = siteContent.nav["nav-item-4"];
nav.children[4].textContent = siteContent.nav["nav-item-5"];
nav.children[5].textContent = siteContent.nav["nav-item-6"];
document.getElementById("logo-img").src = siteContent.nav["img-src"];

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

mainContent.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

const services = mainContent.children[2].children[0];
services.querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
services.querySelector("p").textContent = siteContent["main-content"]["services-content"];

const product = mainContent.children[2].children[1];
product.querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
product.querySelector("p").textContent = siteContent["main-content"]["product-content"];

const vision = mainContent.children[2].children[2];
vision.querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
vision.querySelector("p").textContent = siteContent["main-content"]["vision-content"];

contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];
let para = contact.querySelectorAll("p");
para[0].textContent = siteContent.contact["address"];
para[1].textContent = siteContent.contact["phone"];
para[2].textContent = siteContent.contact["email"];

footer.querySelector("p").textContent = siteContent.footer["copyright"];

/* Task 3 */
for (let i = 0; i < nav.children.length; i++) {
  console.log(nav.children[i]);
  nav.children[i].style.color = "green";
}
let YTLink = document.createElement("a");
YTLink.textContent = "YouTube";
YTLink.style.color = "green";
nav.append(YTLink);

let YTLogo = document.createElement("a");
let Logo = document.createElement("img");
Logo.style.height = "18px";
Logo.src = "data:image/png;base64,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";
YTLogo.append(Logo);
YTLogo.href = "https://www.youtube.com";
nav.append(YTLogo);