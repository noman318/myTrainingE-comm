import express from 'express';
import data from './data.js';

const app = express();
// test
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id',(req,res)=>{
  const productId = req.params.id
  console.log('productId :>> ', productId);
  const product = data.products.find((findProduct)=> findProduct._id === productId)
  console.log("product", product);
  if(product){
    res?.send(product)
    console.log('product :>> ', product);
  }
  else{
    res.sendStatus(404).send({MessageChannel:'not found'})
  }
  
})

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});