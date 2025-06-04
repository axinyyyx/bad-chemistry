const data = {
  elements: [
    { symbol: "H", name: "Hydrogen", number: 1, mass: "1.008", group: "nonmetal", period: 1, groupNumber: 1 },
    { symbol: "He", name: "Helium", number: 2, mass: "4.003", group: "noble-gas", period: 1, groupNumber: 18 },
    { symbol: "Li", name: "Lithium", number: 3, mass: "6.941", group: "alkali-metal", period: 2, groupNumber: 1 },
    { symbol: "Be", name: "Beryllium", number: 4, mass: "9.012", group: "alkaline-earth", period: 2, groupNumber: 2 },
    { symbol: "B", name: "Boron", number: 5, mass: "10.811", group: "metalloid", period: 2, groupNumber: 13 },
    { symbol: "C", name: "Carbon", number: 6, mass: "12.011", group: "nonmetal", period: 2, groupNumber: 14 },
    { symbol: "N", name: "Nitrogen", number: 7, mass: "14.007", group: "nonmetal", period: 2, groupNumber: 15 },
    { symbol: "O", name: "Oxygen", number: 8, mass: "15.999", group: "nonmetal", period: 2, groupNumber: 16 },
    { symbol: "F", name: "Fluorine", number: 9, mass: "18.998", group: "nonmetal", period: 2, groupNumber: 17 },
    { symbol: "Ne", name: "Neon", number: 10, mass: "20.180", group: "noble-gas", period: 2, groupNumber: 18 },
    { symbol: "Na", name: "Sodium", number: 11, mass: "22.990", group: "alkali-metal", period: 3, groupNumber: 1 },
    { symbol: "Mg", name: "Magnesium", number: 12, mass: "24.305", group: "alkaline-earth", period: 3, groupNumber: 2 },
    { symbol: "Al", name: "Aluminum", number: 13, mass: "26.982", group: "post-transition", period: 3, groupNumber: 13 },
    { symbol: "Si", name: "Silicon", number: 14, mass: "28.086", group: "metalloid", period: 3, groupNumber: 14 },
    { symbol: "P", name: "Phosphorus", number: 15, mass: "30.974", group: "nonmetal", period: 3, groupNumber: 15 },
    { symbol: "S", name: "Sulfur", number: 16, mass: "32.065", group: "nonmetal", period: 3, groupNumber: 16 },
    { symbol: "Cl", name: "Chlorine", number: 17, mass: "35.453", group: "nonmetal", period: 3, groupNumber: 17 },
    { symbol: "Ar", name: "Argon", number: 18, mass: "39.948", group: "noble-gas", period: 3, groupNumber: 18 },
    { symbol: "K", name: "Potassium", number: 19, mass: "39.098", group: "alkali-metal", period: 4, groupNumber: 1 },
    { symbol: "Ca", name: "Calcium", number: 20, mass: "40.078", group: "alkaline-earth", period: 4, groupNumber: 2 },
    { symbol: "Sc", name: "Scandium", number: 21, mass: "44.956", group: "transition", period: 4, groupNumber: 3 },
    { symbol: "Ti", name: "Titanium", number: 22, mass: "47.867", group: "transition", period: 4, groupNumber: 4 },
    { symbol: "V", name: "Vanadium", number: 23, mass: "50.942", group: "transition", period: 4, groupNumber: 5 },
    { symbol: "Cr", name: "Chromium", number: 24, mass: "51.996", group: "transition", period: 4, groupNumber: 6 },
    { symbol: "Mn", name: "Manganese", number: 25, mass: "54.938", group: "transition", period: 4, groupNumber: 7 },
    { symbol: "Fe", name: "Iron", number: 26, mass: "55.845", group: "transition", period: 4, groupNumber: 8 },
    { symbol: "Co", name: "Cobalt", number: 27, mass: "58.933", group: "transition", period: 4, groupNumber: 9 },
    { symbol: "Ni", name: "Nickel", number: 28, mass: "58.693", group: "transition", period: 4, groupNumber: 10 },
    { symbol: "Cu", name: "Copper", number: 29, mass: "63.546", group: "transition", period: 4, groupNumber: 11 },
    { symbol: "Zn", name: "Zinc", number: 30, mass: "65.380", group: "transition", period: 4, groupNumber: 12 },
    { symbol: "Ga", name: "Gallium", number: 31, mass: "69.723", group: "post-transition", period: 4, groupNumber: 13 },
    { symbol: "Ge", name: "Germanium", number: 32, mass: "72.640", group: "metalloid", period: 4, groupNumber: 14 },
    { symbol: "As", name: "Arsenic", number: 33, mass: "74.922", group: "metalloid", period: 4, groupNumber: 15 },
    { symbol: "Se", name: "Selenium", number: 34, mass: "78.960", group: "nonmetal", period: 4, groupNumber: 16 },
    { symbol: "Br", name: "Bromine", number: 35, mass: "79.904", group: "nonmetal", period: 4, groupNumber: 17 },
    { symbol: "Kr", name: "Krypton", number: 36, mass: "83.798", group: "noble-gas", period: 4, groupNumber: 18 },
    { symbol: "Rb", name: "Rubidium", number: 37, mass: "85.468", group: "alkali-metal", period: 5, groupNumber: 1 },
    { symbol: "Sr", name: "Strontium", number: 38, mass: "87.620", group: "alkaline-earth", period: 5, groupNumber: 2 },
    { symbol: "Y", name: "Yttrium", number: 39, mass: "88.906", group: "transition", period: 5, groupNumber: 3 },
    { symbol: "Zr", name: "Zirconium", number: 40, mass: "91.224", group: "transition", period: 5, groupNumber: 4 },
    { symbol: "Nb", name: "Niobium", number: 41, mass: "92.906", group: "transition", period: 5, groupNumber: 5 },
    { symbol: "Mo", name: "Molybdenum", number: 42, mass: "95.950", group: "transition", period: 5, groupNumber: 6 },
    { symbol: "Tc", name: "Technetium", number: 43, mass: "98", group: "transition", period: 5, groupNumber: 7 },
    { symbol: "Ru", name: "Ruthenium", number: 44, mass: "101.070", group: "transition", period: 5, groupNumber: 8 },
    { symbol: "Rh", name: "Rhodium", number: 45, mass: "102.906", group: "transition", period: 5, groupNumber: 9 },
    { symbol: "Pd", name: "Palladium", number: 46, mass: "106.420", group: "transition", period: 5, groupNumber: 10 },
    { symbol: "Ag", name: "Silver", number: 47, mass: "107.868", group: "transition", period: 5, groupNumber: 11 },
    { symbol: "Cd", name: "Cadmium", number: 48, mass: "112.411", group: "transition", period: 5, groupNumber: 12 },
    { symbol: "In", name: "Indium", number: 49, mass: "114.818", group: "post-transition", period: 5, groupNumber: 13 },
    { symbol: "Sn", name: "Tin", number: 50, mass: "118.710", group: "post-transition", period: 5, groupNumber: 14 },
    { symbol: "Sb", name: "Antimony", number: 51, mass: "121.760", group: "metalloid", period: 5, groupNumber: 15 },
    { symbol: "Te", name: "Tellurium", number: 52, mass: "127.600", group: "metalloid", period: 5, groupNumber: 16 },
    { symbol: "I", name: "Iodine", number: 53, mass: "126.904", group: "nonmetal", period: 5, groupNumber: 17 },
    { symbol: "Xe", name: "Xenon", number: 54, mass: "131.293", group: "noble-gas", period: 5, groupNumber: 18 },
    { symbol: "Cs", name: "Cesium", number: 55, mass: "132.905", group: "alkali-metal", period: 6, groupNumber: 1 },
    { symbol: "Ba", name: "Barium", number: 56, mass: "137.327", group: "alkaline-earth", period: 6, groupNumber: 2 },
    { symbol: "La", name: "Lanthanum", number: 57, mass: "138.905", group: "lanthanide", period: 6, groupNumber: 3 },
    { symbol: "Ce", name: "Cerium", number: 58, mass: "140.116", group: "lanthanide", period: 9, groupNumber: 4 },
    { symbol: "Pr", name: "Praseodymium", number: 59, mass: "140.908", group: "lanthanide", period: 9, groupNumber: 5 },
    { symbol: "Nd", name: "Neodymium", number: 60, mass: "144.242", group: "lanthanide", period: 9, groupNumber: 6 },
    { symbol: "Pm", name: "Promethium", number: 61, mass: "145", group: "lanthanide", period: 9, groupNumber: 7 },
    { symbol: "Sm", name: "Samarium", number: 62, mass: "150.360", group: "lanthanide", period: 9, groupNumber: 8 },
    { symbol: "Eu", name: "Europium", number: 63, mass: "151.964", group: "lanthanide", period: 9, groupNumber: 9 },
    { symbol: "Gd", name: "Gadolinium", number: 64, mass: "157.250", group: "lanthanide", period: 9, groupNumber: 10 },
    { symbol: "Tb", name: "Terbium", number: 65, mass: "158.925", group: "lanthanide", period: 9, groupNumber: 11 },
    { symbol: "Dy", name: "Dysprosium", number: 66, mass: "162.500", group: "lanthanide", period: 9, groupNumber: 12 },
    { symbol: "Ho", name: "Holmium", number: 67, mass: "164.930", group: "lanthanide", period: 9, groupNumber: 13 },
    { symbol: "Er", name: "Erbium", number: 68, mass: "167.259", group: "lanthanide", period: 9, groupNumber: 14 },
    { symbol: "Tm", name: "Thulium", number: 69, mass: "168.934", group: "lanthanide", period: 9, groupNumber: 15 },
    { symbol: "Yb", name: "Ytterbium", number: 70, mass: "173.054", group: "lanthanide", period: 9, groupNumber: 16 },
    { symbol: "Lu", name: "Lutetium", number: 71, mass: "174.967", group: "lanthanide", period: 6, groupNumber: 3 },
    { symbol: "Hf", name: "Hafnium", number: 72, mass: "178.490", group: "transition", period: 6, groupNumber: 4 },
    { symbol: "Ta", name: "Tantalum", number: 73, mass: "180.948", group: "transition", period: 6, groupNumber: 5 },
    { symbol: "W", name: "Tungsten", number: 74, mass: "183.840", group: "transition", period: 6, groupNumber: 6 },
    { symbol: "Re", name: "Rhenium", number: 75, mass: "186.207", group: "transition", period: 6, groupNumber: 7 },
    { symbol: "Os", name: "Osmium", number: 76, mass: "190.230", group: "transition", period: 6, groupNumber: 8 },
    { symbol: "Ir", name: "Iridium", number: 77, mass: "192.217", group: "transition", period: 6, groupNumber: 9 },
    { symbol: "Pt", name: "Platinum", number: 78, mass: "195.084", group: "transition", period: 6, groupNumber: 10 },
    { symbol: "Au", name: "Gold", number: 79, mass: "196.967", group: "transition", period: 6, groupNumber: 11 },
    { symbol: "Hg", name: "Mercury", number: 80, mass: "200.590", group: "transition", period: 6, groupNumber: 12 },
    { symbol: "Tl", name: "Thallium", number: 81, mass: "204.383", group: "post-transition", period: 6, groupNumber: 13 },
    { symbol: "Pb", name: "Lead", number: 82, mass: "207.200", group: "post-transition", period: 6, groupNumber: 14 },
    { symbol: "Bi", name: "Bismuth", number: 83, mass: "208.980", group: "post-transition", period: 6, groupNumber: 15 },
    { symbol: "Po", name: "Polonium", number: 84, mass: "209", group: "post-transition", period: 6, groupNumber: 16 },
    { symbol: "At", name: "Astatine", number: 85, mass: "210", group: "metalloid", period: 6, groupNumber: 17 },
    { symbol: "Rn", name: "Radon", number: 86, mass: "222", group: "noble-gas", period: 6, groupNumber: 18 },
    { symbol: "Fr", name: "Francium", number: 87, mass: "223", group: "alkali-metal", period: 7, groupNumber: 1 },
    { symbol: "Ra", name: "Radium", number: 88, mass: "226", group: "alkaline-earth", period: 7, groupNumber: 2 },
    { symbol: "Ac", name: "Actinium", number: 89, mass: "227", group: "actinide", period: 7, groupNumber: 3 },
    { symbol: "Th", name: "Thorium", number: 90, mass: "232.038", group: "actinide", period: 10, groupNumber: 4 },
    { symbol: "Pa", name: "Protactinium", number: 91, mass: "231.036", group: "actinide", period: 10, groupNumber: 5 },
    { symbol: "U", name: "Uranium", number: 92, mass: "238.029", group: "actinide", period: 10, groupNumber: 6 },
    { symbol: "Np", name: "Neptunium", number: 93, mass: "237", group: "actinide", period: 10, groupNumber: 7 },
    { symbol: "Pu", name: "Plutonium", number: 94, mass: "244", group: "actinide", period: 10, groupNumber: 8 },
    { symbol: "Am", name: "Americium", number: 95, mass: "243", group: "actinide", period: 10, groupNumber: 9 },
    { symbol: "Cm", name: "Curium", number: 96, mass: "247", group: "actinide", period: 10, groupNumber: 10 },
    { symbol: "Bk", name: "Berkelium", number: 97, mass: "247", group: "actinide", period: 10, groupNumber: 11 },
    { symbol: "Cf", name: "Californium", number: 98, mass: "251", group: "actinide", period: 10, groupNumber: 12 },
    { symbol: "Es", name: "Einsteinium", number: 99, mass: "252", group: "actinide", period: 10, groupNumber: 13 },
    { symbol: "Fm", name: "Fermium", number: 100, mass: "257", group: "actinide", period: 10, groupNumber: 14 },
    { symbol: "Md", name: "Mendelevium", number: 101, mass: "258", group: "actinide", period: 10, groupNumber: 15 },
    { symbol: "No", name: "Nobelium", number: 102, mass: "259", group: "actinide", period: 10, groupNumber: 16 },
    { symbol: "Lr", name: "Lawrencium", number: 103, mass: "262", group: "actinide", period: 7, groupNumber: 3 },
    { symbol: "Rf", name: "Rutherfordium", number: 104, mass: "267", group: "transition", period: 7, groupNumber: 4 },
    { symbol: "Db", name: "Dubnium", number: 105, mass: "268", group: "transition", period: 7, groupNumber: 5 },
    { symbol: "Sg", name: "Seaborgium", number: 106, mass: "269", group: "transition", period: 7, groupNumber: 6 },
    { symbol: "Bh", name: "Bohrium", number: 107, mass: "270", group: "transition", period: 7, groupNumber: 7 },
    { symbol: "Hs", name: "Hassium", number: 108, mass: "269", group: "transition", period: 7, groupNumber: 8 },
    { symbol: "Mt", name: "Meitnerium", number: 109, mass: "278", group: "transition", period: 7, groupNumber: 9 },
    { symbol: "Ds", name: "Darmstadtium", number: 110, mass: "281", group: "transition", period: 7, groupNumber: 10 },
    { symbol: "Rg", name: "Roentgenium", number: 111, mass: "282", group: "transition", period: 7, groupNumber: 11 },
    { symbol: "Cn", name: "Copernicium", number: 112, mass: "285", group: "transition", period: 7, groupNumber: 12 },
    { symbol: "Nh", name: "Nihonium", number: 113, mass: "286", group: "post-transition", period: 7, groupNumber: 13 },
    { symbol: "Fl", name: "Flerovium", number: 114, mass: "289", group: "post-transition", period: 7, groupNumber: 14 },
    { symbol: "Mc", name: "Moscovium", number: 115, mass: "290", group: "post-transition", period: 7, groupNumber: 15 },
    { symbol: "Lv", name: "Livermorium", number: 116, mass: "293", group: "post-transition", period: 7, groupNumber: 16 },
    { symbol: "Ts", name: "Tennessine", number: 117, mass: "294", group: "post-transition", period: 7, groupNumber: 17 },
    { symbol: "Og", name: "Oganesson", number: 118, mass: "294", group: "noble-gas", period: 7, groupNumber: 18 }
  ]
};

