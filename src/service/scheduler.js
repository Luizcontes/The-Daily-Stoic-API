const schedule = require('node-schedule')
const template = require('../assets/messageTemplate')
const { getFoneList } = require('../controllers/stoicController')


// const rule = new schedule.RecurrenceRule()
// rule.hour = 6
// rule.tz = 'Etc/UTC'

// const job = schedule.scheduleJob(rule, () => {
//     console.log('Testing scheduler!!!')
// })

const sendSMS = require('./AWS_SNS').sendSMS

const rule = new schedule.RecurrenceRule()
rule.hour = 12
// rule.second = [0, 30]
// rule.minute = 50

exports.job = (message) => {
    schedule.scheduleJob(rule, async () => {
        console.log(new Date())
        const list = await getFoneList()
        list.forEach(number => {
            const { id, ddi, ddd, telefone, active } = number
            const foneString = `+${ddi}${ddd || ''}${telefone}`
            if (active) {
                sendSMS(template(message), foneString)
            }
        });
    })
}


