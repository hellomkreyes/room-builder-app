import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { 
  Anchor,
  Button, 
  TextComponent,
  Thumbnail
} from '../common/components/atoms'
import { Footer } from '../common/components/organisms'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Happy Room Designer (Endy Edition)</h1>
      </header>
        <TextComponent />
        <Button label="Click me please!" />
        <Anchor 
          href="https://endy.com" 
          text="I am an anchor" 
          img="http://placekitten.com/g/200/200"
          classes="width-100"
        />
        <Anchor 
          href="https://endy.com" 
          text="I'm a text anchor" 
          classes="text-gravy"
        />
        <Footer />
        <Thumbnail
          image="http://placekitten.com/g/60/60"
          alt="A thumbnail icon of a kitty."
        />
    </div>
  );
}

export default App;
