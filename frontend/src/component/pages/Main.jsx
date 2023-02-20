import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import './Main.css'
import { useState } from 'react';
import axios from 'axios'
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faEdit, faUpload } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
    const [data,setData] = useState();
    const [images, setImages] = useState('Image/girl.jpg');
    const [edit, setEdit] = useState(false);
    const [email, setEmail] = useState(data && data.email);
    const [dob, setDob] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [aadhar, setAadhar] = useState();
    const [btnState,setBtnState] = useState(false);

    const u = 'http://localhost:8000'
    const user = JSON.parse(localStorage.getItem("EMSuser"));
    const userId = user.id;
    const userURL = `${u}/${userId}`; 
    const location = useLocation();

    if(user) {
        window.history.pushState(null, null, location.href);
        window.onpopstate = function(event) {
          window.history.go(1);
        };
    }

    useEffect(() => {
        const fetchurl= async ()=>{
            const res = await fetch(userURL,{
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });
            const data = await res.json();
            console.log(data);
            setData(data);
        }
        fetchurl();
      },[userURL,edit]);

    const imageHandler = (e) => {
            setImages(e.target.files[0]);
            setBtnState(true);
    }

    const submitForm=(e)=>{
        e.preventDefault();
        console.log(images);
        const formData = new FormData();
        formData.append("image", images);

        axios
            .post(`http://localhost:8000/upload/${userId}`, formData)
            .then((res) => {
            alert("File Upload Success");
            setBtnState(false);
            window.location.href='/home'
            })
            .catch((err) => console.log(err));
    }

    const EditHandler = () => {
        setEdit(true);
    }

    const emailHandler = (e) => {
         setEmail(e.target.value);
    }

    const dobHandler = (e) => {
        setDob(e.target.value);
    }

    const addressHandler = (e) => {
        setAddress(e.target.value);
    }

    const contactHandler = (e) => {
        setContact(e.target.value);
    }

    const aadharHandler = (e) => {
        setAadhar(e.target.value);
    }

    // update data
    const PersonalSubmitHandler = async () => {
        setEdit(false);
        const val ={
            email:email,
            dob:dob,
            aadharNo :aadhar,
            address:address,
            contactNo:contact
          }
          console.log(val);
          const res = await fetch(userURL,{
              method: 'PUT',
              headers: {
                  accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(val)
          });
          const data = await res.json();
          alert("Data Updated successfully");
          window.location.href='/home'
    }

  return (
    <>
    <Sidebar/>
    <NavBar/>
    <div className='mainBg'>
    <div className='main'>
        <div className='mainInfo'>
            <div className='photoDiv'> 
                <img 
                    src={`data:image/png;base64,${data && data.image.data}`} 
                    alt="" 
                /> 
            </div>

             <div className='mainInfoName'>
                <h1>{data && data.name}</h1>
                <h3>{data && data.designation}</h3>
                <form className='imageUploadForm'>
                    <label htmlFor="img"
                    className="mainButtonEdit"> <FontAwesomeIcon icon={faEdit}/> </label>
                    <input type="file"  id="img" 
                    onChange={imageHandler}
                    className="photoInput" />
                    {btnState && <button className="mainButtonEdit" type='submit' onClick={submitForm} > 
                        <FontAwesomeIcon icon={faUpload} /> </button>}
                </form>
                {
                    data && (data.docStatus=='none' || data.docStatus=='pending') ? 
                    <span title='Please submit your all documents to complete onboarding' className='onboarding' >Please complete your onboarding*</span>
                    :'' 
                }
                </div>

        </div>
        <div className='mainCard'>
            <div className='card1'>
            <div className='card '>
                <div className='cardHeading personal'> Personal Details : 
                    <button onClick={EditHandler}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button> 
                </div>

                <div className='cradElemet'>
                    { edit === true ? (
                    <div>
                        <div className='cardDetails'>
                            <div className='cardQ'>Email id</div> 
                            <div className='cardA'>: <input 
                                type='email' 
                                value = {email} 
                                onChange={emailHandler}
                            /> </div>
                        </div>

                        <div className='cardDetails'>
                            <div className='cardQ'>Date Of Birth</div> 
                            <div className='cardA'>:
                                <input type="date" value = {dob} onChange={dobHandler}/>
                            </div>
                        </div>
                        <div className='cardDetails'>
                            <div className='cardQ'>Address</div> 
                            <div className='cardA'>: 
                                 <input type="text" value = {address} onChange={addressHandler}/>
                            </div>
                        </div>
                        <div className='cardDetails'>
                            <div className='cardQ'>Contact Number</div> 
                            <div className='cardA'>: 
                              <input type="number" value = {contact} onChange={contactHandler}/>
                            </div>
                        </div>
                        <div className='cardDetails'>
                            <div className='cardQ'>Aadhar Number</div> 
                            <div className='cardA'>: 
                              <input type="number" value = {aadhar} onChange={aadharHandler}/>
                            </div>
                        </div>
                        <button
                                onClick = {PersonalSubmitHandler}
                            >Save</button>
                    </div>) : (
                        <div>
                            <div className='cardDetails'><div className='cardQ'>Email id</div> <div className='cardA'>: {data && data.email}</div></div>
                            <div className='cardDetails'><div className='cardQ'>Date Of Birth</div> <div className='cardA'>: {data && data.dob}</div></div>
                            <div className='cardDetails'><div className='cardQ'>Address</div> <div className='cardA'>: {data && data.address}</div></div>
                            <div className='cardDetails'><div className='cardQ'>Contact Number</div> <div className='cardA'>: {data && data.contactNo}</div></div>
                            <div className='cardDetails'><div className='cardQ'>Aadhar Number</div> <div className='cardA'>: {data && data.aadharNo} </div></div>
                        </div>
                    )}
                </div>
            </div>


            <div className='card '>
                <div className='cardHeading'>Professional Details : </div>
                <div className='cardBg'>
                    <div className='cradElemet'>
                        <div className='cardDetails'><div className='cardQ'>Joining Date</div> <div className='cardA'>: {data && data.joiningDate}</div></div>
                        <div className='cardDetails'><div className='cardQ'>Bond Duration</div> <div className='cardA'>: {data && data.bond}</div></div>
                        <div className='cardDetails'><div className='cardQ'>Registration Number</div> <div className='cardA'>: {data && data.registrationNo}</div></div>
                        <div className='cardDetails'><div className='cardQ'>Employee ID</div> <div className='cardA'>: {data && data.empId}</div></div>
                        <div className='cardDetails'><div className='cardQ'>Office Email iD</div> <div className='cardA'>: {data && data.oEmail}</div></div>
                    </div>
                </div>
            </div>
            </div>

            <div className='card1'>
            <div className='card '>
                <div className='cardHeading'>Bank Details : </div>
                <div className='cradElemet'>
                    <div className='cardDetails'><div className='cardQ'>Account Number</div> <div className='cardA'>: {data && data.bankDetails.accNo}</div></div>
                    <div className='cardDetails'><div className='cardQ'>IFSC Code</div> <div className='cardA'>: {data && data.bankDetails.ifscCode}</div></div>
                    <div className='cardDetails'><div className='cardQ'>Branch</div> <div className='cardA'>: {data && data.bankDetails.branch} </div></div>
                    <div className='cardDetails'><div className='cardQ'>Pin Code</div> <div className='cardA'>: {data && data.bankDetails.pinCode}</div></div>
                </div>
            </div>

            <div className='card '>
                <div className='cardHeading'>Projects : </div>
                <div className='cradElemet'>
                    {
                        data && data.taskCompleted.map((task)=>(
                            <div className='cardDetails' key={task._id}><div className='cardQ'>{task.task}</div></div>
                        ))
                    }
                </div>
            </div>
            </div>

        </div>
    </div>
    </div>
    </>)
}

export default Main