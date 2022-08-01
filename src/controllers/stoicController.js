const stoicService = require('../service/stoicService')

const ok = 'NUMBER REGISTERED SUCCESSFULY:\n\n' +
    'This is a project using sandbox(testing) services, ' +
    'for that reason your phone number is not automatically added ' +
    'to the database, once the page\'s admin validate your number ' +
    'you will be able to receive stoic messages everyday. Thank You!\n\n' +
    'You`ll be redirected to the today\`s message, enjoy... :)'

getFoneList = async (req, res) => {
    const { ...foneList } = await new stoicService().getAll()
    // console.log(foneList.rows)
    return foneList.rows
    // res.send('ok')
}

addFoneNumber = async (req, res) => {
    const foneNumber = req.body.tel
    if (foneNumber.length === 9) {
        // console.log(foneNumber)
        const foneRes = await new stoicService().insertFoneNumber(foneNumber)
        // console.log(foneRes)
        if (foneRes.rowCount) {
            res.status(200).send(ok)
        } else {
            res.status(500).send('bad')
        }
    } else
        res.status(400).send('The number must be 9 digits length')
    // const foneNumber = req.query.tel
    //     res.status(200).send('ok')
}

module.exports = { getFoneList, addFoneNumber }