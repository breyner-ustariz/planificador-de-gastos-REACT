import { useState } from 'react'
import cerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

   const [nombre, setNombre] = useState('')
   const [cantidad, setCantidad] = useState('')
   const [categoria, setCategoria] = useState('')
   const ocultarModal = ()=> {
      setAnimarModal(false)
      setTimeout(() => {
         setModal(false)
         
      }, 400);
   }
  return (
    <div className="modal">
      <div className='cerrar-modal'>
         <img src={cerrarBtn} alt="icono cerrar modal" 
            onClick={ocultarModal}
         />
      </div>

      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
         <legend>Nuevo Gasto</legend>

         <div className='campo'>
            <label htmlFor="nombre">Nombre Gasto</label>
            <input type="text" 
            id='nombre'
            placeholder='Añade el nombre del gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}/>
         </div>
         <div className='campo'>
            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" 
            id='cantidad'
            placeholder='monto'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}/>
         </div>
         <div className='campo'>
            <label htmlFor="categoria">Categoria</label>
            <select name="" id="categoria"
            value={cantidad}
            onChange={e => setCantidad(e.target.value)}
            >
               <option value="">-- Seleccione --</option>
               <option value="ahorro">-- Ahorro --</option>
               <option value="comida">-- Comida --</option>
               <option value="casa">-- Casa --</option>
               <option value="gastos">-- Gastos Varios --</option>
               <option value="ocio">-- Ocio --</option>
               <option value="salud">-- Salud --</option>
               <option value="suscripciones">-- Suscribciones --</option>
            </select>
         </div>
         <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  )
}

export default Modal