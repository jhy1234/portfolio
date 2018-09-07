var email = document.getElementById("email"),
    password = document.getElementById("password"),
    displayName = document.getElementById("displayName"),
    bio = document.getElementById("bio"),
    avatarUrl = document.getElementById("avatar"),
    editUserBut = document.getElementById("editUser"),
    deleteUserBut = document.getElementById("deleteUser");

editUserBut.addEventListener("click", ()=>{
    var fd = new FormData();
    fd.append("email", email.value);
    fd.append("password", password.value);
    fd.append("displayName", displayName.value);
    fd.append("bio", bio.value);
    fd.append("todo", "user_edit");
    
    var selected = document.getElementById("selectAvatar").selectedIndex;
    switch(selected){
        case 0:
            fd.append("avatar", avatarUrl.value);
            break;
        case 1:
            fd.append("avatar", "../view/img/default.ico");
            break;
        case 2:
            fd.append("avatar", "../view/img/default2.png");
            break;
        case 3:
            fd.append("avatar", "../view/img/default3.png");
            break;
    };
    
    fetch("../server/users.php", {
        method:"post",
        credentials:"same-origin",
        body:fd
    })
        .then(resp=>resp.text())
        .then(text=>alert(text));
});

deleteUserBut.addEventListener("click", ()=>{
    var fd = new FormData();
    fd.append("todo", "delete_user");
    
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