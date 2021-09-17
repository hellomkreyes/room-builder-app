import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from '../common/components/atoms'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Happy Room Designer (Endy Edition)</h1>
        <Button label="Click me please!" />
      </header>
    </div>
  );
}

export default App;
