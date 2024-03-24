//handling the submission of the bigger button being pressed
function handleSubmitBigger(){ 
  var textBox = document.getElementById("TextBox");
  textBox.style.fontSize = 24 + "px";
}
// Handling chnages too the radio buttons 
function handleChange(){ 
  var textBox = document.getElementById("TextBox"); 
  var fancyShmancyRadio = document.getElementById("fancyShmancy");
  var boringBettyRadio = document.getElementById("BoringBetty");
  //Used for radio buttons and checking if they are checked
  if (fancyShmancyRadio.checked) {
    textBox.style.fontWeight = "bold";
    textBox.style.color = "blue";
    textBox.style.textDecoration = "underline";
  } else if (boringBettyRadio.checked) {
    textBox.style.fontWeight = "normal";
    textBox.style.color = "black"; // Reset color to default
    textBox.style.textDecoration = "none"; // Reset text decoration to default
  }
}

// What I am using to handle the code for moo button 
function handleMoo() {
  var textBox = document.getElementById("TextBox");
  textBox.value = textBox.value.toUpperCase();

  var text = textBox.value;
  var sentences = text.split('.'); // Splitting text into sentences using period char
  
  // Process for each sentene
  for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].trim().split(' '); // Split sentence into words
      if (words.length > 1) {
          words[words.length - 1] += "-Moo"; // Add suffix to the last word
      }
      sentences[i] = words.join(' '); // Joining the modified words
  }
  
  textBox.value = sentences.join('. '); // Join the modified sentences

}
