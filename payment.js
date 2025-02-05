document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    if (validatePayment(cardNumber, expiryDate, cvv, amount)) {
        alert('Payment Successful!');
        // Here you can add further actions, such as sending payment data to the server
    } else {
        alert('Invalid Payment Details. Please try again.');
    }
});

function validatePayment(cardNumber, expiryDate, cvv, amount) {
    // Basic validation logic (can be expanded as needed)
    if (cardNumber.length !== 16 || isNaN(cardNumber)) return false;
    if (!expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) return false;
    if (cvv.length !== 3 || isNaN(cvv)) return false;
    if (amount <= 0 || isNaN(amount)) return false;

    return true;
}