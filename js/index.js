import Navbar from "./classes/Navbar.js";
import Jumbotron from "./classes/Jumbotron.js";
import Fetch from "./services/Fetch.js";
import Card from "./classes/Card.js"

async function createPage() {
    const url = './js/data.json'
    const fetch = new Fetch(url);
    const data = await fetch.getData();
    const obj = JSON.parse(data);
  const navbar = new Navbar(obj.navData);
  const jumbotron = new Jumbotron(obj.jumboData);
  const cards = new Card(obj.cardData);
}

createPage();
