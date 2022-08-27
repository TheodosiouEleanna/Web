<?php
include "config.inc.php";

session_start();

if($_SERVER["REQUEST_METHOD"] == "GET") {
    
    $response = array(
    'id'=> $_SESSION['id'],
    'username'=>$_SESSION['username'],
    'role'=>$_SESSION['role']
);

echo json_encode($response);
}


