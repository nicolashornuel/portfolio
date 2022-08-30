import CreateDom from "./CreateDom.js";
import MyTyped from "./MyTyped.js";

export default class Home extends CreateDom {
  constructor(data) {
    super();
    this.data = data;
    this.render();
  }

  render = () => {
    const main = document.querySelector("#main");
    const home = this.createAddDomElt("section", "", main, { class: "home", id: "home"});
    const container = this.createAddDomElt("div", "", home, { class: "max-width" });
    const textContainer = this.createAddDomElt("div", "", container, { class: "home-content" });
    const text1 = this.createAddDomElt("p", this.data.text1, textContainer, { class: "text1" });
    const text2 = this.createAddDomElt("p", this.data.text2, textContainer, { class: "text2" });
    const text3 = this.createAddDomElt("p", this.data.text3, textContainer, { class: "text3" });
    const typed = new MyTyped(text3, this.data.span, "typed-home");

  };
}
