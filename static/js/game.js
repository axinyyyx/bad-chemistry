const elements = [
    { atomicNumber: 1, name: "Hydrogen", symbol: "H", group: "non-metal", latinName: "Hydrogenium", valency: [1, -1], period: 1, groupNumber: 1 },
    { atomicNumber: 2, name: "Helium", symbol: "He", group: "noble-gas", latinName: "Helium", valency: [0], period: 1, groupNumber: 18 },
    { atomicNumber: 3, name: "Lithium", symbol: "Li", group: "alkali-metal", latinName: "Lithium", valency: [1], period: 2, groupNumber: 1 },
    { atomicNumber: 4, name: "Beryllium", symbol: "Be", group: "alkaline-earth-metal", latinName: "Beryllium", valency: [2], period: 2, groupNumber: 2 },
    { atomicNumber: 5, name: "Boron", symbol: "B", group: "metalloid", latinName: "Borum", valency: [3], period: 2, groupNumber: 13 },
    { atomicNumber: 6, name: "Carbon", symbol: "C", group: "non-metal", latinName: "Carboneum", valency: [4, -4], period: 2, groupNumber: 14 },
    { atomicNumber: 7, name: "Nitrogen", symbol: "N", group: "non-metal", latinName: "Nitrogenium", valency: [3, -3, 5], period: 2, groupNumber: 15 },
    { atomicNumber: 8, name: "Oxygen", symbol: "O", group: "non-metal", latinName: "Oxygenium", valency: [-2], period: 2, groupNumber: 16 },
    { atomicNumber: 9, name: "Fluorine", symbol: "F", group: "non-metal", latinName: "Fluorum", valency: [-1], period: 2, groupNumber: 17 },
    { atomicNumber: 10, name: "Neon", symbol: "Ne", group: "noble-gas", latinName: "Neon", valency: [0], period: 2, groupNumber: 18 },
    { atomicNumber: 11, name: "Sodium", symbol: "Na", group: "alkali-metal", latinName: "Natrium", valency: [1], period: 3, groupNumber: 1 },
    { atomicNumber: 12, name: "Magnesium", symbol: "Mg", group: "alkaline-earth-metal", latinName: "Magnesium", valency: [2], period: 3, groupNumber: 2 },
    { atomicNumber: 13, name: "Aluminium", symbol: "Al", group: "post-transition-metal", latinName: "Aluminium", valency: [3], period: 3, groupNumber: 13 },
    { atomicNumber: 14, name: "Silicon", symbol: "Si", group: "metalloid", latinName: "Silicium", valency: [4], period: 3, groupNumber: 14 },
    { atomicNumber: 15, name: "Phosphorus", symbol: "P", group: "non-metal", latinName: "Phosphorus", valency: [3, 5], period: 3, groupNumber: 15 },
    { atomicNumber: 16, name: "Sulfur", symbol: "S", group: "non-metal", latinName: "Sulphur", valency: [-2, 4, 6], period: 3, groupNumber: 16 },
    { atomicNumber: 17, name: "Chlorine", symbol: "Cl", group: "non-metal", latinName: "Chlorum", valency: [-1, 1, 3, 5, 7], period: 3, groupNumber: 17 },
    { atomicNumber: 18, name: "Argon", symbol: "Ar", group: "noble-gas", latinName: "Argon", valency: [0], period: 3, groupNumber: 18 },
    { atomicNumber: 19, name: "Potassium", symbol: "K", group: "alkali-metal", latinName: "Kalium", valency: [1], period: 4, groupNumber: 1 },
    { atomicNumber: 20, name: "Calcium", symbol: "Ca", group: "alkaline-earth-metal", latinName: "Calcium", valency: [2], period: 4, groupNumber: 2 },
    { atomicNumber: 21, name: "Scandium", symbol: "Sc", group: "transition-metal", latinName: "Scandium", valency: [3], period: 4, groupNumber: 3 },
    { atomicNumber: 22, name: "Titanium", symbol: "Ti", group: "transition-metal", latinName: "Titanium", valency: [4], period: 4, groupNumber: 4 },
    { atomicNumber: 23, name: "Vanadium", symbol: "V", group: "transition-metal", latinName: "Vanadium", valency: [5], period: 4, groupNumber: 5 },
    { atomicNumber: 24, name: "Chromium", symbol: "Cr", group: "transition-metal", latinName: "Chromium", valency: [3, 6], period: 4, groupNumber: 6 },
    { atomicNumber: 25, name: "Manganese", symbol: "Mn", group: "transition-metal", latinName: "Manganum", valency: [2, 4, 7], period: 4, groupNumber: 7 },
    { atomicNumber: 26, name: "Iron", symbol: "Fe", group: "transition-metal", latinName: "Ferrum", valency: [2, 3], period: 4, groupNumber: 8 },
    { atomicNumber: 27, name: "Cobalt", symbol: "Co", group: "transition-metal", latinName: "Cobaltum", valency: [2, 3], period: 4, groupNumber: 9 },
    { atomicNumber: 28, name: "Nickel", symbol: "Ni", group: "transition-metal", latinName: "Niccolum", valency: [2], period: 4, groupNumber: 10 },
    { atomicNumber: 29, name: "Copper", symbol: "Cu", group: "transition-metal", latinName: "Cuprum", valency: [1, 2], period: 4, groupNumber: 11 },
    { atomicNumber: 30, name: "Zinc", symbol: "Zn", group: "transition-metal", latinName: "Zincum", valency: [2], period: 4, groupNumber: 12 },
    { atomicNumber: 31, name: "Gallium", symbol: "Ga", group: "post-transition-metal", latinName: "Gallium", valency: [3], period: 4, groupNumber: 13 },
    { atomicNumber: 32, name: "Germanium", symbol: "Ge", group: "metalloid", latinName: "Germanium", valency: [4], period: 4, groupNumber: 14 },
    { atomicNumber: 33, name: "Arsenic", symbol: "As", group: "metalloid", latinName: "Arsenicum", valency: [3, 5], period: 4, groupNumber: 15 },
    { atomicNumber: 34, name: "Selenium", symbol: "Se", group: "non-metal", latinName: "Selenium", valency: [-2, 4, 6], period: 4, groupNumber: 16 },
    { atomicNumber: 35, name: "Bromine", symbol: "Br", group: "non-metal", latinName: "Bromum", valency: [-1, 1, 5], period: 4, groupNumber: 17 },
    { atomicNumber: 36, name: "Krypton", symbol: "Kr", group: "noble-gas", latinName: "Krypton", valency: [0], period: 4, groupNumber: 18 },
    { atomicNumber: 37, name: "Rubidium", symbol: "Rb", group: "alkali-metal", latinName: "Rubidium", valency: [1], period: 5, groupNumber: 1 },
    { atomicNumber: 38, name: "Strontium", symbol: "Sr", group: "alkaline-earth-metal", latinName: "Strontium", valency: [2], period: 5, groupNumber: 2 },
    { atomicNumber: 39, name: "Yttrium", symbol: "Y", group: "transition-metal", latinName: "Yttrium", valency: [3], period: 5, groupNumber: 3 },
    { atomicNumber: 40, name: "Zirconium", symbol: "Zr", group: "transition-metal", latinName: "Zirconium", valency: [4], period: 5, groupNumber: 4 },
    { atomicNumber: 41, name: "Niobium", symbol: "Nb", group: "transition-metal", latinName: "Niobium", valency: [5], period: 5, groupNumber: 5 },
    { atomicNumber: 42, name: "Molybdenum", symbol: "Mo", group: "transition-metal", latinName: "Molybdenum", valency: [6], period: 5, groupNumber: 6 },
    { atomicNumber: 43, name: "Technetium", symbol: "Tc", group: "transition-metal", latinName: "Technetium", valency: [7], period: 5, groupNumber: 7 },
    { atomicNumber: 44, name: "Ruthenium", symbol: "Ru", group: "transition-metal", latinName: "Ruthenium", valency: [3, 4, 8], period: 5, groupNumber: 8 },
    { atomicNumber: 45, name: "Rhodium", symbol: "Rh", group: "transition-metal", latinName: "Rhodium", valency: [3], period: 5, groupNumber: 9 },
    { atomicNumber: 46, name: "Palladium", symbol: "Pd", group: "transition-metal", latinName: "Palladium", valency: [2, 4], period: 5, groupNumber: 10 },
    { atomicNumber: 47, name: "Silver", symbol: "Ag", group: "transition-metal", latinName: "Argentum", valency: [1], period: 5, groupNumber: 11 },
    { atomicNumber: 48, name: "Cadmium", symbol: "Cd", group: "transition-metal", latinName: "Cadmium", valency: [2], period: 5, groupNumber: 12 },
    { atomicNumber: 49, name: "Indium", symbol: "In", group: "post-transition-metal", latinName: "Indium", valency: [3], period: 5, groupNumber: 13 },
    { atomicNumber: 50, name: "Tin", symbol: "Sn", group: "post-transition-metal", latinName: "Stannum", valency: [2, 4], period: 5, groupNumber: 14 },
    { atomicNumber: 51, name: "Antimony", symbol: "Sb", group: "metalloid", latinName: "Stibium", valency: [3, 5], period: 5, groupNumber: 15 },
    { atomicNumber: 52, name: "Tellurium", symbol: "Te", group: "metalloid", latinName: "Tellurium", valency: [-2, 4, 6], period: 5, groupNumber: 16 },
    { atomicNumber: 53, name: "Iodine", symbol: "I", group: "non-metal", latinName: "Iodium", valency: [-1, 1, 5, 7], period: 5, groupNumber: 17 },
    { atomicNumber: 54, name: "Xenon", symbol: "Xe", group: "noble-gas", latinName: "Xenon", valency: [0, 2, 4, 6, 8], period: 5, groupNumber: 18 },
    { atomicNumber: 55, name: "Caesium", symbol: "Cs", group: "alkali-metal", latinName: "Caesium", valency: [1], period: 6, groupNumber: 1 },
    { atomicNumber: 56, name: "Barium", symbol: "Ba", group: "alkaline-earth-metal", latinName: "Barium", valency: [2], period: 6, groupNumber: 2 },
    { atomicNumber: 57, name: "Lanthanum", symbol: "La", group: "lanthanide", latinName: "Lanthanum", valency: [3], period: 6, groupNumber: 3 },
    { atomicNumber: 58, name: "Cerium", symbol: "Ce", group: "lanthanide", latinName: "Cerium", valency: [3, 4], period: 6, groupNumber: 4 },
    { atomicNumber: 59, name: "Praseodymium", symbol: "Pr", group: "lanthanide", latinName: "Praseodymium", valency: [3], period: 6, groupNumber: 5 },
    { atomicNumber: 60, name: "Neodymium", symbol: "Nd", group: "lanthanide", latinName: "Neodymium", valency: [3], period: 6, groupNumber: 6 },
    { atomicNumber: 61, name: "Promethium", symbol: "Pm", group: "lanthanide", latinName: "Promethium", valency: [3], period: 6, groupNumber: 7 },
    { atomicNumber: 62, name: "Samarium", symbol: "Sm", group: "lanthanide", latinName: "Samarium", valency: [3], period: 6, groupNumber: 8 },
    { atomicNumber: 63, name: "Europium", symbol: "Eu", group: "lanthanide", latinName: "Europium", valency: [2, 3], period: 6, groupNumber: 9 },
    { atomicNumber: 64, name: "Gadolinium", symbol: "Gd", group: "lanthanide", latinName: "Gadolinium", valency: [3], period: 6, groupNumber: 10 },
    { atomicNumber: 65, name: "Terbium", symbol: "Tb", group: "lanthanide", latinName: "Terbium", valency: [3, 4], period: 6, groupNumber: 11 },
    { atomicNumber: 66, name: "Dysprosium", symbol: "Dy", group: "lanthanide", latinName: "Dysprosium", valency: [3], period: 6, groupNumber: 12 },
    { atomicNumber: 67, name: "Holmium", symbol: "Ho", group: "lanthanide", latinName: "Holmium", valency: [3], period: 6, groupNumber: 13 },
    { atomicNumber: 68, name: "Erbium", symbol: "Er", group: "lanthanide", latinName: "Erbium", valency: [3], period: 6, groupNumber: 14 },
    { atomicNumber: 69, name: "Thulium", symbol: "Tm", group: "lanthanide", latinName: "Thulium", valency: [3], period: 6, groupNumber: 15 },
    { atomicNumber: 70, name: "Ytterbium", symbol: "Yb", group: "lanthanide", latinName: "Ytterbium", valency: [2, 3], period: 6, groupNumber: 16 },
    { atomicNumber: 71, name: "Lutetium", symbol: "Lu", group: "lanthanide", latinName: "Lutetium", valency: [3], period: 6, groupNumber: 17 },
    { atomicNumber: 72, name: "Hafnium", symbol: "Hf", group: "transition-metal", latinName: "Hafnium", valency: [4], period: 6, groupNumber: 4 },
    { atomicNumber: 73, name: "Tantalum", symbol: "Ta", group: "transition-metal", latinName: "Tantalum", valency: [5], period: 6, groupNumber: 5 },
    { atomicNumber: 74, name: "Tungsten", symbol: "W", group: "transition-metal", latinName: "Wolframium", valency: [6], period: 6, groupNumber: 6 },
    { atomicNumber: 75, name: "Rhenium", symbol: "Re", group: "transition-metal", latinName: "Rhenium", valency: [4, 7], period: 6, groupNumber: 7 },
    { atomicNumber: 76, name: "Osmium", symbol: "Os", group: "transition-metal", latinName: "Osmium", valency: [4, 6, 8], period: 6, groupNumber: 8 },
    { atomicNumber: 77, name: "Iridium", symbol: "Ir", group: "transition-metal", latinName: "Iridium", valency: [3, 4], period: 6, groupNumber: 9 },
    { atomicNumber: 78, name: "Platinum", symbol: "Pt", group: "transition-metal", latinName: "Platinum", valency: [2, 4], period: 6, groupNumber: 10 },
    { atomicNumber: 79, name: "Gold", symbol: "Au", group: "transition-metal", latinName: "Aurum", valency: [1, 3], period: 6, groupNumber: 11 },
    { atomicNumber: 80, name: "Mercury", symbol: "Hg", group: "transition-metal", latinName: "Hydrargyrum", valency: [1, 2], period: 6, groupNumber: 12 },
    { atomicNumber: 81, name: "Thallium", symbol: "Tl", group: "post-transition-metal", latinName: "Thallium", valency: [1, 3], period: 6, groupNumber: 13 },
    { atomicNumber: 82, name: "Lead", symbol: "Pb", group: "post-transition-metal", latinName: "Plumbum", valency: [2, 4], period: 6, groupNumber: 14 },
    { atomicNumber: 83, name: "Bismuth", symbol: "Bi", group: "post-transition-metal", latinName: "Bismuthum", valency: [3, 5], period: 6, groupNumber: 15 },
    { atomicNumber: 84, name: "Polonium", symbol: "Po", group: "post-transition-metal", latinName: "Polonium", valency: [2, 4], period: 6, groupNumber: 16 },
    { atomicNumber: 85, name: "Astatine", symbol: "At", group: "metalloid", latinName: "Astatium", valency: [-1, 1, 5], period: 6, groupNumber: 17 },
    { atomicNumber: 86, name: "Radon", symbol: "Rn", group: "noble-gas", latinName: "Radon", valency: [0], period: 6, groupNumber: 18 },
    { atomicNumber: 87, name: "Francium", symbol: "Fr", group: "alkali-metal", latinName: "Francium", valency: [1], period: 7, groupNumber: 1 },
    { atomicNumber: 88, name: "Radium", symbol: "Ra", group: "alkaline-earth-metal", latinName: "Radium", valency: [2], period: 7, groupNumber: 2 },
    { atomicNumber: 89, name: "Actinium", symbol: "Ac", group: "actinide", latinName: "Actinium", valency: [3], period: 7, groupNumber: 3 },
    { atomicNumber: 90, name: "Thorium", symbol: "Th", group: "actinide", latinName: "Thorium", valency: [4], period: 7, groupNumber: 4 },
    { atomicNumber: 91, name: "Protactinium", symbol: "Pa", group: "actinide", latinName: "Protactinium", valency: [5], period: 7, groupNumber: 5 },
    { atomicNumber: 92, name: "Uranium", symbol: "U", group: "actinide", latinName: "Uranium", valency: [6], period: 7, groupNumber: 6 },
    { atomicNumber: 93, name: "Neptunium", symbol: "Np", group: "actinide", latinName: "Neptunium", valency: [5], period: 7, groupNumber: 7 },
    { atomicNumber: 94, name: "Plutonium", symbol: "Pu", group: "actinide", latinName: "Plutonium", valency: [4, 6], period: 7, groupNumber: 8 },
    { atomicNumber: 95, name: "Americium", symbol: "Am", group: "actinide", latinName: "Americium", valency: [3], period: 7, groupNumber: 9 },
    { atomicNumber: 96, name: "Curium", symbol: "Cm", group: "actinide", latinName: "Curium", valency: [3], period: 7, groupNumber: 10 },
    { atomicNumber: 97, name: "Berkelium", symbol: "Bk", group: "actinide", latinName: "Berkelium", valency: [3, 4], period: 7, groupNumber: 11 },
    { atomicNumber: 98, name: "Californium", symbol: "Cf", group: "actinide", latinName: "Californium", valency: [3], period: 7, groupNumber: 12 },
    { atomicNumber: 99, name: "Einsteinium", symbol: "Es", group: "actinide", latinName: "Einsteinium", valency: [3], period: 7, groupNumber: 13 },
    { atomicNumber: 100, name: "Fermium", symbol: "Fm", group: "actinide", latinName: "Fermium", valency: [3], period: 7, groupNumber: 14 },
    { atomicNumber: 101, name: "Mendelevium", symbol: "Md", group: "actinide", latinName: "Mendelevium", valency: [2, 3], period: 7, groupNumber: 15 },
    { atomicNumber: 102, name: "Nobelium", symbol: "No", group: "actinide", latinName: "Nobelium", valency: [2, 3], period: 7, groupNumber: 16 },
    { atomicNumber: 103, name: "Lawrencium", symbol: "Lr", group: "actinide", latinName: "Lawrencium", valency: [3], period: 7, groupNumber: 17 },
    { atomicNumber: 104, name: "Rutherfordium", symbol: "Rf", group: "transition-metal", latinName: "Rutherfordium", valency: [4], period: 7, groupNumber: 4 },
    { atomicNumber: 105, name: "Dubnium", symbol: "Db", group: "transition-metal", latinName: "Dubnium", valency: [5], period: 7, groupNumber: 5 },
    { atomicNumber: 106, name: "Seaborgium", symbol: "Sg", group: "transition-metal", latinName: "Seaborgium", valency: [6], period: 7, groupNumber: 6 },
    { atomicNumber: 107, name: "Bohrium", symbol: "Bh", group: "transition-metal", latinName: "Bohrium", valency: [7], period: 7, groupNumber: 7 },
    { atomicNumber: 108, name: "Hassium", symbol: "Hs", group: "transition-metal", latinName: "Hassium", valency: [8], period: 7, groupNumber: 8 },
    { atomicNumber: 109, name: "Meitnerium", symbol: "Mt", group: "transition-metal", latinName: "Meitnerium", valency: [], period: 7, groupNumber: 9 },
    { atomicNumber: 110, name: "Darmstadtium", symbol: "Ds", group: "transition-metal", latinName: "Darmstadtium", valency: [], period: 7, groupNumber: 10 },
    { atomicNumber: 111, name: "Roentgenium", symbol: "Rg", group: "transition-metal", latinName: "Roentgenium", valency: [], period: 7, groupNumber: 11 },
    { atomicNumber: 112, name: "Copernicium", symbol: "Cn", group: "transition-metal", latinName: "Copernicium", valency: [2], period: 7, groupNumber: 12 },
    { atomicNumber: 113, name: "Nihonium", symbol: "Nh", group: "post-transition-metal", latinName: "Nihonium", valency: [], period: 7, groupNumber: 13 },
    { atomicNumber: 114, name: "Flerovium", symbol: "Fl", group: "post-transition-metal", latinName: "Flerovium", valency: [], period: 7, groupNumber: 14 },
    { atomicNumber: 115, name: "Moscovium", symbol: "Mc", group: "post-transition-metal", latinName: "Moscovium", valency: [], period: 7, groupNumber: 15 },
    { atomicNumber: 116, name: "Livermorium", symbol: "Lv", group: "post-transition-metal", latinName: "Livermorium", valency: [], period: 7, groupNumber: 16 },
    { atomicNumber: 117, name: "Tennessine", symbol: "Ts", group: "metalloid", latinName: "Tennessine", valency: [], period: 7, groupNumber: 17 },
    { atomicNumber: 118, name: "Oganesson", symbol: "Og", group: "noble-gas", latinName: "Oganesson", valency: [], period: 7, groupNumber: 18 }
];

