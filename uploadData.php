<?php 
include_once 'header.php';
?>
<head>
   <title>adminHome</title>
</head>
   <section class="index-intro">
      <?php 
         if (isset($_SESSION["id"])){
            echo "<p class='welcome'> Hello there ". $_SESSION["username"]."!</p>" ;
         }
         ?>
   </section>
      <input type='file' id='file' class= "upload-button" accept='.json ' onchange="readFile(this)"/>
      <label class= "upload-button" for="file">Choose a File...</label>
      <button id = "upload"> Upload &nbsp; <i class="fas fa-upload"></i> </button>
      <button id = "delete" class="delete-button"> Delete All &nbsp; <i class="fas fa-trash-alt"></i> </button>
      <script src="scripts/dataMan.js"></script>
<?php
include_once 'footer.php';
?>