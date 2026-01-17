function checkAddress() {
  const input = document.getElementById("addressInput").value;
  const valid = isValidAddress(input);
  const message = getMessage(valid);

  document.getElementById("result").innerText = formatResult(message);
}
