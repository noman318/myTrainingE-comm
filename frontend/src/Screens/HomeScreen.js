import React,{ useEffect, useReducer} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import logger from 'use-reducer-logger'

const reducer =(state,action)=>{
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {...state,loading:true}
        case 'FETCH_SUCCESS':
            return {...state,products:action.payload,loading:false}
        case 'FETCH_FAIL':
            return {...state,loading:false, error: action.payload}
        default:
            return state
    }
}


export const HomeScreen = () => {

    const [{loading, error, products},dispatch] = useReducer(logger(reducer),{
        products:[],
        loading:true,
        error:'',
    })

    // const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        const apiURL = 'http://localhost:5000'
        const fetchData = async()=>{
            dispatch({type:'FETCH_REQUEST'});
            try {
                const result = await axios.get(`${apiURL}/api/products`)
                dispatch({type:'FETCH_SUCCESS',payload:result.data})
                // setProducts(result.data)
            } catch (err) {
                dispatch({type:'FETCH_FAIL',payload: err.message})
            }

        }
        fetchData()
    },[])
    

  return (
  <div>
        <h2>Featured products</h2>
          <div className='products'>
          {
            loading?<div>loading...</div>:error?<div>{error}</div>:(
                products.map(product =>(
                  <div className='product' key={product._id}>
                    <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt={product.name} />
                    </Link>
                    <div className='product_info'>
                    <Link to={`/product/${product._id}`}>
                    <p>{product.name}</p>
                    </Link>
                    <p><strong>Rs. {product.price}</strong></p>
                    <button>Add to Cart</button>
                    </div>
                    
                  </div>
                ))
            )
          }
          </div>
</div>);
};
