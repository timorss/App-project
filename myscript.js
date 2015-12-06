var app = angular.module("trempApp", []);

app.controller("trempController", function($scope, $http) {
	$http.get("trempInfo.json").success(function(res) {

		$scope.tremps = res;
	}).error(function(data, status, headers, config) {
		alert("שגיאה");
	});

	$scope.openTd = function(z) {
		var allTdAreClosed = document.getElementsByClassName("repeat");

		for ( i = 0; i < allTdAreClosed.length; i++) {
			allTdAreClosed[i].style.height = "1.5em";

		};
		var tdIsOpend = document.getElementById(z);
		tdIsOpend.style.height = "10em";
	};

	$scope.checkNoTremps = function() {
		var results = document.getElementById("results");
		var results2 = document.getElementById("results2");
		var length2 = document.getElementById("length2");

		if (length2.innerText === "0") {
			results.innerText = "לצערנו, לא נמצאו טרמפים";
			results.style.display = "block";
			results2.style.display = "none";

		} else if (length2.innerText > "0") {
			results.style.display = "none";
			results2.style.display = "block";

		}
	};
});

app.directive('places', function() {
	return {
		restrict : 'E',
		templateUrl : 'places.html'
	};
});

/*
 function openTddiv() {
 var divtremp = document.getElementById("divtremp");
 var open = document.getElementById("open");
 divtremp.style.height = "8em";
 open.style.display = "block";
 }
 */
