import CreateDom from "./CreateDom.js";

export default class ScrollUpBtn extends CreateDom {
  constructor() {
    super();
    this.domElements = this.render();
    this.handleEvents();
  }

  handleEvents = () => {
    this.domElements.div.onclick = () => {
      window.scrollTo(0, 0);
    };
  };

  render = () => {
    const footer = document.querySelector("#footer");
    const div = this.createAddDomElt("div", "", footer, { class: "scroll-up-btn" });
    const icon = this.createAddDomElt("i", "", div, { class: "fas fa-angle-up" });
    return { div };
  };
}
