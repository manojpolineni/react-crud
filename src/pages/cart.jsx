import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AddCart, DeleteCart, IncreaseCart, DecreaseCart, ClearCart } from '../redux/actions/index';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";


const CartPage = () => {
    const data = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    
    const HandleClose = (item) => {
        dispatch(DeleteCart(item));
    }

    const HandleIncrement = (item) => {
        dispatch(IncreaseCart(item));
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
    }
    
    const HandleDecrement = (item) => {
        dispatch(DecreaseCart(item));
    }

    useEffect(() => {

    }, [data])

    const Cartitem = () => {
        return (
            <>
            {
                data.sort((a, b) => a.name > b.name ? 1 : -1).map((item, index) => {
                return (
                    <div className='px-4 my-5 bg-light rounded-3' key={index}>
                        <div className='container py-4'>
                            <button className='btn-close float-end' arial-label="close" onClick={()=>HandleClose(item)}></button>
                            <div className='row justify-content-between'>
                                <div className='col-md-6 text-center'>
                                    <img src={item.image} alt={item.title} height={280} width="auto" />
                                </div>
                                <div className='col-md-6'>
                                    <h3>{item.title}</h3>
                                    <h6>{item.description}</h6>
                                    <p className='lead fw-bold py-2'>{item.qty} X ${item.price} = ${item.qty * item.price}</p>
                                    <button className='btn btn-outline-dark me-4' onClick={() => HandleDecrement(item)}>
                                        <i className='fa fa-minus'></i>
                                    </button>
                                    <button className='btn btn-outline-dark me-4' onClick={() => HandleIncrement(item)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
            } 
            </>
                
        )
    }
    const EmptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3 className='text-center'>Your Cart is Empty!</h3>
                    </div>
                </div>
            </div>
        )
    }

    const Buttonss = () => {
        return (
            <div className='container rounded-3 pb-5'>
                <div className='row d-flex'>
                    <div className='d-flex justify-content-center'>
                        <Link to='/checkout' className='btn btn-outline-dark px-4 py-2 text-center color_black'>Proceed to Checkout</Link>
                        <button  className='btn btn-danger px-4 py-2 text-center color_black mx-10' onClick={()=>dispatch(ClearCart)}>Clear Cart</button>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <h4 className='color_red'>total price :{data.reduce((total, item)=>total+
                            parseFloat((item.price*item.qty).toFixed(2)),0)}</h4>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>
          {data && data.length> 0 ? <Cartitem/> : <EmptyCart/> }
          {data && data.length > 0 ? <Buttonss/> : null}
    </div>
  )
}

export default CartPage;
