
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    // your code here
    return new Promise((res,rej)=>{
       if(!Array.isArray(promises)){
          rej(new TypeError("Argument must be an array"))
          return;
       }
       if(promises.length == 0){
          res([]);
          return ;
       }
  
       const result = [];
       let cnt = 0;
       promises.forEach((item,index)=>{
          Promise.resolve(item)
            .then((value)=>{
                result[index] = {
                  status: "fulfilled",
                  value
                };
            })
            .catch((reason)=>{
                 result[index] = {
                  status: "rejected",
                  reason
                };
            })
            .finally(()=>{
                cnt++;
                if(cnt == promises.length){
                   res(result);
                }
            })
       })
  
    })
  }
  
  