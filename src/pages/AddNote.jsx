import React from 'react';
import { useState } from 'react';
import axios from 'axios'
function AddNote() {

  const [addNotesData, setAddNotesData]=useState({
    NoteTitle:"",
    Category:"",
    Note:"",
    Tags:""

  })

  const handleAddNotes = async(e)=>{
    e.preventDefault();

    try {

      if(!addNotesData.Note){
        alert("Please add note")
        return
      }

      const response = await axios.post('http://localhost:3000/api/addNotes',
      addNotesData,
)


    console.log(response.data)
      
    } catch (error) {
       console.log(error)

    }

    


  }

  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-gray-900">
            Add New Note
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create a new note and keep your thoughts organized.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5"   onSubmit={handleAddNotes}>
          
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Note Title
            </label>

            <input
              type="text"
              placeholder="Enter note title"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
              outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-500
              text-sm transition"
              value={addNotesData.NoteTitle}
              onChange={(e)=>setAddNotesData({...addNotesData,NoteTitle:e.target.value})}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>

            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-300
              outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-500
              text-sm bg-white transition"
               value={addNotesData.Category}
              onChange={(e)=>setAddNotesData({...addNotesData,Category:e.target.value})}
            >
              <option value="">Select category</option>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="study">Study</option>
              <option value="ideas">Ideas</option>
            </select>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Note
            </label>

            <textarea
              rows="7"
              placeholder="Write your note here..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300
              outline-none resize-none focus:ring-2 focus:ring-black/10
              focus:border-gray-500 text-sm transition"
               value={addNotesData.Note}
              onChange={(e)=>setAddNotesData({...addNotesData,Note:e.target.value})}
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>

            <input
              type="text"
              placeholder="e.g. react, javascript, learning"
              className="w-full px-4 py-3 rounded-xl border border-gray-300
              outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-500
              text-sm transition"
               value={addNotesData.Tags}
              onChange={(e)=>setAddNotesData({...addNotesData,Tags:e.target.value})}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-3">
            <button
              type="button"
              className="px-5 py-3 rounded-xl border border-gray-300
              text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-black text-white
              text-sm font-medium hover:bg-gray-800 transition"
             
            >
              Add Note
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddNote;
