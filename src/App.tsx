
import {  useRef} from 'react'
import './App.css'
import { Experence, InfoName } from './component'
import { Skill } from './component/skill'


function App() {   

 
  const skillRef = useRef<HTMLDivElement | null>(null) 
 const experienceRef = useRef<HTMLDivElement | null>(null)

  
  const handleChangueSkill = () =>{
        
    if(skillRef.current){
      skillRef.current.scrollIntoView({behavior: 'smooth'})
    }

  }

  const hadleChangueExperience = () => {
    if(experienceRef.current){
      experienceRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }
   


  return (  
    <div >
     <InfoName />
     <div className='bg-tree p-3 flex text-center text-white  justify-center space-x-6'>
      <p  className='hover:cursor-pointer' onClick={hadleChangueExperience}>Experiencia  </p>
      <p  className='hover:cursor-pointer' onClick={handleChangueSkill}>Habilidades  </p>
      <a href='../public/pdf/Hoja_de_vida.pdf' target='_blank' rel="noopener noreferrer">
      <p className='bg-secondaryBackground rounded-md text-tree pl-1 pr-1 hover:bg-secondaryBackground-100 hover:cursor-pointer'> Mi CV</p>
      </a>
     </div> 
     <div ref={experienceRef}>
     <Experence/>
     </div>
     
     <div ref={skillRef}>
     <Skill />
     </div>
    </div>
  )
}

export default App
