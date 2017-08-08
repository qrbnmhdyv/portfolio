

var imgcaunt=1
var total = 3;

function plusIndex(x){
	var image = document.getElementById("image")
	imgcaunt=imgcaunt+x;
	if(imgcaunt<1){imgcaunt = total};
	if(imgcaunt>total){imgcaunt = 1}
	image.src= "img/img" + imgcaunt + ".jpg"
	image.style.transition = "all .9s ease"
}

var im = document.getElementById("image");

var images = ["./img/img1.jpg", "./img/img3.jpg","./img/img2.jpg" ];
var index=0;

function changeImage()
{
  im.setAttribute("src", images[index]);
  index++;
  if(index >= images.length)
  {
    index=0;
  }
}

setInterval(changeImage, 4000);
// .............................................................



var f=document.querySelector(".f");
var aktiv=document.querySelector(".aktiv")
var gallery2=document.querySelector(".gallery2")
var gallery=document.querySelector(".gallery")
var left=document.querySelector(".left")
var right = document.querySelector(".right")
var down =document.querySelector(".down")

f.addEventListener("click",function(){
	gallery.style.display = "none"
	gallery2.style.display = "block";
	down.style.position = "relative";
	down.style.top = "660px"

})
aktiv.addEventListener("click",function(){
	gallery.style.display = "block";
	gallery2.style.display = "none";
	down.style.position = "relative";
	down.style.top = "150px"


})

left.addEventListener("click",function(){
	gallery.style.display = "block";
	gallery2.style.display = "none";
	down.style.position = "relative";
	down.style.top = "150px"
})
right.addEventListener("click",function(){
	gallery.style.display = "none";
	gallery2.style.display = "block";
	down.style.position = "relative";
	down.style.top = "660px"

})

























