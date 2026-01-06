let nb = 42;
let number = parseInt(window.prompt("Devine le nombre (entre 0 et 100)"));

while (number !== nb) {
    if (number < nb) {
        window.alert("C'est plus");
    } else if (number > nb) {
        window.alert("C'est moins");
    }

    number = parseInt(window.prompt("Essaie encore"));
}

window.alert("Bravo, tu as gagné !");