import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/custom.css';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom'


const Update = (props) => {
    const {  handleSubmit,formState, formState: {errors,} } = useForm();
    const { isSubmitting } = formState;
    // const location = useLocation();
    // const { from } = location.state.item;
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [updateUser, setUpdateUser] = useState({
        name: '',
        email: '',
        age: '',
        city:''
    });


    useEffect(() => {
        axios.get(`https://63314104cff0e7bf70e8fdfb.mockapi.io/Developer/${id}`)
            .then(res => {
                setUpdateUser(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id]);

    const handleData = (e) => {
		e.preventDefault();
		 const { name, value } = e.target;
		setUpdateUser(() => {
			return {
				...updateUser,
				[name]: value,
			};
		});
	}
    const onSubmit = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                axios.put(
                   `https://63314104cff0e7bf70e8fdfb.mockapi.io/Developer/${id}`, updateUser
                ).then(function (response) {
                    if (response.status === 200) {
                        setUpdateUser(response);
                    }
                    resolve();
                    navigate('/');
                })
                .catch((e) => {
                    if (e.response && e.response.updateUser) {
                        console.log(e.response.updateUser.error)
                    }
                })
            }, 1000);
        });
    }
    
    return (
        <div style={{"backgroundColor":"#f1edec"}}>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-2 col-lg-2 col-xl-2 col-sm-12'></div>
                    <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
                        <div className='row'>
                            <form onSubmit={handleSubmit(onSubmit)} disabled={isSubmitting}>
                                <div className='form-group questionBox'>
                                    <label htmlFor="Name"><strong>Name </strong><span className='reqField'>*</span></label>
                                    <input
                                        className='form-control'
                                        name='userName'
                                        type="text"
                                        required
                                        value={updateUser.userName}
                                        onChange={(e)=>handleData(e)}
                                    />
                                    <br />
                                    <label htmlFor="Email"><strong> Enter your Email </strong><span className='reqField'>*</span></label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="email"
                                        required
                                        value={updateUser.email}
                                        onChange={(e)=>handleData(e)}
                                    />
                                    <br />
                                    <label htmlFor="Email"><strong> Enter your Age </strong><span className='reqField'>*</span></label>
                                    <input
                                        className='form-control'
                                        type="number"
                                        name='age'
                                        value={updateUser.age}
                                        required
                                        onChange={(e)=>handleData(e)}
                                    />
                                <br />
                                    <label htmlFor="Email"><strong> Enter your City </strong><span className='reqField'>*</span></label>
                                    <input
                                        className='form-control'
                                        type="text"
                                        name='city'
                                        value={updateUser.city}
                                        onChange={(e)=>handleData(e)}
                                        />
                                </div>
                                <div className='form-group'>
                                    <button disabled={isSubmitting} className="btn btn-success mr-1">
                                        {isSubmitting && isSubmitting? <span className="spinner-border spinner-border-sm mr-1"></span>: "Submit"}
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 col-sm-12'></div>
                </div>
            </div>
        </div>
    )
}
export default Update;