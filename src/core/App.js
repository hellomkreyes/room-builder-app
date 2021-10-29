import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {
  Button, 
  TextComponent,
  ThumbnailButton,
  Anchor
} from '../common/components/atoms'
import { Nav, Footer } from '../common/components/molecules'

const App = () => {
  return (
    <div className="App">
        <Nav />
        <TextComponent />
        <Button label="Click me please!" />
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
        <Footer />
    </div>
  );
}

export default App;
