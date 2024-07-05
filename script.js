var pass = document.getElementById("Password");
var msg = document.getElementById("message");
var strn = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (pass.value.length < 4) {
    strn.innerHTML = "Weak";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    strn.innerHTML = "Medium";
  }

  if (pass.value.length >= 8) {
    strn.innerHTML = "Strong";
  }
});
