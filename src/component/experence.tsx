import  logoPromotec from '../assets/img/logo_promotec.png'
import logoFinanzauto from '../assets/img/logo_finanzauto.png'
import logoJhonDeere from '../assets/img/john_deere.png'
import logoG4s from '../assets/img/logo_g4s.png'

export const Experence = () => {
  return (
    <div className="bg-tree justify-center  text-white pt-3 pb-2 ">
       <h1 className="text-center text-secondaryBackground-100">Mi Experiencia</h1>
       <div className="border-[1px] w-10/12  grid  grid-cols-1  space-x-10 md:grid-cols-3 justify-center mx-auto mt-5 p-3 border-white rounded-md hover:transition-colors hover:border-purple-600">
       <div className="col-span-1 space-y-4"> 
       <h2 className="text-white font-bold">Desarrollador II | Promotec S.A</h2>
        <span className="text-xs">Jun.2021 - oct.2024 -  3 años y 4 meses</span>
        
        <p className='font-semibold'>Descripcion</p>
         
         <p>Desarrollo de Software frontend empresarial.Elaboracion de interfaces de usuarios robustas e interactivas para soluciones internas de la compañia y centralizacion de negocios como servicio al cliente, venta y creditos para vehiculos, manejo y especificaciones de reportes en powerbi.</p>

         <p className='pt-5 font-bold'>Clientes destacados</p>
         <div className='flex justify-center mx-auto  h-28  '>
            <img src={logoPromotec} alt="Promotec" className='w-44 h-44 -mt-10 pl-12' />
            <img src={logoFinanzauto} alt="Finanzauto" className='w-52 h-52 -mt-14' />
            <img src={logoJhonDeere} alt="Finanzauto" className='w-20 h-20 ' />
         </div>
        
         </div>
         <div className='col-span-1  '>
             <h3 className='leading-9  2xl:mx-44 mx-28 font-bold'>Herramientas</h3>
              <ul className='text-sm  2xl:space-y-2  mx-28 2xl:mx-44 '>
                <li>- React</li>
                <li>- TypeScript</li>
                <li>- JavaScript</li>
                <li>- Vite</li>
                <li>- Vitest</li>
                <li>- Figma</li>
                <li>- Git</li>
                <li>- IIS</li>
                <li>- Net aspx</li>
              </ul>
         </div>

         <div className='col-span-1'>
             <h3 className='leading-9 font-bold'>Aportes</h3>
              <ul className='text-sm space-y-5' >
                <li>- Contribución al desarrollo de herramientas con tecnologías modernas (React, typeScript y Javascript)</li>
                <li>- Capacitación para el aprendizaje de nuevas herramienta en el área de ingeniería (React, typeScript y Javascript)</li>
                <li>- Recosntruccion de codigo en aplicaciones obsoletas e inmanejables</li>
                
              </ul>
         </div>
       </div>
       <div className="border-[1px] w-10/12  grid  grid-cols-1  space-x-10 md:grid-cols-3 justify-center mx-auto mt-5 p-3 border-white rounded-md hover:transition-colors hover:border-purple-600">
       <div className="col-span-1 space-y-4"> 
       <h2 className="text-white font-bold">Tecnico DLS | G4S</h2>
        <span className="text-xs">Dic.2014 - Feb.2021 -  6 años y 2 meses</span>
        
        <p className='font-semibold'>Descripcion</p>
         
         <p>Manejo de reportes en bases de datos, manejo de servidores, inspeccion a instalaciones
          con el fin de realizar descarga  de eventos de panel, programar visitas tecnicas para revision de paneles a tecnicos de terreno, reportes de fallos masivos a operadores prestadores de servicio de telefonia
         </p>

        
        
         </div>
         <div className='col-span-1  '>
             <h3 className='leading-9  2xl:mx-44 mx-28 font-bold'>Herramientas</h3>
              <ul className='text-sm  2xl:space-y-2  mx-28 2xl:mx-44 '>
                <li>- Slq server</li>
                <li>- excel</li>
                <li>- Alarmet 360</li>
                <li>- Honeywell</li>
                <li>- Dsc Dls</li>
              </ul>
         </div>

         <div className='col-span-1'>
             <h3 className='leading-9 font-bold'>Aportes</h3>
              <ul className='text-sm space-y-5' >
                <li>- Contribución al las novedades y mejoras en la operacion</li>
                <li>- Capacitación de la utilizacion de los diferentes programas de alarma</li>   
              </ul>

              <p className='pt-5 font-bold'>Clientes destacados</p>
         <div className='flex justify-center mx-auto    '>
            <img src={logoG4s} alt="Promotec" className='w-24 h-24 mt-2 -ml-20 ' />
           
         </div>
         </div>
       </div>
    </div>
  )
}


