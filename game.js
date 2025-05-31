const elements = [
    { atomic: 1, symbol: "H", name: "Hydrogen", group: "non-metal" },
    { atomic: 2, symbol: "He", name: "Helium", group: "noble-gas" },
    { atomic: 3, symbol: "Li", name: "Lithium", group: "metal" },
    { atomic: 4, symbol: "Be", name: "Beryllium", group: "metal" },
    { atomic: 5, symbol: "B", name: "Boron", group: "metalloid" },
    { atomic: 6, symbol: "C", name: "Carbon", group: "non-metal" },
    { atomic: 7, symbol: "N", name: "Nitrogen", group: "non-metal" },
    { atomic: 8, symbol: "O", name: "Oxygen", group: "non-metal" },
    { atomic: 9, symbol: "F", name: "Fluorine", group: "non-metal" },
    { atomic: 10, symbol: "Ne", name: "Neon", group: "noble-gas" },
    { atomic: 11, symbol: "Na", name: "Sodium", group: "metal" },
    { atomic: 12, symbol: "Mg", name: "Magnesium", group: "metal" },
    { atomic: 13, symbol: "Al", name: "Aluminum", group: "metal" },
    { atomic: 14, symbol: "Si", name: "Silicon", group: "metalloid" },
    { atomic: 15, symbol: "P", name: "Phosphorus", group: "non-metal" },
    { atomic: 16, symbol: "S", name: "Sulfur", group: "non-metal" },
    { atomic: 17, symbol: "Cl", name: "Chlorine", group: "non-metal" },
    { atomic: 18, symbol: "Ar", name: "Argon", group: "noble-gas" },
    { atomic: 19, symbol: "K", name: "Potassium", group: "metal" },
    { atomic: 20, symbol: "Ca", name: "Calcium", group: "metal" }
];

const levelConfig = [
    { elements: [1, 3, 4, 11, 12, 13, 19, 20], group: "metal", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [1, 3, 4, 11, 12, 13, 19, 20], group: "metal", decoys: 2, hideAtomic: false, mode: "symbol", time: 110, grid: "4x2" },
    { elements: [1, 3, 4, 11, 12, 13, 19, 20], group: "metal", decoys: 3, hideAtomic: true, mode: "name", time: 100, grid: "4x2" },
    { elements: [6, 7, 8, 9, 15, 16, 17], group: "non-metal", decoys: 0, hideAtomic: false, mode: "mixed", time: 110, grid: "4x2" },
    { elements: [6, 7, 8, 9, 15, 16, 17], group: "non-metal", decoys: 2, hideAtomic: false, mode: "symbol", time: 100, grid: "4x2" },
    { elements: [6, 7, 8, 9, 15, 16, 17], group: "non-metal", decoys: 3, hideAtomic: true, mode: "name", time: 90, grid: "4x2" },
    { elements: [5, 14], group: "metalloid", decoys: 2, hideAtomic: false, mode: "mixed", time: 80, grid: "2x1" },
    { elements: [5, 14], group: "metalloid", decoys: 3, hideAtomic: true, mode: "symbol", time: 70, grid: "2x1" },
    { elements: [2, 10, 18], group: "noble-gas", decoys: 0, hideAtomic: false, mode: "mixed", time: 90, grid: "3x1" },
    { elements: [2, 10, 18], group: "noble-gas", decoys: 2, hideAtomic: true, mode: "name", time: 80, grid: "3x1" },
    { elements: [1, 3, 4, 11, 12], group: "metal", decoys: 2, hideAtomic: false, mode: "mixed", time: 100, grid: "3x2" },
    { elements: [1, 3, 4, 11, 12], group: "metal", decoys: 3, hideAtomic: true, mode: "symbol", time: 90, grid: "3x2" },
    { elements: [6, 7, 8, 9], group: "non-metal", decoys: 2, hideAtomic: false, mode: "mixed", time: 90, grid: "2x2" },
    { elements: [6, 7, 8, 9], group: "non-metal", decoys: 3, hideAtomic: true, mode: "name", time: 80, grid: "2x2" },
    { elements: [5, 14], group: "metalloid", decoys: 2, hideAtomic: false, mode: "symbol", time: 70, grid: "2x1" },
    { elements: [2, 10, 18], group: "noble-gas", decoys: 2, hideAtomic: false, mode: "mixed", time: 80, grid: "3x1" },
    { elements: [1, 3, 4, 11, 12, 13, 19, 20, 6, 7], group: "metal-non-metal", decoys: 3, hideAtomic: false, mode: "mixed", time: 130, grid: "5x2" },
    { elements: [1, 3, 4, 11, 12, 13, 19, 20, 6, 7], group: "metal-non-metal", decoys: 4, hideAtomic: true, mode: "symbol", time: 120, grid: "5x2" },
    { elements: [5, 14, 6, 7, 8, 9], group: "metalloid-non-metal", decoys: 3, hideAtomic: false, mode: "mixed", time: 110, grid: "3x2" },
    { elements: [5, 14, 6, 7, 8, 9], group: "metalloid-non-metal", decoys: 4, hideAtomic: true, mode: "name", time: 100, grid: "3x2" },
    { elements: [2, 10, 18, 1, 3], group: "noble-metal", decoys: 3, hideAtomic: false, mode: "mixed", time: 100, grid: "3x2" },
    { elements: [2, 10, 18, 1, 3], group: "noble-metal", decoys: 4, hideAtomic: true, mode: "symbol", time: 90, grid: "3x2" },
    { elements: [6, 7, 8, 9, 15, 16, 17, 5, 14], group: "non-metal-metalloid", decoys: 3, hideAtomic: false, mode: "mixed", time: 120, grid: "3x3" },
    { elements: [6, 7, 8, 9, 15, 16, 17, 5, 14], group: "non-metal-metalloid", decoys: 4, hideAtomic: true, mode: "name", time: 110, grid: "3x3" },
    { elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], group: "infinite", decoys: 0, hideAtomic: true, mode: "mixed", time: 150, grid: "5x4", infinite: true }
];

