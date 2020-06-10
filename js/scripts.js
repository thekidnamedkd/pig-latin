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
  inputArray = userInput.split('');

  for(i = 0; i < inputArray.length; i++){
    if (vowels.includes(inputArray[i])){
      console.log("yup I'm catching it");
    }
  };
  
};


  // if () {
  //   alert("You haven't entered letters.");
  // } 