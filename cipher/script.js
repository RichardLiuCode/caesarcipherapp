document.getElementById("cipher").addEventListener("click", function () {
    const input = document.getElementById("input").value;
    const shift = parseFloat(document.getElementById("shift").value);
    const cipher = new CaesarCipher({
        "input": input,
        "shift": shift
    });
    document.getElementById("display").value = cipher.result;
})