import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import Notifications from './Notifications';



function NavBar() {
  const [showNotification, setShowNotification] = useState(false);
  
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const user = localStorage.getItem("EMSuser");
  const handleLogout=()=>{
    localStorage.setItem("EMSuser",null);
    window.location.href = '/'
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowNotification(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }


  return (
    <>
      <div className='nav'>
        <img src={'Image/logo.png'} alt="" />
        <h1 className='navText'>staffie!</h1>
        <div 
           onClick={() => setShowNotification(!showNotification)}
           className='not'
           ref={wrapperRef}
          >

            <div className='notificationBadge'>
               <img src="Image/notification.png" title='Notifications'/>
               <div className='Badge'>10</div>
            </div>
            <div className='navNotification'>
              {
                showNotification ? <Notifications notificationState="true"/> : " "
              }
            </div>
        </div>

          <div className="btn-logout" onClick={handleLogout}> 
            <img src="Image/logout.png" title="Logout" />
          </div>

          
      </div>
    </>
  );
}


export default NavBar;