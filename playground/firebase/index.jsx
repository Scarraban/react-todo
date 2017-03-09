import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDd5ALApdE1i1P8dInPI77Gl5XmfBp3Efo",
    authDomain: "sbt-todo-app.firebaseapp.com",
    databaseURL: "https://sbt-todo-app.firebaseio.com",
    storageBucket: "sbt-todo-app.appspot.com",
    messagingSenderId: "251304797506"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Sam',
    age: 26
  }
});

firebaseRef.child('user').on('value', (snapshot) => {
  console.log('Got value', snapshot.val());
});

firebaseRef.child('app').update({ name: 'New name' });
firebaseRef.child('user').update({ name: 'Andy' });

// // firebaseRef.child('app').once('value').then((snapshot) => {
// //   console.log('Got db values', snapshot.key, snapshot.val());
// // }, (e) => {
// //   console.log('Failed', e);
// // });
//
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
// firebaseRef.off();
//
// firebaseRef.update({ isRunning: false });
