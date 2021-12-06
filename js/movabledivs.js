
var check = true;


function moveDiv(item) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(item.id + "header")) {
    document.getElementById(item.id + "header").onmousedown = dragMouseDown;
  } 

  function dragMouseDown(e) {
    //if (checkxbtn(document.getElementById("aboutme"))){
      if (runchecks()){
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  else{
    check = true;
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    item.style.top = (item.offsetTop - pos2) + "px";
    item.style.left = (item.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Original code from w3schools, Edited to use for current website.


function checkxbtn(element){
  var xbtn1 = document.getElementById(element.id + "x-btn");
  xbtn1.addEventListener("mouseover", () => {
    check = false;
});
  return check;
}

function runchecks(){
  if(checkxbtn(document.getElementById("aboutme")) && checkxbtn(document.getElementById("skills")) && checkxbtn(document.getElementById("previouswork")) && checkxbtn(document.getElementById("contact")) && checkxbtn(document.getElementById("coursestaken"))){
    return true;
  }
  else{
    return false;
  }
}