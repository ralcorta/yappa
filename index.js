let words = ['cat', 'arrange', 'medium']
let letters = ['t', 'r', 'a', 'c', 'a', 'r', 'n', 'e', 'g']

function makeWordStructurre(word) {
    const struct = {};
    for (const l of word) {
        if (struct[l])
            struct[l]++;
        else
            struct[l] = 1;
    }
    return struct;
}

function wordsCanBeWritten(words, letters) {
    const result = [];

    const wordsArrayStruct = words.map(makeWordStructurre);
    const lettersStruct = makeWordStructurre(letters);

    for (let i = 0; i < wordsArrayStruct.length; i++) {
        let flag = true;
        for (const prop in wordsArrayStruct[i]) {
            if (!lettersStruct[prop] || lettersStruct[prop] < wordsArrayStruct[i][prop])
                flag = false;
        }
        if (flag)
            result.push(words[i]);
    }

    return result;
}

console.log(wordsCanBeWritten(words, letters));

// output = ['cat', 'arrange']
