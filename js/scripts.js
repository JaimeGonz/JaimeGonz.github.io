var i = 0;
var itemsArray = new Array();
var Cards = document.getElementById("Cards-link");

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

//obteniendo el valor que se puso en el campo text del formulario
function validar() {

  Texto = document.getElementById("text").value;
  var container = document.getElementById("shortener");
  var intro = document.getElementById('text');
  var p = document.getElementById('message');
  var adv = document.getElementById('AdvanceS');
  //la condición
  if (Texto.length == 0 || /^\s+$/.test(Texto)) {
    var intro = document.getElementById('text');
    intro.classList.add('inputActive');
    container.classList.add('divActive');
    p.classList.remove('alertMessage');
    p.classList.add('alertMessageActive');
    intro.focus();
    return false;
  }
  intro.classList.remove('inputActive');
  container.classList.remove('divActive');
  p.classList.add('alertMessage')
  p.classList.remove('alertMessageActive');
  adv.classList.add('advanceS');

  createLink();

  i++;

  return true;
}

function validar1() {
  Texto = document.getElementById("text").value;
  var container = document.getElementById("shortener");
  var intro = document.getElementById('text');
  var p = document.getElementById('message');
  var adv = document.getElementById('AdvanceS');
  //la condición
  if (Texto.length == 0 || /^\s+$/.test(Texto)) {
    intro.classList.remove('inputActive');
    container.classList.remove('divActive');
    p.classList.add('alertMessage')
    p.classList.remove('alertMessageActive');
    return false;
  }

  return true;
}

// Give the style to the input field after press
document.getElementById("text").onkeypress = function () {
  shortener();
};

function shortener() {
  Texto = document.getElementById("text").value;
  var container = document.getElementById("shortener");
  var intro = document.getElementById('text');
  var p = document.getElementById('message');
  var adv = document.getElementById('AdvanceS');

  if (Texto.length == 0 || /^\s+$/.test(Texto)) {
    intro.classList.remove('inputActive');
    container.classList.remove('divActive');
    p.classList.add('alertMessage')
    p.classList.remove('alertMessageActive');
    return false;
  }

  return true;
}

var i = 0;
var ALL_CARD;
var contenido = "";
var a = "";

function copy(clicked) {
  var btn = document.getElementById(clicked);
  // Button styles
  btn.classList.add('btn-copyOnClick');
  btn.innerHTML = "Copied!";

  // CopyFunction
  var card_shortener = btn.previousSibling.id;

  var copyText = document.getElementById(card_shortener);
  copyText.select();
  document.execCommand("copy");

  // var shortener = btn.previousSibling;
  // var card_shortener = shortener.id;
}


var lista;

function createLink() {
  const url = document.getElementById("text").value;
  const requestData = {
    url
  }
  lista = document.getElementById("Cards-link");
  axios.post('https://rel.ink/api/links/', requestData)
    .then(function (response) {
      // console.log(`Here is your shorted link: https://rel.ink/${response.data.hashid}`);
      document.getElementById("text").value = '';

      lista.insertAdjacentHTML("beforeend", "<div id='card_link" + i + "' class='card-link'>" +
        "<p id='URL" + i + "' class='title-card-link'>" + url + "</p>" +
        "<input type='text' id='link" + i + "' class='text-card-link'" +
        `value= 'https://rel.ink/${response.data.hashid}'` +
        ">" +
        "<button id='Copy" + i + "' type='button' class='btn btn-card-link'" +
        " onclick='return copy(this.id)'>Copy</button>" +
        "</div>");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function refresh() {

  if (true) {

    console.log("TRUE");
    debugger;
    console.log("Hola amigo bonito");

    // var tarjeta = new Object();
    ALL_CARD = (document.getElementById(btn.parentNode.id)).outerHTML;
    var card_link = btn.previousSibling.previousSibling;
    // tarjeta.link = card_link.outerHTML;
    // tarjeta.shortener = copyText.outerHTML;
    // tarjeta.button = btn.outerHTML;
    // console.log(hola);
    // itemsArray.push(ALL_CARD);

    contenido = contenido + ALL_CARD;
    var a = contenido;
    sessionStorage.setItem('Links', a);
    itemsArray = sessionStorage.getItem('Links');
    // itemsArray = sessionStorage.getItem('Links') ? JSON.parse(sessionStorage.getItem('Links')) : []

    sessionStorage.setItem('Links', a);
    const data = JSON.stringify(sessionStorage.getItem('Links'));
    var a = document.getElementById('Cards-link');
    console.log(a);
    a.insertAdjacentHTML("beforeend", data);

    // data.forEach(item => {
    //   console.log("Hola");
    //   liMaker(item);
    // });
  }

}
