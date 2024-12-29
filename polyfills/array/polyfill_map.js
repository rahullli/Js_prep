/**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];


// Before Polyfill -> Working of Map 
// Input -> Array 
// Output -> new Array after performing operation on each element.

// Eg:-
const mp =[1, 2, 3, 4, 5]
const res = mp.map(((item) => item * 2));
console.log(mp); // [1,2,3,4,5]
console.log(res); // [2,4,6,8,10]

// After Polyfill -> Working of Map 
// Input -> Array 
// Output -> new Array after performing operation on each element.

// Eg:-
const mp1 =[1, 2, 3, 4, 5]
const res2 = mp.map(((item) => item * 2));

const callback = (item) => item * 2;
Array.prototype.myMap = function(callback){

    const ans = [];
    for(let index = 0;index<this.length;index++){
        ans.push(callback(this[index], index, this))
    }
    return ans;
}
console.log(mp1); // [1,2,3,4,5]
console.log(mp1.myMap(callback)); // [2,4,6,8,10]