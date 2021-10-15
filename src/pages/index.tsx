import Topbar from "../components/Topbar";
import Image from "next/image";

import styles from "../styles/Main.module.css";

import CommunityOption from "../components/CommunityOption";

// Icons catched in "https://simpleicons.org/"

/* front-end svg's */
import reactImg from "../assets/img/front/react.svg";
import angularImg from "../assets/img/front/angularjs.svg";
import vueImg from "../assets/img/front/vuedotjs.svg";
import nextImg from "../assets/img/front/nextdotjs.svg";
import emberImg from "../assets/img/front/emberdotjs.svg";

/* back-end svg's */
import nodeImg from "../assets/img/back/nodedotjs.svg";
import mongoImg from "../assets/img/back/mongodb.svg";
import sqlImg from "../assets/img/back/mysql.svg";
import firebaseImg from "../assets/img/back/firebase.svg";
import csharpImg from "../assets/img/back/csharp.svg";
import javaImg from "../assets/img/back/java.svg";

/* mobile svg's */
import flutterImg from "../assets/img/mobile/flutter.svg";
import ionicImg from "../assets/img/mobile/ionic.svg";
import swiftImg from "../assets/img/mobile/swift.svg";

export default function Main() {
    return (
        <>
            <Topbar />
            <div className={styles.contentCommunity}>
                <h1>Comunidades</h1>
            </div>
            <div className={styles.contentCommunityOptions}>
                <h2>Front-End</h2>
                <div className={styles.frameworks}>
                    <CommunityOption image={reactImg} tec="React.Js" area="Front-End" routeCommunity="React"/>
                    <CommunityOption image={angularImg} tec="Angular.js" area="Front-End" routeCommunity="Angular"/>
                    <CommunityOption image={vueImg} tec="Vue.js" area="Front-End" routeCommunity="Vue"/>
                    <CommunityOption image={nextImg} tec="Next.js" area="Front-End" routeCommunity="Next"/>
                    <CommunityOption image={emberImg} tec="Ember" area="Front-End" routeCommunity="Ember"/>
                </div>
                <h2>Back-End</h2>
                <div className={styles.frameworks}>
                    <CommunityOption image={nodeImg} tec="Node.js" area="Back-End" routeCommunity="Node"/>
                    <CommunityOption image={mongoImg} tec="Mongo" area="Back-End" routeCommunity="Mongo"/>
                    <CommunityOption image={sqlImg} tec="Sql/MySql" area="Back-End" routeCommunity="Sql"/>
                    <CommunityOption image={firebaseImg} tec="Firebase" area="Back-End" routeCommunity="Firebase"/>
                    <CommunityOption image={csharpImg} tec="C#" area="Back-End" routeCommunity="CSharp"/>
                    <CommunityOption image={javaImg} tec="Java" area="Back-End" routeCommunity="Java"/>
                </div>
                <h2>Mobile</h2>
                <div className={styles.frameworks}>
                <CommunityOption image={reactImg} tec="React-Native" area="Mobile" routeCommunity="React-Native"/>
                <CommunityOption image={flutterImg} tec="Flutter" area="Mobile" routeCommunity="Flutter"/>
                <CommunityOption image={swiftImg} tec="Swift" area="Mobile" routeCommunity="Swift"/>
                <CommunityOption image={ionicImg} tec="Ionic" area="Mobile" routeCommunity="Ionic"/>
                </div>
            </div>
        </>
    )
}