

const arr = [5,1,3,2,6];

const sum = arr.reduce(function(add,curr_value){
    return add+curr_value;
},0);


console.log(sum); // output: 17

const max = arr.reduce(function (max,curr_value){
    if(curr_value > max){
        max = curr_value
    }
    return max
},0)

console.log(max); // output: 6