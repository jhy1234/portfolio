<?php
session_start();
include('connect.php');

function CreatePost() {
    global $db;
    $title = $_POST['title'];
    $message = $_POST['message'];
    $userId = $_SESSION['userId'];
    
    $result = $db->query("INSERT INTO posts (title, message, user_id) VALUES ('".$title."', '".$message."', '".$userId."')");
    if($result){
        echo "Post Created";
    }
};

function EditPost(){
    global $db;
    $title = $_POST['title'];
    $message = $_POST['message'];
    $postId = $_POST['postId'];
    $userId = $_SESSION['userId'];
    
    $result = $db->query("UPDATE posts SET title='".$title."', message='".$message."' WHERE id='".$postId."' AND user_id='".$userId."'");
    if($result){
        echo "Edit Success!";
    } else {
        echo "Don't edit other people's post!";
    }
};

function DeletePost(){
    global $db;
    $postId = $_POST['postId'];
    $userId = $_SESSION['userId'];
    
    $result = $db->query("DELETE FROM posts WHERE id='".$postId."' AND user_id='".$userId."'");
    if($result){
        echo "Delete Success";
    } else {
        echo "Don't delete other people's post!";
    }
};

function AllPosts(){
    global $db;
    $result = $db->query("SELECT posts.*, users.avatar
                            FROM posts
                            INNER JOIN users ON posts.user_id = users.id
                            ORDER BY posts.id DESC");

    if($result){
        $allPosts = $result->fetchAll();
        foreach($allPosts as $id=>$row){
            $title = $row['title'];
            $message = $row['message'];
            $userId = $row['user_id'];
            $postId = $row['id'];
            $avatar = $row['avatar'];
            
            if($userId == $_SESSION['userId']){
                echo "<div class='posts'>
                        <div><img src='".$avatar."' ></div>
                        <div><h2>".$title."</h2></div>
                        <div><p>".$message."</p></div>
                        <div><a href='index.php?p=post_edit&post_id=".$postId."'>Edit &#47; Delete</a></div>
                    </div>";
            } else {
                echo "<div class='posts'>
                        <div><img src='".$avatar."' ></div>
                        <div><h2>".$title."</h2></div>
                        <div><p>".$message."</p></div>
                    </div>";
            };
        };
    };
};

if(isset($_POST['todo'])){
    switch($_POST['todo']){
        case 'post_create':
            CreatePost();
            break;
        case 'post_edit':
            EditPost();
            break;
        case 'post_delete':
            DeletePost();
            break;
        case 'post_all':
            AllPosts();
    };
};

?>