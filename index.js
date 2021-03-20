// Import stylesheets
import "./style.css"; 

var cityElems = document.getElementsByClassName("città");
for (let elem of cityElems ) {
  elem.onclick = () => display(elem.innerHTML);
  elem.onmouseover = () => {
    elem.style.backgroundColor = "red";
    elem.style.width = "30%" ;
  }
  elem.onmouseout = () => {
    elem.style.backgroundColor = "grey";
    elem.style.width = "18%" ;
  }
}

//media
var med = document.getElementById("media");
  med.onclick = () => {
    for (let elem of cityElems ) {
      var nums = [];
    
      let sum = nums.reduce((previous, current) => current += previous);
     
    }
    let avg = sum / nums.length;
    document.getElementById("risposta").innerText = avg;
  }

//aggiungo una nuova città
var add= document.getElementById("add");
var nome = document.getElementById("nuovaC");
add.onclick = () => {
  var lista = document.createElement("LI");
  var btn = document.createElement("BUTTON");
  btn.innerHTML = nome.value;
  btn.classList.add("città");  
  lista.appendChild(btn);
  var ull = document.getElementById("citt");
  ull.appendChild(lista);
  btn.onclick = () => display(btn.innerHTML);
}

// Funzione collegata ai bottoni
// "window" necessario in StackBlitz, può essere
// omesso altrimenti
function display(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"



  // Funzione callback invocata quando la request termina
  request.onload = function() {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      
      document.getElementById("risposta").innerHTML =
        "A " + city + " ci sono " + dataObject.main.temp + " gradi e una pressione di " + dataObject.main.pressure ;
    } else {
      document.getElementById("risposta").innerText = "Errore";
    }
  };

  // Applico il metodo "open"
  request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
      city,
    true
  );
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
};


