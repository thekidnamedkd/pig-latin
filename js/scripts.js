$(document).ready(function() {
  $("form#normInput").submit(function(event){
    event.preventDefault();
    const userInput = $("input#input").val();
    pigLatin(userInput);
  });   
});

function pigLatin(userInput) {
  userInput = userInput.toLowerCase()
  const vowels = ["a", "e", "i", "o", "u"];
  console.log(userInput.includes(vowels[0]));
  
};


  // if () {
  //   alert("You haven't entered letters.");
  // } 