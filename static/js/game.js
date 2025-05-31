const elements = [
    { atomicNumber: 1, name: "Hydrogen", symbol: "H", group: "non-metal" },
    { atomicNumber: 2, name: "Helium", symbol: "He", group: "noble-gas" },
    { atomicNumber: 3, name: "Lithium", symbol: "Li", group: "alkali-metal" },
    { atomicNumber: 4, name: "Beryllium", symbol: "Be", group: "alkaline-earth-metal" },
    { atomicNumber: 5, name: "Boron", symbol: "B", group: "metalloid" },
    { atomicNumber: 6, name: "Carbon", symbol: "C", group: "non-metal" },
    { atomicNumber: 7, name: "Nitrogen", symbol: "N", group: "non-metal" },
    { atomicNumber: 8, name: "Oxygen", symbol: "O", group: "non-metal" },
    { atomicNumber: 9, name: "Fluorine", symbol: "F", group: "non-metal" },
    { atomicNumber: 10, name: "Neon", symbol: "Ne", group: "noble-gas" },
    { atomicNumber: 11, name: "Sodium", symbol: "Na", group: "alkali-metal" },
    { atomicNumber: 12, name: "Magnesium", symbol: "Mg", group: "alkaline-earth-metal" },
    { atomicNumber: 13, name: "Aluminium", symbol: "Al", group: "post-transition-metal" },
    { atomicNumber: 14, name: "Silicon", symbol: "Si", group: "metalloid" },
    { atomicNumber: 15, name: "Phosphorus", symbol: "P", group: "non-metal" },
    { atomicNumber: 16, name: "Sulfur", symbol: "S", group: "non-metal" },
    { atomicNumber: 17, name: "Chlorine", symbol: "Cl", group: "non-metal" },
    { atomicNumber: 18, name: "Argon", symbol: "Ar", group: "noble-gas" },
    { atomicNumber: 19, name: "Potassium", symbol: "K", group: "alkali-metal" },
    { atomicNumber: 20, name: "Calcium", symbol: "Ca", group: "alkaline-earth-metal" },
    { atomicNumber: 21, name: "Scandium", symbol: "Sc", group: "transition-metal" },
    { atomicNumber: 22, name: "Titanium", symbol: "Ti", group: "transition-metal" },
    { atomicNumber: 23, name: "Vanadium", symbol: "V", group: "transition-metal" },
    { atomicNumber: 24, name: "Chromium", symbol: "Cr", group: "transition-metal" },
    { atomicNumber: 25, name: "Manganese", symbol: "Mn", group: "transition-metal" },
    { atomicNumber: 26, name: "Iron", symbol: "Fe", group: "transition-metal" },
    { atomicNumber: 27, name: "Cobalt", symbol: "Co", group: "transition-metal" },
    { atomicNumber: 28, name: "Nickel", symbol: "Ni", group: "transition-metal" },
    { atomicNumber: 29, name: "Copper", symbol: "Cu", group: "transition-metal" },
    { atomicNumber: 30, name: "Zinc", symbol: "Zn", group: "transition-metal" },
    { atomicNumber: 31, name: "Gallium", symbol: "Ga", group: "post-transition-metal" },
    { atomicNumber: 32, name: "Germanium", symbol: "Ge", group: "metalloid" },
    { atomicNumber: 33, name: "Arsenic", symbol: "As", group: "metalloid" },
    { atomicNumber: 34, name: "Selenium", symbol: "Se", group: "non-metal" },
    { atomicNumber: 35, name: "Bromine", symbol: "Br", group: "non-metal" },
    { atomicNumber: 36, name: "Krypton", symbol: "Kr", group: "noble-gas" },
    { atomicNumber: 37, name: "Rubidium", symbol: "Rb", group: "alkali-metal" },
    { atomicNumber: 38, name: "Strontium", symbol: "Sr", group: "alkaline-earth-metal" },
    { atomicNumber: 39, name: "Yttrium", symbol: "Y", group: "transition-metal" },
    { atomicNumber: 40, name: "Zirconium", symbol: "Zr", group: "transition-metal" },
    { atomicNumber: 41, name: "Niobium", symbol: "Nb", group: "transition-metal" },
    { atomicNumber: 42, name: "Molybdenum", symbol: "Mo", group: "transition-metal" },
    { atomicNumber: 43, name: "Technetium", symbol: "Tc", group: "transition-metal" },
    { atomicNumber: 44, name: "Ruthenium", symbol: "Ru", group: "transition-metal" },
    { atomicNumber: 45, name: "Rhodium", symbol: "Rh", group: "transition-metal" },
    { atomicNumber: 46, name: "Palladium", symbol: "Pd", group: "transition-metal" },
    { atomicNumber: 47, name: "Silver", symbol: "Ag", group: "transition-metal" },
    { atomicNumber: 48, name: "Cadmium", symbol: "Cd", group: "transition-metal" },
    { atomicNumber: 49, name: "Indium", symbol: "In", group: "post-transition-metal" },
    { atomicNumber: 50, name: "Tin", symbol: "Sn", group: "post-transition-metal" },
    { atomicNumber: 51, name: "Antimony", symbol: "Sb", group: "metalloid" },
    { atomicNumber: 52, name: "Tellurium", symbol: "Te", group: "metalloid" },
    { atomicNumber: 53, name: "Iodine", symbol: "I", group: "non-metal" },
    { atomicNumber: 54, name: "Xenon", symbol: "Xe", group: "noble-gas" },
    { atomicNumber: 55, name: "Caesium", symbol: "Cs", group: "alkali-metal" },
    { atomicNumber: 56, name: "Barium", symbol: "Ba", group: "alkaline-earth-metal" },
    { atomicNumber: 57, name: "Lanthanum", symbol: "La", group: "lanthanide" },
    { atomicNumber: 58, name: "Cerium", symbol: "Ce", group: "lanthanide" },
    { atomicNumber: 59, name: "Praseodymium", symbol: "Pr", group: "lanthanide" },
    { atomicNumber: 60, name: "Neodymium", symbol: "Nd", group: "lanthanide" },
    { atomicNumber: 61, name: "Promethium", symbol: "Pm", group: "lanthanide" },
    { atomicNumber: 62, name: "Samarium", symbol: "Sm", group: "lanthanide" },
    { atomicNumber: 63, name: "Europium", symbol: "Eu", group: "lanthanide" },
    { atomicNumber: 64, name: "Gadolinium", symbol: "Gd", group: "lanthanide" },
    { atomicNumber: 65, name: "Terbium", symbol: "Tb", group: "lanthanide" },
    { atomicNumber: 66, name: "Dysprosium", symbol: "Dy", group: "lanthanide" },
    { atomicNumber: 67, name: "Holmium", symbol: "Ho", group: "lanthanide" },
    { atomicNumber: 68, name: "Erbium", symbol: "Er", group: "lanthanide" },
    { atomicNumber: 69, name: "Thulium", symbol: "Tm", group: "lanthanide" },
    { atomicNumber: 70, name: "Ytterbium", symbol: "Yb", group: "lanthanide" },
    { atomicNumber: 71, name: "Lutetium", symbol: "Lu", group: "lanthanide" },
    { atomicNumber: 72, name: "Hafnium", symbol: "Hf", group: "transition-metal" },
    { atomicNumber: 73, name: "Tantalum", symbol: "Ta", group: "transition-metal" },
    { atomicNumber: 74, name: "Tungsten", symbol: "W", group: "transition-metal" },
    { atomicNumber: 75, name: "Rhenium", symbol: "Re", group: "transition-metal" },
    { atomicNumber: 76, name: "Osmium", symbol: "Os", group: "transition-metal" },
    { atomicNumber: 77, name: "Iridium", symbol: "Ir", group: "transition-metal" },
    { atomicNumber: 78, name: "Platinum", symbol: "Pt", group: "transition-metal" },
    { atomicNumber: 79, name: "Gold", symbol: "Au", group: "transition-metal" },
    { atomicNumber: 80, name: "Mercury", symbol: "Hg", group: "transition-metal" },
    { atomicNumber: 81, name: "Thallium", symbol: "Tl", group: "post-transition-metal" },
    { atomicNumber: 82, name: "Lead", symbol: "Pb", group: "post-transition-metal" },
    { atomicNumber: 83, name: "Bismuth", symbol: "Bi", group: "post-transition-metal" },
    { atomicNumber: 84, name: "Polonium", symbol: "Po", group: "post-transition-metal" },
    { atomicNumber: 85, name: "Astatine", symbol: "At", group: "metalloid" },
    { atomicNumber: 86, name: "Radon", symbol: "Rn", group: "noble-gas" },
    { atomicNumber: 87, name: "Francium", symbol: "Fr", group: "alkali-metal" },
    { atomicNumber: 88, name: "Radium", symbol: "Ra", group: "alkaline-earth-metal" },
    { atomicNumber: 89, name: "Actinium", symbol: "Ac", group: "actinide" },
    { atomicNumber: 90, name: "Thorium", symbol: "Th", group: "actinide" },
    { atomicNumber: 91, name: "Protactinium", symbol: "Pa", group: "actinide" },
    { atomicNumber: 92, name: "Uranium", symbol: "U", group: "actinide" },
    { atomicNumber: 93, name: "Neptunium", symbol: "Np", group: "actinide" },
    { atomicNumber: 94, name: "Plutonium", symbol: "Pu", group: "actinide" },
    { atomicNumber: 95, name: "Americium", symbol: "Am", group: "actinide" },
    { atomicNumber: 96, name: "Curium", symbol: "Cm", group: "actinide" },
    { atomicNumber: 97, name: "Berkelium", symbol: "Bk", group: "actinide" },
    { atomicNumber: 98, name: "Californium", symbol: "Cf", group: "actinide" },
    { atomicNumber: 99, name: "Einsteinium", symbol: "Es", group: "actinide" },
    { atomicNumber: 100, name: "Fermium", symbol: "Fm", group: "actinide" },
    { atomicNumber: 101, name: "Mendelevium", symbol: "Md", group: "actinide" },
    { atomicNumber: 102, name: "Nobelium", symbol: "No", group: "actinide" },
    { atomicNumber: 103, name: "Lawrencium", symbol: "Lr", group: "actinide" },
    { atomicNumber: 104, name: "Rutherfordium", symbol: "Rf", group: "transition-metal" },
    { atomicNumber: 105, name: "Dubnium", symbol: "Db", group: "transition-metal" },
    { atomicNumber: 106, name: "Seaborgium", symbol: "Sg", group: "transition-metal" },
    { atomicNumber: 107, name: "Bohrium", symbol: "Bh", group: "transition-metal" },
    { atomicNumber: 108, name: "Hassium", symbol: "Hs", group: "transition-metal" },
    { atomicNumber: 109, name: "Meitnerium", symbol: "Mt", group: "transition-metal" },
    { atomicNumber: 110, name: "Darmstadtium", symbol: "Ds", group: "transition-metal" },
    { atomicNumber: 111, name: "Roentgenium", symbol: "Rg", group: "transition-metal" },
    { atomicNumber: 112, name: "Copernicium", symbol: "Cn", group: "transition-metal" },
    { atomicNumber: 113, name: "Nihonium", symbol: "Nh", group: "post-transition-metal" },
    { atomicNumber: 114, name: "Flerovium", symbol: "Fl", group: "post-transition-metal" },
    { atomicNumber: 115, name: "Moscovium", symbol: "Mc", group: "post-transition-metal" },
    { atomicNumber: 116, name: "Livermorium", symbol: "Lv", group: "post-transition-metal" },
    { atomicNumber: 117, name: "Tennessine", symbol: "Ts", group: "metalloid" },
    { atomicNumber: 118, name: "Oganesson", symbol: "Og", group: "noble-gas" }
];

