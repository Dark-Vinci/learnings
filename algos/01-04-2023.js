// find the field with most ocuurence ex ['a', 'b', 'c', 'A', 'a', 'B'] => a

function findMaxString(arr) {
    const maps = arr.reduce((accumulator, value) => {
        const currentCount = accumulator[value.toLowerCase()] ?? 0;

        return {
            ...accumulator,
            [value.toLowerCase()]: currentCount + 1,
        }
    }, {});

    let maxValue = 0;

    Object.values(maps).forEach(el => {
        if (el > maxValue) {
            maxValue = el;
        }
    });


    for (let [key, value] of Object.entries(maps)) {
        if (value == maxValue) {
            return key;
        }
    }
}

const arr = ['a', 'b', 'c', 'A', 'a', 'B'];

console.log({and: findMaxString(arr) })