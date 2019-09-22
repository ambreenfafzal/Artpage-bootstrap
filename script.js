window.onload = function (){
    showDivs();
}

var slideIndex = 1;
$("#left-button").click(function(n){
 addDivs(-1);
 
});
$("#right-button").click(function(n){
    addDivs(1);
    
   });

function addDivs(n){
    showDivs(slideIndex += n);
}


function showDivs(n) {
   
    var i;
    var x = document.getElementsByClassName("images");
    if (n > x.length) {slideIndex = 1}
    
    if (n < 1) {slideIndex = x.length}
    
    for (i = 0; i < x.length; i++) {
        
      x[i].style.display = "none";  
      x[slideIndex-1].style.display = "block";
     
    }
     
  }





