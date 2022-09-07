function showLogin(){
    document.querySelector(".login-popup").style.display = "flex";
}

document.addEventListener("click", function(evt) {
    let inside = document.getElementById('login-popup-content'),
      target = evt.target,
      container = document.getElementById('container');
    do {
        if(target == container){
            return;
        }

        if(target == inside) {
            // This is a click inside
            return;
      }
      target = target.parentNode;
    } while (target);
    // This is a click outside.
    document.querySelector(".login-popup").style.display = "none";
  });