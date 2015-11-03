
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var app = angular.module('myhome', ['shared']);
app.controller('customersCtrl', function($scope, $http) {
    /*$http.get("function.php?q=kw")
    .success(function (response) {
		console.log(response);
		$scope.names = response.data;
	});*/
	var desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    var listitem = {"records":[
		{'name':'Gobinath','img':'img/Anegan111.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'suriya','img':'img/green-nature-road-1280x800.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'suriya','img':'img/Anegan111.jpg','desc':desc},
		{'name':'suriya','img':'img/Anegan111.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'suriya','img':'img/Anegan111.jpg','desc':desc},
		{'name':'vijay','img':'img/Bachalpseeflowers.jpg','desc':desc},
		{'name':'suriya','img':'img/green-nature-road-1280x800.jpg','desc':desc}]}
    $scope.names = listitem.records;
});
app.controller('kollywood', function($scope, $http,$sce) {
	//var urls = [];
   // urls.push({domain: $sce.trustAsResourceUrl("http://angularjs.org")});
    $http.get("function.php?q=kw")
    .success(function (response) {
		//console.log(response);
		$scope.names = response.data;
		$scope.path = response.path;
		
		//$scope.urls = urls;
	});
	$scope.getvideourl = function(url){
		return $sce.trustAsResourceUrl(url);
	}
	$scope.loc = function(item){
		var it=item.currentTarget;
		location.href=$(it).attr('href');
	}
	$scope.getNumber = function(num) {	
		return new Array(parseInt(num, 10));   
	}
});

app.controller('details', function($scope, $http) {
	//console.log(getUrlParameter('ty'));	
    $http.get("function.php?q=dt&id="+getUrlParameter('id')+"&ty="+getUrlParameter('ty'))
    .success(function (response) {
		//console.log(response);
		$scope.names = response.data;
		$scope.path = response.path;
		$scope.newsrelated = response.data_related;
	});
});
app.controller('kollywoodtrailer', function($scope, $http,$sce) {
    $http.get("function.php?q=video&ty=kw")
    .success(function (response) {
		//console.log(response);
		$scope.names = response.data;
		$scope.path = response.path;
	});
	$scope.getvideourl = function(url){
		return $sce.trustAsResourceUrl(url);
	}
	$scope.loc = function(item){
		var it=item.currentTarget;
		location.href=$(it).attr('href');
	}
	 $scope.videoSources = [];
	$scope.loadVideos = function() {
            $scope.videoSources.push('http://www.w3schools.com/html/mov_bbb.mp4');
            $scope.videoSources.push('http://www.w3schools.com/html/mov_bbb.webm');
        };
});


var sharedModule=angular.module('shared',[]);
sharedModule.controller('commonCtrl',['$scope',function($scope, $location) {
	$scope.goLogin = function(l) {		
		//$location.url('http://test.com/login.jsp?un='+ $scope.form.username +'&pw="+ $scope.form.password);		
		window.location.href=l;
		//$location.path( l );
		//console.log($location.path(l));
		//$location.path('http://localhost/MMW'+l);
	};
}]);

/*******************List Page*******************/
$(function(){
	$(window).load(function(){
	var fs='<i class="fa fa-star"></i>';
	var hs='<i class="fa fa-star-half-o"></i>';
	
	setTimeout(function(){
	$('.reviewStar').each(function(){
				var rl=$(this).attr('data-review');					
				for ( var i=1; i<=rl; i++ ){
				if(rl.split('.').length>1&&i>=parseInt(rl)){
					$(this).append(fs);
					$(this).append(hs);
				}else{
					$(this).append(fs);
				}
					
			}
	});
	},500);
	});
});