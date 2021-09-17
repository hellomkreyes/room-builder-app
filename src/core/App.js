import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, TextComponent, Anchor } from '../common/components/atoms'
import { Header } from '../common/components/molecules'
import { Footer } from '../common/components/organisms'

const App = () => {
  return (
    <div className="App">
        <Header />
        <TextComponent />
        <Button label="Click me please!" />
        <Footer />
    </div>
  );
}

export default App;