const levelConfigs = [
    { name: "Beginner", elements: elements.slice(0, 20), targetScore: 20, decoys: 0, showAtomicNumber: true, subLevels: 5 },
    { name: "Explorer", elements: elements.filter(e => ["alkali-metal", "alkaline-earth-metal", "post-transition-metal", "metalloid", "non-metal"].includes(e.group)).slice(0, 20), targetScore: 20, decoys: 2, showAtomicNumber: true, subLevels: 5 },
    { name: "Pro", elements: elements.filter(e => e.group === "transition-metal").slice(0, 20), targetScore: 20, decoys: 3, showAtomicNumber: false, subLevels: 5 },
    { name: "Mastermind", elements: elements.filter(e => ["lanthanide", "actinide", "noble-gas"].includes(e.group)), targetScore: 23, decoys: 4, showAtomicNumber: false, subLevels: 5 },
    { name: "Guru", elements: elements.filter(e => ["lanthanide", "actinide"].includes(e.group)), targetScore: 30, decoys: 5, showAtomicNumber: false, subLevels: 5 },
    { name: "Infinity", elements: elements, targetScore: 30, decoys: 5, showAtomicNumber: false, subLevels: Infinity }
];

let currentLevel = 1;
let currentSubLevel = 1;
let lives = 3;
let score = 0;
let combo = 0;
let hintUsed = false;
let selectedCard = null;
let timer;
let timeLeft = 120; // 2 minutes
let accuracyData = JSON.parse(localStorage.getItem('periodicGameAccuracy')) || {};
let unlockedLevels = JSON.parse(localStorage.getItem('periodicGameUnlockedLevels')) || [1];
let soundEnabled = localStorage.getItem('periodicGameSound') !== 'false';
let activeCards = [];

