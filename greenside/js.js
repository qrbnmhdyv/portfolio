
sumheight1 = $("#sec01").height()+0+"px";
sumheight2 = $("#s002").height()+$("#sec01").height() +40+"px";
sumheight3 = $("#s002").height()+$("#sec01").height()+$("#s003").height()+100+"px";
$(window).ready(function() {
$("#a").click(function(){
    $("body").animate({
      scrollTop:0
      }, 1000); 
    $("#ulnav2").hide()
});

$("#about1,#about2,#btn").click(function(){
    $("body").animate({
      scrollTop:sumheight1
      }, 1000); 
    $("#ulnav2").hide()
});

$("#services1,#services2,#btn2").click(function(){
    $("body").animate({
      scrollTop:sumheight2
      }, 1000); 
    $("#ulnav2").hide()
});

$("#gallery1,#gallery2").click(function(){
    $("body").animate({
      scrollTop:sumheight3
      }, 1000); 
    $("#ulnav2").hide()
});


$("test1").click(function(){
    $("body").animate({
      scrollTop:3000
      }, 1000); 
    $("#ulnav2").hide()
});
});

$(window).on("scroll",function(){
  var count=$(this).scrollTop();
  console.log(count/250)
  $("#nav").css({
    background:"rgba(30, 122, 70,"+count/250+" )"
  })
 
  
})
$(window).on("scroll",function(){
  var count=$(this).scrollTop();
  console.log(count/250)
  console.log($(this).scrollTop())
  $("#ulnav2").css({
    background:"rgba(30, 122, 70,"+count/250+" )"  
  }) 
})
$("#ulnav2").hide()
$(".btns").click(function(){
  event.preventDefault()
  $("#ulnav2").toggle(500);
  
})

$(window).ready(function(){
$(".li1").click(function(){
  $(".care").show(500)
  $(".garden").show(500)
  $(".plantin").show(500)
})
$(".li2").click(function(){
  $(".care").hide(500)
  $(".garden").show(500)
  $(".plantin").show(500)
})
$(".li3").click(function(){
  $(".garden").hide(500)
  $(".plantin").show(500)
   $(".care").show(500)
})
$(".li4").click(function(){
  $(".plantin").hide(500)
  $(".care").show(500)
  $(".garden").show(500)
})


})