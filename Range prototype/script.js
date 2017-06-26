
var count = 4;

var inputFields = new Array();
for (var i=1; i<=count; i++){
  inputFields[i] = document.getElementById(i);
  inputFields[i].addEventListener("keyup", checkInput);
}//get all existing inputs into an array and add event listener

var pills = new Array();
for (var i=1; i<=9; i++){
  pills[i] = document.getElementById("p" + i);
  pills[i].childNodes[3].addEventListener("click", deletePill);
}//get all pills into an array and add delete event

document.getElementById("add").onclick = function() {
  count++;
  var inputField = document.createElement("input");
  inputField.className = "slds-input";
  inputField.setAttribute("id", count);
  inputField.addEventListener("keyup", checkInput);
  inputFields[count] = inputField;
  //add new input field to the array, add keyup event listener as well
  var shortLine = document.createElement("p");
  var lines = document.createTextNode("--");
  shortLine.appendChild(lines);
  shortLine.className = "short-line";
  shortLine.setAttribute("id", "l" + count);
  shortLine.setAttribute("style", "margin: 0px 3.3px");
  $(".inputs").append(inputField);
  $(".inputs").append(shortLine);
};

//this function runs once an keyup event being detected, check the value of the input
function checkInput(){
  var inputID = this.getAttribute("id");
  if(this.value){
    showPill(inputID);//if there's value in this input, then show the correspond pill
    activateLine(inputID);//make the line next to the input field green
  }else{
    removePill(inputID);
    removeNextPill(inputID);
    deActivateLine(inputID);
  }//if the input is empty, then remove the pill
}

function showPill(x){
  var thisPill = document.getElementById("p" + x);
  var y = parseInt(x)+1;
  var nextPill = document.getElementById("p" + y);
  thisPill.className = "slds-pill";
  nextPill.className = "slds-pill";
  var thisValue = inputFields[x].value;
  var lastValue;
  if(inputFields[x-1]){
    lastValue = inputFields[x-1].value;
  }else lastValue = "-1";
  thisPill.childNodes[1].innerHTML = parseInt(lastValue)+1 + "-" + thisValue;
  if(inputFields[y]){
    if(inputFields[y].value){
      nextPill.childNodes[1].innerHTML = parseInt(thisValue)+1 + "-" + inputFields[y].value;
    }else nextPill.childNodes[1].innerHTML = ">" + thisValue;
  }else nextPill.childNodes[1].innerHTML = ">" + thisValue;

  // pillValue.text(thisValue + "-" + nextValue);
  // why all jQuey function doesn't work???
}

function removePill(x){
  var thisPill = document.getElementById("p" + x);
  thisPill.className = "pill-hidden";
}

function removeNextPill(x){
  var y = parseInt(x)+1;
  var thisPill = document.getElementById("p" + y);
  thisPill.className = "pill-hidden";
}

function activateLine(x){
  var thisLine = document.getElementById("l" + x);
  thisLine.className = "short-line line-active";
  var lastIndex = parseInt(x)-1;
  if(document.getElementById(lastIndex).value){
    document.getElementById("l" + lastIndex).className = "short-line line-active";
  }
}

function deActivateLine(x){
  var thisLine = document.getElementById("l" + x);
  thisLine.className = "short-line";
  //the code below deactivate the previous line
  var y = parseInt(x)-1;
  var lastLine = document.getElementById("l" + y);
  lastLine.className = "short-line";
}

function deletePill(){
  var thisPill = this.parentElement;
  thisPill.className = "slds-pill pill-hidden";
  var pillID = thisPill.getAttribute("id");
  var pillIndex = pillID.charAt(1);
  var lineClass = document.getElementById("l" + pillIndex);
  var lastLineIndex = parseInt(pillIndex)-1;
  if(lineClass.getAttribute("class") == "short-line"){
    document.getElementById(pillIndex).value = "";
    document.getElementById("l" + lastLineIndex).className = "short-line";
  }else{
    document.getElementById("l" + lastLineIndex).className = "short-line";}
}