const levelConfigs = [
    { name: "Beginner", elements: elements.slice(0, 20), targetScore: 20, decoys: 0, showAtomicNumber: true, subLevels: 5, quizQuestions: 5 },
    { name: "Explorer", elements: elements.filter(e => ["alkali-metal", "alkaline-earth-metal", "post-transition-metal", "metalloid", "non-metal"].includes(e.group)).slice(0, 20), targetScore: 20, decoys: 2, showAtomicNumber: false, subLevels: 5, quizQuestions: 5 },
    { name: "Pro", elements: elements.filter(e => e.group === "transition-metal").slice(0, 20), targetScore: 20, decoys: 3, showAtomicNumber: false, subLevels: 5, quizQuestions: 5 },
    { name: "Mastermind", elements: elements.filter(e => ["lanthanide", "actinide", "noble-gas"].includes(e.group)), targetScore: 23, decoys: 4, showAtomicNumber: false, subLevels: 5, quizQuestions: 5 },
    { name: "Guru", elements: elements.filter(e => ["lanthanide", "actinide"].includes(e.group)), targetScore: 30, decoys: 5, showAtomicNumber: false, subLevels: 5, quizQuestions: 5 },
    { name: "Infinity", elements: elements, targetScore: 30, decoys: 5, showAtomicNumber: false, subLevels: Infinity, quizQuestions: 10 }
];

