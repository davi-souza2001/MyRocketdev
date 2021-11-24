import route from "next/router";
import useProfile from "../data/hook/useProfile";
import ContentProfile from "./ContentProfile";
import Profile from "./Profile";
import Austroone from "../assets/img/austroone.jpg";


export default function ContentProfiles() {

    const { profileList } = useProfile();

    function renderProfiles() {
        return profileList?.map((profile, index) => {
            return (
                <div key={index}>
                    <Profile name={profile.name || Austroone} image={profile.image} dev={profile.dev} local={profile.local} description={profile.description} link={() => route.push(`/${profile.userName}`)}/>
                </div>
            )
        });
    }
// Apenas renderiza os perfis pesquisados
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