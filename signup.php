<?php include "refs.php";?>
<div class="container">
      <form id="myForm">
         <div class="form-content">
            <div class="signup-form">
               <div class="title">Signup</div>
               <br>
               <div class ='errors'></div>
                  <div class="input-boxes">
                     <div class="input-box">
                        <i class="fas fa-envelope"></i>
                           <input type="text" name="username"  placeholder="Enter username"  />
                     </div>
                     <div class="input-box">
                        <i class="fas fa-user"></i>
                            <input type="text" name="email" placeholder="Enter email" />
                     </div>
                     <div class="input-box">
                        <i class="fas fa-envelope"></i>
                            <input type="password" name="password" placeholder="Enter password" />
                     </div>
                     <div class="input-box">
                        <i class="fas fa-envelope"></i>
                            <input type="password" name="cpassword" placeholder="Confirm password" />
                     </div>
                     <div class="button input-box">
                        <input type="submit" name="submit"  placeholder="Submit" />
                     </div>
                     <div class="text">
                        <p>
                           Already have an account?
                           <a href="login.php">Sign in</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </form>
      </div>
<script type="text/javascript" src = "scripts/signUp.js"></script>
<?php 
include_once 'footer.php';
?>