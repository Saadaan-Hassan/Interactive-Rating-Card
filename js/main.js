const input = document.getElementsByTagName("input");
const thankyou_state = document.getElementById("thankyou-state");
const rating_state = document.getElementById("rating-state");
const rating = document.getElementById("rating");
const btn = document.getElementById("btn");

let value = 0;

for (let index = 0; index < input.length; index++) {
  input[index].checked = false;
}

btn.addEventListener("click", (a) => {
  a.preventDefault();

  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      value = parseInt(input[i].value);
    }
  }

  if (value === 0) return;

  rating_state.style.display = "none";
  thankyou_state.style.display = "flex";

  rating.innerHTML = value;
});
