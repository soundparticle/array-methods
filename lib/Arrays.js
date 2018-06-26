function map(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr; 
}
function filter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i)


}


module.exports = {
    map,
    filter
};