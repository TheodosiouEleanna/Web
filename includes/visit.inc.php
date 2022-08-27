<?php
include "config.inc.php";

session_start();
if(isset($_POST['json'])){
	$user_id = $_SESSION['id'];
$json = $_POST['json'];
$poi_id = $json['poi_id'];
echo $poi_id;
$name = $json['poi_name'];
echo $name;
$date = $json['visit_date'];
$lat = $json['lat'];
$lng = $json['lng'];
$estimate = $json['est'];


	$sql = "INSERT INTO visit(poi_id ,user_id ,poi_name , lat ,lng ,visit_date , estimate ) VALUES ('".$poi_id."','".$user_id."','".$name."','".$lat."','".$lng."','".$date."','".$estimate."')";
}

if (mysqli_query($conn, $sql)) {
		echo "Visit registerd successfully";
	} else {
		echo mysqli_error($conn);
	}
 
echo $user_id;
print_r($json)  ;