const mnemonics = {
    'alkali-metal': 'LiNa K RbCsFr (Little Nasty Kids Rub Cats Fur)',
    'alkaline-earth-metal': 'BeMgCa SrBaRa (Beryllium Magnesium Calcium Strontium Barium Radium)',
    'transition-metal': 'ScTiVCrMnFeCoNiCuZn (Scary Tigers Vanquish Chromium, Manganese, Ferocious Cobalt, Nickel, Copper, Zinc)',
    'post-transition-metal': 'AlGaInSnTlPbBi (Aluminum Gallium Indium Tin Thallium Lead Bismuth)',
    'metalloid': 'BSiGeAsSbTeAt (Boron Silicon Germanium Arsenic Antimony Tellurium Astatine)',
    'non-metal': 'HCNOFPSClBrI (Hydrogen Carbon Nitrogen Oxygen Fluorine Phosphorus Sulfur Chlorine Bromine Iodine)',
    'noble-gas': 'HeNeArKrXeRn (Hi Neha, Are Krishan X-Ray Ready)',
    'lanthanide': 'LaCePrNdPmSmEuGdTbDyHoErTmYbLu (Lanthanum Cerium Praseodymium Neodymium Promethium Samarium Europium Gadolinium Terbium Dysprosium Holmium Erbium Thulium Ytterbium Lutetium)',
    'actinide': 'AcThPaUNpPuAmCmBkCfEsFmMdNoLr (Actinium Thorium Protactinium Uranium Neptunium Plutonium Americium Curium Berkelium Californium Einsteinium Fermium Mendelevium Nobelium Lawrencium)'
};

