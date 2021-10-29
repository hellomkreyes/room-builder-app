import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, TextComponent, Anchor } from '../common/components/atoms'
import { Nav, Footer } from '../common/components/molecules'

const App = () => {
  return (
    <div className="App">
        <Nav />
        <TextComponent />
        <Button label="Click me please!" />
        <Footer />
    </div>
  );
}

export default App;
