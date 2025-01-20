

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function (orderId) {
    api.proceedToPayment(orderId, function (paymentInfo) {
        api.showOrderSummary(paymentInfo, function (orderSummary) {
            api.updateWallet(orderSummary, function () {
                console.log("Wallet updated successfully!");
            });
        });
    });
});

