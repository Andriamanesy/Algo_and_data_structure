/*
5.	Calcul de la factorielle : 
Écrivez une fonction qui prend un entier positif comme argument et renvoie sa factorielle. 

*/

function factorielle(nbr){
    let a = nbr;
    let fct = 1;
    while (a > 1) {
        fct = a * fct;
        a--;
    }
    console.log("La factorielle de "+nbr+" est "+ fct);
}

factorielle(6);