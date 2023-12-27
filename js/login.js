


function login(){
    var loginEmail =signinEmailInput.value;
    var loginPassword =signinPasswordInput.value;
    if(localStorage.getItem("users") !=null){
        usersList = JSON.parse(localStorage.getItem("users"));
    }
    for( var i=0 ; i<usersList.length  ; i++){
        if(usersList[i].signEmail.toLowerCase() == loginEmail.toLowerCase() && usersList[i].signupPassword == loginPassword){
            sessionStorage.setItem("userName", usersList[i].name);

            window.location.assign("./home.html");
    }
    Swal.fire("User is not exist");  
}

       
}     
