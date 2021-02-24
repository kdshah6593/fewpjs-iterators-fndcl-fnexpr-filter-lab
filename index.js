// Code your solution here
function findMatching(arr, str) {
    let results = arr.filter(n => {
        return n.toLowerCase() === str.toLowerCase();
    });
    return results
}

function fuzzyMatch(arr, str) {
    let results = arr.filter(n => {
        let l = str.length;
        return n.slice(0, l) === str;
    });
    return results
}

function matchName(arr, str) {
    let results = arr.filter(n => {
        return n.name === str;
    })
    return results
}