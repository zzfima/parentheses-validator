isValidExpression = inputString => {
    let stack = []

    for (i = 0; i < inputString.length; i++) {
        if (inputString[i] == "(")
            stack.push(inputString[i])
        else if (inputString[i] == ")") {
            let poppedElement = stack.pop()
            if (poppedElement == null)
                return false
        }
    }

    if (stack.length != 0)
        return false
    return true
}

let expressionToCheck = "(2 + 2) * (3 - 3) / (8 / 2)"
console.log("Lets check it:" + expressionToCheck + ": is " + isValidExpression(expressionToCheck));