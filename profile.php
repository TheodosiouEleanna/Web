<?php 
include_once 'header.php'
?>
<head>
   <title>Profile Page</title>
</head>
<body>
   <div class="container">
      <form id='form'>
         <div class="form-content">
            <div class="profile_form">
         <div class="title">Profile Management</div>
         <div id="errors"></div>
         <div class="input-boxes">
            <div  class="input-box">
               <label for="username"> </label>
               <input type="text" name="username" placeholder="New Username..." >
            </div>
            <div class="input-box">
            <label for="password"></label>
            <input type="password" name="oldPassword" placeholder="Enter Old password..." >
            </div>
            <div class="input-box">
               <label for="password"></label>
               <input type="password" name="newPassword" placeholder="Enter New Password..." >
            </div>
            <div class="input-box">
               <label for="password"></label>
               <input type="password" name="newPassword2" placeholder="Confirm New Password..." >
            </div>
            <div class="input-box">
               <button class = "btn" type="submit"  name="sumbit-new">Submit</button>
            </div>
            </div>
         </div>
         </div>
      </form>
   </div>
   <script src="scripts/profileManage.js"></script>
</body>

<?php 
include_once 'footer.php'
?>