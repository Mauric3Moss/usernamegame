function start(){
window.location.href = "game.html";
}
function game1(){
  var color = document.getElementById("colorPicked").value;
  const colors = [
    "#060606", "#F90307", "#E9FFEB", "#626360"
  ];
  var rightCol = colors[Math.floor(Math.random() * colors.length)];
  
  document.getElementById("col").style.color = rightCol;
}