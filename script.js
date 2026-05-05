let panier = [];
let total = 0;

function ajouterAuPanier(nom, prix) {
    panier.push({nom, prix});
    total += prix;
    majAffichage();
}

function majAffichage() {
    const liste = document.getElementById('liste-panier');
    const totalAffichage = document.getElementById('total-prix');
    
    liste.innerHTML = "";
    panier.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.nom} - ${item.prix}€`;
        liste.appendChild(li);
    });
    
    totalAffichage.textContent = total;
}

document.getElementById('form-commande').addEventListener('submit', function(e) {
    e.preventDefault();
    const client = document.getElementById('nom').value;
    if(panier.length === 0) {
        alert("Votre panier est vide !");
        return;
    }
    alert(`Merci ${client} ! Votre commande de ${total}€ est enregistrée. \nRDV jeudi prochain au marché de Bourdeaux pour le retrait.`);
    // Réinitialisation
    panier = [];
    total = 0;
    majAffichage();
});
