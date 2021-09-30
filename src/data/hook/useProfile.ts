import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";

const useProfile = () => useContext(ProfileContext);

export default useProfile;