const elements = [
    { atomic: 1, symbol: "H", name: "Hydrogen", group: "non-metal" },
    { atomic: 2, symbol: "He", name: "Helium", group: "noble-gas" },
    { atomic: 3, symbol: "Li", name: "Lithium", group: "alkali-metal" },
    { atomic: 4, symbol: "Be", name: "Beryllium", group: "alkaline-earth-metal" },
    { atomic: 5, symbol: "B", name: "Boron", group: "metalloid" },
    { atomic: 6, symbol: "C", name: "Carbon", group: "non-metal" },
    { atomic: 7, symbol: "N", name: "Nitrogen", group: "non-metal" },
    { atomic: 8, symbol: "O", name: "Oxygen", group: "non-metal" },
    { atomic: 9, symbol: "F", name: "Fluorine", group: "halogen" },
    { atomic: 10, symbol: "Ne", name: "Neon", group: "noble-gas" },
    { atomic: 11, symbol: "Na", name: "Sodium", group: "alkali-metal" },
    { atomic: 12, symbol: "Mg", name: "Magnesium", group: "alkaline-earth-metal" },
    { atomic: 13, symbol: "Al", name: "Aluminum", group: "post-transition-metal" },
    { atomic: 14, symbol: "Si", name: "Silicon", group: "metalloid" },
    { atomic: 15, symbol: "P", name: "Phosphorus", group: "non-metal" },
    { atomic: 16, symbol: "S", name: "Sulfur", group: "non-metal" },
    { atomic: 17, symbol: "Cl", name: "Chlorine", group: "halogen" },
    { atomic: 18, symbol: "Ar", name: "Argon", group: "noble-gas" },
    { atomic: 19, symbol: "K", name: "Potassium", group: "alkali-metal" },
    { atomic: 20, symbol: "Ca", name: "Calcium", group: "alkaline-earth-metal" },
    { atomic: 21, symbol: "Sc", name: "Scandium", group: "transition-metal" },
    { atomic: 22, symbol: "Ti", name: "Titanium", group: "transition-metal" },
    { atomic: 23, symbol: "V", name: "Vanadium", group: "transition-metal" },
    { atomic: 24, symbol: "Cr", name: "Chromium", group: "transition-metal" },
    { atomic: 25, symbol: "Mn", name: "Manganese", group: "transition-metal" },
    { atomic: 26, symbol: "Fe", name: "Iron", group: "transition-metal" },
    { atomic: 27, symbol: "Co", name: "Cobalt", group: "transition-metal" },
    { atomic: 28, symbol: "Ni", name: "Nickel", group: "transition-metal" },
    { atomic: 29, symbol: "Cu", name: "Copper", group: "transition-metal" },
    { atomic: 30, symbol: "Zn", name: "Zinc", group: "transition-metal" },
    { atomic: 31, symbol: "Ga", name: "Gallium", group: "post-transition-metal" },
    { atomic: 32, symbol: "Ge", name: "Germanium", group: "metalloid" },
    { atomic: 33, symbol: "As", name: "Arsenic", group: "metalloid" },
    { atomic: 34, symbol: "Se", name: "Selenium", group: "non-metal" },
    { atomic: 35, symbol: "Br", name: "Bromine", group: "halogen" },
    { atomic: 36, symbol: "Kr", name: "Krypton", group: "noble-gas" },
    { atomic: 37, symbol: "Rb", name: "Rubidium", group: "alkali-metal" },
    { atomic: 38, symbol: "Sr", name: "Strontium", group: "alkaline-earth-metal" },
    { atomic: 39, symbol: "Y", name: "Yttrium", group: "transition-metal" },
    { atomic: 40, symbol: "Zr", name: "Zirconium", group: "transition-metal" },
    { atomic: 41, symbol: "Nb", name: "Niobium", group: "transition-metal" },
    { atomic: 42, symbol: "Mo", name: "Molybdenum", group: "transition-metal" },
    { atomic: 43, symbol: "Tc", name: "Technetium", group: "transition-metal" },
    { atomic: 44, symbol: "Ru", name: "Ruthenium", group: "transition-metal" },
    { atomic: 45, symbol: "Rh", name: "Rhodium", group: "transition-metal" },
    { atomic: 46, symbol: "Pd", name: "Palladium", group: "transition-metal" },
    { atomic: 47, symbol: "Ag", name: "Silver", group: "transition-metal" },
    { atomic: 48, symbol: "Cd", name: "Cadmium", group: "transition-metal" },
    { atomic: 49, symbol: "In", name: "Indium", group: "post-transition-metal" },
    { atomic: 50, symbol: "Sn", name: "Tin", group: "post-transition-metal" },
    { atomic: 51, symbol: "Sb", name: "Antimony", group: "metalloid" },
    { atomic: 52, symbol: "Te", name: "Tellurium", group: "metalloid" },
    { atomic: 53, symbol: "I", name: "Iodine", group: "halogen" },
    { atomic: 54, symbol: "Xe", name: "Xenon", group: "noble-gas" },
    { atomic: 55, symbol: "Cs", name: "Cesium", group: "alkali-metal" },
    { atomic: 56, symbol: "Ba", name: "Barium", group: "alkaline-earth-metal" },
    { atomic: 57, symbol: "La", name: "Lanthanum", group: "lanthanide" },
    { atomic: 58, symbol: "Ce", name: "Cerium", group: "lanthanide" },
    { atomic: 59, symbol: "Pr", name: "Praseodymium", group: "lanthanide" },
    { atomic: 60, symbol: "Nd", name: "Neodymium", group: "lanthanide" },
    { atomic: 61, symbol: "Pm", name: "Promethium", group: "lanthanide" },
    { atomic: 62, symbol: "Sm", name: "Samarium", group: "lanthanide" },
    { atomic: 63, symbol: "Eu", name: "Europium", group: "lanthanide" },
    { atomic: 64, symbol: "Gd", name: "Gadolinium", group: "lanthanide" },
    { atomic: 65, symbol: "Tb", name: "Terbium", group: "lanthanide" },
    { atomic: 66, symbol: "Dy", name: "Dysprosium", group: "lanthanide" },
    { atomic: 67, symbol: "Ho", name: "Holmium", group: "lanthanide" },
    { atomic: 68, symbol: "Er", name: "Erbium", group: "lanthanide" },
    { atomic: 69, symbol: "Tm", name: "Thulium", group: "lanthanide" },
    { atomic: 70, symbol: "Yb", name: "Ytterbium", group: "lanthanide" },
    { atomic: 71, symbol: "Lu", name: "Lutetium", group: "lanthanide" },
    { atomic: 72, symbol: "Hf", name: "Hafnium", group: "transition-metal" },
    { atomic: 73, symbol: "Ta", name: "Tantalum", group: "transition-metal" },
    { atomic: 74, symbol: "W", name: "Tungsten", group: "transition-metal" },
    { atomic: 75, symbol: "Re", name: "Rhenium", group: "transition-metal" },
    { atomic: 76, symbol: "Os", name: "Osmium", group: "transition-metal" },
    { atomic: 77, symbol: "Ir", name: "Iridium", group: "transition-metal" },
    { atomic: 78, symbol: "Pt", name: "Platinum", group: "transition-metal" },
    { atomic: 79, symbol: "Au", name: "Gold", group: "transition-metal" },
    { atomic: 80, symbol: "Hg", name: "Mercury", group: "transition-metal" },
    { atomic: 81, symbol: "Tl", name: "Thallium", group: "post-transition-metal" },
    { atomic: 82, symbol: "Pb", name: "Lead", group: "post-transition-metal" },
    { atomic: 83, symbol: "Bi", name: "Bismuth", group: "post-transition-metal" },
    { atomic: 84, symbol: "Po", name: "Polonium", group: "post-transition-metal" },
    { atomic: 85, symbol: "At", name: "Astatine", group: "halogen" },
    { atomic: 86, symbol: "Rn", name: "Radon", group: "noble-gas" },
    { atomic: 87, symbol: "Fr", name: "Francium", group: "alkali-metal" },
    { atomic: 88, symbol: "Ra", name: "Radium", group: "alkaline-earth-metal" },
    { atomic: 89, symbol: "Ac", name: "Actinium", group: "actinide" },
    { atomic: 90, symbol: "Th", name: "Thorium", group: "actinide" },
    { atomic: 91, symbol: "Pa", name: "Protactinium", group: "actinide" },
    { atomic: 92, symbol: "U", name: "Uranium", group: "actinide" },
    { atomic: 93, symbol: "Np", name: "Neptunium", group: "actinide" },
    { atomic: 94, symbol: "Pu", name: "Plutonium", group: "actinide" },
    { atomic: 95, symbol: "Am", name: "Americium", group: "actinide" },
    { atomic: 96, symbol: "Cm", name: "Curium", group: "actinide" },
    { atomic: 97, symbol: "Bk", name: "Berkelium", group: "actinide" },
    { atomic: 98, symbol: "Cf", name: "Californium", group: "actinide" },
    { atomic: 99, symbol: "Es", name: "Einsteinium", group: "actinide" },
    { atomic: 100, symbol: "Fm", name: "Fermium", group: "actinide" },
    { atomic: 101, symbol: "Md", name: "Mendelevium", group: "actinide" },
    { atomic: 102, symbol: "No", name: "Nobelium", group: "actinide" },
    { atomic: 103, symbol: "Lr", name: "Lawrencium", group: "actinide" },
    { atomic: 104, symbol: "Rf", name: "Rutherfordium", group: "transition-metal" },
    { atomic: 105, symbol: "Db", name: "Dubnium", group: "transition-metal" },
    { atomic: 106, symbol: "Sg", name: "Seaborgium", group: "transition-metal" },
    { atomic: 107, symbol: "Bh", name: "Bohrium", group: "transition-metal" },
    { atomic: 108, symbol: "Hs", name: "Hassium", group: "transition-metal" },
    { atomic: 109, symbol: "Mt", name: "Meitnerium", group: "transition-metal" },
    { atomic: 110, symbol: "Ds", name: "Darmstadtium", group: "transition-metal" },
    { atomic: 111, symbol: "Rg", name: "Roentgenium", group: "transition-metal" },
    { atomic: 112, symbol: "Cn", name: "Copernicium", group: "transition-metal" },
    { atomic: 113, symbol: "Nh", name: "Nihonium", group: "post-transition-metal" },
    { atomic: 114, symbol: "Fl", name: "Flerovium", group: "post-transition-metal" },
    { atomic: 115, symbol: "Mc", name: "Moscovium", group: "post-transition-metal" },
    { atomic: 116, symbol: "Lv", name: "Livermorium", group: "post-transition-metal" },
    { atomic: 117, symbol: "Ts", name: "Tennessine", group: "halogen" },
    { atomic: 118, symbol: "Og", name: "Oganesson", group: "noble-gas" }
];

