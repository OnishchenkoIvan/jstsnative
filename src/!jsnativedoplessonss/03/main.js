// Handler (обработчик), listener (слушатель), subscriber(подписчик) => function
// Событие => вызывает обработчик (слушатель, подписчик) => function()
// Объект event (ev, e) => сведения о произошедшем событии => function(e)

function onClickHandler(e) {
  // onClickHandler({....})
  e.stopPropagation();
  alert("yo!!!!");
}
function onClickHandler2(e) {
  // onClickHandler({....})
  e.stopPropagation();
  console.log(e);
}
function onClickHandler3(e) {
  // onClickHandler({....})
  e.stopPropagation();
  alert("hey!!!!");
}
const sm = document.getElementById("small");
const md = document.getElementById("medium");
const bg = document.getElementById("big");
// sm.onclick = onClickHandler;
// sm.onclick = "";

const listener = () => alert("too");

sm.addEventListener("click", listener);
sm.addEventListener("click", onClickHandler2);
sm.removeEventListener("click", listener);

md.addEventListener("click", onClickHandler);
bg.addEventListener("click", onClickHandler3);
