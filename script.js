function nyalakanHarapan() {
  document.getElementById("harapan").classList.remove("hidden");
}

function kirimBalasan(e) {
  e.preventDefault();
  const text = e.target.querySelector("textarea").value;
  const result = document.getElementById("balasan");
  result.textContent = `💌 Pesanmu: "${text}" sudah terkirim ke hatiku!`;
  result.classList.remove("hidden");
  e.target.reset();
}
