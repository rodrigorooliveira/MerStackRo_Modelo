import React, { useState } from 'react';


import EditIcon from '@mui/icons-material/Edit';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { NavLink } from 'react-router-dom';



const Home = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata)

  const getpdata = async (e) => {
    e.preventDefault();

    

    const res = await fetch("/register", {
        method: "GET",
        headers: {
            "content-Type": "application/json"
        },
          
     });
    
    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
        alert("error");
        console.log("error ")
    } else {
          setUserdata(data);
          console.log("get data");
    }
}


  return (
    <div className="mt-4">
      <div className="container">
        <div className="add_btn mt-2">
          <NavLink className="btn btn-secondary" to="/register">Cadastrar</NavLink>
          <hr />
          <div class="p-3 mb-2 bg-primary-subtle text-emphasis-secondary" >
          <table className="table" >
            <thead>
              <tr className="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>910909090</td>
                <td className="d-flex justify-content-between">
                  <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                  <button className="btn btn-primary"><EditIcon /></button>
                  <button className="btn btn-danger"><RestoreFromTrashIcon /></button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>9109023232</td>
                <td  className="d-flex justify-content-between">
                  <button className="btn btn-success" ><RemoveRedEyeIcon /></button>
                  <button className="btn btn-primary"><EditIcon /></button>
                  <button className="btn btn-danger"><RestoreFromTrashIcon /></button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td> the Bird</td>
                <td>Larry@hotmail.com</td>
                <td>9109023232</td>
                <td  className="d-flex justify-content-between">
                  <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                  <button className="btn btn-primary"><EditIcon /></button>
                  <button className="btn btn-danger"><RestoreFromTrashIcon /></button>
                </td>
              </tr>
            </tbody>
          </table>
         </div> 
        </div>
      </div>

    </div>
  )
}

export default Home
