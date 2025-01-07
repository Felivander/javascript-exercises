const repeatString = function(word, number) {
    if (number < 0) {
        return 'ERROR'
    }
    let outputString = '';
    for (let i = 0; i < number; i++) {
        outputString += word;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
