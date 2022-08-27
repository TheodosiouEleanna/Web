<?php
include "config.inc.php";
session_start();

$user_id = $_SESSION['id'];
// $date = date("Y-m-d", strtotime($_POST["date"]));
// echo $user_id;

function checkForCovidCase($conn, $user_id) {
   //? = placeholder
   $sql = "SELECT * FROM covid_case WHERE user_id = ?;";
   //initializes the prepared statement for safety
   $stmt = mysqli_stmt_init($conn);
   //runs the statement inside the database to check for errors
   mysqli_stmt_prepare($stmt, $sql);
      
   
   //binding parameters to placeholders : prepared statement, submiting strings, actual data 
   mysqli_stmt_bind_param($stmt, "d", $user_id);
   mysqli_stmt_execute($stmt); //executing statement
   //grabbing data
   $resultData = mysqli_stmt_get_result($stmt);
   //fetching the data as an associated array
   //if data is returned from the database it is going to return as true
   //also assign the data in order to login
   if($row = mysqli_fetch_assoc($resultData)){
      return $row;
   }
   else {
      $result = FALSE;
   }
   return $result;

   mysqli_stmt_close($stmt);
}

$casesResult = checkForCovidCase($conn, $user_id);
echo json_encode($casesResult);

