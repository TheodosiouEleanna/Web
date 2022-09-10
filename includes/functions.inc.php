<?php

function emptyInputSignup($username, $email, $password, $cpassword){
   $result;
   if (empty($username) || empty($email) || empty($password) || empty($cpassword)) {
      $result = TRUE;
   }
   else {
      $result = FALSE;
   }
   return $result;
}

function invalidUsername($username){
   $result;
   //The preg_match() function returns whether a match was found in a string.
   //testing if the username consists of certain characters
   if (!preg_match("/^[a-zA-Z0-9]+$/", $username)){ //matching with the username
      $result = TRUE;
   }
   else{
      $result = FALSE;
   }
   return $result;
}

function invalidPwd($password){
   $result;
   if (!preg_match("/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/",$password))  {
      $result = TRUE;
   }
   else{
      $result = FALSE;
   }
   return $result;
}

function invalidEmail($email){
   $result;
   //The filter_var() function filters a variable with the specified filter.
   // FILTER_VALIDATE_EMAIL to validate email
   if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
      $result = TRUE;
   }
   else{
      $result = FALSE;
   }
   return $result;
}

function passwordMatch($password, $cpassword){
   $result;
   if ($password !== $cpassword){
      $result = true;
   }
   else {
      $result = FALSE;
   }
   return $result;
}

function userExists($conn, $username, $email) {
   //? = placeholder
   $sql = "SELECT * FROM users WHERE username = ? OR email = ?;";
   //initializes the prepared statement for safety
   $stmt = mysqli_stmt_init($conn);
   //runs the statement inside the database to check for errors
   mysqli_stmt_prepare($stmt, $sql);
      
   
   //binding parameters to placeholders : prepared statement, submiting strings, actual data 
   mysqli_stmt_bind_param($stmt, "ss", $username, $email);
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

function createUser($conn, $username, $email, $password) {
   //? = placeholder
   $sql = "INSERT INTO users (username, email, password, role) VALUES(?,?,?,0);";
   //initializes the prepared statement for safety
   $stmt = mysqli_stmt_init($conn);
   //runs the statement inside the database to check for errors
   mysqli_stmt_prepare($stmt, $sql);
      
   
   //latest form of default hashing algorithm
   $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
   //binding parameters to placeholders: prepared statement, submiting strings, actual data 
   mysqli_stmt_bind_param($stmt, "sss", $username, $email,  $hashedPassword);
   mysqli_stmt_execute($stmt); //executing statement
   mysqli_stmt_close($stmt);
}

function emptyInputLogin($usernameOremail, $password){
   $result;
   if (empty($usernameOremail) || empty($password)) {
      $result = TRUE;
   }
   else {
      $result = FALSE;
   }
   return $result;
}

function loginUser($conn, $username, $password){
   //fetched data from the data base
   //returns associated array with key(columns) and values
   //passing $username so that username or email is true from database
   $userExists = userExists($conn, $username, $username);

   //error handling, when user does not exist
   if($userExists == FALSE) {
      return FALSE;
   }
   else{
      //referening the specified column of the associated array returned from the userExists function which is the password (db)
      $passwordHashed = $userExists["password"];
      $checkPassword = password_verify($password, $passwordHashed); //verify password and hashed_password ,return true or false

      if ($checkPassword == FALSE){
        return FALSE;
      }
      else if ($checkPassword == TRUE){
         //starting session so user data is saved in the website
        
         return $userExists;

      }
   }
}