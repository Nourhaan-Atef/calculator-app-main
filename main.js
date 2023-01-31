const result = document.getElementById("resultArea");
// const Toggle = document.getElementById("toggle");

const buttons = Array.from(document.getElementsByClassName("button"));
// const userTheme = localStorage.getItem("theme");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        result.innerText = "";
        break;
      case "DEL":
        if (result.innerText) {
          result.innerText = result.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          result.innerText = eval(result.innerText);
        } catch {
          result.innerText = "Error!";
        }
        break;
      default:
        result.innerText += e.target.innerText;
    }
  });
});

// Toggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   Toggle.classList.toggle("justify-start");
//   Toggle.classList.toggle("justify-end");
// });
