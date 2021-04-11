
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
    let retrievePass = false;
   
        //  transition animation from login to retrieve password //
    if(retrievePass == false){
    signIn.style.animations = "swap-form 2s forwards ease";
    signIn.style.display = 'none';
    forgotPass.style.display = 'block'

    retrievePass = true;
    }

    if(retrievePass != true){
        signIn.style.animations = "swap-form 2s forwards ease";
        signIn.style.display = 'none';
        forgotPass.style.display = 'block'

        retrievePass = false;
        }


    return false;
};
