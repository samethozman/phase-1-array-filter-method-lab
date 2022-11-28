// Code your solution here
const findMatching = (array, query) => {
    return array.filter(q => {
        return q.toLowerCase() === query.toLowerCase();
    })
}

const fuzzyMatch = (array, query) => {
    const queryLength = query.length;
    return array.filter(q => {
        return q.slice(0,queryLength) === query;
    })
}

const matchName = (array, query) => {
    return array.filter(q => {
        return q.name === query;
    })
}