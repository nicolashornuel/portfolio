import CreateDom from "./CreateDom.js";
export default class Navbar extends CreateDom {
  constructor(data) {
    super();
    this.data = data;
    this.domElements = this.render();
    this.handleEvents();
  }

  handleEvents = () => {
    this.domElements.burger.onclick = () => {
      this.domElements.menu.classList.toggle("active");
      this.domElements.icon.classList.toggle("active");
    };
    this.domElements.anchors.forEach((tab) => {
      tab.onclick = () => {
        this.domElements.menu.classList.toggle("active");
        this.domElements.icon.classList.toggle("active");
      };
    });
  };

  render = () => {
    const header = document.querySelector("#header");
    const nav = this.createAddDomElt("nav", "", header, { class: "navbar" });
    const container = this.createAddDomElt("div", "", nav, { class: "max-width" });
    // BRAND
    const brand = this.createAddDomElt("a", this.data.firstName, container, { class: "brand", href: "#" });
    const span = this.createAddDomElt("span", this.data.lastName, brand);
    // MENU
    const menu = this.createAddDomElt("ul", "", container, { class: "menu" });
    let anchors = [];
    this.data.tabs.forEach((tab) => {
      const li = this.createAddDomElt("li", "", menu);
      const a = this.createAddDomElt("a", tab.name, li, { class: "menu-btn", href: tab.href });
      anchors.push(a);
    });
    // BURGER
    const burger = this.createAddDomElt("div", "", container, { class: "burger menu-btn" });
    const icon = this.createAddDomElt("i", "", burger, { class: "fas fa-bars" });
    return { menu, burger, icon, anchors };
  };
}
