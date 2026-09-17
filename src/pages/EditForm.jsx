import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function EditForm() {

  const location = useLocation()

   const note = location.state.note

  const [formData, setFormData] = useState({
  NoteTitle: note.NoteTitle,
  Category: note.Category,
  Note: note.Note,
  Tags: note.Tags,
  id: note._id,
})

//  const [editNote,setEditNote]=useState({
//     Category,
//     Note,
//     NoteTitle,
//     Tags,
//     
//   })

const handleEdit = async()=>{
  try {
    const response = await axios.put('http://localhost:3000/api/updateNote',formData)
    console.log(response)

    if(response.status===201){
      alert("Updated")
      
    }

  } catch (error) {
    console.log(error)
  }
}

 
  

  return (
    <>
    
    <div className="min-h-screen bg-gray-50 p-5 sm:p-8">
  <div className="max-w-2xl mx-auto">

    {/* Form Card */}
    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Update Note
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Edit your note details below
        </p>
      </div>

      {/* Note Title */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Note Title
        </label>

        <input
          type="text"
          placeholder="Enter note title"
          className="w-full border border-gray-300 rounded-xl px-4 py-3
                     outline-none focus:ring-2 focus:ring-yellow-300
                     focus:border-yellow-400"
                     value={formData.NoteTitle }
                      onChange={(e) =>
    setFormData({
      ...formData,
      NoteTitle: e.target.value
    })
  }
        />
      </div>

      {/* Category */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>

        <input
          type="text"
          placeholder="Enter category"
          className="w-full border border-gray-300 rounded-xl px-4 py-3
                     outline-none focus:ring-2 focus:ring-yellow-300
                     focus:border-yellow-400"
                     value={formData.Category}
                     onChange={(e) =>
    setFormData({
      ...formData,
      Category: e.target.value
    })
  }
        />
      </div>

      {/* Note */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Note
        </label>

        <textarea
          rows="6"
          placeholder="Write your note..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3
                     outline-none resize-none
                     focus:ring-2 focus:ring-yellow-300
                     focus:border-yellow-400"
                     value={formData.Note}
                     onChange={(e) =>
    setFormData({
      ...formData,
      Note: e.target.value
    })
  }
                     
                     
        ></textarea>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>

        <input
          type="text"
          placeholder="Enter tags"
          className="w-full border border-gray-300 rounded-xl px-4 py-3
                     outline-none focus:ring-2 focus:ring-yellow-300
                     focus:border-yellow-400"
                     value={formData.Tags}
                         onChange={(e) =>
    setFormData({
      ...formData,
      Tags: e.target.value
    })
  }
                 
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">

        <Link to={'/'}>
         <button
          className="px-6 py-3 rounded-xl border border-gray-00
                     text-white !bg-red-900"
        >
          Cancel
        </button>
        </Link>

       

        <button
          className="px-6 py-3 rounded-xl !bg-black
                     text-white font-medium
                    "
                    onClick={handleEdit}
        >
          Update Note
        </button>

      </div>

    </div>
  </div>
</div>
    
    </>
  );
}

export default EditForm;
