<?php 
include "config.inc.php";
// if (isset($_POST["q"])){
$day = $_POST["q"];
$ids = $_POST["ids"];

$result_array = array();
if ($conn->connect_error) {
      die("Connection to database failed: " . $conn->connect_error);
}
for($i=0; $i<count($ids); $i++){
/* SQL query to get results from database */
$sql = "SELECT id, zone0_1, zone1_2, zone2_3, zone3_4, zone4_5, zone5_6, zone6_7, zone7_8, zone8_9, zone9_10, zone10_11, zone11_12, zone12_13, zone13_14, zone14_15, zone15_16, zone16_17, zone17_18, zone18_19, zone19_20, zone20_21, zone21_22, zone22_23, zone23_0 FROM ".strtolower($day)." WHERE id = '".$ids[$i]."';";

$stmt = mysqli_stmt_init($conn);
mysqli_stmt_prepare($stmt, $sql);
mysqli_stmt_execute($stmt);
$resultData = mysqli_stmt_get_result($stmt);
//fetching the data as an associated array
$row = mysqli_fetch_assoc($resultData);
mysqli_stmt_close($stmt);
array_push($result_array, $row);
}
/* send a JSON encded array to client */
echo json_encode($result_array);

$conn->close();