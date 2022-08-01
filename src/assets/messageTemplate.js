const { getMonths } = require('./months')

const template = (message) => {

    return (
        `${getMonths()}\n` +
        `${message}\n` +
        `To read the full day\`s message access: ` +
        `https://stoicapi.herokuapp.com/stoic`
    )
}

module.exports = template