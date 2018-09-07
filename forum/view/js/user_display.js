var disaply = document.getElementById("display");

var fd = new FormData();
    fd.append("todo", "user_display");

fetch("../server/users.php", {
    method:"post",
    credentials:"same-origin",
    body:fd
})
    .then(resp=>resp.text())
    .then(text=>display.innerHTML += text);