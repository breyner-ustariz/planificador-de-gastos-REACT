import Gasto from "./Gasto"

const ListadoGasto = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? 'Gastos': 'No a agregado ningun gasto'}</h2>

      {gastos.map( gasto =>
         <Gasto
         key={gasto.id}
         gasto={gasto}
         />
      )}
    </div>
  )
}

export default ListadoGasto
