const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = `R ${-parseInt(leoBalance).toFixed(2) + -parseFloat(sarahBalance).toFixed(2)}`
const leo = `${leoName} ${leoSurname.trimEnd()} Owed R ${-parseInt(leoBalance)}`
const sarah = `${sarahName.trimEnd()} ${sarahSurname} Owed R ${-parseFloat(sarahBalance).toFixed(2)}`
const total = `Total amount owed: `
const result = `${leo}\n${sarah}\n\n${divider}\n\t${total} ${owed}\n${divider}`

console.log(result)