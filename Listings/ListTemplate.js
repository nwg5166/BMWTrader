


//Script for Payment Calculator
document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.querySelector(".EstimatePaymentsCalculator button");

    calculateButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        calculatePayments();
    });

    function calculatePayments() {
        const price = parseFloat(document.getElementById("Price").value.replace(/\$/g, "").replace(/,/g, ""));
        const downPayment = parseFloat(document.getElementById("DownPayment").value || 0);
        const tradeInValue = parseFloat(document.getElementById("TradeInValue").value || 0);
        const interestRate = parseFloat(document.getElementById("InterestRate").value || 0) / 100;
        const loanTerm = parseFloat(document.getElementById("LoanTerm").value || 0);

        if (isNaN(price) || isNaN(loanTerm) || loanTerm <= 0) {
            alert("Please provide valid inputs.");
            return;
        }

        const loanAmount = price - downPayment - tradeInValue;
        const monthlyRate = interestRate / 12;
        const monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanTerm)));
        const totalPayment = monthlyPayment * loanTerm;
        const totalInterest = totalPayment - loanAmount;

        document.getElementById("MonthlyPayment").textContent = `$${monthlyPayment.toFixed(2)}`;
        document.getElementById("TotalInterest").textContent = `$${totalInterest.toFixed(2)}`;
        document.getElementById("TotalPayment").textContent = `$${totalPayment.toFixed(2)}`;
    }
});

//Script for Price History Graph
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('PriceHistoryGraphCanvas').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example months
            datasets: [{
                label: 'Price',
                data: [80000, 78000, 77000, 76000, 75000, 74000], // Example prices
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'Month' }
                },
                y: {
                    title: { display: true, text: 'Price ($)' },
                    beginAtZero: false
                }
            }
        }
    });
});

