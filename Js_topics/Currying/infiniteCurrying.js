function infiniteCurry(fn,initialValue = 0){
    let accumulator = initialValue;
    const curried = (value) =>{
        if(value !== undefined){
            accumulator = fn(accumulator,value);
            return curried;
        }
        return accumulator;
    }
    return curried;
}

const add = (a,b) => a+b;
const curriedAdd = infiniteCurry(add);
console.log(curriedAdd(1)(2)(3)(4)());