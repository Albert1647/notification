var admin = require("firebase-admin");

var serviceAccount = require("D:/Visual Studio/Git Repos/NumEiang/admin/src/api/notification_private_key.json")

var registrationToken = "fHoXnh8dRHmMH2K9nyArZt:APA91bGInV8BXe7nxUo6ylHes8JLBVBU1bJPRUQ_rJotLgSHHxj0DOmHCejjvoPOtnt8EBKspYzakSdfZz1Bs1342zjDvgg1d67nlqNEScVz2ezgLPHfhC9HgHpe6Zyu-ZtPK5TJ9HTM";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://flutter-notification-28d96-default-rtdb.firebaseio.com"
});

  let message = {
    notification: {
      title: 'This is the message from Admin',
      body: 'Admin said its finally work omg!',
    },
    token: registrationToken,
  };

admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
});