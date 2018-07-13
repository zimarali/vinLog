function addVIN(){
  grabVIN();
}

function clearVIN(){
  clearLog();
}

function grabVIN(){
  var log = document.getElementById("log1");
  var vin = document.getElementById("vinInput").value;
  log.insertAdjacentHTML('beforeend', vin);
  log.insertAdjacentHTML('beforeend', " OR ");
}

function clearLog(){
  document.getElementById("log1").innerHTML = "";
}
