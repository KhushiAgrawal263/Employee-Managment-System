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
    let image=[];

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
            console.log(data.count,"count");
            setLoading(false);
            for(let i=0;i<data.count;i++){
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(data && data.user[i].image.data.data ))
                  );
                  image.push(base64String);
                setImg(img=>[...img,base64String]);   
            }
        }
        fetchurl();
      },[userURL]);

  return (
    <>
        <NavBar/>
        <Sidebar />
        {
            !loading ? 
        
        <div className='addEmployee'>
           <div className='employeeBG'>
                <div className='addButton'>
                    <p className='count'>People</p>
                    <p className='countNum'> {count}</p>
                </div> 

        <div className='overallCard'>
            {
            data && data.map((user,i)=>(
                <div className=" card1div ">
                        <img class="card-img-top" src={`data:image/png;base64,${img[i]}`}  alt="Card image cap" />
                         <div className='mainCardContent'>
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{user.empId} <br /> {user.oEmail} </p>
                            <Link to="/EmployeeDetails" className=" employeeButton" state={{ id: user._id }}>
                                        View
                            </Link>
                         </div>
                </div>
            ))}
        </div>
           </div>

        </div> : <Loading />
}
    </>
  )
}

export default AddEmployee