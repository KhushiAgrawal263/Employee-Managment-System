import React, {useEffect, useRef, useState} from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFile, faPlus, faFilePen, faHouseLaptop, faCalendar, faPaperPlane, faBell, faList, faPager, faListCheck, faLaptop, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
// const user = JSON.parse(localStorage.getItem("EMSuser"));
// const role = user && user.role;


const user = JSON.parse(localStorage.getItem("EMSuser"));
const role = user && user.role;

const Sidebar = () => {
  const [display, setDisplay] = useState();
  // const display = useRef();

  const [employee, setEmployee] = useState();

  // console.log(display);
  // useEffect(()=>{
  //   console.log(display);
  // },[display])

  // const handleChange = (value) => {
  //   handleChange = (value) => {
  //     setDisplay(value)
  //   }
  // }

  // console.log(display);


  return (
      <div className='sidebar'>
      { 
        role == 'admin' && 
        <div>
          <Link to='/home' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employee' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employee') }>
              <div  className='sideLink'>
                <FontAwesomeIcon icon={faUser} className='fAIcon' />
                <div>Employee</div>
              </div>
            </div>
          </Link>

          <Link to='/adminDoc' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'referals' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('referals') } >
              <div className='sideLink'>
                <FontAwesomeIcon icon={faFile} className='fAIcon' />
                <div>Referals</div>
              </div>
            </div>
          </Link>

          <Link to='/addEmployee' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'add' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('add') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faPlus} className='fAIcon' />
                <div>Add</div>
              </div>
            </div>
          </Link>

<<<<<<< HEAD
<<<<<<< HEAD
          <div className="position-sticky">
            {
              role=='user' && 
              <>
              
                <Link to="/home" className={display ==  'main' ? " side_item1" : " side_item"} onClick={() => setDisplay('main') } title='Main Dashboard'>
                  <img src="https://img.icons8.com/material-outlined/24/null/dashboard-layout.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Main Dashboard</div>
                </Link>

                <Link to="/document" className={display ==  'document' ? " side_item1" : " side_item"} onClick={() => setDisplay('document') } title='Documents'>
                  <img src="Image/documents.png" alt="" />
                  <div style={{display: isOpen ? "block" : "none"}}>Documents</div>
                </Link>

                <Link to="/salary" className={display ==  'salary' ? " side_item1" : " side_item"} onClick={() => setDisplay('salary') } title='Salary Detail'>
                  <img src="https://img.icons8.com/ios-glyphs/30/null/money--v1.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Salary</div>
                </Link>

                <Link to="/calendar" className={display ==  'calendar' ? " side_item1" : " side_item"} onClick={() => setDisplay('calendar') } title='Calendar'>
                  <img src="https://img.icons8.com/material-rounded/24/null/calendar--v1.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Calendar</div>
                </Link>

                <Link to="/leaves" className={display ==  'leaves' ? " side_item1" : " side_item"} onClick={() => setDisplay('leaves') } title='Review Leaves'>
                  <img src="https://img.icons8.com/material-rounded/24/null/star-half-empty.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Leaves</div>
                </Link>

                <Link to="/applyLeaves" className={display ==  'apply' ? " side_item1" : " side_item"} onClick={() => setDisplay('apply') } title='Apply For Leave'>
                  <img src="https://img.icons8.com/fluency-systems-regular/48/null/clipboard-approve--v3.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Apply Leave</div>
                </Link>

                <Link to="/workFromHome" className={display ==  'wfh' ? " side_item1" : " side_item"} onClick={() => setDisplay('wfh') } title='Work From Home'>
                  <img src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/null/external-work-from-home-work-from-home-sbts2018-mixed-sbts2018.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Work From Home</div>
                </Link>

                <Link to="/rules" className={display ==  'rules' ? " side_item1" : " side_item"} onClick={() => setDisplay('rules') } title='Rules & Regulations'>
                  <img src="https://img.icons8.com/ios-filled/50/null/rules.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Rules & Regulations</div>
                </Link>

                <Link to="/prevNotification" className={display ==  'prevNotification' ? " side_item1" : " side_item"} onClick={() => setDisplay('prevNotification') } title='All Notification'> 
                  <img src="Image/Pnotification.png" alt="" />
                  <div style={{display: isOpen ? "block" : "none"}}>All Notification</div>
                </Link>
=======
          <Link to='/reviewLeave' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'leave' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('leave') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faFilePen} className='fAIcon' />
                <div>Leave</div>
=======
          <Link to='/reviewLeave' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'leave' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('leave') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faFilePen} className='fAIcon' />
                <div>Leave</div>
              </div>
            </div>
          </Link>

          <Link to='/reviewWfh' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'wfh' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('wfh') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faHouseLaptop} className='fAIcon' />
                <div>WFH</div>
              </div>
            </div>
          </Link>

          <Link to='/adminCal' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'calendar' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('calendar') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faCalendar} className='fAIcon' />
                <div>Calendar</div>
              </div>
            </div>
          </Link>

          <Link to='/prevNotification' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'pop' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('pop') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faBell} className='fAIcon' />
                <div>Pop-up</div>
              </div>
            </div>
          </Link>
        </div>
      }
      {
        role == 'user' && 
        <div>
          <Link to='/home' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'dash' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('dash') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faUser} className='fAIcon' />
                <div>Dashboard</div>
              </div>
            </div>
          </Link>


          <Link to='/document' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'doc' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('doc') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faFile} className='fAIcon' />
                <div>Documents</div>
              </div>
            </div>
          </Link>

          <Link to='/calendar' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employeCal' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employeCal') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faCalendarDay} className='fAIcon' />
                <div>Calendar</div>
              </div>
            </div>
          </Link>

          <Link to='/applyLeaves' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employeeLeave' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employeeLeave') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faUser} className='fAIcon' />
                <div>Leaves</div>
              </div>
            </div>
          </Link>

          <Link to='/workFromHome' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employeeWFH' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employeeWFH') }>
              <div to='/workFromHome' className='sideLink'>
                <FontAwesomeIcon icon={faLaptop} className='fAIcon' />
                <div>WFH</div>