let currentScore = 0;
let currentLevel = 1;
let isGamePaused = false;
let isTimerExpired = false;
let timeRemaining;
let timerInterval;
let isGameStarted = false;
let isGameComplete = false;
const totalElements = data.elements.length;
const finalLevel = Math.ceil(totalElements / 20);
const TIMER_SECONDS = 600;
const elementsPerLevel = new Map([
  [1, 20],
  [2, 20],
  [3, 20],
  [4, 20],
  [5, 20],
  [6, 18]
]);
const POINTS_PER_CORRECT = 5;

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score-display");
  if (scoreDisplay) {
    scoreDisplay.textContent = `Score: ${currentScore}`;
  } else {
    console.error("Score display element not found");
  }
}

function shuffleElements(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createElementBoxes() {
  const container = document.getElementById("elements-pool");
  container.innerHTML = "";

  const previousLevel = currentLevel - 1;
  const previousLevelElementCount =
    previousLevel === 0 ? 0 : elementsPerLevel.get(previousLevel);
  const startIndex = previousLevel * previousLevelElementCount;
  const endIndex = startIndex + elementsPerLevel.get(currentLevel);
  const currentElements = data.elements.slice(startIndex, endIndex);

  shuffleElements(currentElements);

  currentElements.forEach((element) => {
    const box = document.createElement("div");
    box.className = "element-box";
    box.draggable = true;
    box.dataset.number = element.number;
    box.innerHTML = `
      <div class="atomic-number">${element.number}</div>
      <div class="symbol">${element.symbol}</div>
      <div class="name">${element.name}</div>
      <div class="mass">${element.mass}</div>
    `;

    box.addEventListener("dragstart", handleDragStart);
    box.addEventListener("dragend", handleDragEnd);
    box.addEventListener("touchstart", handleTouchStart, { passive: false });
    box.addEventListener("touchmove", handleTouchMove, { passive: false });
    box.addEventListener("touchend", handleTouchEnd, { passive: false });

    container.appendChild(box);
  });
}

function createDropZones() {
  const grid = document.getElementById("periodic-grid");
  grid.innerHTML = "";

  for (let period = 1; period <= 7; period++) {
    for (let group = 1; group <= 18; group++) {
      const zone = document.createElement("div");
      zone.className = "drop-zone";

      if (period === 6 && group === 3) {
        zone.dataset.group = "lanthanide-placeholder";
        zone.textContent = "57-71";
      } else if (period === 7 && group === 3) {
        zone.dataset.group = "actinide-placeholder";
        zone.textContent = "89-103";
      } else {
        const element = data.elements.find(
          (el) =>
            el.period === period &&
            el.groupNumber === group &&
            el.group !== "lanthanide" &&
            el.group !== "actinide"
        );
        if (element) {
          zone.dataset.position = element.number;
          zone.dataset.group = element.group;
        } else {
          zone.dataset.group = "spacer";
        }
      }
      zone.addEventListener("dragenter", handleDragEnter);
      zone.addEventListener("dragleave", handleDragLeave);
      zone.addEventListener("dragover", handleDragOver);
      zone.addEventListener("drop", handleDrop);
      grid.appendChild(zone);
    }
  }

  const subGrid = document.createElement("div");
  subGrid.className = "sub-periodic-grid";

  const lanthanides = data.elements
    .filter((el) => el.group === "lanthanide")
    .sort((a, b) => a.number - b.number);

  lanthanides.forEach((element) => {
    const zone = document.createElement("div");
    zone.className = "drop-zone";
    zone.dataset.position = element.number;
    zone.dataset.group = "lanthanide";
    zone.addEventListener("dragenter", handleDragEnter);
    zone.addEventListener("dragleave", handleDragLeave);
    zone.addEventListener("dragover", handleDragOver);
    zone.addEventListener("drop", handleDrop);
    subGrid.appendChild(zone);
  });

  const actinides = data.elements
    .filter((el) => el.group === "actinide")
    .sort((a, b) => a.number - b.number);

  actinides.forEach((element) => {
    const zone = document.createElement("div");
    zone.className = "drop-zone";
    zone.dataset.position = element.number;
    zone.dataset.group = "actinide";
    zone.addEventListener("dragenter", handleDragEnter);
    zone.addEventListener("dragleave", handleDragLeave);
    zone.addEventListener("dragover", handleDragOver);
    zone.addEventListener("drop", handleDrop);
    subGrid.appendChild(zone);
  });

  grid.parentNode.appendChild(subGrid);
}

function calculateDistance(elementNumber, dropZoneNumber) {
  const draggedElement = data.elements.find((el) => el.number === elementNumber);
  const targetElement = data.elements.find((el) => el.number === dropZoneNumber);
  if (!draggedElement || !targetElement) return 1;
  const periodDiff = Math.abs(draggedElement.period - targetElement.period);
  const groupDiff = Math.abs(draggedElement.groupNumber - targetElement.groupNumber);
  const maxPossibleDiff = 7 + 18;
  return (periodDiff + groupDiff) / maxPossibleDiff;
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function calculateColor(distance) {
  const r = Math.round(lerp(100, 255, distance));
  const g = Math.round(lerp(255, 40, distance));
  const b = Math.round(lerp(218, 40, distance));
  return `rgb(${r}, ${g}, ${b})`;
}

let touchElement = null;
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
  if (!isGameStarted || isGamePaused || isGameComplete || isTimerExpired) {
    e.preventDefault();
    return;
  }
  e.preventDefault();
  touchElement = e.target.closest(".element-box");
  if (touchElement) {
    touchElement.classList.add("dragging");
    window.draggedElementNumber = parseInt(touchElement.dataset.number);
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchElement.style.zIndex = "1000";
    touchElement.style.transform = "scale(1.2)"; // Slightly enlarge for better touch feedback
  }
}

function handleTouchMove(e) {
  if (!touchElement) return;
  e.preventDefault();
  const touch = e.touches[0];
  touchElement.style.position = "fixed";
  touchElement.style.left = `${touch.clientX - touchElement.offsetWidth / 2}px`;
  touchElement.style.top = `${touch.clientY - touchElement.offsetHeight / 2}px`;

  // Improve drop zone detection for smaller cells
  const dropZone = document.elementFromPoint(touch.clientX, touch.clientY);
  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.classList.remove("correct-hover", "incorrect");
  });
  if (dropZone && dropZone.classList.contains("drop-zone") && !dropZone.hasChildNodes() && dropZone.dataset.group !== "spacer") {
    const elementNumber = window.draggedElementNumber;
    const dropZoneNumber = parseInt(dropZone.dataset.position);
    if (elementNumber === dropZoneNumber) {
      dropZone.classList.add("correct-hover");
    } else {
      const distance = calculateDistance(elementNumber, dropZoneNumber);
      const color = calculateColor(distance);
      dropZone.style.setProperty("--indicator-color", color);
      dropZone.classList.add("incorrect");
    }
  }
}

function handleTouchEnd(e) {
  if (!touchElement) return;
  e.preventDefault();
  touchElement.classList.remove("dragging");
  touchElement.style.position = "";
  touchElement.style.left = "";
  touchElement.style.top = "";
  touchElement.style.zIndex = "";
  touchElement.style.transform = "";

  const touch = e.changedTouches[0];
  const dropZone = document.elementFromPoint(touch.clientX, touch.clientY);

  if (dropZone && dropZone.classList.contains("drop-zone") && !dropZone.hasChildNodes()) {
    const elementNumber = parseInt(touchElement.dataset.number);
    const position = parseInt(dropZone.dataset.position);
    if (elementNumber === position) {
      dropZone.appendChild(touchElement);
      dropZone.classList.add("correct");
      if (!isTimerExpired) {
        currentScore += POINTS_PER_CORRECT;
        updateScoreDisplay();
        saveGameState();
      }
      checkLevelComplete();
    } else {
      touchElement.classList.add("shake");
      setTimeout(() => touchElement.classList.remove("shake"), 200);
    }
  } else {
    touchElement.classList.add("shake");
    setTimeout(() => touchElement.classList.remove("shake"), 200);
  }

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.classList.remove("correct-hover", "incorrect");
  });

  touchElement = null;
  delete window.draggedElementNumber;
}

