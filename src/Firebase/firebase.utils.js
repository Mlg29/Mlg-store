import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth" 


const config = {
    apiKey: "AIzaSyCglwoxjLki-WNdYj7DO5psvAA015t4yok",
    authDomain: "mlg-stores.firebaseapp.com",
    databaseURL: "https://mlg-stores.firebaseio.com",
    projectId: "mlg-stores",
    storageBucket: "mlg-stores.appspot.com",
    messagingSenderId: "373001212235",
    appId: "1:373001212235:web:696c9fb838ebd2fef358ce",
    measurementId: "G-8EK3X7M8YN"
  }
  
  


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user, error.message')
      }
    }

    return userRef
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()

      batch.set(newDocRef,obj)
    })

    return await batch.commit()
  }

   export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data()


      return {
        routeName: encodeURI(title.toLowerCase()), 
        id: doc.id,
        title,
        items
      }
    })
    return transformedCollection.reduce((accumulator, collection) => {
     accumulator[collection.title.toLowerCase()] = collection
     return accumulator
   }, {})
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const  firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt: "select_account"})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)


  export default firebase