const levelConfig = [
    { elements: [1, 3, 11, 19, 37, 55, 87], group: "alkali-metal", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [1, 3, 11, 19, 37, 55, 87], group: "alkali-metal", decoys: 2, hideAtomic: false, mode: "symbol", time: 110, grid: "4x2" },
    { elements: [1, 3, 11, 19, 37, 55, 87], group: "alkali-metal", decoys: 3, hideAtomic: true, mode: "name", time: 100, grid: "4x2" },
    { elements: [4, 12, 20, 38, 56, 88], group: "alkaline-earth-metal", decoys: 0, hideAtomic: false, mode: "mixed", time: 110, grid: "3x2" },
    { elements: [4, 12, 20, 38, 56, 88], group: "alkaline-earth-metal", decoys: 2, hideAtomic: false, mode: "symbol", time: 100, grid: "3x2" },
    { elements: [4, 12, 20, 38, 56, 88], group: "alkaline-earth-metal", decoys: 3, hideAtomic: true, mode: "name", time: 90, grid: "3x2" },
    { elements: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], group: "transition-metal-1", decoys: 0, hideAtomic: false, mode: "mixed", time: 130, grid: "5x2" },
    { elements: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], group: "transition-metal-1", decoys: 3, hideAtomic: false, mode: "symbol", time: 120, grid: "5x2" },
    { elements: [39, 40, 41, 42, 43, 44, 45, 46, 47, 48], group: "transition-metal-2", decoys: 0, hideAtomic: false, mode: "mixed", time: 130, grid: "5x2" },
    { elements: [39, 40, 41, 42, 43, 44, 45, 46, 47, 48], group: "transition-metal-2", decoys: 3, hideAtomic: true, mode: "name", time: 120, grid: "5x2" },
    { elements: [72, 73, 74, 75, 76, 77, 78, 79, 80], group: "transition-metal-3", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "3x3" },
    { elements: [72, 73, 74, 75, 76, 77, 78, 79, 80], group: "transition-metal-3", decoys: 3, hideAtomic: true, mode: "symbol", time: 110, grid: "3x3" },
    { elements: [104, 105, 106, 107, 108, 109, 110, 111, 112], group: "transition-metal-4", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "3x3" },
    { elements: [104, 105, 106, 107, 108, 109, 110, 111, 112], group: "transition-metal-4", decoys: 3, hideAtomic: true, mode: "name", time: 110, grid: "3x3" },
    { elements: [13, 31, 49, 50, 81, 82, 83, 84], group: "post-transition-metal-1", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [13, 31, 49, 50, 81, 82, 83, 84], group: "post-transition-metal-1", decoys: 3, hideAtomic: false, mode: "symbol", time: 110, grid: "4x2" },
    { elements: [113, 114, 115, 116], group: "post-transition-metal-2", decoys: 2, hideAtomic: false, mode: "mixed", time: 90, grid: "2x2" },
    { elements: [113, 114, 115, 116], group: "post-transition-metal-2", decoys: 3, hideAtomic: true, mode: "symbol", time: 80, grid: "2x2" },
    { elements: [5, 14, 32, 33, 51, 52], group: "metalloid", decoys: 0, hideAtomic: false, mode: "mixed", time: 110, grid: "3x2" },
    { elements: [5, 14, 32, 33, 51, 52], group: "metalloid", decoys: 3, hideAtomic: true, mode: "name", time: 100, grid: "3x2" },
    { elements: [6, 7, 8, 15, 16, 34], group: "non-metal-1", decoys: 0, hideAtomic: false, mode: "mixed", time: 110, grid: "3x2" },
    { elements: [6, 7, 8, 15, 16, 34], group: "non-metal-1", decoys: 3, hideAtomic: false, mode: "symbol", time: 100, grid: "3x2" },
    { elements: [1], group: "non-metal-2", decoys: 2, hideAtomic: false, mode: "mixed", time: 60, grid: "1x1" },
    { elements: [1], group: "non-metal-2", decoys: 3, hideAtomic: true, mode: "name", time: 50, grid: "1x1" },
    { elements: [9, 17, 35, 53, 85, 117], group: "halogen", decoys: 0, hideAtomic: false, mode: "mixed", time: 110, grid: "3x2" },
    { elements: [9, 17, 35, 53, 85, 117], group: "halogen", decoys: 3, hideAtomic: true, mode: "symbol", time: 100, grid: "3x2" },
    { elements: [2, 10, 18, 36, 54, 86, 118], group: "noble-gas", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [2, 10, 18, 36, 54, 86, 118], group: "noble-gas", decoys: 3, hideAtomic: true, mode: "name", time: 110, grid: "4x2" },
    { elements: [57, 58, 59, 60, 61, 62, 63], group: "lanthanide-1", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [57, 58, 59, 60, 61, 62, 63], group: "lanthanide-1", decoys: 3, hideAtomic: false, mode: "symbol", time: 110, grid: "4x2" },
    { elements: [64, 65, 66, 67, 68, 69, 70, 71], group: "lanthanide-2", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [64, 65, 66, 67, 68, 69, 70, 71], group: "lanthanide-2", decoys: 3, hideAtomic: true, mode: "name", time: 110, grid: "4x2" },
    { elements: [89, 90, 91, 92, 93, 94, 95], group: "actinide-1", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [89, 90, 91, 92, 93, 94, 95], group: "actinide-1", decoys: 3, hideAtomic: false, mode: "symbol", time: 110, grid: "4x2" },
    { elements: [96, 97, 98, 99, 100, 101, 102, 103], group: "actinide-2", decoys: 0, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [96, 97, 98, 99, 100, 101, 102, 103], group: "actinide-2", decoys: 3, hideAtomic: true, mode: "name", time: 110, grid: "4x2" },
    { elements: [1, 3, 11, 19, 6, 7, 8, 15, 16, 34], group: "mixed-1", decoys: 3, hideAtomic: false, mode: "mixed", time: 130, grid: "5x2" },
    { elements: [1, 3, 11, 19, 6, 7, 8, 15, 16, 34], group: "mixed-1", decoys: 4, hideAtomic: true, mode: "symbol", time: 120, grid: "5x2" },
    { elements: [21, 22, 23, 24, 25, 5, 14, 32, 33], group: "mixed-2", decoys: 3, hideAtomic: false, mode: "mixed", time: 130, grid: "3x3" },
    { elements: [21, 22, 23, 24, 25, 5, 14, 32, 33], group: "mixed-2", decoys: 4, hideAtomic: true, mode: "name", time: 120, grid: "3x3" },
    { elements: [39, 40, 41, 42, 9, 17, 35, 53], group: "mixed-3", decoys: 3, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [39, 40, 41, 42, 9, 17, 35, 53], group: "mixed-3", decoys: 4, hideAtomic: true, mode: "symbol", time: 110, grid: "4x2" },
    { elements: [72, 73, 74, 75, 2, 10, 18, 36], group: "mixed-4", decoys: 3, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [72, 73, 74, 75, 2, 10, 18, 36], group: "mixed-4", decoys: 4, hideAtomic: true, mode: "name", time: 110, grid: "4x2" },
    { elements: [57, 58, 59, 60, 13, 31, 49, 50], group: "mixed-5", decoys: 3, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [57, 58, 59, 60, 13, 31, 49, 50], group: "mixed-5", decoys: 4, hideAtomic: true, mode: "symbol", time: 110, grid: "4x2" },
    { elements: [89, 90, 91, 92, 104, 105, 106, 107], group: "mixed-6", decoys: 3, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [89, 90, 91, 92, 104, 105, 106, 107], group: "mixed-6", decoys: 4, hideAtomic: true, mode: "name", time: 110, grid: "4x2" },
    { elements: [113, 114, 115, 116, 64, 65, 66, 67], group: "mixed-7", decoys: 3, hideAtomic: false, mode: "mixed", time: 120, grid: "4x2" },
    { elements: [113, 114, 115, 116, 64, 65, 66, 67], group: "mixed-7", decoys: 4, hideAtomic: true, mode: "symbol", time: 110, grid: "4x2" },
    { elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], group: "master-challenge-1", decoys: 5, hideAtomic: true, mode: "mixed", time: 180, grid: "5x4" },
    { elements: Array.from({length: 118}, (_, i) => i + 1), group: "master-challenge-2", decoys: 10, hideAtomic: true, mode: "mixed", time: 300, grid: "10x12" },
    { elements: Array.from({length: 118}, (_, i) => i + 1), group: "infinite", decoys: 0, hideAtomic: true, mode: "mixed", time: 150, grid: "5x4", infinite: true }
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
let isDarkTheme = getCookie("theme") !== "light";

