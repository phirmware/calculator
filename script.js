var display1 = document.querySelector(".first");
var display2 = document.querySelector(".second");
var display3 = document.querySelector(".third"); 
var display4 = document.querySelector(".forth");
var answer = document.querySelector('.answer');

function selectBtn(num) {
  return document.getElementsByTagName("button")[num];
}

var numContainer1 = "";
var numContainer2 = "";
var showNumber = "";
var showNumber2 = "";
var loopedNum1 = 0;
var loopedNum2 = 0;
var calculate = 0;
//Button Listener
function eventListen(numBtn, num) {
  numBtn.addEventListener("click", function() {
    if (display2.innerHTML == "") {
      showNumber += numContainer1.concat(num);
      console.log(showNumber);
      display1.textContent = showNumber;
    } else{
      showNumber2 += numContainer2.concat(num);
      console.log(showNumber2);
      display3.textContent = showNumber2;
    }
  });
}

//Arithmetic button listener
function arithListener(btn, sign) {
  btn.addEventListener("click", function() {
    console.log("It works");
    display2.textContent = sign;
  });
}

//Zeroth button
var btnZero = selectBtn(0);
eventListen(btnZero, 0);

// One button
var btnOne = selectBtn(1);
eventListen(btnOne, 1);

//two button
var btnTwo = selectBtn(2);
eventListen(btnTwo, 2);

//three button
var btnThree = selectBtn(3);
eventListen(btnThree, 3);

//four button
var btnFour = selectBtn(4);
eventListen(btnFour, 4);

//fifth button
var btnFive = selectBtn(5);
eventListen(btnFive, 5);

//sixth button
var btnSix = selectBtn(6);
eventListen(btnSix, 6);

//seventh button
var btnSeven = selectBtn(7);
eventListen(btnSeven, 7);

//Eight button
var btnEight = selectBtn(8);
eventListen(btnEight, 8);

//Ninth button
var btnNinth = selectBtn(9);
eventListen(btnNinth, 9);

//multiply button
var multiplyBtn = selectBtn(10);
arithListener(multiplyBtn, "*");

//plus button
var plusBtn = selectBtn(11);
arithListener(plusBtn, "+");

//minus button
var minusBtn = selectBtn(12);
arithListener(minusBtn, "-");

//Division button
var divideBtn = selectBtn(13);
arithListener(divideBtn, "/");


var equalToo = document.querySelector(".equals");
equalToo.addEventListener('click',function(){
  display4.textContent = "=";
  if(display2.textContent == "*"){
    var ans = showNumber*showNumber2;
    answer.textContent = ans;
  }
  else if(display2.textContent == "+"){
    var ans = Number(showNumber) + Number(showNumber2);
    answer.textContent = ans;
  }
  else if(display2.textContent == "-"){
    var ans = Number(showNumber) - Number(showNumber2);
    answer.textContent = ans;
  }
  else if(display2.textContent == "/"){
   var ans = Number(showNumber) / Number(showNumber2);
   answer.textContent = ans;
  }
});


var reload = document.querySelector('.reload');
reload.addEventListener('click',function(){
  document.location.reload()
})