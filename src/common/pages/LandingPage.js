import { Button, TextComponent } from '../components/atoms'
import { Link } from "react-router-dom"

export const LandingPage = () => {
    return (
       <>
        <TextComponent />
        <Link to="room-builder">
            <Button label="Start Designing" />
        </Link>
       </>
    )
}