// import { useState } from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import { Home } from './pages/Home'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import './styles/App.css'

function App() {

  return (
    <>
      <header className="absolute top-4 left-10 text-2xl font-[Oswald] h-5 ">
        <div className='bg-white flex py-4 px-8 border-2 fixed w-[95%] justify-between shadow-xl rounded-full'>
          <div className="brand">
            <a href="./#hero" className='hover:text-neutral-600 duration-200 transition-colors'>
              <h2>Alexander Rojas</h2>
            </a>
          </div>
          <div className="flex gap-5">
            <a href="./#about" className='hover:text-neutral-600 duration-200 transition-colors'>Sobre mí</a>
            <a href="./#projects" className='hover:text-neutral-600 duration-200 transition-colors'>Proyectos</a>
            <a href="./#contacto" className='hover:text-neutral-600 duration-200 transition-colors'>Contacto</a>
          </div>
        </div>
      </header>
      <main className='main'>
        <Hero />
        <div className='bg-red-400'>
          <About />
          <Projects />
        </div>
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}

export default App
