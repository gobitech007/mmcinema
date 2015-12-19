<?php 
include 'db.php';
$q = $_REQUEST["q"];
if($q=="kw"){
	kollywood();
}else if($q=="bw"){
	bollywood();
}else if($q=="tw"){
	tollywood();
}else if($q=="dt"){
	//echo ;
	//kollywood();
	det($_REQUEST['id'],$_REQUEST['ty']);
//	detailrelated($_REQUEST['id'],$_REQUEST['ty']);
}else if($q=="video"){
		videotrialer($_REQUEST['ty']);
}else if($q=="allt"){
	alltrailer();
}else if($q=="rew"){
	reviewall();
}
function kollywood(){	
	$inf = array();
	$check = mysql_query("SELECT * FROM hollywood order by hid desc") or die(mysql_error());	
	//$arr = mysql_fetch_array($check);
        while ($info = mysql_fetch_assoc($check)) {					
			//array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			array_push($inf,$info);
		}
		
		if(sizeof($inf)<=0){
				$result['result'] ="Failure";
				$result['message'] ="No record";
				$result['data']= '';
		}else{
				$result['result'] ="Success";
				$result['message'] ="Successfully get the kollywood record";
				$result['data']= $inf;
				$result['path']='kw';
		}
		echo json_encode($result);
}
function bollywood(){
	$inf = array();
	$check = mysql_query("SELECT * FROM bollywood order by bid desc") or die(mysql_error());	
	//$arr = mysql_fetch_array($check);
        while ($info = mysql_fetch_assoc($check)) {					
			//array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			array_push($inf,$info);
		}
		
		if(sizeof($inf)<=0){
				$result['result'] ="Failure";
				$result['message'] ="No record";
				$result['data']= '';
		}else{
				$result['result'] ="Success";
				$result['message'] ="Successfully get the bollywood record";
				$result['data']= $inf;
				$result['path']='bw';
		}
		echo json_encode($result);
}
function tollywood(){
	$inf = array();
	$check = mysql_query("SELECT * FROM tollywood order by tid desc") or die(mysql_error());	
	//$arr = mysql_fetch_array($check);
        while ($info = mysql_fetch_assoc($check)) {					
			//array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			array_push($inf,$info);
		}
		
		if(sizeof($inf)<=0){
				$result['result'] ="Failure";
				$result['message'] ="No record";
				$result['data']= '';
		}else{
				$result['result'] ="Success";
				$result['message'] ="Successfully get the tollywood record";
				$result['data']= $inf;
				$result['path']='tw';
		}
		echo json_encode($result);
}


