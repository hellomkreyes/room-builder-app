import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, TextComponent } from '../common/components/atoms'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Happy Room Designer (Endy Edition)</h1>
      </header>
        <TextComponent />
        <Button label="Click me please!" />
    </div>
  );
}

export default App;
