import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AddCart, DeleteCart } from '../redux/actions/index';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const data = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    console.log("item", data);
    
    const HandleClose = (item) => {
        dispatch(DeleteCart(item));
    }

    const HandleIncrement = (item) => {
        console.log("item value", item);
        dispatch(AddCart(item.id));
        // console.log("addcart value", dispatch(AddCart));
    }
    
    const HandleDecrement = (item) => {
        dispatch(DeleteCart(item.id));
    }


    useEffect(() => {

    }, [data])

    const Cartitem = () => {
        return (
            <>
            {
                data.sort((a,b)=> a.name > b.name? 1:-1).map((item, index) => {
                return (
                    <div className='px-4 my-5 bg-light rounded-3' key={index}>
                        <div className='container py-4'>
                            <button className='btn-close float-end' arial-label="close" onClick={()=>HandleClose(item)}></button>
                            <div className='row justify-content-center'>
                                <div className='col-md-4'>
                                    <img src={item.image} alt={item.title} height={280} width={180} />
                                </div>
                                <div className='col-md-4'>
                                    <h3>{item.title}</h3>
                                    <h6>{item.description}</h6>
                                    <p className='lead fw-bold py-2'>{item.qty} X ${item.price} = ${item.qty * item.price}</p>
                                    <button className='btn btn-outline-dark me-4' onClick={() =>dispatch(DeleteCart(item.id))}><i className='fa fa-minus'></i> </button>
                                    <button className='btn btn-outline-dark me-4' onClick={()=> dispatch(AddCart(item.id))}><i className='fa fa-plus'></i> </button>
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

    const button = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <Link to='/checkout' className='btn btn-outline-dark px-4 py-2'>Proceed to Checkout</Link>
                </div>

            </div>
        )
    }
  return (
    <div>
          {data && data.length> 0 ? <Cartitem/> : <EmptyCart/> }
          {/* {data.length === 0 && button()} */}
    </div>
  )
}

export default CartPage;
