import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditForm() {

  const location = useLocation()

   const note = location.state.note

  const [formData, setFormData] = useState({
  title: note.NoteTitle,
  category: note.Category,
  text: note.Note,
  tags: note.Tags
})

 
  

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
                     value={note.NoteTitle }
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
                     value={note.Category}
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
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">

        <button
          className="px-6 py-3 rounded-xl border border-gray-00
                     text-white !bg-red-900"
        >
          Cancel
        </button>

        <button
          className="px-6 py-3 rounded-xl !bg-black
                     text-white font-medium
                    "
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
