function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function equal() {
  document.form.textview.value = eval(document.form.textview.value);
}

function c() {
  document.form.textview.value = " ";
}

function back() {
  let result = document.form.textview.value;
  document.form.textview.value = result.substring(0, result.length - 1);
}

document.addEventListener("keypress", function (e) {
  if (e.key === "0") {
    insert(0);
  }
  if (e.key === "1") {
    insert(1);
  }
  if (e.key === "2") {
    insert(2);
  }
  if (e.key === "3") {
    insert(3);
  }
  if (e.key === "4") {
    insert(4);
  }
  if (e.key === "5") {
    insert(5);
  }
  if (e.key === "6") {
    insert(6);
  }
  if (e.key === "7") {
    insert(7);
  }
  if (e.key === "8") {
    insert(8);
  }
  if (e.key === "9") {
    insert(9);
  }
  if (e.key === "/") {
    insert("/");
    e.preventDefault(); // For Firefox (search in page hotkey)
  }
  if (e.key === "*") {
    insert("*");
  }
  if (e.key === "-") {
    insert("-");
  }
  if (e.key === "+") {
    insert("+");
  }
  if (e.key === ".") {
    insert(".");
  }
  if (e.key === "=") {
    equal();
  }
});
document.addEventListener("keydown", function (r) {
  if (r.key === "Backspace") {
    back();
    r.preventDefault();
  }
  if (r.key === "Delete") {
    c();
  }
  if (r.key === "Enter") {
    equal();
  }
});
