import Navbar from "./classes/Navbar.js";
import About from "./classes/About.js";
import Fetch from "./services/Fetch.js";
import Projet from "./classes/Projet.js";
import Home from "./classes/Home.js";
import ScrollUpBtn from "./classes/ScrollUpBtn.js";

async function createPage() {
  const url = "./js/data.json";
  const fetch = new Fetch(url);
  const data = await fetch.getData();
  const obj = JSON.parse(data);
  const scrollUpBtn = new ScrollUpBtn();
  const navbar = new Navbar(obj.navbar);
  const home = new Home(obj.home);
  const jumbotron = new About(obj.about);
  //const projets = new Projet(obj.projets);
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
