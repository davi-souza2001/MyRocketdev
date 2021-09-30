import useProfile from "../data/hook/useProfile";
import ContentProfile from "./ContentProfile";
import Profile from "./Profile";


export default function MainContent() {

    const { profileList } = useProfile();

    function renderProfiles() {
        return profileList?.map((profile, index) => {
            return (
                <div key={index}>
                    <Profile name={profile.name} dev={profile.dev} local={profile.local} description={profile.description} />
                </div>
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