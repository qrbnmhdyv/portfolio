var vur1=document.getElementById("btn1");
var	a=document.getElementById("ev1");
vur1.addEventListener("click", myfunc)
function myfunc(){
	vur1.style.background="black"
	vur2.style.background="white"
	a.style.left="-675px"
	b.style.left="0px"
console.log(a)
}
var vur2=document.getElementById("btn2");
var	b=document.getElementById("ev2")
vur2.addEventListener("click", myfunc2)
function myfunc2(){
	vur1.style.background="white"
	vur2.style.background="black"
	a.style.left="0px"
	b.style.left="675px"
}


var bt1=document.getElementById("btns1");
var bt2=document.getElementById("btns2");
var	sag=document.getElementById("qb2")
var	sol=document.getElementById("qb1");
bt1.addEventListener("click", func)
function func(){
	bt1.style.background="black"
	bt2.style.background="white"
	sag.style.left="0px"
	sol.style.left="-1400px"

console.log(a)
}
bt2.addEventListener("click", func2)
function func2(){
	bt1.style.background="white"
	bt2.style.background="black"
	sag.style.left="1400px";
	sol.style.left="0px"
}


var sekil1=document.querySelector(".qbl1")
var sekil2=document.querySelector(".qbl2")
var lft=document.querySelector(".batn1")
var rght=document.querySelector(".batn2")
lft.addEventListener("click",mowu)
function mowu(){
	sekil1.style.left="-1350px";
	sekil2.style.left="-1350px";
	lft.style.background="black"
	rght.style.background="white"

}
rght.addEventListener("click",mowu2)
function mowu2(){
	sekil2.style.left="0px"
	sekil1.style.left="0px"
	lft.style.background="white"
	rght.style.background="black"
	
}