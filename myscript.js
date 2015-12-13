var app = angular.module("trempApp", []);

app.controller("trempController", function($scope, $http) {
	$http.get("trempInfo.json").success(function(res) {

		$scope.tremps = res;

	}).error(function(data, status, headers, config) {
		alert("שגיאה");
	});

	/* טבלה לא בשימוש
	 $scope.openTd = function(z) {
	 var allTdAreClosed = document.getElementsByClassName("repeat");
	 var tdIsOpend = document.getElementById(z);

	 for ( i = 0; i < allTdAreClosed.length; i++) {
	 allTdAreClosed[i].style.height = "1.5em";
	 allTdAreClosed[i].style.verticalAlign = "middle";

	 };
	 tdIsOpend.style.height = "10em";
	 tdIsOpend.style.verticalAlign = "top";

	 };*/

	$scope.openTddiv = function(m, n) {
		var divTdClass = document.getElementsByClassName("table-div-raw");
		var divTdIsOpen = document.getElementById(m);
		var insideDiv = document.getElementById(n);
		var AllInsideDiv = document.getElementsByClassName("AllInsideDiv");

		for ( i = 0; i < divTdClass.length; i++) {

			divTdClass[i].className = "table-div-raw";

			AllInsideDiv[i].style.display = "none";


		};
		divTdIsOpen.className += " divTdIsOpen";

		setTimeout(function() {
			insideDiv.style.display = "block";
		}, 650);
		insideDiv.style.width = "80%";
	};



	$scope.$watch("filtered.length", function(length) {
		var results = document.getElementById("results");
		var results2 = document.getElementById("results2");

		if (length === 0) {
			results.innerText = "לצערנו, לא נמצאו טרמפים";
			results.style.display = "block";
			results2.style.display = "none";

		} else {
			results.style.display = "none";
			results2.style.display = "block";

		}
	});
});



		
app.directive('places', function() {
	return {
		restrict : 'E',
		templateUrl : 'places.html'
	};
});

