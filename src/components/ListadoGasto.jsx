import Gasto from "./Gasto"

const ListadoGasto = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? 'Gastos': 'No a agregado ningun gasto'}</h2>

      {gastos.map( gasto =>
         <Gasto
         key={gasto.id}
         gasto={gasto}
         setGastoEditar={setGastoEditar}
         eliminarGasto={eliminarGasto}
         />
      )}
    </div>
  )
}

export default ListadoGasto
