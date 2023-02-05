import React, { useEffect } from 'react'
import './Employee.css'
import { Link } from "react-router-dom"
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';
import { useState } from 'react';
import Loading from '../Loading';


const AddEmployee = () => {
    const [count,setCount] = useState();
    const [data,setData] = useState();
    const [img, setImg] = useState([]);
    const [loading, setLoading] = useState(false);

    const userURL = 'http://localhost:8000/'
    useEffect(() => {
        const fetchurl= async ()=>{
             setLoading(true);

            const res = await fetch(userURL,{
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });
            const data = await res.json();
            setCount(data && data.count);
            setData(data && data.user);
            console.log(data);
            // setData(data);
            console.log(data.count,"count");
            for(let i=0;i<data.count;i++){
                console.log(i);
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(data && data.user[i].image && data.user[i].image.data.data ))
                  );
                  setImg(img=>[...img,base64String]);   
            }
            setLoading(false);
        }
        fetchurl();
      },[userURL]);
      console.log(img);
  return (
    <>
        <NavBar/>
        <Sidebar />
        {
            !loading ? 
        
        <div className='addEmployee'>
           <div className='addButton'>
            <p className='count'>Total Employees : {count}</p>
            </div> 

        <div className='overallCard'>
            {
            data && data.map((user,i)=>(
                <div className=" card1div ">
                        <img class="card-img-top" src={`data:image/png;base64,${img[i]}`}  alt="Card image cap" />
                         <div className='mainCardContent'>
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{user.empId} <br /> {user.oEmail} </p>
                            <Link to="/EmployeeDetails" className="btn btn-primary " state={{ id: user._id }}>
                                        View
                            </Link>
                         </div>
                </div>
            ))}
        </div>

        </div> : <Loading />
}
    </>
  )
}

export default AddEmployee