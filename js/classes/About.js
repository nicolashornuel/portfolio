import CreateDom from "./CreateDom.js";
import MyTyped from "./MyTyped.js";

export default class About extends CreateDom {
  constructor(data) {
    super();
    this.data = data;
    this.render();
  }

  render = () => {
    const main = document.querySelector("#main");
    const about = this.createAddDomElt("section", "", main, { id: "about"});
    const container = this.createAddDomElt("div", "", about, { class: "max-width" });
    const h1 = this.createAddDomElt("h1", this.data.title, container, { class: "title", subtitle: this.data.subtitle });
    const content = this.createAddDomElt("div", "", container, { class: "about-content"});
    const left = this.createAddDomElt("div", "", content, { class: "column left"});
    const img = this.createAddDomElt("img", "", left, { src: "img/_YM_0162-v2.jpg" });
    const right = this.createAddDomElt("div", "", content, { class: "column right"});
    const text = this.createAddDomElt("div", this.data.text, right, { class: "text" });
    const typed = new MyTyped(text, this.data.span, "typed-about");
    const firstPara = this.createAddDomElt("p", this.data.firstParagraph, right, { class: "lead" });
    const divider = this.createAddDomElt("hr", '', right, { class: "my-4" });
    const secondPara = this.createAddDomElt("p", this.data.secondParagraph, right);
  };
}