const correctSound = new Howl({ src: ['sounds/correct.mp3'], onloaderror: () => console.log("Correct sound failed to load") });
const wrongSound = new Howl({ src: ['sounds/wrong.mp3'], onloaderror: () => console.log("Wrong sound failed to load") });
const victorySound = new Howl({ src: ['sounds/victory.mp3'], onloaderror: () => console.log("Victory sound failed to load") });

function initGame() {
    const config = levelConfig[currentLevel - 1];
    const periodicTable = document.getElementById("periodic-table");
    const cardArea = document.getElementById("card-area");
    periodicTable.innerHTML = "";
    cardArea.innerHTML = "";

    const [cols, rows] = config.grid.split("x").map(Number);
    periodicTable.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    cardArea.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    let levelElements = config.infinite && infiniteRound > 0 ? getRandomElements(20) : config.group === "master-challenge-2" ? getRandomElements(118) : elements.filter(e => config.elements.includes(e.atomic));
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
        card.textContent = config.mode === "symbol" ? element.symbol : config.mode === "name" ? element.name : Math.random() > 0.5 ? element.symbol : element.name;
        cardArea.appendChild(card);
    });

    document.querySelectorAll(".slot").forEach(slot => {
        slot.addEventListener("dragover", dragOver);
        slot.addEventListener("drop", drop);
        slot.addEventListener("touchstart", touchStart, { passive: false });
        slot.addEventListener("touchmove", touchMove, { passive: false });
        slot.addEventListener("touchend", touchEnd, { passive: false });
    });

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("dragstart", dragStart);
        card.addEventListener("touchstart", touchStart, { passive: false });
        card.addEventListener("touchmove", touchMove, { passive: false });
        card.addEventListener("touchend", touchEnd, { passive: false });
    });

    document.getElementById("level-display").textContent = config.infinite ? `Level ${currentLevel} (Round ${infiniteRound + 1})` : `Level ${currentLevel}`;
    document.getElementById("stats-display").textContent = `Time: ${Math.floor(config.time / 60)}:${(config.time % 60).toString().padStart(2, "0")} | Score: ${score}/${levelElements.length} | Accuracy: ${totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0}%`;
    document.getElementById("lives").textContent = "❤".repeat(lives);
    timeLeft = config.time;

    document.getElementById("hint-btn").addEventListener("click", () => {
        showHint();
        document.getElementById("hint-popup").style.display = "flex";
    });
    document.getElementById("close-hint-popup-btn").addEventListener("click", () => {
        document.getElementById("hint-popup").style.display = "none";
    });
    document.getElementById("settings-btn").addEventListener("click", () => {
        document.getElementById("settings-popup").style.display = "flex";
    });
    document.getElementById("close-popup-btn").addEventListener("click", () => {
        document.getElementById("settings-popup").style.display = "none";
    });
    document.getElementById("sound-toggle").addEventListener("change", () => {
        soundEnabled = document.getElementById("sound-toggle").checked;
        setCookie("soundEnabled", soundEnabled, 365);
    });
    document.getElementById("theme-toggle").addEventListener("change", () => {
        isDarkTheme = document.getElementById("theme-toggle").checked;
        document.body.classList.toggle("light-theme", !isDarkTheme);
        setCookie("theme", isDarkTheme ? "dark" : "light", 365);
    });
    document.getElementById("reset-progress-btn").addEventListener("click", () => {
        setCookie("highestLevel", 1, 365);
        setCookie("totalScore", 0, 365);
        location.reload();
    });
    document.getElementById("next-level-btn").addEventListener("click", nextLevel);
    document.getElementById("restart-btn").addEventListener("click", () => location.reload());

    document.getElementById("theme-toggle").checked = isDarkTheme;
    if (!isDarkTheme) document.body.classList.add("light-theme");

    startTimer();
}

