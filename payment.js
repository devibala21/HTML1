

// Function to process payment
function processPayment() {
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Simple validation check
    if (!paymentMethod) {
        alert("Please select a payment method.");
        return false; // Prevent form submission
    }

    // Simulate successful payment (You can replace this with actual payment gateway integration)
    document.getElementById('paymentMessage').style.display = 'block';

    // Optionally, redirect to a confirmation or home page after a delay
    setTimeout(function() {
        window.location.href = 'dashboard.html'; // Redirect to a confirmation page (you can create this page)
    }, 1000);

    return false; // Prevent form submission
}
