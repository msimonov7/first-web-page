const button = document.querySelector("#greet-button");
const message = document.querySelector("#message");
const nameInput = document.querySelector("#name-input");

button.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    message.textContent = "Сначала введи имя.";
  } else {
    message.textContent = "Привет, " + name + "!";
  }
});