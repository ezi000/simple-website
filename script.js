const dni = document.getElementById("dni");
const godziny = document.getElementById("godziny");
const minuty = document.getElementById("minuty");
const sekundy = document.getElementById("sekundy");


function updateYear() {    
    let nowyRok = new Date();
    nowyRok.setMonth(0);
    nowyRok.setDate(1);
    var currentYear = nowyRok.getFullYear();
    var nextYear = currentYear + 1;
    return nowyRok.setFullYear(nextYear);
}


updateYear();






function odliczanie() {
  let data = new Date();

  let roznicaDat = nowyRok - data;

  let ileDni = Math.floor(roznicaDat / (1000 * 60 * 60 * 24));
  let ileGodzin = Math.floor((roznicaDat / (1000 * 60 * 60)) % 24);
  let ileMinut = Math.floor((roznicaDat / (1000 * 60)) % 60);
  let ileSekund = Math.floor((roznicaDat / 1000) % 60);

  if (ileSekund < 10) {
    sekundy.innerHTML = `0${ileSekund}`;
  } else sekundy.innerHTML = ileSekund;

  if (ileMinut < 10) {
    minuty.innerHTML = `0${ileMinut}`;
  } else minuty.innerHTML = ileMinut;

  if (ileGodzin > 0) {
    godziny.innerHTML = `0${ileGodzin}`;
  } else godziny.innerHTML = ileGodzin;

  dni.innerHTML = ileDni;
}
odliczanie();
setInterval(odliczanie, 1000);
