<?php
include "config.inc.php";

$data = array(); 

if($_SERVER["REQUEST_METHOD"] == "GET"){
   $sql = "SELECT id FROM users ;";
   $query = mysqli_query($conn, $sql);

   while($row = mysqli_fetch_assoc($query)){
      array_push($data, array('id'=>$row['id']));
   }
 print_r(json_encode($data));
}