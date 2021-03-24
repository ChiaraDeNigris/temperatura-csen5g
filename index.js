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
med.onclick = calcoloMedia ;
function calcoloMedia () {
  var media = 0;
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"
  var nums = [5,8];
  for (let c of cityElems ) {
    let city = c.innerHTML;
    
    request.onload =() => {
      if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      media += dataObject.main.temp / cityElems.length;
      document.getElementById("mediaR").innerHTML=
      "la media è di " + media + " gradi";
    };
    
  }
   request.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
      city,
       true
    );
    request.send();
  }
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
