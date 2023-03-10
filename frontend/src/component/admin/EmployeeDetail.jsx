import React, { useEffect } from 'react'
import Sidebar from '../Sidebar';
import { useState } from 'react';
import './EmployeeDetail.css'
import AddTask from './AddTask';
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar';

const EmployeeDetail = () => {
  const location = useLocation()
  const id = location.state.id;
  const userURL = `http://localhost:8000/${id}`

  const [user, setUser] = useState();
  const [image, setImage] = useState();
  const [updateButton, setUpdateButton] = useState(false);

  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [bond, setBond] = useState();
  const [ctc, SetCtc] = useState();
  const [oEmail, setOEmail] = useState();

  // get user
  useEffect(() => {
    const fetchurl= async ()=>{
        const res = await fetch(userURL,{
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        });
        const data = await res.json();
        console.log(JSON.stringify(data));
        setUser(data);
        const base64String = btoa(
            String.fromCharCode(...new Uint8Array(data.image.data.data))
          );
          setImage(base64String);
    }
    fetchurl();
  },[userURL]);


  const editHandler = () => {
    setUpdateButton(true);
  }

  const saveHandler = async () => {
    const val ={
      email:email,
      address:address,
      contactNo:contact,
      ctc:ctc,
      bond:bond,
      oEmail:oEmail
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
    setUpdateButton(false);
    window.location.href='/EmployeeDetails'
  }
  
  return (
    <>
        <NavBar/>
        <Sidebar />
        <div className='EdetailsBg'>
        <div className='Edetails'>
          <div className='mainInfo'>
              <div className='photoDiv'> 
                  <img 
                      src={`data:image/png;base64,${image}`} 
                      alt="" 
                  /> 
              </div>

              <div className='mainInfoName'>
                  <h1>{user && user.name}</h1>
                  <h3>{user && user.designation}</h3>
              </div>
          </div>

          <div className='AllDetails'>

            <button type="button" className="btn btn-outline-dark" onClick={editHandler}>Edit Information</button>

            {
              updateButton === true ? 
              <div>
                  <div className='pDetails'>
                <table className="table pDetailsTable">
                  <th scope="col">Personal Details :</th>

                  <tbody>
                    <tr>
                      <th scope="row">Email id : </th>
                      <td> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> </td>
                    </tr>
                    <tr>
                      <th scope="row">Date of birth : </th>
                      <td>09-10-2001</td>
                    </tr>
                    <tr>
                      <th scope="row">Address : </th>
                      <td> <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> </td>
                    </tr>
                    <tr>
                      <th scope="row">Contact Number : </th>
                      <td> <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} /> </td>
                    </tr>
                    <tr>
                      <th scope="row">Aadhar Number : </th>
                      <td> {user && user.aadharNo} </td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <div className='pDetails'>
                <table className="table pDetailsTable">
                  <th scope="col">Professional Details :</th>

                  <tbody>
                    <tr>
                      <th scope="row">Joining Date : </th>
                      <td>12-12-2022</td>
                    </tr>
                    <tr>
                      <th scope="row">CTC : </th>
                      <td> <input type="text" value={ctc} onChange={(e) => SetCtc(e.target.value)} /></td>
                    </tr>
                    <tr>
                      <th scope="row">Bond Duration : </th>
                      <td> <input type="text" value={bond} onChange={(e) => setBond(e.target.value)} /></td>
                    </tr>
                    <tr>
                      <th scope="row">Registration  : </th>
                      <td>53365</td>
                    </tr>
                    <tr>
                      <th scope="row">Employee ID : </th>
                      <td>2023FB256</td>
                    </tr>
                    <tr>
                      <th scope="row">Office Email-id : </th>
                      <td> <input type="email" value={oEmail} onChange={(e) => setOEmail(e.target.value)} /> </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='pDetails'>
                <table className="table pDetailsTable">
                  <th scope="col">Bank Details :</th>

                  <tbody>
                    <tr>
                      <th scope="row">Account Number : </th>
                      <td> {user && user.bankDetails.accNo}</td>
                    </tr>
                    <tr>
                      <th scope="row">IFSC code : </th>
                      <td> {user && user.bankDetails.ifscCode} </td>
                    </tr>
                    <tr>
                      <th scope="row">Branch : </th>
                      <td> {user && user.bankDetails.branch} </td>
                    </tr>
                    <tr>
                      <th scope="row">Pin Code : </th>
                      <td>{user && user.bankDetails.pinCode} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <button className='btn btn-success' onClick={saveHandler}>Save</button>

              </div> 
              :
            <div>
              <div className='pDetails'>
                <table className="table pDetailsTable">
                  <th scope="col">Personal Details :</th>

                  <tbody>
                    <tr>
                      <th scope="row">Email id : </th>
                      <td>{user && user.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date of birth : </th>
                      <td>{user && user.dob}</td>
                    </tr>
                    <tr>
                      <th scope="row">Address : </th>
                      <td> {user && user.address} </td>
                    </tr>
                    <tr>
                      <th scope="row">Contact Number : </th>
                      <td> {user && user.contactNo} </td>
                    </tr>
                    <tr>
                      <th scope="row">Aadhar Number : </th>
                      <td> {user && user.aadharNo} </td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <div className='pDetails'>
                <table className="table pDetailsTable">
                  <th scope="col">Professional Details :</th>

                  <tbody>
                    <tr>
                      <th scope="row">Joining Date : </th>
                      <td>{user && user.joiningDate}</td>
                    </tr>
                    <tr>
                      <th scope="row">CTC : </th>
                      <td> {user && user.salary.ctc} </td>
                    </tr>
                    <tr>
                      <th scope="row">Bond Duration : </th>
                      <td> {user && user.bond} </td>
                    </tr>
                    <tr>
                      <th scope="row">Registration  : </th>
                      <td>{user && user.registrationNo}</td>
                    </tr>
                    <tr>
                      <th scope="row">Employee ID : </th>
                      <td>{user && user.empId}</td>
                    </tr>
                    <tr>
                      <th scope="row">Office Email-id : </th>
                      <td> {user && user.oEmail} </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='pDetails'>
                <table className="table pDetailsTable">
                  <th scope="col">Bank Details :</th>

                  <tbody>
                    <tr>
                      <th scope="row">Account Number : </th>
                      <td> {user && user.bankDetails.accNo}</td>
                    </tr>
                    <tr>
                      <th scope="row">IFSC code : </th>
                      <td> {user && user.bankDetails.ifscCode} </td>
                    </tr>
                    <tr>
                      <th scope="row">Branch : </th>
                      <td> {user && user.bankDetails.branch} </td>
                    </tr>
                    <tr>
                      <th scope="row">Pin Code : </th>
                      <td>{user && user.bankDetails.pinCode}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='pDetails'>
              {user ? <AddTask props={ {task:user.taskCompleted,id:user._id}} /> : <p>Loading...</p>}
              </div>
            </div>

          }

          </div>

        </div>
        </div>
    </>
  )
}

export default EmployeeDetail
