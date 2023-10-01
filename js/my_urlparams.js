const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";
const pronounContainer = document.querySelector(".hero h4 span");
const namaContainer = document.querySelector(".hero h1 span");
pronounContainer.innerText = pronoun;
namaContainer.innerText = nama;