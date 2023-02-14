import React, { useState } from 'react'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import './AdminDoc.css'

const DocumentDetails = () => {
    const [displayRL, setDisplayRL] = useState();
    const [displayAC, setDisplayAC] = useState();
    const [displayPC, setDisplayPC] = useState();
    const [displayGM, setDisplayGM] = useState();
    const [displaySSM, setDisplaySSM] = useState();
    const [displaySM, setDisplaySM] = useState();
    const [displayResume, setDisplayResume] = useState();



  return (
    <>
        <Sidebar />
        <NavBar />
        <div className='documentDetails'>
            <div className='documentDetailsBg'>
            <h3>Document details about <span>Isha Bam</span> </h3>
            <h6>45678, Web Developer</h6>

            <div className='overallDocumentCard'>

                <div className='documentCard'>
                    <div className='docVeri'>Relieving Letter</div>
                    <div> <img src="Image/pdf.png" alt="" /> </div>
                    <div className='docButton'> 
                        <button className={displayRL == 'cancelRL' ? 'cancelButton' : ''} onClick={() => setDisplayRL('verifyRL')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                        <button className={displayRL == 'verifyRL' ? 'cancelButton' : ''} onClick={() => setDisplayRL('cancelRL')}> <img src="Image/verifiedDoc.png" alt="" /> </button> 
                    </div>
                </div>

                <div className='documentCard'>
                    <div className='docVeri'>Aadhar Card</div>
                    <div> <img src="Image/pdf.png" alt="" /> </div>
                    <div> 
                        <button className={ displayAC == 'cancelAC' ? 'cancelButton ' : '' } onClick={() => setDisplayAC('verifyAC')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                        <button className={ displayAC == 'verifyAC' ? 'cancelButton' : '' } onClick ={() => setDisplayAC('cancelAC')}> <img src="Image/verifiedDoc.png" alt="" /> </button> 
                    </div>
                </div>

                <div className='documentCard'>
                    <div className='docVeri'>Pan Card</div>
                    <div> <img src="Image/pdf.png" alt="" /> </div>
                    <div> 
                        <button className={displayPC == 'cancelPC' ? 'cancelButton' : ''} onClick={() => setDisplayPC('verifyPC')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                        <button className={displayPC == 'verifyPC' ? 'cancelButton' : ''} onClick={() => setDisplayPC('cancelPC')}> <img src="Image/verifiedDoc.png" alt="" /> </button>
                    </div>
                </div>

                <div className='documentCard'>
                    <div className='docVeri'> Graduation Marksheet</div>
                    <div> <img src="Image/pdf.png" alt="" /> </div>
                    <div> 
                        <button className={displayGM == 'cancelGM' ? 'cancelButton' : ''} onClick={() => setDisplayGM('verifyGM')} > <img src="Image/cancelDoc.png" alt="" /> </button> 
                        <button className={displayGM == 'verifyGM' ? 'cancelButton' : ''} onClick={() => setDisplayGM('cancelGM')}> <img src="Image/verifiedDoc.png" alt="" /> </button> 
                    </div>
                </div>

                <div className='documentCard'>
                    <div className='docVeri'>Senior Secondary Marksheet</div>
                    <div> <img src="Image/pdf.png" alt="" /> </div>
                    <div> 
                        <button className={displaySSM == 'cancelSSM' ? 'cancelButton' : ''} onClick={() => setDisplaySSM('verifySSM')} > <img src="Image/cancelDoc.png" alt="" /> </button> 
                        <button className={displaySSM == 'verifySSM' ? 'cancelButton' : ''} onClick= {() => setDisplaySSM('cancelSSM')}> <img src="Image/verifiedDoc.png" alt="" /> </button> 
                    </div>
                </div>

                <div className='documentCard'>
                    <div className='docVeri'>Secondary Marksheet</div>
                    <div> <img src="Image/pdf.png" alt="" /> </div>
                    <div> 
                        <button className={displaySM == 'cancelSM' ? 'cancelButton' : ''} onClick ={() => setDisplaySM('verifySM')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                        <button className={displaySM == 'verifySM' ? 'cancelButton' : ''} onClick = {() => setDisplaySM('cancelSM')} > <img src="Image/verifiedDoc.png" alt="" /> </button> 
                    </div>
                </div>

                <div className='documentCard'>
                    <div className='docVeri'>Resume</div>
                    <div> <img src="Image/pdf.png" alt="" /> </div>
                    <div> 
                        <button className={displayResume == 'cancelResume' ? 'cancelButton' : ''} onClick = {() => setDisplayResume('verifyResume')}> <img src="Image/cancelDoc.png" alt="" /> </button> 
                        <button className={displayResume == 'verifyResume' ? 'cancelButton' : ''} onClick = {() => setDisplayResume('cancelResume')}> <img src="Image/verifiedDoc.png" alt="" /> </button> 
                    </div>
                </div>

            </div>
        </div>
        </div>
    </>
  )
}

export default DocumentDetails