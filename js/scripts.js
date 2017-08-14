$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var words = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    words.forEach(function(word) {
      var wordText = $("input#" + word).val();
      $("." + word).text(wordText);
    });
    $("#story").show();
    event.preventDefault();
  });
});
