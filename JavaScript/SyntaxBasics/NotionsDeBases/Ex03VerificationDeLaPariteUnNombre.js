/*
4.	Vérification de la parité d'un nombre : 
Écrivez un programme qui demande à l'utilisateur d'entrer un nombre entier, 
puis vérifie et affiche si ce nombre est pair ou impair. 
*/

function parite(nbr){
    let a = nbr % 2;
    if (a = 0){
        console.log(nbr + " est nombre paire");
    }
    else{
        console.log(nbr + " est nombre impair");
    }
}

parite(9);