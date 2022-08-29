import CreateDom from "./CreateDom.js";

export default class MyTyped extends CreateDom {
  constructor(parent, data, selector) {
    super();
    this.parent = parent;
    this.data = data;
    this.selector = selector;
    this.render();
  }

  render = () => {
    const options = {
      strings: this.data,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };
    const span = this.createAddDomElt("span", "", this.parent, { class: this.selector });
    const typed = new Typed(`.${this.selector}`, options);
  };
}
