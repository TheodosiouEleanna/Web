<?php
include "config.inc.php";
session_start();

if($_SERVER["REQUEST_METHOD"] == "GET"){
$userId = $_SESSION['id'];
$data = array();

   echo 'theLastInc';

$sql = "SELECT poi_id, visit.user_id, poi_name, visit_date
FROM visit INNER JOIN covid_case ON visit.user_id = covid_case.user_id;";

 $query = mysqli_query($conn, $sql);
if($query){
     while($row = mysqli_fetch_assoc($query)){
 print_r(json_encode($row));

      array_push($data, array('poiId'=>$row['poi_id'], 'userId'=>$row['user_id'], 'poiName'=>$row['poi_name'], 'visitDate'=>$row['visit_date']));
   }
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
mysqli_close($conn);

}