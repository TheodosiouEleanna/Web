<?php
include "config.inc.php";
session_start();

$userId = $_SESSION['id'];
$declarationDate = $_POST['date'];
$result = date('Y-m-d h:i:s', strtotime($declarationDate));

$d = gettype($declarationDate);
$i = gettype($userId);

$sql = "INSERT INTO covid_case (user_id, covid_date) VALUES('".$userId."','".$result."');";
if(mysqli_query($conn, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
mysqli_close($conn);

echo $result;
echo $d;
echo $i;


