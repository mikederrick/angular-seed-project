'use strict';

function Page1Ctrl($scope, $filter) {

	$scope.people = [{firstName: 'Bruce', lastName: 'Wayne', birthDate: 2}, {firstName: 'Wally', lastName: 'West', birthDate: 3}, {firstName: 'Jon', lastName: 'Jones', birthDate: 1}];
	$scope.orderedPeople = $filter('orderBy')($scope.people, 'birthDate');
}

function Page2Ctrl($scope) {
  $scope.page = "Page 2"
}
