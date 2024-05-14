/*
3.	Calcul de l'IMC (Indice de Masse Corporelle) : 
Écrivez un programme qui prend le poids (en kg) et la taille (en mètres) 
d'une personne en entrée, puis calcule et affiche son IMC. 

IMC = poids (kg) / taille^2 (m)

*/

const imc = function(poids, taille){
    let imc = poids / (taille * taille);
    if (imc < 18.5) {
        console.log("Votre IMC est "+imc+", Poids insuffisant et pouvant occasionner certains risque pour la santé.");
    }
    else if (imc >= 18.5 && imc <= 24.9){
        console.log("Votre IMC est "+imc+", Poids santé qui n'augmente pas les risques pour la santé.");
    }
    else if (imc >= 25 && imc <= 29.9){
        console.log("Votre IMC est "+imc+", Excès de poids pouvant occasionner certains risques pour la santé.");
    }
    else{
        console.log("Votre IMC est "+imc+", Obésité, risque accru de developper certains maladies.");
    }
}

imc(72, 1.72);