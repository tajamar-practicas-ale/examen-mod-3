export const Hero = () => {
  return (
    <div id='hero' className="bg-red-400 rounded-bl-4xl rounded-br-4xl min-h-dvh  flex justify-center items-center">
      <div className="hero__content">
        <div className='text-center text-3xl'>
          <h1 className="hero__title font-[Oswald] mb-2.5 text-8xl">Alexander Rojas</h1>
          <p className="font-[Oswald] font-light text-4xl">Desarrollador full stack</p>
          <div className='hero__btns font-light mt-10 text-xl flex justify-between w-[55%] mx-auto'>
            <a href="./#projects">
              <button className="bg-white px-3 cursor-pointer py-2 w-fit hover:shadow-xl/20 hover:w- transition-shadow duration-200 rounded-full border-2">Proyectos</button>
            </a>
            <a href="">
              <button className="bg-white px-3 cursor-pointer py-2 w-fit hover:shadow-xl/20 hover:w- transition-shadow duration-200 rounded-full border-2">Descargar CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
