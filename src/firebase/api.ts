import {
  DocumentData,
  Query,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firebaseDB as db } from "./index";
import { EQueryOperator } from "./type";

// Document: https://firebase.google.com/docs/firestore/manage-data/structure-data
export interface IAddDocumentParams {
  collectionName: string;
  documentId: string;
}

const addDocument = async (
  collectionName: string,
  documentId: string,
  data: any
) => {
  try {
    if (documentId) {
      await setDoc(doc(db, collectionName, documentId), {
        ...data,
        id: documentId,
      });
      return;
    } else {
      const newRef = doc(collection(db, collectionName));
      // later...
      await setDoc(newRef, { ...data, id: newRef.id });
    }
  } catch (err) {
    console.log(err);
  }
};

const updateDocument = async (
  collectionName: string,
  documentId: string,
  data: any
) => {
  try {
    const currentRef = doc(db, collectionName, documentId);
    if (currentRef) {
      await updateDoc(currentRef, data);
    }
    // Set the "capital" field of the city 'DC'
  } catch (err) {
    console.log(err);
  }
};

const getOneDocument = async (collectionName: string, documentId: string) => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

const getAllDocuments = async (collectionName: string) => {
  try {
    const allDocs: any = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      allDocs.push(doc.data());
    });
    return allDocs;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export interface IQueryOptions {
  property: string;
  queryOperator: EQueryOperator;
  value: any;
}

const queryDocuments = async (
  collectionName: string,
  options: IQueryOptions
) => {
  try {
    const allDocs: any = [];
    const q = query(
      collection(db, collectionName),
      where(options.property, options.queryOperator, options.value)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      allDocs.push(doc.data());
    });
    return allDocs;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const customQueryDocuments = async (q: Query<DocumentData, DocumentData>) => {
  try {
    const allDocs: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      allDocs.push(doc.data());
    });
    return allDocs;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export {
  addDocument,
  updateDocument,
  getOneDocument,
  getAllDocuments,
  queryDocuments,
  customQueryDocuments,
};
