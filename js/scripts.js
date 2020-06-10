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
  let pigWord = "";

  if (vowels.includes(userInput[0])) {
    return (userInput + "way");
  };
};

    // for(i = 0; i < userInput.length; i++){
    //   pigWord = pigWord + userInput[i] + "way";
    // };
    // console.log(userInput);
//   } else {