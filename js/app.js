(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
	
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.food = "";
	$scope.message = "";
	
	$scope.checkIfTooMuch = function(){
		var items = $scope.food.split(",");
		items = checkAndRemoveEmptyItems(items);
		if (!items[0]){
			setTextAndColor("Please enter data first", "red", "red")
		} else if (items.length > 3){
			setTextAndColor("Too much!", "green", "green");
		} else{
			setTextAndColor("Enjoy!", "green", "green");
		}
	}

	function checkAndRemoveEmptyItems(items){
		for (var i = 0; i < items.length; i++){
			if (items[i].trim() == ""){
				items.splice(i,1);
			}
		}
		return items;
	}

	function setTextAndColor(text, font_clr, border_clr){
		$scope.message = text;
		$scope.font_color = {"color": font_clr};
		$scope.border_color = {"border-color": border_clr};
	}
}

})();