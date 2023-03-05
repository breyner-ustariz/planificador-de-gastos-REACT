import {
   LeadingActions,
   SwipeableList,
   SwipeableListItem,
   SwipeAction,
   TrailingActions

} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import{formatearFecha} from '../helpers'
// {iconos}
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
   ahorro : iconoAhorro,
   casa : iconoCasa,
   comida : iconoComida,
   gastos : iconoGastos,
   ocio : iconoOcio,
   salud : iconoSalud,
   suscripciones :iconoSuscripciones 
}
const Gasto = ({gasto}) => {

   const leadingActions = ()=>(
      <LeadingActions>
         <SwipeAction onClick={()=> console.log('editar..')}>
            Editar
         </SwipeAction>
      </LeadingActions>
   )
   const trailingActions = ()=>(
      <TrailingActions>
         <SwipeAction onClick={()=>console.log('Eliminar')}>
            Eliminar
         </SwipeAction>
      </TrailingActions>
   )
  return (
   <SwipeableList>
      <SwipeableListItem 
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      >
    <div className="gasto sombra">
      <div className="contenido-gasto">
         <img src={diccionarioIconos[gasto.categoria]} alt="icono gasto"
         
         />
         <div className="descripcion-gasto">
            <p className="categoria">{gasto.categoria}</p>
            <p className="nombre">{gasto.nombre}</p>
            <p className="fecha-gasto">
               Agregado el: 
               <span> {formatearFecha(gasto.fecha)}</span>
            </p>
         </div>
      </div>
            <p className="cantidad-gasto">$ {gasto.cantidad}</p>
    </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto
