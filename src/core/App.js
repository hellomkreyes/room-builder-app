import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, TextComponent, Anchor } from '../common/components/atoms'
import { Header } from '../common/components/molecules'

const App = () => {
  return (
    <div className="App">
        <Header />
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
    </div>
  );
}

export default App;
