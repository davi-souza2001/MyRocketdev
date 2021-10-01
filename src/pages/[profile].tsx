import { useRouter } from "next/router";

interface profileProps {
    
}

export default function profile(props: profileProps) {
    const router = useRouter();
    const profileSearch = router.query.profile;

    return (
        <div>
            <h1>{profileSearch}</h1>
        </div>
    )
}
