// we will look into creating functions to find area, circumference of a circle 

const radius = [3,1,2,4]

const CalculateArea = function area(radius){
    const output = [];

    for (let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(CalculateArea(radius));  
// output : [28.274333882308138,3.141592653589793,
// 12.566370614359172,50.26548245743669]


const CalculateCircumference = function circumference(radius){
    const output = [];

    for (let i=0; i<radius.length; i++){
        output.push(2*Math.PI * radius[i] );
    }
    return output;
}

console.log(CalculateCircumference(radius));
//output :[18.84955592153876,6.283185307179586,
// 12.566370614359172,25.132741228718345]


const CalculateDiameter = function diameter(radius){
    const output = [];

    for (let i=0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(CalculateDiameter(radius));

//output : [ 6, 2, 4, 8 ]


// ******* NOTE ******** // 

//the above 3 functions has almost 90% of the code same just the formula logic
// is different so we can use functional prgramming and higher order functions to write this code 


