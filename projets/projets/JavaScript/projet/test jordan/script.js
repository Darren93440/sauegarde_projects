//je veux une zone de texte ou il ecrit son prenom et son age
//quand on clique ok 18 sa passe la page suivante si moins de 18 ans
//tu cree une alerte.

function is_majeur(age) 
{   
    if(age >= 18)
    {
        console.log("true");
        return true;
    }
    else
    {
        console.log("false");
        return false;
    }
}

function validerBouton()
{
    // 1 - aller chercher la valeur dans nom 
    var nom = document.getElementById("name").value;
    console.log(nom);
    
    
    // 2 - aller chercher la valeur dans age
    var ages = document.getElementById("age").value;
    console.log(ages);
    
    // 3 - appeler la fonction qui dit si c'est majeur
    var est_il_majeur = is_majeur(ages);
    
    if (est_il_majeur == false){
        alert("Attention monsieur " + nom + " veuiller quitter");
    }
    else{
        afficher_image()
    }
}

    // 4 - s

//function appeler(age) 
//{
//    var ages = document.getElementById("age").value;        
//    var age = ages;
//    
//    if(age >= 18)
//    {
//        console.log("true");
//        return true;
//    }
//    else
//    {
//        console.log("false");
//        return alert("ATTENTION MINEUR VEUILLER QUITTER");
//    }
//}



// creation du bouton avec un text 'valider'
//var bouton = document.createElement("BUTTON");
//var contenue = document.createTextNode("valider");
//bouton.appendChild(contenue);
//
//// ajout du bouton dans l'endroit que je veux c'est a dire madiv1
//var div_cible = document.getElementById("madiv1");
//div_cible.appendChild(bouton);
//
//bouton.addEventListener('click', validerBouton);



//recuperermon bouton a partir du html
var btn = document.querySelector("button");

btn.addEventListener('click', validerBouton);


