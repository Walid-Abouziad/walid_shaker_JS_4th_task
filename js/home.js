if (sessionStorage.getItem("userName") == null){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "please login at first?",
        icon: "error",
        showCancelButton: false,
        confirmButtonText: "Yes, log in!",
        reverseButtons: true
      }).then((result) => {
          window.location.assign("./index.html");
      });
    // window.location.assign("./index.html");
}else
document.getElementById("username").innerHTML = "Welcome "  + sessionStorage.getItem("userName");
function logout(){
    window.location.assign("./index.html");
    sessionStorage.removeItem('userName')

}