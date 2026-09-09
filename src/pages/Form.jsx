import React from 'react';
import { Search, Plus, Trash2, Edit3,  } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function Form() {

  const [getAllNotes,setGetAllNotes]=useState([])
  // const [editNote,setEditNote]=useState({
  //   Category,
  //   Note,
  //   NoteTitle,
  //   Tags
  // })

  const handleGetAllNotes= async()=>{

    try {
      const response = await axios.get('http://localhost:3000/api/getAllNotes')
      setGetAllNotes(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }


  }

  const handleEditNotes = async()=>{

    try {
      const response = await axios.post('http://localhost:3000/api/updateNote')
    } catch (error) {
      console.log(error)
    }


  }

  useEffect(()=>{
    
    handleGetAllNotes()
  },[])

  return (
   <>

  <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold text-slate-800">
            📝 My Notes
          </h1>

          <Link to={'/addNotes'}>
          <button className="flex items-center gap-2 !bg-blue-900  text-white px-5 py-3 rounded-xl shadow-lg transition">
                  
            Add Note
          </button>
          </Link>

          
        </div>

        {/* Search */}
        <div className="relative mt-8">
          <Search
            className="absolute left-4 top-3.5 text-gray-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white shadow-md outline-none border focus:border-blue-500"
          />
        </div>

        {/* Notes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 ">

          {/* Card */}
         

          {
            getAllNotes.length>0?
            getAllNotes.map((item)=>(

               <div key={item._id} className="bg-yellow-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition overflow-y-scroll">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">
               {item.NoteTitle}
              </h2>

              <div className="flex gap-2">
                <Link to={'/editNotes'}>

                 <button className="text-blue-600 hover:text-blue-800">
                  <Edit3 size={18} />
                </button>

                </Link>
               

                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

             <p className="text-gray-700 mt-3 text-sm leading-6">
             {item.Category}
            </p>

            <p className="text-gray-700 mt-3 text-sm leading-6">
             {item.Note}
            </p>

            <p className="text-xs text-gray-500 mt-6">
              {item.Tags}
            </p>
          </div>

            )):'no notes'
          }

          

        </div>
      </div>
    </div>
   
   </>
  );
}

export default Form;