let currentLevel = parseInt(getCookie("highestLevel")) || 1;
let lives = 3;
let score = 0;
let totalScore = parseInt(getCookie("totalScore")) || 0;
let combo = 0;
let timeLeft = 120;
let gameActive = true;
let correctAttempts = 0;
let totalAttempts = 0;
let soundEnabled = getCookie("soundEnabled") !== "false";
let infiniteRound = 0;

const correctSound = new Howl({ src: ['sounds/correct.mp3'], onloaderror: () => console.log("Correct sound failed to load") });
const wrongSound = new Howl({ src: ['sounds/wrong.mp3'], onloaderror: () => console.log("Wrong sound failed to load") });
const victorySound = new Howl({ src: ['sounds/victory.mp3'], onloaderror: () => console.log("Victory sound failed to load") });

function initGame() {
    const config = levelConfig[currentLevel - 1];
    const periodicTable = document.getElementById("periodic-table");
    const cardArea = document.getElementById("card-area");
    periodicTable.innerHTML = "";
    cardArea.innerHTML = "";

    periodicTable.style.gridTemplateColumns = `repeat(${config.grid.split("x")[0]}, 1fr)`;

    let levelElements = config.infinite && infiniteRound > 0 ? getRandomElements(config.elements.length) : elements.filter(e => config.elements.includes(e.atomic));
    const decoyElements = config.infinite && infiniteRound > 0 ? getRandomDecoys(config.decoys) : elements.filter(e => !config.elements.includes(e.atomic)).slice(0, config.decoys);
    const allCards = [...levelElements, ...decoyElements].sort(() => Math.random() - 0.5);

    levelElements.forEach(element => {
        const slot = document.createElement("div");
        slot.classList.add("slot");
        slot.dataset.atomic = element.atomic;
        slot.innerHTML = config.hideAtomic ? "" : `${element.atomic} ${element.name} (${element.symbol})`;
        periodicTable.appendChild(slot);
    });

    allCards.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.draggable = true;
        card.dataset.atomic = element.atomic;
        card.textContent = config.mode === "symbol" ? `${element.atomic} ${element.name} (${element.symbol})` : config.mode === "name" ? `${element.atomic} ${element.name} (${element.symbol})` : Math.random() > 0.5 ? `${element.atomic} ${element.name} (${element.symbol})` : `${element.atomic} ${element.name} (${element.symbol})`;
        cardArea.appendChild(card);
    });

    document.querySelectorAll(".slot").forEach(slot => {
        slot.addEventListener("dragover", dragOver);
        slot.addEventListener("drop", drop);
    });

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("dragstart", dragStart);
    });

    document.getElementById("level-display").textContent = config.infinite ? `${currentLevel} (Round ${infiniteRound + 1})` : currentLevel;
    document.getElementById("max-score").textContent = config.elements.length;
    document.getElementById("score").textContent = score;
    document.getElementById("lives").textContent = "❤".repeat(lives);
    document.getElementById("accuracy").textContent = totalAttempts > 0 ? `${Math.round((correctAttempts / totalAttempts) * 100)}%` : "0%";
    document.getElementById("timer").textContent = `${Math.floor(config.time / 60)}:${(config.time % 60).toString().padStart(2, "0")}`;
    timeLeft = config.time;

    document.getElementById("hint-btn").addEventListener("click", showHint);
    document.getElementById("next-level-btn").addEventListener("click", nextLevel);
    document.getElementById("restart-btn").addEventListener("click", () => location.reload());
    document.getElementById("settings-btn").addEventListener("click", () => document.getElementById("settings-modal").style.display = "flex");
    document.getElementById("close-settings-btn").addEventListener("click", () => document.getElementById("settings-modal").style.display = "none");
    document.getElementById("sound-toggle").checked = soundEnabled;
    document.getElementById("sound-toggle").addEventListener("change", () => {
        soundEnabled = document.getElementById("sound-toggle").checked;
        setCookie("soundEnabled", soundEnabled, 365);
    });
    document.getElementById("reset-progress-btn").addEventListener("click", () => {
        setCookie("highestLevel", 1, 365);
        setCookie("totalScore", 0, 365);
        location.reload();
    });

    startTimer();
}

