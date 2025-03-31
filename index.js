//1
const nameUser = "Az";
const ageUser = 18;
let cityUser = "Grenoble";

//2
cityUser = "Lyon";

//3
let user = {
    name: nameUser,
    age: ageUser,
    city: cityUser
}

//4
user.city = "Annecy";

//5
user.email = "dsflf@dsfsd.com";

//6
user.friends = ["Jeanne", "Fred", "Greg", "Martha"];

//7
(user.friends).splice(1, 1);
(user.friends).push("Christopher");
user.friends[2] = "Antoine";

//8
(user.friends).forEach(friend => {
    console.log(friend)
});

//9
if (user.age < 18) {
    console.log("Mineur");
} else {
    console.log("Adulte");
}

//10
//a
function saluerUtilisateur(name) {
    console.log("Bienvenue " + name + " !");
}

//b
function calculerAnneeNaissance(age) {
    console.log(2025 - age);
}

//c
function verifierMajorite(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}

//d
function afficherProfil(userObject) {
    saluerUtilisateur(user.name);
    console.log(" Vous avez " + userObject.age + " ans et êtes né.e en ");
    calculerAnneeNaissance(user.age);
    console.log("Vous habitez à " + userObject.city + "\n Vos amis sont:");
    (user.friends).forEach(friend => {
        console.log(friend)
    });
}

//e
function ajouterAmi(userObject, ami) {
    (userObject.friends).push(ami);
}

function supprimerAmi(userObject, ami) {
    if ((userObject.friends).includes(ami)) {
        (userObject.friends).splice((userObject.friends).indexOf(ami), 1);
    }
}