let currentLevel = parseInt(localStorage.getItem('periodicGameCurrentLevel')) || 1;
let currentSubLevel = parseInt(localStorage.getItem('periodicGameCurrentSubLevel')) || 1;
let lives = 3;
let score = 0;
let streak = 0;
let selectedCard = null;
let timer;
let timeLeft = 120;
let accuracyData = JSON.parse(localStorage.getItem('periodicGameAccuracy')) || {};
let quizData = JSON.parse(localStorage.getItem('periodicGameQuizData')) || { correct: 0, total: 0, wrongAnswers: [] };
let unlockedLevels = JSON.parse(localStorage.getItem('periodicGameUnlockedLevels')) || [1];
let soundEnabled = localStorage.getItem('periodicGameSound') !== 'false';
let theme = localStorage.getItem('periodicGameTheme') || 'dark';
let activeCards = [];
let levelElements = [];
let quizMode = false;
let currentQuizQuestion = 0;
let quizAnswers = [];

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
    document.getElementById('app').classList.toggle('light-mode', theme === 'light');
    document.getElementById('theme-toggle').checked = theme === 'dark';
    document.getElementById('theme-label').textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    document.getElementById('start-game-btn').addEventListener('click', () => {
        document.getElementById('instructions-modal').classList.add('hidden');
        startLevel(currentLevel, currentSubLevel);
    });
    setupSettings();
    setupPeriodicTable();
    setupQuizMode();
    updateLevelSelect();
    addProgressBar();
    startLevel(currentLevel, currentSubLevel);
}