const correctSound = new Audio('static/sounds/correct.mp3');
const wrongSound = new Audio('static/sounds/wrong.mp3');
const victorySound = new Audio('static/sounds/victory.mp3');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop().split(';').shift() : null;
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function initGame() {
    if (!getCookie('periodicGameVisited')) {
        document.getElementById('instructions-modal').classList.remove('hidden');
        setCookie('periodicGameVisited', 'true', 365);
    }
    document.getElementById('start-game-btn').addEventListener('click', () => {
        document.getElementById('instructions-modal').classList.add('hidden');
        startLevel(currentLevel, currentSubLevel);
    });
    setupSettings();
    updateLevelSelect();
    startLevel(currentLevel, currentSubLevel);
}

function setupSettings() {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const showInstructionsBtn = document.getElementById('show-instructions-btn');
    const soundToggle = document.getElementById('sound-toggle');
    const resetLevelsBtn = document.getElementById('reset-levels-btn');
    const levelSelect = document.getElementById('level-select');

    soundToggle.checked = soundEnabled;
    soundToggle.addEventListener('change', () => {
        soundEnabled = soundToggle.checked;
        localStorage.setItem('periodicGameSound', soundEnabled);
    });

    settingsBtn.addEventListener('click', () => {
        settingsModal.classList.remove('hidden');
    });

    closeSettingsBtn.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
    });

    showInstructionsBtn.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
        document.getElementById('instructions-modal').classList.remove('hidden');
    });

    resetLevelsBtn.addEventListener('click', () => {
        accuracyData = {};
        unlockedLevels = [1];
        localStorage.setItem('periodicGameAccuracy', JSON.stringify(accuracyData));
        localStorage.setItem('periodicGameUnlockedLevels', JSON.stringify(unlockedLevels));
        updateLevelSelect();
        settingsModal.classList.add('hidden');
        currentLevel = 1;
        currentSubLevel = 1;
        startLevel(1, 1);
    });

    levelSelect.addEventListener('change', () => {
        currentLevel = parseInt(levelSelect.value);
        currentSubLevel = 1;
        settingsModal.classList.add('hidden');
        startLevel(currentLevel, currentSubLevel);
    });
}

