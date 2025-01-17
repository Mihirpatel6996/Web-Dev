

const users = [
    { firstName: "mihir", lastName: "patel", age: 11 },
    { firstName: "aashritha", lastName: "kandra", age: 23 },
    { firstName: "aditi", lastName: "bandaru", age: 21 },
    { firstName: "vamsi", lastName: "krishna", age: 11 }
];

// using map to combine first name and last name 
function combine_names(x){
    return x.firstName + " " + x.lastName
}
const fetch_full_names = users.map(combine_names);
console.log(fetch_full_names); // output : [ 'mihir patel', 'aashritha kandra', 'aditi bandaru', 'vamsi krishna' ]

// using reduce to fetch the age frequency form the users list 
const fetch_age_frequency = users.reduce((frequency_array , current_user) => {
    if (frequency_array[current_user.age]){
        frequency_array[current_user.age] = ++ frequency_array[current_user.age];
    }
    else {
        frequency_array[current_user.age] = 1;
    }

    return frequency_array;

}, {});
console.log(fetch_age_frequency);
//output : { '11': 2, '21': 1, '23': 1 }

// using filter channing with map to find out the name of users with age less than 20 

function user_age (x){
    return x.age < 20;
}

function user_name(x){

    return x.firstName;
}


const below_20_age = users.filter(user_age);
console.log(below_20_age);  

/* output : 
[
  { firstName: 'mihir', lastName: 'patel', age: 11 },
  { firstName: 'vamsi', lastName: 'krishna', age: 11 }
]
*/ 

const fetch_name_below_20_age = below_20_age.map(user_name);
console.log(fetch_name_below_20_age);
/* 
output -- [ 'mihir', 'vamsi' ]

*/

/* 
or you can write it in one liner 
const firstNamesBelow20 = users.filter(user => user.age < 20).map(user => user.firstName);
*/

// insted of using map and filter channing you can achieve it using reduce also 


const fetch_name_below_20_age_with_reduce = users.reduce((filtered_names, current) => {
    if (current.age<20){
        filtered_names.push(current.firstName)
    }
    return filtered_names
}, [])

console.log(fetch_name_below_20_age_with_reduce) // Output : [ 'mihir', 'vamsi' ]






