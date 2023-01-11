import CreateDom from './CreateDom.js';

export default class References extends CreateDom {
  constructor(data) {
    super();
    this.data = data;
    this.render();
    this.start();
  }

  render = () => {
    const main = document.querySelector('#main');
    const section = this.createAddDomElt('section', '', main, {class: 'references', id: 'references'});
    const container = this.createAddDomElt('div', '', section, {class: 'max-width'});
    const h1 = this.createAddDomElt('h1', this.data.title, container, {class: 'title', subtitle: this.data.subtitle});
    const carousel = this.createAddDomElt('div', '', container, {class: 'carousel owl-carousel owl-loaded'});
    const stageOuter = this.createAddDomElt('div', '', carousel, {class: 'owl-stage-outer'});
    const stage = this.createAddDomElt('div', '', stageOuter, {class: 'owl-stage'});
    this.data.cards.forEach(card => {
      const item = this.createAddDomElt('div', '', stage, {class: 'owl-item'});
      const cardContainer = this.createAddDomElt('div', '', item, {class: 'card'});
      const body = this.createAddDomElt('div', '', cardContainer, {class: 'card-body'});
      const appreciation = this.createAddDomElt('div', '', body, {class: 'appreciation'});
      this.createAddDomElt('i', '', appreciation, {class: 'fas fa-quote-left fa-2x'});  
      this.createAddDomElt('p', `${card.appreciation}`, appreciation);  
      this.createAddDomElt('div', card.label, body, {class: 'label'});
      this.createAddDomElt('div', card.note, body, {class: 'note'});
    });
  };

  start = () => {
    const options = {
      items: 3,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    };
    $('.carousel').owlCarousel(options);
  };
}