function updateLevelSelect() {
    const levelSelect = document.getElementById('level-select');
    levelSelect.innerHTML = '';
    unlockedLevels.forEach(level => {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = `Level ${level}: ${levelConfigs[level - 1].name}`;
        levelSelect.appendChild(option);
    });
}

function startLevel(level, subLevel) {
    lives = 3;
    score = 0;
    combo = 0;
    hintUsed = false;
    timeLeft = 120;
    selectedCard = null;
    activeCards = [];
    updateHUD();
    setupGameBoard(level, subLevel);
    startTimer();
}

function setupGameBoard(level, subLevel) {
    const config = levelConfigs[level - 1];
    let levelElements = config.elements.slice(0, config.targetScore);
    if (level === 6) {
        levelElements = elements.sort(() => Math.random() - 0.5).slice(0, config.targetScore); // Random for Infinity
    }
    const periodicTable = document.getElementById('periodic-table');
    const elementCards = document.getElementById('element-cards');
    periodicTable.innerHTML = '';
    elementCards.innerHTML = '';
    activeCards = [];

    // Add decoy cards
    const decoyElements = elements.filter(e => !levelElements.includes(e));
    for (let i = 0; i < config.decoys; i++) {
        if (decoyElements.length > 0) {
            const decoy = decoyElements[Math.floor(Math.random() * decoyElements.length)];
            levelElements.push({ ...decoy, isDecoy: true });
        }
    }
    levelElements = levelElements.sort(() => Math.random() - 0.5); // Shuffle

    const gridCols = Math.min(levelElements.length, 5);
    document.getElementById('periodic-table').style.gridTemplateColumns = `repeat(${gridCols}, 60px)`;

    levelElements.forEach((element, index) => {
        if (!element.isDecoy) {
            const slot = document.createElement('div');
            slot.classList.add('slot');
            slot.dataset.atomicNumber = element.atomicNumber;
            slot.textContent = config.showAtomicNumber ? element.atomicNumber : '?';
            slot.addEventListener('click', () => handleSlotClick(slot));
            periodicTable.appendChild(slot);
        }

        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.atomicNumber = element.atomicNumber;
        card.dataset.index = index;
        card.textContent = element.symbol; // Only symbols
        card.addEventListener('click', () => handleCardClick(card));
        activeCards.push({ index, element, card });
    });

    renderCards();

    document.getElementById('level-name').textContent = config.name;
    document.getElementById('target-score').textContent = config.targetScore;
    document.getElementById('sub-level').textContent = subLevel;
    updateAccuracyDisplay();
}