let draggedElement = null;
let touchStartX = 0;
let touchStartY = 0;

function dragStart(e) {
    if (!gameActive) return;
    draggedElement = e.target;
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
    handleDrop(slot, atomic);
}

function touchStart(e) {
    if (!gameActive) return;
    e.preventDefault();
    draggedElement = e.target;
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    draggedElement.classList.add("dragging");
}

function touchMove(e) {
    if (!gameActive || !draggedElement) return;
    e.preventDefault();
    const touch = e.touches[0];
    draggedElement.style.position = "absolute";
    draggedElement.style.left = `${touch.clientX - draggedElement.offsetWidth / 2}px`;
    draggedElement.style.top = `${touch.clientY - draggedElement.offsetHeight / 2}px`;
}

function touchEnd(e) {
    if (!gameActive || !draggedElement) return;
    e.preventDefault();
    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    draggedElement.style.position = "";
    draggedElement.style.left = "";
    draggedElement.style.top = "";
    draggedElement.classList.remove("dragging");

    if (dropTarget && dropTarget.classList.contains("slot")) {
        handleDrop(dropTarget, draggedElement.dataset.atomic);
    }
    draggedElement = null;
}

function handleDrop(slot, atomic) {
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
        document.getElementById("stats-display").textContent = `Time: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, "0")} | Score: ${score}/${levelConfig[currentLevel - 1].elements.length} | Accuracy: ${totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0}%`;
        if (soundEnabled) correctSound.play();
        if (combo >= 3) {
            score += 2;
            totalScore += 20;
            document.getElementById("stats-display").textContent = `Time: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, "0")} | Score: ${score}/${levelConfig[currentLevel - 1].elements.length} | Accuracy: ${totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0}%`;
        }
        const config = levelConfig[currentLevel - 1];
        const targetScore = config.group === "master-challenge-2" ? 118 : config.elements.length;
        if (score >= targetScore) {
            gameActive = false;
            setCookie("highestLevel", Math.max(currentLevel, parseInt(getCookie("highestLevel") || 1)), 365);
            setCookie("totalScore", totalScore, 365);
            if (soundEnabled) victorySound.play();
            const modal = document.getElementById("victory-modal");
            document.getElementById("modal-title").textContent = config.infinite ? `Round ${infiniteRound + 1} Complete!` : `Level ${currentLevel} Complete!`;
            document.getElementById("modal-message").textContent = getLevelMessage(currentLevel);
            modal.style.display = "block";
            document.getElementById("next-level-btn").textContent = config.infinite ? "Next Round" : "Next Level";
            document.getElementById("next-level-btn").style.display = "inline-block";
        }
    } else {
        slot.classList.add("wrong");
        lives--;
        combo = 0;
        document.getElementById("lives").textContent = "❤".repeat(lives);
        document.getElementById("stats-display").textContent = `Time: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, "0")} | Score: ${score}/${levelConfig[currentLevel - 1].elements.length} | Accuracy: ${totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0}%`;
        if (soundEnabled) wrongSound.play();
        setTimeout(() => slot.classList.remove("wrong"), 300);
        if (lives <= 0) {
            gameActive = false;
            document.getElementById("victory-modal").style.display = "block";
            document.getElementById("modal-title").textContent = "Game Over!";
            document.getElementById("modal-message").textContent = "You've run out of lives. Restart to try again!";
            document.getElementById("next-level-btn").style.display = "none";
        }
    }
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
        document.getElementById("stats-display").textContent = `Time: ${minutes}:${seconds.toString().padStart(2, "0")} | Score: ${score}/${levelConfig[currentLevel - 1].elements.length} | Accuracy: ${totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0}%`;
        if (timeLeft <= 0) {
            gameActive = false;
            document.getElementById("victory-modal").style.display = "block";
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
    } else if (currentLevel < levelConfig.length) {
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
        "Alkali Apprentice!", "Alkali Adept!", "Alkali Master!", "Alkaline Beginner!", "Alkaline Pro!", "Alkaline Expert!",
        "Transition Novice!", "Transition Specialist!", "Transition Pro!", "Transition Master!", "Transition Guru!", "Transition Legend!",
        "Transition Elite!", "Transition Champion!", "Post-Transition Starter!", "Post-Transition Pro!", "Post-Transition Expert!",
        "Metalloid Novice!", "Metalloid Master!", "Non-Metal Beginner!", "Non-Metal Pro!", "Hydrogen Hero!", "Hydrogen Legend!",
        "Halogen Starter!", "Halogen Master!", "Noble Gas Novice!", "Noble Gas Champion!", "Lanthanide Learner!", "Lanthanide Pro!",
        "Lanthanide Master!", "Lanthanide Legend!", "Actinide Apprentice!", "Actinide Adept!", "Actinide Expert!", "Actinide Master!",
        "Mixed Element Starter!", "Mixed Element Pro!", "Mixed Element Master!", "Mixed Element Legend!", "Mixed Element Guru!",
        "Mixed Element Champion!", "Mixed Element Elite!", "Mixed Element Overlord!", "Mixed Element Supreme!", "Mixed Element Sovereign!",
        "Mixed Element Emperor!", "Mixed Element God!", "Master Chemist!", "Periodic Table Conqueror!", "Infinite Chemistry Legend!"
    ];
    return messages[level - 1] || "Level Complete!";
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