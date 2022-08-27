<?php 
include_once 'header.php'
?>
<head>
  <title>covidCase</title>
</head>
<body>
  <div class="container">
      <form accept-charset="utf-8" id='form'>
         <div class="form-content">
            <div class="profile_form">
         <div class="title">Declare Covid Case</div>
         <div id="text">Enter the date you were diagnosed with covid-19:</div>
         <div class="input-boxes">
            <div  class="input-box">
               <input type="date" value="2022-08-27" id="covidDate" name="covidDate">
            </div>
            <div class="input-box">
               <button class = "btn" type="submit"  name="sumbit-new" >Submit</button>
            </div>
            </div>
         </div>
         </div>
      </form>
   </div>
   <script src="scripts/covidCase.js"></script>
</body>
<?php 
include_once 'footer.php'
?>