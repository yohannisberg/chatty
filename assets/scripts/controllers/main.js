'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });

    $scope.addMessage = function ( message ) {
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          $scope.messages = response.data.messages;
        });
      }
    };

    messageService.getName().then(function ( response ) {
      $scope.username = response.data.username;
    })

    $scope.addName = function (name){
      if (name) {
        messageService.addName(name).then(function (
          response ) {
            $scope.messages = response.data.username;
          });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
