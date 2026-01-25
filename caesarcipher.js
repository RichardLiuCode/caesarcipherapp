function CaesarCipher({ input, shift }) {
    const originalOrderUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const originalOrderLow = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let foundFlag = false;
    for (let i = 0; i < input.length; i++) {
        foundFlag = false;
        for (let j = 0; j < originalOrderUp.length; j++) {
            if (input[i] == originalOrderUp[j]) {
                result = result + originalOrderUp[(j + shift) % 26];
                foundFlag = true;
            }
        }
        for (let k = 0; k < originalOrderLow.length; k++) {
            if (input[i] == originalOrderLow[k]) {
                result = result + originalOrderLow[(k + shift) % 26];
                foundFlag = true;
            }
        }
        if (foundFlag == false) {
            result = result + input[i];
        }
    }
    this.result = result;
}

CaesarCipher.deCipher = function (encryptedText, shifted) {
    let decipher = new CaesarCipher({
        "input": encryptedText,
        "shift": (shifted * -1) + 26
    });
    return decipher.result;
}

CaesarCipher.crack = function (encryptedText) {
    let allShifts = []
    for (let i = 0; i < 26; i++) {
        let shift = new CaesarCipher({
            "input": encryptedText,
            "shift": i
        });
        allShifts.push(shift.result)
    }
    return allShifts
}