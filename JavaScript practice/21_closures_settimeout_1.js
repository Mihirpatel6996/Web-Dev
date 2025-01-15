
// problem : user should print from i= 1 to 5 but with an increment of i sec every iteration  

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); // This will correctly print 1, 2, 3, 4, 5
        }, i * 1000);
    }
    console.log("mihir patel");
}
x();





