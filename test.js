
function Etatdugaz(vide, pleine) {

    const etatdugaz = ['vide'];

if (etatdugaz === (vide)) { 
    return 'Bouteille de gaz a changer';
}

else {
    // determine la fonction choisir la technique de soudage avec des variables matiere et épaisseur
function choisirTechniqueSoudage(matiere, epaisseur) {
// nous donne les constantes des matieres valides
  const matieresValides = ['fer', 'inox', 'alu'];
// nous donne les constantes des épaisseurs valides
  const epaisseursValides = [1.2, 1.5, 2];                  
// détermine si une variable inclut une matiere non-définie dans les constante valides (doc mdn include()), si la matiere n'est pas valide retourne un message derreur
  if (!matieresValides.includes(matiere)) { 
    return 'Erreur : matière non reconnue.';
  }
// pareil pour l'epaisseur.
  if (!epaisseursValides.includes(epaisseur)) {
    return 'Erreur : épaisseur non prise en charge.';
  }

//   si l'epaisseur=1.2 ou 1.5, retourne un message pour utiliser le tig
  if ((epaisseur === 1.2 || epaisseur === 1.5)) {
    return 'Technique recommandée : TIG';
  }
// si la matiere est fer ou inox et que l'epaisseur = 2, on utilise mig
  if ((matiere === 'fer' || matiere === 'inox') && epaisseur === 2) {
    return 'Technique recommandée : MIG';
  }
// si la matiere est alu et que l'epaisseur =2 on utilise arc
  if (matiere === 'alu' && epaisseur === 2) {
    return 'Technique recommandée : ARC';
  }

//   si une combinaison n'apparait pas dans les conditions on renvoi un msg d'erreur
  return 'Erreur : aucune technique trouvée pour cette combinaison.';
}


console.log(choisirTechniqueSoudage('fer', 1.2));    // TIG
console.log(choisirTechniqueSoudage('inox', 2));     // MIG
console.log(choisirTechniqueSoudage('alu', 2));      // ARC
console.log(choisirTechniqueSoudage('cuivre', 1.5)); // Erreur matière

}
}
