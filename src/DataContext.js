import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const DataContext = createContext();

function DataProvider({ children }) {
    const firebaseConfig = {
        apiKey: "AIzaSyD6oZv0F_sd9EaTfbwd6BKy-6FsMK-RpYc",
        authDomain: "perfume-website-5b891.firebaseapp.com",
        databaseURL: "https://perfume-website-5b891-default-rtdb.firebaseio.com",
        projectId: "perfume-website-5b891",
        storageBucket: "perfume-website-5b891.appspot.com",
        messagingSenderId: "593469834190",
        appId: "1:593469834190:web:f0317fa143def32fbc219f",
        measurementId: "G-NJCXM2XH7G",
    };
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const user_ref = ref(db);

    get(child(user_ref, "sliders"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });

    return <DataContext.Provider value={user_ref}>{children}</DataContext.Provider>;
}

export { DataContext, DataProvider };
