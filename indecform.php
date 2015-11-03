<?php
include 'db.php';
//$sql3 = "select * from category where active='1' order by cat_id";
$sql = "CREATE TABLE tollywood (tid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, title VARCHAR(30) NOT NULL,name VARCHAR(30) NOT NULL,director VARCHAR(30) NOT NULL,music VARCHAR(30) NOT NULL,
description LONGTEXT  NOT NULL,img_path VARCHAR(50) NOT NULL,video_path VARCHAR(50) NOT NULL,producer VARCHAR(30) NOT NULL,cast VARCHAR(30) NOT NULL,
screen VARCHAR(30) NOT NULL,story VARCHAR(30) NOT NULL,review VARCHAR(20) NOT NULL,reg_date TIMESTAMP)";
$result = mysql_query($sql);     
if ($result === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: ";
}
echo $result;
?>