// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngMessages'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
//http://codepen.io/niyando/pen/GpEeQR
  .directive('groupedRadio', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        model: '=ngModel',
        value: '=groupedRadio'
      },
      link: function(scope, element, attrs, ngModelCtrl) {
        element.addClass('button');
        element.on('click', function(e) {
          scope.$apply(function() {
            ngModelCtrl.$setViewValue(scope.value);
          });
        });

        scope.$watch('model', function(newVal) {
          element.removeClass('button-positive');
          if (newVal === scope.value) {
            element.addClass('button-positive');
          }
        });
      }
    };
  })

  .controller('MyCtrl', function($scope) {
    $scope.data = {
      gender: 'Login'
    };
    $scope.isTabLoginClicked = true;

    $scope.tabLoginClicked = function(){
      $scope.isTabLoginClicked = true;
      $scope.isTabRegisterClicked = false;
    }
    $scope.tabRegisterClicked = function(){
      $scope.isTabLoginClicked = false;
      $scope.isTabRegisterClicked = true;
    }

    $scope.loginData = {};

    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);
    };

    $scope.registerData = {};

    $scope.doRegister = function() {
      alert('Doing Registration', $scope.registerData);
    };

    $scope.btnSendSMSClicked = function(){

      sms.send('98827533', 'SMS content', {}, function(response){
        alert(response);
      }, function(error) {
        alert(error);
      });

    }

    $scope.btnGetContactsClicked = function(){

      navigator.contacts.find(
        [navigator.contacts.fieldType.displayName],
        gotContacts,
        errorHandler);

    }

    function errorHandler(e) {
      console.log("errorHandler: "+e);
    }

    function gotContacts(c) {
      console.log("gotContacts, number of results "+c.length);
      for(var i=0, len=c.length; i<len; i++) {
        console.dir(c[i]);
      }
    }


  });




