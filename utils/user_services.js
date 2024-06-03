// src/utils/user_services.js
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../src/firebase"; 

const user = {
    async isUserSubmitted(userName) {
        try {
            const resultRef = collection(db, "results");
            const q = query(resultRef, where("userName", "==", userName));
            const queryResult = await getDocs(q);

            queryResult.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });

            return !queryResult.empty;
        } catch (error) {
            console.log(error);
            return false;  // Added return false in case of error
        }
    }
};

export default user;
