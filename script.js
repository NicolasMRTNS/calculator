function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function equal() {
  document.form.textview.value = eval(document.form.textview.value);
}

// Erase function
function c() {
  document.form.textview.value = " ";
}

// Backspace
function back() {
  let result = document.form.textview.value;
  document.form.textview.value = result.substring(0, result.length - 1);
}

// Switch to use keyboard
document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "0":
      insert(0);
      break;
    case "1":
      insert(1);
      break;
    case "2":
      insert(2);
      break;
    case "3":
      insert(3);
      break;
    case "4":
      insert(4);
      break;
    case "5":
      insert(5);
      break;
    case "6":
      insert(6);
      break;
    case "7":
      insert(7);
      break;
    case "8":
      insert(8);
      break;
    case "9":
      insert(9);
      break;
    case "/":
      insert("/");
      break;
    case "*":
      insert("*");
      break;
    case "-":
      insert("-");
      break;
    case "+":
      insert("+");
      break;
    case ".":
      insert(".");
      break;
    case "=":
      insert("=");
      break;
  }
});

// Another switch for "keydown" only
document.addEventListener("keydown", (r) => {
  switch (r.key) {
    case "Backspace":
      back();
      r.preventDefault(); // Prevent Default for Firefox
      break;
    case "Delete":
      c();
      break;
    case "Enter":
      equal();
      break;
  }
});
