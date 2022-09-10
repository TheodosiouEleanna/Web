<?php
include "config.inc.php";

$data = array(); 

if($_SERVER["REQUEST_METHOD"] == "POST"){

function searchInit($text)    //search initial text in titles
{
    $reg = "/^".$_POST['q']."/i";    //initial case insensitive searching
    return (bool)@preg_match($reg, $text['name']);
}
// echo "hello wolrd";

    $sql = "SELECT id, name, address, lat, lng, types
FROM pois WHERE types LIKE '%".$_POST['q']."%' OR name LIKE '%".$_POST['q']."%';";

$query = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($query)){
   array_push($data, array('id'=>$row['id'], 'name'=>$row['name'], 'address'=>$row['address'],'loc'=>array('lat'=>$row['lat'], 'lng'=>$row['lng'])));
}

$fdata = array_filter($data, 'searchInit');    //filter data 
$fdata = array_values($fdata);    //reset $fdata indexs

$JSON = json_encode($fdata,true);
// echo $JSON;

if(isset($_POST['callback']) and !empty($_POST['callback']))    //support for JSONP request
    echo $_POST['callback']."($JSON)";
else
    echo $JSON;
}

if($_SERVER["REQUEST_METHOD"] == "GET"){
    $sql = "SELECT id, name, address, lat, lng, types
FROM pois;";

$query = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($query)){
   array_push($data, array('id'=>$row['id'], 'name'=>$row['name'], 'address'=>$row['address'],'loc'=>array('lat'=>$row['lat'], 'lng'=>$row['lng'])));
}
$data = array_values($data);    //reset $fdata indexs

$JSON = json_encode($data,true);
echo $JSON;
}
?>
