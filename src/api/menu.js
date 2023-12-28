import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenus = (userId, updatedMenu) => {
  const docRef = doc(db, "users", userId);

  const data = {
    username: userId,
    menu: updatedMenu,
  };

  setDoc(docRef, data);
};
