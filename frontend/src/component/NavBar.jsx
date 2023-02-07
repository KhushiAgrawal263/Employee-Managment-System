import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './NavBar.css'  
import Notifications from './Notifications';
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import Pusher from 'pusher-js'

function NavBar() {
  const user = JSON.parse(localStorage.getItem("EMSuser"));
  const id = user.id;
  const [showNotification, setShowNotification] = useState(false);
  const [msgStatus,setmsgStatus] = useState(true);
  const [event,setEvent] = useState(false);
  const [eventTrigger,setEventTrigger] = useState(false);
  const [count,setCount] = useState();
  const [unseenUserNotifi,setUnseenUserNotifi] = useState([]);
  const [seenUserNotifi,setSeenUserNotifi] = useState([]);
  const [bdayDates,setBdayDates] = useState([]);
  const [bdayData,setBdaydata] = useState();
  const [status,setStatus] = useState();

  let newdate = new Date().toJSON().slice(0, 10);
  const [year, month, day] = newdate.split('-');
  const today = [day,month, year].join('-');

 // fetch unseen notifications of employee
 const fetchunseennotifications =async ()=>{
    const res = await fetch(`http://localhost:8000/user/get/user/notifi/${id}`);
    const data = await res.json();
    let n =0;
    data.notifications.map((eachnotifi)=>{
      // console.log(eachnotifi);
      if(eachnotifi.status=="unseen"){
        n++;
        setUnseenUserNotifi(arr=>[...arr,eachnotifi]);
      }else{
        setSeenUserNotifi(arr=>[...arr,seenUserNotifi]);
      }
    })
    setCount(n);
  }

    const fetchBirthdayDates=async()=>{
      const resd = await fetch(`http://localhost:8000/get/birthdaydates/users`);
      const dataa = await resd.json();
      const dates=[];
      dataa.forEach(async bd => {
        console.log(bd.array);
        const [year, month, day] = bd.array.split('-');
        const result = [day,month, year].join('-');
        if(parseInt(today.slice(3, 5))==parseInt(result.slice(3, 5))){
          if(parseInt(today.slice(0,2))==parseInt(result.slice(0,2))-1){
            console.log("khushih");
            const notifi = {
              type:"Birthday",
              message:`Tomorrow is ${bd.name}'s Birthday`,
              date:today,
              role:"admin",
              status:"unseen",
              id:bd._id
            }
  
                const generateNotifi = await fetch(`http://localhost:8000/admin/user/addnotifi/${bd._id}`,{
                  method: 'POST',
                  headers: {
                      accept: 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(notifi)
                });
                const Notifi = await generateNotifi.json();
                console.log(Notifi);
          }
        }
      });
    }

    useEffect(()=>{
      fetchunseennotifications();
      fetchBirthdayDates();
      // bdayDates.map(async (bday)=>{
      //   // console.log(bday);
      //   const [year, month, day] = bday.array.split('-');
      //   const result = [day,month, year].join('-');
      //   var td = new Date();
      //   var dd = td.getDate();
      //   var mm = td.getMonth()+1; 
      //   var yyyy = td.getFullYear();
      //   if(dd<10) {dd='0'+dd;} 
      //   if(mm<10) {mm='0'+mm;} 
      //   const date = [dd, mm, yyyy].join('-');
      
      //   // console.log(hour,minutes,second);
      //   console.log(result,today,"todaysss date");
      //   if(parseInt(today.slice(3, 5))==parseInt(result.slice(3, 5))){
      //     if(parseInt(today.slice(0,2))==parseInt(result.slice(0,2))-1){
      //       console.log("khushih");
      //       const notifi = {
      //         type:"Birthday",
      //         message:`Tomorrow is ${bday.name}'s Birthday`,
      //         date:date,
      //         role:"admin",
      //         status:"unseen",
      //         id:bday._id
      //       }
  
      //       // const checkNotifi = await fetch(`http://localhost:8000/birthday/notification/${bday._id}`)
      //       // const data = await checkNotifi.json();
      //       // console.log(data,"true or false");
  
      //       // if(!data && data.length==0){
      //           const generateNotifi = await fetch(`http://localhost:8000/admin/user/addnotifi/${bday._id}`,{
      //             method: 'POST',
      //             headers: {
      //                 accept: 'application/json',
      //                 'Content-Type': 'application/json'
      //             },
      //             body: JSON.stringify(notifi)
      //           });
      //           const Notifi = await generateNotifi.json();
      //           console.log(Notifi);
      //     }
      //   }
      // })
    },[])
  

    // bdayDates.map(async (bday)=>{
    //   // console.log(bday);
    //   const [year, month, day] = bday.array.split('-');
    //   const result = [day,month, year].join('-');
    //   var td = new Date();
    //   var dd = td.getDate();
    //   var mm = td.getMonth()+1; 
    //   var yyyy = td.getFullYear();
    //   if(dd<10) {dd='0'+dd;} 
    //   if(mm<10) {mm='0'+mm;} 
    //   const date = [dd, mm, yyyy].join('-');
    //   // console.log(hour,minutes,second);
    //   // console.log(result,today,"todaysss date");
    //   if(parseInt(today.slice(3, 5))==parseInt(result.slice(3, 5))){
    //     if(parseInt(today.slice(0,2))==parseInt(result.slice(0,2))-1){
    //       const notifi = {
    //         type:"Birthday",
    //         message:`Tomorrow is ${bday.name}'s Birthday`,
    //         date:date,
    //         role:"admin",
    //         status:"unseen",
    //         id:bday._id
    //       }

    //       // const checkNotifi = await fetch(`http://localhost:8000/birthday/notification/${bday._id}`)
    //       // const data = await checkNotifi.json();
    //       // console.log(data,"true or false");

    //       // if(!data && data.length==0){
    //           const generateNotifi = await fetch(`http://localhost:8000/admin/user/addnotifi/${bday._id}`,{
    //             method: 'POST',
    //             headers: {
    //                 accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(notifi)
    //           });
    //           const Notifi = await generateNotifi.json();
    //           console.log(Notifi);
    //     }
    //   }
    // })


  
  const handleLogout=()=>{
    localStorage.setItem("EMSuser",null);
    window.location.href = '/'
  }

  const handleShowNotification=()=>{
    setShowNotification(true);
  }

  const handleCross = (data) => {
    setShowNotification(false)
    console.log(unseenUserNotifi);
    unseenUserNotifi.map(async (notifi)=>{
      console.log(id,notifi._id);
      const resd = await fetch(`http://localhost:8000/user/user/updatestatus/${id}/${notifi._id}`,{
        method: 'PUT',
        headers: {
            accept: 'application/json',
        },
    });
      const dataa = await resd.json();
      console.log(dataa);
    })
    // setSeenUserNotifi(arr=>[...new Set(arr),...unseenUserNotifi])
    setUnseenUserNotifi([])
    setCount(0)
    // console.log(seenUserNotifi,"seenusernotifi"); 
    window.location.href='/home'
  }
// console.log(bday);
  return (
    <>
      <div className='nav'>
        <img src={'Image/logo.png'} alt="" />
        <h1 className='navText'>staffie!</h1>
        <div className='not'>
            <div className='notificationBadge' onClick={() => setShowNotification(handleShowNotification)}>
              {
                msgStatus &&  
                <NotificationBadge
                count={count}
                effect={Effect.SCALE}
              />
              }
               <img src="Image/notification.png" title='Notifications'/>
            </div>
            <div className='navNotification'>
              {
                showNotification ? <Notifications props={{unseen:unseenUserNotifi,handleCross}} /> : " "
              }
            </div>
        </div>

        <div>
          <div className="btn-logout" onClick={handleLogout}> 
            <img src="Image/logout.png" title="Logout" />
          </div>
        </div>
      </div>
    </>
  );
}


export default NavBar;

































// import { useRef } from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import './NavBar.css'
// import Notifications from './Notifications';



// function NavBar() {
//   const [showNotification, setShowNotification] = useState(false);
  
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   const user = localStorage.getItem("EMSuser");
//   const handleLogout=()=>{
//     localStorage.setItem("EMSuser",null);
//     window.location.href = '/'
//   }

//   function useOutsideAlerter(ref) {
//     useEffect(() => {
//       function handleClickOutside(event) {
//         if (ref.current && !ref.current.contains(event.target)) {
//           setShowNotification(false)
//         }
//       }
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   }


//   return (
//     <>
//       <div className='nav'>
//         <img src={'Image/logo.png'} alt="" />
//         <h1 className='navText'>staffie!</h1>
//         <div 
//            onClick={() => setShowNotification(!showNotification)}
//            className='not'
//            ref={wrapperRef}
//           >

//             <div className='notificationBadge'>
//                <img src="Image/notification.png" title='Notifications'/>
//                <div className='Badge'>10</div>
//             </div>
//             <div className='navNotification'>
//               {
//                 showNotification ? <Notifications notificationState="true"/> : " "
//               }
//             </div>
//         </div>

//           <div className="btn-logout" onClick={handleLogout}> 
//             <img src="Image/logout.png" title="Logout" />
//           </div>

          
//       </div>
//     </>
//   );
// }


// export default NavBar;




