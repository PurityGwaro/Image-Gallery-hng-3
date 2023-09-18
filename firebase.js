import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCGZ3aa1vxBqRVu5btGrp_cmTIfF6cxikg',
  authDomain: 'image-gallery-bf4fa.firebaseapp.com',
  projectId: 'image-gallery-bf4fa',
  appId: "1:53323775941:web:3634d190359b49435795ac",
  storageBucket: 'image-gallery-bf4fa.appspot.com',
  messagingSenderId: '53323775941',
};

if (!firebase?.apps?.length) {
  firebase?.initializeApp(firebaseConfig);
}

export const auth = firebase?.auth();
export const firestore = firebase?.firestore();
export default firebase;
