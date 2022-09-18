<?php
include "config.inc.php";
session_start();

if($_SERVER["REQUEST_METHOD"] == "GET"){
   $data = array();
   $sql = "SELECT poi_id, v.user_id, poi_name, visit_date, c.covid_date FROM visit as v INNER JOIN covid_case as c ON v.user_id = c.user_id AND v.visit_date >= c.covid_date;";

   $stmt = mysqli_stmt_init($conn);
   mysqli_stmt_prepare($stmt, $sql);
   mysqli_stmt_execute($stmt);
   $resultData = mysqli_stmt_get_result($stmt);
   
   while($row = mysqli_fetch_assoc($resultData)){
      array_push($data, array('poiId'=>$row['poi_id'], 'userId'=>$row['user_id'], 'poiName'=>$row['poi_name'], 'visitDate'=>$row['visit_date'], 'covidDate'=>$row['covid_date']));
   }
   mysqli_stmt_close($stmt);
   print_r(json_encode($data)) ;
}
