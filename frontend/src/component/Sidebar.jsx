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
              </div>
            </div>
          </Link>

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

        </div>
      }
      </div>

  );
}

export default Sidebar