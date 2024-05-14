/*
    6.	Vérification de palindrome : 
Écrivez un programme qui vérifie si une chaîne de caractères donnée est un palindrome 
(c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche). 
*/
function palindrome(chaine){
    let tab = [];
    let i = chaine.length;
    while (i >= 0) {
        i--;
        tab += chaine.charAt(i);
    }
    if (chaine.toLowerCase() === tab.toLowerCase()){
        alert("Le mot " + chaine + " est palindrome");
    }
    else{
        alert("Le mot " + chaine + " n'est pas palindrome");
    }
    
}

var mot = prompt('Enter un mot à tester');
if (mot == ''){
    alert("Vous avez saisi rien du tout")
}else{
    palindrome(mot);
}
