// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    //create a new array
    const chunked = [];

    let index = 0;

    while(index < array.length){
        chunked.push(array.slice(index, index + size));

        index += size;
    }

    return chunked;
}

module.exports = chunk;


// Solution 1

/**
 * 
 * //create a new array
    const chunked = [];

    //iterate through the existing array
    for (let elem of array){
    
        //create a variable to store last value in chunked
        const last = chunked[chunked.length - 1];

        //check if chunked contains an element at it's last index or equals the chunk size
        if(!last || last.length === size){
            //create a new element in chunked and add chunk element to it
            chunked.push([elem]); 
        } else{
            //add the current element to last
            last.push(elem);
        }
    }

    return chunked;* 
 * 
 */