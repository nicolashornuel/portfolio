import CreateDom from "./CreateDom.js";

export default class Card extends CreateDom {
  constructor(cards) {
    super();
    this.cards = cards;
    this.render();
  }

  render = () => {
    const main = document.querySelector("#main");
    const container = this.createAddDomElt("div", "", main, { class: "container", id: "card-anchor" });
    const divFlex = this.createAddDomElt("div", "", container, { class: "d-flex flex-wrap justify-content-between" });

    this.cards.forEach(card => {
        const cardContainer = this.createAddDomElt("div", "", container, { class: "card", style: "width: 18rem;"});
        const img = this.createAddDomElt("img", "", cardContainer, { class: "card-img-top", src: card.img });
        const body = this.createAddDomElt("div", '', cardContainer, { class: "card-body" });
        const title = this.createAddDomElt("h5", card.title, body, { class: "card-title" });
        const paragraph = this.createAddDomElt("p", card.paragraph, body, { class: "card-text" });
        const anchor = this.createAddDomElt("a", "Go to view", body, { class: "btn btn-primary", href: card.href });
    });

  };
}