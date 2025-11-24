class Pokemon {
    static allPokemon = []
    #health = 100
    #level = 1
    constructor(name, type) {
        this.name = name
        this.type = type
        Pokemon.allPokemon.push(this)
    }
    get health() {
        return this.#health
    }
    get level() {
        return this.#level
    }
    levelUp() {
        this.#level++
        this.#health += 10
        console.log(`${this.name} leveled up to level ${this.#level}!`)
    }
    isFainted() {
        if (this.#health <= 0) {
            return true.mnnnnn
        } else {
            return false
        }
    }
    attack(targetPokemon) {
        targetPokemon.#health -= 10 * this.#level
        console.log(`${this.name} attacked ${targetPokemon}!`)
    }
    static getTotalPokemon() {
        return Pokemon.allPokemon.length
    }
    static findByName(name) {
        return Pokemon.allPokemon.find(pokemon => pokemon.name === name)
    }

}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Pokemon };