function addProgressBar() {
    const hud = document.getElementById('hud');
    const progressContainer = document.createElement('div');
    progressContainer.style.width = '100%';
    progressContainer.style.height = '20px';
    progressContainer.style.background = '#34495e';
    progressContainer.style.borderRadius = '10px';
    progressContainer.style.overflow = 'hidden';
    progressContainer.style.margin = '10px 0';
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.height = '100%';
    progressBar.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
    progressBar.style.width = '0%';
    progressBar.style.transition = 'width 0.5s ease';
    progressContainer.appendChild(progressBar);
    hud.insertBefore(progressContainer, hud.firstChild);
}

function updateProgressBar() {
    const config = levelConfigs[currentLevel - 1];
    const percentage = (score / config.targetScore) * 100;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
}

function setupSettings() {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const showInstructionsBtn = document.getElementById('show-instructions-btn');
    const periodicTableBtn = document.getElementById('periodic-table-btn');
    const quizModeBtn = document.getElementById('quiz-mode-btn');
    const soundToggle = document.getElementById('sound-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const themeLabel = document.getElementById('theme-label');
    const resetLevelsBtn = document.getElementById('reset-levels-btn');
    const levelSelect = document.getElementById('level-select');

    soundToggle.checked = soundEnabled;
    soundToggle.addEventListener('change', () => {
        soundEnabled = soundToggle.checked;
        localStorage.setItem('periodicGameSound', soundEnabled);
    });

    themeToggle.addEventListener('change', () => {
        theme = themeToggle.checked ? 'dark' : 'light';
        localStorage.setItem('periodicGameTheme', theme);
        document.getElementById('app').classList.toggle('light-mode', theme === 'light');
        themeLabel.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
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

    periodicTableBtn.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
        window.location.href = 'pt.html'; // Redirect to pt.html
    });

    quizModeBtn.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
        quizMode = true;
        startQuiz();
    });

    resetLevelsBtn.addEventListener('click', () => {
        accuracyData = {};
        quizData = { correct: 0, total: 0, wrongAnswers: [] };
        unlockedLevels = [1];
        currentLevel = 1;
        currentSubLevel = 1;
        localStorage.setItem('periodicGameAccuracy', JSON.stringify(accuracyData));
        localStorage.setItem('periodicGameQuizData', JSON.stringify(quizData));
        localStorage.setItem('periodicGameUnlockedLevels', JSON.stringify(unlockedLevels));
        localStorage.setItem('periodicGameCurrentLevel', '1');
        localStorage.setItem('periodicGameCurrentSubLevel', '1');
        updateLevelSelect();
        settingsModal.classList.add('hidden');
        startLevel(1, 1);
    });

    levelSelect.addEventListener('change', () => {
        currentLevel = parseInt(levelSelect.value);
        currentSubLevel = 1;
        localStorage.setItem('periodicGameCurrentLevel', currentLevel);
        localStorage.setItem('periodicGameCurrentSubLevel', currentSubLevel);
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
        if (level === currentLevel) option.selected = true;
        levelSelect.appendChild(option);
    });
}

function setupPeriodicTable() {
    const categorySelect = document.getElementById('category-select');
    const closeTableBtn = document.getElementById('close-table-btn');
    categorySelect.addEventListener('change', () => {
        displayPeriodicTable(categorySelect.value);
    });
    closeTableBtn.addEventListener('click', () => {
        document.getElementById('periodic-table-modal').classList.add('hidden');
    });
}

