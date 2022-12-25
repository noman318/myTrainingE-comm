import './App.css';
import Footer from './components/Footer';
// import {Container} from 'react-bootstrap'
import Header from './components/Header';
import products from './products';
// import { HomeScreen } from './Screens/HomeScreen';

function App() {
  return (
    <>
    <main>
      <Header />
        {/* <Container> */}
          <h2>Featured products</h2>
          <div className='products'>
          {
            products.map(product =>(
              <div className='product' key={product._id}>
                <a href={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} />
                </a>
                <div className='product_info'>
                <a href={`/product/${product._id}`}>
                <p>{product.name}</p>
                </a>
                <p><strong>Rs. {product.price}</strong></p>
                <button>Add to Cart</button>
                </div>
                
              </div>
            ))
          }
          </div>
        {/* </Container> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
