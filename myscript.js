var searchApp = angular.module("searchApp", []);
var advApp = angular.module("advApp", []);

/* adv controller*/
advApp.controller("advController", function($scope, $http, $rootScope) {

	$scope.createTremp = function() {

		var ma = document.getElementById("button-adv-itself");
		ma.style.border = "3px solid green";

		var newTremp = {
			src : $scope.query.src,
			dest : $scope.query.dest,
			day : $scope.query.day,
			month : $scope.query.month,
			hour : $scope.query.hour,
			minutes : $scope.query.minutes,
			payment : $scope.query.payment,
			seats : $scope.query.seats,
			driver : $scope.query.driver,
			number : $scope.query.number,
			details : $scope.query.details,
			date : $scope.query.date,
			id : this.id,
			id2 : Math.floor((Math.random() * 100000000000000015) + 1)
		};

		$http.post('http://localhost:3000/tremps', newTremp).success(function() {
						alert("נוצר בהצלחה!");
		}).error(function(data, status, headers, config) {
			alert("שגיאה");
		});

	};
});

/* search controller*/
searchApp.controller("searchController", function($scope, $http, $rootScope) {

	$http.get("http://localhost:3000/tremps").success(function(res) {
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

	/*  $scope.checkNoTremps = function() {
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
	 };   */

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

/* לא בשימוש
 app.directive('places', function() {
 return {
 restrict : 'E',
 templateUrl : 'places.html'
 };
 });   */

