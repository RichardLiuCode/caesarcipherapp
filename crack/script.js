document.getElementById("crack").addEventListener("click", function () {
    if (document.getElementById("input").value) {
        document.getElementById("displayList").innerHTML = "";
        const input = document.getElementById("input").value;
        const crack = CaesarCipher.crack(input);
        for (let i in crack) {
            let listItem = document.createElement("li");
            listItem.style = "margin-bottom:10px;font-size:16px;"
            listItem.textContent = crack[i];
            document.getElementById("displayList").appendChild(listItem);
        }
    }
});