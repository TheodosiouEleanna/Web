<?php
$SERVER = "localhost";
$DB_USERNAME = "root";
$DB_PASSWORD = "";
$DB_NAME = "covid_19";

$conn = mysqli_connect("$SERVER","$DB_USERNAME", "$DB_PASSWORD", "$DB_NAME");

if(!$conn){
   die("Connection failed: " . mysqli_connect_error());
}