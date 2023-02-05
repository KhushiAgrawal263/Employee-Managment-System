import React from 'react'
import './Document.css'
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';

const Document = () => {

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
                    <th scope="col">Status</th>
                    <th scope="col">Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">  Relieving Letter</th>
                    <td> <input type="file" /> </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">  Aadhar Card</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">  Pan Card</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>

                  <tr>
                    <th scope="row">  Graduation Marksheet</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>

                  <tr>
                    <th scope="row">  Senior Secondary Marksheet</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>

                  <tr>
                    <th scope="row">  Secondary Marksheet</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>

                  <tr>
                    <th scope="row">  Resume</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>

                </tbody>
              </table>
              </form>
            </div>

        </div>
    </>
  )
}

export default Document