import Elem from "./Elem.js";

$(function () {
    let lepes = 0;
  const szuloElem = $("article");

  for (let index = 0; index < 9; index++) {
    const elem = new Elem(szuloElem);
  }


  // a lepes páros, akkor X, ha páratlan, akkor O

  $(window).on("elemKivalasztas", (event) => {
    console.log(event.detail)
  })



});
