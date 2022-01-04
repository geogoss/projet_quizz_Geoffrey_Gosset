

let form = document.querySelector(".formQuizz");
let tableauResultats = [];
const reponse = ["a", "b", "c", "c", "a"];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector(".resultats h2");
const noteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".questionBlock");
let verifTableau = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    console.log(tableauResultats);
    verification(tableauResultats);
    tableauResultats = [];
})

let verification = function (x) {

    for(let a = 0; a < 5; a++){

        if(x[a] === reponse[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }
    console.log(verifTableau);
}

