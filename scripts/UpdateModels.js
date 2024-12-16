// Function to toggle between Buy and Sell forms
function toggleForm(formType) {
    const buyForm = document.getElementById("buy-form");
    const sellForm = document.getElementById("sell-form");
    const buyButton = document.getElementById("buy-btn");
    const sellButton = document.getElementById("sell-btn");

    if (formType === "buy") {
        buyForm.classList.remove("hidden");
        sellForm.classList.add("hidden");
        buyButton.classList.add("active");
        sellButton.classList.remove("active");
    } else {
        sellForm.classList.remove("hidden");
        buyForm.classList.add("hidden");
        sellButton.classList.add("active");
        buyButton.classList.remove("active");
    }
}

// Function to toggle VIN/License fields
function toggleVinLicenseFields() {
    const vinLicenseDropdown = document.getElementById("vin-license");
    const licenseFields = document.getElementById("license-fields");
    const vinFields = document.getElementById("vin-fields");

    if (vinLicenseDropdown.value === "license") {
        licenseFields.classList.remove("hidden");
        vinFields.classList.add("hidden");
    } else if (vinLicenseDropdown.value === "vin") {
        vinFields.classList.remove("hidden");
        licenseFields.classList.add("hidden");
    }
}

// Existing function to update Model dropdown based on Series
function updateModels() {
    const seriesDropdown = document.getElementById("Series");
    const modelDropdown = document.getElementById("Model");

    const bmwSeriesToModels = {
        "1 Series": ["Any Model", "116i", "118i", "120i", "128ti", "M135i"],
        "2 Series": ["Any Model", "218i", "220i", "230i", "M240i", "M2"],
        "3 Series": ["Any Model", "318i", "320i", "330i", "340i", "M340i", "M3"],
        "X Series": ["Any Model", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "XM"]
    };

    modelDropdown.innerHTML = '<option value="" disabled selected>Model</option>';
    if (bmwSeriesToModels[seriesDropdown.value]) {
        bmwSeriesToModels[seriesDropdown.value].forEach(model => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelDropdown.appendChild(option);
        });
    }
}