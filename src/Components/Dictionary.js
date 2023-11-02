let Dictionary = [
    "boodle",
    "Boraginaceae",
    "Borago",
    "geometrician",
    "geophysicist",
    "Geothlypis",
    "gesture",
    "Cycliophora",
    "cycloidal",
    "cymling",
    "cyrilla",
    "dabbled",
    "daddy",
    "Dagon",
    "daggerboard",
    "daisy",
    "Dakota",
    "incontinent",
    "inconvertibility",
    "inculpatory",
    "infrasonic",
    "Porcellio",
    "populous",
    "Poronotus",
    "portly",
    "positioning",
    "pounce",
    "styleless",
    "stylised",
    "suasible",
    "suavity",
    "zygotic",
    "Zygomycotina",
];

function Wordrandomiser() {
    return Dictionary[Math.floor(Math.random() * Dictionary.length)];
}

export { Wordrandomiser };