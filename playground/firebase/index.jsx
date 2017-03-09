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

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Walk the dog'
});

todosRef.push({
  text: 'Feed the cat'
});
