import React, { useState } from 'react'
import './Document.css'
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';

const Document = () => {
  const [relievingLetter, setRelievingLetter] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const changeHandler = () => {
    setIsDisabled(!isDisabled)
  }

  return (
    <>
        <Sidebar />
        <NavBar />
        <div className='document'>
            <h2>Hey, Isha Bam!</h2>
            <p>Please upload your documents.</p>
            <div className='documentClass'>
              <form action="">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"> <img src="Image/file.png" alt="" /> Document Name</th>
                    <th scope="col"> <img src="Image/upload.png " alt="" /> Upload</th>
                    <th scope="col"> <img src="Image/attach.png" alt="" /> Attach</th>
                    <th scope="col"> <img src="Image/status.png" alt="" /> Status</th>
                    <th scope="col"> <img src="Image/last.png" alt="" /> Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">  Relieving Letter</th>
                    <td> <input type="file" required /> </td>
                    <td> <button>Upload</button> </td>
                    <td> <div className='status' style={{'color' : ' #084cdf'}}>Pending</div> </td>
                    <td>  <div className='lastDate'>06-02-2023</div> </td>
                  </tr>
                  <tr>
                    <th scope="row">  Aadhar Card</th>
                    <td><input type="file" required /></td>
                    <td><button>Upload</button></td>
                    <td> <div className='status' style={{'color' : 'green'}}>Uploaded</div></td>
                    <td>  <div className='lastDate'>06-02-2023</div> </td>
                  </tr>
                  <tr>
                    <th scope="row">  Pan Card</th>
                    <td><input type="file" required /></td>
                    <td><button>Upload</button></td>
                    <td> <div className='status' style={{'color' : 'red'}}>Failed</div> </td>
                    <td>  <div className='lastDate'>06-02-2023</div> </td>
                  </tr>

                  <tr>
                    <th scope="row">  Graduation Marksheet</th>
                    <td><input type="file" required/></td>
                    <td><button>Upload</button></td>
                    <td> <div className='status' style={{'color' : ' #084cdf'}}>Pending</div> </td>
                    <td>  <div className='lastDate'>06-02-2023</div> </td>
                  </tr>

                  <tr>
                    <th scope="row">  Senior Secondary Marksheet</th>
                    <td><input type="file" required /></td>
                    <td><button>Upload</button></td>
                    <td> <div className='status' style={{'color' : ' #084cdf'}}>Pending</div> </td>
                    <td>  <div className='lastDate'>06-02-2023</div> </td>
                  </tr>

                  <tr>
                    <th scope="row">  Secondary Marksheet</th>
                    <td><input type="file" required/></td>
                    <td><button>Upload</button></td>
                    <td> <div className='status' style={{'color' : ' #084cdf'}}>Pending</div> </td>
                    <td>  <div className='lastDate'>06-02-2023</div> </td>
                  </tr>

                  <tr>
                    <th scope="row">  Resume</th>
                    <td><input type="file" required/></td>
                    <td><button>Upload</button></td>
                    <td><div className='status' style={{'color' : ' #084cdf'}}>Pending</div> </td>
                    <td>  <div className='lastDate'>06-02-2023</div> </td>
                  </tr>

                </tbody>
              </table>
              {/* <div className={isDisabled ? 'documentSubmitN' : 'documentSubmit'}> */}
              <div className='documentSubmit'>

                <button disabled={isDisabled}> SUBMIT </button>
              </div>
              </form>
            </div>

        </div>
    </>
  )
}

export default Document