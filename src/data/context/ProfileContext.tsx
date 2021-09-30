import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";

interface AuthContextProps {
    profileList?: any;
}

const AppContext = createContext<AuthContextProps>({});

export function AppProvider(props){

    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        const profRef = firebase.database().ref("Profiles");
        profRef.on('value', (profile) => {
          const profiles = profile.val();
          const profilesList = [];
          for (let id in profiles) {
            profilesList.push({ id, ...profiles[id] });
          }
          setProfileList(profilesList);
        })
      }, []);

    return(
        <AppContext.Provider value={{profileList}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;