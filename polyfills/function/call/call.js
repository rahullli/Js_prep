let name = {
    first: "RK",
    last: "Kumar",
    getMyFullName: function(args){
        console.log(args);
        console.log(this);
        console.log(this.first + " " + this.last);
    },
    num : ["1,2,3,4,5,6"],
    to : [1,[2,[3,[4]]]],
    last: "kkkjbkj"
}

let name2 = {
    first: "SK",
    last: "kik",
    // getMyFullName: function(){
    //     console.log(this);
    //     console.log(this.first + " " + this.last);
    // },
    // num : ["1,2,3,4,5,6"],
    // to : [1,[2,[3,[4]]]],
    // last: "kkkjbkj"
}
name.getMyFullName.call(name2);