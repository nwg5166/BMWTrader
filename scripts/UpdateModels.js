// Object mapping BMW Series to their respective Models
const bmwSeriesToModels = {
    "1 Series": ["Any Model", "116i", "118i", "120i", "128ti", "M135i"],
    "2 Series": ["Any Model", "218i", "220i", "230i", "M240i", "M2"],
    "3 Series": ["Any Model", "318i", "320i", "330i", "340i", "M340i", "M3"],
    "4 Series": ["Any Model", "420i", "430i", "440i", "M440i", "M4"],
    "5 Series": ["Any Model", "520i", "530i", "540i", "M550i", "M5"],
    "6 Series": ["Any Model", "630i", "640i", "650i", "M6"],
    "7 Series": ["Any Model", "730i", "740i", "750i", "760Li"],
    "8 Series": ["Any Model", "840i", "850i", "M850i", "M8"],
    "M Series": ["Any Model", "M135", "M2", "M3", "M4", "M5","M6", "M8"],
    "X Series": ["Any Model", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "XM"],
};

// Function to update the "Model" dropdown
function updateModels() {
    const seriesDropdown = document.getElementById("Series");
    const modelDropdown = document.getElementById("Model");

    // Get the selected series
    const selectedSeries = seriesDropdown.value;

    // Clear existing options in the Model dropdown
    modelDropdown.innerHTML = '<option value="" disabled selected>Model</option>';

    // Populate the Model dropdown with relevant models
    if (bmwSeriesToModels[selectedSeries]) {
        bmwSeriesToModels[selectedSeries].forEach(model => {
            const option = document.createElement("option");
            option.value = model.toLowerCase();
            option.textContent = model;
            modelDropdown.appendChild(option);
        });
    }
}