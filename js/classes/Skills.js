import CreateDom from "./CreateDom.js";

export default class Skills extends CreateDom {
  constructor(data) {
    super();
    this.data = data;
    this.render();
  }

  render = () => {
    const main = document.querySelector("#main");
    const section = this.createAddDomElt("section", "", main, { class: "skills", id: "skills"});
    const container = this.createAddDomElt("div", "", section, { class: "max-width" });
    const h1 = this.createAddDomElt("h1", this.data.title, container, { class: "title", subtitle: this.data.subtitle });
    const content = this.createAddDomElt("div", "", container, { class: "content"});

    let nbItemsByCol = Math.ceil(this.data.bars.length / 3);
    this.byCol(this.data.bars.slice(0, nbItemsByCol), content);
    this.byCol(this.data.bars.slice(nbItemsByCol, nbItemsByCol*2), content);
    this.byCol(this.data.bars.slice(nbItemsByCol*2, this.data.bars.length), content);

  };

  byCol = (array, content) => {
    const colContainer = this.createAddDomElt("div", "", content, {class: "col"});
    array.forEach(bar => {
      const barContainer = this.createAddDomElt("div", "", colContainer, {class: "bar"});
      const info = this.createAddDomElt("div", "", barContainer, {class: "info"});
      const spanLeft = this.createAddDomElt("span", "", info, {class: "span-left"});
      const spanRight = this.createAddDomElt("span", "", info, {class: "span-right"});
      const icon = this.createAddDomElt("i", "", spanLeft, { class: `${bar.icon}`});
      const techno = this.createAddDomElt("span", bar.techno, spanLeft);
      const level = this.createAddDomElt("span", bar.level, spanRight);
      const percent = this.createAddDomElt("div", "", barContainer, {class: "percent", style: `--percent: ${bar.percent};`});
  });
  }

}