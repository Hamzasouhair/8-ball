document.getElementById("8-Ball-Button").addEventListener("click", ballBtn);

let output = document.getElementById("answer-output");
// Function
function ballBtn() {
  let ballRand = Math.random();
  console.log(ballRand);
  let input = document.getElementById("input").value.toLowerCase();
  // Response
  console.log(input);
  if (input == "Will the raptors  have a comeback season next year") {
    output.innerHTML = "No, but high hopes for the next next season";
  } else if (input == "Will the oillers win the cup") {
    output.innerHTML = "Definitively";
  } else if (input == "Who is the goat of basketball") {
    output.innerHTML = "Michal Jordan of course";
  } else if (input == "Is java script better than python") {
    output.innerHTML = "Tough one, but maybe and maybe not";
  } else if (ballRand < 0.2) {
    output.innerHTML = "Without a Doubt.";
  } else if (ballRand < 0.4) {
    output.innerHTML = "As I see it, yes.";
  } else if (ballRand < 0.6) {
    output.innerHTML = "Concentrate and ask again.";
  } else if (ballRand < 0.8) {
    output.innerHTML = "Don't count on it.";
  } else {
    output.innerHTML = "Outlook not so good.";
  }
}
