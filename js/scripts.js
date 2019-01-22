$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var userInput = $("input#sentence").val();

    var words = userInput.split(" ");

    var threeWords = words.map(function(word){
      if (word.length >= 3) {
        return word
      // } else {
      //   return null;
      }

    });

    var reverseWords = threeWords.reverse();
    // console.log(reverseWords);

    var output = reverseWords.join(" ");
    console.log(output);
    // console displays extra spaces between words


    $("#displayField").text(output);
  })
})
