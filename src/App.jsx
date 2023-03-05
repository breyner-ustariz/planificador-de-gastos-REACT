import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import iconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers'
import ListadoGasto from './components/ListadoGasto'

function App() {
const [presupuesto, setPresupuesto] = useState(0)
const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
const [modal, setModal] = useState(false)
const [animarModal, setAnimarModal] = useState(false)
const [gastos, setGastos] = useState([])
const [gastoEditar, setGastoEditar] = useState({})

useEffect(() => {
   if (Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
      setAnimarModal(true)
   }, 400);
   }
}, [gastoEditar]);

const handleNuevoGasto = ()=>{
   setModal(true)
   setGastoEditar({})
   setTimeout(() => {
      setAnimarModal(true)
   }, 400);
}

   const guardarGasto = gasto => {
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
      setAnimarModal(false)
      setTimeout(() => {
         setModal(false)
      }, 400);
   }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
      gastos={gastos}
         presupuesto={presupuesto}
         setPresupuesto={setPresupuesto}
         isValidPresupuesto={isValidPresupuesto}
         setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
         <>
         <main>
            <ListadoGasto
            setGastoEditar={setGastoEditar}
            gastos={gastos}
            />
         </main>
         <div className="nuevo-gasto">
            <img src={iconoNuevoGasto} alt="nuevo gasto"
               onClick={handleNuevoGasto}
            />
         </div>
         </>
      )}

      {modal && (
         <Modal 
         setModal={setModal}
         animarModal={animarModal}
         setAnimarModal={setAnimarModal}
         guardarGasto={guardarGasto}
         gastoEditar={gastoEditar}
         />
      )}
    </div>
  )
}

export default App
