
function Cuadro(props) {
  const { imagen, className, fase, estadoImagen, duracion } = props

  return (
    <div 
      className={
        `relative h-full ${className} transition-all ${duracion} [transform-style:preserve-3d]
        ${estadoImagen ? '[transform:rotateY(0deg)]' : '[transform:rotateY(180deg)]'}`
      }
    >
      <img 
        className={`h-full w-full absolute inset-0`}
        src={imagen[fase]}
      />
      <div className="h-full absolute inset-0 bg-white [transform:translateZ(-1px)]">
      
      </div>
    </div>
  )
}

export default Cuadro