function displayPeriodicTable(category) {
    const mainTable = document.getElementById('full-periodic-table');
    const lanthanideActinideTable = document.getElementById('lanthanide-actinide-table');
    const mnemonicDisplay = document.getElementById('mnemonic-display');
    mainTable.innerHTML = '';
    lanthanideActinideTable.innerHTML = '';
    mainTable.style.gridTemplateColumns = `repeat(18, 60px)`;
    lanthanideActinideTable.style.gridTemplateColumns = `repeat(15, 60px)`;

    if (category !== 'all' && mnemonics[category]) {
        mnemonicDisplay.classList.remove('hidden');
        mnemonicDisplay.textContent = `Mnemonic: ${mnemonics[category]}`;
    } else {
        mnemonicDisplay.classList.add('hidden');
    }

    const filteredElements = category === 'all' ? elements : elements.filter(e => e.group === category);

    const mainGrid = Array(7).fill().map(() => Array(18).fill(null));
    filteredElements.forEach(element => {
        if (element.group !== 'lanthanide' && element.group !== 'actinide') {
            const row = element.period - 1;
            const col = element.groupNumber - 1;
            if (row >= 0 && row < 7 && col >= 0 && col < 18) {
                mainGrid[row][col] = element;
            }
        }
    });

    for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 18; col++) {
            const div = document.createElement('div');
            div.classList.add('table-element');
            if (mainGrid[row][col]) {
                const element = mainGrid[row][col];
                div.innerHTML = `
                    <span>${element.atomicNumber}</span>
                    <span>${element.symbol}</span>
                    <span>${element.name}</span>
                    <span>${element.latinName}</span>
                    <span>Val: ${element.valency.join(', ')}</span>
                    <span>${element.group.replace(/-/g, ' ')}</span>
                `;
            }
            mainTable.appendChild(div);
        }
    }

    const fBlockGrid = Array(2).fill().map(() => Array(15).fill(null));
    filteredElements.forEach(element => {
        if (element.group === 'lanthanide' || element.group === 'actinide') {
            const index = element.atomicNumber - (element.group === 'lanthanide' ? 57 : 89);
            const row = element.group === 'lanthanide' ? 0 : 1;
            if (index >= 0 && index < 15) {
                fBlockGrid[row][index] = element;
            }
        }
    });

    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 15; col++) {
            const div = document.createElement('div');
            div.classList.add('table-element');
            if (fBlockGrid[row][col]) {
                const element = fBlockGrid[row][col];
                div.innerHTML = `
                    <span>${element.atomicNumber}</span>
                    <span>${element.symbol}</span>
                    <span>${element.name}</span>
                    <span>${element.latinName}</span>
                    <span>Val: ${element.valency.join(', ')}</span>
                    <span>${element.group.replace(/-/g, ' ')}</span>
                `;
            }
            lanthanideActinideTable.appendChild(div);
        }
    }
}

function setupQuizMode() {
    const nextQuizBtn = document.getElementById('next-quiz-btn');
    const quizResultsBtn = document.getElementById('quiz-results-btn');
    const closeQuizBtn = document.getElementById('close-quiz-btn');
    const closeResultsBtn = document.getElementById('close-results-btn');

    nextQuizBtn.addEventListener('click', () => {
        currentQuizQuestion++;
        if (currentQuizQuestion < levelConfigs[currentLevel - 1].quizQuestions && !quizMode) {
            generateLevelQuizQuestion();
        } else {
            showQuizResults();
        }
    });

    quizResultsBtn.addEventListener('click', () => {
        showQuizResults();
    });

    closeQuizBtn.addEventListener('click', () => {
        document.getElementById('quiz-modal').classList.add('hidden');
        quizMode = false;
        startLevel(currentLevel, currentSubLevel);
    });

    closeResultsBtn.addEventListener('click', () => {
        document.getElementById('quiz-results-modal').classList.add('hidden');
        if (!quizMode) {
            proceedToNextSubLevel();
        } else {
            quizMode = false;
            startLevel(currentLevel, currentSubLevel);
        }
    });
}

function startQuiz() {
    quizMode = true;
    currentQuizQuestion = 0;
    quizAnswers = [];
    document.getElementById('quiz-modal').classList.remove('hidden');
    generateQuizQuestion();
}

function generateQuizQuestion() {
    const questionTypes = ['symbol-to-name', 'name-to-symbol', 'atomic-to-symbol'];
    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    const correctElement = elements[Math.floor(Math.random() * elements.length)];
    const options = [correctElement];
    while (options.length < 4) {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        if (!options.includes(randomElement)) options.push(randomElement);
    }
    options.sort(() => Math.random() - 0.5);

    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';

    if (questionType === 'symbol-to-name') {
        questionDiv.textContent = `What is the name of the element with symbol ${correctElement.symbol}?`;
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt.name;
            btn.addEventListener('click', () => handleQuizAnswer(opt === correctElement, correctElement, questionType));
            optionsDiv.appendChild(btn);
        });
    } else if (questionType === 'name-to-symbol') {
        questionDiv.textContent = `What is the symbol for ${correctElement.name}?`;
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt.symbol;
            btn.addEventListener('click', () => handleQuizAnswer(opt === correctElement, correctElement, questionType));
            optionsDiv.appendChild(btn);
        });
    } else {
        questionDiv.textContent = `What is the symbol for the element with atomic number ${correctElement.atomicNumber}?`;
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt.symbol;
            btn.addEventListener('click', () => handleQuizAnswer(opt === correctElement, correctElement, questionType));
            optionsDiv.appendChild(btn);
        });
    }

    updateQuizAccuracy();
}

