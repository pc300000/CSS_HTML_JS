//byeSpeaker.speak method can be called with the name to print "Good Bye + argument" to console.
(function (window) {
  var byeSpeaker = {};
  var Greeting = "Good Bye";

  byeSpeaker.speak = function (NameToSpeak) {
    console.log(Greeting + " " + NameToSpeak);
  }

  window.byeSpeaker = byeSpeaker;
})(window);
