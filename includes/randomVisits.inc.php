<?php
include "config.inc.php";
session_start();

$visitsArray = $_POST['visitsArray'];

foreach($visitsArray as $array) {
$sql = "INSERT INTO visit(poi_id ,user_id ,poi_name , lat ,lng ,visit_date, estimate ) VALUES ('".$array["poi_id"]."','".$array["user_id"]."','".$array["poi_name"]."','".$array["lat"]."','".$array["lng"]."','".$array["visit_date"]."','".$array["estimate"]."')";
mysqli_query($conn, $sql);
}

print_r($visitsArray) ; 