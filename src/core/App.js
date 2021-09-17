import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, TextComponent, Anchor } from '../common/components/atoms'
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
    </div>
  );
}

export default App;
