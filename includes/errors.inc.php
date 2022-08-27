<?php
if (isset($_GET["error"])){
   if($_GET["error"] == "emptyinput"){
      echo "<p class='error'> Fill in all fields!</p>";
   }
   else if ($_GET["error"] == "invalidUsername"){
      echo "<p class='error'> Choose a valid username!</p>";
   }
   else if ($_GET["error"] == "invalidEmail"){
      echo "<p class='error'> Choose a valid email!</p>";
   }
   else if ($_GET["error"] == "invalidPassword"){
      echo "<p class='error'> Try another password! Minimum 8 chars, 1 capital, 1 digit, 1 special character.</p>";
   }
   else if ($_GET["error"] == "passwordsUnmached"){
      echo "<p class='error'> Passwords don't match!</p>";
   }
   else if ($_GET["error"] == "usernameTaken"){
      echo "<p class='error'> Username already taken!</p>";
   }
   else if ($_GET["error"] == "stmtFailed"){
      echo "<p class='error'> Something went wrong! Please try again!</p>";
   }
   else if ($_GET["error"] == "wrongUserlogin"){
      echo "<p class='error'> Wrong username! </p>";
   }
   else if ($_GET["error"] == "wrongPasslogin"){
      echo "<p class='error'> Wrong password! </p>";
   }
}

