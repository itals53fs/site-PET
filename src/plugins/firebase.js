
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: process.env.VUE_APP_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKRT,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

export default function install(Vue) {
  Object.defineProperty(Vue.prototype, "$firebase", {
    get() {
      return firebaseApp
    }
  })
}
export const firebaseApp = firebase.initializeApp(
  firebaseConfig
)