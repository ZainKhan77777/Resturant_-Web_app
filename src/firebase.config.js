import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBBo3fPJSB_PbGO4IjfPilfs5s82U28Hzc",
    authDomain: "restaurantapp-d809f.firebaseapp.com",
    databaseURL: "https://restaurantapp-d809f-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-d809f",
    storageBucket: "restaurantapp-d809f.appspot.com",
    messagingSenderId: "929074403754",
    appId: "1:929074403754:web:0ef0d5353d9d4fb144b3d3"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};