 <?php 
include_once 'header.php'
?>
<head>
  <title>visits Info</title>
</head>
<body>
 <div class='container data-table' style="
  margin-top: 50px">
    <div class="grid">
        <div class="one">
            <table id="data-table">
                <tr>
                    <th class="first-table">Covid Declaration Dates</th>
                </tr>
            </table>
        </div>
        <div class="two">
			<table id="data-table2">
				<tr>
					<th class="first-column">Visited Stores</th>
					<th class="second-column">Date</th>
				</tr>
			</table>
		</div>
        <div class="three">
			<table id="data-table3">
				<tr>
					<th class="first-column">Stores Were There Was Reported Covid Case</th>
					<th class="second-column">Date</th>
				</tr>
			</table>
		</div>
	</div>
<button class='but'>random visits button</button>
</div>
   <script src="scripts/randomVisits.js"></script>
</body>
<?php 
include_once 'footer.php'
?>