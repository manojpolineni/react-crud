import React from 'react'
import '../pages/custom.css';
import moment from 'moment';



const FooterPage = () => {
    const today = new Date();
    const year = moment(today).format('YYYY');
    
    return (
    <section className='footer px-0'>
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
                <div className='d-flex justify-content-center py-3 px-0'>
                        <h6 className='text-center text-white my-0'>Copyright @ {year} Marcomm IT Solutions</h6>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterPage;
