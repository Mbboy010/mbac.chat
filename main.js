var dark = document.getElementById("dark");

 dark.onclick = function(){
  document.body.classList.toggle("dark-theme")
  if (document.body.classList.contains("dark-theme")){
    dark.src = "sun.svg";
  }
  else{
    dark.src = "moon.svg";
  }
}
