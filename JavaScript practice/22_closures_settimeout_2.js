// problem : user should print from i= 1 to 5 but with an increment of i sec every iteration  


// without using let keyword 

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x); // Correctly prints 1, 2, 3, 4, 5
            }, x * 1000);
        }
        close(i);
    }
    console.log("mihir patel");
}
x();
