import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import '../App.css';
import {  useDispatch } from 'react-redux';
import { AddCart, DeleteCart } from '../redux/actions';

const ProductInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [addtocart, setAddtoCart] = useState("Add to Cart");


    const addProduct = (product) => {
        if (addtocart === "Add to Cart") {
            setAddtoCart("Remove from Cart");
            dispatch(AddCart(product));
        }
        else {
            setAddtoCart("Add to Cart");
            dispatch(DeleteCart(product));
        }
    } 
        
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
                setProduct(res.data);
                setLoading(false);
            })
        }
        getProduct();
    }, [id]);

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} width={400} height={400} />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate} <i className='fa fa-star'></i> </p>
                    <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                    <p className='lear py-2'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(product)}>{addtocart}</button>
                    <Link to='/cart' className='btn btn-dark ms-2 px-3 py-2'> View Cart</Link>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className='container py-5'>
            <div><Link to="/carthome"><i className="fa-solid fa-arrow-left" /></Link></div>
            <div className='row py-4'>
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
      </div>
    </div>
  )
}

export default ProductInfo;
