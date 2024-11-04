// JSON'dan veriyi çek ve tabloyu oluştur
fetch("elementler.json")
  .then((cevap) => cevap.json())
  .then((elementler) => {
    const periyodikTablo = document.getElementById("periyodikTablo");

    elementler.forEach((element) => {
      const elementDiv = document.createElement("div");
      elementDiv.className = "element";
      elementDiv.innerHTML = `<strong>${element.sembol}</strong><br>${element.atomNumarasi}`;
      elementDiv.addEventListener("click", () => modalAc(element));
      periyodikTablo.appendChild(elementDiv);
    });
  });

// Modal açma fonksiyonu
function modalAc(element) {
  document.getElementById("elementSembol").textContent = element.sembol;
  document.getElementById("elementAtomNumarasi").textContent = element.atomNumarasi;
  document.getElementById("elementIsim").textContent = element.isim;
  document.getElementById("elementAciklama").textContent = element.aciklama;

  const modal = document.getElementById("elementModal");
  modal.style.display = "block";
}

// Modal kapatma işlemi
document.getElementById("modalKapat").addEventListener("click", () => {
  document.getElementById("elementModal").style.display = "none";
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("elementModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
