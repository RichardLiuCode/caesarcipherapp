const codeArea = ace.edit("sourceCodeDisplay");
codeArea.setTheme("ace/theme/chrome");
codeArea.session.setMode("ace/mode/javascript");
codeArea.setFontSize(12);
codeArea.setReadOnly(true);

fetch("./source-code.js")
    .then(function (response) {
        return response.text()
    }).then(function (code) {
        codeArea.session.setValue(code)
    })