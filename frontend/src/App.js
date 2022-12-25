import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { HomeScreen } from './Screens/HomeScreen';
import { ProductScreen } from './Screens/ProductScreen';

function App() {
  return (
    <>
      <Router>
      <Header />
    <main>
        <Routes>
          <Route path='/' element={<HomeScreen />}  />
          <Route path='/product/:id' element={<ProductScreen/>}  />
        </Routes>
      </main>
        </Router>
      <Footer/>
    </>
  );
}

export default App;