function handleDragStart(e) {
  if (!isGameStarted || isGamePaused || isGameComplete || isTimerExpired) {
    e.preventDefault();
    return false;
  }
  e.target.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", e.target.dataset.number);
  window.draggedElementNumber = parseInt(e.target.dataset.number);
}

function handleDragEnd(e) {
  e.target.classList.remove("dragging");
  delete window.draggedElementNumber;
}

function handleDragEnter(e) {
  e.stopPropagation();
  e.preventDefault();
  if (!e.target.hasChildNodes() && e.target.dataset.group !== "spacer") {
    const elementNumber = window.draggedElementNumber;
    const dropZoneNumber = parseInt(e.target.dataset.position);
    if (elementNumber === dropZoneNumber) {
      e.target.classList.add("correct-hover");
    } else {
      const distance = calculateDistance(elementNumber, dropZoneNumber);
      const color = calculateColor(distance);
      e.target.style.setProperty("--indicator-color", color);
      e.target.classList.add("incorrect");
    }
  }
}

function handleDragLeave(e) {
  e.stopPropagation();
  e.target.classList.remove("correct-hover", "incorrect");
}

function handleDragOver(e) {
  e.stopPropagation();
  const elementNumber = window.draggedElementNumber;
  const position = parseInt(e.target.dataset.position);
  if (!e.target.hasChildNodes() && elementNumber === position) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
}

function handleDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  if (isGamePaused || isGameComplete || isTimerExpired) return false;

  const elementNumber = parseInt(e.dataTransfer.getData("text/plain"));
  const position = parseInt(e.target.dataset.position);
  const draggedElement = document.querySelector(`[data-number="${elementNumber}"]`);

  e.target.classList.remove("correct-hover", "incorrect");

  if (!e.target.hasChildNodes() && elementNumber === position) {
    e.target.appendChild(draggedElement);
    e.target.classList.add("correct");
    draggedElement.classList.remove("dragging");
    if (!isTimerExpired) {
      currentScore += POINTS_PER_CORRECT;
      updateScoreDisplay();
      saveGameState();
    }
    checkLevelComplete();
  } else {
    draggedElement.classList.add("shake");
    setTimeout(() => draggedElement.classList.remove("shake"), 200);
    return false;
  }
}

function togglePause() {
  isGamePaused = !isGamePaused;
  const pauseButton = document.getElementById("pause-button");
  pauseButton.textContent = isGamePaused ? "Resume" : "Pause";
  const gameContainer = document.querySelector(".game-container");
  if (isGamePaused) {
    gameContainer.classList.add("paused");
  } else {
    gameContainer.classList.remove("paused");
  }
  saveGameState();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timerDisplay = document.getElementById("timer-display");
  timerDisplay.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, "0")}`;
  if (timeRemaining <= 30) {
    timerDisplay.classList.add("timer-warning");
  } else {
    timerDisplay.classList.remove("timer-warning");
  }
}

function updateLevelDisplay() {
  const levelDisplay = document.getElementById("level-display");
  if (levelDisplay) {
    levelDisplay.textContent = `Level: ${currentLevel}`;
  }
}

function saveGameState() {
  const gameState = {
    currentScore,
    currentLevel,
    timeRemaining,
    isGamePaused,
    isTimerExpired
  };
  localStorage.setItem("badChemistryGameState", JSON.stringify(gameState));
}

function loadGameState() {
  const savedState = localStorage.getItem("badChemistryGameState");
  if (savedState) {
    const gameState = JSON.parse(savedState);
    currentScore = gameState.currentScore;
    currentLevel = gameState.currentLevel;
    timeRemaining = gameState.timeRemaining;
    isGamePaused = gameState.isGamePaused;
    isTimerExpired = gameState.isTimerExpired;
    return true;
  }
  return false;
}

function checkLevelComplete() {
  const placedElements = document.querySelectorAll(".drop-zone.correct");
  if (placedElements.length === elementsPerLevel.get(currentLevel)) {
    if (currentLevel < finalLevel) {
      const elementsPool = document.getElementById("elements-pool");
      const elementBoxes = document.querySelectorAll(".element-box");
      elementBoxes.forEach((box) => box.classList.add("fade-out"));
      setTimeout(() => {
        currentLevel++;
        updateLevelDisplay();
        saveGameState();
        elementsPool.innerHTML = "";
        document.querySelectorAll(".drop-zone").forEach((zone) => {
          zone.innerHTML = "";
          zone.classList.remove("correct");
        });
        elementBoxes.forEach((box) => box.classList.remove("fade-out"));
        initLevel();
        const newElementBoxes = document.querySelectorAll(".element-box");
        newElementBoxes.forEach((box) => box.classList.add("fade-in"));
        setTimeout(() => {
          newElementBoxes.forEach((box) => box.classList.remove("fade-in"));
        }, 500);
      }, 500);
    } else {
      handleGameCompletion();
    }
  }
}

function startTimer() {
  timeRemaining = timeRemaining || TIMER_SECONDS;
  updateTimerDisplay();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!isGamePaused) {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateTimerDisplay();
        saveGameState();
      }
      if (timeRemaining === 0) {
        clearInterval(timerInterval);
        isTimerExpired = true;
        handleTimeUp();
      }
    }
  }, 1000);
}

function handleTimeUp() {
  isTimerExpired = true;
  saveGameState();
  alert("Time's up! You can continue placing elements but won't earn additional points.");
}

function initLevel() {
  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.innerHTML = "";
    zone.classList.remove("correct");
  });
  createElementBoxes();
  startTimer();
}

function initGame() {
  currentScore = 0;
  currentLevel = 1;
  isGamePaused = false;
  isTimerExpired = false;
  isGameStarted = false;

  if (loadGameState()) {
    isGameStarted = true;
  }

  timeRemaining = TIMER_SECONDS;
  updateTimerDisplay();

  const resetButton = document.getElementById("reset-button");
  resetButton.textContent = isGameStarted ? "Reset" : "Start";
  resetButton.addEventListener("click", handleStartReset);

  const pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", togglePause);

  const periodicTableButton = document.getElementById("periodic-table-button");
  periodicTableButton.addEventListener("click", () => {
    window.location.href = "pt.html";
  });

  if (isGameStarted) {
    createElementBoxes();
    resetButton.classList.add("reset");
  } else {
    createDropZones();
  }

  updateScoreDisplay();
  updateLevelDisplay();

  document.getElementById("shuffle-button").addEventListener("click", () => {
    if (!isGamePaused && isGameStarted) {
      const currentElements = Array.from(
        document.querySelectorAll(".element-box")
      ).filter((el) => !el.parentElement.classList.contains("drop-zone"));
      shuffleElements(currentElements);
      const container = document.getElementById("elements-pool");
      currentElements.forEach((element) => container.appendChild(element));
    }
  });
}

function handleStartReset() {
  const button = document.getElementById("reset-button");
  if (!isGameStarted) {
    isGameStarted = true;
    button.textContent = "Reset";
    button.classList.add("reset");
    startTimer();
    createElementBoxes();
    initLevel();
  } else {
    if (confirm("Are you sure you want to reset the game? This will clear your progress.")) {
      localStorage.removeItem("badChemistryGameState");
      currentScore = 0;
      currentLevel = 1;
      isGamePaused = false;
      isTimerExpired = false;
      isGameStarted = false;
      timeRemaining = TIMER_SECONDS;

      document.querySelectorAll(".drop-zone").forEach((zone) => {
        zone.innerHTML = "";
        zone.classList.remove("correct", "correct-hover");
      });

      document.getElementById("elements-pool").innerHTML = "";
      clearInterval(timerInterval);

      button.textContent = "Start";
      button.classList.remove("reset");

      updateScoreDisplay();
      updateLevelDisplay();
      updateTimerDisplay();
    }
  }
}

function resetGame() {
  if (confirm("Are you sure you want to reset the game? This will clear your progress.")) {
    localStorage.removeItem("badChemistryGameState");
    currentScore = 0;
    currentLevel = 1;
    isGamePaused = false;
    isTimerExpired = false;
    isGameComplete = false;

    document.querySelectorAll(".drop-zone").forEach((zone) => {
      zone.innerHTML = "";
      zone.classList.remove("correct");
    });

    clearInterval(timerInterval);
    timeRemaining = TIMER_SECONDS;
    startTimer();

    updateScoreDisplay();
    updateLevelDisplay();
    initLevel();
  }
}

function createConfettiRain() {
  const duration = 3000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.3 }
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.3 }
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function handleGameCompletion() {
  isGameComplete = true;
  clearInterval(timerInterval);
  localStorage.removeItem("badChemistryGameState");

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.innerHTML = "";
    zone.classList.remove("correct");
  });

  data.elements.forEach((element) => {
    const box = document.createElement("div");
    box.className = "element-box";
    box.dataset.number = element.number;
    box.innerHTML = `
      <div class="atomic-number">${element.number}</div>
      <div class="symbol">${element.symbol}</div>
      <div class="name">${element.name}</div>
      <div class="mass">${element.mass}</div>
    `;
    const dropZone = document.querySelector(`.drop-zone[data-position="${element.number}"]`);
    if (dropZone) {
      dropZone.appendChild(box);
      dropZone.classList.add("correct");
    }
  });

  createConfettiRain();

  setTimeout(() => {
    const overlay = document.createElement("div");
    overlay.className = "celebration-overlay";
    const message = document.createElement("div");
    message.className = "celebration-message";
    message.innerHTML = `
      <h2>Congratulations!</h2>
      <p>You've mastered Bad Chemistry!</p>
      <p>Final Score: ${currentScore}</p>
      <p>Time Remaining: ${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, "0")}</p>
      <button id="play-again" class="celebration-button">Play Again</button>
    `;
    overlay.appendChild(message);
    document.querySelector(".game-container").appendChild(overlay);

    document.getElementById("play-again").addEventListener("click", () => {
      overlay.remove();
      localStorage.removeItem("badChemistryGameState");
      isGameComplete = false;
      isTimerExpired = false;
      resetGame();
    });
  }, 2000);
}

window.addEventListener("load", initGame);