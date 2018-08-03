

let health = 100

let fighterName = 'Italion Stallion'

let hits = 0

// function assignName() {
//     document.getElementById("player-name").innerText = fighterName;
// }
// assignName()

let weapons = {

    chair: {
        name: "Chair",
        modifier: 1,
        description: "Have a seat!!"
    },

    chain: {
        name: "Chain",
        modifier: 3,
        description: "Bring the pain!!"
    },

    lightSaber: {
        name: "Light Saber",
        modifier: 6,
        description: "Han shot first!!"
    }
}

let italionStallion = {
    health: 100,
    name: "Italian Stallion",
    items: []
}

let sugarRay = {
    health: 120,
    name: "Sugar Ray",
    items: []
}

function slap() {
    health--;
    update()
}

function punch() {
    health -= 5;
    update()
}

function kick() {
    health -= 10;
    update()
}

function update() {
    hits++;
    document.getElementById("health").innerText = health;
    document.getElementById("hits").innerText = hits
}

// function update() {
//     // document.getElementById("health").innerText = health;

// }