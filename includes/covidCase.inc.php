<?php
include "config.inc.php";
session_start();

$user_id = $_SESSION['id'];
// $date = date("Y-m-d", strtotime($_POST["date"]));
$date = $_POST['date'];
$current_date = $_POST['current_date'];
// echo $user_id;
echo $date;

