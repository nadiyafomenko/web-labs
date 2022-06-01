
const getCharCodeSum = (string) => {
   return string.split('').reduce((prev, curr) => prev + curr.charCodeAt(0), 0)
}

(() => {
    const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    console.log('Початковий варіант')
    names.forEach(item => item.toLowerCase().charAt(0) === "j" ? speakHello(item) : speakGoodBye(item))

    console.log('Додатковий варіант')
    names.forEach(item => getCharCodeSum(item) > 400 ? speakHello(item) : speakGoodBye(item))
})()
