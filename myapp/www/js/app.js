// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .controller('TodoCtrl', function ($scope, $ionicPopup, $ionicListDelegate) {
    $scope.tasks =
      [
        {title: "Tomates", completed: true},
        {title: "Jambon", completed: false},
        {title: "Riz", completed: false},
        {title: "Lait", completed: false},
        {title: "Sucre", completed: false},
        {title: "Chocolat", completed: false},
        {title: "Oranges", completed: false},
        {title: "Café", completed: false}
      ];

    $scope.newTask = function () {
      $ionicPopup.prompt({
        title: "Nouveau produit",
        template: "Entrez un produit:",
        inputPlaceholder: "Qu'est-ce que je dois acheter?",
        okText: "Ajouter"
      }).then(function (res) {
        if(res) $scope.tasks.push({title: res, completed: false})
      })
    };

    $scope.edit = function (task) {
      $scope.data = { response : task.title};
      $ionicPopup.prompt({
        title: "Modifier",
        scope: $scope
      }).then(function (res) {
        if(res !== undefined) task.title = $scope.data.response;
        $ionicListDelegate.closeOptionButtons();
      })
    };

  })
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
