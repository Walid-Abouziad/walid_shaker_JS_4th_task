if (sessionStorage.getItem("userName") == null){
    window.location.assign("./index.html");
}else
document.getElementById("username").innerHTML = "Welcome "  + sessionStorage.getItem("userName");
function logout(){
    window.location.assign("./index.html");
    sessionStorage.removeItem('userName')

}