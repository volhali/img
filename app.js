var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function ($scope) {
    
    $scope.priceTitle = 'Прайс-лист';
    $scope.priceDate = '2016-12-12';
    $scope.priceOrder = 'name';
    
    $scope.setOrder = function(order) {
        $scope.priceOrder = order;
    }

    $scope.priceList = [
        {
            name: 'Апельсины',
            price: 2,
            discount: 0.1
        },
        {
            name: 'Яблоки',
            price: 1,
            discount: 0
        },
        {
            name: 'Бананаы',
            price: 4,
            discount: 0.1
        },
        {
            name: 'Персики',
            price: 3,
            discount: 0
        }
    ]

}]);