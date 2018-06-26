function map(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr; 
}
function filter(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i]); 
        } 
    }
    return newArr;
}


module.exports = {
    map,
    filter
};