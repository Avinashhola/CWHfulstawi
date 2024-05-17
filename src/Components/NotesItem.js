import React, { useContext,useState } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'

const NotesItem = (props) => {

    const {deleteNote}= useContext(NoteContext)

    const { usingProps } = props
    const delteOvrClick=(e)=>{
        e.preventDefault();
        deleteNote(usingProps.id)
    }
    return (
        <div className='col-md-3 m-3'>
            <div className='card shadow p-3 mb-5 bg-body rounded ' >
                <h5>{usingProps.title}</h5>
                <p>{usingProps.user} ....</p>
                <p>{usingProps.description}  <br/>       <span className='fs-6 fst-italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quae sed eum suscipit. Porro non consequuntur quos ad eius provident consectetur voluptas reprehenderit doloribus nihil accusamus alias cupiditate, ratione quo!</span></p>
                <div className='flex justify-space-between'>
                    <i className="fa-sharp fa-solid fa-trash mx-2"   onClick={delteOvrClick}></i>
                    <i class="fa-solid fa-file-pen mx-2"></i>
                    {/* <i className="fa-sharp fa-solid fa-circle-down mx-3"></i> */}
                </div>

            </div>
        </div>
    )
}

export default NotesItem 