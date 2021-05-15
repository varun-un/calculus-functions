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
            console.error('The differential equation function is undefined or not in the right format: ' + err)
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
            console.error('The differential equation function is undefined or not in the right format: ' + err)
        }
    }

    return y
}

/**
 * Uses Newton's method to approximate a function's zero. The function and its dervative must be defined for all values of x, and the 
 * derivative should not equal 0 for any x-value near the initial approximation
 * @param {function} equation The function for which to perform the approximation for its zero. The function should take in the x-value and 
 * return its corresponding y-value
 * @param {function} derivative The derivative of this function, only dependent on x
 * @param {number} initialX The initial estimate of the zero from which to perform the approximation
 * @param {number} epsilon The precision with which the zero should be estimated (.0001 by default)
 * @returns {number} The approximate x-value of the function's zero
 */
const newtonsMethod = (equation, derivative, initialX, epsilon = .0001) => {

    var diff = epsilon + 1
    var x = initialX
    var xNew

    while (diff > epsilon) {

        if (derivative(x) == 0) {
            console.error("Newton's method fails, as the function has a horizontal tangent at x = " + x)
            return null
        }

        try {
            xNew = x - (equation(x)) / (derivative(x))
        }
        catch (err) {
            console.error("The function or its derivative is undefined or not in the right format: " + err)
            return null
        }
        
        diff = Math.abs(x - xNew)
        x = xNew
    }
    return x
}

// Exports
exports.euler1 = euler1
exports.euler2 = euler2
exports.newtonsMethod = newtonsMethod