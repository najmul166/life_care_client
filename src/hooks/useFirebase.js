import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user,setUsers] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth,googleprovider)
        .then(result =>{
            setUsers(result.user);
        })
        .finally(() => setIsLoading(false));

    }
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUsers(user);
            }
            else{
                setUsers({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(() => setIsLoading(false));
    }
    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;