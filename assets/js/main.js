let name='seyi';
console.log(name);

let food='beans';
console.log(food);


let firstName="seyi";
let lastName="adebayo";
let fullName=firstName+' '+ lastName;
console.log(fullName)


let example=["xty", 5, true];
example.push("peters");
console.log(example)

let firstvariable={
    firstName:"xty"
}
firstvariable.lastName="peters"
console.log(firstvariable)

let x=5
if (x>2) {
    console.log("x is greater than 2")
} else{
    console.log("x is not greater than 2")
}

for (let i=0; i<5;i++){
    console.log(i);
}

food=["rice", "bean","yam"]
for(let i=0;i<food.length;i++){
    console.log(food[i])
}

function add (x, y){
    console.log(x+y)
}
add(5,3)

function subtract (d, c){
    console.log(d-c)
}
subtract(3,5)

function divide (a, b){
    console.log(a/b)
}
divide(3,15)

function multiply(x, y){
    console.log(x+y)
}
multiply(5,3)


document.getElementById("boom").innerHTML="Life is beautiful"
// document.getElementById("htag1").style.color="blue"
document.getElementById("htag2").style.color="blue"
document.getElementById("htag2").style.fontFamily="Arial"
document.getElementById("htag2").style.fontSize="80px"
document.getElementById("button").style.color="white"
document.getElementById("button").style.width="100px"
document.getElementById("button").style.height="30px"
document.getElementById("button").style.backgroundColor="blue"

document.getElementById("htag3").style.color="yellow"
document.getElementById("htag3").style.fontFamily="Arial"
document.getElementById("htag3").style.fontSize="80px"

document.getElementById("htag4").style.color="green"
document.getElementById("htag4").style.fontFamily="Arial"
document.getElementById("htag4").style.fontSize="80px"

document.getElementById("htag5").style.color="purple"
document.getElementById("htag5").style.fontFamily="Arial"
document.getElementById("htag5").style.fontSize="80px"

document.getElementById("htag6").style.color="red"
document.getElementById("htag6").style.fontFamily="Arial"
document.getElementById("htag6").style.fontSize="80px"

document.getElementById("htag7").style.color="brown"
document.getElementById("htag7").style.fontFamily="Arial"
document.getElementById("htag7").style.fontSize="80px"

function changecolor(newcolor){
    let elem =document.getElementById('para');
    elem.style.color=newcolor;
}