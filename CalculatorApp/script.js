let string = "";

let memory = 0;

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    // Equal
    if (value == "=") {
      try {
        string = string.replaceAll("×", "*").replaceAll("÷", "/");

        string = eval(string);

        document.querySelector("input").value = string;
      } catch {
        string = "Error";
        document.querySelector("input").value = string;
      }
    }

    // Clear
    else if (value == "C") {
      string = "";

      document.querySelector("input").value = string;
    }

    // Backspace
    else if (value == "⌫") {
      string = string.slice(0, -1);

      document.querySelector("input").value = string;
    }

    // Percentage
    else if (value == "%") {
      if (string != "") {
        string = eval(string) / 100;

        document.querySelector("input").value = string;
      }
    }

    // Plus Minus
    else if (value == "±") {
      if (string != "") {
        if (string.startsWith("-")) {
          string = string.slice(1);
        } else {
          string = "-" + string;
        }

        document.querySelector("input").value = string;
      }
    }

    // Memory Clear
    else if (value == "MC") {
      memory = 0;
    }

    // Memory Recall
    else if (value == "MR") {
      string = memory.toString();

      document.querySelector("input").value = string;
    }

    // Memory Plus
    else if (value == "M+") {
      if (string != "") {
        memory += Number(eval(string));
      }
    }

    // Memory Minus
    else if (value == "M-") {
      if (string != "") {
        memory -= Number(eval(string));
      }
    }

    // Normal buttons
    else {
      string = string + value;

      document.querySelector("input").value = string;
    }
  });
});
