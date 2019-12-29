window.onload = function() {
setTimeout(function() {
  var elements = document.getElementsByClassName("alert");
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}, 5000);
};
