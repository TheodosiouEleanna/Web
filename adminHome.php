<?php 
include_once 'header.php';
?>
<head>
   <title>Home Page</title>
</head>
      <section class="index-intro">
         <?php 
            if (isset($_SESSION["id"])){
               echo "<p class='welcome'> Hello there ". $_SESSION["username"]."!</p>" ;
               
            }
            ?>
      </section>
      <div id = "map"></div>
      <script src="scripts/initialmap.js"></script>
<?php 
include_once 'footer.php';
?>