function det($id,$ty){
	if($ty=="kw"){
		$typ = 'hollywood';
		$tid = 'hid';
	}else if($ty=="bw"){
		$typ = 'bollywood';
		$tid = 'bid';
	}else if($ty=="tw"){
		$typ = "tollywood";
		$tid = 'tid';
	}
	//echo $tid;
		$inf = array();
		$infr = array();
		//echo "SELECT * FROM ".$typ." where ".$tid."=".$id;
		$check = mysql_query("SELECT * FROM ".$typ." where ".$tid."=".$id) or die(mysql_error());	
		//$arr = mysql_fetch_array($check);
        while ($info = mysql_fetch_assoc($check)) {					
			//array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			array_push($inf,$info);
		}
		
		$checkr = mysql_query("SELECT * FROM ".$typ." where ".$tid."!=".$id." order by ".$tid." desc") or die(mysql_error());	
		while ($infor = mysql_fetch_assoc($checkr)) {					
			//array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			array_push($infr,$infor);
		}
		
		
		if(sizeof($inf)<=0){
				$result['result'] ="Failure";
				$result['message'] ="No record";
				$result['data']= '';
		}else{
				$result['result'] ="Success";
				$result['message'] ="Successfully get the tollywood record";
				$result['data']= $inf;
				$result['data_related']= $infr;
				$result['path']=$ty;
		}
		echo json_encode($result);
}
function videotrialer($ty){
	if($ty=="kw"){
		$typ = 'hollywood';
		$tid = 'hid';
	}else if($ty=="bw"){
		$typ = 'bollywood';
		$tid = 'bid';
	}else if($ty=="tw"){
		$typ = "tollywood";
		$tid = 'tid';
	}
		$inf = array();
		
		//echo "SELECT * FROM ".$typ;
		$check = mysql_query("SELECT * FROM ".$typ) or die(mysql_error());	
		//$arr = mysql_fetch_array($check);
        while ($info = mysql_fetch_assoc($check)) {					
			//array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			//array_push($inf,$info);
			if($info['video_path']!=""){
				array_push($inf,$info);
			}
		}		
		
		if(sizeof($inf)<=0){
				$result['result'] ="Failure";
				$result['message'] ="No record";
				$result['data']= '';
		}else{
				$result['result'] ="Success";
				$result['message'] ="Successfully get the tollywood record";
				$result['data']= $inf;				
				$result['path']=$ty;
		}
		echo json_encode($result);
	
}
function alltrailer(){
	$inf = array();
	$check = mysql_query("SELECT * FROM hollywood ORDER BY hid DESC") or die(mysql_error());	
		//$arr = mysql_fetch_array($check);
        while ($info = mysql_fetch_assoc($check)) {					
			//array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			//array_push($inf,$info);
			if($info['video_path']!=""){
				array_push($inf,$info);
			}
		}		
		
		if(sizeof($inf)<=0){
				$result['result'] ="Failure";
				$result['message'] ="No record";
				$result['data']= '';
		}else{
				$result['result'] ="Success";
				$result['message'] ="Successfully get the kollywood record";
				$result['data']= $inf;				
				//$result['path']=$ty;
		}
		echo json_encode($result);
}
function reviewall(){
	$inf = array();
	$check = mysql_query("SELECT * FROM hollywood ORDER BY hid DESC") or die(mysql_error());	
		//$arr = mysql_fetch_array($check);
        while ($info = mysql_fetch_assoc($check)) {					
			//array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			//array_push($inf,$info);
			if($info['review']!=""){
				array_push($inf,$info);
			}
		}		
		
		if(sizeof($inf)<=0){
				$result['result'] ="Failure";
				$result['message'] ="No record";
				$result['data']= '';
		}else{
				$result['result'] ="Success";
				$result['message'] ="Successfully get the Review record";
				$result['data']= $inf;				
				//$result['path']=$ty;
		}
		echo json_encode($result);
}
//detailrelated
// function detailrelated($id,$ty){
	// if($ty=="kw"){
		// $typ = 'hollywood';
		// $tid = 'hid';
	// }else if($ty=="bw"){
		// $typ = 'bollywood';
		// $tid = 'bid';
	// }else if($ty=="tw"){
		// $typ = "tollywood";
		// $tid = 'tid';
	// }
	// //echo $tid;
		// $inf = array();
		// echo "SELECT * FROM ".$typ." where ".$tid."!=".$id." order by ".$tid." desc";
		// $check = mysql_query("SELECT * FROM ".$typ." where ".$tid."!=".$id." order by ".$tid." desc") or die(mysql_error());	
		// //$arr = mysql_fetch_array($check);
        // while ($info = mysql_fetch_assoc($check)) {					
			// //array_push($inf,$info['hid'],$info['title'],$info['name'],$info['director'],$info['music'],$info['description'],$info['producer'],$info['cast'],$info['screen'],$info['story'],$info['review'],$info['reg_date'],$info['img_path'],$info['video_path']);
			// array_push($inf,$info);
		// }
		
		// if(sizeof($inf)<=0){
				// $result['result'] ="Failure";
				// $result['message'] ="No record";
				// $result['data']= '';
		// }else{
				// $result['result'] ="Success";
				// $result['message'] ="Successfully get the tollywood record";
				// $result['data']= $inf;
				// $result['path']=$ty;
		// }
		// echo json_encode($result);
// }
?>