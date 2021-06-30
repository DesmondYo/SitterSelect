import { useEffect, useState } from "react";
import Auth from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';

/**
 * Grabs linked user object from uid
 * 
 * @returns user data
 */
export function useCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(onFetchUser, []);

    function onFetchUser() {
        Firestore().collection('users')
        .where('user_id', '==', Auth().currentUser.uid)
        .onSnapshot(snapshot => {
            // [Documents] -> Document
            const userDoc = snapshot.docs[0];
            const userData = userDoc.data();

            // Returns the data associated with a user
            setUser(userData);
        }) 
    }

    return user;
}