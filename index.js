// Import stylesheets
import "./style.css"; 
var t=0;

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
calcoloMedia.onclick = () => media();

function doCity (city, callback){
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"
  request.onload =() => {
      if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      callback (dataObject);
    } else{
      document.getElementById("mediaR").innerText ="Errore";
    }
  };
   request.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
      city,
       true
    );
  request.send();
}

function display(city) {
  doCity (city, function(data){
   document.getElementById("risposta").innerHTML =
    "A " + city + " ci sono " + dataObject.main.temp + " gradi e una pressione di " + dataObject.main.pressure ;
  });
}
      
;
function media () {
  t = 0;
  for (let c of cityElems ) {
     doCity (city.innerHTML, function(data){
      t += dataObject.main.temp / cityElems.length;
      document.getElementById("mediaR").innerText= t;
    });
  }
}