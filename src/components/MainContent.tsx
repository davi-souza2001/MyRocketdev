import { useEffect, useState } from "react";
import firebase from "../firebase/config";

import styles from "../styles/MainContent.module.css";
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

      profileList?.map((profile, index) => {
          console.log(profile.name);
      })

    return (
        <div className={styles.contentProfiles}>
            <Profile name="Davi" dev="Full-stack" description="Ola sou front e back" />
        </div>
    )
}