function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}
function validateForm() {

    var password = document.Form.password.value;
    var email = document.Form.email.value;
    var  emailErr = passwordErr = true;

    if(email == ""){
        printError("emailErr", "please enter your email adderss");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email)==false){
            printError("emailErr", "please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("emailErr","");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1")
            elem.classList.remove("input-2");
        }

    }


    if(password == ""){
        printError("passwordErr", "plaese enter your password");
        var elem = document.getElementById("password");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(regex.test(password)==false){
            printError("passwordErr", "please enter a valid password");
            var elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("passwordErr","");
            emailErr = false;
            var elem = document.getElementById("password");
            elem.classList.add("input-1")
            elem.classList.remove("input-2");
        }

    }
    if((emailErr || passwordErr ) == true) {
        return false;
     } 
 };
