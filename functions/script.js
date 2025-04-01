function function1() {
    const pf1 = document.getElementById("function1");
    const name = document.getElementById("name").value;
    if (name !== "" && name.toLowerCase() !== "nigga") {
      pf1.innerHTML = "your name is " + name;
    } else if (name.toLowerCase() === "nigga") {
      pf1.innerHTML = "YOU ARE NOT NIGGA";
    } else {
      pf1.innerHTML = "Enter your name!";
    }
  }
  
  const etf2 = document.getElementById("textStyler"); //Textarea
  const pf2 = document.getElementById("StyledText"); //p after textarea
  
  function textStylerBold() {
    pf2.innerHTML = etf2.value;
    pf2.classList.toggle("bold");
  }
  
  function normalText() {
    pf2.innerText = etf2.value;
    pf2.classList.remove("bold", "italic");
    pf2.style.color = "white";
    pf2.style.fontWeight = "normal";
  }
  
  function textStylerItalic() {
    pf2.innerHTML = etf2.value;
    pf2.classList.toggle("italic");
  }
  
  function kmToMiles() {
    const Km = document.getElementById("kmToMiles").value;
    const pf3 = document.getElementById("conversionResult1");
    if (Km) {
      if (Km != 1) {
        pf3.innerText = Km + " Kilometers are " + Km / 1.609 + " miles.";
      } else {
        pf3.innerText = Km + " Kilometer is " + Km / 1.609 + " miles.";
      }
    } else {
      pf3.innerText = "Enter a value!";
    }
  }
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;
  function guessNumber() {
    let guessedNumber = document.getElementById("numberGuess").value;
    const outputGN = document.getElementById("gNOutput");
    attempts--;
    if (guessedNumber === randomNumber && attempts !== 0) {
      outputGN.style.color = "green";
      outputGN.innerHTML = "Good job! You guessed the number!";
    } else if (guessedNumber > randomNumber) {
      outputGN.style.color = "red";
      outputGN.innerHTML = "Too high! You have " + attempts + " attempts left.";
    } else {
      outputGN.style.color = "red";
      outputGN.innerHTML = "Too low! You have " + attempts + " attempts left.";
    }
  
    if (attempts <= 0) {
      outputGN.style.color = "red";
      outputGN.innerHTML =
        "You ran out of attempts! The correct number was " + randomNumber + ".";
    }
  }
  
  function applyColor() {
    let colorC = document.getElementById("colors").value;
    let outputCT = document.getElementById("StyledText");
    if (colorC === "Red") {
      outputCT.style.color = "red";
    } else if (colorC === "Blue") {
      outputCT.style.color = "blue";
    }
    else if(colorC === "Yellow"){
      outputCT.style.color = "yellow";
    }
    else if(colorC === "Green"){
      outputCT.style.color = "green";
    }
    else if(colorC === "Pink"){
      outputCT.style.color = "pink";
    }
    else{
      outputCT.style.color = "white";
    }
  }
  