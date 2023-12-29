import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { MenuData } from "../MenuData/MenuData";

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

export const createUser = (userId) => {
  const docRef = doc(db, "users", userId);

  const data = {
    username: userId,
    menu: MenuData.SMALL,
  };

  setDoc(docRef, data);
};

export const authenticateUser = async (userId) => {
  // 1 - récupérer un user existant
  const existingUser = await getUser(userId);

  //    2 - créer un user
  if (!existingUser) {
    createUser(userId);
  }
  return existingUser;
};
