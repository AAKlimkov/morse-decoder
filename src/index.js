const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let code = expr.split('**********')
    let result = []
    let letter
    let letter2
    for (let i = 0; i < code.length; i++) {

        for (let j = 0; j < code[i].length/10; j++) {
            letter = code[i].substr(j*10,10).replace(/00+/,'').replace(/11/,'-').replace(/11/,'-').replace(/11/,'-').replace(/11/,'-').replace(/11/,'-').replace(/10/,'.').replace(/10/,'.').replace(/10/,'.').replace(/10/,'.').replace(/10/,'.').replace(/10/,'.')
            letter2 = MORSE_TABLE[letter]
            result.push(letter2)
        }
result.push(' ')
    }
   return result.join('').trim()
}

module.exports = {
    decode
}