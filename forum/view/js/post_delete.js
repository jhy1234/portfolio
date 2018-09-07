var delBut = document.getElementById("deletePost");

delBut.addEventListener("click", ()=>{
    var fd = new FormData();
    fd.append("todo", "post_delete");
    fd.append("postId", postId);

    fetch("../server/posts.php", {
        method:"post",
        credentials:"same-origin",
        body:fd
    })
        .then(resp=>resp.text())
        .then(text=>{
            alert(text);
            window.history.back();
        });
});