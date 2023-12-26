
document.getElementById("username").innerHTML = "Welcome "  + sessionStorage.getItem("userName");
function logout(){
    sessionStorage.removeItem('userName')
}