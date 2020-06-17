// ---- Mapping Practice
function mapToNegativize(numbers) {
    let newArr = []
    numbers.map(number => {
        newArr.push(number * -1);
    })
    return newArr;
}

function mapToNoChange(numbers) {
    let newArr = []
    numbers.map(number => {
        newArr.push(number);
    })
    return newArr;
}

function mapToDouble(numbers) {
    let newArr = []
    numbers.map(number => {
        newArr.push(number * 2);
    })
    return newArr;
}

function mapToSquare(numbers) {
    let newArr = []
    numbers.map(number => {
        newArr.push(number ** 2);
    })
    return newArr;
}


// ---- Reducing Practice
// working on this method below...
// function reduceToTotal(sourceArr, startingPoint = 0) {
//     let sum = sourceArr.reduce((number, startingPoint) => startingPoint + number);
//     return sum;
// }

//alternative solution the above method
function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];
    };
    return total;
};

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i])
            return false
    };
    return true;
};

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i])
            return true
    };
    return false;
};