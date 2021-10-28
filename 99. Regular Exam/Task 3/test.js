const { assert } = require('chai');
const { library } = require('./library');

describe('Test library', () => {
    describe('Test calcPriceOfBook functionality', () => {
        it('returns as expected for books after 1980 (regular price)', () => {
            assert.equal(library.calcPriceOfBook('Test', 1981), "Price of Test is 20.00");
            assert.equal(library.calcPriceOfBook('Test2', 2021), "Price of Test2 is 20.00");
        });

        it('returns as expected for books before 1980 (discounted price)', () => {
            assert.equal(library.calcPriceOfBook('Test', 1980), "Price of Test is 10.00");
            assert.equal(library.calcPriceOfBook('Test2', 1979), "Price of Test2 is 10.00");
        });

        it ('throws an error for invalid inputs (1st argument)', () => {
            assert.throws(() => library.calcPriceOfBook(1981, 1981), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook([], 1981), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook({}, 1981), 'Invalid input');
        });

        it ('throws an error for invalid inputs (2nd argument)', () => {
            assert.throws(() => library.calcPriceOfBook('Test', '1981'), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook('Test', []), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook('Test', {}), 'Invalid input');
        });


        it ('throws an error for invalid inputs (both arguments)', () => {
            assert.throws(() => library.calcPriceOfBook(1981, '1981'), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook(1981, []), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook(1981, {}), 'Invalid input');

            assert.throws(() => library.calcPriceOfBook([], '1981'), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook([], []), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook([], {}), 'Invalid input');

            assert.throws(() => library.calcPriceOfBook({}, '1981'), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook({}, []), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook({}, {}), 'Invalid input');
        });

        it ('throws an error for invalid inputs (missing argument(s))', () => {
            assert.throws(() => library.calcPriceOfBook('Test'), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook(), 'Invalid input');

        });
    });

    describe('Test findBook functionality', () => {
        it('returns as expected for book that is found', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],"Troy" ),
                "We found the book you want.");
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],"Life Style" ),
                "We found the book you want.");
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],"Torronto" ),
                "We found the book you want.");
        });

        it('returns as expected for book that is not found', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],"Test" ),
                "The book you are looking for is not here!");
        });

        it('throws an error if there are no books in the library', () => {
            assert.throws(() => library.findBook([],"Test" ),
                "No books currently available");
            assert.throws(() => library.findBook([],"" ),
                "No books currently available");
        });
    });

    describe('Test arrangeTheBooks functionality', () => {
        it('returns as expected for arranged books', () => {
            assert.equal(library.arrangeTheBooks(1), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(5), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
        });

        it('returns as expected for not arranged books', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
            assert.equal(library.arrangeTheBooks(50), 'Insufficient space, more shelves need to be purchased.');
        });

        it('throws an error for invalid input', () => {
            assert.throws(() => library.arrangeTheBooks(1.1), 'Invalid input');
            assert.throws(() => library.arrangeTheBooks(-1), 'Invalid input');
            assert.throws(() => library.arrangeTheBooks('1'), 'Invalid input');
            assert.throws(() => library.arrangeTheBooks([]), 'Invalid input');
            assert.throws(() => library.arrangeTheBooks({}), 'Invalid input');
            });
    });
});