import React from 'react'

import EditIcon from '@mui/icons-material/Edit';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

import EmailIcon from '@mui/icons-material/Email';
import Person2Icon from '@mui/icons-material/Person2';
import GroupIcon from '@mui/icons-material/Group';

import Avatar from '@mui/material/Avatar'



const Card1 = () => {
    return (
        <div>
            <div className="card-group mt-4" style={{maxWidth: 800}}>
                <div className="card">
                    <div className="card-body">
                    <div class="p-3 mb-2 bg-primary-subtle text-emphasis-secondary" >  
                      <h1 className="card-title"><Avatar alt="User" src="/static/images/avatar/1.jpg" />Perfil - Usuário</h1>
                     </div> 
                        <hr />
                        <Person2Icon /><h4><strong>Nome:</strong> Harkar fatak</h4>
                        <GroupIcon /><h4><strong>Sobreome:</strong> Hufuk Lemon</h4>
                        <EmailIcon /><h4><strong>E-mail:</strong> Lemon@hotmail.com</h4>
                    </div>
                </div>
            </div>
            <div className="card-group mt-4" style={{maxWidth: 800}}>
                <div className="card">
                    <div className="card-body">
                    <div class="p-3 mb-2 bg-primary-subtle text-emphasis-secondary" > 
                        <h1 className="card-title">Descrição</h1>
                        <button className="btn btn-primary mx-2" ><EditIcon /></button>
                        <button className="btn btn-danger" disabled={true}><RestoreFromTrashIcon /></button>
                     </div>   
                        <hr />
                        <h4>Sed et libero ligula. Suspendisse potenti. Nulla facilisi. Proin porttitor turpis ac erat auctor pretium. Sed commodo egestas est a auctor. Sed id tempus mauris. Vivamus nec rhoncus justo. </h4>

                    </div>
                </div>
            </div> 
        </div>    
            )
}

            export default Card1
