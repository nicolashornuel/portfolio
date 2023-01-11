import Navbar from "./classes/Navbar.js";
import About from "./classes/About.js";
import Fetch from "./services/Fetch.js";
import Projets from "./classes/Projets.js";
import Home from "./classes/Home.js";
import ScrollUpBtn from "./classes/ScrollUpBtn.js";
import Skills from "./classes/Skills.js";
import References from "./classes/References.js";
import Footer from "./classes/Footer.js";

async function createPage() {
  const url = "./js/data.json";
  const fetch = new Fetch(url);
  const data = await fetch.getData();
  const obj = JSON.parse(data);
  new ScrollUpBtn();
  new Navbar(obj.navbar);
  new Home(obj.home);
  new About(obj.about);
  new Projets(obj.projets);
  new Skills(obj.skills);
  new References(obj.references);
  new Footer();
}

window.onscroll = () => {
  const position = window.pageYOffset;
  // set navbar sticky on scroll
  const navbar = document.querySelector(".navbar");
  if (position < 20) {
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky");
  }
  // show/hide scroll-up button on scroll
  const scrollUpBtn = document.querySelector(".scroll-up-btn");
  if (position > 500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }

};

createPage();
