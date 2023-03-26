import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, getDoc, doc} from 'firebase/firestore'
import { mock2firestore } from "mock2firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSb0cXso9O6sf0SS3V-gvqykSemFnaL4E",
  authDomain: "reactjs-coderhouse-36339.firebaseapp.com",
  projectId: "reactjs-coderhouse-36339",
  storageBucket: "reactjs-coderhouse-36339.appspot.com",
  messagingSenderId: "159722153303",
  appId: "1:159722153303:web:cb041609945d1558ae8a12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function newOrder(orderInfo){
  const collRef = collection(db, "orders")
  const resp = await addDoc(collRef, orderInfo)

  return resp.id
}

async function getProductsFromDB(){
  const collRef = collection(db, "products")
  let ssProducts = await getDocs(collRef)
  const docs = ssProducts.docs

  const response = docs.map(doc=> (
      {...doc.data()}
  ))
  return response;
}

async function getSingleProductFromDB(numberProducto){
  const collRef = collection(db, "products")
  const docRef = doc(collRef, numberProducto)
  const docSS = await getDoc(docRef)
  
  return { ...docSS.data()};
}

// export async function exportProducts(){
//   mock2firestore(data, db, 'products', true)
// }

export { getProductsFromDB, getSingleProductFromDB, newOrder, app, db };