function renderCards() {
    const elementCards = document.getElementById('element-cards');
    elementCards.innerHTML = '';
    activeCards.forEach(({ card }) => {
        if (!card.classList.contains('used')) {
            elementCards.appendChild(card);
        }
    });
}

function handleCardClick(card) {
    if (card.classList.contains('used')) return;
    if (selectedCard) selectedCard.classList.remove('selected');
    selectedCard = card;
    card.classList.add('selected');
}

function handleSlotClick(slot) {
    if (!selectedCard || slot.classList.contains('filled')) return;
    const cardAtomicNumber = parseInt(selectedCard.dataset.atomicNumber);
    const slotAtomicNumber = parseInt(slot.dataset.atomicNumber);

    if (cardAtomicNumber === slotAtomicNumber) {
        slot.classList.add('filled');
        slot.textContent = selectedCard.textContent;
        selectedCard.classList.add('used');
        selectedCard.classList.remove('selected');
        score++;
        combo++;
        if (combo >= 3) {
            score += 2;
            combo = 0;
        }
        if (soundEnabled) correctSound.play();
        slideCards();
        updateAccuracy(true);
        updateHUD();
        checkWin();
    } else {
        slot.classList.add('wrong');
        setTimeout(() => slot.classList.remove('wrong'), 300);
        lives--;
        combo = 0;
        if (soundEnabled) wrongSound.play();
        updateAccuracy(false);
        updateHUD();
        if (lives === 0) gameOver();
    }
    selectedCard = null;
}

