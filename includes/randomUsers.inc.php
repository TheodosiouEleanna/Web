<?php
include "config.inc.php";
session_start();

$usersArray = $_POST['usersArray'];

foreach($usersArray as $array) {
$hashedPassword = password_hash($array["password"], PASSWORD_DEFAULT);
$sql = "INSERT INTO users(username, password, email, role) VALUES ('".$array["username"]."','".$hashedPassword."','".$array["email"]."','".$array["role"]."')";
mysqli_query($conn, $sql);
}

print_r($usersArray) ; 