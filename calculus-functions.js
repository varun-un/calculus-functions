/**
 * Uses a function's differential equation and intial value to estimate the function's value at a certain x-value using Euler's method for 
 * approximation. The differential equation should be dependent on just the x-value of the function.
 * 
 * @param {function} differentialEq The differential equation to use, in the form of a function that takes in the x-value and returns
 * the rate of change at that point
 * @param {Object} initial The initial coordinate pair to use
 * @param {number} initial.x The initial coordinate's x-value
 * @param {number} initial.y The initial coordinate's y-value
 * @param {number} targetX The x-value of the coordinate for which to approximate
 * @param {number} deltaX The step size to use for the approximation (by default .01)
 * @returns {number} The approximate y-value of the function at the given target x value
 */
const euler1 = (differentialEq, initial, targetX, deltaX = .01) => {

    deltaX = initial.x < targetX ? Math.abs(deltaX) : Math.abs(deltaX) * -1

    var y = initial.y
    for (var i = 1; i <= (targetX - initial.x) / deltaX; i++){
        try {
            y += differentialEq(initial.x + i * deltaX) * deltaX
        }
        catch (err) {
            console.error('The differential equation function is undefined or not in the right format:' + err)
        }
    }

    return y
}

/**
 * Uses a function's differential equation and intial value to estimate the function's value at a certain x-value using Euler's method for 
 * approximation.
 * 
 * @param {function} differentialEq The differential equation to use, in the form of a function that takes in the x-value and y-value 
 * and returns the rate of change at that point
 * @param {Object} initial The initial coordinate pair to use
 * @param {number} initial.x The initial coordinate's x-value
 * @param {number} initial.y The initial coordinate's y-value
 * @param {number} targetX The x-value of the coordinate for which to approximate
 * @param {number} deltaX The step size to use for the approximation (by default .01)
 * @returns {number} The approximate y-value of the function at the given target x value
 */
const euler2 = (differentialEq, initial, targetX, deltaX = .01) => {
    deltaX = initial.x < targetX ? Math.abs(deltaX) : Math.abs(deltaX) * -1

    var y = initial.y
    for (var i = 1; i <= (targetX - initial.x) / deltaX; i++){
        try {
            y += differentialEq(initial.x + i * deltaX, y) * deltaX
        }
        catch (err) {
            console.error('The differential equation function is undefined or not in the right format:' + err)
        }
    }

    return y
}


// Exports
exports.euler1 = euler1
exports.euler2 = euler2