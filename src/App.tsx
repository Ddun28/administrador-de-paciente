import { ToastContainer } from "react-toastify"
import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"


function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:2/3 md:mx-auto">
          Seguimientos de Pacientes {''}
          <span className="text-indigo-700">Veterianarias</span>
        </h1>
        <div className="mt-12 md:flex">
            <PatientForm/>
            <PatientList/>
        </div>
      </div>

      <ToastContainer/>
    </>
  )
}

export default App
