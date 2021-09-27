import Leftbar from "../components/Leftbar";
import MainContent from "../components/MainContent";

interface MainProps {
    
}

export default function Main(props: MainProps){
    return (
        <div className="mainContent">
            <Leftbar/>
            <MainContent/>
        </div>
    )
}