<?php
session_start();
include "config.inc.php";
include "functions.inc.php";

$response = array(
    'status'=> 1,
    'message'=>'Form sumbission Failed'
);

//post ajax
if(isset($_SESSION['id'])){

  $username = $_POST['username'];
  $oldPassword = $_POST['oldPassword'];
  $newPassword = $_POST['newPassword'];
  $newPassword2 =  $_POST['newPassword2'];
  $id = $_SESSION['id'];
  // echo $id;

  //user credentials from db
  $sql = "SELECT id, username, password FROM users WHERE id = '$id'";

  $test = mysqli_query($conn,$sql); 
  //
  if(mysqli_num_rows($test) > 0){
    while($row = mysqli_fetch_assoc($test)){
      $response['message']="No errors";
      $user_pass = $row['password'];
      $user_name = $row['username'];
      $user_id = $row['id'];
      // echo $user_pass;
      // echo $user_name;
      // echo $user_id;
    }
  }

if(emptyInputSignup($username, $oldPassword, $newPassword, $newPassword2) !== FALSE){    
    $response['message']="Fill in all fields!";
   }
elseif(invalidUsername($username) !== FALSE){
      //check if username consists of valid characters a-z A-Z 0-9
    $response['message']="Choose a valid username!";
    }
elseif(passwordMatch($newPassword, $newPassword2) !== FALSE){
      //confirm matching passwords
    $response['message']="Passwords don't match!";
   }
elseif(invalidPwd($newPassword) !== FALSE || invalidPwd($newPassword2)!== FALSE){
    $response['message']="Try another password! Minimum 8 chars, 1 capital, 1 digit, 1 special character.";
   }
else if($oldPassword == $newPassword){
    $response['message']="New password cannot be old password!";
}
else {
  if(password_verify($oldPassword, $user_pass)){
          $pass = password_hash($newPassword, PASSWORD_DEFAULT);
          mysqli_query($conn,"UPDATE users SET username = '$username', password ='$pass' WHERE id = '$id'");
          $response['message']="Successfully changed";
          $response['status'] = 0;
          }
  else{
      $response['message'] = "Old Password is wrong!";
    }
}
}
echo json_encode($response);
