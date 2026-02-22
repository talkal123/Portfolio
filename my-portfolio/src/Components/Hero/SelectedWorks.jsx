import React, { useState } from 'react'
import Card from './SelectedWorksComponents/Card'

const SelectedWorks = () => {
    const [buttonName,setButtonName] = useState("All")

    const buttons = [
        {
            name:"All"
        },
        {
            name:"Real Projects"
        },
        {
            name:"Exploration"
        }
    ]

    
  return (
    <div className='mt-15 p-5'>
        <div className='flex flex-col gap-10'>
            <div className='flex justify-center'>
                <h1 className='text-3xl font-bold'>Selected Works</h1>
            </div>
            <div>
                <div>
                    <ul className='flex gap-2 justify-center'>
                        {buttons.map((button,index) => (
                            <div key={index}>
                                <li 
                                onClick={() => setButtonName(button.name)}
                                className={`text-sm cursor-pointer transition-all ${
                                    button.name === buttonName 
                                    ? 'text-black underline font-semibold' 
                                    : ''
                                }`}
                                >
                                {button.name}
                                </li>                            
                            </div>
                        ))} 
                    </ul>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Card />
            </div>
        </div>
    </div>
  )
}

export default SelectedWorks