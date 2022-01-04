

let form = document.querySelector(".formQuizz");
let tableauResultats = [];
const reponse = ["a", "b", "c", "c", "a"];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector(".resultats h2");
const noteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".questionBlock");
let verifTableau = [];

// créer un événement sur le bouton, pour stocker les informations du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); //pour enlever les paramètres par défault qui envoie sur une autre page
    // console.log(document.querySelector('input[name="q1"]:checked').value);
    // boucle pour mettre les valeurs de chaque réponse dans un tableau déjà créé
    for(i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    console.log(tableauResultats);
    verification(tableauResultats);
    tableauResultats = []; //vider tableau après chaque utilisation
})


    // fonction qu'on créé pour comparer un tableau résultats avec un tableau bonnes réponses
    let verification = function (x) {

    for(let a = 0; a < 5; a++){

        if(x[a] === reponse[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }
    console.log(verifTableau);
    afficherResultats(verifTableau);
    verifTableau = []; //vider tableau après chaque utilisation
}

// fonction pour compter le nombre de false (et de true) dans le tableau
function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);

    switch(nbDeFautes) {

        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';

    }

}







