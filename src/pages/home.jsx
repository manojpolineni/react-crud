import React,{useState, useEffect} from 'react';
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


const HomePage = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const loadData =async () => {
       await axios.get(`https://63314104cff0e7bf70e8fdfb.mockapi.io/Developer`)
        .then(response => {
            setData(response.data);
            setLoading(true);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const onDelete =async (id) => { 
       await axios.delete(`https://63314104cff0e7bf70e8fdfb.mockapi.io/Developer/${id}`)
            .then(response => {
                loadData();
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    useEffect(() => {
        loadData();
    }, []);

    const UserData = () => {
        return (
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { data && data.length > 0 ? data.sort((a,b)=> a.name > b.name? 1:-1).map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.userName}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>

                            <td ><button className="btn btn-success color-white"><Link to={`/update/${item.id}`}>Update</Link></button></td>
                            <td ><button className='btn btn-danger' onClick={()=>onDelete(item.id) }>Delete</button></td>
                        </tr>
                    )) :  
                        <div className="balls">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        // <Spinner animation="grow" />
                    }
                </tbody>
        </table>)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='d-flex justify-content-center py-5'>
                            {loading ? <UserData /> :
                                // <Spinner animation="grow" />
                                <div class="balls">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;