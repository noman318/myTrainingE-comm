import React from "react";
import {useParams} from 'react-router-dom'

export const ProductScreen = ({product}) => {
    const params = useParams()
    const {id} = params
  return (
  <div>
    <h4>{id}</h4>
  </div>
  );
};
