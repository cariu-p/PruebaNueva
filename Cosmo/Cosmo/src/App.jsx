import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink } from 'react-router'
import './App.css'
import Card from './Component/Card'

function App() {

  const cards = [
    {
      txt: "Marte",
   
    },
   
    
  ];

  return (
    <>
      <body className="bg-gradient-to-b from-gray-700 to-black min-h-screen">

        <div className="w-full p-5 bg-black flex flex-auto items-baseline gap-8 mb-10° ">

          <span className="text-2xl text-white w-250 ">Cosmo Date</span>
          <NavLink to="/Planets" className="text-9 text-white hover:text-purple-400 " end> Planetas </NavLink>

        </div>

        <section className='grid md:grid-cols-3 w-4/8 gap-8 ml-5 m-55'>
          {cards.map(function (card) {

            return (
              <Card key={card.id} txt={card.txt}></Card>
            )

          })}
        </section>

      </body>



    </>
  )
}

export default App
