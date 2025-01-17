const api = {
    createOrder: function (cart)  {
        return new Promise(function (resolve, reject) {
            // Simulate order creation
            setTimeout(function ()  {
                resolve("order123") 
            }, 1000);
        });
    },
    proceedToPayment: function (orderId) {
        return new Promise(function (resolve, reject) {
            // Simulate payment processing
            setTimeout(function ()  {
                resolve("paymentInfo456")
            }, 1000);
        });
    },
    showOrderSummary: function (paymentInfo)  {
        return new Promise(function (resolve, reject) {
            // Simulate order summary
            setTimeout(function ()  {
                resolve("orderSummary789")
            }, 1000);
        });
    },
    updateWallet: function (orderSummary)  {
        return new Promise(function (resolve, reject) {
            // Simulate wallet update
            setTimeout(function () {
                 resolve("Wallet updated!")
                }, 1000);
        });
    }
};


const promise = api.createOrder(["shoes", "pants", "kurta"])  // connsole.log(promise) this will give you pending status
promise.then((orderId )=> console.log(orderId)) //this part of the code s used to print order id




/// Use Promise Chaining
api.createOrder(["shoes", "pants", "kurta"])
    .then(orderId => api.proceedToPayment(orderId))
    .then(paymentInfo => api.showOrderSummary(paymentInfo))
    .then(orderSummary => api.updateWallet(orderSummary))
    .then(() => console.log("Wallet updated successfully!"))
    .catch(error => console.error("Error occurred:", error));