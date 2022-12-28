import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { Button, Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import SearchFilter from 'react-filter-search';


const CartHome = () => {

  const [ data, setData ] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const getProducs = async () => {
      setLoading(true);
      await axios.get(`https://fakestoreapi.com/products`, { cancelToken: cancelToken.Token })
      .then((res) => {
        setData(res.data);
        setFilter(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("canceled!");
        }
        else {
          // todo Errors
        }
        
      })
      return () => {
        cancelToken.cancel();
      }
    }
    getProducs();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350}/>
        </div>
        <div className='col-md-3'>
          <Skeleton height={350}/>
        </div>
        <div className='col-md-3'>
          <Skeleton height={350}/>
        </div>
        <div className='col-md-3'>
          <Skeleton height={350}/>
        </div>
      </>
    )
  }

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return(
      <>
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <button className='btn btn-outline-dark me-2' onClick={()=> setFilter(data)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct("men's clothing")}>Men's Clothing</button>
          <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct("women's clothing")}>Women's Clothing</button>
          <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct("jewelery")}>Jewelery</button>
          <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((product, index) => {
          return (
              <div className='col-md-3 mb-4' key={index}>
                <Card>
                  <Card.Img variant="top" src={product.image} height={250} className='p-3'/>
                  <Card.Body>
                    <Card.Title className='mb-0'>{product.title.substring(0, 12)}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Link to={`/productinfo/${product.id}`} className='btn btn-outline-dark'>Buy Now</Link>
                  </Card.Body>
                </Card>
              </div>
          )
        })}
      </>
    )
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 md-5'>
          <h2 className='display-6 fw-bolder  text-center'>Latest Products</h2>
        </div>
      </div>
      <div className='row justify-content-center'>
        {loading ? <Loading/> : <ShowProducts/> }
      </div>
    </div>
  )
}
export default CartHome;
