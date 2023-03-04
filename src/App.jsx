import { useState } from 'react'
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

const handleNuevoGasto = ()=>{
   setModal(true)

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
         presupuesto={presupuesto}
         setPresupuesto={setPresupuesto}
         isValidPresupuesto={isValidPresupuesto}
         setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
         <>
         <main>
            <ListadoGasto
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
         />
      )}
    </div>
  )
}

export default App