function dragStart(e) {
    if (!gameActive) return;
    e.dataTransfer.setData("text", e.target.dataset.atomic);
    e.target.classList.add("dragging");
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (!gameActive) return;
    const atomic = e.dataTransfer.getData("text");
    const slot = e.target;
    const card = document.querySelector(`.card[data-atomic="${atomic}"]`);
    totalAttempts++;
    if (slot.dataset.atomic === atomic) {
        slot.textContent = card.textContent;
        slot.classList.add("correct");
        card.remove();
        score++;
        correctAttempts++;
        combo++;
        totalScore += 10;
        document.getElementById("score").textContent = score;
        document.getElementById("accuracy").textContent = `${Math.round((correctAttempts / totalAttempts) * 100)}%`;
        if (soundEnabled) correctSound.play();
        if (combo >= 3) {
            score += 2;
            totalScore += 20;
            document.getElementById("score").textContent = score;
        }
        if (score >= levelConfig[currentLevel - 1].elements.length) {
            gameActive = false;
            setCookie("highestLevel", Math.max(currentLevel, parseInt(getCookie("highestLevel") || 1)), 365);
            setCookie("totalScore", totalScore, 365);
            if (soundEnabled) victorySound.play();
            const modal = document.getElementById("victory-modal");
            document.getElementById("modal-title").textContent = levelConfig[currentLevel - 1].infinite ? `Round ${infiniteRound + 1} Complete!` : `Level ${currentLevel} Complete!`;
            document.getElementById("modal-message").textContent = getLevelMessage(currentLevel);
            modal.style.display = "flex";
            document.getElementById("next-level-btn").textContent = levelConfig[currentLevel - 1].infinite ? "Next Round" : "Next Level";
            document.getElementById("next-level-btn").style.display = "inline-block";
        }
    } else {
        slot.classList.add("wrong");
        lives--;
        combo = 0;
        document.getElementById("lives").textContent = "❤".repeat(lives);
        document.getElementById("accuracy").textContent = `${Math.round((correctAttempts / totalAttempts) * 100)}%`;
        if (soundEnabled) wrongSound.play();
        setTimeout(() => slot.classList.remove("wrong"), 300);
        if (lives <= 0) {
            gameActive = false;
            document.getElementById("victory-modal").style.display = "flex";
            document.getElementById("modal-title").textContent = "Game Over!";
            document.getElementById("modal-message").textContent = "You've run out of lives. Restart to try again!";
            document.getElementById("next-level-btn").style.display = "none";
        }
    }
    card.classList.remove("dragging");
}

