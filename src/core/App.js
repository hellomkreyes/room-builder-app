import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Nav, Footer } from '../common/components/molecules'
import { LandingPage, RoomBuilder  } from '../common/pages';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={LandingPage} />
        <Route path="/room-builder" component={RoomBuilder} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
