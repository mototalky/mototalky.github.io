(function() {
  'use strict';
var app = angular.module("app",['ngRoute','720kb.tooltips']);

app.config(['$routeProvider', function($routeProvider) {
   $routeProvider.

   when('/', {
      templateUrl: 'main.htm', controller: 'mainController'
   }).
   when('/chat', {
      templateUrl: 'chat.htm', controller: 'chatController'
   }).
   otherwise({
      redirectTo: '/'
   });

}]);



app.controller('mainController', mainController);

function mainController($location){

	var main = this;

	main.welcomeMsg='Hi,I am Sal your personal teacher. I am more than happy to help you';
	main.secondMsg='Click here to talk.';
	main.takeToChat = function(){
		$location.path('/chat');
	}

}


app.controller('chatController', chatController);

function chatController($rootScope, $scope,  $location, $anchorScroll, BotsService){

  var chat = this;
  chat.messages=BotsService.messages;
  chat.userName='Matt';
  chat.automatedVoiceName = 'Sal';
  $rootScope.welcomeCall=false;

	chat.submit = function(){
        BotsService.switchRecognition(chat.messages);
		//chat.gotoBottom();
	}

	chat.gotoBottom = function (){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      $anchorScroll();

    };

	$rootScope.$on('voiceToTextEvent', function () {
		chat.messages=BotsService.getMessages();
		$scope.$apply();

    });

	angular.element(function () {
		if(!$rootScope.welcomeCall){
			$rootScope.welcomeCall=true;
			BotsService.respond(chat.messages[0].content);
		}


    });
}
})();
