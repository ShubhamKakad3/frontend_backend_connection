import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => {
      setProducts(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })

  return (
    <>
      <h1>products {products.length }</h1>
      {
        products.map((product) =>
          <div key={product.id}>
            <h2>{product.name}</h2>
          </div>)
      }
    </>
  )
}

export default App