>>>>>>> f051f76c866ada332e3adb70fa05569ee2db69cf
              </div>
            </div>
          </Link>

<<<<<<< HEAD
          <Link to='/reviewWfh' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'wfh' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('wfh') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faHouseLaptop} className='fAIcon' />
                <div>WFH</div>
=======
          <Link to='/rules' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'rr' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('rr') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faListCheck} className='fAIcon' />
                <div>R&R</div>
>>>>>>> f051f76c866ada332e3adb70fa05569ee2db69cf
              </div>
            </div>
          </Link>

<<<<<<< HEAD
          <Link to='/adminCal' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'calendar' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('calendar') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faCalendar} className='fAIcon' />
                <div>Calendar</div>
=======
          <Link to='/prevNotification' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employeePop' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employeePop') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faBell} className='fAIcon' />
                <div>Pop-ups</div>
>>>>>>> f051f76c866ada332e3adb70fa05569ee2db69cf
              </div>
            </div>
          </Link>

<<<<<<< HEAD
          <Link to='/prevNotification' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'pop' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('pop') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faBell} className='fAIcon' />
                <div>Pop-up</div>
              </div>
            </div>
          </Link>
        </div>
      }
      {
        role == 'user' && 
        <div>
          <Link to='/home' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'dash' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('dash') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faUser} className='fAIcon' />
                <div>Dashboard</div>
              </div>
            </div>
          </Link>


          <Link to='/document' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'doc' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('doc') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faFile} className='fAIcon' />
                <div>Documents</div>
              </div>
            </div>
          </Link>

          <Link to='/calendar' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employeCal' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employeCal') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faCalendarDay} className='fAIcon' />
                <div>Calendar</div>
              </div>
            </div>
          </Link>

          <Link to='/applyLeaves' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employeeLeave' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employeeLeave') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faUser} className='fAIcon' />
                <div>Leaves</div>
              </div>
            </div>
          </Link>

          <Link to='/workFromHome' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employeeWFH' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employeeWFH') }>
              <div to='/workFromHome' className='sideLink'>
                <FontAwesomeIcon icon={faLaptop} className='fAIcon' />
                <div>WFH</div>
              </div>
            </div>
          </Link>
>>>>>>> f051f76c866ada332e3adb70fa05569ee2db69cf

          <Link to='/rules' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'rr' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('rr') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faListCheck} className='fAIcon' />
                <div>R&R</div>
              </div>
            </div>
          </Link>

          <Link to='/prevNotification' style={{'textDecoration' : 'none'}}>
            <div className= {display == 'employeePop' ? 'sideItem1 sideItem' : 'sideItem'} onClick={() => setDisplay('employeePop') }>
              <div className='sideLink'>
                <FontAwesomeIcon icon={faBell} className='fAIcon' />
                <div>Pop-ups</div>
              </div>
            </div>
          </Link>

<<<<<<< HEAD
                  <Link to="/home"className={display ==  'info' ? " side_item1" : " side_item"} onClick={() => setDisplay('info') } title='Employee Information'>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/manager.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Employee Information</div>
                  </Link>

                  <Link to="/adminDoc"className={display ==  'adminDoc' ? " side_item1" : " side_item"} onClick={() => setDisplay('adminDoc') } title='Document Verification'>
                    {/* <img src="https://img.icons8.com/ios-glyphs/30/null/manager.png"/> */}
                    <img src="Image/adminDoc.png" alt="" />
                    <div style={{display: isOpen ? "block" : "none"}}>Document Verification</div>
                  </Link>
            
                  <Link to="/addEmployee" className={display ==  'addEmp' ? " side_item1" : " side_item"} onClick={() => setDisplay('addEmp') } title='Add New Employee'> 
                    <img src="https://img.icons8.com/ios-filled/50/null/add-user-male.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Add Employee</div>
                  </Link>

                  <Link to="/reviewLeave" className={display ==  'reviewLeave' ? " side_item1" : " side_item"} onClick={() => setDisplay('reviewLeave') } title='Leave Details'>
                    <img src="https://img.icons8.com/ios-filled/50/null/mark-as-favorite.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Review Leave</div>
                  </Link>
            
                  <Link to="/reviewWfh" className={display ==  'reviewWfh' ? " side_item1" : " side_item"} onClick={() => setDisplay('reviewWfh') } title='Work From Home Details'> 
                    <img src="https://img.icons8.com/metro/26/null/monitor.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Review Wfh</div>
                  </Link>

                  <Link to="/adminCal" className={display ==  'adminCal' ? " side_item1" : " side_item"} onClick={() => setDisplay('adminCal') } title='Overall Calendar'> 
                    <img src="https://img.icons8.com/ios-filled/50/null/calendar--v1.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Calendar</div>
                  </Link>

                  <Link to="/prevNotification" className={display ==  'prevNotification' ? " side_item1" : " side_item"} onClick={() => setDisplay('prevNotification') } title='All Notification'> 
                    <img src="Image/Pnotification.png" alt="" />
                    <div style={{display: isOpen ? "block" : "none"}}>All Notification</div>
                  </Link>
                </>
              }
          </div>
          </div>
       </nav>
=======
        </div>
      }
      </div>

>>>>>>> f051f76c866ada332e3adb70fa05569ee2db69cf
=======
        </div>
      }
      </div>

>>>>>>> f051f76c866ada332e3adb70fa05569ee2db69cf
  );
}

export default Sidebar