import { useEffect, useState } from "react";
import firebase from "../firebase/config";
import ContentProfile from "./ContentProfile";
import Profile from "./Profile";


export default function MainContent() {
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

      function renderProfiles(){
        return profileList?.map((profile, index) => {
            console.log(profile.name)
            return(
                <Profile name={profile.name} dev={profile.dev} local={profile.local} description={profile.description}/>
            )
        });
      }


    return (
        <>
            {profileList ? 
            <ContentProfile>
                {renderProfiles()}
            </ContentProfile>
                : 
            <h1>Não tem</h1>}
        </>
    )
}