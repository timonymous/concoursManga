document.addEventListener('DOMContentLoaded', () => {
  const listeElement = document.getElementById('liste');
  let data = [];

  fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      afficherListe(data);
      setInterval(actualiserListe, 1000);
    });

  function afficherListe(personnes) {
    listeElement.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      const personne = personnes[i];
      const li = document.createElement('li');
      li.textContent = `${personne.nom} ${personne.prenom}`;
      listeElement.appendChild(li);
    }
  }

  function actualiserListe() {
    const indexAleatoire = Math.floor(Math.random() * data.length);
    const personneAleatoire = data[indexAleatoire];
    const li = listeElement.querySelector('li:nth-child(10)');
    li.textContent = `${personneAleatoire.nom} ${personneAleatoire.prenom}`;
  }
});