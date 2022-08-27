<?php
include "config.inc.php";
include "functions.inc.php";

session_start();

$response = array(
    'status'=> 1,
    'message'=>'Form sumbission Failed'
);

if(isset($_POST['username']) && isset($_POST['email']) &&isset($_POST['password']) &&isset($_POST['cpassword']) &&($_SERVER["REQUEST_METHOD"] == "POST")){

    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];
    
    if(invalidUsername($username) !== FALSE){
      //check if username consists of valid characters a-z A-Z 0-9
        $response['message']="Choose a valid username!";
    }
    else if(invalidEmail($email) !== FALSE){
        //check if email is in the right formation
        $response['message']="Choose a valid email!";
    }
   
   else if(invalidPwd($password) !== FALSE){
        $response['message']="Try another password! Minimum 8 chars, 1 capital, 1 digit, 1 special character.";
   }
   else if(passwordMatch($password, $cpassword) !== FALSE){
      //confirm matching passwords
      $response['message']="Passwords don't match!";
   }
   else if(userExists($conn, $username, $email) !== FALSE){
      //checking if username or email already exists
      $response['message']="Username already taken!";
   }
   else{
        createUser($conn, $username, $email, $password);
        $response['message'] ="Success!";
        $response['status'] = 0;
   }
      
}
else{
   echo json_encode($response); 
}

echo json_encode($response);


