class Singleton {
    constructor() {
        this.value = 1
    }

    initialize() {
        this.value += 1;
    }

    getValue() {
        return this.value;
    }
}

const singleton = new Singleton();

module.exports = singleton;