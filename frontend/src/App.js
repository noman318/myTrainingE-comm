import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { ProductScreen } from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <>
      <Router>
      <Header />
    <main>
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />}  />
          <Route path='/products/:id' element={<ProductScreen/>}  />
        </Routes>
        </Container>
      </main>
        </Router>
      <Footer/>
    </>
  );
}

export default App;
