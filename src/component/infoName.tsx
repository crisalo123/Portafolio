import imgPerson from '../assets/img/cristian.png'
import { FaGithub , FaLinkedin } from "react-icons/fa";

export const InfoName = () => {
  return (
    <div className="bg-tree justify-center flex space-x-2 border-b-[1px] border-white">
    <div className="w-6/12 h-5/12 mt-10 space-y-3">
    <h1 className="bg-clip-text text-white h-14 text-5xl hover:text-transparent bg-gradient-to-r from-primary-300 to-white font-bold hover: duration-300">
     Cristian Camilo Vargas Ortiz
</h1>



      <h2 className="text-primary-200  bg-clip-text font-semibold text-lg  hover:bg-gradient-to-r from-white to-primary-800 duration-300 ease-in-out">
        Desarrollador Frontend
      </h2>
      <p className="text-white bg-clip-text hover:text-transparent w-9/12 bg-gradient-to-r from-primary-400 to-white  duration-300 ease-in-out">
        Soy una persona que disfruta afrontar y adquirir nuevas competencias en los retos que se presentan,me compromento en el aprendizaje continuo debido a las exigencias constantes y el avance de las tecnologías. 
      </p>
      <div className='flex space-x-3'>
        <a href='https://github.com/crisalo123' target='_blank' rel="noopener noreferrer">
          <FaGithub className='text-white w-6 h-6 hover:text-primary-400 hover:scale-110 transition-transform duration-300 ease-in-out' />
        </a>
        <a href='https://www.linkedin.com/in/cristian-camilo-vargas-ortiz-1a30b31b2/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='text-white w-6 h-6 hover:text-primary-400 hover:scale-110 transition-transform duration-300 ease-in-out' />
        </a>
      </div>
    </div>
    <div>
      <img src={imgPerson} alt="Cristian Vargas" className='h-64 w-64 mt-11 ' />
    </div>
  </div>
  )
}


