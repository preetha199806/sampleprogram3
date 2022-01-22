function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var firstname = document.Form.firstname.value;
    var lastname = document.Form.lastname.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var password = document.Form.password.value;

    // var country = document.Form.country.value;
    var gender = document.Form.gender.value;
    

    var firstnameErr = lastnameErr = emailErr = mobileErr  = genderErr = true;
    

    if(firstname == "") {
        printError("firstnameErr", "Please enter your first name");
        var elem = document.getElementById("firstname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            printError("firstnameErr", "Please enter a valid name");
            var elem = document.getElementById("firstname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("firstnameErr", "");
            firstnameErr = false;
            var elem = document.getElementById("firstname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }


    if(lastname == "") {
        printError("lastnameErr", "Please enter your last name");
        var elem = document.getElementById("lastname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            printError("lastnameErr", "Please enter a valid name");
            var elem = document.getElementById("lastname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("lastnameErr", "");
            lastnameErr = false;
            var elem = document.getElementById("lastname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
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

    // if(country == "Select") {
    //     printError("countryErr", "Please select your country");
    //     var elem = document.getElementById("country");
    //         elem.classList.add("input-4");
    //         elem.classList.remove("input-3");
    // } else {
    //     printError("countryErr", "");
    //     countryErr = false;
    //     var elem = document.getElementById("country");
    //         elem.classList.add("input-3");
    //         elem.classList.remove("input-4");
    // }
    

    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    
    
    if((firstnameErr || lastnameErr || emailErr || mobileErr || passwordErr || genderErr) == true) {
       return false;
    } 
};

//sign in form
function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm2() {

    var email1 = document.Form2.email1.value;
    
    var password1 = document.Form2.password1.value;
    

    var email1Err = password1Err  = true;
    

    if(email1 == "") {
        printError("email1Err", "Please enter your email id");
        var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(email1) === false) {
            printError("email1Err", "Please enter a valid email id");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("email1Err", "");
            email1Err = false;
            var elem = document.getElementById("email1");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
        if(password1 == "") {
            printError("password1Err", "Please enter your password");
            var elem = document.getElementById("password1");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
        } else {
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(password1) === false) {
                printError("password1Err", "Please enter a valid 8 strength password");
                var elem = document.getElementById("password1");
                elem.classList.add("input-2");
                elem.classList.remove("input-1");
            } else {
                printError("password1Err", "");
                password1Err = false;
                var elem = document.getElementById("password1");
                elem.classList.add("input-1");
                elem.classList.remove("input-2");
    
                
            }
            if((email1Err || password1Err ) == true) {
                return false;
             }}}}
