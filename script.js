let step = 0;

function showNextScreen() {
    step++;

    if (step === 1) {
        document.getElementById("container").innerHTML = `
            <h2>I hope you have a wonderful day!</h2>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Next</button>
        `;
    } 
    else if (step === 2) {
        document.getElementById("container").innerHTML = `
            <h2>Would you like to play a game?</h2>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Next</button>
        `;
    } 
    else if (step === 3) {
        document.getElementById("container").innerHTML = `
            <h2>Are you sure?</h2>
            <button id="yesBtn" class="no" onclick="goBack()">No</button>
            <button id="yesBtn" class="yes" onclick="showNextScreen()">Yes</button>
        `;
    } 
    else if (step === 4) {
        document.getElementById("container").innerHTML = `
            <h2>Let's Goooo!</h2>
            <button id="yesBtn" class="yes" onclick="playGame()">Next</button>
        `;
    } 
    else if (step === 5) {
        document.getElementById("container").innerHTML = `
            <h2>Will you be my girlfriend?</h2>
            <img id="loveImage" src="love1-removebg-preview.png" alt="Love Image" style="display: block; width: 150px;">
            <button id="yesBtn" class="yes" onclick="showLoveMessage()">Yes</button>
            <button class="no" onclick="increaseYesSize()">No</button>
            
        `;
    }
}

function increaseYesSize() {
    let yesButton = document.getElementById("yesBtn");
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 5) + "px";
    yesButton.style.padding = (currentSize + 5) + "px";
}

function showLoveMessage() {
    document.getElementById("container").innerHTML = `
        <h2>Thank You for coming into my life.</h2>
        <img id="loveImage" src="love1-removebg-preview.png" alt="Love Image" style="display: block; width: 150px;">
        <h2>❤️ I love you so much! ❤️</h2>
    `;
}

function playGame() {
    document.getElementById("container").innerHTML = `
        <h2>Are you ready?</h2>
        <button id="yesBtn" class="yes" onclick="showNextScreen()">Next</button>
    `;
}

function goBack() {
    if (step > 0) {
        step--;
        showNextScreen();
    }
}
