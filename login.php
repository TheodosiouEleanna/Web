<?php include "refs.php";?>
<div class="container"> 
      <form id="myLogin">
            <div class="form-content">
               <div class="login-form">
                  <!-- Login Form -->
                  <div class="title">Login</div>
                  <br>
                     <div class ='errors'></div>
                     <div class="input-boxes">
                     <div class="input-box">
                        <i class="fas fa-user"></i>
                        <input type="text" name="usernameOremail" id='usernameOrEmail' placeholder="Enter username/email"  />
                     </div>
                     <div class="input-box">
                        <i class="fas fa-envelope"></i>
                        <input type="password" name="password" id='password' placeholder="Enter password"  />
                     </div>
                     <div class="button input-box">
                        <input name="submit" type="submit" placeholder="Submit" />
                     </div>
                     <div class="text">
                        Don't have an account? <a href="signup.php">Sign Up Now</a>
                     </div>
                  </div>
               </div>
            </div>
      </form>
   </div>
   <script type="text/javascript" src = "scripts/login.js"></script>