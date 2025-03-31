import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink } from 'react-router'
import './App.css'
import Card from './Component/Card'

function App() {

  return (
    <>
      <body className="bg-gradient-to-b from-gray-700 to-black min-h-screen">

        <div className="w-full p-8 font-bold bg-black flex flex-auto items-baseline gap-8 mb-10° ">

          <span className="text-2xl text-white w-250">Cosmo Date</span>
          <NavLink to="/Planets" className="text-9 text-white hover:text-purple-400 " end> Planetas </NavLink>

        </div>

        <section className="ml-5 z-10 py-24 md:py-32">
          <section className="max-w-3xl space-y-5">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Explorando el Universo a través de los Datos
            </h1>
            <p className="text-xl text-slate-300">
              Descubre información fascinante sobre planetas, estrellas, galaxias y más en nuestra plataforma de
              visualización de datos espaciales.
            </p>
            <section className="flex flex-col sm:flex-row gap-15 pt-10">
              <button className="bg-purple-600 hover:bg-purple-950 transition delay-200 duration-300 ease-in-out hover:-translate-y-2 rounded-xl text-white w-40 ">Explorar Datos</button>
              <button variant="outline" className=" w-40 bg-white text-purple-700 hover:bg-purple-950 transition hover:text-white delay-200 duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
                Ver Visualizaciones
              </button>

            </section>
          </section>
        </section>
        
        
        <section className='mt-10 flex flex-col justify-between ml-5 items-start h-0.5 '>

          <h2 className="sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 font-bold mb-2">Datos Destacados</h2>
          <p className="text-slate-300">Explora los datos más recientes e interesantes del cosmos</p>

        </section>
        <section className='grid md:grid-cols-3 w-6xl gap-10 ml-5 m-55'>
          <Card />
        </section>

      </body>



    </>
  )
}

export default App
