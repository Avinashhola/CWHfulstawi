import { React, useContext } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext'
import { useEffect } from 'react'

const About = () => {
  const a = useContext(NoteContext)
   useEffect(()=>{
    a.updateion();
  },[])


  
  return (

    <div>this is about <span className='fw-bolder'>{a.first.name}</span> who is in the class <span className='fw-bolder'>{a.first.class}</span></div>
  )
}

export default About