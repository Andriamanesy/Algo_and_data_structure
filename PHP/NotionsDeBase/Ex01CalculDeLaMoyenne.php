<?php
/* 
Écrivez un programme qui demande à l'utilisateur d'entrer trois notes,
 puis calcule et affiche leur moyenne. 
*/

$nbr1 = 0;
echo "Entrez le premier note : <input $nbr1></input> <br> <p>";
$nbr2 = 0;
echo "Entrez le deuxième note : <input $nbr2></input> <br> <p>";
$nbr3 = 0;
echo "Entrez le Troisième note : <input $nbr3></input> <br> <p>";

$moyenne = ($nbr1 + $nbr2 + $nbr3)/3;

echo "La moyenne de votre note est ".$moyenne." <br> <p><button>Caluler la moyenne</button>";

?>