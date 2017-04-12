'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {

      this.getMessages = function () {
        return $http.get('/messages');
      }

      this.addMessage = function ( message ) {
        return $http.post('/messages', { message: message });
      }

      this.getName = function () {
        return $http.get('/username');
      }

      this.addName = function ( username ) {
        return $http.post('/username', { username: username });
      }

  });
