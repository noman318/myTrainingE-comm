import React,{useEffect, useReducer} from "react";
// import { Container } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import axios from "axios";


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductScreen = () => {
    const params = useParams()
    const {id} = params
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
      product: [],
      loading: true,
      error: '',
    });
    // const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' });
        try {
          const result = await axios.get(`/api/products/${id}`);
          console.log("result", result);   
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: err.message });
        }
  
        // setProducts(result.data);
      };
      fetchData();
    }, [id]);
  return loading ?(<div>loading ...</div>):error?(<div>{error}</div>):(
    <div>
      {product.name}
    </div>
  )
};
