// we will look into creating functions to find area, circumference of a circle 

// in this code we will look into how can we optimize the code and dont repeat the code much

const radius = [3,1,2,4]

const area  = function(radius){
   return Math.PI * radius * radius;
}

const circumference  = function(radius){
   return 2 *Math.PI * radius;
}

const diameter  = function(radius){
   return 2 * radius;
}


const Calculate = function (radius,logic){
    const output = [];

    for (let i=0; i<radius.length; i++){
        output.push(logic(radius[i]) );        
    }
    return output;
}

console.log(Calculate(radius,area));  
// output : [28.274333882308138,3.141592653589793,
// 12.566370614359172,50.26548245743669]

console.log(Calculate(radius,circumference));
//output :[18.84955592153876,6.283185307179586,
// 12.566370614359172,25.132741228718345]


console.log(Calculate(radius, diameter))
//output : [ 6, 2, 4, 8 ]



// As you observed insted of creating multiple functions for multiple task that share almost 
// the same code only with a line or 2 change, we can write a common function for the similar code 
// in the previous 3 functions and logics we can store it in 3 diff functions and pass those functions 






