const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom
const index = require('./list')

let files = fs.readdirSync('./Stoic/Text')

let finalList = files.filter(file => {
    let path = './Stoic/Text/' + file
    let content = fs.readFileSync(path, 'utf8')
    const dom = new JSDOM(content)
    const body = dom.window.document.body
    if(body.classList.contains('class5')) {
        return true
    }
})

// finalList.forEach( (item, index) => {
//     console.log(`${index}: "${item}",` )
// })

// console.log(index[100])