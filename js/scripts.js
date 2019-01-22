$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var userInput = $("input#sentence").val();
    console.log(userInput);
  })
})
