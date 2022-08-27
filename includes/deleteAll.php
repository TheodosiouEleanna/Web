<?php
include "config.inc.php";

if (($_POST['delete'])) {
   if ($conn->connect_error) {
      die("Connection to database failed: " . $conn->connect_error);
   }
   //sql query to delete all pois
   $sql = "DELETE from pois";
   $stmt = mysqli_stmt_init($conn);
   mysqli_stmt_prepare($stmt, $sql);
   mysqli_stmt_execute($stmt);
   mysqli_stmt_close($stmt);
   exit();
}