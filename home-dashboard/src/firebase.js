import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCu71gdPMtveDfS-0CAxBh6RuM3U-MYTGQ",
    authDomain: "homepage-dashboard-2d702.firebaseapp.com",
    databaseURL: "https://homepage-dashboard-2d702.firebaseio.com",
    projectId: "homepage-dashboard-2d702",
    storageBucket: "homepage-dashboard-2d702.appspot.com",
    messagingSenderId: "365610702875"
};
firebase.initializeApp(config);


export default firebase;