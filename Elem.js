class Elem {
  #allapot;
  constructor(szuloElem, index) {
    this.#allapot = true;
    this.szuloElem = szuloElem;
    this.index = index;
    szuloElem.append(`<div class="elem"><p></p></div>`);
    this.divElem = $(`article div:last-child`);
    this.pElem = this.divElem.children("p");
    this.divElem.on("click", () => {
      if (this.#allapot === true) {
        this.esemenyTrigger();
      }
      this.#allapot = false;
      //this.setElem("X");
    });
  }
  setElem(ertek) {
    this.pElem.html(ertek);
  }

  //sajat esemeny - itt at tudj adni a példány magáról infokat

  esemenyTrigger() {
    const esemeny = new CustomEvent("elemKivalasztas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Elem;
