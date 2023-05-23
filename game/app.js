const gameDiv = document.getElementById("game");
const firstPerson = document.getElementById("first_person");
const secondPerson = document.getElementById("second_person");


document.addEventListener("keydown", firstPersonMove);

var charLeftAdd = 0;
function firstPersonMove(e) {
    let keyPress = e.code;
    console.log(keyPress)
    if (keyPress === 'KeyD') {
        console.log(keyPress)
        charLeftAdd += 10;
        firstPerson.style.left = charLeftAdd + 'px';
        if (charLeftAdd >= 700) {
            charLeftAdd -= 10
        }
    }
    if (keyPress === 'KeyA') {
        console.log(keyPress)
        charLeftAdd -= 10;
        firstPerson.style.left = charLeftAdd + 'px'
        if (charLeftAdd <= 2) {
            charLeftAdd += 10
        }
    }
}

document.addEventListener('keydown', firstPersonFight)

var a = false;
function firstPersonFight(e) {
    let keyPress = e.code;
    if (keyPress === "KeyS") {
        firstPerson.src = 'image/andy fight 1.gif'
        a = true;
    } else if (keyPress === "KeyW") {
        firstPerson.src = 'image/andy fight 2.gif'
        a = true;
     }
    else {
        firstPerson.src = 'image/andy-bogard-kofxiii-sprite.gif'
        a = false;

    }
}

document.addEventListener('keydown', secondPersonMove)
var charRightAdd = 0;
function secondPersonMove(e) {
    let keyPress = e.code;
    console.log(keyPress)
    if (keyPress === 'ArrowLeft') {
        console.log(keyPress)
        charRightAdd += 10;
        secondPerson.style.right = charRightAdd + 'px';
        if (charRightAdd >= 700) {
            charRightAdd -= 10
        }
    }
    if (keyPress === 'ArrowRight') {
        console.log(keyPress)
        charRightAdd -= 10;
        secondPerson.style.right = charRightAdd + 'px'
        if (charRightAdd <= 2) {
            charRightAdd += 10;
        }
    }
}


document.addEventListener('keydown', secondPersonFight)

var a = false;
function secondPersonFight(e) {
    let keyPress = e.code;
    if (keyPress === "ArrowUp") {
        secondPerson.src = 'image/adon fight 1.gif'
        a = true;
    } else if (keyPress === "ArrowDown") {
        secondPerson.src = 'image/adon  fight 2.gif'
        a = true;
     }
    else {
        secondPerson.src = 'image/adon-ultra-sf4-stance.gif'
        a = false;

    }
}


