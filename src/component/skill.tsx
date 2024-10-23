import elementales from '../assets/img/elementales.png'
import lenguajes from '../assets/img/lenguajes.png'
import librerias from '../assets/img/librerias.png'
import boostrap from '../assets/img/logoBoostrap.png'
import vite from '../assets/img/vite.png'

export const Skill = () => {
  return (
    <div className="bg-tree justify-center  text-white pt-3 pb-2">
       <h1 className="text-center text-secondaryBackground-100">Mis habilidades</h1>
       <div className="border-[1px] w-10/12  grid  grid-cols-1  space-y-8 justify-center mx-auto mt-5 p-3 border-white rounded-md hover:transition-colors hover:border-purple-600">
         
          <div>
          <h2 className="text-primary-200 font-medium">Elementales</h2>
          <img src={elementales} alt="Elementales"  className=' h-10 mt-2'/>
          </div>
          <div>
          <h2 className="text-primary-200 font-medium">Lenguajes</h2>
          <img src={lenguajes} alt="Elementales"  className=' h-8 mt-2'/>
          </div>

          <div>
          <h2 className="text-primary-200 font-medium">Frameworks, librerías y software</h2>
          <div className='flex space-x-2'>
          <img src={librerias} alt="Elementales"  className=' h-8 mt-2'/>
          <img src={boostrap} alt="Elementales"  className=' h-8 mt-2'/>
          <img src={vite} alt="Elementales"  className=' h-8 mt-2'/>
          </div>
          </div>
       </div>
       
    </div>
  )
}


