

let health = 100

let hits = 0

let multiplier = 1

// let italianStallion = new fighterType('Italian Stallion', 100, 1, 5, 10)

// let sugarRay = new fighterType('Sugar Ray', 100, 1, 5, 10)

// let fighter = italianStallion


// function assignName() {
//     document.getElementById("player-name").innerText = fighterName;
// }
// assignName()

function gameService() {

    let dataStore = this
    let target = new fighterType("Italian Stallion", 100, 1, 5, 10);

    function fighterType(name, health, slap, punch, kick) {
        this.name = name
        this.health = health
        this.blows = {
            "slap": slap,
            "punch": punch,
            "kick": kick
        };
        this.items = []
        this.hits = 0
    };


    function weapon(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    }
};


// let weaponType = {
//     chair: new weapon("Chair", 1.5, "Have a seat!!"),
//     chain: new weapon("Chain", 2, "Bring the pain!!"),
//     lightSaber: new weapon("Light Saber", 3, "Han shot first!!")
// }


// let checkedWeapon = document.getElementsByTagName('input').values

// let weaponValue;
// for (var i = 0, i < checkedWeapon.length; i++) {
//     if (checkedWeapon[i].type === 'radio' && checkedWeapon[i].checked) {
//         weaponValue = checkedWeapon[i].weaponValue;
//     }
// }

// var radios = document.getElementsByTagName('input');
// var value;
// for (var i = 0; i < radios.length; i++) {
//     if (radios[i].type === 'radio' && radios[i].checked) {
//         value = radios[i].value;       
//     }
// }



function slap() {
    multiplierFunction();
    health = health - 1 - multiplier;
    update()
}

function punch() {
    multiplierFunction();
    health = health - 5 - multiplier;
    update()
}

function kick() {
    multiplierFunction();
    health = health - 10 - multiplier;
    update()
}

function update() {
    hits++;
    if (health <= 0) {
        health = 0
    }
    document.getElementById("health").innerText = health.toString()
    document.getElementById("hits").innerText = hits.toString()
}

function clearRadio() {
    var clear = document.getElementsByName("weapon-group");
    for (var i = 0; i < clear.length; i++) {
        clear[i].checked = false; //I have NO IDEA why this is red-squiggled - had to assign "checked : false" to each element in HTML
    }
}
//     var clearRadio = document.getElementsByTagName('input');
//     // var clearRadio = document.getElementById('chair-box')
//     for (var i = 0; i < clearRadio.length; i++) {
//         if (clearRadio[i].type == 'checkbox') {
//             clearRadio[i].checked = false;
//         }
//     }

function reset() {
    health = 100;
    hits = 0;
    multiplier = 0;
    document.getElementById('health').innerText = health.toString();
    document.getElementById("hits").innerText = hits.toString();
    document.getElementById("description").innerText = "";
    clearRadio()

}
function multiplierFunction() {
    let chair = document.getElementById("radio-chair").checked; //Why the red-squiggly? It works.....

    let chain = document.getElementById("radio-chain").checked;

    let lightSaber = document.getElementById("radio-lightsaber").checked;

    if (chair == true) {
        multiplier = 1.5;
        document.getElementById("description").innerText = "Have a seat!!"
    }
    else if (chain == true) {
        multiplier = 2
        document.getElementById("description").innerText = "Chain bringin' the pain!"
    }

    else if (lightSaber == true) {
        multiplier = 3
        document.getElementById("description").innerText = "Han shot first!!!!"
    }

    else {
        multiplier = 0;
        document.getElementById("description").innerText = "Bare knuckle brawlin'!!"
    }
}


