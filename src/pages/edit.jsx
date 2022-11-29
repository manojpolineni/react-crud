import React,{useEffect, useState, useRef} from 'react'
import '../pages/custom.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from "axios"


const Form = () => {
    const { register, handleSubmit,formState, formState: { errors,}, reset } = useForm();
    const { isSubmitting } = formState;
    const navigate=useNavigate();
    
    const onSubmit = (data) => {
        return new Promise(resolve => {
            setTimeout(() => {
                axios.post(
                   `https://63314104cff0e7bf70e8fdfb.mockapi.io/Developer`,data
                ).then(function (response) {
                    if (response.status === 200) {
                        console.log(response);
                    }
                    navigate('/');
                    reset();
                    resolve();
                })
                .catch((e) => {
                    if (e.response && e.response.data) {
                        console.log(e.response.data.error)
                    }
                })
            }, 3000);
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
                                    aria-invalid={errors.userName ? "true" : "false"}
                                    {...register("userName", {
                                        required: true,
                                    })} 
                                />
                                {errors.userName && errors.userName.type === "required" && (
                                    <span role="alert">User name is required.</span>
                                )}
                                <br />
                                <label htmlFor="Email"><strong> Enter your Email </strong><span className='reqField'>*</span></label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name='email'
                                    {...register('email',{required:true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                                />
                                {errors.email && errors.email.type === "required" && (
                                    <span className="errorMsg">Email is required.</span>
                                )}
                                  
                                {errors.email && errors.email.type === "pattern" && (
                                    <span className="errorMsg">it should be a valid email address</span>
                                )}
                                <br />
                                {/* <label htmlFor="Email"><strong> Enter your Age </strong><span className='reqField'>*</span></label>
                                <input
                                    className='form-control'
                                    type="number"
                                    name='age'
                                    {...register("age", { required: true })}
                                />
                                {errors.age && errors.age.type === "required" && (
                                    <span>This is a required Field.</span>
                                )}
                               <br />
                                <label htmlFor="Email"><strong> Enter your City </strong><span className='reqField'>*</span></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name='city'
                                    {...register("city",{required:true})}
                                    />
                                {errors.city&& errors.city.type === "required" && (
                                    <span>This is a required Field.</span>
                                )} */}
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

export default Form;
