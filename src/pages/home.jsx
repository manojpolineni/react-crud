import React,{useState, useEffect} from 'react';
import axios from "axios"
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';


const HomePage = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        setLoading(true)
       await axios.get(`https://63314104cff0e7bf70e8fdfb.mockapi.io/Developer`)
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        loadData();
    }, []);
    const onDelete =async (id) => { 
       await axios.delete(`https://63314104cff0e7bf70e8fdfb.mockapi.io/Developer/${id}`)
            .then(response => {
                loadData();
            })
            .catch(error => {
                console.log(error);
            })
    }
    

    const Loading = () => {
    return (
      <>
        <div className='col-lg-12 col-md-12 col-sm-12'>
            <Skeleton /><Skeleton /><Skeleton /> <Skeleton /> <Skeleton /> <Skeleton /> <Skeleton />
        </div>
      </>
    )
  }

    const UserData = () => {
        return (
            <table className="table table-success table-striped">
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
                        <Loading/>
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
                            {loading ? <Loading/>  : <UserData /> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;