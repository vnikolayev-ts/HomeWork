function changeTextColor() {
    document.getElementById("au1").style.color = "red";
  }
  
  function changeBackgroundColor() {
    var elem = document.getElementById("au2");
    elem.style.backgroundColor = "lightblue";
    
  }
  
  function toggleImage() {
    var img = document.getElementById("au34");
    if (img.style.display === "none") {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }
  
  function increaseSize() {
    var element = document.getElementById("au34");
    var currentWidth = element.clientWidth;
    var currentHeight = element.clientHeight;
    element.style.width = (currentWidth + 10) + "px";
    element.style.height = (currentHeight + 10) + "px";
  }
  
  function decreaseSize() {
    var element = document.getElementById("au34");
    var currentWidth = element.clientWidth;
    var currentHeight = element.clientHeight;
    element.style.width = (currentWidth - 10) + "px";
    element.style.height = (currentHeight - 10) + "px";
  }
  