function showHint() {
    if (!gameActive) return;
    document.querySelectorAll(".slot").forEach(slot => {
        if (!slot.classList.contains("correct")) {
            const element = elements.find(el => el.atomic == slot.dataset.atomic);
            slot.textContent = `${element.atomic} ${element.name} (${element.symbol})`;
            setTimeout(() => {
                if (!slot.classList.contains("correct")) {
                    slot.textContent = levelConfig[currentLevel - 1].hideAtomic ? "" : `${element.atomic} ${element.name} (${element.symbol})`;
                }
            }, 5000);
        }
    });
}

function startTimer() {
    const timer = setInterval(() => {
        if (!gameActive) {
            clearInterval(timer);
            return;
        }
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("timer").textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        if (timeLeft <= 0) {
            gameActive = false;
            document.getElementById("victory-modal").style.display = "flex";
            document.getElementById("modal-title").textContent = "Time's Up!";
            document.getElementById("modal-message").textContent = "You've run out of time. Restart to try again!";
            document.getElementById("next-level-btn").style.display = "none";
            clearInterval(timer);
        }
    }, 1000);
}

function nextLevel() {
    if (levelConfig[currentLevel - 1].infinite) {
        infiniteRound++;
        score = 0;
        lives = 3;
        combo = 0;
        gameActive = true;
        levelConfig[currentLevel - 1].decoys = Math.min(levelConfig[currentLevel - 1].decoys + 1, 5);
        levelConfig[currentLevel - 1].time = Math.max(levelConfig[currentLevel - 1].time - 10, 60);
        document.getElementById("victory-modal").style.display = "none";
        initGame();
    } else if (currentLevel < 25) {
        currentLevel++;
        score = 0;
        lives = 3;
        combo = 0;
        gameActive = true;
        infiniteRound = 0;
        document.getElementById("victory-modal").style.display = "none";
        initGame();
    }
}

function getRandomElements(count) {
    const shuffled = elements.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function getRandomDecoys(count) {
    const available = elements.filter(e => !levelConfig[currentLevel - 1].elements.includes(e.atomic));
    return available.sort(() => Math.random() - 0.5).slice(0, count);
}

function getLevelMessage(level) {
    const messages = [
        "Metal Maniac!", "Metal Master!", "Metal Legend!", "Non-Metal Novice!", "Non-Metal Expert!",
        "Non-Metal Champion!", "Metalloid Maestro!", "Metalloid Pro!", "Noble Gas Navigator!", "Noble Gas Hero!",
        "Metal Mixer!", "Symbol Sorcerer!", "Non-Metal Ninja!", "Name Wizard!", "Metalloid Marvel!",
        "Noble Gas Knight!", "Metal-Non-Metal Master!", "Symbol Supreme!", "Metalloid-Non-Metal Mogul!",
        "Name Emperor!", "Noble-Metal Nomad!", "Symbol Sovereign!", "Non-Metal-Metalloid Monarch!",
        "Name Overlord!", "Infinite Chemistry Conqueror!"
    ];
    return messages[level - 1];
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

initGame();