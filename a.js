const animal = {
    eats: true,
    walk: function() {
        console.log("Animal is walking");        
    }
}

const rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(Object.getPrototypeOf(rabbit) === animal);