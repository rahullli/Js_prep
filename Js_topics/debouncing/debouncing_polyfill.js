const fetchAPI = async() =>{
    const res = await fetch("");
    const data = await res.json();
}

const debounce = (func, delay) =>{
    let timerId;
    return function(args){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(()=>{
            func.apply(this,args);
        }, delay)
    }
}

debounce(fetchAPI,3000)("Hi", "Hello");