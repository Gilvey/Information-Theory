document.addEventListener("click", function () {
  const file = document.body.dataset.meow;
  if (!file) return;
  const sound = new Audio(file);
  sound.play();
});
