import React from 'react';
<<<<<<< HEAD
import { Search, Plus, Trash2, Edit3,  } from "lucide-react";
import { Link } from 'react-router-dom';
=======
import { Search, Plus, Trash2, Edit3 } from "lucide-react";
>>>>>>> f260b80361d22d462eac15fedc49bb9a0fc3118c


function Form() {
  return (
   <>

  <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold text-slate-800">
            📝 My Notes
          </h1>

<<<<<<< HEAD
          <Link to={'/addNotes'}>
=======
>>>>>>> f260b80361d22d462eac15fedc49bb9a0fc3118c
          <button className="flex items-center gap-2 !bg-blue-900  text-white px-5 py-3 rounded-xl shadow-lg transition">
                  
            Add Note
          </button>
<<<<<<< HEAD
          </Link>

          
=======
>>>>>>> f260b80361d22d462eac15fedc49bb9a0fc3118c
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">

          {/* Card */}
          <div className="bg-yellow-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">
                React Learning
              </h2>

              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit3 size={18} />
                </button>

                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mt-3 text-sm leading-6">
              Learn Components, Props, State, Hooks,
              React Router and Redux Toolkit.
            </p>

            <p className="text-xs text-gray-500 mt-6">
              30 July 2026
            </p>
          </div>

          {/* Card */}
          <div className="bg-green-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">
                Interview
              </h2>

              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit3 size={18} />
                </button>

                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mt-3 text-sm leading-6">
              Prepare React interview questions and
              practice DSA daily.
            </p>

            <p className="text-xs text-gray-500 mt-6">
              29 July 2026
            </p>
          </div>

          {/* Card */}
          <div className="bg-pink-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">
                Shopping
              </h2>

              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit3 size={18} />
                </button>

                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mt-3 text-sm leading-6">
              Buy Laptop Stand, Mouse,
              Keyboard and USB Hub.
            </p>

            <p className="text-xs text-gray-500 mt-6">
              28 July 2026
            </p>
          </div>

          {/* Card */}
          <div className="bg-blue-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">
                Daily Goals
              </h2>

              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit3 size={18} />
                </button>

                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mt-3 text-sm leading-6">
              Complete React Project,
              Apply for Jobs,
              Solve 2 LeetCode Problems.
            </p>

            <p className="text-xs text-gray-500 mt-6">
              Today
            </p>
          </div>

        </div>
      </div>
    </div>
   
   </>
  );
}

export default Form;
