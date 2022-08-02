// const express = require('express');
// const app = express();
require('dotenv').config();

var AWS = require('aws-sdk')

exports.sendSMS = (message, foneNumber) => {

    console.log("Subject = " + 'Daily-Stoic');
    console.log("Message = " + message);
    console.log("Number = " + foneNumber);
    console.log('')
    // console.log(process.env)
    var params = {
        Message: message,
        PhoneNumber: `${foneNumber}`,
        // PhoneNumber: '+' + 351924469387,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': 'Daily-Stoic'
            }
        }
    };

    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31', region: "us-east-1" }).publish(params).promise();

    publishTextPromise.then(
        function (data) {
            // res.end(JSON.stringify({ MessageID: data.MessageId }));
            console.log(JSON.stringify({ MessageID: data.MessageId }));
        }).catch(
            function (err) {
                // res.end(JSON.stringify({ Error: err }));
                console.log(JSON.stringify({ Error: err }));
            });
};

//http://localhost:8081/stoic/sms/?message=https://stoicapi.herokuapp.com/stoic&number=351924469387&subject=SMSTesting

// app.listen(3000, () => console.log('SMS Service Listening on PORT 3000'))