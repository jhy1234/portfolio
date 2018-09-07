var title = document.getElementById("title"),
    message = document.getElementById("message"),
    subBut = document.getElementById("submit");

subBut.addEventListener("click", ()=>{
    var fd = new FormData();
    fd.append("title", title.value);
    fd.append("message", message.value);
    fd.append("todo", "post_create");
    
    fetch("../server/posts.php", {
        method:"post",
        credentials:"same-origin",
        body:fd
    })
        .then(resp=>resp.text())
        .then(text=>alert(text));
});
    