<?php
include "config.inc.php";

$data = $_POST['q'];
$data = json_decode($_POST['q'],true); //object to associative array

// $json = file_get_contents('starting_pois.json');
// $data = json_decode($json, true);

print_r($data);

// $array = [];

foreach($data as $array) {
$sql = "INSERT INTO pois(id, name, address, lat, lng, rating, n_rating, types) VALUES ('".$array["id"]."','".str_replace("'","",$array["name"])."','".$array["address"]."','".$array["coordinates"]["lat"]."','".$array["coordinates"]["lng"]."','".$array["rating"]."','".$array["rating_n"]."','".implode(" ",$array["types"])."')";
mysqli_query($conn, $sql);
}

foreach($data as $x ){
   //146 times
      foreach($x["populartimes"] as $elem)  {
         //146x2
      // echo( $elem['name']. " : " );
         if($elem['name'] == "Monday"){
            $sql = "INSERT INTO monday VALUES ('".$x["id"]."'";
            foreach($elem['data'] as $p => $value ) {
               $sql = $sql . ",'".$value."'";
            }
            $sql = $sql . ");";
            mysqli_query($conn, $sql);
         }
         if($elem['name'] == "Tuesday"){
            $sql = "INSERT INTO tuesday VALUES ('".$x["id"]."'";
            foreach($elem['data'] as $p => $value ) {
               $sql = $sql . ",'".$value."'";
            }
               $sql = $sql . ");";
               mysqli_query($conn, $sql);
            }
            if($elem['name'] == "Wednesday"){
               
               $sql = "INSERT INTO wednesday VALUES ('".$x["id"]."'";
               foreach($elem['data'] as $p => $value ) {
                  $sql = $sql . ",'".$value."'";
               }
               $sql = $sql . ");";
               mysqli_query($conn, $sql);
            }
            if($elem['name'] == "Thursday"){
               // echo count($elem['data']);
               $sql = "INSERT INTO thursday VALUES ('".$x["id"]."'";
               foreach($elem['data'] as $p => $value ) {
                  $sql = $sql . ",'".$value."'";
               }
               $sql = $sql . ");";
               mysqli_query($conn, $sql);
            }
            if($elem['name'] == "Friday"){
               // echo count($elem['data']);
               $sql = "INSERT INTO friday VALUES ('".$x["id"]."'";
               foreach($elem['data'] as $p => $value ) {
                  $sql = $sql . ",'".$value."'";
               }
               $sql = $sql . ");";
               mysqli_query($conn, $sql);
            }
            if($elem['name'] == "Saturday"){
               // echo count($elem['data']);
               $sql = "INSERT INTO saturday VALUES ('".$x["id"]."'";
               foreach($elem['data'] as $p => $value ) {
                  $sql = $sql . ",'".$value."'";
               }
               $sql = $sql . ");";
               mysqli_query($conn, $sql);
            }
            if($elem['name'] == "Sunday"){
               // echo count($elem['data']);
               $sql = "INSERT INTO sunday VALUES ('".$x["id"]."'";
               foreach($elem['data'] as $p => $value ) {
                  $sql = $sql . ",'".$value."'";
               }
               $sql = $sql . ");";
               mysqli_query($conn, $sql);
            }
         }
      }
   echo "data inserted!";
?>