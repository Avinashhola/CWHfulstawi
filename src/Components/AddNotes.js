import React, { useContext,useState } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'

const AddNotes = () => {

const b= useContext(NoteContext)
const {addNote, mode, toggleMode}  = b 

const [firstAdd, setfirstAdd] = useState({title:"", description:"", tag:"default"})

const onChange=(e)=>{
    setfirstAdd({...firstAdd, [e.target.name]:e.target.value})
}
const addOverClick=(e)=>{
    e.preventDefault();

    addNote(firstAdd.title, firstAdd.description)
}
    return (
        <>
            <h2 className ={`text-${mode === "light"? 'black':'white'} m-4 ` }>Add a Note</h2>

            <form className={`shadow p-3 mb-5  rounded bg-${mode === "light"? 'light':'899499'} text-${mode === "light"? 'black':'white'}`}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description"  name="description" onChange={onChange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={addOverClick}>AddOver</button>
                

            </form>
        </>

    )
}

export default AddNotes