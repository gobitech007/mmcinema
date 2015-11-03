<?php
include 'db.php';
include 'create_thumbs.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>MM</title>
    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/agency.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>    
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body id="page-top" class="index"  ng-app="myhome">
	<header id="header"></header>
	<section class="paddIngZero" style="margin-top:80px">
        <div class="container">
		<h1 class="text-success bg-sucess well well-sm text-center">Kollywood</h1>		
		<form id="kollywood" action="" method="post" enctype="multipart/form-data">
			<div id="suc" class="alert alert-success hidden"></div>
			<div class="col-lg-6 col-md-6">
		    <div class="form-group">
                <label for="name" class="h4">Title</label>
                <input type="text" name="title" class="form-control" id="title" placeholder="Enter title" required>
            </div>
			<div class="form-group">
                <label for="name" class="h4">Movie Name</label>
                <input type="text" name="name" class="form-control" id="name" placeholder="Enter movie name" required>
            </div>
			<div class="form-group">
                <label for="name" class="h4">Director</label>
                <input type="text" name="director" class="form-control" id="director" placeholder="Enter director" required>
            </div>
			<div class="form-group">
                <label for="name" class="h4">Music</label>
                <input type="text" name="music" class="form-control" id="music" placeholder="Enter musicier name" required>
            </div>
			<div class="form-group">
				<label for="message" class="h4 ">Message</label>
				<textarea name="message" id="message" class="form-control" rows="10" placeholder="Enter your message" required></textarea>
			</div>
			</div>
			<div class="col-lg-5 col-md-5">
			<div class="form-group">
				<label for="message" class="h4 ">Image</label>
				<input type="file" name="image" id="image" required/>
			</div>
			<div class="checkbox">
			  <label><input type="checkbox" value="">check if you want to add youtube url</label>
			</div>
			<div class="form-group">
				<label for="message" class="h4 ">Video</label>
				<input type="text" name="video" id="video" class="form-control" placeholder="Enter youtube url"/>
			</div>
			<div class="form-group">
                <label for="name" class="h4">Production</label>
                <input type="text" name="producer" class="form-control" id="producer" placeholder="Enter production" required>
            </div>
			<div class="form-group">
                <label for="name" class="h4">Cast</label>
                <input type="text" name="cast" class="form-control" id="cast" placeholder="Enter cast" required>
            </div>
			<div class="form-group">
                <label for="name" class="h4">Screenplay </label>
                <input type="text" name="screen" class="form-control" id="screen" placeholder="Enter screenplay" required>
            </div>
			<div class="form-group">
                <label for="name" class="h4">Story</label>
                <input type="text" name="story" class="form-control" id="story" placeholder="Enter story writter" required>
            </div>
			<div class="form-group">
                <label for="name" class="h4">Review Number</label>
                <input type="text" name="review" class="form-control" id="review" placeholder="Enter review" >
            </div>
			<input type="submit" name="submitform" id="form-submit" class="btn btn-success btn-lg pull-right " value="Submit">
			<div id="msgSubmit" class="h3 text-center hidden">Message Submitted!</div>
			</div>
		</form>
		</div>
	</section>
	<footer></footer>    
<script src="js/jquery.js"></script> 
<script src="js/agency.js"></script>
<script src="js/angular.min.js"></script>
<script src="js/common.js"></script>
<script>	
	$(function(){
		$('header').load('headeradmin.html');		
		$('footer').load('footer.html');	
		//alert($('.alert').hasClass('sucfal'));
			if($('.alert').hasClass('success')){
				$('.alert').removeClass('hidden').fadeOut(4000);
			}else if($('.alert').hasClass('warning')){
				$('.alert').removeClass('hidden').addClass('alert-warning').fadeOut(4000);
			}
			$('#video').parent('div').hide();
		$('.checkbox input').click(function(){
			if($(this).is(':checked')){
				$('#video').parent('div').show();
			}else{
				$('#video').parent('div').hide();
			}
		});
	});
