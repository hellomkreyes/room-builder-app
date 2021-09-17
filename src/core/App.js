import './App.css';
import Header from '../common/components/atoms/Header'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
