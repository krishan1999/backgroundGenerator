//JS Variables 

let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");

let root= document.querySelector("html");
let dis= document.querySelector(".hidden");

//set the color of the background
root.style.background="linear-gradient(to right," + c1.value + "," + c2.value + ")";
//root.style.background=`linear-gradient(to right, $(c1.value), $(c2.value) )`;
c1.addEventListener("input", function()
{
root.style.background="linear-gradient(to right," + c1.value + "," + c2.value + ")";

dis.style.display="block";
dis.innerHTML= "Color Picker1: "+ c1.value + " | Color Picker2: "+ c2.value;
});

c2.addEventListener("input", function()
{
root.style.background="linear-gradient(to right," + c1.value + "," + c2.value + ")";    
dis.style.display="block";
dis.innerHTML= "Color Picker1: "+ c1.value + " | Color Picker2: "+ c2.value;
});

dis.addEventListener("copy",function()
{
	dis.style.color="red";
});