/* 
2.	Conversion de température : 
Écrivez un programme qui convertit une température donnée en degrés
 Celsius en Fahrenheit ou vice versa, en demandant à l'utilisateur de 
 choisir l'unité de départ et l'unité de destination.
*/

function conversionUnite(depart, destination, tmpdprt){
    let tmpdesti = 0;
    if (depart == "C" && destination == "F"){
        tmpdesti = (tmpdprt * 9/5) + 32;
        console.log(tmpdprt + " " + depart +" est equivalent de " + tmpdesti + " " +destination);
    }else if (depart == "F" && destination == "C"){
        tmpdesti = (tmpdprt - 32) * 5/9;
        console.log(tmpdprt + " " + depart +" est equivalent de " + tmpdesti + " " +destination);
    }else{
        console.log("Entrez unité valide, soit C ou F");
    }
};

conversionUnite("F", "C", 98.6);
