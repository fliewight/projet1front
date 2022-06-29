"use strict";

function display() {
    let text = document.getElementById("text");
    document.getElementById("first").style.display = "none";
    text.innerHTML = "Votre commande a été prise en compte";
    text.style.color = "#32B0A9";
    text.style.fontWeight = "bold";
    text.style.fontSize = "18px";
}

function youtube() {
    let youtube = document.getElementById("youtube");
    let image1 = document.getElementById("image1");
    youtube.style.display = 'none';
    image1.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

let i = 5;
function addOneYear() {
    i++;
    let year = document.getElementById('year');
    year.innerHTML = "<i>depuis "+ i +" ans.</i>";
}

function nbAlea() {
    let commands = document.querySelector("#commands");
    let consumers = document.querySelector("#consumers");
    let chiefs = document.querySelector("#chiefs");

    let nb1 = Math.round(Math.random() * 99999) + 1;
    let nb2 = Math.round(Math.random() * 99999) + 1;
    let nb3 = Math.round(Math.random() * 99999) + 1;

    commands.innerHTML = nb1 + "+";
    consumers.innerHTML = nb2 + "+";
    chiefs.innerHTML = nb3 + "+";
}

function verifEmail() {
    let email = document.querySelector("#email");

    if (email.value != '' && email.value != null) {
        document.querySelector("#newsletter").innerHTML = 'Merci EMAIL';
    }
}