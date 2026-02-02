function caesarCipher(message, shift) {
    var originalOrderUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var originalOrderLow = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    var foundFlag = false;
    for (var i = 0; i < message.length; i++) {
        foundFlag = false;
        for (var j = 0; j < originalOrderUp.length; j++) {
            if (message[i] == originalOrderUp[j]) {
                result = result + originalOrderUp[(j + shift) % 26];
                foundFlag = true;
            }
        }
        for (var k = 0; k < originalOrderLow.length; k++) {
            if (message[i] == originalOrderLow[k]) {
                result = result + originalOrderLow[(k + shift) % 26];
                foundFlag = true;
            }
        }
        if (foundFlag == false) {
            result = result + message[i];
        }
    }
    return result;
}
function filterHTML(input) {
    input = input.replace(/</g, "&lt");
    input = input.replace(/>/g, "&gt");
    return input;
}
innerHTML("shiftInputContainer", "<input id=\"text_input2\" type=\"number\" placeHolder=\"Shift\" style=\"width:100px;height:30px;margin:0px;top:0;left:0;position:absolute;background-color:white;border-radius:0px;border-width:1px;border-color:rgb(12, 243, 37);\">");
onEvent("cipher", "click", function () {
    var message = getText("text_input1");
    var shift = getNumber("text_input2");
    if (!shift || isNaN(shift)) {
        return;
    }
    var cipheredMessage = caesarCipher(message, shift);
    innerHTML("display", "<p>" + filterHTML(cipheredMessage) + "</p>");
});
setStyle("screen1", "transition:2s;top:0px;z-index:99999;display:block;");
setStyle("screen2", "transition:2s;top:450px;z-index:99999;display:block");
onEvent("button2", "click", function () {
    setStyle("screen1", "top:-450px;");
    setStyle("screen2", "top:0px;");
});
onEvent("button6", "click", function () {
    setStyle("screen1", "top:0px;");
    setStyle("screen2", "top:450px;");
});
// You can press the buttons to move the slider
onEvent("button1", "click", function () {
    setNumber("slider1", getNumber("slider1") - 1);
    crackObfuscatedMessage();
});

onEvent("button5", "click", function () {
    setNumber("slider1", getNumber("slider1") + 1);
    crackObfuscatedMessage();
});
// You can hold the button to move the slider
var beforeHoldBtn;
var moveSliderLoop;
onEvent("button1", "mousedown", function () {
    beforeHoldBtn = setTimeout(function () {
        moveSliderLoop = setInterval(function () {
            setNumber("slider1", getNumber("slider1") - 1);
            crackObfuscatedMessage();
        }, 150);
    }, 400);
});
onEvent("button5", "mousedown", function () {
    beforeHoldBtn = setTimeout(function () {
        moveSliderLoop = setInterval(function () {
            setNumber("slider1", getNumber("slider1") + 1);
            crackObfuscatedMessage();
        }, 150);
    }, 400);
});
onEvent("button5", "mouseup", clearHoldBtn);
onEvent("button1", "mouseup", clearHoldBtn);
onEvent("button5", "mouseout", clearHoldBtn);
onEvent("button1", "mouseout", clearHoldBtn);
onEvent("button5", "click", clearHoldBtn);
onEvent("button1", "click", clearHoldBtn);

function clearHoldBtn() {
    if (beforeHoldBtn) {
        clearTimeout(beforeHoldBtn);
    }
    if (moveSliderLoop) {
        clearInterval(moveSliderLoop);
    }
}
// You can drag the slider to move it
onEvent("slider1", "mousemove", crackObfuscatedMessage);

function crackObfuscatedMessage() {
    var message = getText("text_input3");
    var shift = getNumber("slider1");
    var crack = caesarCipher(message, shift);
    setText("text_area3", crack);
    setNumber("label3", getNumber("slider1"));
}
setStyle("slider1", "-webkit-appearance: none; background-color:rgb(26, 188, 156);width:200px;height:4px;border-style:solid;border-width:1px;border-color:rgb(12, 243, 37);cursor:pointer;");
setStyle("display", "overflow-y:auto;cursor:text;");