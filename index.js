// Write your solution in this file!
const employee = {
    name:"Ositu",
    streetAddress:"Utawala"
};

/*
`updateEmployeeWithKeyAndValue()`: this function should take in three
arguments: an `employee` `Object`, a `key` and a `value`. This function should
not mutate the `employee`; it should return a _new_ `Object` that has an
updated `value` for the `key` passed in.
*/

function updateEmployeeWithKeyAndValue(object,key,value){
    return {...object,[key]:value,};
}

/*
`destructivelyUpdateEmployeeWithKeyAndValue()`: this function should work the
same as `updateEmployeeWithKeyAndValue()` but it _should_ mutate the
`employee` `Object` passed in.
*/

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    object[key]=value;
    return object;
}

/*
`deleteFromEmployeeByKey()`: this function should take in a `employee`
`Object` and a `key`. It should delete the property with that `key` from the
`employee` `Object`. This should not mutate the original `employee` `Object`;
it should return a _new_ `Object` that doesn't include the identified
key-value pair.
*/

function deleteFromEmployeeByKey(object,key){
    let newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}

/*
`destructivelyDeleteFromEmployeeByKey()`: this function should work the same
as `deleteFromEmployeeByKey()` but it _should_ mutate the `employee` `Object`.
*/

function destructivelyDeleteFromEmployeeByKey(object,key){
    delete object[key];
    return object;
}