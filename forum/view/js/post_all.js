var disaply = document.getElementById("display");

var fd = new FormData();
    fd.append("todo", "post_all");

fetch("../server/posts.php", {
    method:"post",
    credentials:"same-origin",
    body:fd
})
    .then(resp=>resp.text())
    .then(text=>display.innerHTML = text);