</script>
<?php
//print_r($_POST);
if(isset($_POST['submitform'])){	
	
	$target_dir = "uploads/kw/original/";
	$target_file = $target_dir . basename($_FILES["image"]["name"]);
	$uploadOk = 1;
	$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);   

	$check = getimagesize($_FILES["image"]["tmp_name"]);
    if($check !== false) {
        //echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        //echo "File is not an image.";
        $uploadOk = 0;
    }
	// Allow certain file formats
	if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
		//echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
		$uploadOk = 0;
	}
	// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    //echo "Sorry, your file was not uploaded.";
	echo '';
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        //echo "The file ". basename( $_FILES["image"]["name"]). " has been uploaded.";
		echo '';
		$imagename = basename( $_FILES["image"]["name"]);
		createThumbs("uploads/kw/original/","uploads/hw/thumb/",300,'');
		createThumbs("uploads/kw/original/","uploads/hw/thumb_2/",200,'');
		createThumbs("uploads/kw/original/","uploads/hw/thumb_3/",170,'');
		createThumbs("uploads/kw/original/","uploads/hw/thumb_4/",45,'');
    } else {
        //echo "Sorry, there was an error uploading your file.";
	  echo '';
    }
}

//Video PATHINFO_EXTENSION
$videoname='';
/*$allowedExts = array("jpg", "jpeg", "gif", "png", "mp3", "mp4", "wma");
$extension = pathinfo($_FILES['video']['name'], PATHINFO_EXTENSION);
//print_r($_FILES["video"]["type"]);
if ((($_FILES["video"]["type"] == "video/mp4")
|| ($_FILES["video"]["type"] == "audio/mp3")
|| ($_FILES["video"]["type"] == "video/3gpp")
|| ($_FILES["video"]["type"] == "video/wma")
|| ($_FILES["video"]["type"] == "audio/wma")
|| ($_FILES["video"]["type"] == "image/pjpeg")
|| ($_FILES["video"]["type"] == "image/gif")
|| ($_FILES["video"]["type"] == "image/jpeg"))|| ($_FILES["video"]["type"] == ""))
  {
  if ($_FILES["video"]["error"] > 0)
    {
    //echo "Return Code: " . $_FILES["video"]["error"] . "<br />";
	echo '';
    }
  else
    {
//    echo "Upload: " . $_FILES["video"]["name"] . "<br />";
  //  echo "Type: " . $_FILES["video"]["type"] . "<br />";
   // echo "Size: " . ($_FILES["video"]["size"] / 1024) . " Kb<br />";
    //echo "Temp file: " . $_FILES["video"]["tmp_name"] . "<br />";

    if (file_exists("uploads/kw/video/" . $_FILES["video"]["name"]))
      {
      //echo $_FILES["video"]["name"] . " already exists. ";
	  echo '';
      }
    else
      {
      move_uploaded_file($_FILES["video"]["tmp_name"],
      "uploads/kw/video/" . $_FILES["video"]["name"]);
	  $videoname = $_FILES["video"]["name"];
      //echo "Stored in: " . "uploads/hw/video/" . $_FILES["video"]["name"];
	  echo '';
      }
    }
  }
else
  {
  echo "Invalid file";
  }*/
	$title = $_POST['title'];
	$name = $_POST['name'];
	$message = $_POST['message'];
	$review = $_POST['review'];
	$director = $_POST['director'];
	$music = $_POST['music'];
	$producer = $_POST['producer'];
	$cast = $_POST['cast'];
	$screen = $_POST['screen'];
	$story = $_POST['story'];
	$videoname= ($_POST['video']=='')?'':$_POST['video'];
	$sql = "INSERT INTO hollywood (title, name, director,music,description,img_path,video_path,producer,cast,screen,story,review)
VALUES ('".$title."','".$name."','".$director."','".$music."','".$message."','".$imagename."','".$videoname."','".$producer."','".$cast."','".$screen."','".$story."','".$review."')";
$result = mysql_query($sql);     
//print_r($result);
if ($result === TRUE) {
    $res_val= "<strong>Success!</strong> Inserted successfully";
	echo '<script>document.getElementById("suc").className="alert alert-success success";</script>';
} else {
    $res_val= "<strong>Failure!</strong> Error inserting value";
	echo '<script>document.getElementById("suc").className="alert alert-success warning";</script>';
}
	echo '<script>document.getElementById("suc").innerHTML="'.$res_val.'";</script>';
}
?>
</body>
</html>