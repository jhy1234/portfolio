<?php

include('connect.php');

function Register(){
    global $db;
    $email = $_POST['email'];
    $password = $_POST['password'];

    $result = $db->query("INSERT INTO users (email, password) VALUES ('".$email."', '".$password."')");
    if($result){
        echo "Register Success!";
    };
};

function Login(){
    global $db;
    $email = $_POST['email'];
    $password = $_POST['password'];

    $result = $db->query("SELECT * FROM users WHERE email='$email'");
    if($result){
        $allRecords = $result->fetchAll();
        if(count($allRecords) > 0){
            foreach($allRecords as $id=>$row){
                if($password == $row['password']){
                    session_start();
                    $_SESSION['userId'] = $row['id'];
                    echo "Login Success";
                } else {
                    echo "Wrong Password! Try Again";
                };
            };
            
        } else {
            echo "Wrong Email";
        };
    };
};

function UserEdit(){
    global $db;
    session_start();
    $email = $_POST['email'];
    $password = $_POST['password'];
    $displayName = $_POST['displayName'];
    $bio = $_POST['bio'];
    $avatar = $_POST['avatar'];
    $userId = $_SESSION['userId'];
    
    if(!empty($email) && !empty($password)){
        $result = $db->query("UPDATE users SET email='".$email."', password='".$password."', display_name='".$displayName."', bio='".$bio."', avatar='".$avatar."' WHERE id='".$userId."'");
            if($result){
                echo "Profile Updated!";
            };
    }else if(empty($email)){
        echo "Please enter some email";
    }else if(empty($password)){
        echo "Please enter some password";
    };
};

function UserDelete(){
    global $db;
    session_start();
    $userId = $_SESSION['userId'];
    
    $result = $db->query("DELETE FROM users WHERE id='".$userId."'");
        if($result){
            echo "Bye";
            session_destroy();
        } else {
        echo "Don't delete other's account!";
    };
};

function DisplayUsers(){
    global $db;
    $result = $db->query("SELECT * FROM users");
    if($result){
        $allUsers = $result->fetchAll();
        foreach($allUsers as $id=>$row){
            $userId = $row['id'];
            $email = $row['email'];
            $display_name = $row['display_name'];
            $bio = $row['bio'];
            $avatar = $row['avatar'];
            
            echo "<div class='users'>
                        <div><h2>".$email."</h2></div>
                        <div><h2>".$display_name."</h2></div>
                        <div><p>".$bio."</p></div>
                        <div><img src='".$avatar."'></div>
                    </div>";
        };
    };
};

if(isset($_POST['todo'])){
    switch($_POST['todo']){
        case 'register':
            Register();
            break;
        case 'login':
            Login();
            break;
        case 'user_edit':
            UserEdit();
            break;
        case 'delete_user':
            UserDelete();
            break;
        case 'user_display':
            DisplayUsers();
            break;
        case 'user_edit_my':
            UserEditMy();
            break;
        case 'user_delete_my':
            UserDeleteMy();
    };
};
    
?>