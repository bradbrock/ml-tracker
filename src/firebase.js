import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAagi46HUmApZzTOmhcRLtm3AMH15z-Y-4",
  authDomain: "ml-legends.firebaseapp.com",
  databaseURL: "https://ml-legends.firebaseio.com",
  projectId: "ml-legends",
  storageBucket: "ml-legends.appspot.com",
  messagingSenderId: "979692852280"
};

firebase.initializeApp(config);
export default firebase;