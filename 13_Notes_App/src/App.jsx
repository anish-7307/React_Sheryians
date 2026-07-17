import React from 'react'
import {useState} from 'react'
import { X } from 'lucide-react';

const App = () => {
  
  const[title, setTitle]=useState('')
  const[details, setDetails]=useState('')

  const [task,setTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    // console.log(title);
    // console.log(details);

    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    
    // console.log(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
     const copyTask=[...task]
     copyTask.splice(idx,1)
     setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex gap-4 lg:w-1/2 item-start p-10 flex-col' >
              <h1 className='text-3xl font-bold'>Add Notes</h1>
              <input 
                type="text" 
                placeholder='Enter Notes Heading' 
                className='px-5 py-2 w-full border-2 rounded'
                value={title}
                onChange={(e)=>{
                  setTitle(e.target.value)
                }} 
              />
              <textarea 
                type="text" 
                placeholder='Write Details' 
                className='px-5 py-2 w-full h-60 border-2 rounded'
                value={details}
                onChange={(e)=>{
                  setDetails(e.target.value)
                }}
              />
              <button className='bg-white text-black px-5 py-2 w-full rounded' >Add Notes</button>
        </form> 
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
            <h1 className='text-3xl font-bold'>Your Notes</h1>
            <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-[90%]'>
              {
                task.map(function(elem ,idx){
                  return <div key={idx} className="flex justify-between flex-col items-start relative h-72 w-56 rounded-xl text-black py-15 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaX_oeUqgWZqqmIT2HNNT9QZEGyn67Ek53nKNLVvKJw&s=10')] bg-cover bg-no-repeat bg-center px-8 ">
                    <div>
                      <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
                      <p className="mt-4 leading-tight font-medium text-gray-500">{elem.details}</p>
                    </div>
                    <button
                      onClick={() => deleteNote(idx)}
                      className="w-full bg-red-400 py-1 text-xs rounded font-bold text-white"
                    >Delete</button>
                  </div>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default App
