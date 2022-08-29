import Navbar from "./classes/Navbar.js";
import About from "./classes/About.js";
import Fetch from "./services/Fetch.js";
import Card from "./classes/Card.js";
import Home from "./classes/Home.js";

async function createPage() {
  const url = "./js/data.json";
  const fetch = new Fetch(url);
  const data = await fetch.getData();
  const obj = JSON.parse(data);
  const navbar = new Navbar(obj.navData);
  const home = new Home(obj.homeData);
  const jumbotron = new About(obj.aboutData);
  const cards = new Card(obj.cardData);
}

window.onscroll = () => {
  const position = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  if (position < 20) {
    navbar.classList.remove("scrolled-down");
  } else {
    navbar.classList.add("scrolled-down");
  }
};

createPage();
