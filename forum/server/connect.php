<?php

try {
    $db = new PDO("mysql:host=localhost;dbname=huang283_phpForum", "huang283_00", "e9i0vx");
} catch (PDOException $e) {
    echo $e->getMessage();
}

?>