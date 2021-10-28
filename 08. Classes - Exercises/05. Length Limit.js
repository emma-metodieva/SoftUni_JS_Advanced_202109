class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    
    increase(length) {
        this.innerLength += length
    }
    
    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= length
        }
    }
    
    toString() {
        if (this.innerString.length > this.innerLength) {
            let copy = this.innerString.substring(0, this.innerLength);
            copy += '...';
            return copy
        }

        return this.innerString;
    }
}