import { useRouter } from 'next/router'
import { ThankYou } from "../components/ThankYou";

function showratings() {
    const router = useRouter()
    return (
        <div className="mainContainer">
            <div className="container">
                <ThankYou rating={router.query.id ? router.query.id : ''} />
            </div>
        </div>
    );
}

export default showratings;