function slideCards() {
    const index = parseInt(selectedCard.dataset.index);
    activeCards = activeCards.filter(card => card.index !== index);
    renderCards();
}

function updateAccuracy(success) {
    const levelKey = `level${currentLevel}`;
    if (!accuracyData[levelKey]) {
        accuracyData[levelKey] = { correct: 0, total: 0 };
    }
    accuracyData[levelKey].total++;
    if (success) accuracyData[levelKey].correct++;
    localStorage.setItem('periodicGameAccuracy', JSON.stringify(accuracyData));
    updateAccuracyDisplay();
}

function updateAccuracyDisplay() {
    const levelKey = `level${currentLevel}`;
    const data = accuracyData[levelKey] || { correct: 0, total: 0 };
    const accuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
}

function updateHUD() {
    document.getElementById('level').textContent = currentLevel;
    document.getElementById('lives').textContent = '❤'.repeat(lives);
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = formatTime(timeLeft);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        updateHUD();
        if (timeLeft <= 0) gameOver();
    }, 1000);
}

function checkWin() {
    const config = levelConfigs[currentLevel - 1];
    if (score >= config.targetScore) {
        clearInterval(timer);
        if (soundEnabled) victorySound.play();
        const levelKey = `level${currentLevel}`;
        const accuracy = accuracyData[levelKey] ? Math.round((accuracyData[levelKey].correct / accuracyData[levelKey].total) * 100) : 0;
        if (accuracy >= 100 || currentSubLevel >= config.subLevels || currentLevel === 6) {
            const modal = document.getElementById('victory-modal');
            document.getElementById('victory-level').textContent = currentLevel;
            document.getElementById('victory-title').textContent = getTitle(currentLevel);
            modal.classList.remove('hidden');
            document.getElementById('next-level-btn').addEventListener('click', () => {
                modal.classList.add('hidden');
                if (currentLevel < 6 && accuracy >= 100) {
                    if (!unlockedLevels.includes(currentLevel + 1)) {
                        unlockedLevels.push(currentLevel + 1);
                        localStorage.setItem('periodicGameUnlockedLevels', JSON.stringify(unlockedLevels));
                        updateLevelSelect();
                    }
                    currentLevel++;
                    currentSubLevel = 1;
                } else {
                    currentSubLevel++;
                }
                startLevel(currentLevel, currentSubLevel);
            }, { once: true });
        } else {
            currentSubLevel++;
            startLevel(currentLevel, currentSubLevel);
        }
    }
}

function gameOver() {
    clearInterval(timer);
    alert('Game Over! Try again.');
    startLevel(currentLevel, currentSubLevel);
}

function getTitle(level) {
    if (level === 1) return 'Beginner';
    if (level === 2) return 'Element Explorer';
    if (level === 3) return 'Transition Titan';
    if (level === 4) return 'Rare Element Ranger';
    if (level === 5) return 'Guru';
    return 'Periodic Master';
}

document.getElementById('hint-btn').addEventListener('click', () => {
    if (hintUsed) return;
    hintUsed = true;
    const slots = document.querySelectorAll('.slot:not(.filled)');
    const randomSlot = slots[Math.floor(Math.random() * slots.length)];
    const element = elements.find(e => e.atomicNumber == randomSlot.dataset.atomicNumber);
    randomSlot.textContent = element.symbol;
    setTimeout(() => {
        if (!randomSlot.classList.contains('filled')) {
            randomSlot.textContent = levelConfigs[currentLevel - 1].showAtomicNumber ? randomSlot.dataset.atomicNumber : '?';
        }
    }, 5000);
});

initGame();