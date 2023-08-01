const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // checar se a tecla SHIFT estava apertada
  // E checar se ta checando MESMO e nao DESCHECANDO
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // fazer oq foi pedido
    // Loop por todas as checkboxs
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
