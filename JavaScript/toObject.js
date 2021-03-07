var data = '10008,小李,,1612580678,116322973,40071827,100,3968,5;10008,小李,,1612580688,116322973,40071827,5'
const key = ['id', 'name','duty', 'ts', 'lng', 'lat','alt', 'soc', 'state', 'sigqua', 'fatigue', 'focus', 'lucidity', 'event']
var items = data.split(';')
items.forEach(items => {
    const field = items.split(',').map((field, index) => [1, 2].includes(index) ? field : parseInt(field))
    const helmet = {}
    for (let i = 0; i < ([0, 5].includes(field[8]) ? 9 : 13); i++) {
        if (['lng', 'lat'].includes(key[i])) {
            field[i] /= 1000000
        }
        helmet[key[i]] = field[i]
    }
    console.log(helmet)
})



