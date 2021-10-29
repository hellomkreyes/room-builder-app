import styled from "styled-components"
import { ThumbnailButton, Button } from "../atoms"

const StyledToolbar = styled.div`
    border: 2px solid black;
    width: 900px;
    display: flex;
    justify-content: space-evenly;
    padding: 1rem 0;
`

export const Toolbar = () => {
    return (
        <StyledToolbar>
          <div>
            <ThumbnailButton
                onClick={() => console.log('I have been clicked')}
                image="http://placekitten.com/g/60/60"
                alt="A thumbnail icon of a kitty."
            />
            <p>Undo</p>
          </div>
          <div>
            <ThumbnailButton
                onClick={() => console.log('I have been clicked')}
                image="http://placekitten.com/g/60/60"
                alt="A thumbnail icon of a kitty."
            />
            <p>Redo</p>
          </div>
          <div>
            <ThumbnailButton
                onClick={() => console.log('I have been clicked')}
                image="http://placekitten.com/g/60/60"
                alt="A thumbnail icon of a kitty."
            />
            <p>Move</p>
          </div>
          <div>
            <ThumbnailButton
                onClick={() => console.log('I have been clicked')}
                image="http://placekitten.com/g/60/60"
                alt="A thumbnail icon of a kitty."
            />
            <p>Resize</p>
          </div>
          <Button label="Restart" />
          <Button label="Download" />
        </StyledToolbar>
    )
}