function generateLevelQuizQuestion() {
    const questionTypes = ['symbol-to-name', 'name-to-symbol', 'atomic-to-symbol'];
    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    const correctElement = levelElements[Math.floor(Math.random() * levelElements.length)];
    const options = [correctElement];
    while (options.length < 4) {
        const randomElement = levelElements[Math.floor(Math.random() * levelElements.length)];
        if (!options.includes(randomElement)) options.push(randomElement);
    }
    options.sort(() => Math.random() - 0.5);

    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';

    if (questionType === 'symbol-to-name') {
        questionDiv.textContent = `What is the name of the element with symbol ${correctElement.symbol}?`;
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt.name;
            btn.addEventListener('click', () => handleQuizAnswer(opt === correctElement, correctElement, questionType));
            optionsDiv.appendChild(btn);
        });
    } else if (questionType === 'name-to-symbol') {
        questionDiv.textContent = `What is the symbol for ${correctElement.name}?`;
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt.symbol;
            btn.addEventListener('click', () => handleQuizAnswer(opt === correctElement, correctElement, questionType));
            optionsDiv.appendChild(btn);
        });
    } else {
        questionDiv.textContent = `What is the symbol for the element with atomic number ${correctElement.atomicNumber}?`;
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt.symbol;
            btn.addEventListener('click', () => handleQuizAnswer(opt === correctElement, correctElement, questionType));
            optionsDiv.appendChild(btn);
        });
    }

    updateQuizAccuracy();
}

function handleQuizAnswer(correct, correctElement, questionType) {
    quizData.total++;
    const answer = { element: correctElement, questionType, correct };
    if (correct) {
        quizData.correct++;
        if (soundEnabled) correctSound.play();
    } else {
        quizData.wrongAnswers.push(answer);
        if (soundEnabled) wrongSound.play();
    }
    quizAnswers.push(answer);
    localStorage.setItem('periodicGameQuizData', JSON.stringify(quizData));
    if (quizMode) {
        generateQuizQuestion();
    } else {
        currentQuizQuestion++;
        if (currentQuizQuestion < levelConfigs[currentLevel - 1].quizQuestions) {
            generateLevelQuizQuestion();
        } else {
            showQuizResults();
        }
    }
}

function showQuizResults() {
    document.getElementById('quiz-modal').classList.add('hidden');
    const resultsModal = document.getElementById('quiz-results-modal');
    document.getElementById('quiz-total').textContent = quizAnswers.length;
    document.getElementById('quiz-correct').textContent = quizAnswers.filter(a => a.correct).length;
    document.getElementById('quiz-accuracy-result').textContent = quizAnswers.length > 0 ? Math.round((quizAnswers.filter(a => a.correct).length / quizAnswers.length) * 100) + '%' : '0%';
    resultsModal.classList.remove('hidden');
}

function updateQuizAccuracy() {
    const accuracy = quizData.total > 0 ? Math.round((quizData.correct / quizData.total) * 100) : 0;
    document.getElementById('quiz-accuracy').textContent = `${accuracy}%`;
}

function startLevel(level, subLevel) {
    lives = 3;
    score = 0;
    streak = 0;
    timeLeft = 120;
    selectedCard = null;
    activeCards = [];
    levelElements = [];
    updateHUD();
    setupGameBoard(level, subLevel);
    startTimer();
}

function setupGameBoard(level, subLevel) {
    const config = levelConfigs[level - 1];
    levelElements = config.elements.slice(0, config.targetScore);
    if (level === 6) {
        levelElements = elements.sort(() => Math.random() - 0.5).slice(0, config.targetScore);
    }
    const periodicTable = document.getElementById('periodic-table');
    const elementCards = document.getElementById('element-cards');
    periodicTable.innerHTML = '';
    elementCards.innerHTML = '';
    activeCards = [];

    const decoyElements = elements.filter(e => !levelElements.includes(e));
    for (let i = 0; i < config.decoys; i++) {
        if (decoyElements.length > 0) {
            const decoy = decoyElements[Math.floor(Math.random() * decoyElements.length)];
            levelElements.push({ ...decoy, isDecoy: true });
        }
    }
    levelElements = levelElements.sort(() => Math.random() - 0.5);

    const gridCols = Math.min(levelElements.length, 5);
    periodicTable.style.gridTemplateColumns = `repeat(${gridCols}, 60px)`;

    levelElements.forEach((element, index) => {
        if (!element.isDecoy) {
            const slot = document.createElement('div');
            slot.classList.add('slot');
            slot.dataset.atomicNumber = element.atomicNumber;
            slot.textContent = config.showAtomicNumber ? element.atomicNumber : '?';
            slot.addEventListener('click', () => handleSlotClick(slot, element));
            periodicTable.appendChild(slot);
        }

        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.atomicNumber = element.atomicNumber;
        card.dataset.index = index;
        card.dataset.name = element.name;
        card.textContent = element.symbol;
        card.addEventListener('click', () => handleCardClick(card));
        activeCards.push({ index, element, card });
    });

    renderCards();
    updateHUD();
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

function handleSlotClick(slot, element) {
    if (slot.classList.contains('filled')) {
        showElementDetails(element);
        return;
    }
    if (!selectedCard) return;
    const cardAtomicNumber = parseInt(selectedCard.dataset.atomicNumber);
    const slotAtomicNumber = parseInt(slot.dataset.atomicNumber);

    if (cardAtomicNumber === slotAtomicNumber) {
        slot.classList.add('filled');
        slot.textContent = selectedCard.textContent;
        slot.style.animation = 'pulse 0.5s';
        selectedCard.classList.add('used');
        selectedCard.classList.remove('selected');
        selectedCard.style.animation = 'bounce 0.4s';
        score++;
        streak++;
        if (streak >= 3) {
            score += 2;
            showBonusMessage('+2 Streak Bonus!');
        }
        if (soundEnabled) correctSound.play();
        showElementDetails(element);
        slideCards();
        updateAccuracy(true);
        updateHUD();
        updateProgressBar();
        checkWin();
    } else {
        slot.classList.add('wrong');
        setTimeout(() => slot.classList.remove('wrong'), 300);
        lives--;
        streak = 0;
        if (soundEnabled) wrongSound.play();
        updateAccuracy(false);
        updateHUD();
        if (lives === 0) gameOver();
    }
    selectedCard = null;
}

function showElementDetails(element) {
    const details = document.createElement('div');
    details.className = 'element-details';
    details.style.position = 'absolute';
    details.style.background = 'var(--modal-bg)';
    details.style.padding = '10px';
    details.style.borderRadius = '8px';
    details.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.3)';
    details.style.zIndex = '100';
    details.innerHTML = `
        <strong>${element.name}</strong><br>
        Symbol: ${element.symbol}<br>
        Atomic Number: ${element.atomicNumber}<br>
        Group: ${element.group.replace(/-/g, ' ')}
    `;
    document.getElementById('game-area').appendChild(details);
    const rect = document.getElementById('periodic-table').getBoundingClientRect();
    details.style.left = `${rect.left + 20}px`;
    details.style.top = `${rect.top + 20}px`;
    setTimeout(() => details.remove(), 2000);
}

