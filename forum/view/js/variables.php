<?php

if(isset($_GET['user_id'])){
    $userId = $_GET['user_id'];
    echo "<script>var userId = $userId;</script>";
}

if(isset($_GET['post_id'])){
    $postId = $_GET['post_id'];
    echo "<script>var postId = $postId;</script>";
}

?>