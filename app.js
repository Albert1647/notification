
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json())
app.use(cors())

var admin = require("firebase-admin");

var serviceAccount = require("D:/Visual Studio/Development/notification/notification_private_key.json")

var registrationTokens = "fHoXnh8dRHmMH2K9nyArZt:APA91bGInV8BXe7nxUo6ylHes8JLBVBU1bJPRUQ_rJotLgSHHxj0DOmHCejjvoPOtnt8EBKspYzakSdfZz1Bs1342zjDvgg1d67nlqNEScVz2ezgLPHfhC9HgHpe6Zyu-ZtPK5TJ9HTM";


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://flutter-notification-28d96-default-rtdb.firebaseio.com"
});

  const sendMessage = (messageData) => {
    admin.messaging().send(messageData)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
  }


//   let message = 
//     {
//         "notification": {
//             "title": "fortune",
//             "body": "Topic fortune"
//         },
//         "topic": "fortune"
//     }

app.post('/notification', (req, res, next) => {
    sendMessage(req.body);
    res.send('<h1>The Notify !! </h1>');
});

app.use('/', (req, res, next) => {
    res.send("Catch all");
    next();
});

app.listen(3000);

