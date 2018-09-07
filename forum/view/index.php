<?php
session_start();
include('header.php');
include('partials/menu.html');

if(isset($_SESSION['userId'])){
    
    if(isset($_GET['p'])){
        switch($_GET['p']){
            case 'user_edit':
                include('js/variables.php');
                include('partials/user_edit.html');
                break;
            case 'user_display':
                include('partials/user_display.html');
                break;
            case 'post_create':
                include('partials/post_create.html');
                break;
            case 'post_mine':
                include('partials/post_mine.html');
                break;
            case 'post_edit':
                include('js/variables.php');
                include('partials/post_edit.html');
                break;
            case 'post_all':
                include('partials/post_all.html');
        }
    }
    
} else if(isset($_GET['p'])) {
    switch($_GET['p']){
        case 'login':
            include('partials/login.html');
            break;
        default:
            include('partials/register.html');
    }
} else {
    include('partials/register.html');
};

include('footer.php');

?>