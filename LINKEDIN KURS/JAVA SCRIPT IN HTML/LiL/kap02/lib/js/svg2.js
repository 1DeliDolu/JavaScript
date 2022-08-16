"use strict";
window.onload=function() {
    document.getElementsByTagName("circle")[0].onmouseover=function(){
      this.style.fill = "yellow";
      this.style.stroke = "blue";
    };
    document.getElementsByTagName("circle")[0].onmouseout=function(){
      this.style.fill = "green";
      this.style.stroke = "red";
      
    };  
  }
  