// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  window.GetAllNames = names;

  for (var eachname in names) {
    var firstLetter = names[eachname].charAt(0);
    if (firstLetter.toLowerCase() == 'j') {
      byeSpeaker.speak(names[eachname]);
    } else {
      helloSpeaker.speak(names[eachname]);
    }
  }
})(window)

