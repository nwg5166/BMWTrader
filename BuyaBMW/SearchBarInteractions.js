// Script for Search Bar Sliders
document.addEventListener('DOMContentLoaded', () => {
    const mileageSlider = document.getElementById('mileage');
    const priceSlider = document.getElementById('price');
    const mileageValue = document.getElementById('mileage-value');
    const priceValue = document.getElementById('price-value');

    mileageSlider.addEventListener('input', () => {
        mileageValue.textContent = `0 - ${mileageSlider.value.toLocaleString()} miles`;
    });

    priceSlider.addEventListener('input', () => {
        priceValue.textContent = `$0 - $${priceSlider.value.toLocaleString()}`;
    });
});


// Multi-select dropdown functionality
document.addEventListener("DOMContentLoaded", () => {
    const dropdownHeaders = document.querySelectorAll(".dropdown-header");
    dropdownHeaders.forEach((header) => {
        header.addEventListener("click", (e) => {
            const dropdownList = header.nextElementSibling;
            dropdownList.classList.toggle("active");
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown-container")) {
            document.querySelectorAll(".dropdown-list.active").forEach((list) => {
                list.classList.remove("active");
            });
        }
    });

    const dropdownLists = document.querySelectorAll(".dropdown-list");
    dropdownLists.forEach((list) => {
        list.addEventListener("change", (e) => {
            const selectedOptions = [];
            const checkboxes = list.querySelectorAll("input[type='checkbox']");
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    selectedOptions.push(checkbox.value);
                }
            });

            const header = list.previousElementSibling;
            if (selectedOptions.length > 0) {
                header.textContent = selectedOptions.join(", ");
            } else {
                header.textContent = header.getAttribute("data-placeholder");
            }
        });
    });
});