//helloSpeaker.speak method can be called with the name to print "Hello name" to console.

(function (window) {
  var helloSpeaker = {};
  var Greeting = "Hello";

  helloSpeaker.speak = function (NameToSpeak) {
    console.log(Greeting + " " + NameToSpeak);
  }

  window.helloSpeaker = helloSpeaker;
})(window);

