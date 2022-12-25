import React,{ useEffect, useReducer} from "react";
import { Col, Row } from "react-bootstrap";
import axios from 'axios'
import logger from 'use-reducer-logger'
import Product from "../components/Product";

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
                <Row>
                {products.map(product =>(
                    <Col  key={product._id} sm={6} md={4} lg={3} className='mb-3'>
                  <Product product={product} />
                  </Col>
                ))}
                </Row>
            )
          }
          </div>
</div>);
};
