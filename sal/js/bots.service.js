(function() {
  'use strict';
  
  var app = angular.module("app");
  app.service('BotsService', function($rootScope){
   
   var bots = this;
   
   bots.automatedVoiceName = 'Elisa'; 	
   bots.defaultMsg = 'Hi Matt. I am '+ bots.automatedVoiceName +' your personal teacher, How can I help you?';
   bots.getCurrentTime=function(){
	   var d = new Date(); // for now
	   return d.getHours()+":"+d.getMinutes();
   }   
   bots.messages = [
      {
        'username': bots.automatedVoiceName,
        'content': bots.defaultMsg,
		'time':bots.getCurrentTime()
      }
    ];
   
    bots.accessToken = "475a471d1ab74267a66570d2e9fc43f4";
    bots.baseUrl = "https://api.api.ai/v1/"
    bots.recognition=undefined;
    bots.messageRecording = "Recording...";
    bots.messageCouldntHear = "I couldn't hear you, could you say that again?",
    bots.messageInternalError = "Oh no, there has been an internal server error",
    bots.messageSorry = "I'm sorry, I don't have the answer to that yet.";
   
      bots.startRecognition = function() {
      bots.recognition = new webkitSpeechRecognition();
      bots.recognition.continuous = false;
      bots.recognition.interimResults = false;

      bots.recognition.onstart = function(event) {
        bots.respond(bots.messageRecording);
        //updateRec();
      };
      bots.recognition.onresult = function(event) {
        bots.recognition.onend = null;

        var text = "";
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
          }
          bots.setInput(text);
        bots.stopRecognition();
      };
      bots.recognition.onend = function() {
        bots.respond(bots.messageCouldntHear);
        bots.stopRecognition();
      };
      bots.recognition.lang = "en-US";
      bots.recognition.start();
    }

    bots.stopRecognition = function() {
      if (bots.recognition) {
        bots.recognition.stop();
        bots.recognition = null;
      }
      //updateRec();
    }

    bots.switchRecognition = function() {
      if (bots.recognition) {
        bots.stopRecognition();
      } else {
        bots.startRecognition();
      }
    }

    bots.setInput = function(text) {
      //$speechInput.val(text);
      if(text && text !== '') {
		 bots.messages.push({
          'username': 'Matt',
          'content': text,
		  'time':bots.getCurrentTime()
        });
		$rootScope.$broadcast('voiceToTextEvent');
      }
      bots.send(text);
    }

     bots.pdateRec=function() {
      //$recBtn.text(recognition ? "Stop" : "Speak");
    }

     bots.send = function(textVal) {
      var text = textVal;
      $.ajax({
        type: "POST",
        url: bots.baseUrl + "query",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
          "Authorization": "Bearer " + bots.accessToken
        },
        data: JSON.stringify({query: text, lang: "en", sessionId: "5d4c865e-f38a-49a4-badb-02924b2d6ca8"}),

        success: function(data) {
          bots.prepareResponse(data);
        },
        error: function() {
          bots.respond(bots.messageInternalError);
        }
      });
	  
	 
    }

     bots.prepareResponse=function(val) {
      var debugJSON = JSON.stringify(val, undefined, 2),
        spokenResponse = val.result.speech;

      bots.respond(spokenResponse);
      bots.debugRespond(debugJSON);
    }

     bots.debugRespond=function(val) {
      $("#response").text(val);
    }

     bots.respond=function(val) {
      if (val == "") {
        val = bots.messageSorry;
      }

      if (val !== bots.messageRecording) {
        var msg = new SpeechSynthesisUtterance();
        msg.voiceURI = "native";
        msg.text = val;
        msg.lang = "en-US";
        window.speechSynthesis.speak(msg);
      }

      if(val && val !== '' && val!==bots.defaultMsg && val!==bots.messageRecording) {
		 bots.messages.push({
          'username': bots.automatedVoiceName,
          'content': val,
		  'time':bots.getCurrentTime()
        });
		$rootScope.$broadcast('voiceToTextEvent');
      }

   }
   

  
  bots.getMessages=function(){
	 return bots.messages; 
  }
   
   
  });
  
})();