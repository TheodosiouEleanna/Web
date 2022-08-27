<?php 
   session_start()
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
   <link href="css/index.css" rel="stylesheet" type="text/css">
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="crossorigin=""/>
   <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="crossorigin=""></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
   <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet-search/2.9.8/leaflet-search.min.css"/>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-search/2.9.8/leaflet-search.src.js"> </script>
   <script src="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js"></script>
   <script src="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js"></script>
   
</head>
<body>
   <nav>
      <label class="logo">Covid Maps</label>
      <ul class="nav-links">
         <li><a href="adminHome.php">Home</a></li>
         <li><a  href="maps.php">Maps</a></li>
         <div class='role'></div>
         <li><a href='includes/logout.inc.php'>Log Out</a></li>
      </ul> 
      <label id="icon">
         <i class="fas fa-bars"></i>
      </label>  
   </nav>
   <script src="scripts/navtoggle.js"></script>
</body>
