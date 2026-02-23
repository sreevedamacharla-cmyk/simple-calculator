let index=0;
let value=document.innerText;
const display=document.querySelector(".display");
const result=document.querySelector(".displayresult");
let one=document.querySelector("#btn1");
let two=document.querySelector("#btn2");
let three=document.querySelector("#btn3");
let four=document.querySelector("#btn4");
let five=document.querySelector("#btn5");
let six=document.querySelector("#btn6");
let seven=document.querySelector("#btn7");
let eight=document.querySelector("#btn8");
let nine=document.querySelector("#btn9");
let zero=document.querySelector("#zerobtn");
let hundred=document.querySelector("#doublezerobtn");
let clear=document.querySelector("#clearbtn");
let exponent=document.querySelector("#exponentbtn");
let percent=document.querySelector("#percentbtn");
let division=document.querySelector("#divisionbtn");
let multiply=document.querySelector("#multiplybtn");
let subtract=document.querySelector("#subtractbtn");
let addition=document.querySelector("#additionbtn");
let decimal=document.querySelector("#dotbtn");
let equals=document.querySelector("#equalsbtn");

function appendValue(value){
    display.textContent+=value;
}


one.addEventListener("click",()=>{
    console.log("button 1 was clicked");
    appendValue('1');

})

two.addEventListener("click",()=>{
    console.log("button 2 was clicked");
    appendValue('2');

})

three.addEventListener("click",()=>{
    console.log("button 3 was clicked");
    appendValue('3');

})

four.addEventListener("click",()=>{
    console.log("button 4 was clicked");
    appendValue('4');

})

five.addEventListener("click",()=>{
    console.log("button 5 was clicked");
    appendValue('5');

})

six.addEventListener("click",()=>{
    console.log("button 6 was clicked");
    appendValue('6');

})

seven.addEventListener("click",()=>{
    console.log("button 7 was clicked");
    appendValue('7');

})

eight.addEventListener("click",()=>{
    console.log("button 8 was clicked");
    appendValue('8');

})

nine.addEventListener("click",()=>{
    console.log("button 9 was clicked");
    appendValue('9');

})

zero.addEventListener("click",()=>{
    console.log("button 0 was clicked");
    appendValue('0');

})

hundred.addEventListener("click",()=>{
    console.log("button 00 was clicked");
    appendValue('00');

})


percent.addEventListener("click",()=>{
    console.log("percent button was clicked");
    appendValue('%');

})

division.addEventListener("click",()=>{
    console.log("divide button was clicked");
    appendValue('/');

})

multiply.addEventListener("click",()=>{
    console.log("multiply button was clicked");
    appendValue('*');

})

subtract.addEventListener("click",()=>{
    console.log("subtract button was clicked");
    appendValue('-');

})

addition.addEventListener("click",()=>{
    console.log("addition buttonwas clicked");
    appendValue('+');
    

})

decimal.addEventListener("click",()=>{
    console.log("decimal button was clicked");
    appendValue('.');

})

equals.addEventListener("click",()=>{
    console.log("equals button was clicked");
    let output=eval(display.innerText);
    display.innerText=output;
    console.log(output);

})

clear.addEventListener("click",()=>{
    console.log("clear button was clicked");
    display.innerText="";

})

exponent.addEventListener("click",()=>{
    console.log("exponent buttonwas clicked");
    appendValue('**');

})








