var allfive = angular.module('allfive', []);

allfive.controller('allfive', function ($scope) {

    $scope.show = 'center';
    $scope.leftZ = 0;
    $scope.rightZ = 0;
    $scope.bottomZ = 0;
    $scope.topZ = 0;
    $scope.centerZ = 0;

    $scope.resetAll = function () {
        $scope.centerInRight = false;
        $scope.centerInLeft = false;
        $scope.centerOutRight = false;
        $scope.centerOutLeft = false;
        $scope.centerOutUp = false;
        $scope.centerOutDown = false;
        $scope.centerInUp = false;
        $scope.centerInDown = false;

        $scope.rightIn = false;
        $scope.rightOut = false;

        $scope.leftIn = false;
        $scope.leftOut = false;

        $scope.bottomUp = false;
        $scope.bottomDown = false;

        $scope.topUp = false;
        $scope.topDown = false;
    };


    $scope.moveCenterRight = function (){
        console.log('move center right');
        $scope.leftZ = 2;
        $scope.rightZ = 0;
        $scope.bottomZ = 0;
        $scope.topZ = 0;
        $scope.centerZ = 1;


        $scope.resetAll();
        $scope.leftIn = true;
        $scope.centerOutRight = true;

    };

    $scope.moveCenterLeft = function (){
        console.log('move center Left');
        $scope.leftZ = 0;
        $scope.rightZ = 2;
        $scope.bottomZ = 0;
        $scope.topZ = 0;
        $scope.centerZ = 1;

        $scope.resetAll();
        $scope.rightIn = true;
        $scope.centerOutLeft = true;
    };

    $scope.moveLeftLeft = function (){
        console.log('move left left');
        $scope.leftZ = 1;
        $scope.rightZ = 0;
        $scope.bottomZ = 0;
        $scope.topZ = 0;
        $scope.centerZ = 2;

        $scope.resetAll();
        $scope.leftOut = true;
        $scope.centerInRight = true;
    };

    $scope.moveRightRight = function (){
        console.log('move right right');
        $scope.leftZ = 0;
        $scope.rightZ = 1;
        $scope.bottomZ = 0;
        $scope.topZ = 0;
        $scope.centerZ = 2;

        $scope.resetAll();
        $scope.rightOut = true;
        $scope.centerInLeft = true;
    };

    $scope.moveDown = function (){
      $scope.centerUp = true;

    };

    $scope.moveCenterUp = function() {
        console.log('move center up');
        $scope.leftZ = 0;
        $scope.rightZ = 0;
        $scope.bottomZ = 2;
        $scope.topZ = 0;
        $scope.centerZ = 1;

        $scope.resetAll();
        $scope.centerOutUp = true;
        $scope.bottomUp = true;
    };

    $scope.moveCenterDown = function() {
        console.log('move center down');
        $scope.leftZ = 0;
        $scope.rightZ = 0;
        $scope.bottomZ = 0;
        $scope.topZ = 2;
        $scope.centerZ = 1;

        $scope.resetAll();
        $scope.centerOutDown = true;
        $scope.topDown = true;
    };


    $scope.moveTopUp = function() {
        console.log('move top up');
        $scope.leftZ = 0;
        $scope.rightZ = 0;
        $scope.bottomZ = 0;
        $scope.topZ = 1;
        $scope.centerZ = 2;

        $scope.resetAll();
        $scope.topUp = true;
        $scope.centerInUp = true;

    };

    $scope.moveBottomDown = function() {
        console.log('move bottom down');
        $scope.leftZ = 0;
        $scope.rightZ = 0;
        $scope.bottomZ = 1;
        $scope.topZ = 0;
        $scope.centerZ = 2;

        $scope.resetAll();
        $scope.centerInDown = true;
        $scope.bottomDown = true;

    };

});
