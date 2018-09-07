var email = document.getElementById("email"),
    password = document.getElementById("password"),
    loginBut = document.getElementById("login");

loginBut.addEventListener("click", ()=>{
    var fd = new FormData();
    fd.append("email", email.value);
    fd.append("password", password.value);
    fd.append("todo", "login");
    fetch("../server/users.php", {
        method:"post",
        credentials:"same-origin",
        body:fd
    })
        .then(resp=>resp.text())
        .then(text=>{
            alert(text);
            window.location.href="index.php";
        });
});