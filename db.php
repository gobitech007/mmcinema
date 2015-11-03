<?php
//define('SQL_USER', 'jathudig_wnews');
//define('SQL_PASS', 'wnews123');
//define('SQL_DB', 'jathudig_wnews');
define('SQL_USER', 'root');
define('SQL_PASS', '');
define('SQL_DB', 'mmc');
global $conn;
$conn = mysql_connect('localhost', SQL_USER, SQL_PASS);
if(!$conn) :
die('Could not connect: ' . mysql_error());
endif;
$db = mysql_select_db(SQL_DB, $conn);
if(!$db) :
die ('Can\'t connect to database : ' . mysql_error());
endif;
        
?>