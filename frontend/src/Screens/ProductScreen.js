import React from "react";
import { Container } from "react-bootstrap";
import {useParams} from 'react-router-dom'

export const ProductScreen = ({product}) => {
    const params = useParams()
    const {id} = params
  return (
    <Container>
        <div>
            <h4>{id}</h4>
        </div>
    </Container>
  );
};
