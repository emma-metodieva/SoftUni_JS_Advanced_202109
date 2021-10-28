function encodeAndDecodeMessages() {
    const encodeButton = [...document.querySelectorAll('button')]
        .find(b => b.textContent.includes('Encode'));
    encodeButton.addEventListener('click', encode);

    const decodeButton = [...document.querySelectorAll('button')]
        .find(b => b.textContent.includes('Decode'));
    decodeButton.addEventListener('click', decode);

    function encode() {
        const message = document.querySelectorAll('textarea')[0].value;
        const converted = message
            .split('')
            .map(x => x.charCodeAt(0))
            .map(y => String.fromCharCode(y+1))
            .join('');

        document.querySelectorAll('textarea')[0].value = '';
        document.querySelectorAll('textarea')[1].value = converted;
    }

    function decode() {
        const message = document.querySelectorAll('textarea')[1].value;
        const converted = message
            .split('')
            .map(x => x.charCodeAt(0))
            .map(y => String.fromCharCode(y-1))
            .join('');

        document.querySelectorAll('textarea')[1].value = converted;
    }
}