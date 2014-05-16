
var state_2 = 0;
var state_1 = 0;
var state_0 = 0;
var buttonNext = 0;
var a0=0;
var a1=0;
var b0=0;
var b1=0;
var c0=0;
var c1=0;
var d0=0;
var d1=0;
var next0=0;
var next1=0;
var prev0=0;
var prev1=0;


function httpGET(url) {
      // (1) This function lets us, in some ways, simulate a browser and go
      // visit a particular URL programmatically, and returns the results.
      //
      // You can read more about it at:
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send();

      return xhr.responseText;
  }

function readButton() {
  buttonNext = parseFloat(httpGET('http://192.168.7.2:8080/readButton'));
  return buttonNext;
}

function readA() {
  buttonA = parseFloat(httpGET('http://192.168.7.2:8080/readA'));
  return buttonA;
}
function readB() {
  buttonB = parseFloat(httpGET('http://192.168.7.2:8080/readB'));
  return buttonB;
}
function readC() {
  buttonC = parseFloat(httpGET('http://192.168.7.2:8080/readC'));
  return buttonC;
}
function readD() {
  buttonD = parseFloat(httpGET('http://192.168.7.2:8080/readD'));
  return buttonD;
}
function readNext() {
  buttonNext = parseFloat(httpGET('http://192.168.7.2:8080/readNext'));
  return buttonNext;
}
function readPrev() {
  buttonPrev = parseFloat(httpGET('http://192.168.7.2:8080/readPrev'));
  return buttonPrev;
}

// Code for a button Rising edge Detector

function readingButton(){
    state_2 = state_1;
    state_1 = state_0;
    state_0 = readButton();
//    console.log(state_2 + ", " + state_1 + ", " + state_0);
    // console.log(state_1 + ", " + state_0);
    if ((state_2 == 0) && (state_1 == 1) && (state_0 == 0)) {
      console.log("clicked");
    }
    if ((state_1 == 0) && (state_0 == 1)) {
          console.log("rising edge");
          next();
    }
    // console.log((state_2 || state_1) && (state_0 || state_1));
}

//Reading Buttons

function aButtonReading(){
  a1=a0;
  a0=readA();
   if ((a1 == 0) && (a0 == 1)) {
          console.log("rising edge in button A");
          abutton();
    }
}

function bButtonReading(){
  b1=b0;
  b0=readB();
   if ((b1 == 0) && (b0 == 1)) {
          console.log("rising edge in button B");
          bbutton();
    }
}

function cButtonReading(){
  c1=c0;
  c0=readC();
   if ((c1 == 0) && (c0 == 1)) {
          console.log("rising edge in button C");
          cbutton();
    }
}

function dButtonReading(){
  d1=d0;
  d0=readD();
   if ((d1 == 0) && (d0 == 1)) {
          console.log("rising edge in button D");
          dbutton();
    }
}

function nextButtonReading(){
  next1=next0;
  next0=readNext();
   if ((next1 == 0) && (next0 == 1)) {
          console.log("rising edge in button Next");
          next();
    }
}

function prevButtonReading(){
  prev1=prev0;
  prev0=readPrev();
   if ((prev1 == 0) && (prev0 == 1)) {
          console.log("rising edge in button Prev");
          prev();
    }
}




  window.setInterval(function() {
    readingButton();
    aButtonReading();
    bButtonReading();
    cButtonReading();
    dButtonReading();
    nextButtonReading();
    prevButtonReading();
  }, 500);







