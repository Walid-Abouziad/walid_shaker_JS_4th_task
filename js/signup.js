var signupNameInput = document.getElementById("signupName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPasswordInput = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signupBtn");
var usersList =[];

if(localStorage.getItem("users") !=null){
    usersList = JSON.parse(localStorage.getItem("users"));
}
function signUp(){
    if((validationName() == true   && validationEmail() == true && validationPassword() == true) || (validationEmail() == true && validationName() == true && validationPassword() == true) || (validationPassword() == true && validationEmail() == true && validationName() == true)){
            var user = {
                name: signupNameInput.value ,
                signEmail: signupEmailInput.value ,
                signupPassword: signupPasswordInput.value ,
            }
        }

        if (validationEmailExist() == false) {
            Swal.fire("Email already exist!");
    
        } else {

            usersList.push(user);
    
    
            localStorage.setItem("users",JSON.stringify(usersList));
        
            clearForm();
    
            signupNameInput.classList.remove("is-valid");
            signupEmailInput.classList.remove("is-valid");
            signupPasswordInput.classList.remove("is-valid");
            window.location.assign("./index.html");
        }
        
    }  


function clearForm (){ 
    signupNameInput.value="";
    signupEmailInput.value="";
    signupPasswordInput.value="";
}

function validationName(){
    var massageName = document.getElementById("massageName");
    var regexName = /^[\w]{3}/
    var text = signupName.value;
    if(regexName.test(text)== true){
        signupName.classList.add("is-valid");
        signupName.classList.remove("is-invalid");
        massageName.classList.add("d-none");
        return true;

    }else{
        signupName.classList.add("is-invalid");
        signupName.classList.remove("is-valid");
        massageName.classList.remove("d-none");
        return false;
    }

}

function validationEmail(){
    var massageEmail = document.getElementById("massageEmail");
    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var text = signupEmail.value;
    if(regexEmail.test(text)== true){
        signupEmail.classList.add("is-valid");
        signupEmail.classList.remove("is-invalid");
        massageEmail.classList.add("d-none");
        return true;

    }else{
        signupEmail.classList.add("is-invalid");
        signupEmail.classList.remove("is-valid");
        massageEmail.classList.remove("d-none");
        return false;
    }
}
function validationPassword(){
    var massagePassword = document.getElementById("massagePassword");
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var text = signupPassword.value;
    if(regexPassword.test(text)== true){
        signupPassword.classList.add("is-valid");
        signupPassword.classList.remove("is-invalid");
        massagePassword.classList.add("d-none");
        return true;

    }else{
        signupPassword.classList.add("is-invalid");
        signupPassword.classList.remove("is-valid");
        massagePassword.classList.remove("d-none");
        return false;
    }
}

function validationEmailExist() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].signEmail.toLowerCase() == signupEmailInput.value.toLowerCase()) {
            return false
        }
    }
}
