export function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("whitelist").value;

  // Displaying the value
  return inputVal.split("\n");
}
