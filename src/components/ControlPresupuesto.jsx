import {useState,useEffect} from "react";
import {CircularProgressbar, buildStyles} from  'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos,setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

   const [porcentaje, setPorcentaje] = useState(0)
   const [disponible, setDisponible] = useState(0)
   const [gastado, setGastado] = useState(0)
   useEffect(() => {
      const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0)
      const totalDisponible = presupuesto - totalGastado

      const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(0)
     
      setGastado(totalGastado)
      setDisponible(totalDisponible)
      setTimeout(() => {
         setPorcentaje(nuevoPorcentaje)
      }, 800);

   }, [gastos]);
   const formatearCantidad = (cantidad)=> {
      return cantidad.toLocaleString('es-ES', {
         style: 'currency',
         currency: 'COP'
      })
   }
   const handleResetApp = ()=>{
      const resultado = confirm('¿ Seguro que quieres reiniciar presupuestos y gastos ?')
      if (resultado){
         setGastos([])
         setPresupuesto(0)
         setIsValidPresupuesto(false)
      }
   }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
        styles={buildStyles({
         strokeLinecap: 'butt',
         pathColor: porcentaje > 100 ? '#dc2626': '#3b82f4',
         trailColor: "#f5f5f5",
         textColor: porcentaje > 100 ? '#dc2626': '#3b82f4'
        })}
        value={porcentaje}
        text={`${porcentaje} % Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
         <button className="reset-app"
         type="button"
         onClick={handleResetApp}>
            Resetear App
         </button>
         <p>
            <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
         </p>
         <p className={`${disponible < 0 ? 'negativo':''}`}>
            <span>Disponible: </span>{formatearCantidad(disponible)}
         </p>
         <p>
            <span>Gastado: </span>{formatearCantidad(gastado)}
         </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
