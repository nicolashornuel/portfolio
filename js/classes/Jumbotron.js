import CreateDom from "./CreateDom.js";

export default class Jumbotron extends CreateDom {
  constructor(data) {
    super();
    this.title = data.title;
    this.firstParagraph = data.firstParagraph;
    this.secondParagraph = data.secondParagraph;
    this.render();
  }

  render = () => {
    const main = document.querySelector("#main");
    const jumbotron = this.createAddDomElt("div", "", main, { class: "jumbotron jumbotron-fluid" });
    const container = this.createAddDomElt("div", "", jumbotron, { class: "container" });
    const h1 = this.createAddDomElt("h1", this.title, container, { class: "display-4" });
    const firstPara = this.createAddDomElt("p", this.firstParagraph, container, { class: "lead" });
    const divider = this.createAddDomElt("hr", '', container, { class: "my-4" });
    const secondPara = this.createAddDomElt("p", this.secondParagraph, container);
  };
}
