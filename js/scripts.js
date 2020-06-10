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
  //inputArray = userInput.split('');
  let consRemoved = "";

  if (vowels.includes(userInput[0])) {
    return (userInput + "way");
  } else {
    for (i=0; i < userInput.length; i++) {
      consRemoved = userInput.slice(); //this is where the problem lies
      userInput = (userInput + consRemoved + "ay"); //maybe this too.
      return userInput;
    }
  }
};




    // for(i = 0; i < userInput.length; i++){
    //   pigWord = pigWord + userInput[i] + "way";
    // };
    // console.log(userInput);
//   } else {