function extract(content) {
    let result = '';

    const text = document.getElementById(content).textContent;
    const pattern = /\((.+?)\)/g;

    let match = pattern.exec(text);
    while (match != null) {
        result += match[1];
        result += '; ';
        match = pattern.exec(text);
    }

    return result;
}