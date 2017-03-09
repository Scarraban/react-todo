import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDd5ALApdE1i1P8dInPI77Gl5XmfBp3Efo",
      authDomain: "sbt-todo-app.firebaseapp.com",
      databaseURL: "https://sbt-todo-app.firebaseio.com",
      storageBucket: "sbt-todo-app.appspot.com",
      messagingSenderId: "251304797506"
    };
  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
