const form= document.querySelector("#form-tache");

const input = document.querySelector("#input-tache");

const liste = document.querySelector("#liste-taches");

const template = document.querySelector("#template-tache");

const compteur = document.querySelector("#nb-taches");

const btnVider = document.querySelector("#btn-vider-terminees");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const texte = input.value.trim();
    if (texte ===""){
      return;    
    }
    const li = template.content.firstElementChild.cloneNode(true);
    const spanTexte = li.querySelector(".tache-texte");
    spanTexte.textContent = texte;

    const btnSupprimer = li.querySelector(".btn-supprimer");
    btnSupprimer.addEventListener("click", function() {
        li.remove()
    });

    liste.append(li);
    input.value = "";
    input.focus();
    
});
btnVider.addEventListener("click", function () {
  liste.innerHTML = "";
});