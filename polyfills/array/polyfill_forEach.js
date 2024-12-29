/**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

// Before forEach -> Working of forEach 
// Input -> Array 
// Output -> void.

// Eg:-
[1,2,3].forEach((item)=>{
    console.log(item);
})
// 1,2,3






// After forEach polyfill -> Working of forEach 
// Input -> Array 
// Output -> void.

// Eg:-
[1,2,3].forEach((item)=>{
    console.log(item);
})
// 1,2,3
const callback = (item)=>{
    console.log(item);
}
Array.prototype.myForEach = function(callback){

    for(let index = 0;index<this.length;index++){
        callback(this[index], index, this)
    }
}

const arr = [1,2,3];
arr.myForEach(callback);