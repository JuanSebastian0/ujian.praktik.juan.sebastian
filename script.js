function loginVerification() {
    let username =
document.getElementById("username").value;
    let password =
document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.alert("Login Berhasil");
        window.location="pages/cv.html"
    }
    else if (username == "" || password == "") {
        window.alert("Masukkan Email Atau Password");
    }
    else {
        window.alert("Login Gagal");
    }
}

function SignUp (){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}