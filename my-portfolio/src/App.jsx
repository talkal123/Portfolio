import React from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import SelectedWorks from './Components/SelectedWorksComponents/SelectedWorks'
import Service from './Components/ServicesComponent/Service'

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='max-w-[1100px] p-2 flex flex-col w-full gap-20'>
      <Hero />
      <SelectedWorks />
      <Service />
    </div>
    </div>
  )
}

export default App
