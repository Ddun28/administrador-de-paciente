import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}
export default function PatientDetails({patient} : PatientDetailsProps) {

   const deletePatient = usePatientStore((state) => state.deletePatient)
   const getPatientById = usePatientStore((state) => state.getPatientById)

   const handleClick = () => {
    deletePatient(patient.id)
    toast('Paciente Eliminado', {
        type: 'error'
    })
   }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

       <PatientDetailItem label="ID" data={patient.id}/>
       <PatientDetailItem label="Nombre" data={patient.name}/>
       <PatientDetailItem label="Propietario" data={patient.caretaker}/>
       <PatientDetailItem label="Email" data={patient.email}/>
       <PatientDetailItem label="Fecha de Alta" data={patient.date.toString()}/>
       <PatientDetailItem label="Sintomas" data={patient.symptoms}/>

       <div className="flex flex-col gap-3 md:flex-row justify-between mt-10">
        <button 
        onClick={() => getPatientById(patient.id)}
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
            Editar
        </button>
        <button 
        onClick={handleClick}
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
            Eliminar
        </button>
       </div>
    </div>
  )
}
