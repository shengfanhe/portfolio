var count=1;
var placeHolder=0;

var pills = new Array();
for (var i=1; i<=9; i++){
  pills[i] = document.getElementById("p" + i);
  pills[i].childNodes[3].addEventListener("click", deletePill);
}//get all pills into an array and add delete event

var button = document.getElementById("add");
button.onclick = function(){
  showPill();
  count++;
  clearInputs();
}

function showPill(){
  var firstValue = document.getElementById("1").value;
  var secondValue = document.getElementById("2").value;
  var thisPill = document.getElementById("p" + count);
  thisPill.className = "slds-pill";
  thisPill.childNodes[1].innerHTML = firstValue + "-" + secondValue;
  document.getElementById("p9").className = "slds-pill";
  document.getElementById("p9").childNodes[1].innerHTML = ">" + secondValue;
  placeHolder = parseInt(secondValue)+1;
}

function deletePill(){
  var thisPill = this.parentElement;
  thisPill.className = "slds-pill pill-hidden";
}

function clearInputs(){
  document.getElementById("1").value = placeHolder;
  document.getElementById("2").value = "";
}
