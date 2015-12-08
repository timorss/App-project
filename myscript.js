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

			divTdClass[i].style.height = "1.9em";
			divTdClass[i].style.fontWeight = "normal";
			divTdClass[i].style.background = "#CC870A";

			AllInsideDiv[i].style.display = "none";

		};

		divTdIsOpen.style.height = "9em";
		divTdIsOpen.style.background = "#CC5153";
		divTdIsOpen.style.fontWeight = "bold";

		insideDiv.style.display = "block";
		insideDiv.style.fontWeight = "normal";
		insideDiv.style.width = "80%";
		insideDiv.style.height = "6em";
		insideDiv.style.boxShadow = "0.1em 0.3em 1em black";
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

