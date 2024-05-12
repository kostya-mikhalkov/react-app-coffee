// App.js
import {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoffeeHouse from './components/coffee-house/js/coffeeHouse';
import OurCoffee from './components/our-coffee/js/ourCoffee';
import Pleasure from './components/pleasure/js/pleasure';

class App extends Component {
 render() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<CoffeeHouse />} />
        <Route path="/coffee-house" element={<CoffeeHouse />} />
        <Route path="/our-coffee" element={<OurCoffee />} />
        <Route path="/for-your-pleasure" element={<Pleasure />} />
      </Routes>
    </Router>
  )
 }
}

export default App;



