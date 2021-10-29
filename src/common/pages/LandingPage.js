import {
    Button, 
    TextComponent,
    ThumbnailButton
  } from '../components/atoms'
import { Link } from "react-router-dom"

export const LandingPage = () => {
    return (
       <>
        <TextComponent />
        <Link to="room-builder">
            <Button label="Start Designing" />
        </Link>
        <div>
          <ThumbnailButton
            onClick={() => console.log('I have been clicked')}
            image="http://placekitten.com/g/60/60"
            alt="A thumbnail icon of a kitty."
          />
          <ThumbnailButton
            onClick={() => console.log('I have been clicked 2')}
            image="http://placekitten.com/g/60/60"
            alt="A thumbnail icon of a kitty."
          />
          <ThumbnailButton
            onClick={() => console.log('I have been clicked 3')}
            image="http://placekitten.com/g/60/60"
            alt="A thumbnail icon of a kitty."
          />
        </div>
       </>
    )
}