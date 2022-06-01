const valueTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"]

const printResult = (a, b, c, alpha, beta) => {
    console.log('a - ', a)
    console.log('b - ', b)
    console.log('c - ', c)
    console.log('alpha - ', alpha)
    console.log('beta - ', beta)
}

const twoLegs = (leg1, leg2) => {
    const c = +Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2)).toFixed(2)
    const alpha = +(Math.atan(leg1 / leg2) * (180 / Math.PI)).toFixed(2)
    const beta = +(Math.atan(leg2 / leg1) * (180 / Math.PI)).toFixed(2)

    return { a: leg1, b: leg2, c, alpha, beta }
}

const legAndHypotenuse = (leg, hypotenuse) => {
    if (leg > hypotenuse) {
        return false
    }

    const b = +Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(leg, 2)).toFixed(2)

    const alpha = +(Math.atan(leg / b) * (180 / Math.PI)).toFixed(2)
    const beta = +(Math.atan(b / leg) * (180 / Math.PI)).toFixed(2)

    return { a: leg, b, c: hypotenuse, alpha, beta }
}

const legAndeAngle = (leg, angle, opposite = false) => {
    if (angle >= 90) {
        return false
    }

    let c
    if (opposite) {
        c = leg / Math.sin(angle * (Math.PI / 180))
    } else {
        c = leg / Math.cos(angle * (Math.PI / 180))
    }

    c = +c.toFixed(2)

    const b = +Math.sqrt(Math.pow(c, 2) - Math.pow(leg, 2)).toFixed(2)
    const beta = 90 - angle

    return { a: leg, b, c, alpha: angle, beta }
}

const hypotenuseAndAngle = (hypotenuse, angle) => {
    if (angle >= 90) {
        return false
    }

    const alpha = 90 - angle

    const a = hypotenuse * Math.cos(alpha * (Math.PI / 180));
    const b = hypotenuse * Math.cos(angle * (Math.PI / 180));

    return { a, b, c: hypotenuse, alpha, beta: angle }
}

const triangle = (valueFirst, typeFirst, valueSecond, typeSecond, printRes = true) => {
    if (!valueTypes.includes(typeFirst) || !valueTypes.includes(typeSecond)) {
        console.error('Error in value types arguments')
        return
    }

    if (valueFirst <= 0 || valueSecond <= 0) {
        console.error('Error in value arguments')
        return
    }

    let result

    // leg and leg
    if (typeFirst === "leg" && typeSecond === "leg") {
        result = twoLegs(valueFirst, valueSecond)
    }


    // leg and hypotenuse
    if (typeFirst === "leg" && typeSecond === "hypotenuse") {
        result = legAndHypotenuse(valueFirst, valueSecond)
    }

    if (typeFirst === "hypotenuse" && typeSecond === "leg") {
        result = legAndHypotenuse(valueSecond, valueFirst)
    }


    // leg and adjacent angle
    if (typeFirst === "leg" && typeSecond === "adjacent angle") {
        result = legAndeAngle(valueFirst, valueSecond)
    }

    if (typeFirst === "adjacent angle" && typeSecond === "leg") {
        result = legAndeAngle(valueSecond, valueFirst)
    }


    // leg and opposite angle
    if (typeFirst === "leg" && typeSecond === "opposite angle") {
        result = legAndeAngle(valueFirst, valueSecond, true)
    }

    if (typeFirst === "opposite angle" && typeSecond === "leg") {
        result = legAndeAngle(valueSecond, valueFirst, true)
    }


    // hypotenuse and angle
    if (typeFirst === "hypotenuse" && typeSecond === "angle") {
        result = hypotenuseAndAngle(valueFirst, valueSecond)
    }

    if (typeFirst === "angle" && typeSecond === "hypotenuse") {
        result = hypotenuseAndAngle(valueSecond, valueFirst)
    }

    if (!result) {
        console.error('Incorrect data')
        return;
    }

    if ((result.a + result.b) < result.c) {
        console.error('Incorrect data')
        return;
    }

    if (printRes && result) {
        printResult(result.a, result.b, result.c, result.alpha, result.beta)
    }

    return result
}

triangle(5, "leg", 90, "opposite angle")
