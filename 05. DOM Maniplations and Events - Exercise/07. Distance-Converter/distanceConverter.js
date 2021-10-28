function attachEventsListeners() {
    const button = document.getElementById('convert');
    button.addEventListener('click', convert);

    function convert() {
        const input = Number(document.getElementById('inputDistance').value);
        const inputUnits = document.getElementById('inputUnits').value;
        const outputUnits = document.getElementById('outputUnits').value;

        let distanceM = 0;
        if (inputUnits === 'km') {
            distanceM = input * 1000
        } else if (inputUnits === 'm') {
            distanceM = input
        } else if (inputUnits === 'cm') {
            distanceM = input * 0.01
        } else if (inputUnits === 'mm') {
            distanceM = input * 0.001
        } else if (inputUnits === 'mi') {
            distanceM = input * 1609.34
        } else if (inputUnits === 'yrd') {
            distanceM = input * 0.9144
        } else if (inputUnits === 'ft') {
            distanceM = input * 0.3048
        } else if (inputUnits === 'in') {
            distanceM = input * 0.0254
        }

        let output = 0;
        if (outputUnits === 'km') {
            output = distanceM / 1000
        } else if (outputUnits === 'm') {
            output = distanceM
        } else if (outputUnits === 'cm') {
            output = distanceM / 0.01
        } else if (outputUnits === 'mm') {
            output = distanceM / 0.001
        } else if (outputUnits === 'mi') {
            output = distanceM / 1609.34
        } else if (outputUnits === 'yrd') {
            output = distanceM / 0.9144
        } else if (outputUnits === 'ft') {
            output = distanceM / 0.3048
        } else if (outputUnits === 'in') {
            output = distanceM / 0.0254
        }

        document.getElementById('outputDistance').value = output
    }
}