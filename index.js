let mode = "login";

function closeForm(evt){
  if (mode == "login"){
    if (evt.target.className != "login-popup"){
      return;
    }else{
      document.getElementById('login-popup').removeEventListener("click", closeForm);
      document.querySelector(".login-popup").style.display = "none";
    }

  } else if (mode == "signin"){
    if (evt.target.className != "signin-popup"){
      return;
    }else{
      document.getElementById('signin-popup').removeEventListener("click", closeForm);
      document.querySelector(".signin-popup").style.display = "none";
    }
  }
}

function showLogin() {
  mode = "login";

  //Close signin
  if (document.querySelector(".signin-popup").style.display == "flex"){
    document.getElementById('signin-popup').removeEventListener("click", closeForm);
    document.querySelector(".signin-popup").style.display = "none";
  }

  document.querySelector(".login-popup").style.display = "flex";
  document.getElementById('login-popup').addEventListener("click", closeForm);
}

function showSignin() {
  mode = "signin";

  //Close login
  if (document.querySelector(".login-popup").style.display == "flex"){
    document.getElementById('login-popup').removeEventListener("click", closeForm);
    document.querySelector(".login-popup").style.display = "none";
  }

  //Open signin
  document.querySelector(".signin-popup").style.display = "flex";
  document.getElementById('signin-popup').addEventListener("click", closeForm);
}