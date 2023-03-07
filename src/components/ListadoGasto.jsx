import Gasto from "./Gasto"

const ListadoGasto = ({
   gastos, 
   setGastoEditar, 
   eliminarGasto, 
   filtro, 
   gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? 'Gastos': ''}</h2>

      {filtro ? (
         <>
         <h2>{gastosFiltrados.length ? 'Gastos filtrados':'No ha registrado ningun gasto en esta categoria'}</h2>
         {gastosFiltrados.map( gasto =>
            <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            />
         )}
         </>
      ): (
         <>
         <h2>{gastos.length ? '':'No ha registrado ningun gasto'}</h2>
          {gastos.map( gasto =>
            <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            />
         )}
         </>
        
      )}
      
    </div>
  )
}

export default ListadoGasto
