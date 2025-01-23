
function createOrder(cart) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Order created!"), 2000);
    });
}

function processPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${order} Payment processed!`), 2000);
    });
}

function confirmOrder(payment) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${payment} Order confirmed!`), 2000);
    });
}

async function placeOrder() {
    try {
        console.log("Start placing order...");
        const order = await createOrder(["Shoes", "Bag"]); // Pauses until the order is created
        console.log(order);

        const payment = await processPayment(order); // Waits for payment to process
        console.log(payment);

        const confirmation = await confirmOrder(payment); // Waits for confirmation
        console.log(confirmation);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

placeOrder();