function showBonusMessage(message) {
    const bonus = document.createElement('div');
    bonus.textContent = message;
    bonus.style.position = 'absolute';
    bonus.style.top = '50%';
    bonus.style.left = '50%';
    bonus.style.transform = 'translate(-50%, -50%)';
    bonus.style.background = 'var(--button-bg)';
    bonus.style.padding = '10px 20px';
    bonus.style.borderRadius = '8px';
    bonus.style.color = '#fff';
    bonus.style.fontWeight = '600';
    bonus.style.zIndex = '100';
    document.body.appendChild(bonus);
    setTimeout(() => bonus.remove(), 1000);
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
    document.getElementById('lives').textContent = '❤'.repeat(lives);
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = formatTime(timeLeft);
    document.getElementById('hint-btn').style.display = 'none'; // Hide hint button
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 120;
    updateHUD();
    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 10) {
            document.getElementById('timer').style.color = '#ff6b6b';
        } else {
            document.getElementById('timer').style.color = 'var(--text-color)';
        }
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
        const modal = document.getElementById('victory-modal');
        document.getElementById('victory-title').textContent = `Sub-Level ${currentSubLevel} Complete!`;
        document.getElementById('victory-accuracy').textContent = `${accuracy}%`;
        document.getElementById('next-sub-level-btn').classList.remove('hidden');
        document.getElementById('prev-sub-level-btn').classList.toggle('hidden', currentSubLevel === 1);
        document.getElementById('next-level-btn').classList.toggle('hidden', currentSubLevel < config.subLevels || currentLevel === 6);
        modal.classList.remove('hidden');

        document.getElementById('next-sub-level-btn').addEventListener('click', () => {
            modal.classList.add('hidden');
            currentQuizQuestion = 0;
            quizAnswers = [];
            document.getElementById('quiz-modal').classList.remove('hidden');
            generateLevelQuizQuestion();
        }, { once: true });

        document.getElementById('prev-sub-level-btn').addEventListener('click', () => {
            modal.classList.add('hidden');
            if (currentSubLevel > 1) {
                currentSubLevel--;
                localStorage.setItem('periodicGameCurrentSubLevel', currentSubLevel);
                startLevel(currentLevel, currentSubLevel);
            }
        }, { once: true });

        document.getElementById('next-level-btn').addEventListener('click', () => {
            modal.classList.add('hidden');
            if (currentLevel < 6 && accuracy >= 90) {
                if (!unlockedLevels.includes(currentLevel + 1)) {
                    unlockedLevels.push(currentLevel + 1);
                    localStorage.setItem('periodicGameUnlockedLevels', JSON.stringify(unlockedLevels));
                }
                currentLevel++;
                currentSubLevel = 1;
                localStorage.setItem('periodicGameCurrentLevel', currentLevel);
                localStorage.setItem('periodicGameCurrentSubLevel', currentSubLevel);
                updateLevelSelect();
                startLevel(currentLevel, currentSubLevel);
            }
        }, { once: true });
    }
}

function proceedToNextSubLevel() {
    const config = levelConfigs[currentLevel - 1];
    if (currentSubLevel < config.subLevels || currentLevel === 6) {
        currentSubLevel++;
        localStorage.setItem('periodicGameCurrentSubLevel', currentSubLevel);
        startLevel(currentLevel, currentSubLevel);
    } else if (currentLevel < 6) {
        if (!unlockedLevels.includes(currentLevel + 1)) {
            const levelKey = `level${currentLevel}`;
            const accuracy = accuracyData[levelKey] ? Math.round((accuracyData[levelKey].correct / accuracyData[levelKey].total) * 100) : 0;
            if (accuracy >= 90) {
                unlockedLevels.push(currentLevel + 1);
                localStorage.setItem('periodicGameUnlockedLevels', JSON.stringify(unlockedLevels));
            }
        }
        currentLevel++;
        currentSubLevel = 1;
        localStorage.setItem('periodicGameCurrentLevel', currentLevel);
        localStorage.setItem('periodicGameCurrentSubLevel', currentSubLevel);
        updateLevelSelect();
        startLevel(currentLevel, currentSubLevel);
    }
}

function gameOver() {
    clearInterval(timer);
    const modal = document.getElementById('victory-modal');
    document.getElementById('victory-title').textContent = 'Game Over!';
    document.getElementById('victory-accuracy').textContent = document.getElementById('accuracy').textContent;
    document.getElementById('next-sub-level-btn').classList.add('hidden');
    document.getElementById('prev-sub-level-btn').classList.add('hidden');
    document.getElementById('next-level-btn').textContent = 'Retry';
    document.getElementById('next-level-btn').classList.remove('hidden');
    modal.classList.remove('hidden');

    document.getElementById('next-level-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
        startLevel(currentLevel, currentSubLevel);
    }, { once: true });
}

initGame();
