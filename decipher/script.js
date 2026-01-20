document.getElementById("decipher").addEventListener("click", function () {
    const input = document.getElementById("input").value;
    const shift = parseFloat(document.getElementById("shift").value);
    let decipher = CaesarCipher.deCipher(input, shift);
    document.getElementById("display").value = decipher;
});