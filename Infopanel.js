class Infopanel {
  constructor(asideElem) {

    asideElem.append(`<p class="lepes"></p>`);
    asideElem.append(`<p class="jatekos"></p>`);
    asideElem.append(`<p class="vege"></p>`);

    this.lepes = $(".lepes");
    this.jatekos = $(".jatekos");
    this.vege = $(".vege");
  }

  setLepes(lepes) {
    this.lepes.html(lepes).append(". lépés");
  }
  setJatekos(jatekos) {
    this.jatekos.html(jatekos);
  }
  setVege(vege) {
    this.vege.html(vege);
  }
}
export default Infopanel;
