import React, { useRef } from 'react'
import './EmployeeAdd.css'
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';
import { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com'
//validation


const EmployeeAdd = () => {
  const [val,setVal] = useState({
    name:'',
    email:'',
    salary:{
      ctc:0,
      basic:0,
      hra:0,
      travel:0,special:0,pf:0,gross:0,cut:0,inHand:0
    }
  });
  const [user,setUser] = useState();
  const [btn,setBtn] = useState(false);
  const [btnState,setBtnState] = useState(false);
  const [images, setImages] = useState();
  const [id, setId] = useState();

  const [name, setName] = useState();
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState();
  const [passError, setPassError] = useState(false);
  const [dob, setDob] = useState();
  const[dobError, setDobError] = useState(false)
  const[address, setAddress] = useState();
  const[addressError, setAddressError] = useState(false);
  const[contact, setContact] = useState();
  const[contactError, setContactError] = useState(false);
  const[aadhar, setAadhar] = useState();
  const[aadharError, setAadharError] = useState(false);
  const[role, setRole] = useState();
  const[RoleError, setRoleError] = useState(false);
  const[designation, setDesignation] = useState();
  const[DesignationError, setDesignationError] = useState(false);
  const[jDate, setJDate] = useState();
  const[JDateError, setJDateError] = useState(false);
  const[ctc, setCtc] = useState();
  const[CtcError, setCtcError] = useState(false);
  const[bond, setBond] = useState();
  const[BondError, setBondError] = useState(false);
  const[oEmail, setOEmail] = useState();
  const[OEmailError, setOEmailError] = useState(false);
  const[ANum, setANum] = useState();
  const[ANumError, setANumError] = useState(false);
  const[Ifsc, setIfsc] = useState();
  const[IfscError, setIfscError] = useState(false);
  const[Branch, setBranch] = useState();
  const[BranchError, setBranchError] = useState(false);
  const[Pin, setPin] = useState();
  const[PinError, setPinError] = useState(false);
  const form = useRef();




  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  const cotactRegex = /^\d{10}$/;
  const aadharRegex = /^\d{12}$/;
  const accountRegex = /^[0-9]{9,18}$/;
  const iRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  const pinRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;

  const handleABCD = (e) => {
    console.log('kuhdciugsbcuobsol');
    console.log(e.target.name);
    const eventValue = e.target.value;

    switch (e.target.name) {
      case 'name' : 
        if(eventValue.length < 3){
           setNameError(true);
         }else {setNameError(false)}
         setName(eventValue)
         break;
      case 'email' :
        if(!eventValue.match(emailRegex)){
          setEmailError(true)
        }else {setEmailError(false)}
        setEmail(eventValue)
        break;
      case 'password' :
        if(!eventValue.match(passwordRegex)){
          setPassError(true)
        }else {setPassError(false)}
        setPassword(eventValue)
        break;
      case 'dob' :
        if(eventValue.length < 10){
          setDobError(true);
        }else {setDobError(false)}
        setDob(eventValue)
        break;
      case 'contactNo' :
        if(!eventValue.match(cotactRegex)){
          setContactError(true);
        }else {setContactError(false)}
        setContact(eventValue)
        break;
      case 'aadharNo' :
        if(!eventValue.match(aadharRegex)){
          setAadharError(true);
        }else {setAadharError(false)}
        setAadhar(eventValue)
        break;
      case 'address' :
        if(eventValue.length < 5){
          setAddressError(true);
        }else {setAddressError(false)}
        setAddress(eventValue)
        break;
      case 'designation' :
        if(eventValue.length < 5){
          setDesignationError(true);
        }else {setDesignationError(false)}
        setDesignation(eventValue)
        break;
      case 'joiningDate' :
        if(eventValue.length < 10){
          setJDateError(true);
        }else {setJDateError(false)}
        setJDate(eventValue)
        break;
      case 'ctc' :
        if(eventValue.length < 5){
          setCtcError(true);
        }else {setCtcError(false)}
        setCtc(eventValue)
        break;
      case 'bond' :
        if(eventValue.length > 2){
          setBondError(true);
        }else {setBondError(false)}
        setBond(eventValue)
        break;
      case 'oEmail' :
        if(!eventValue.match(emailRegex)){
          setOEmailError(true);
        }else {setOEmailError(false)}
        setOEmail(eventValue)
        break;
      case 'accNo' :
        if(!eventValue.match(accountRegex)){
          setANumError(true);
        }else {setANumError(false)}
        setANum(eventValue)
        break;
      case 'ifscCode' :
        if(!eventValue.match(iRegex)){
          setIfscError(true);
        }else {setIfscError(false)}
        setIfsc(eventValue)
        break;
      case 'branch' :
        if(eventValue.length < 3){
          setBranchError(true);
        }else {setBranchError(false)}
        setBranch(eventValue)
        break;
      case 'pinCode' :
        if(!eventValue.match(pinRegex)){
          setPinError(true);
        }else {setPinError(false)}
        setPin(eventValue)
        break;
      default :
           break;
    }
  }

  const handleSalary = (e)=>{
    const value = e.target.value;
    const bas = Math.round(value/24);
    const hra = Math.round(bas/2);
    const gross = hra+bas+3000+2700+1800;
    const cut = Math.round(value/100);
    const inHand= gross-cut
    setVal({...val,salary:{
      [e.target.name]: value,
      basic:bas,
      hra:hra,
      travel:3000,
      special:2700,
      pf:1800,
      gross:gross,
      cut: cut,
      inHand:inHand
    }})
    handleABCD(e);
  }

  const handleAccount = (e)=>{
    setVal({...val,bankDetails:{
      ...val.bankDetails,
      [e.target.name] : e.target.value
    }})
    handleABCD(e)
  }

  const handleChanges = (e) => {
    console.log(e.target.name,e.target.value);
    setVal({ ...val, [e.target.name]: e.target.value });
    handleABCD(e)
  };

  const submitHandler=async (e)=>{
    e.preventDefault();
    console.log(val);
    const res = await fetch('http://localhost:8000/register',{
      method: 'POST',
      headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(val)
    });
    const data = await res.json();
    console.log(data);
    setUser(data)
    setBtn(true);
    setId(data._id)
    }

  // get image
  const imageHandler = (e) => {
    console.log(e.target.files[0]);
    setImages(e.target.files[0]);
    setBtnState(true);
  }

  // upload image
  const submitForm=async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", images);

    axios
        .post(`http://localhost:8000/upload/${id}`, formData)
        .then((res) => {
        alert("File Upload success");
        setBtnState(false);
        // window.location.href='/home'
        })
        .catch((err) => console.log(err));

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) {dd='0'+dd;} 
        if(mm<10) {mm='0'+mm;} 
        const date = [dd, mm, yyyy].join('-');

        // Generate Notifications
        const notifi = {
          type:"New employee",
          message:`Say hey! To the new employee, ${user.name}`,
          date:date,
          role:"user",
          status:"unseen"
      }
      console.log(notifi);

      // update all users notifications
      const generateNotifi = await fetch(`http://localhost:8000/user/oneuser/addnotifi/${user._id}`,{
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(notifi)
        });
        const Notifi = await generateNotifi.json();
        console.log(Notifi);

        if(Notifi){
          let template ={
            name:user.name,
            email:user.email,
          }
          emailjs.send('service_io91ds2', 'template_0g1pg9a', template, '6qGUvnhs40iNBMVST')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
          });
        }
  }

  return (
    <>
        <NavBar/>
        <Sidebar />
        {
          btn ? 
            <div className='employeeAdd'>                                                       
              <form>
                <label htmlFor="img" className="btn btn-main btn-outline-dark">Upload New Image</label>
                <input type="file"  id="img" onChange={imageHandler} className="photoInput" />
                {btnState && <button className="btn upload-btn btn-outline-dark" type='submit' onClick={submitForm} >Upload</button>}
              </form>
            </div>
        :

        <div className='employeeAddBg'>
          <form ref={form} onSubmit={submitHandler} className='employeeAdd'>
          {/* <form onSubmit={submitHandler} className='employeeAdd'> */}
          <h4>Hi Admin, Add New Employee!</h4>
          
        <div className='pDetails'>
                <table className="table">
                  <th scope="col">Personal Details :</th>
                  <tbody>
                   <tr>
                      <th scope="row">Name : </th>
                      <td> <input 
                              type="text" 
                              name='name' 
                              onChange={handleChanges}
                              required
                            /> 
                            {nameError ? <span style={{color : 'red'}}> *name should be more than 3 letters</span> : '' }
                            </td>
                    </tr>
                    <tr>
                      <th scope="row">Email id : </th>
                      <td> <input 
                              type="email" 
                              name='email'  
                              onChange={handleChanges}
                              required
                            /> 
                            {emailError ? <span style={{color : 'red'}}> *enter a valid email address</span> : '' }

                            </td>
                    </tr>
                    <tr>
                      <th scope="row">Password : </th>
                      <td> <input type="password" name='password'  onChange={handleChanges} required />
                      {passError ? <span style={{color : 'red'}}> *6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter </span> : '' }

                       </td>
                    </tr>
                    <tr>
                      <th scope="row">Date of birth : </th>
                      <td>  <input type="date" name='dob' onChange={handleChanges}  required />  
                      {dobError ? <span style={{color : 'red'}}> *enter valid Date of Birth</span> : '' }

                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Address : </th>
                      <td> <input type="text" name='address' onChange={handleChanges} required/>
                      {addressError ? <span style={{color : 'red'}}> *enter proper address</span> : '' }
                        </td>
                    </tr>
                    <tr>
                      <th scope="row">Contact Number : </th>
                      <td> <input type="number" name='contactNo' onChange={handleChanges} required /> 
                      {contactError ? <span style={{color : 'red'}}> *conatct number should have 10 numbers</span> : '' }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Aadhar Number : </th>
                      <td> <input type="number" name='aadharNo' onChange={handleChanges} required /> 
                      {aadharError ? <span style={{color : 'red'}}> *aadhar number should be of 12 digit</span> : '' }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <div className='pDetails'>
                <table className="table">
                  <th scope="col">Professional Details :</th>

                  <tbody>
                  <tr>
                      <th scope="row">Role : </th>
                      {/* <td> <input type="text" name='role' onChange={handleChanges}/> </td> */}
                      <td>
                        <select  name='role' onChange={handleChanges} required>
                          <option value="none" selected disabled hidden>Select ---</option>
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                        {RoleError ? <span style={{color : 'red'}}> *if you are employee select user field</span> : '' }

                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Experience : </th>
                      {/* <td> <input type="text" name='role' onChange={handleChanges}/> </td> */}
                      <td>
                        <select  name='experience' onChange={handleChanges} required>
                          <option value="none" selected disabled hidden>Select ---</option>
                          <option value="fresher">Fresher</option>
                          <option value="experienced">Experienced</option>
                        </select>
                        {/* {RoleError ? <span style={{color : 'red'}}> *if you are employee select user field</span> : '' } */}

                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Designation : </th>
                      <td> <input type="text" name='designation' onChange={handleChanges} required/>
                      {DesignationError ? <span style={{color : 'red'}}> *Please enter proper designation</span> : '' }
                       </td>
                    </tr>
                    <tr>
                      <th scope="row">Joining Date : </th>
                      <td> <input type="date" name='joiningDate' onChange={handleChanges} required />
                      {JDateError ? <span style={{color : 'red'}}> *enter valid date</span> : '' }
                       </td>
                    </tr>
                    <tr>
                      <th scope="row">CTC : </th>
                      <td> <input type="number" name='ctc' onChange={handleSalary} required /> 
                      {CtcError ? <span style={{color : 'red'}}> *should be more than 5 digits</span> : '' }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Bond Duration : </th>
                      <td> <input type="text" name='bond' onChange={handleChanges} required  />
                      {BondError ? <span style={{color : 'red'}}> *please enter your correct Bond Duration in months</span> : '' }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Office Email-id : </th>
                      <td> <input type="oEmail" name='oEmail' onChange={handleChanges} required /> 
                      {OEmailError ? <span style={{color : 'red'}}> *enetr valid email address</span> : '' }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='pDetails'>
                <table className="table">
                  <th scope="col">Bank Details :</th>

                  <tbody>
                    <tr>
                      <th scope="row">Account Number : </th>
                      <td> <input type="number" name='accNo' onChange={handleAccount} required /> 
                      {ANumError ? <span style={{color : 'red'}}> *should have 10 to 15 digits</span> : '' }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">IFSC code : </th>
                      <td> <input type="text" name='ifscCode' onChange={handleAccount} required /> 
                      {IfscError ? <span style={{color : 'red'}}> *enter Proper IFSC code</span> : '' }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Branch : </th>
                      <td> <input type="text" name='branch' onChange={handleAccount} required /> 
                      {BranchError ? <span style={{color : 'red'}}> *branch should be more than 3 letters</span> : '' }
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Pin Code : </th>
                      <td> <input type="number" name='pinCode' onChange={handleAccount} required /> 
                      {PinError ? <span style={{color : 'red'}}> *enter valid PIN CODE </span> : '' }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <button className='btn btn-success' type='submit'   >Next</button>
              </form>
         </div>
        }
    </>
  )
}

export default EmployeeAdd