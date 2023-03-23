const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyAw-w1NcTDyZlMGuhZ1U1LjICSAY5ZbLMU",
    authDomain: "mern-1756d.firebaseapp.com",
    projectId: "mern-1756d",
    storageBucket: "mern-1756d.appspot.com",
    messagingSenderId: "315139420696",
    appId: "1:315139420696:web:a01bd764f2973e0a91896d"
  };

  const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
module.exports = getStorage(firebaseApp);