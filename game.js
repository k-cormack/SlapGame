let health = 100

function slap(){
    health--;
    document.getElementById("health").innerText = health;
}

function punch() {
    health -= 5;
    document.getElementById("health").innerText = health;
}

function kick() {
    health -= 10;
    document.getElementById("health").innerText = health;
}

// function update() {
//     // document.getElementById("health").innerText = health;

// }