import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './pages/Form'
import AddNote from './pages/AddNote'
import EditForm from './pages/EditForm'

function App() {
  

  return (
    <>
     

    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/addNotes' element={<AddNote/>}/>
      <Route path='/editNotes' element={<EditForm/>}/>
      
    </Routes>


    
    </>
  )
}

export default App
