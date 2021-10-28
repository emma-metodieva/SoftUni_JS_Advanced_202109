class Hex {
    constructor(value) {
        this._value = Number(value)
    }

    valueOf () {
        return this._value
    }

    toString () {
        return `0x${(this._value.toString(16)).toUpperCase()}`
    }

    plus (number) {
        let result = this._value + Number(number.valueOf());
        return new Hex(result)
    }

    minus (number) {
        let result = this._value - Number(number.valueOf());
        return new Hex(result)
    }

    parse (text) {
        return parseInt(text, 16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 === 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
