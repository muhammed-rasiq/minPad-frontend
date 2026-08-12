import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import AddNote from './pages/AddNote'

function App() {
  

  return (
    <>
     

    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/addNotes' element={<AddNote/>}/>
    </Routes>


    
    </>
  )
}

export default App
