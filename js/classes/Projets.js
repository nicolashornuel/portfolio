import CreateDom from "./CreateDom.js";

export default class Projets extends CreateDom {
  constructor(data) {
    super();
    this.data = data;
    this.render();
  }

  render = () => {
    const main = document.querySelector("#main");
    const section = this.createAddDomElt("section", "", main, { class: "projects", id: "projects"});
    const container = this.createAddDomElt("div", "", section, { class: "max-width" });
    const h1 = this.createAddDomElt("h1", this.data.title, container, { class: "title", subtitle: this.data.subtitle });
    const content = this.createAddDomElt("div", "", container, { class: "projects-content"});

    this.data.cards.forEach(card => {
        const cardContainer = this.createAddDomElt("div", "", content, { class: "card"});
        const body = this.createAddDomElt("div", "", cardContainer, { class: "card-body"});
        const icon = this.createAddDomElt("i", "", body, { class: `${card.icon}`});
        const title = this.createAddDomElt("h5", card.title, body, { class: "card-title" });
        const synopsis = this.createAddDomElt("p", card.synopsis, body, { class: "synopsis" });

        const action = this.createAddDomElt("div", "", body, { class: "action" });
        const button = this.createAddDomElt("a", "Visiter", action, { class: "button", href: card.linkApp, target: "_blank" });
        const docs = this.createAddDomElt("div", "", action, { class: "docs" });
        card.compodoc ? this.createAddDomElt("a", "compodoc", docs, { class: "link", href: card.compodoc, target: "_blank" }) : null;
        card.javadoc ? this.createAddDomElt("a", "javadoc", docs, { class: "link", href: card.javadoc, target: "_blank" }) : null;

    });

  };


}