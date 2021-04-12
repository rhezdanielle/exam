
function forgot_password(){
    var sun = document.getElementById('sun');
    var sky = document.getElementById('clouds');
    var forgotPass = document.getElementById('forgot-password-form');
    var signIn = document.getElementById("login-form");
    var bg = document.documentElement;

    // animates background to night time
    sky.style.backgroundImage = "url('src/img/stars.png')";
    sky.style.filter = "none";
    bg.style.animation = "night-sky 2s forwards ease";
    sun.style.animation = "moon 2s forwards ease";
   
        //  transition animation from login to retrieve password //
 
    signIn.style.animations = "swap-form 2s forwards ease";
    signIn.style.display = 'none';
    forgotPass.style.display = 'block'

    return false;
};


function sign_in(){
    var sun = document.getElementById('sun');
    var sky = document.getElementById('clouds');
    var forgotPass = document.getElementById('forgot-password-form');
    var signIn = document.getElementById("login-form");
    var bg = document.documentElement;

    signIn.style.animations = "swap-form 2s forwards ease";
    signIn.style.display = 'none';
    forgotPass.style.display = 'block'

    retrievePass = false;
}