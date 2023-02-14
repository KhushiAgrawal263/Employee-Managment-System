import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import { Buffer } from 'buffer';
import PSPDFKit from "pspdfkit";
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './AdminDoc.css'

const DocumentDetails = () => {
    const location = useLocation()
    const user = location.state.user;
    // console.log(user);
    // const documents = user.documents;
    const [documents,setDocuments] = useState()

    const [data,setData] = useState();
    const [displayRL, setDisplayRL] = useState();
    const [displayAC, setDisplayAC] = useState();
    const [displayPC, setDisplayPC] = useState();
    const [displayGM, setDisplayGM] = useState();
    const [displaySSM, setDisplaySSM] = useState();
    const [displaySM, setDisplaySM] = useState();
    const [displayResume, setDisplayResume] = useState();
    const [btnValue,setBtnValue]  = useState('Approve All');

    const userURL = 'http://localhost:8000'
    useEffect(() => {
        const fetchurl= async ()=>{
            const res = await fetch(`${userURL}/documents/${user._id}`,{
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });
            const data = await res.json();
            console.log("nvgfyfky");
            console.log(data[0]);
            setData(data[0]);
            setDocuments(data[0].documents);
        }
        fetchurl();
      },[]);

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) {dd='0'+dd;} 
    if(mm<10) {mm='0'+mm;} 
    const date = [dd, mm, yyyy].join('-');

    const updateStatus=async (name,type)=>{
        console.log(name,type);
        const res = await fetch(`http://localhost:8000/approveorreject/document/${user._id}/${name}/${type}`,{
                method: 'PUT',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(data)
        });
        const notifi = {
            type:`Doc ${type}`,
            message:`Your ${name} document is ${type}!`,
            date:date,
            role:"user",
            status:"unseen"
        }
        console.log(notifi);

        const generateNotifi = await fetch(`http://localhost:8000/user/user/addnotifi/${user._id}`,{
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(notifi)
        });
        const Notifi = await generateNotifi.json();
        console.log(Notifi);
        window.location.href='/documentDetails'
    }
      
    const handleApprove=(e,value,name,type)=>{
        if(value=='verifyRL' || value=='cancelRL'){
            updateStatus(name,type);
            setDisplayRL(value);
        }else if(value=='verifyAC' || value=='cancelAC'){
            updateStatus(name,type);
            setDisplayAC(value);
        }else if(value=='verifyPC' || value=='cancelPC'){
            updateStatus(name,type);
            setDisplayPC(value);
        }else if(value=='verifyGM' || value=='cancelGM'){
            updateStatus(name,type);
            setDisplayGM(value);
        }else if(value=='verifySSM' || value=='cancelSSM'){
            updateStatus(name,type);
            setDisplaySSM(value);
        }else if(value=='verifySM' || value=='cancelSM'){
            updateStatus(name,type);
            setDisplaySM(value);
        }else if(value=='verifyResume' || value=='cancelResume'){
            updateStatus(name,type);
            setDisplayResume(value);
        }
    }

    const approveAllDocument=async()=>{
        const val ={
            docStatus:'approved'
        }
        const res = await fetch(`${userURL}/${user._id}`,{
            method: 'PUT',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        });
        const data = await res.json();
        alert("Documents Approved Successfully...");
        const notifi = {
            type:`Doc approved`,
            message:`Your all documents are verified!`,
            date:date,
            role:"user",
            status:"unseen"
        }
        console.log(notifi);

        const generateNotifi = await fetch(`http://localhost:8000/user/user/addnotifi/${user._id}`,{
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(notifi)
        });
        const Notifi = await generateNotifi.json();
        console.log(Notifi);
        setBtnValue('Approved')
    }

    const fileHandler=async (name)=>{
        const doc = await fetch(`http://localhost:8000/documents/${user._id}/${name}`);
        const data = await doc.json();
        console.log(data[0].documents,"lkjhjgygf");
        const bytes = new Uint8Array(data[0].documents.data);
        const len = bytes.byteLength;
        let binary;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const files = window.btoa(binary);
        const filename= data[0].documents.fileName;
        const url = `data:application/pdf;base64,` + files;
        const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
    }

  return (
    <>
        <Sidebar />
        <NavBar />
        <div className='documentDetails'>
            <h3>Document details about <span>{user.name}</span> </h3>
            <h6>{user.empId}, {user.designation}</h6>
            { documents && <><div className='overallDocumentCard'>
                    {
                        user.experience=='experienced' &&
                        <div className='documentCard'>
                            <div className='docVeri'>Relieving Letter</div>
                            <div> <img src="Image/pdf.png" alt="" onClick={()=>fileHandler("relievingLetter")} /> </div>
                            <div className='docButton'> 
                            {
                                documents.relievingLetter ? documents.relievingLetter=='uploaded' &&
                                <>
                                    <button className={displayRL == 'cancelRL' ? 'cancelButton' : ''}  onClick={(e)=>handleApprove(e,'verifyRL','relievingLetter','rejected')} > <img src="Image/cancelDoc.png" alt="" /> </button> 
                                    <button className={displayRL == 'verifyRL' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'cancelRL','relievingLetter','approved')}> <img src="Image/verifiedDoc.png" alt="" /> </button>
                                </> :'-'
                            }
                            {
                                documents.relievingLetter ? documents.relievingLetter=='rejected' &&
                                <button className={displayRL == 'cancelRL' ? 'cancelButton' : ''}   > <img src="Image/cancelDoc.png" alt="" /> </button> :'-'
                            }
                            {
                                documents.relievingLetter ? documents.relievingLetter=='approved' &&
                                <button className={displayRL == 'verifyRL' ? 'cancelButton' : ''} > <img src="Image/verifiedDoc.png" alt="" /> </button> :'-'
                            }
                            </div>
                        </div>
                    }
                    
                    <div className='documentCard'>
                        <div className='docVeri'>Aadhar Card</div>
                        <div> <img src="Image/pdf.png" alt="" onClick={()=>fileHandler("aadharCard")} /> </div>
                        <div> 
                            {
                                documents.aadharCard ? documents.aadharCard=='uploaded' &&
                                <>   
                                    <button className={ displayAC == 'cancelAC' ? 'cancelButton ' : '' } onClick={(e)=>handleApprove(e,'verifyAC','aadharCard','rejected')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                                    <button className={ displayAC == 'verifyAC' ? 'cancelButton' : '' } onClick={(e)=>handleApprove(e,'cancelAC','aadharCard','approved')}> <img src="Image/verifiedDoc.png" alt="" /> </button>  
                                </> :'-'
                            }
                            {
                                documents.aadharCard ? documents.aadharCard=='rejected' &&
                                <button className={ displayAC == 'cancelAC' ? 'cancelButton ' : '' }> <img src="Image/cancelDoc.png" alt="" /> </button> :'-'
                            }
                            {
                                documents.aadharCard ? documents.aadharCard=='approved' &&
                                <button className={ displayAC == 'verifyAC' ? 'cancelButton' : '' }> <img src="Image/verifiedDoc.png" alt="" /> </button> :'-'
                            }
                        </div>
                    </div>

                    <div className='documentCard'>
                        <div className='docVeri'>Pan Card</div>
                        <div> <img src="Image/pdf.png" alt="" onClick={()=>fileHandler("panCard")} /> </div>
                        <div> 
                            {
                                documents.panCard ? documents.panCard=='uploaded' &&
                                <>   
                                    <button className={displayPC == 'cancelPC' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'verifyPC','panCard','rejected')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                                    <button className={displayPC == 'verifyPC' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'cancelPC','panCard','approved')}> <img src="Image/verifiedDoc.png" alt="" /> </button> 
                                </> :'-'
                            }
                            {
                                documents.panCard ? documents.panCard=='rejected' &&
                                <button className={displayPC == 'cancelPC' ? 'cancelButton' : ''} > <img src="Image/cancelDoc.png" alt="" /> </button> :'-'
                            }
                            {
                                documents.panCard ? documents.panCard=='approved' &&
                                <button className={displayPC == 'verifyPC' ? 'cancelButton' : ''} > <img src="Image/verifiedDoc.png" alt="" /> </button>:'-'
                            }
                        </div>
                    </div>

                    <div className='documentCard'>
                        <div className='docVeri'> Graduation Marksheet</div>
                        <div> <img src="Image/pdf.png" alt="" onClick={()=>fileHandler("graduate")} /> </div>
                        <div> 
                            {
                                documents.graduate ? documents.graduate=='uploaded' &&
                                 <>                             
                                    <button className={displayGM == 'cancelGM' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'verifyGM','graduate','rejected')} > <img src="Image/cancelDoc.png" alt="" /> </button> 
                                    <button className={displayGM == 'verifyGM' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'cancelGM','graduate','approved')}> <img src="Image/verifiedDoc.png" alt="" /> </button> 
                                </> :'-'
                            }
                            {
                                documents.graduate ? documents.graduate=='rejected' &&
                                <button className={displayGM == 'cancelGM' ? 'cancelButton' : ''}  > <img src="Image/cancelDoc.png" alt="" /> </button> :'-'
                            }
                            {
                                documents.graduate ? documents.graduate=='approved' &&
                                <button className={displayGM == 'verifyGM' ? 'cancelButton' : ''} > <img src="Image/verifiedDoc.png" alt="" /> </button> :'-'
                            }
                        </div>
                    </div>

                    <div className='documentCard'>
                        <div className='docVeri'>Senior Secondary Marksheet</div>
                        <div> <img src="Image/pdf.png" alt="" onClick={()=>fileHandler("twelth")} /> </div>
                        <div> 
                            {
                                documents.twelth ? documents.twelth=='uploaded' &&
                                 <>                             
                                    <button className={displaySSM == 'cancelSSM' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'verifySSM','twelth','rejected')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                                    <button className={displaySSM == 'verifySSM' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'cancelSSM','twelth','approved')}> <img src="Image/verifiedDoc.png" alt="" /> </button>  
                                 </> :'-'
                            }
                            {
                                documents.twelth ? documents.twelth=='rejected'  &&
                                <button className={displaySSM == 'cancelSSM' ? 'cancelButton' : ''}> <img src="Image/cancelDoc.png" alt="" /> </button> :'-'
                            }
                            {
                                documents.twelth ? documents.twelth=='approved' &&
                                <button className={displaySSM == 'verifySSM' ? 'cancelButton' : ''}> <img src="Image/verifiedDoc.png" alt="" /> </button> :'-'
                            }
                           
                        </div>
                    </div>

                    <div className='documentCard'>
                        <div className='docVeri'>Secondary Marksheet</div>
                        <div> <img src="Image/pdf.png" alt="" onClick={()=>fileHandler("tenth")} /> </div>
                        <div> 
                            {
                                 documents.tenth ? documents.tenth=='uploaded' &&
                                 <>
                                    <button className={displaySM == 'cancelSM' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'verifySM','tenth','rejected')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                                    <button className={displaySM == 'verifySM' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'cancelSM','tenth','approved')} > <img src="Image/verifiedDoc.png" alt="" /> </button> 
                                 </>:'-'
                            }
                            {
                                 documents.tenth ? documents.tenth=='rejected' &&
                                    <button className={displaySM == 'cancelSM' ? 'cancelButton' : ''}> <img src="Image/cancelDoc.png" alt="" /> </button> :'-'
                                    
                            }
                            {
                                documents.tenth ? documents.tenth=='approved' &&
                                <button className={displaySM == 'verifySM' ? 'cancelButton' : ''}> <img src="Image/verifiedDoc.png" alt="" /> </button>   :'-'
                            }
                             
                        </div>
                    </div>

                    <div className='documentCard'>
                        <div className='docVeri'>Resume</div>
                        <div> <img src="Image/pdf.png" alt="" onClick={()=>fileHandler("resume")} /> </div>
                        <div>
                            {
                                documents.resume ? documents.resume=='uploaded' &&
                                <>
                                    <button className={displayResume == 'cancelResume' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'verifyResume','resume','rejected')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                                    <button className={displayResume == 'verifyResume' ? 'cancelButton' : ''} onClick={(e)=>handleApprove(e,'cancelResume','resume','approved')}> <img src="Image/verifiedDoc.png" alt="" /> </button>
                                </> : '-'
                            } 
                            {
                                documents.resume ? documents.resume=='rejected' &&
                                <button className={displayResume == 'cancelResume' ? 'cancelButton' : ''}> <img src="Image/cancelDoc.png" alt="" /> </button> : '-'
                            } 
                            {
                                documents.resume ? documents.resume=='approved' &&
                                <button className={displayResume == 'verifyResume' ? 'cancelButton' : ''}> <img src="Image/verifiedDoc.png" alt="" /> </button> :'-'
                            }  
                        </div>
                    </div>
                </div>
                {
                    data.docStatus=='pending' ? (documents.relievingLetter=='approved' && documents.aadharCard=='approved' && documents.panCard=='approved' && documents.graduate=='approved' && documents.twelth=='approved' && documents.tenth=='approved' && documents.resume=='approved') ?
                    <button className='btn approve-btn' onClick={approveAllDocument}>{btnValue}</button> :
                    <button className='btn approve-btn' disabled>Approve all</button>
                    :
                    <button className='btn approve-btn' disabled>Approved</button>
                }
                
                </>}
        </div>
    </>
  )
}

export default DocumentDetails