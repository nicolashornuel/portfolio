import CreateDom from "./CreateDom.js";

export default class Footer extends CreateDom {
  constructor() {
    super();
    this.render();
  }

  render = () => {
    const footer = document.querySelector("#footer");
    const span = this.createAddDomElt("span", "Creating By ", footer);
    this.createAddDomElt("a", "Nicolas HORNUEL", span, {href: "#"});
    span.append(" | ");
    this.createAddDomElt("i", "", span, {class: "far fa-copyright"});
    span.append(" 2022 All rights reserved.");
  };
}