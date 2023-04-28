import Elem from "./Elem.js";
import Infopanel from "./Infopanel.js";
class Jatekter {
  #lepes;
  constructor() {
    this.#lepes = 0;
    const szuloElem = $("article");
    const asideElem = $("aside");
    const info = new Infopanel(asideElem);

    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloElem, index);
    }

    // a lepes páros, akkor X, ha páratlan, akkor O

    $(window).on("elemKivalasztas", (event) => {
      if (this.#lepes % 2 === 0) {
        event.detail.setElem("X");
        info.setJatekos("Az O jön");
      } else {
        event.detail.setElem("O");
        info.setJatekos("Az X jön");
      }
      this.#lepes++;

      info.setLepes(this.#lepes);
      if (this.#lepes > 8) {
        info.setVege("Vége a játéknak");
      }
    });
  }
}
export default Jatekter;
