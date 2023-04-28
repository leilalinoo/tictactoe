class Elem {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    szuloElem.append(`<div class="elem"><p></p></div>`);
    this.divElem = $(`article div:last-child`);
    this.pElem = this.divElem.children("p");
    this.divElem.on("click", () => {
      //this.setElem("X");
      this.esemenyTrigger()
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
