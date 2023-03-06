import { Card } from "../modules/Card.js";
import { Api } from "../modules/Api.js";

new Api(new Card());
const userWrapper = document.querySelector(".users");

userWrapper.addEventListener("click", function (e) {
  const target = e.target.closest("li");
  if (!target) return;
  if (!userWrapper.contains(target)) return;
  userWrapper.removeChild(target);
});
