function noDuplicate(array) {
    let unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }

    return unique;
}

const biriyaniKhor = ['Abul', 'Babul', 'Bulbul', 'Dabul', 'Bulbul', 'Habul', 'Abul', 'Jabul', 'Dabul'];
const output = noDuplicate(biriyaniKhor);
console.log(output);
