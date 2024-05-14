/*
8.	Génération de nombres premiers : 
Écrivez un programme qui génère et affiche les nombres premiers jusqu'à un certain nombre
 donné. 

*/


function nbrpremier(nbr){
    console.log("Voila les nombres premiers dans la plage que vous avez donnez: ");
    let tab = [];
    let compteur = 0;
    for (let i = 1; i <= nbr; i++) {
        for (let j = 1; j <= nbr; j++) {
            let premiers = i%j;
            if(premiers == 0){
                compteur++;
                if (compteur < 3){
                    tab.push(i);
                }
            }
        }
    }
    console.log(tab);
}

var prmt = prompt('Entrez un nombre pour définir la limite de la plage à vérifier pour les nombres premiers : ')
nbrpremier(prmt);