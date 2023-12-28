import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenus = (userId, updatedMenu) => {
  const docRef = doc(db, "users", userId);

  const data = {
    username: userId,
    menu: updatedMenu,
  };

  setDoc(docRef, data);
};

export const getMenu = async (userId) => {
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    console.log(menu);
    return menu;
  }
};
