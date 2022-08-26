import CreateDom from "./CreateDom.js";
export default class Navbar extends CreateDom {
  constructor(tabs) {
    super();
    this.tabs = tabs;
    this.render();
  }
  render = () => {
    const header = document.querySelector("#header");
    const nav = this.createAddDomElt("nav", "", header, {
      class: "navbar fixed-top navbar-expand-lg navbar-dark bg-secondary",
    });
    const brand = this.createAddDomElt("a", "Nicolas HORNUEL", nav, {
      class: "navbar-brand",
      href: "#",
    });
    const button = this.createAddDomElt("button", "", nav, {
      class: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
    });
    const burger = this.createAddDomElt("span", "", button, {
      class: "navbar-toggler-icon",
    });
    const div = this.createAddDomElt("div", "", nav, {
      class: "collapse navbar-collapse",
      id: "navbarNav",
    });
    const ul = this.createAddDomElt("ul", "", div, { class: "navbar-nav" });
    let tabs = [];
    this.tabs.forEach((tab) => {
      const li = this.createAddDomElt("li", "", ul, {
        class: "nav-item",
      });
      const a = this.createAddDomElt("a", tab.name, li, {
        class: "nav-link",
        href: tab.href,
      });
      tabs.push({ li, a });
    });

    return { button, tabs };
  };
}
