
function forgot_password(){
    var sun = document.getElementById('sun');
    var sky = document.getElementById('clouds');
    var forgotPass = document.getElementById('forgot-password-form');
    var signIn = document.getElementById("login-form");
    var bg = document.documentElement;

    // animates background to night time
    sky.style.backgroundImage = "url('src/img/stars.png')";
    bg.style.animation = "night-sky 2s forwards ease";
    sun.style.animation = "moon 2s forwards ease";
   
       
    // swaps to retrieve password
    signIn.style.animations = "swap-form 2s forwards ease";
    signIn.style.display = 'none';
    forgotPass.style.display = 'block'

    return false;
};


function sign_in(){    // returns to sign in page
    var sun = document.getElementById('sun');
    var sky = document.getElementById('clouds');
    var forgotPass = document.getElementById('forgot-password-form');
    var signIn = document.getElementById("login-form");
    var bg = document.documentElement;

    // animates background to day time
    sky.style.backgroundImage = "url('src/img/clouds.png')";
    bg.style.animation = "night-sky 1s reverse ease";
    sun.style.animation = "day 2s forwards ease";

    forgotPass.style.animations = "swap-form 2s forwards ease";
    forgotPass.style.display = 'none';
    signIn.style.display = 'block';
}