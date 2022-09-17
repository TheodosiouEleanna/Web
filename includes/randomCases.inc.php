<?php
include "config.inc.php";
session_start();

$data = array();

if($_SERVER["REQUEST_METHOD"] == "GET"){
   $sql = "SELECT poi_id, user_id, poi_name, visit_date FROM visit;";
   $query = mysqli_query($conn, $sql);
if($query){
     while($row = mysqli_fetch_assoc($query)){
      array_push($data, array('poiId'=>$row['poi_id'], 'userId'=>$row['user_id'], 'poiName'=>$row['poi_name'], 'visitDate'=>$row['visit_date']));
   }
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
mysqli_close($conn);
 print_r(json_encode($data));
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
   $casesArray = $_POST["casesArray"];
   foreach($casesArray as $array) {
$sql = "INSERT INTO covid_case (user_id ,covid_date) VALUES ('".$array["user_id"]."','".$array["covid_date"]."')";
mysqli_query($conn, $sql);
}

print_r($casesArray) ; 

}


