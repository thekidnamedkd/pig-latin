$(document).ready(function() {
  $("form#normInput").submit(function(event){
    event.preventDefault();
    const userInput = $("input#input").val();
    let resultArray = pigLatin(userInput);
    console.log(resultArray);
  });   
});

function pigLatin(userInput) {
  userInput = userInput.toLowerCase()
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(userInput[0])) {
    return (userInput + "way");

    } else {
      for (firstVow of userInput) {
        if (vowels.includes(firstVow)) {
        indexVow = userInput.indexOf(firstVow);
      }
    }
    return userInput.slice(indexVow) + userInput.slice(0, indexVow) + "ay";
  }
};
