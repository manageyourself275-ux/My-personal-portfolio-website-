function changeText() {
  const newText = prompt("Enter your new portfolio statement:");
  if (newText) {
    document.getElementById("portfolioText").innerText = newText;
  }
}