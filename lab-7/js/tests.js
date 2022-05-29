(function() {
    const res1 = triangle(3, "leg", 4, "leg", false)

    if (res1.a === 3 && res1.b === 4 && res1.c === 5 && res1.alpha === 36.87 && res1.beta === 53.13) {
       console.info('LEG_LEG PASSED - 1')
    }

    const res2 = triangle(7, "leg", 8, "leg", false)

    if (res2.a === 7 && res2.b === 8 && res2.c === 10.63 && res2.alpha === 41.19 && res2.beta === 48.81) {
        console.info('LEG_LEG PASSED - 2')
    }

    const res3 = triangle(3, "leg", 5, "hypotenuse", false)

    if (res3.a === 3 && res3.b === 4 && res3.c === 5 && res3.alpha === 36.87 && res3.beta === 53.13) {
        console.info('LEG_HYPOTENUSE PASSED - 1')
    }

    const res4 = triangle(7, "leg", 10.63, "hypotenuse", false)

    if (res4.a === 7 && res4.b === 8 && res4.c === 10.63 && res4.alpha === 41.19 && res4.beta === 48.81) {
        console.info('LEG_HYPOTENUSE PASSED - 2')
    }

    const res5 = triangle(4, "leg", 36.87, "adjacent angle", false)

    if (res5.a === 4 && res5.b === 3 && res5.c === 5 && res5.alpha === 36.87 && res5.beta === 53.13) {
        console.info('LEG_ADJ_ANGLE PASSED - 1')
    }
}())
