import React, {useState} from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom"
import {
  FaBars,
  FaMinus
}from "react-icons/fa";

// const user = JSON.parse(localStorage.getItem("EMSuser"));
// const role = user && user.role;

const Sidebar = () => {
  const[isOpen ,setIsOpen] = useState(false);
  const [display, setDisplay] = useState();
  
  const toggle = () => {
      setIsOpen (!isOpen)
      localStorage.setItem('SideBarState' , isOpen);
};

  const user = JSON.parse(localStorage.getItem("EMSuser"));
  const role = user && user.role;

  return (
        <nav id="sidebarMenu" >
          <div  className={isOpen ? 'sidebar' : 'sidebar1' } >

          <div className="top_section">
                  <img style={{display: isOpen ? "block" : "none"}} src={'Image/logo.png'} alt="" />
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">   staffie!</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       {/* <FaBars onClick={toggle}/> */}

                       {
                        isOpen ? <FaMinus onClick={toggle} className="sideIcon"  /> : <FaBars onClick={toggle}/>  
                       }
                   </div>
               </div>

          <div className="position-sticky">
            {
              role=='user' && 
              <>
              
                <Link to="/home" class={display ==  'main' ? " side_item1" : " side_item"} onClick={() => setDisplay('main') } title='Main Dashboard'>
                  <img src="https://img.icons8.com/material-outlined/24/null/dashboard-layout.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Main Dashboard</div>
                </Link>

                <Link to="/document" class={display ==  'document' ? " side_item1" : " side_item"} onClick={() => setDisplay('document') } title='Documents'>
                  <img src="Image/documents.png" alt="" />
                  <div style={{display: isOpen ? "block" : "none"}}>Documents</div>
                </Link>

                <Link to="/salary" class={display ==  'salary' ? " side_item1" : " side_item"} onClick={() => setDisplay('salary') } title='Salary Detail'>
                  <img src="https://img.icons8.com/ios-glyphs/30/null/money--v1.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Salary</div>
                </Link>

                <Link to="/calendar" class={display ==  'calendar' ? " side_item1" : " side_item"} onClick={() => setDisplay('calendar') } title='Calendar'>
                  <img src="https://img.icons8.com/material-rounded/24/null/calendar--v1.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Calendar</div>
                </Link>

                <Link to="/leaves" class={display ==  'leaves' ? " side_item1" : " side_item"} onClick={() => setDisplay('leaves') } title='Review Leaves'>
                  <img src="https://img.icons8.com/material-rounded/24/null/star-half-empty.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Leaves</div>
                </Link>

                <Link to="/applyLeaves" class={display ==  'apply' ? " side_item1" : " side_item"} onClick={() => setDisplay('apply') } title='Apply For Leave'>
                  <img src="https://img.icons8.com/fluency-systems-regular/48/null/clipboard-approve--v3.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Apply Leave</div>
                </Link>

                <Link to="/workFromHome" class={display ==  'wfh' ? " side_item1" : " side_item"} onClick={() => setDisplay('wfh') } title='Work From Home'>
                  <img src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/null/external-work-from-home-work-from-home-sbts2018-mixed-sbts2018.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Work From Home</div>
                </Link>

                <Link to="/rules" class={display ==  'rules' ? " side_item1" : " side_item"} onClick={() => setDisplay('rules') } title='Rules & Regulations'>
                  <img src="https://img.icons8.com/ios-filled/50/null/rules.png"/>
                  <div style={{display: isOpen ? "block" : "none"}}>Rules & Regulations</div>
                </Link>

                <Link to="/prevNotification" class={display ==  'prevNotification' ? " side_item1" : " side_item"} onClick={() => setDisplay('prevNotification') } title='All Notification'> 
                  <img src="Image/Pnotification.png" alt="" />
                  <div style={{display: isOpen ? "block" : "none"}}>All Notification</div>
                </Link>

              </>
            }

              {
                role == 'admin' && 
                <>

                  <Link to="/home"class={display ==  'info' ? " side_item1" : " side_item"} onClick={() => setDisplay('info') } title='Employee Information'>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/manager.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Employee Information</div>
                  </Link>
            
                  <Link to="/addEmployee" class={display ==  'addEmp' ? " side_item1" : " side_item"} onClick={() => setDisplay('addEmp') } title='Add New Employee'> 
                    <img src="https://img.icons8.com/ios-filled/50/null/add-user-male.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Add Employee</div>
                  </Link>

                  <Link to="/reviewLeave" class={display ==  'reviewLeave' ? " side_item1" : " side_item"} onClick={() => setDisplay('reviewLeave') } title='Leave Details'>
                    <img src="https://img.icons8.com/ios-filled/50/null/mark-as-favorite.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Review Leave</div>
                  </Link>
            
                  <Link to="/reviewWfh" class={display ==  'reviewWfh' ? " side_item1" : " side_item"} onClick={() => setDisplay('reviewWfh') } title='Work From Home Details'> 
                    <img src="https://img.icons8.com/metro/26/null/monitor.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Review Wfh</div>
                  </Link>

                  <Link to="/adminCal" class={display ==  'adminCal' ? " side_item1" : " side_item"} onClick={() => setDisplay('adminCal') } title='Overall Calendar'> 
                    <img src="https://img.icons8.com/ios-filled/50/null/calendar--v1.png"/>
                    <div style={{display: isOpen ? "block" : "none"}}>Calendar</div>
                  </Link>

                  <Link to="/prevNotification" class={display ==  'prevNotification' ? " side_item1" : " side_item"} onClick={() => setDisplay('prevNotification') } title='All Notification'> 
                    <img src="Image/Pnotification.png" alt="" />
                    <div style={{display: isOpen ? "block" : "none"}}>All Notification</div>
                  </Link>
                </>
              }
          </div>
          </div>
       </nav>
  );
}

export default Sidebar