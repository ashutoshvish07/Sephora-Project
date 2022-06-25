function showme (){
    var x = document.getElementById("cheek");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showme1 (){
    var x = document.getElementById("SKIN");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showme2 (){
    var x = document.getElementById("hairsSub");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showme3 (){
    var x = document.getElementById("brush_tool_Sub");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}




$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 250 ) {
	    $("#outernav").css("display" , "block");
      
	  }
	  else{
		  $("#outernav").css("display" , "none");  	
	  }
  })
})

// function hidestickybar (){
//   if(window.onload.outerWidth<1310){
//     document.getElementById("outernav").style.display="none"
//   }
// }