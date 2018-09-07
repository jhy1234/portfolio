var email = document.getElementById("email"),
    password = document.getElementById("password"),
    regBut = document.getElementById("register");

regBut.addEventListener("click", ()=>{
    if(email.value != "" && password.value != ""){
        if(email.value.length <= 5 || password.value.length <= 5){
            alert("Too Short!");
        } else {
            var fd = new FormData();
            fd.append("email", email.value);
            fd.append("password", password.value);
            fd.append("todo", "register");

            fetch("../server/users.php", {
                method:'post',
                credentials:'same-origin',
                body:fd
            })
                .then(resp=>resp.text())
                .then(text=>alert(text));
        };
    } else {
        alert("Please Enter Your Email And Password!");
    };
});