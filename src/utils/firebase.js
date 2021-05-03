import firebase from 'firebase';
import { firebaseConfig} from '../config/index'

export const firebaseApp = firebase.initializeApp(firebaseConfig);