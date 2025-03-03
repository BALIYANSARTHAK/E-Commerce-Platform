function buyProduct(productName, price) {
    let address = prompt("Enter your shipping address:");
    
    if (!address) {
        alert("You must enter an address to proceed.");
        return;
    }
    
    let paymentMethod = confirm("Payment Method: Cash on Delivery\nPress OK to confirm.");
    
    if (paymentMethod) {
        alert(`Your order for "${productName}" worth $${price} has been placed successfully!`);
    } else {
        alert("Order cancelled.");
    }
}
