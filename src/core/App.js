import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, Header } from '../common/components/atoms'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Button label="Click me please!" />
    </div>
  );
}

export default App;
